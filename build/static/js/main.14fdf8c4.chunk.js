(this.webpackJsonpawaproject=this.webpackJsonpawaproject||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={menuView:"RestaurantDetailView_menuView___zFXT",shoppingcart:"RestaurantDetailView_shoppingcart__15pnV",shoppingcartContainer:"RestaurantDetailView_shoppingcartContainer__2SKn_",product:"RestaurantDetailView_product__2GEe3",header:"RestaurantDetailView_header__1yp4J",commonView:"RestaurantDetailView_commonView__1WOeB",button:"RestaurantDetailView_button__2ttmc",image:"RestaurantDetailView_image__1blJz",restaurantInfo:"RestaurantDetailView_restaurantInfo__i4Yit",restaurantImage:"RestaurantDetailView_restaurantImage__2snOH",menuInfo:"RestaurantDetailView_menuInfo__89DEH",menuImage:"RestaurantDetailView_menuImage__1OkRe"}},function(e,t,n){e.exports={product:"RestaurantUi_product__pXt8W",header:"RestaurantUi_header__2mDFU",image:"RestaurantUi_image__2AJnh"}},function(e,t,n){e.exports={product:"RestaurantList_product__2lHsX",header:"RestaurantList_header__2Gn4a",image:"RestaurantList_image__13Vgk"}},,,,function(e,t,n){e.exports={container:"OrderStatus_container__3Y75s"}},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(12),s=n.n(c),i=(n(18),n(19),n(5)),o=n(0);function j(){var e=localStorage.getItem("status_time");return localStorage.clear(),localStorage.setItem("status_time",e),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"LOGIN"}),Object(o.jsx)("h3",{children:"KIRJAUDU SIS\xc4\xc4N TAI REKISTER\xd6IDY"}),Object(o.jsx)(i.b,{to:"loginconsumer",children:Object(o.jsx)("button",{children:"ASIAKKAANA"})}),Object(o.jsx)(i.b,{to:"loginrestaurant",children:Object(o.jsx)("button",{children:"RAVINTOLOITSIJANA"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}var l=n(2),b=n(3),u=n(4);var d=function(e){var t=e.Login,n=e.error,r=Object(a.useState)({email:"",password:""}),c=Object(b.a)(r,2),s=c[0],i=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(o.jsxs)("div",{className:"form-inner",children:[Object(o.jsx)("h2",{children:"Login "}),""!=n?Object(o.jsx)("div",{className:"error",children:n}):"",Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name:",children:"Nimi: "}),Object(o.jsx)("input",{type:"name",name:"name",id:"name",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{name:e.target.value}))},value:s.name})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(o.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(o.jsx)("input",{type:"submit",value:"LOGIN"})]})})};function O(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(b.a)(c,2),j=s[0],O=(s[1],Object(a.useState)([])),h=Object(b.a)(O,2),x=h[0],p=h[1],m=Object(a.useState)({username:"",password:""}),g=Object(b.a)(m,2),f=g[0],v=g[1],y=function(e){fetch("http://localhost:3001/restaurant_login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){console.log(e),p(JSON.parse(e)),"[]"!==e?(console.log("Kirjauduttu sis\xe4\xe4n"),r(!0)):console.log("Kirjautuminen ep\xe4onnistui")}))};y&&(localStorage.setItem("restaurant_key",JSON.stringify(x)),localStorage.setItem("auth","restaurant"));return Object(o.jsxs)("div",{className:"LoginRestaurant",children:[!0===n?Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsx)(u.a,{to:"/restaurantUi"}),Object(o.jsx)("button",{onClick:function(){r(!1)},children:"Kirjaudu ulos"})]}):Object(o.jsx)(d,{Login:y,error:j}),Object(o.jsx)("div",{className:"menu",children:Object(o.jsx)("div",{children:" morjes omistaja ... "})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:" Create an account "}),Object(o.jsx)("div",{children:"Enter your username"}),Object(o.jsxs)("section",{children:[Object(o.jsx)("label",{htmlFor:"username"})," Enter your email ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"username",id:"username",onChange:function(e){return v(Object(l.a)(Object(l.a)({},f),{},{username:e.target.value}))},value:f.username}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"password"})," Enter a password ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"password",id:"password",onChange:function(e){return v(Object(l.a)(Object(l.a)({},f),{},{password:e.target.value}))},value:f.password}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsx)(i.b,{to:"/restaurantUi",children:Object(o.jsx)("button",{onClick:function(e){alert("a new user was submitted"),function(e){console.log("dt:"+e),fetch("http://localhost:3001/create_restaurant_login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){alert(e)}))}(f)},children:" create "})})]})]})}var h=function(e){var t=e.Login,n=e.error,r=Object(a.useState)({email:"",password:""}),c=Object(b.a)(r,2),s=c[0],i=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(o.jsxs)("div",{className:"form-inner",children:[Object(o.jsx)("h2",{children:"Login "}),""!=n?Object(o.jsx)("div",{className:"error",children:n}):"",Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name:",children:"Nimi: "}),Object(o.jsx)("input",{type:"name",name:"name",id:"name",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{name:e.target.value}))},value:s.name})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(o.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return i(Object(l.a)(Object(l.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(o.jsx)("input",{type:"submit",value:"LOGIN"})]})})};function x(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(b.a)(c,2),j=s[0],d=(s[1],Object(a.useState)([])),O=Object(b.a)(d,2),x=O[0],p=O[1],m=Object(a.useState)({username:"",password:""}),g=Object(b.a)(m,2),f=g[0],v=g[1],y=function(e){fetch("http://localhost:3001/user_login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){console.log("data: "+e),p(JSON.parse(e)),"[]"!==e?(console.log("Kirjauduttu sis\xe4\xe4n"),r(!0)):console.log("Kirjautuminen ep\xe4onnistui")}))};y&&(localStorage.setItem("user_key",JSON.stringify(x)),localStorage.setItem("auth","user"));return Object(o.jsxs)("div",{className:"LoginConsumer",children:[!0===n?Object(o.jsxs)("div",{className:"welcome",children:[Object(o.jsx)(u.a,{to:"/restaurants"}),Object(o.jsx)("button",{onClick:function(){r(!1)},children:"Kirjaudu ulos"})]}):Object(o.jsx)(h,{Login:y,error:j}),Object(o.jsx)("div",{className:"menu",children:Object(o.jsx)("div",{children:" Terve herra ... "})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:" Create an account "}),Object(o.jsx)("div",{children:"Enter your username"}),Object(o.jsxs)("section",{children:[Object(o.jsx)("label",{htmlFor:"username"})," Enter your username ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"username",id:"username",onChange:function(e){return v(Object(l.a)(Object(l.a)({},f),{},{username:e.target.value}))},value:f.username}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"password"})," Enter a password ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"password",id:"password",onChange:function(e){return v(Object(l.a)(Object(l.a)({},f),{},{password:e.target.value}))},value:f.password}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsx)(i.b,{to:"/restaurants",children:Object(o.jsx)("button",{onClick:function(e){alert("a new user was submitted"),function(e){console.log("dt:"+e),fetch("http://localhost:3001/create_user_login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){alert(e)}))}(f)},children:" create "})})]})]})}var p=n(9),m=n.n(p),g=n(13),f=n.n(g);function v(){var e;return null===localStorage.getItem("status_time")?(localStorage.setItem("status_time",48),e=localStorage.getItem("status_time")):e=localStorage.getItem("status_time"),null!==localStorage.getItem("status_time")?Object(o.jsxs)("div",{className:f.a.container,children:[{}.orderer_username," ",Object(o.jsx)("div",{children:"TILAUKSENNE ON VALMISTUMASSA"}),"ARVIOITU TOIMITUSAIKA:",Object(o.jsxs)("div",{children:[e," min"]})]}):null}function y(){var e=Object(a.useState)(),t=Object(b.a)(e,2),n=t[0],r=t[1];return console.log("autti:"+n),"user"===n?(console.log("user"+n),Object(o.jsxs)("div",{className:"topBar",children:[Object(o.jsx)(i.b,{to:"/restaurants",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"RESTAURANTS"})}),Object(o.jsx)(i.b,{to:"/orderhistory",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"order history"})})]})):"restaurant"===n?(console.log("rest"+n),Object(o.jsxs)("div",{className:"topBar",children:[Object(o.jsx)(i.b,{to:"/restaurantui",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"YOUR RESTAURANTS"})}),Object(o.jsx)(i.b,{to:"/orderhistory",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"order history"})})]})):(r(localStorage.getItem("auth")),Object(o.jsx)("div",{className:"topBar",children:"Joo"}))}function _(){var e=localStorage.getItem("user_key");console.log(JSON.parse(e));var t=Object(a.useState)([]),n=Object(b.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){fetch("http://localhost:3001/r").then((function(e){return e.text()})).then((function(e){console.log("mooi"+e),c(JSON.parse(e))}))}),[]),null!==e?Object(o.jsxs)("div",{className:m.a.restaurantList,children:[Object(o.jsx)("div",{className:"topBar",children:Object(o.jsx)(y,{})}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),e,Object(o.jsx)(v,{}),Object(o.jsx)("div",{children:r.map((function(e){return Object(o.jsx)(i.b,{to:"/restaurants/"+e.restaurant_id,children:Object(o.jsxs)("div",{className:m.a.product,children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:m.a.image,src:"./images/".concat(e.imagepath)})}),Object(o.jsx)("div",{className:m.a.header,children:e.name}),Object(o.jsx)("div",{children:e.address}),Object(o.jsx)("div",{children:e.restaurant_id})]})})}))})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"YOU HAVE TO LOG IN"}),Object(o.jsx)("button",{children:Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"PALAA P\xc4\xc4SIVULLE"})})})]})}var S=n(7),N=n.n(S),w=0,I={products:[]},C=[];function E(e,t){var n=Object(a.useState)([]),r=Object(b.a)(n,2),c=r[0],s=r[1],j=Object(a.useState)([]),l=Object(b.a)(j,2),d=l[0],O=l[1],h=localStorage.getItem("user_key");console.log(JSON.parse(h));JSON.parse(h);Object(a.useEffect)((function(){fetch("http://localhost:3001/r").then((function(e){return e.text()})).then((function(e){console.log("mooi"+e),O(JSON.parse(e))})),function(){console.log(f.restaurant_id+"joooo");var e=[{id:f.restaurant_id}];fetch("http://localhost:3001/restaurant_menu",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){console.log("tata:"+JSON.parse(e)),s(JSON.parse(e))}))}()}),[]);var x=Object(a.useState)(""),p=Object(b.a)(x,2),m=p[0],g=p[1],f=Object(u.h)(),_=d.find((function(e){return e.restaurant_id===parseInt(f.restaurant_id)}));if(null==_)return console.log("terve"+f.restaurant_id),Object(o.jsx)("div",{children:"No matching restaurant"});var S=function(e){e.ViewStatus;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:N.a.header,children:Object(o.jsx)("h1",{children:"Add food to shoppincart"})}),Object(o.jsxs)("div",{className:N.a.commonView,children:[Object(o.jsx)("div",{className:N.a.menuView,children:c.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:N.a.product,children:Object(o.jsxs)("button",{className:N.a.button,onClick:function(){return t=e,console.log("HANDLEFOODCLICK"),void(C.includes(t)?(console.log("handling "+JSON.stringify(t)),console.log("Handling "+JSON.stringify(C)),g("menu_view")):(C[w]=I.products=t,w++,g("shoppingcart")));var t},children:[Object(o.jsx)("img",{className:N.a.image,src:"/images/".concat(e.imagepath)})," ",e.item_name]})})})}))})," "]}),Object(o.jsx)("div",{className:N.a.menuInfo,children:Object(o.jsx)(E,{food:C})})]})},E=function(e){var t=e.food;if(g("menu_view"),t<1)return Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:" Cart is empty "})});console.log("CARTVIEW");var n=0;return C.map((function(e){return n+=parseFloat(e.price)})),console.log("t\xe4ss\xe4 n\xe4kyy"+JSON.stringify(C)+n),localStorage.setItem("shoppincart",JSON.stringify(C)+"..."+_.name+"..."+_.owner_id),Object(o.jsx)("div",{className:N.a.shoppingcartContainer,children:Object(o.jsxs)("div",{className:N.a.shoppingcart,children:[" ",C.map((function(e){return Object(o.jsxs)("div",{className:N.a.shoppingcartContainer,children:[Object(o.jsx)("img",{className:N.a.menuImage,src:"/images/".concat(e.imagepath)}),Object(o.jsxs)("div",{style:{},children:[" ",e.item_name,Object(o.jsx)("div",{children:e.description}),Object(o.jsx)("div",{children:e.price})]}),Object(o.jsx)("button",{style:{},onClick:function(){return function(e){console.log("HANDLEDELETE"),console.log("poistetaan: "+JSON.stringify(e));var t=0;console.log("1"+C),console.log("1"+JSON.stringify(C)),C.forEach((function(n){n===e?(console.log("onsama"+JSON.stringify(n)+JSON.stringify(e)),console.log("onsamaitem"+C[t]),console.log("byt poistuu index: "+JSON.stringify(C[t])),C.splice(C.indexOf(t),1),console.log(C),w=0,g("shoppingcart")):t++}))}(e)},children:Object(o.jsx)("div",{children:"DELETE"})})]})})),"LOPPUSUMMA: ",n+"\u20ac",Object(o.jsxs)("div",{children:[Object(o.jsx)(i.b,{to:"/payment/",children:Object(o.jsx)("button",{onClick:J,food:C,summa:n,style:{margin:"20px"},children:"PAY"})}),Object(o.jsxs)("p",{children:[console.log(C+n+"testii"+t)," "]})]})]})})},J=function(e){var t=e.food,n=e.summa;return console.log("mo"+t+n)};return null!==h?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"topBar",children:Object(o.jsx)(y,{})}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),Object(o.jsx)(v,{}),Object(o.jsxs)("div",{className:N.a.restaurantInfo,children:[Object(o.jsx)("img",{className:N.a.restaurantImage,src:"/images/".concat(_.imagepath)}),"ID",_.restaurant_id," ",_.name," ",_.address,_.operating_hours," ",_.restaurant_type," ",_.price_level]}),Object(o.jsx)("div",{children:Object(o.jsx)(S,{ViewStatus:m})})]}):Object(o.jsx)("div",{children:"You must sign in"})}var J=n(8),T=n.n(J);function A(){var e=Object(a.useState)({item_name:"",description:"",price:"",imagepath:"",owner_id:""}),t=Object(b.a)(e,2),n=t[0],r=t[1],c=function(e){alert("menu was submitted"),r(n.owner_id=s),function(e){console.log(e),fetch("http://localhost:3001/create_restaurant_menu",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){alert(e)}))}(n)};var s=Object(u.h)().id;return console.log(s),null===s?Object(o.jsx)("div",{children:"Something went wrong"}):null!==localStorage.getItem("restaurant_key")?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"topBar",children:Object(o.jsx)(y,{})}),Object(o.jsx)("h1",{children:" Create a menu for your restaurant "}),Object(o.jsx)("br",{}),Object(o.jsx)("section",{children:Object(o.jsxs)("form",{onSubmit:c,children:[Object(o.jsx)("label",{for:"item_name"})," Enter a name ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"item_name",id:"item_name",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{item_name:e.target.value}))},value:n.item_name}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"description"})," Enter a description ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"description",id:"description",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{description:e.target.value}))},value:n.description}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"price"})," Enter a price ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"price",id:"price",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{price:e.target.value}))},value:n.price}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"imagepath"})," Enter an imagepath for your image ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{imagepath:e.target.value}))},value:n.imagepath}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}),Object(o.jsx)(i.b,{to:"/restaurantui",children:Object(o.jsx)("button",{onClick:c,children:" Submit "})})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"YOU HAVE TO LOG IN"}),Object(o.jsx)("button",{children:Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"PALAA P\xc4\xc4SIVULLE"})})})]})}function L(){var e,t=localStorage.getItem("restaurant_key"),n=Object(a.useState)("rest"),r=Object(b.a)(n,2),c=r[0],s=r[1],j=localStorage.getItem("status_time"),l=Object(a.useState)([]),u=Object(b.a)(l,2),d=u[0],O=u[1],h=[{id:JSON.parse(t)[0].restaurant_id}];return Object(a.useEffect)((function(){fetch("http://localhost:3001/myrestaurants",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.text()})).then((function(e){console.log("tata:"+JSON.parse(e)),O(JSON.parse(e))}))}),[]),null!==t?"menu"!==c?Object(o.jsxs)("div",{className:T.a.restaurantList,children:[Object(o.jsx)("div",{className:"topBar",children:Object(o.jsx)(y,{})}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),t,Object(o.jsx)("img",{style:{width:"100%"},src:"/images/arrival.png"}),Object(o.jsxs)("div",{children:["STATUS TIME: ",j,Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){null!==localStorage.getItem("status_time")&&(j>=1?(localStorage.setItem("status_time",j-2),window.location.reload()):localStorage.removeItem(j))},children:"SET STATUS TIME -10 MIN"})}),d.map((function(t){return Object(o.jsxs)("div",{className:T.a.product,children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:T.a.image,src:"./images/".concat(t.imagepath)})}),Object(o.jsx)("div",{className:T.a.header,children:t.name}),Object(o.jsx)("div",{children:t.address}),Object(o.jsxs)("div",{children:[t.restaurant_id,Object(o.jsxs)(i.b,{to:"/createmenu/"+t.restaurant_id,children:[" ",Object(o.jsx)("button",{className:T.a.button,onClick:function(){return n=t.restaurant_id,e=n,console.log(e),void s("menu");var n}})]})]})]})}))]}),Object(o.jsx)(i.b,{to:"createrestaurant",children:Object(o.jsx)("button",{children:" Create "})})]}):Object(o.jsx)(A,{rest_id:e}):Object(o.jsx)("div",{className:"restaurantInfo",children:"INFO"})}function R(){var e=Object(a.useState)({name:"",address:"",operating_hours:"",imagepath:"",restaurant_type:"",price_level:"",owner_id:""}),t=Object(b.a)(e,2),n=t[0],r=t[1],c=function(e){alert("restaurant was submitted"),r(n.owner_id=JSON.parse(localStorage.getItem("restaurant_key"))[0].restaurant_id),console.log(n),function(e){console.log("dt:"+e),fetch("http://localhost:3001/restaurant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.text()})).then((function(e){alert(e)}))}(n)};return console.log(JSON.parse(localStorage.getItem("restaurant_key"))),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:" Add a restaurant "}),Object(o.jsx)("br",{}),Object(o.jsx)("form",{onSubmit:c,children:Object(o.jsxs)("section",{children:[Object(o.jsx)("label",{for:"name"})," Enter a name ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{name:e.target.value}))},value:n.name}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"address"})," Enter an address ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"address",id:"address",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{address:e.target.value}))},value:n.address}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"hours"})," Enter the operating hours ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"hours",id:"hours",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{operating_hours:e.target.value}))},value:n.operating_hours}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"imagepath"})," Enter a file path for your image ",Object(o.jsx)("label",{}),Object(o.jsx)("input",{type:"text",name:"imagepath",id:"imagepath",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{imagepath:e.target.value}))},value:n.imagepath}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:" Enter the restaurant type "}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"radio",name:"type",id:"buffet",value:"buffet",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(o.jsx)("label",{for:"buffet",children:" Buffet "}),Object(o.jsx)("input",{type:"radio",name:"type",id:"fastfood",value:"fastfood",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(o.jsx)("label",{for:"fastfood",children:" Fast food "}),Object(o.jsx)("input",{type:"radio",name:"type",id:"fastcasual",value:"fastcasual",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(o.jsx)("label",{for:"fastcasual",children:" Fast casual "}),Object(o.jsx)("input",{type:"radio",name:"type",id:"casualdining",value:"casualdining",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(o.jsx)("label",{for:"casualdining",children:" Casual dining "}),Object(o.jsx)("input",{type:"radio",name:"type",id:"finedining",value:"finedining",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{restaurant_type:e.target.value}))}}),Object(o.jsx)("label",{for:"finedining",children:" Fine dining "}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:" Enter the price level"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"radio",name:"price",id:"price1",value:"o",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{price_level:e.target.value}))}}),Object(o.jsx)("label",{for:"price1",children:" \u20ac "}),Object(o.jsx)("input",{type:"radio",name:"price",id:"price2",value:"oo",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{price_level:e.target.value}))}}),Object(o.jsx)("label",{for:"price2",children:" \u20ac\u20ac "}),Object(o.jsx)("input",{type:"radio",name:"price",id:"price3",value:"ooo",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{price_level:e.target.value}))}}),Object(o.jsx)("label",{for:"price3",children:" \u20ac\u20ac\u20ac "}),Object(o.jsx)("input",{type:"radio",name:"price",id:"price4",value:"oooo",onChange:function(e){return r(Object(l.a)(Object(l.a)({},n),{},{price_level:e.target.value}))}}),Object(o.jsx)("label",{for:"price4",children:" \u20ac\u20ac\u20ac\u20ac "})]})}),Object(o.jsx)(i.b,{to:"createmenu",children:Object(o.jsx)("button",{onClick:c,children:" Submit "})})]})}function V(e){var t=localStorage.getItem("auth"),n=localStorage.getItem(t+"_key"),r=JSON.parse(n)[0];console.log("loggedin"+n),console.log("user"+r);var c=Object(a.useState)([]),s=Object(b.a)(c,2),j=s[0],l=s[1];if(console.log(JSON.stringify(r)),Object(a.useEffect)((function(){"user"===t&&fetch("http://localhost:3001/restaurantorderhistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.text()})).then((function(e){console.log("data:"+e),l(JSON.parse(e))})),"restaurant"===t&&fetch("http://localhost:3001/userorderhistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.text()})).then((function(e){console.log("data:"+e),l(JSON.parse(e))}))}),[]),null!==t)return console.log(n),"user"===t?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"topBar",children:Object(o.jsx)(y,{})}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),Object(o.jsx)("h3",{children:" k\xe4ytt\xe4j\xe4n tekem\xe4t tilaukset "}),Object(o.jsx)("div",{className:"orderHistory",children:j.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[" ",e.restaurant_name," "]}),Object(o.jsxs)("div",{children:[" ",e.products," "]}),Object(o.jsxs)("div",{children:[" ",e.total_price," "]})]})}))})]}):"restaurant"===t?Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"topBar",children:Object(o.jsx)(y,{})}),Object(o.jsx)("h3",{children:" ravintolalle tallennetut tilaukset "}),Object(o.jsx)("div",{className:"orderHistoryRestaurant",children:j.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[" ",e.restaurant_name," "]}),Object(o.jsxs)("div",{children:[" ",e.products," "]}),Object(o.jsxs)("div",{children:[" ",e.total_price," "]})]})}))})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"YOU HAVE TO LOG IN"}),Object(o.jsx)("button",{children:Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"PALAA P\xc4\xc4SIVULLE"})})})]})}function k(e){var t=localStorage.getItem("shoppincart");console.log("cart:"+t);var n=t.split("...");console.log(n[0]);var r=JSON.parse(n[0]),c=0,s="",j=n[1],l=n[2];console.log(n[1]);var d=JSON.parse(localStorage.getItem("user_key"));d=(d=JSON.stringify(d[0].username)).replace('"',"").replace('"',""),console.log("orderer: "+d);var O={orderer_username:"",products:"",total_price:"",owner_id:"",restaurant_name:""},h={restaurant_name:"",products:"",total_price:""},x=Object(a.useState)(!1),p=Object(b.a)(x,2),m=p[0],g=p[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"topBar",children:Object(o.jsx)(y,{})}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("div",{style:{paddingRight:"50px"},children:"Log Out"})}),console.log(m),!0===m?Object(o.jsxs)("div",{children:[console.log(m),Object(o.jsx)(u.a,{to:"/restaurants"})]}):Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:" your order: "}),r.map((function(e){return Object(o.jsxs)("div",{children:[" ",e.item_name," ",e.price,Object(o.jsxs)("script",{children:[c+=parseInt(e.price),s+=e.item_name+","]})]})})),Object(o.jsx)("h3",{children:" total price: "})," ",Object(o.jsxs)("div",{children:[c," e"]}),Object(o.jsx)("label",{htmlFor:":",children:" Select a delivery location "}),Object(o.jsx)("input",{type:"text",name:"delivery",id:"delivery"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:":",children:" Special requests for your order "}),Object(o.jsx)("br",{}),Object(o.jsx)("textarea",{name:"request",id:"request",rows:"3",cols:"40"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:" Select a payment method"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("label",{for:"pay1",children:" Visa "}),Object(o.jsx)("input",{type:"radio",name:"pay",id:"pay1",value:"Visa"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"pay2",children:" Mastercard "}),Object(o.jsx)("input",{type:"radio",name:"pay",id:"pay1",value:"Mastercard"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{for:"pay2",children:" American Express "}),Object(o.jsx)("input",{type:"radio",name:"pay",id:"pay1",value:"AmericanExpress"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:" Enter your credit card information "}),Object(o.jsx)("label",{htmlFor:":",children:" Enter your  cardnumber "}),Object(o.jsx)("input",{type:"text",name:"cardnumber",id:"cardnumber"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:":",children:" Date of expiration "}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:":",children:" month  "}),Object(o.jsxs)("select",{name:"month",id:"month",children:[Object(o.jsx)("option",{value:"01",children:"01"}),Object(o.jsx)("option",{value:"02",children:"02"}),Object(o.jsx)("option",{value:"03",children:"03"}),Object(o.jsx)("option",{value:"04",children:"04"}),Object(o.jsx)("option",{value:"05",children:"05"}),Object(o.jsx)("option",{value:"06",children:"06"}),Object(o.jsx)("option",{value:"07",children:"07"}),Object(o.jsx)("option",{value:"08",children:"08"}),Object(o.jsx)("option",{value:"09",children:"09"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"11",children:"11"}),Object(o.jsx)("option",{value:"12",children:"12"})]}),Object(o.jsx)("label",{htmlFor:":",children:" year  "}),Object(o.jsxs)("select",{name:"year",id:"year",children:[Object(o.jsx)("option",{value:"01",children:"21"}),Object(o.jsx)("option",{value:"02",children:"22"}),Object(o.jsx)("option",{value:"03",children:"23"}),Object(o.jsx)("option",{value:"04",children:"24"}),Object(o.jsx)("option",{value:"04",children:"25"}),Object(o.jsx)("option",{value:"04",children:"26"}),Object(o.jsx)("option",{value:"04",children:"27"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:":",children:" CVC "}),Object(o.jsx)("textarea",{name:"cardnumber",id:"cardnumber",cols:"3",rows:"1"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("button",{onClick:function(){O.orderer_username=d,O.products=s,O.total_price=c,O.owner_id=l,O.restaurant_name=j,h.restaurant_name=j,h.products=s,h.total_price=c,console.log("order: "+JSON.stringify(O)),localStorage.setItem("order",JSON.stringify(O)),console.log("order:"+localStorage.getItem("order")),fetch("http://localhost:3001/restaurant_orderhistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}).then((function(e){return e.text()})).then((function(e){alert(e)})),fetch("http://localhost:3001/user_orderhistory",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.text()})).then((function(e){alert(e)})),g(!0)},children:[" Submit order ",console.log(m)]})]})]})}var F=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsxs)(u.d,{children:[Object(o.jsx)(u.b,{path:"/",element:Object(o.jsx)(j,{})}),Object(o.jsx)(u.b,{path:"/loginrestaurant",element:Object(o.jsx)(O,{})}),Object(o.jsx)(u.b,{path:"/loginconsumer",element:Object(o.jsx)(x,{})}),Object(o.jsx)(u.b,{path:"/restaurants",element:Object(o.jsx)(_,{})}),Object(o.jsx)(u.b,{path:"/restaurants/:restaurant_id/*",element:Object(o.jsx)(E,{restaurant:E})}),Object(o.jsx)(u.b,{path:"/Createmenu/:id*",element:Object(o.jsx)(A,{rest_id:A})}),Object(o.jsx)(u.b,{path:"/restaurantui",element:Object(o.jsx)(L,{})}),Object(o.jsx)(u.b,{path:"/restaurantui/createrestaurant",element:Object(o.jsx)(R,{})}),Object(o.jsx)(u.b,{path:"/orderhistory",element:Object(o.jsx)(V,{})}),Object(o.jsx)(u.b,{path:"/payment",element:Object(o.jsx)(k,{})})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root")),D()}],[[21,1,2]]]);
//# sourceMappingURL=main.14fdf8c4.chunk.js.map