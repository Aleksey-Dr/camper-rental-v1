"use strict";(self.webpackChunkcamper_rental=self.webpackChunkcamper_rental||[]).push([[493],{4493:function(e,i,r){r.r(i),r.d(i,{default:function(){return W}});var t=r(2791),a=r(4420),c=r(6154),s=r(184),n=function(){return(0,s.jsx)(c.g4,{height:"80",width:"80",color:"rgba(0, 0, 0, 0.75)",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{margin:"auto"},visible:!0})},l="Button_btn__W1TTO",d=function(e){var i=e.title;return(0,s.jsx)("button",{className:l,children:i})};var o=r.p+"static/media/icons.729e9a929b7e34d3b53044d94d15eadb.svg",m={card:"CamperCard_card__zWE0Q","card-img":"CamperCard_card-img__laDGy","card-information":"CamperCard_card-information__l2-Ky","card-header":"CamperCard_card-header__TqGrk","card-title":"CamperCard_card-title__LjXlf","card-price":"CamperCard_card-price__fJwNP","card-icon-star":"CamperCard_card-icon-star__lTPhn","card-icon-location":"CamperCard_card-icon-location__51+dG","card-description":"CamperCard_card-description__hqXNM","card-equipment":"CamperCard_card-equipment__rWp0x","card-equipment-item":"CamperCard_card-equipment-item__0phvU"},h=function(e){var i=e.img,r=e.title,t=e.price,a=e.rating,c=e.reviews,n=e.description,l=e.details,h=Object.keys(l);return(0,s.jsxs)("div",{className:m.card,children:[(0,s.jsx)("img",{src:i,alt:"Camper",className:m["card-img"]}),(0,s.jsxs)("div",{className:m["card-information"],children:[(0,s.jsxs)("div",{className:m["card-header"],children:[(0,s.jsx)("h2",{className:m["card-title"],children:r}),(0,s.jsxs)("span",{className:m["card-price"],children:["\u20ac",t]})]}),(0,s.jsxs)("span",{className:m["card-reviews"],children:[(0,s.jsx)("svg",{width:"16",height:"16",className:m["card-icon-star"],children:(0,s.jsx)("use",{href:"".concat(o,"#icon-star")})}),a,"(",c," Reviews)"]}),(0,s.jsxs)("span",{className:m["card-location"],children:[(0,s.jsx)("svg",{width:"16",height:"16",className:m["card-icon-location"],children:(0,s.jsx)("use",{href:"".concat(o,"#icon-map-pin")})}),"Kyiv, Ukraine"]}),(0,s.jsx)("p",{className:m["card-description"],children:n}),(0,s.jsx)("ul",{className:m["card-equipment"],children:h.map((function(e){return(0,s.jsxs)("li",{className:m["card-equipment-item"],children:[(0,s.jsx)("svg",{width:"20",height:"20",children:(0,s.jsx)("use",{})}),(0,s.jsx)("span",{children:e})]},e)}))}),(0,s.jsx)(d,{title:"Show more"})]})]})},p=r(7234),_=function(e){return e.campers.campers},u=function(e){return e.campers},f=function(e){return e.filter.value},x="MainContent_content__OGTEJ",j="MainContent_content-list__dzwXT",v=function(){var e=(0,a.I0)();(0,t.useEffect)((function(){e((0,p.NL)())}),[e]);var i=(0,a.v9)(f),r=(0,a.v9)(_),c=(0,a.v9)(u),l=c.isLoading,d=c.error,o=i.toLowerCase(),m=r.filter((function(e){return e.name.toLowerCase().includes(o)}));return(0,s.jsxs)("div",{className:x,children:[l&&(0,s.jsx)(n,{}),d&&(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Error: "}),d]}),(0,s.jsx)("ul",{className:j,children:m.map((function(e){return(0,s.jsx)(h,{img:e.gallery[0],title:e.name,price:e.price,rating:e.rating,reviews:e.reviews.length,description:e.description,details:e.details},e._id)}))})]})},N={form:"FormLocation_form__0ok9u",input:"FormLocation_input__nkW36"},g=function(){return(0,s.jsxs)("form",{className:N.form,children:[(0,s.jsx)("label",{htmlFor:"location",className:N.label,children:"Location"}),(0,s.jsx)("input",{type:"text",id:"location",className:N.input})]})},C={"visually-hidden":"FilterItem_visually-hidden__d9JeB","item-checkbox":"FilterItem_item-checkbox__Gej-t","item-label":"FilterItem_item-label__WYEZF","item-wrapper":"FilterItem_item-wrapper__HJ+3y","item-icon":"FilterItem_item-icon__DZbHG"},w=function(e){var i=e.width,r=e.height,t=e.href,a=e.description;return(0,s.jsxs)("li",{className:C.item,children:[(0,s.jsx)("input",{type:"checkbox",id:a,className:"".concat(C["item-checkbox"],"\n                    ").concat(C["visually-hidden"])}),(0,s.jsx)("label",{htmlFor:a,className:C["item-label"],children:(0,s.jsxs)("span",{className:C["item-wrapper"],children:[(0,s.jsx)("svg",{width:i,height:r,className:C["item-icon"],children:(0,s.jsx)("use",{href:t})}),(0,s.jsx)("div",{children:a})]})})]})},b=JSON.parse('[{"id":1,"href":"#icon-wind","description":"AC"},{"id":2,"href":"#icon-automatic","description":"Automatic"},{"id":3,"href":"#icon-kitchen","description":"Kitchen"},{"id":4,"href":"#icon-tv","description":"TV"},{"id":5,"href":"#icon-shower","description":"Shower/WC"}]'),y=JSON.parse('[{"id":6,"href":"#icon-van","description":"Van"},{"id":7,"href":"#icon-fully","description":"Fully Integrated"},{"id":8,"href":"#icon-alcove","description":"Alcove"}]'),F={filter:"Filter_filter__asygT","filter-title":"Filter_filter-title__MPsKO","filter-subtitle":"Filter_filter-subtitle__wK435","filter-equipment":"Filter_filter-equipment__ymWTB","filter-type":"Filter_filter-type__9xovW","filter-list":"Filter_filter-list__BxZJ1"},k=function(){return(0,s.jsxs)("div",{className:F.filter,children:[(0,s.jsx)("h2",{className:F["filter-title"],children:"Filters"}),(0,s.jsxs)("div",{className:F["filter-equipment"],children:[(0,s.jsx)("h3",{className:F["filter-subtitle"],children:"Vehicle equipment"}),(0,s.jsx)("ul",{className:F["filter-list"],children:b.map((function(e){return(0,s.jsx)(w,{width:32,height:32,href:"".concat(o).concat(e.href),description:e.description},e.id)}))})]}),(0,s.jsxs)("div",{className:F["filter-type"],children:[(0,s.jsx)("h3",{className:F.subtitle,children:"Vehicle type"}),(0,s.jsx)("ul",{className:F["filter-list"],children:y.map((function(e){return(0,s.jsx)(w,{width:40,height:28,href:"".concat(o).concat(e.href),description:e.description},e.id)}))})]}),(0,s.jsx)(d,{title:"Search"})]})},q="SideBar_side-bar__OfZvB",L=function(){return(0,s.jsxs)("div",{className:q,children:[(0,s.jsx)(g,{}),(0,s.jsx)(k,{})]})},T="Catalog_wrapper__j0ogR",W=function(){return(0,s.jsxs)("div",{className:T,children:[(0,s.jsx)(L,{}),(0,s.jsx)(v,{})]})}}}]);
//# sourceMappingURL=493.422e5f7e.chunk.js.map