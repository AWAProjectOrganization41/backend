(this.webpackJsonpawaproject=this.webpackJsonpawaproject||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),i=(n(15),n(3)),j=(n(16),n(4)),b=n(0);function l(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"LOGIN"}),Object(b.jsx)(j.b,{to:"shoppingcart",children:Object(b.jsx)("button",{children:"Shopping cart"})}),Object(b.jsx)("h3",{children:"KIRJAUDU SIS\xc4\xc4N"}),Object(b.jsx)(j.b,{to:"loginconsumer",children:Object(b.jsx)("button",{children:"ASIAKKAANA"})}),Object(b.jsx)(j.b,{to:"loginrestaurant",children:Object(b.jsx)("button",{children:"RAVINTOLOITSIJANA"})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(j.b,{to:"/testmenu",children:Object(b.jsx)("div",{children:"menutestaus "})}),Object(b.jsx)(j.b,{to:"/testuserlogin",children:Object(b.jsx)("div",{children:"userlogin get testaus"})})]})}var u=n(6);function o(e,t,n){var r=Object(a.useState)({name:"",email:"",password:""}),c=Object(i.a)(r,2),s=c[0],l=c[1];return Object(b.jsx)("form",{onSubmit:function(e){},children:Object(b.jsxs)("div",{className:"form-inner",children:[Object(b.jsx)("h2",{children:"Login as a restaurant owner "}),Object(b.jsxs)("div",{classname:"form-group",children:[Object(b.jsx)("label",{htmlFor:"email",children:"S\xe4hk\xf6posti: "}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return l(Object(u.a)(Object(u.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Salasana: "}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return l(Object(u.a)(Object(u.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:e.restest.map((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[" ",e.restaurant_username," "]}),Object(b.jsxs)("p",{children:[" ",e.restaurant_password," "]}),Object(b.jsxs)("p",{children:[" ",e.restaurant_id," "]})]})}))}),Object(b.jsx)("input",{type:"submit",value:"LOGIN"}),Object(b.jsx)("br",{}),Object(b.jsx)(j.b,{to:"/restaurantui",children:Object(b.jsx)("div",{children:"Kirjaudu sis\xe4\xe4n"})})]})})}var d=function(e){var t=e.Login,n=(e.error,Object(a.useState)({name:"",email:"",password:""})),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(c)},children:Object(b.jsxs)("div",{className:"form-inner",children:[Object(b.jsx)("h2",{children:"Login "}),Object(b.jsxs)("div",{classname:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name:",children:"Nimi: "}),Object(b.jsx)("input",{type:"name",name:"name",id:"name",onChange:function(e){return s(Object(u.a)(Object(u.a)({},c),{},{name:e.target.value}))},value:c.name})]}),Object(b.jsxs)("div",{classname:"form-group",children:[Object(b.jsx)("label",{htmlFor:"email",children:"S\xe4hk\xf6posti: "}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return s(Object(u.a)(Object(u.a)({},c),{},{email:e.target.value}))},value:c.email})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Salasana: "}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return s(Object(u.a)(Object(u.a)({},c),{},{password:e.target.value}))},value:c.password})]}),Object(b.jsx)("input",{type:"submit",value:"LOGIN"})]})})};function O(){var e="admin@123.com",t="123",n=Object(a.useState)({name:"",email:""}),r=Object(i.a)(n,2),c=r[0],s=r[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),o=u[0];u[1];return Object(b.jsx)("div",{className:"LoginConsumer",children:""!==c.email?Object(b.jsxs)("div",{className:"welcome",children:[Object(b.jsxs)("h2",{children:["Tervettuloa ",Object(b.jsx)("span",{children:c.name})," "]}),Object(b.jsx)(j.b,{to:"/restaurants",children:Object(b.jsx)("div",{children:"Selaa ravintoloita"})}),Object(b.jsx)("button",{onClick:function(){s({name:"",email:""})},children:"Kirjaudu ulos"})]}):Object(b.jsx)(d,{Login:function(n){console.log(n),n.email===e&&n.password===t?(console.log("Kirjauduttu sis\xe4\xe4n"),s({name:n.name,email:n.email})):console.log("Kirjautuminen ep\xe4onnistui")},error:o})})}var x=n(2),h=n(7),m=n.n(h);function p(e){return Object(b.jsxs)("div",{className:m.a.restaurantList,children:[Object(b.jsx)("img",{style:{width:"100%"},src:"./images/arrival.png"}),Object(b.jsx)("div",{children:e.restaurants.map((function(e){return Object(b.jsx)(j.b,{to:"/restaurants/"+e.restaurant_id,children:Object(b.jsxs)("div",{className:m.a.product,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:m.a.image,src:"./images/".concat(e.imagepath)})}),Object(b.jsx)("div",{className:m.a.header,children:e.name}),Object(b.jsx)("div",{children:e.address}),Object(b.jsx)("div",{children:e.restaurant_id})]})})}))}),Object(b.jsxs)("div",{className:"restaurantInfo",children:["INFO",Object(b.jsx)(x.a,{})]})]})}function f(e){var t=function(e){var t=e.handleClick,n=e.text;return Object(b.jsx)("button",{onClick:t,children:n})},n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],j=Object(a.useState)(1),l=Object(i.a)(j,2),u=l[0],o=l[1],d=function(){s(c+"food1")},O=function(){s(c+"food2")},h=function(){s(c+"food3")},m=function(){s(c+"food4")},p=function(){s(c+"food5")},f=function(){o(2)},g=function(){o(1)},v=Object(x.h)(),y=e.restaurant.find((function(e){return e.restaurant_id===parseInt(v.restaurant_id)}));if(null==y)return console.log(v.restaurant_id),Object(b.jsx)("div",{children:"No matchiestaurng restaurant"});var C=function(e){return e.cart<2?Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Add food to restaurant"}),Object(b.jsx)("div",{children:Object(b.jsx)(t,{handleClick:d,text:"food",children:" "})}),Object(b.jsx)("div",{children:Object(b.jsx)(t,{handleClick:O,text:"food2",children:" "})}),Object(b.jsx)("div",{children:Object(b.jsx)(t,{handleClick:h,text:"food3",children:" "})}),Object(b.jsx)("div",{children:Object(b.jsx)(t,{handleClick:m,text:"food4",children:" "})}),Object(b.jsx)("div",{children:Object(b.jsx)(t,{handleClick:p,text:"food5",children:" "})}),Object(b.jsx)(t,{handleClick:f,text:"shoppincart",children:" "})]}):Object(b.jsx)("div",{children:Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsx)(_,{food:c}),Object(b.jsx)(t,{handleClick:g,text:"Close Cart",children:" "})]})})})},_=function(e){var t=e.food;return t<1?Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:" No food selected "})}):Object(b.jsx)("div",{children:Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:Object(b.jsx)(S,{text:"food",value:t})})})})},S=function(e){var t=e.text,n=e.value;return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[" ",t," "]}),Object(b.jsxs)("td",{children:[" ",n]})]})};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:["ID",y.restaurant_id," ",y.name," ",y.address,y.operating_hours," ",Object(b.jsx)("img",{src:"./images/".concat(y.imagepath)})," ",y.restaurant_type," ",y.price_level]}),Object(b.jsx)("div",{children:Object(b.jsx)(C,{cart:u})})]})}function g(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" My restaurants "}),Object(b.jsx)("h1",{children:" Add a new restaurant "}),Object(b.jsx)(j.b,{to:"createrestaurant",children:Object(b.jsx)("button",{children:" Create "})}),Object(b.jsx)("h1",{children:" Other restaurants "})]})}function v(e){var t,n,r,c,s,l,u=Object(a.useState)({name:"",address:"",operating_hours:"",imagepath:"",restaurant_type:"",price_level:""}),o=Object(i.a)(u,2),d=o[0],O=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:" Add a restaurant "}),Object(b.jsx)("br",{}),Object(b.jsx)("form",{onSubmit:function(e){alert("restaurant was submitted"),t=d.name,console.log("1"+t),console.log("2"+d.name),console.log("3"+{name:e.target.value}),x()},children:Object(b.jsxs)("section",{children:[Object(b.jsx)("label",{for:"name"})," Enter a name ",Object(b.jsx)("label",{}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return O({name:e.target.value})},value:d.name}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{for:"address"})," Enter an address ",Object(b.jsx)("label",{}),Object(b.jsx)("input",{type:"text",name:"address",id:"address",onChange:function(e){return O({address:e.target.value})},value:d.address}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{for:"hours"})," Enter the operating hours ",Object(b.jsx)("label",{}),Object(b.jsx)("input",{type:"text",name:"hours",id:"hours",onChange:function(e){return O({hours:e.target.value})},value:d.operating_hours}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{for:"imagepath"})," Enter a file path for your image ",Object(b.jsx)("label",{}),Object(b.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return O({imagepath:e.target.value})},value:d.imagepath}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:" Enter the restaurant type "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"radio",name:"type",id:"buffet",value:"buffet",onChange:function(e){return O({type:e.target.value})}}),Object(b.jsx)("label",{for:"buffet",children:" Buffet "}),Object(b.jsx)("input",{type:"radio",name:"type",id:"fastfood",value:"fastfood",onChange:function(e){return O({type:e.target.value})}}),Object(b.jsx)("label",{for:"fastfood",children:" Fast food "}),Object(b.jsx)("input",{type:"radio",name:"type",id:"fastcasual",value:"fastcasual",onChange:function(e){return O({type:e.target.value})}}),Object(b.jsx)("label",{for:"fastcasual",children:" Fast casual "}),Object(b.jsx)("input",{type:"radio",name:"type",id:"casualdining",value:"casualdining",onChange:function(e){return O({type:e.target.value})}}),Object(b.jsx)("label",{for:"casualdining",children:" Casual dining "}),Object(b.jsx)("input",{type:"radio",name:"type",id:"finedining",value:"finedining",onChange:function(e){return O({type:e.target.value})}}),Object(b.jsx)("label",{for:"finedining",children:" Fine dining "}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("span",{children:" Enter the price level"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"radio",name:"price",id:"price1",value:"\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(b.jsx)("label",{for:"price1",children:" \u20ac "}),Object(b.jsx)("input",{type:"radio",name:"price",id:"price2",value:"\u20ac\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(b.jsx)("label",{for:"price2",children:" \u20ac\u20ac "}),Object(b.jsx)("input",{type:"radio",name:"price",id:"price3",value:"\u20ac\u20ac\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(b.jsx)("label",{for:"price3",children:" \u20ac\u20ac\u20ac "}),Object(b.jsx)("input",{type:"radio",name:"price",id:"price4",value:"\u20ac\u20ac\u20ac\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(b.jsx)("label",{for:"price4",children:" \u20ac\u20ac\u20ac\u20ac "}),Object(b.jsx)("button",{type:"submit",children:" Submit "})]})}),Object(b.jsx)(j.b,{to:"createmenu",children:Object(b.jsx)("button",{onClick:x,children:" Done "})})]});function x(e){console.log(JSON.stringify({name:t,address:n,operating_hours:r,imagepath:c,restaurant_type:s,price_level:l})),console.log(t),fetch("http://localhost:3001/restaurant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,address:n,operating_hours:r,imagepath:c,restaurant_type:s,price_level:l})}).then((function(e){return e.text()}))}}function y(){var e=Object(a.useState)({item_name:"",description:"",price:"",imagepath:""}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:" Create a menu for your restaurant "}),Object(b.jsx)("br",{}),Object(b.jsxs)("section",{children:[Object(b.jsx)("label",{for:"item_name"})," Enter a name ",Object(b.jsx)("label",{}),Object(b.jsx)("input",{type:"text",name:"item_name",id:"item_name",onChange:function(e){return r({name:e.target.value})},value:n.item_name}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{for:"description"})," Enter a description ",Object(b.jsx)("label",{}),Object(b.jsx)("input",{type:"text",name:"description",id:"description",onChange:function(e){return r({name:e.target.value})},value:n.description}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{for:"price"})," Enter a price ",Object(b.jsx)("label",{}),Object(b.jsx)("input",{type:"text",name:"price",id:"price",onChange:function(e){return r({name:e.target.value})},value:n.price}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{for:"imagepath"})," Enter an imagepath for your image ",Object(b.jsx)("label",{}),Object(b.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return r({name:e.target.value})},value:n.imagepath}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("button",{children:" Done "})})]})}function C(e){return Object(b.jsx)("div",{className:"menu",children:e.menutest.map((function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[" ",e.item_name," "]})})}))})}function _(e){return Object(b.jsx)("div",{className:"menu",children:e.usertest.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[" ",e.username," "]})," ",Object(b.jsxs)("div",{children:[" ",e.password," "]})]})}))})}var S=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(i.a)(c,2),u=s[0],d=(s[1],Object(a.useState)([])),h=Object(i.a)(d,2),m=h[0],S=(h[1],Object(a.useState)([])),N=Object(i.a)(S,2),w=N[0];return N[1],Object(a.useEffect)((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){r(e)}))}),[]),n.restaurant_id=0,Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{className:"topBar",children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("div",{style:{paddingRight:"50px"},children:"Home"})}),Object(b.jsx)(j.b,{to:"/restaurants",children:Object(b.jsx)("div",{children:"RESTAURANTS"})})]}),Object(b.jsxs)(x.d,{children:[Object(b.jsx)(x.b,{path:"/",element:Object(b.jsx)(l,{})}),Object(b.jsx)(x.b,{path:"/loginrestaurant",element:Object(b.jsx)(o,{restest:w})}),Object(b.jsx)(x.b,{path:"/loginconsumer",element:Object(b.jsx)(O,{})}),Object(b.jsx)(x.b,{path:"/restaurants",element:Object(b.jsx)(p,{restaurants:n})}),Object(b.jsx)(x.b,{path:"/restaurants/:restaurant_id/*",element:Object(b.jsx)(f,{restaurant:n})}),Object(b.jsx)(x.b,{path:"/restaurantui",element:Object(b.jsx)(g,{})}),Object(b.jsx)(x.b,{path:"/restaurantui/createrestaurant",element:Object(b.jsx)(v,{})}),Object(b.jsx)(x.b,{path:"/restaurantui/createrestaurant/createmenu",element:Object(b.jsx)(y,{})}),Object(b.jsx)(x.b,{path:"/testmenu",element:Object(b.jsx)(C,{menutest:u})}),Object(b.jsx)(x.b,{path:"/testuserlogin",element:Object(b.jsx)(_,{usertest:m})})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),N()},7:function(e,t,n){e.exports={product:"RestaurantList_product__2AZqY",header:"RestaurantList_header__3cA7Y",image:"RestaurantList_image__1HhVC"}}},[[18,1,2]]]);
//# sourceMappingURL=main.07e2781d.chunk.js.map