(this.webpackJsonpawaproject=this.webpackJsonpawaproject||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),i=(n(15),n(3)),j=(n(16),n(4)),l=n(0);function b(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"LOGIN"}),Object(l.jsx)(j.b,{to:"shoppingcart",children:Object(l.jsx)("button",{children:"Shopping cart"})}),Object(l.jsx)("h3",{children:"KIRJAUDU SIS\xc4\xc4N"}),Object(l.jsx)(j.b,{to:"loginconsumer",children:Object(l.jsx)("button",{children:"ASIAKKAANA"})}),Object(l.jsx)(j.b,{to:"loginrestaurant",children:Object(l.jsx)("button",{children:"RAVINTOLOITSIJANA"})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)(j.b,{to:"/testmenu",children:Object(l.jsx)("div",{children:"menutestaus "})}),Object(l.jsx)(j.b,{to:"/testuserlogin",children:Object(l.jsx)("div",{children:"userlogin get testaus"})})]})}var o=n(6);function u(e,t,n){var r=Object(a.useState)({name:"",email:"",password:""}),c=Object(i.a)(r,2),s=c[0],b=c[1];return Object(l.jsx)("form",{onSubmit:function(e){},children:Object(l.jsxs)("div",{className:"form-inner",children:[Object(l.jsx)("h2",{children:"Login as a restaurant owner "}),Object(l.jsxs)("div",{classname:"form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"S\xe4hk\xf6posti: "}),Object(l.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return b(Object(o.a)(Object(o.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Salasana: "}),Object(l.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return b(Object(o.a)(Object(o.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{children:e.restest.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[" ",e.restaurant_username," "]}),Object(l.jsxs)("p",{children:[" ",e.restaurant_password," "]}),Object(l.jsxs)("p",{children:[" ",e.restaurant_id," "]})]})}))}),Object(l.jsx)("input",{type:"submit",value:"LOGIN"}),Object(l.jsx)("br",{}),Object(l.jsx)(j.b,{to:"/restaurantui",children:Object(l.jsx)("div",{children:"Kirjaudu sis\xe4\xe4n"})})]})})}var d=function(e){var t=e.Login,n=(e.error,Object(a.useState)({name:"",email:"",password:""})),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(c)},children:Object(l.jsxs)("div",{className:"form-inner",children:[Object(l.jsx)("h2",{children:"Login "}),Object(l.jsxs)("div",{classname:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name:",children:"Nimi: "}),Object(l.jsx)("input",{type:"name",name:"name",id:"name",onChange:function(e){return s(Object(o.a)(Object(o.a)({},c),{},{name:e.target.value}))},value:c.name})]}),Object(l.jsxs)("div",{classname:"form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"S\xe4hk\xf6posti: "}),Object(l.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return s(Object(o.a)(Object(o.a)({},c),{},{email:e.target.value}))},value:c.email})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"password",children:"Salasana: "}),Object(l.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return s(Object(o.a)(Object(o.a)({},c),{},{password:e.target.value}))},value:c.password})]}),Object(l.jsx)("input",{type:"submit",value:"LOGIN"})]})})};function O(){var e="admin@123.com",t="123",n=Object(a.useState)({name:"",email:""}),r=Object(i.a)(n,2),c=r[0],s=r[1],b=Object(a.useState)(""),o=Object(i.a)(b,2),u=o[0];o[1];return Object(l.jsx)("div",{className:"LoginConsumer",children:""!==c.email?Object(l.jsxs)("div",{className:"welcome",children:[Object(l.jsxs)("h2",{children:["Tervettuloa ",Object(l.jsx)("span",{children:c.name})," "]}),Object(l.jsx)(j.b,{to:"/restaurants",children:Object(l.jsx)("div",{children:"Selaa ravintoloita"})}),Object(l.jsx)("button",{onClick:function(){s({name:"",email:""})},children:"Kirjaudu ulos"})]}):Object(l.jsx)(d,{Login:function(n){console.log(n),n.email===e&&n.password===t?(console.log("Kirjauduttu sis\xe4\xe4n"),s({name:n.name,email:n.email})):console.log("Kirjautuminen ep\xe4onnistui")},error:u})})}var x=n(2),h=n(7),p=n.n(h);function m(e){return Object(l.jsxs)("div",{className:p.a.restaurantList,children:[Object(l.jsx)("img",{style:{width:"100%"},src:"./images/arrival.png"}),Object(l.jsx)("div",{children:e.restaurants.map((function(e){return Object(l.jsx)(j.b,{to:"/restaurants/"+e.restaurant_id,children:Object(l.jsxs)("div",{className:p.a.product,children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:p.a.image,src:"./images/".concat(e.imagepath)})}),Object(l.jsx)("div",{className:p.a.header,children:e.name}),Object(l.jsx)("div",{children:e.address}),Object(l.jsx)("div",{children:e.restaurant_id})]})})}))}),Object(l.jsxs)("div",{className:"restaurantInfo",children:["INFO",Object(l.jsx)(x.a,{})]})]})}function f(e){var t=function(e){var t=e.handleClick,n=e.text;return Object(l.jsx)("button",{onClick:t,children:n})},n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],j=Object(a.useState)(1),b=Object(i.a)(j,2),o=b[0],u=b[1],d=function(){s(c+"food1")},O=function(){s(c+"food2")},h=function(){s(c+"food3")},p=function(){s(c+"food4")},m=function(){s(c+"food5")},f=function(){u(2)},g=function(){u(1)},v=Object(x.h)(),y=e.restaurant.find((function(e){return e.restaurant_id===parseInt(v.restaurant_id)}));if(null==y)return console.log(v.restaurant_id),Object(l.jsx)("div",{children:"No matchiestaurng restaurant"});var C=function(e){return e.cart<2?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Add food to restaurant"}),Object(l.jsx)("div",{children:Object(l.jsx)(t,{handleClick:d,text:"food",children:" "})}),Object(l.jsx)("div",{children:Object(l.jsx)(t,{handleClick:O,text:"food2",children:" "})}),Object(l.jsx)("div",{children:Object(l.jsx)(t,{handleClick:h,text:"food3",children:" "})}),Object(l.jsx)("div",{children:Object(l.jsx)(t,{handleClick:p,text:"food4",children:" "})}),Object(l.jsx)("div",{children:Object(l.jsx)(t,{handleClick:m,text:"food5",children:" "})}),Object(l.jsx)(t,{handleClick:f,text:"shoppincart",children:" "})]}):Object(l.jsx)("div",{children:Object(l.jsx)("table",{children:Object(l.jsxs)("tbody",{children:[Object(l.jsx)(S,{food:c}),Object(l.jsx)(t,{handleClick:g,text:"Close Cart",children:" "})]})})})},S=function(e){var t=e.food;return t<1?Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:" No food selected "})}):Object(l.jsx)("div",{children:Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:Object(l.jsx)(_,{text:"food",value:t})})})})},_=function(e){var t=e.text,n=e.value;return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[" ",t," "]}),Object(l.jsxs)("td",{children:[" ",n]})]})};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:["ID",y.restaurant_id," ",y.name," ",y.address,y.operating_hours," ",Object(l.jsx)("img",{src:"./images/".concat(y.imagepath)})," ",y.restaurant_type," ",y.price_level]}),Object(l.jsx)("div",{children:Object(l.jsx)(C,{cart:o})})]})}function g(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:" My restaurants "}),Object(l.jsx)("h1",{children:" Add a new restaurant "}),Object(l.jsx)(j.b,{to:"createrestaurant",children:Object(l.jsx)("button",{children:" Create "})}),Object(l.jsx)("h1",{children:" Other restaurants "})]})}function v(e){var t,n,r,c,s,b,o=Object(a.useState)({name:"",address:"",operating_hours:"",imagepath:"",restaurant_type:"",price_level:""}),u=Object(i.a)(o,2),d=u[0],O=u[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:" Add a restaurant "}),Object(l.jsx)("br",{}),Object(l.jsx)("form",{onSubmit:function(e){alert("restaurant was submitted"),t=d.name,console.log("1"+t),console.log("2"+d.name),console.log("3"+{name:e.target.value}),x()},children:Object(l.jsxs)("section",{children:[Object(l.jsx)("label",{for:"name"})," Enter a name ",Object(l.jsx)("label",{}),Object(l.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return O({name:e.target.value})},value:d.name}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{for:"address"})," Enter an address ",Object(l.jsx)("label",{}),Object(l.jsx)("input",{type:"text",name:"address",id:"address",onChange:function(e){return O({address:e.target.value})},value:d.address}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{for:"hours"})," Enter the operating hours ",Object(l.jsx)("label",{}),Object(l.jsx)("input",{type:"text",name:"hours",id:"hours",onChange:function(e){return O({hours:e.target.value})},value:d.operating_hours}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{for:"imagepath"})," Enter a file path for your image ",Object(l.jsx)("label",{}),Object(l.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return O({imagepath:e.target.value})},value:d.imagepath}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:" Enter the restaurant type "}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",name:"type",id:"buffet",value:"buffet",onChange:function(e){return O({type:e.target.value})}}),Object(l.jsx)("label",{for:"buffet",children:" Buffet "}),Object(l.jsx)("input",{type:"radio",name:"type",id:"fastfood",value:"fastfood",onChange:function(e){return O({type:e.target.value})}}),Object(l.jsx)("label",{for:"fastfood",children:" Fast food "}),Object(l.jsx)("input",{type:"radio",name:"type",id:"fastcasual",value:"fastcasual",onChange:function(e){return O({type:e.target.value})}}),Object(l.jsx)("label",{for:"fastcasual",children:" Fast casual "}),Object(l.jsx)("input",{type:"radio",name:"type",id:"casualdining",value:"casualdining",onChange:function(e){return O({type:e.target.value})}}),Object(l.jsx)("label",{for:"casualdining",children:" Casual dining "}),Object(l.jsx)("input",{type:"radio",name:"type",id:"finedining",value:"finedining",onChange:function(e){return O({type:e.target.value})}}),Object(l.jsx)("label",{for:"finedining",children:" Fine dining "}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:" Enter the price level"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"radio",name:"price",id:"price1",value:"\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(l.jsx)("label",{for:"price1",children:" \u20ac "}),Object(l.jsx)("input",{type:"radio",name:"price",id:"price2",value:"\u20ac\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(l.jsx)("label",{for:"price2",children:" \u20ac\u20ac "}),Object(l.jsx)("input",{type:"radio",name:"price",id:"price3",value:"\u20ac\u20ac\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(l.jsx)("label",{for:"price3",children:" \u20ac\u20ac\u20ac "}),Object(l.jsx)("input",{type:"radio",name:"price",id:"price4",value:"\u20ac\u20ac\u20ac\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(l.jsx)("label",{for:"price4",children:" \u20ac\u20ac\u20ac\u20ac "}),Object(l.jsx)("button",{type:"submit",children:" Submit "})]})}),Object(l.jsx)(j.b,{to:"createmenu",children:Object(l.jsx)("button",{onClick:x,children:" Done "})})]});function x(e){console.log(JSON.stringify({name:t,address:n,operating_hours:r,imagepath:c,restaurant_type:s,price_level:b})),console.log(t),fetch("http://localhost:3001/restaurant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,address:n,operating_hours:r,imagepath:c,restaurant_type:s,price_level:b})}).then((function(e){return e.text()}))}}function y(){var e=Object(a.useState)({item_name:"",description:"",price:"",imagepath:""}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:" Create a menu for your restaurant "}),Object(l.jsx)("br",{}),Object(l.jsxs)("section",{children:[Object(l.jsx)("label",{for:"item_name"})," Enter a name ",Object(l.jsx)("label",{}),Object(l.jsx)("input",{type:"text",name:"item_name",id:"item_name",onChange:function(e){return r({name:e.target.value})},value:n.item_name}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{for:"description"})," Enter a description ",Object(l.jsx)("label",{}),Object(l.jsx)("input",{type:"text",name:"description",id:"description",onChange:function(e){return r({name:e.target.value})},value:n.description}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{for:"price"})," Enter a price ",Object(l.jsx)("label",{}),Object(l.jsx)("input",{type:"text",name:"price",id:"price",onChange:function(e){return r({name:e.target.value})},value:n.price}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{for:"imagepath"})," Enter an imagepath for your image ",Object(l.jsx)("label",{}),Object(l.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return r({name:e.target.value})},value:n.imagepath}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]}),Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("button",{children:" Done "})})]})}function C(e){return Object(l.jsx)("div",{className:"menu",children:e.menutest.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{children:[" ",e.item_name," "]})})}))})}function S(e){return Object(l.jsx)("div",{className:"menu",children:e.usertest.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:[" ",e.username," "]})," ",Object(l.jsxs)("div",{children:[" ",e.password," "]})]})}))})}var _=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(i.a)(c,2),o=s[0],d=s[1],h=Object(a.useState)([]),p=Object(i.a)(h,2),_=p[0],N=p[1],w=Object(a.useState)([]),A=Object(i.a)(w,2),E=A[0],k=A[1];function F(){fetch("/r").then((function(e){return e.text()})).then((function(e){console.log("mooi"+JSON.parse(e)),r(JSON.parse(e))}))}return Object(a.useEffect)((function(){F()}),[]),Object(a.useEffect)((function(){fetch("/restaurant_menu").then((function(e){return e.text()})).then((function(e){console.log(JSON.parse(e)),d(JSON.parse(e))}))}),[]),Object(a.useEffect)((function(){fetch("/user_login").then((function(e){return e.text()})).then((function(e){console.log(JSON.parse(e)),N(JSON.parse(e))}))}),[]),Object(a.useEffect)((function(){fetch("/restaurant_login").then((function(e){return e.text()})).then((function(e){console.log(JSON.parse(e)),k(JSON.parse(e))}))}),[]),Object(l.jsxs)(j.a,{children:[Object(l.jsxs)("div",{className:"topBar",children:[Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("div",{style:{paddingRight:"50px"},children:"Home"})}),Object(l.jsx)(j.b,{to:"/restaurants",children:Object(l.jsx)("div",{children:"RESTAURANTS"})})]}),Object(l.jsxs)(x.d,{children:[Object(l.jsx)(x.b,{path:"/",element:Object(l.jsx)(b,{})}),Object(l.jsx)(x.b,{path:"/loginrestaurant",element:Object(l.jsx)(u,{restest:E})}),Object(l.jsx)(x.b,{path:"/loginconsumer",element:Object(l.jsx)(O,{})}),Object(l.jsx)(x.b,{path:"/restaurants",element:Object(l.jsx)(m,{restaurants:n})}),Object(l.jsx)(x.b,{path:"/restaurants/:restaurant_id/*",element:Object(l.jsx)(f,{restaurant:n})}),Object(l.jsx)(x.b,{path:"/restaurantui",element:Object(l.jsx)(g,{})}),Object(l.jsx)(x.b,{path:"/restaurantui/createrestaurant",element:Object(l.jsx)(v,{})}),Object(l.jsx)(x.b,{path:"/restaurantui/createrestaurant/createmenu",element:Object(l.jsx)(y,{})}),Object(l.jsx)(x.b,{path:"/testmenu",element:Object(l.jsx)(C,{menutest:o})}),Object(l.jsx)(x.b,{path:"/testuserlogin",element:Object(l.jsx)(S,{usertest:_})})]}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),N()},7:function(e,t,n){e.exports={product:"RestaurantList_product__2AZqY",header:"RestaurantList_header__3cA7Y",image:"RestaurantList_image__1HhVC"}}},[[18,1,2]]]);
//# sourceMappingURL=main.d437b16d.chunk.js.map