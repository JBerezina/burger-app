import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{
    state={
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error:false
    }

    componentDidMount() {
        axios.get('https://react-my-burger-1f756-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error =>{
                this.setState({error: true});
            });
    }

    updatePurchaseState(ingredients){
        const sum=Object.keys(ingredients)
            .map(igKey =>{
                return ingredients[igKey]
            })
            .reduce((sum,el) => {
                return sum+el;
            }, 0);
        this.setState({purchasable: sum >0});
    }

    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCounted =oldCount+1;

        console.log(updatedCounted)

        const updatedIngredients ={
            ...this.state.ingredients
        };

        updatedIngredients[type]=updatedCounted;
        console.log(updatedIngredients)
        //update
        const priceAddition=INGREDIENT_PRICES[type];
        console.log(priceAddition)
        const oldPrice = this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        console.log(newPrice)

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCounted =oldCount-1;

        console.log(updatedCounted)

        const updatedIngredients ={
            ...this.state.ingredients
        };

        updatedIngredients[type]=updatedCounted;
        console.log(updatedIngredients)
        //update
        const priceDeduction=INGREDIENT_PRICES[type];

        const oldPrice = this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        console.log(newPrice)

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler=()=>{
        this.setState({ purchasing: true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing: false});
    }

    purchaseContinueHandler =() =>{
        //alert("You continue!");
        this.setState({loading: true});
        const order={
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name: 'Yulia Berezina',
                address:{
                    street: 'Monterey 4434',
                    zipCode: '23333',
                    country: 'Jordan'
                },
                email: 'testemaim@gmail.com',
            },
            deliverMethod: 'fastest'
        }
        axios.post('/orders.json' ,order)
            .then(response => {
                this.setState({loading: false, purchasing: false});
            })
            .catch(error => {
                this.setState({loading: false});
            });

    }

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }

        let orderSummary = null;
        let burger =  this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;

        if ( this.state.ingredients ){
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled ={disabledInfo}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        ordered={() => this.purchaseHandler()}
                    />
                </Aux>
            );

            orderSummary =  <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCanceled={()=>this.purchaseCancelHandler()}
                purchaseContinued={()=>this.purchaseContinueHandler()}/>;

        }

        if( this.state.loading ){
            orderSummary = <Spinner />
        }


        return(
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}

            </Aux>
        );
    }
}
export default withErrorHandler(BurgerBuilder, axios);