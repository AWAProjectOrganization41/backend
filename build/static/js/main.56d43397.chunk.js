(this.webpackJsonpawaproject=this.webpackJsonpawaproject||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(11),c=n.n(s),i=(n(16),n(3)),j=(n(17),n(4)),u=n(0);function l(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"LOGIN"}),Object(u.jsx)(j.b,{to:"shoppingcart",children:Object(u.jsx)("button",{children:"Shopping cart"})}),Object(u.jsx)("h3",{children:"KIRJAUDU SIS\xc4\xc4N"}),Object(u.jsx)(j.b,{to:"loginconsumer",children:Object(u.jsx)("button",{children:"ASIAKKAANA"})}),Object(u.jsx)(j.b,{to:"loginrestaurant",children:Object(u.jsx)("button",{children:"RAVINTOLOITSIJANA"})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(j.b,{to:"/testmenu",children:Object(u.jsx)("div",{children:"menutestaus "})}),Object(u.jsx)(j.b,{to:"/testuserlogin",children:Object(u.jsx)("div",{children:"userlogin get testaus"})})]})}var b=n(6);function o(e,t,n){var r=Object(a.useState)({name:"",email:"",password:""}),s=Object(i.a)(r,2),c=s[0],l=s[1];return Object(u.jsx)("form",{onSubmit:function(e){},children:Object(u.jsxs)("div",{className:"form-inner",children:[Object(u.jsx)("h2",{children:"Login as a restaurant owner "}),Object(u.jsxs)("div",{classname:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"S\xe4hk\xf6posti: "}),Object(u.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return l(Object(b.a)(Object(b.a)({},c),{},{email:e.target.value}))},value:c.email})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Salasana: "}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return l(Object(b.a)(Object(b.a)({},c),{},{password:e.target.value}))},value:c.password})]}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{children:e.restest.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[" ",e.restaurant_username," "]}),Object(u.jsxs)("p",{children:[" ",e.restaurant_password," "]}),Object(u.jsxs)("p",{children:[" ",e.restaurant_id," "]})]})}))}),Object(u.jsx)("input",{type:"submit",value:"LOGIN"}),Object(u.jsx)("br",{}),Object(u.jsx)(j.b,{to:"/restaurantui",children:Object(u.jsx)("div",{children:"Kirjaudu sis\xe4\xe4n"})})]})})}var d=function(e){var t=e.Login,n=(e.error,Object(a.useState)({name:"",email:"",password:""})),r=Object(i.a)(n,2),s=r[0],c=r[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(u.jsxs)("div",{className:"form-inner",children:[Object(u.jsx)("h2",{children:"Login "}),Object(u.jsxs)("div",{classname:"form-group",children:[Object(u.jsx)("label",{htmlFor:"name:",children:"Nimi: "}),Object(u.jsx)("input",{type:"name",name:"name",id:"name",onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{name:e.target.value}))},value:s.name})]}),Object(u.jsxs)("div",{classname:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"S\xe4hk\xf6posti: "}),Object(u.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Salasana: "}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return c(Object(b.a)(Object(b.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(u.jsx)("input",{type:"submit",value:"LOGIN"})]})})};function O(){var e="admin@123.com",t="123",n=Object(a.useState)({name:"",email:""}),r=Object(i.a)(n,2),s=r[0],c=r[1],l=Object(a.useState)(""),b=Object(i.a)(l,2),o=b[0];b[1];return Object(u.jsx)("div",{className:"LoginConsumer",children:""!==s.email?Object(u.jsxs)("div",{className:"welcome",children:[Object(u.jsxs)("h2",{children:["Tervettuloa ",Object(u.jsx)("span",{children:s.name})," "]}),Object(u.jsx)(j.b,{to:"/restaurants",children:Object(u.jsx)("div",{children:"Selaa ravintoloita"})}),Object(u.jsx)("button",{onClick:function(){c({name:"",email:""})},children:"Kirjaudu ulos"})]}):Object(u.jsx)(d,{Login:function(n){console.log(n),n.email===e&&n.password===t?(console.log("Kirjauduttu sis\xe4\xe4n"),c({name:n.name,email:n.email})):console.log("Kirjautuminen ep\xe4onnistui")},error:o})})}var h=n(2),x=n(8),m=n.n(x);function p(e){return Object(u.jsxs)("div",{className:m.a.restaurantList,children:[Object(u.jsx)("img",{style:{width:"100%"},src:"./images/arrival.png"}),Object(u.jsx)("div",{children:e.restaurants.map((function(e){return Object(u.jsx)(j.b,{to:"/restaurants/"+e.restaurant_id,children:Object(u.jsxs)("div",{className:m.a.product,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:m.a.image,src:"./images/".concat(e.imagepath)})}),Object(u.jsx)("div",{className:m.a.header,children:e.name}),Object(u.jsx)("div",{children:e.address}),Object(u.jsx)("div",{children:e.restaurant_id})]})})}))}),Object(u.jsxs)("div",{className:"restaurantInfo",children:["INFO",Object(u.jsx)(h.a,{})]})]})}var f=n(7),g=n.n(f),v=0,_=[];function y(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],s=n[1];Object(a.useEffect)((function(){fetch("http://localhost:3001/restaurant_menu").then((function(e){return e.text()})).then((function(e){console.log(JSON.stringify(e)),s(JSON.parse(e))}))}),[]);var c=Object(a.useState)("menu_view"),j=Object(i.a)(c,2),l=j[0],b=j[1],o=function(){b("shoppingcart")},d=function(){b("menu_view")},O=function(e){var t=e.handleClick,n=e.text;return Object(u.jsx)("button",{onClick:t,children:n})},x=Object(h.h)(),m=e.restaurant.find((function(e){return e.restaurant_id===parseInt(x.restaurant_id)}));if(null==m)return console.log(x.restaurant_id),Object(u.jsx)("div",{children:"No matchiestaurng restaurant"});var p=function(e){return"shoppingcart"!==e.ViewStatus?Object(u.jsx)("div",{className:g.a.commonView,children:Object(u.jsxs)("div",{className:g.a.menuView,children:[Object(u.jsx)("h1",{children:"Add food to shoppincart"}),r.map((function(e){return Object(u.jsxs)("div",{children:[" ",Object(u.jsxs)("button",{className:g.a.button,onClick:function(){return t=e.item_name,_[v]=t,v++,void console.log(v+_+t);var t},children:[" ",Object(u.jsx)("img",{className:g.a.image,src:"/images/".concat(e.imagepath)})," ",e.item_name," "]})]})})),Object(u.jsx)(O,{handleClick:o,text:"shoppincart",children:" "})]})}):Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{food:_}),Object(u.jsx)(O,{handleClick:d,text:"Close Cart",children:" "})]})},f=function(e){return e.food<1?Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:" Cart is empty "})}):Object(u.jsx)("div",{children:Object(u.jsx)(y,{})})},y=function(){return Object(u.jsxs)("div",{children:[" ",_.map((function(e){return Object(u.jsxs)("div",{children:[" ",e," "]})}))," "]})};return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:g.a.restaurantInfo,children:[Object(u.jsx)("img",{className:g.a.restaurantImage,src:"/images/".concat(m.imagepath)}),"ID",m.restaurant_id," ",m.name," ",m.address,m.operating_hours," ",m.restaurant_type," ",m.price_level]}),Object(u.jsx)("div",{children:Object(u.jsx)(p,{ViewStatus:l})})]})}function S(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:" My restaurants "}),Object(u.jsx)("h1",{children:" Add a new restaurant "}),Object(u.jsx)(j.b,{to:"createrestaurant",children:Object(u.jsx)("button",{children:" Create "})}),Object(u.jsx)("h1",{children:" Other restaurants "})]})}function w(e){var t,n,r,s,c,l,b=Object(a.useState)({name:"",address:"",operating_hours:"",imagepath:"",restaurant_type:"",price_level:""}),o=Object(i.a)(b,2),d=o[0],O=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:" Add a restaurant "}),Object(u.jsx)("br",{}),Object(u.jsx)("form",{onSubmit:function(e){alert("restaurant was submitted"),t=d.name,console.log("1"+t),console.log("2"+d.name),console.log("3"+{name:e.target.value}),h()},children:Object(u.jsxs)("section",{children:[Object(u.jsx)("label",{for:"name"})," Enter a name ",Object(u.jsx)("label",{}),Object(u.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return O({name:e.target.value})},value:d.name}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"address"})," Enter an address ",Object(u.jsx)("label",{}),Object(u.jsx)("input",{type:"text",name:"address",id:"address",onChange:function(e){return O({address:e.target.value})},value:d.address}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"hours"})," Enter the operating hours ",Object(u.jsx)("label",{}),Object(u.jsx)("input",{type:"text",name:"hours",id:"hours",onChange:function(e){return O({hours:e.target.value})},value:d.operating_hours}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"imagepath"})," Enter a file path for your image ",Object(u.jsx)("label",{}),Object(u.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return O({imagepath:e.target.value})},value:d.imagepath}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:" Enter the restaurant type "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",name:"type",id:"buffet",value:"buffet",onChange:function(e){return O({type:e.target.value})}}),Object(u.jsx)("label",{for:"buffet",children:" Buffet "}),Object(u.jsx)("input",{type:"radio",name:"type",id:"fastfood",value:"fastfood",onChange:function(e){return O({type:e.target.value})}}),Object(u.jsx)("label",{for:"fastfood",children:" Fast food "}),Object(u.jsx)("input",{type:"radio",name:"type",id:"fastcasual",value:"fastcasual",onChange:function(e){return O({type:e.target.value})}}),Object(u.jsx)("label",{for:"fastcasual",children:" Fast casual "}),Object(u.jsx)("input",{type:"radio",name:"type",id:"casualdining",value:"casualdining",onChange:function(e){return O({type:e.target.value})}}),Object(u.jsx)("label",{for:"casualdining",children:" Casual dining "}),Object(u.jsx)("input",{type:"radio",name:"type",id:"finedining",value:"finedining",onChange:function(e){return O({type:e.target.value})}}),Object(u.jsx)("label",{for:"finedining",children:" Fine dining "}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:" Enter the price level"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",name:"price",id:"price1",value:"\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(u.jsx)("label",{for:"price1",children:" \u20ac "}),Object(u.jsx)("input",{type:"radio",name:"price",id:"price2",value:"\u20ac\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(u.jsx)("label",{for:"price2",children:" \u20ac\u20ac "}),Object(u.jsx)("input",{type:"radio",name:"price",id:"price3",value:"\u20ac\u20ac\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(u.jsx)("label",{for:"price3",children:" \u20ac\u20ac\u20ac "}),Object(u.jsx)("input",{type:"radio",name:"price",id:"price4",value:"\u20ac\u20ac\u20ac\u20ac",onChange:function(e){return O({price:e.target.value})}}),Object(u.jsx)("label",{for:"price4",children:" \u20ac\u20ac\u20ac\u20ac "}),Object(u.jsx)("button",{type:"submit",children:" Submit "})]})}),Object(u.jsx)(j.b,{to:"createmenu",children:Object(u.jsx)("button",{onClick:h,children:" Done "})})]});function h(e){console.log(JSON.stringify({name:t,address:n,operating_hours:r,imagepath:s,restaurant_type:c,price_level:l})),console.log(t),fetch("http://localhost:3001/restaurant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,address:n,operating_hours:r,imagepath:s,restaurant_type:c,price_level:l})}).then((function(e){return e.text()}))}}function N(){var e=Object(a.useState)({item_name:"",description:"",price:"",imagepath:""}),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:" Create a menu for your restaurant "}),Object(u.jsx)("br",{}),Object(u.jsxs)("section",{children:[Object(u.jsx)("label",{for:"item_name"})," Enter a name ",Object(u.jsx)("label",{}),Object(u.jsx)("input",{type:"text",name:"item_name",id:"item_name",onChange:function(e){return r({name:e.target.value})},value:n.item_name}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"description"})," Enter a description ",Object(u.jsx)("label",{}),Object(u.jsx)("input",{type:"text",name:"description",id:"description",onChange:function(e){return r({name:e.target.value})},value:n.description}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"price"})," Enter a price ",Object(u.jsx)("label",{}),Object(u.jsx)("input",{type:"text",name:"price",id:"price",onChange:function(e){return r({name:e.target.value})},value:n.price}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"imagepath"})," Enter an imagepath for your image ",Object(u.jsx)("label",{}),Object(u.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return r({name:e.target.value})},value:n.imagepath}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}),Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("button",{children:" Done "})})]})}function C(e){return Object(u.jsx)("div",{className:"menu",children:e.menutest.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{children:[" ",e.item_name," "]})})}))})}function I(e){return Object(u.jsx)("div",{className:"menu",children:e.usertest.map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[" ",e.username," "]})," ",Object(u.jsxs)("div",{children:[" ",e.password," "]})]})}))})}var E=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),c=Object(i.a)(s,2),b=c[0],d=c[1],x=Object(a.useState)([]),m=Object(i.a)(x,2),f=m[0],g=m[1],v=Object(a.useState)([]),_=Object(i.a)(v,2),E=_[0];function F(){fetch("http://localhost:3001/r").then((function(e){return e.text()})).then((function(e){console.log("mooi"+JSON.stringify(e)),r(JSON.parse(e))}))}return _[1],Object(a.useEffect)((function(){F()}),[]),Object(a.useEffect)((function(){fetch("/restaurant_menu").then((function(e){return e.text()})).then((function(e){console.log(JSON.stringify(e)),d(JSON.parse(e))}))}),[]),Object(a.useEffect)((function(){fetch("/user_login").then((function(e){return e.text()})).then((function(e){console.log(JSON.stringify(e)),g(JSON.parse(e))}))}),[]),Object(u.jsxs)(j.a,{children:[Object(u.jsxs)("div",{className:"topBar",children:[Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)("div",{style:{paddingRight:"50px"},children:"Home"})}),Object(u.jsx)(j.b,{to:"/restaurants",children:Object(u.jsx)("div",{children:"RESTAURANTS"})})]}),Object(u.jsxs)(h.d,{children:[Object(u.jsx)(h.b,{path:"/",element:Object(u.jsx)(l,{})}),Object(u.jsx)(h.b,{path:"/loginrestaurant",element:Object(u.jsx)(o,{restest:E})}),Object(u.jsx)(h.b,{path:"/loginconsumer",element:Object(u.jsx)(O,{})}),Object(u.jsx)(h.b,{path:"/restaurants",element:Object(u.jsx)(p,{restaurants:n})}),Object(u.jsx)(h.b,{path:"/restaurants/:restaurant_id/*",element:Object(u.jsx)(y,{restaurant:n})}),Object(u.jsx)(h.b,{path:"/restaurantui",element:Object(u.jsx)(S,{})}),Object(u.jsx)(h.b,{path:"/restaurantui/createrestaurant",element:Object(u.jsx)(w,{})}),Object(u.jsx)(h.b,{path:"/restaurantui/createrestaurant/createmenu",element:Object(u.jsx)(N,{})}),Object(u.jsx)(h.b,{path:"/testmenu",element:Object(u.jsx)(C,{menutest:b})}),Object(u.jsx)(h.b,{path:"/testuserlogin",element:Object(u.jsx)(I,{usertest:f})})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root")),F()},7:function(e,t,n){e.exports={menuView:"RestaurantDetailView_menuView___zFXT",commonView:"RestaurantDetailView_commonView__1WOeB",button:"RestaurantDetailView_button__2ttmc",image:"RestaurantDetailView_image__1blJz",restaurantInfo:"RestaurantDetailView_restaurantInfo__i4Yit",restaurantImage:"RestaurantDetailView_restaurantImage__2snOH"}},8:function(e,t,n){e.exports={product:"RestaurantList_product__2lHsX",header:"RestaurantList_header__2Gn4a",image:"RestaurantList_image__13Vgk"}}},[[19,1,2]]]);
//# sourceMappingURL=main.56d43397.chunk.js.map