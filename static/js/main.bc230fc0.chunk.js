(this["webpackJsonpburger-bulider"]=this["webpackJsonpburger-bulider"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"l",(function(){return c})),n.d(t,"j",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return O}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",i="SET_INGREDIENTS",o="FETCH_INGREDIENTS_FAILED",c="PURCHASE_BURGER_SUCCESS",s="PURCHASE_BURGER_FAIL",u="PURCHASE_BURGER_START",d="PURCHASE_INIT",l="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",b="AUTH_START",j="AUTH_FAILED",f="AUTH_SUCCESS",g="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH"},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(11),a=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},i=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return j})),n.d(t,"j",(function(){return O})),n.d(t,"c",(function(){return v}));var r=n(2),a=n(19),i=function(e){return{type:r.a,ingredientName:e}},o=function(e){return{type:r.n,ingredientName:e}},c=function(){return function(e){a.a.get("https://react-my-burger-1f756-default-rtdb.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},s=n(11),u=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},l=function(e,t){return function(n){n({type:r.h});var i="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+i).then((function(e){var t,a=[];for(var i in e.data)a.push(Object(s.a)(Object(s.a)({},e.data[i]),{},{id:i}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.f,error:t}))}))}},p=n(36),h=n.n(p),b=function(e,t){return{type:r.e,idToken:e,userId:t}},j=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expirationDate"),{type:r.c}},f=function(e){return function(t){setTimeout((function(){t(j())}),1e3*e)}},g=function(e,t,n){return function(a){a({type:r.d});var i={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDN6l9f2lnVy8xRjN_MFUdtNWSNbnLBEV0";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN6l9f2lnVy8xRjN_MFUdtNWSNbnLBEV0"),h.a.post(o,i).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("userId",e.data.localId),localStorage.setItem("expirationDate",t),a(b(e.data.idToken,e.data.localId)),a(f(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))}))}},O=function(e){return{type:r.o,path:e}},v=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(j());else{var r=localStorage.getItem("userId");e(b(t,r)),e(f((n.getTime()-(new Date).getTime())/1e3))}}else e(j())}}},,,,,,,,function(e,t,n){"use strict";n(1);t.a=function(e){return e.children}},function(e,t,n){"use strict";var r=n(36),a=n.n(r).a.create({baseURL:"https://react-my-burger-1f756-default-rtdb.firebaseio.com/"});t.a=a},function(e,t,n){"use strict";var r=n(0),a=(n(1),n(47)),i=n.n(a);t.a=function(e){return Object(r.jsx)("button",{className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})}},,function(e,t,n){"use strict";var r=n(0),a=(n(1),n(65)),i=n.n(a);t.a=function(){return Object(r.jsx)("div",{className:i.a.Loader,children:"Loading ..."})}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1EOf_",BreadTop:"BurgerIngredient_BreadTop__1I3v6",Seeds1:"BurgerIngredient_Seeds1__2AhHM",Seeds2:"BurgerIngredient_Seeds2__2yrxn",Meat:"BurgerIngredient_Meat__cQu3r",Cheese:"BurgerIngredient_Cheese__38pWx",Salad:"BurgerIngredient_Salad__G35sT",Bacon:"BurgerIngredient_Bacon__BkxxY"}},,,,function(e,t,n){"use strict";var r=n(0),a=n(11),i=n(5),o=n(6),c=n(8),s=n(7),u=n(1),d=n(35),l=n(18);t.a=function(e,t){return function(n){Object(c.a)(p,n);var u=Object(s.a)(p);function p(){var e;Object(i.a)(this,p);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=u.call.apply(u,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(o.a)(p,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(d.a,{modalClosed:this.errorConfirmedHandler,show:this.state.error,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(a.a)({},this.props))]})}}]),p}(u.Component)}},function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2CYQC",Logo:"SideDrawer_Logo__1ZM0A",Open:"SideDrawer_Open__3D4R7",Close:"SideDrawer_Close__Sfz8I"}},function(e,t,n){"use strict";var r=n(0),a=(n(1),n(61)),i=n.n(a);t.a=function(e){return e.show?Object(r.jsx)("div",{className:i.a.Backdrop,onClick:e.clicked}):null}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__24PfQ",Label:"BuildControl_Label__1jztX",Less:"BuildControl_Less__2W0G8",More:"BuildControl_More__1c-H5"}},function(e,t,n){e.exports={Input:"Input_Input__2ZJAJ",Label:"Input_Label__17enD",InputElement:"Input_InputElement__2AYyT",Invalid:"Input_Invalid__2ZZH5"}},,,function(e,t,n){"use strict";var r=n(0),a=n(5),i=n(6),o=n(8),c=n(7),s=n(1),u=n(64),d=n.n(u),l=n(29),p=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return e.show!==this.props.show}},{key:"componentDidUpdate",value:function(e,t,n){}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l.a,{show:this.props.show,clicked:this.props.modalClosed}),Object(r.jsx)("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(s.Component);t.a=p},,function(e,t,n){"use strict";var r=n(0),a=n(11),i=(n(1),n(32)),o=n.n(i);t.a=function(e){var t=null,n=[o.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(o.a.Invalid),e.elementType){case"input":t=Object(r.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(r.jsx)("textarea",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(r.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(r.jsx)("input",Object(a.a)(Object(a.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(r.jsxs)("div",{className:o.a.Input,children:[Object(r.jsx)("label",{className:o.a.Label,children:e.label}),t]})}},function(e,t,n){"use strict";var r=n(0),a=n(72),i=n(1),o=n(63),c=n.n(o),s=n(5),u=n(6),d=n(8),l=n(7),p=n(23),h=n.n(p),b=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(r.jsx)("div",{className:h.a.BreadBottom});break;case"bread-top":e=Object(r.jsxs)("div",{className:h.a.BreadTop,children:[Object(r.jsx)("div",{className:h.a.Seeds1}),Object(r.jsx)("div",{className:h.a.Seeds2})]});break;case"meat":e=Object(r.jsx)("div",{className:h.a.Meat});break;case"cheese":e=Object(r.jsx)("div",{className:h.a.Cheese});break;case"salad":e=Object(r.jsx)("div",{className:h.a.Salad});break;case"bacon":e=Object(r.jsx)("div",{className:h.a.Bacon});break;default:e=null}return e}}]),n}(i.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(a.a)(Array(e.ingredients[t])).map((function(e,n){return Object(r.jsx)(b,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Please start adding ingredients!"})),Object(r.jsxs)("div",{className:c.a.Burger,children:[Object(r.jsx)(b,{type:"bread-top"}),t,Object(r.jsx)(b,{type:"bread-bottom"})]})}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1eHzv",Logo:"Toolbar_Logo__2rBmH",DesktopOnly:"Toolbar_DesktopOnly__1_YDT"}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__c7eDL",active:"NavigationItem_active__2Rh6G"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3oEgt",OrderButton:"BuildControls_OrderButton__2rawv",enable:"BuildControls_enable__Gvosk"}},function(e,t,n){e.exports={Button:"Button_Button__1UsU_",Success:"Button_Success__3Eam2",Danger:"Button_Danger__3ro1j"}},,,,,,,,,,,function(e,t,n){e.exports={Logo:"Logo_Logo__3PPR3"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__27EdC"}},function(e,t,n){e.exports={ToggleButton:"ToggleButton_ToggleButton__WjRXj"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__32HAe"}},function(e,t,n){e.exports={Content:"Layout_Content__255yK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__1--2E"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3g3f6"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__15JuK",load6:"Spinner_load6__3aqiJ",round:"Spinner_round__3H0yq"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__2VGDL"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__3m9VL",Input:"ContactData_Input__1HXlM"}},function(e,t,n){e.exports={Order:"Order_Order__12592"}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(21),i=n(5),o=n(6),c=n(8),s=n(7),u=n(1),d=n(12),l=n(37),p=n(20),h=n(70),b=n.n(h),j=n(10),f=n(22),g=n(9),O=n(3),v=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,n){var r=Object(O.b)(e.state.controls,Object(a.a)({},n,Object(O.b)(e.state.controls[n],{value:t.target.value,valid:Object(O.a)(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:r})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/burger-app"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return Object(r.jsx)(l.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)}));this.props.loading&&(a=Object(r.jsx)(f.a,{}));var i=null;this.props.error&&(i=Object(r.jsx)("p",{children:this.props.error.message}));var o=null;return this.props.isAuthenticated&&(o=Object(r.jsx)(g.a,{to:this.props.authRedirectPath})),Object(r.jsxs)("div",{className:b.a.Auth,children:[o,i,Object(r.jsxs)("form",{onSubmit:this.submitHandler,children:[a,Object(r.jsx)(p.a,{btnType:"Success",children:"Submit"})]}),Object(r.jsxs)(p.a,{clicked:function(){return e.switchAuthModeHandler()},btnType:"Danger",children:["SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"]})]})}}]),n}(u.Component);t.default=Object(d.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,r){return e(j.b(t,n,r))},onSetAuthRedirectPath:function(){return e(j.j("/burger-app"))}}}))(v)},function(e,t,n){e.exports={Auth:"Auth_Auth__3tKhK"}},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n(33),o=n.n(i),c=(n(78),n(5)),s=n(6),u=n(8),d=n(7),l=n(12),p=n(39),h=n.n(p),b=n.p+"static/media/burger-logo.ec69c7f6.png",j=n(58),f=n.n(j),g=function(e){return Object(r.jsx)("div",{className:f.a.Logo,style:{height:e.height},children:Object(r.jsx)("img",{src:b,alt:"My burger"})})},O=n(59),v=n.n(O),m=n(24),x=n(43),_=n.n(x),y=function(e){return Object(r.jsx)("li",{className:_.a.NavigationItem,children:Object(r.jsx)(m.b,{to:e.link,exact:e.exact,activeClassName:_.a.active,children:e.children})})},C=function(e){return Object(r.jsxs)("ul",{className:v.a.NavigationItems,children:[Object(r.jsx)(y,{link:"/burger-app",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(r.jsx)(y,{link:"/orders",children:"Orders"}):null,e.isAuthenticated?Object(r.jsx)(y,{link:"/logout",children:"Logout"}):Object(r.jsx)(y,{link:"/auth",children:"Authentication"})]})},k=n(60),I=n.n(k),S=function(e){return Object(r.jsxs)("div",{className:I.a.ToggleButton,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},N=n(29),T=function(e){return Object(r.jsxs)("header",{className:h.a.Toolbar,children:[Object(r.jsx)("div",{children:Object(r.jsx)(S,{clicked:e.drawerToggleClicked})}),Object(r.jsx)("div",{className:h.a.Logo,children:Object(r.jsx)(g,{})}),Object(r.jsx)("nav",{className:h.a.DesktopOnly,children:Object(r.jsx)(C,{isAuthenticated:e.isAuth})})]})},B=n(62),D=n.n(B),A=n(28),w=n.n(A),E=n(18),R=function(e){var t=[w.a.SideDrawer,w.a.Close];return e.open&&(t=[w.a.SideDrawer,w.a.Open]),Object(r.jsxs)(E.a,{children:[Object(r.jsx)(N.a,{show:e.open,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(r.jsx)("div",{className:w.a.Logo,children:Object(r.jsx)(g,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(C,{isAuthenticated:e.isAuth})})]})]})},L=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(E.a,{children:[Object(r.jsx)(T,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(R,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(r.jsx)("main",{className:D.a.Content,children:this.props.children})]})}}]),n}(a.Component),H=Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(L),P=n(11),M=n(38),U=n(46),F=n.n(U),V=n(31),z=n.n(V),G=function(e){return Object(r.jsxs)("div",{className:z.a.BuildControl,children:[Object(r.jsx)("div",{className:z.a.Label,children:e.label}),Object(r.jsx)("button",{className:z.a.More,onClick:e.added,children:"More"}),Object(r.jsx)("button",{className:z.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"})]})},q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],W=function(e){return Object(r.jsxs)("div",{className:F.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current price: ",Object(r.jsx)("strong",{children:e.price.toFixed(2)})]}),q.map((function(t){return Object(r.jsx)(G,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{className:F.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ORDER NOW":"SIGNUP TO ORDER"})]})},Y=n(35),J=n(20),X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){console.log("[Order summary] will update")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t}),":",e.props.ingredients[t]]},t)}));return Object(r.jsxs)(E.a,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total price:",this.props.price.toFixed(2)]})}),Object(r.jsx)("p",{children:"Continue to checkout?"}),Object(r.jsx)(J.a,{btnType:"Danger",clicked:this.props.purchaseCanceled,children:"CANCEL"}),Object(r.jsx)(J.a,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(a.Component),Z=n(19),K=n(22),Q=n(27),$=n(10),ee=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):e.props.history.push("/auth")},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=this,t=Object(P.a)({},this.props.ings);for(var n in t)t[n]=t[n]<=0;var a=null,i=this.props.error?Object(r.jsx)("p",{children:"Ingredients can't be loaded"}):Object(r.jsx)(K.a,{});return this.props.ings&&(i=Object(r.jsxs)(E.a,{children:[Object(r.jsx)(M.a,{ingredients:this.props.ings}),Object(r.jsx)(W,{isAuth:this.props.isAuthenticated,ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:t,purchasable:this.updatePurchaseState(this.props.ings),price:this.props.price,ordered:function(){return e.purchaseHandler()}})]}),a=Object(r.jsx)(X,{ingredients:this.props.ings,price:this.props.price,purchaseCanceled:function(){return e.purchaseCancelHandler()},purchaseContinued:function(){return e.purchaseContinueHandler()}})),this.state.loading&&(a=Object(r.jsx)(K.a,{})),Object(r.jsxs)(E.a,{children:[Object(r.jsx)(Y.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:a}),i]})}}]),n}(a.Component),te=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e($.a(t))},onIngredientRemoved:function(t){return e($.i(t))},onInitIngredients:function(){return e($.e())},onInitPurchase:function(){return e($.h())},onSetRedirectPath:function(t){return e($.j(t))}}}))(Object(Q.a)(ee,Z.a)),ne=(n(103),n(9)),re=(n(104),n(69)),ae=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(r.jsx)(ne.a,{to:"/burger-app"})}}]),n}(a.Component),ie=Object(l.b)(null,(function(e){return{onLogout:function(){return e($.f())}}}))(ae),oe=function(e){return function(t){Object(u.a)(a,t);var n=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={component:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(r.jsx)(e,Object(P.a)({},this.props)):null}}]),a}(a.Component)},ce=oe((function(){return Promise.resolve().then(n.bind(null,103))})),se=oe((function(){return Promise.resolve().then(n.bind(null,104))})),ue=oe((function(){return Promise.resolve().then(n.bind(null,69))})),de=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=Object(r.jsxs)(ne.d,{children:[Object(r.jsx)(ne.b,{path:"/auth",component:re.default}),Object(r.jsx)(ne.b,{path:"/burger-app",exact:!0,component:te}),Object(r.jsx)(ne.a,{to:"/burger-app"})]});return this.props.isAuthenticated&&(e=Object(r.jsxs)(ne.d,{children:[Object(r.jsx)(ne.b,{path:"/checkout",component:ce}),Object(r.jsx)(ne.b,{path:"/orders",component:se}),Object(r.jsx)(ne.b,{path:"/logout",component:ie}),Object(r.jsx)(ne.b,{path:"/auth",component:ue}),Object(r.jsx)(ne.b,{path:"/burger-app",exact:!0,component:te}),Object(r.jsx)(ne.a,{to:"/burger-app"})]})),Object(r.jsx)(H,{children:e})}}]),n}(a.Component),le=Object(ne.g)(Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e($.c())}}}))(de)),pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))},he=n(71),be=n(25),je=n(21),fe=n(2),ge=n(3),Oe={ingredients:null,totalPrice:4,error:!1,building:!1},ve={salad:.5,cheese:.4,meat:1.3,bacon:.7},me=function(e,t){var n=Object(je.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ge.b)(e.ingredients,n),building:!0,totalPrice:e.totalPrice+ve[t.ingredientName]};return Object(ge.b)(e,r)},xe=function(e,t){var n=Object(je.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ge.b)(e.ingredients,n),totalPrice:e.totalPrice-ve[t.ingredientName]};return Object(ge.b)(e,r)},_e=function(e,t){return Object(ge.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},ye=function(e,t){return Object(ge.b)(e,{error:!0})},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.a:return me(e,t);case fe.n:return xe(e,t);case fe.p:return _e(e,t);case fe.f:return ye(e);default:return e}},ke={orders:[],loading:!1,purchased:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.l:var n=Object(ge.b)(t.orderData,{id:t.orderId});return Object(ge.b)(e,{loading:!0,purchased:!0,orders:e.orders.concat(n)});case fe.j:return Object(ge.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)});case fe.k:return Object(ge.b)(e,{loading:!0});case fe.m:return Object(ge.b)(e,{purchased:!1});case fe.h:return Object(ge.b)(e,{loading:!0});case fe.i:return Object(ge.b)(e,{loading:!1,orders:t.orders});case fe.g:return Object(ge.b)(e,{loading:!1});default:return e}},Se={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/burger-app"},Ne=function(e,t){return Object(ge.b)(e,{error:null,loading:!0})},Te=function(e,t){return Object(ge.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Be=function(e,t){return Object(ge.b)(e,{error:t.error,loading:!1})},De=function(e,t){return Object(ge.b)(e,{token:null,userId:null})},Ae=function(e,t){return Object(ge.b)(e,{authRedirectPath:t.path})},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.d:return Ne(e);case fe.b:return Be(e,t);case fe.e:return Te(e,t);case fe.c:return De(e);case fe.o:return Ae(e,t);default:return e}},Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,Re=Object(be.c)({burgerBuilder:Ce,orders:Ie,auth:we}),Le=Object(be.e)(Re,Ee(Object(be.a)(he.a))),He=Object(r.jsx)(l.a,{store:Le,children:Object(r.jsx)(m.a,{children:Object(r.jsx)(le,{})})});o.a.render(He,document.getElementById("root")),pe()},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(5),i=n(6),o=n(8),c=n(7),s=n(1),u=n(66),d=n.n(u),l=n(38),p=n(20),h=function(e){return Object(r.jsxs)("div",{className:d.a.CheckoutSummary,children:[Object(r.jsx)("h1",{children:"We hope it testes well!"}),Object(r.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(r.jsx)(l.a,{ingredients:e.ingredients})}),Object(r.jsx)(p.a,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(r.jsx)(p.a,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},b=n(9),j=n(21),f=n(12),g=n(22),O=n(67),v=n.n(O),m=n(19),x=n(37),_=n(10),y=n(27),C=n(3),k=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;var a={ingredients:e.props.ings,price:e.props.price,orderData:n,userId:e.props.userId};e.props.onOrderBurger(a,e.props.token)},e.inputChangedHandler=function(t,n){var r=Object(C.b)(e.state.orderForm[n],{value:t.target.value,valid:Object(C.a)(t.target.value,e.state.orderForm[n].validation),touched:!0}),a=Object(C.b)(e.state.orderForm,Object(j.a)({},n,r)),i=!0;for(var o in a)i=a[o].valid&&i;e.setState({orderForm:a,formIsValid:i})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=Object(r.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(r.jsx)(x.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(r.jsx)(p.a,{btnType:"Success",disabled:!this.state.formIsValid,children:"ORDER"})]});return this.props.loading&&(a=Object(r.jsx)(g.a,{})),Object(r.jsxs)("div",{className:v.a.ContactData,children:[Object(r.jsx)("h4",{children:"Enter your Contact Data"}),a]})}}]),n}(s.Component),I=Object(f.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.orders.loading,token:e.auth.token,userIt:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(_.g(t,n))}}}))(Object(y.a)(k,m.a)),S=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).checkoutCanceledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(i.a)(n,[{key:"render",value:function(){var e=Object(r.jsx)(b.a,{to:"/burger-app"});if(this.props.ings){var t=this.props.purchased?Object(r.jsx)(b.a,{to:"/burger-app"}):null;e=Object(r.jsxs)("div",{children:[t,Object(r.jsx)(h,{ingredients:this.props.ings,checkoutContinued:this.checkoutContinuedHandler,checkoutCanceled:this.checkoutCanceledHandler}),Object(r.jsx)(b.b,{path:this.props.match.path+"/contact-data",component:I})]})}return e}}]),n}(s.Component);t.default=Object(f.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,purchased:e.orders.purchased}}),null)(S)},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(5),i=n(6),o=n(8),c=n(7),s=n(1),u=n(19),d=n(68),l=n.n(d),p=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return Object(r.jsxs)("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid black",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(r.jsxs)("div",{className:l.a.Order,children:[Object(r.jsxs)("p",{children:["Ingredients: ",a," "]}),Object(r.jsxs)("p",{children:["Price: ",Object(r.jsxs)("strong",{children:[" USD ",e.price," "]})]})]})},h=n(27),b=n(10),j=n(12),f=n(22),g=function(e){Object(o.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=Object(r.jsx)(f.a,{});return this.props.loading||(e=this.props.orders.map((function(e){return Object(r.jsx)(p,{ingredients:e.ingredients,price:e.price},e.id)}))),Object(r.jsx)("div",{children:e})}}]),n}(s.Component);t.default=Object(j.b)((function(e){return{orders:e.orders.orders,loading:e.orders.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(b.d(t,n))}}}))(Object(h.a)(g,u.a))}],[[102,1,2]]]);
//# sourceMappingURL=main.bc230fc0.chunk.js.map