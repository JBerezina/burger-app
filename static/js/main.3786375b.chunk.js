(this["webpackJsonpburger-bulider"]=this["webpackJsonpburger-bulider"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(8),a=n.n(s),i=(n(15),n(2)),o=n(3),l=n(5),d=n(4),u=(n(16),n.p+"static/media/burger-logo.ec69c7f6.png"),j=(n(17),function(e){return Object(c.jsx)("div",{className:"Logo",style:{height:e.height},children:Object(c.jsx)("img",{src:u,alt:"My burger"})})}),b=(n(18),n(19),function(e){return Object(c.jsx)("li",{className:"NavigationItem",children:Object(c.jsx)("a",{href:e.link,className:e.active?"active":null,children:e.children})})}),h=function(){return Object(c.jsxs)("ul",{className:"NavigationItems",children:[Object(c.jsx)(b,{link:"/",children:"Burger Builder"}),Object(c.jsx)(b,{link:"/",children:"Checkout"})]})},p=(n(20),function(e){return Object(c.jsxs)("div",{className:"ToggleButton",onClick:e.clicked,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}),O=(n(21),function(e){return e.show?Object(c.jsx)("div",{className:"Backdrop",onClick:e.clicked}):null}),f=function(e){return Object(c.jsxs)("header",{className:"Toolbar",children:[Object(c.jsx)("div",{children:Object(c.jsx)(p,{clicked:e.drawerToggleClicked})}),Object(c.jsx)("div",{className:"LogoBar",children:Object(c.jsx)(j,{})}),Object(c.jsx)("nav",{className:"DesktopOnly",children:Object(c.jsx)(h,{})})]})},g=(n(22),n(23),function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{show:e.open,clicked:e.closed}),Object(c.jsxs)("div",{className:t.join(" "),children:[Object(c.jsx)("div",{className:"LogoDrawer",children:Object(c.jsx)(j,{})}),Object(c.jsx)("nav",{children:Object(c.jsx)(h,{})})]})]})}),x=function(e){return e.children},v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(x,{children:[Object(c.jsx)(f,{drawerToggleClicked:this.sideDrawerToggleHandler}),Object(c.jsx)(g,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(c.jsx)("main",{className:"Content",children:this.props.children})]})}}]),n}(r.Component),m=n(6),k=n(9),y=(n(24),n(25),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(c.jsx)("div",{className:"BreadBottom"});break;case"bread-top":e=Object(c.jsxs)("div",{className:"BreadTop",children:[Object(c.jsx)("div",{className:"Seeds1"}),Object(c.jsx)("div",{className:"Seeds2"})]});break;case"meat":e=Object(c.jsx)("div",{className:"Meat"});break;case"cheese":e=Object(c.jsx)("div",{className:"Cheese"});break;case"salad":e=Object(c.jsx)("div",{className:"Salad"});break;case"bacon":e=Object(c.jsx)("div",{className:"Bacon"});break;default:e=null}return e}}]),n}(r.Component)),C=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(k.a)(Array(e.ingredients[t])).map((function(e,n){return Object(c.jsx)(y,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(c.jsx)("p",{children:"Please start adding ingredients!"})),Object(c.jsxs)("div",{className:"Burger",children:[Object(c.jsx)(y,{type:"bread-top"}),t,Object(c.jsx)(y,{type:"bread-bottom"})]})},w=(n(26),n(27),function(e){return Object(c.jsxs)("div",{className:"BuildControl",children:[Object(c.jsx)("div",{className:"Label",children:e.label}),Object(c.jsx)("button",{className:"More",onClick:e.added,children:"More"}),Object(c.jsx)("button",{className:"Less",onClick:e.removed,disabled:e.disabled,children:"Less"})]})}),N=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],S=function(e){return Object(c.jsxs)("div",{className:"BuildControls",children:[Object(c.jsxs)("p",{children:["Current price: ",Object(c.jsx)("strong",{children:e.price.toFixed(2)})]}),N.map((function(t){return Object(c.jsx)(w,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(c.jsx)("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"})]})},D=(n(28),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return e.show!==this.props.show}},{key:"componentDidUpdate",value:function(e,t,n){console.log("[Modal ] will update")}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{show:this.props.show,clicked:this.props.modalClosed}),Object(c.jsx)("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(r.Component)),B=(n(29),function(e){return Object(c.jsx)("button",{className:["Button",e.btnType].join(" "),onClick:e.clicked,children:e.children})}),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){console.log("[Order summary] will update")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{textTransform:"capitalize"},children:t}),":",e.props.ingredients[t]]},t)}));return Object(c.jsxs)(x,{children:[Object(c.jsx)("h3",{children:"Your Order"}),Object(c.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(c.jsx)("ul",{children:t}),Object(c.jsx)("p",{children:Object(c.jsxs)("strong",{children:["Total price:",this.props.price.toFixed(2)]})}),Object(c.jsx)("p",{children:"Continue to checkout?"}),Object(c.jsx)(B,{btnType:"Danger",clicked:this.props.purchaseCanceled,children:"CANCEL"}),Object(c.jsx)(B,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(r.Component),T={salad:.5,cheese:.4,meat:1.3,bacon:.7},P=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{bacon:0,cheese:0,salad:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1;console.log(n);var c=Object(m.a)({},e.state.ingredients);c[t]=n,console.log(c);var r=T[t];console.log(r);var s=e.state.totalPrice+r;console.log(s),e.setState({totalPrice:s,ingredients:c}),e.updatePurchaseState(c)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var c=n-1;console.log(c);var r=Object(m.a)({},e.state.ingredients);r[t]=c,console.log(r);var s=T[t],a=e.state.totalPrice-s;console.log(a),e.setState({totalPrice:a,ingredients:r}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){alert("You continue!")},e}return Object(o.a)(n,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=this,t=Object(m.a)({},this.state.ingredients);for(var n in t)t[n]=t[n]<=0;return Object(c.jsxs)(x,{children:[Object(c.jsx)(D,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:Object(c.jsx)(H,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCanceled:function(){return e.purchaseCancelHandler()},purchaseContinued:function(){return e.purchaseContinueHandler()}})}),Object(c.jsx)(C,{ingredients:this.state.ingredients}),Object(c.jsx)(S,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:t,purchasable:this.state.purchasable,price:this.state.totalPrice,ordered:function(){return e.purchaseHandler()}})]})}}]),n}(r.Component),I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)(v,{children:Object(c.jsx)(P,{})})}}]),n}(r.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(c.jsx)(I,{}),document.getElementById("root")),L()}],[[30,1,2]]]);
//# sourceMappingURL=main.3786375b.chunk.js.map