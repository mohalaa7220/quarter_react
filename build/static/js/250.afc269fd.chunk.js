"use strict";(self.webpackChunkquarter=self.webpackChunkquarter||[]).push([[250],{4250:function(e,s,n){n.r(s),n.d(s,{default:function(){return y}});var t=n(9439),i=n(2791),l=n(6856),a=n(6355),r=n(9126),c=n(6431),d=n.n(c),o=n(184),m=function(e){var s=e.name,n=e.setName,t=e.email,i=e.setEmail,l=e.message,a=e.setMessage,r=e.handleSubmit,c=e.loadingBook;return(0,o.jsx)("div",{className:"right_side",children:(0,o.jsxs)("div",{className:"widget",children:[(0,o.jsx)("h4",{className:"content-head",children:"Drop Message For Book"}),(0,o.jsxs)("form",{onSubmit:r,method:"POST",children:[(0,o.jsx)("input",{type:"text",name:"name",placeholder:"Your Name*",value:s,onChange:function(e){return n(e.target.value)}}),(0,o.jsx)("input",{type:"text",name:"email",placeholder:"Your e-Mail*",value:t,onChange:function(e){return i(e.target.value)}}),(0,o.jsx)("textarea",{name:"message",placeholder:"Write Message...",value:l,onChange:function(e){return a(e.target.value)}}),(0,o.jsx)("button",{type:"submit",className:c?"btn2 btn_loading ":"btn2",children:"Send Message"})]})]})})},u=i.memo(m),h=n(9434),x=n(7242),j=n(9085),p=n(7689),v=n(5112),g=n(3379),f=n(5518),N=function(e){var s=e.id,n=(0,h.I0)(),t=(0,h.v9)((function(e){return e.comments})),l=t.dataComments,a=t.loading;return(0,i.useEffect)((function(){n((0,g.tH)(s))}),[n,s]),(0,o.jsxs)("section",{className:"pt-5",children:[(0,o.jsx)("h2",{className:"content-head",children:"Customer Reviews"}),(0,o.jsx)("div",{className:0===(null===l||void 0===l?void 0:l.length)?"d-none":"content-comments",children:(0,o.jsx)("div",{className:"ltn__comment-inner",children:a?(0,o.jsx)(f.Z,{}):(0,o.jsx)("ul",{children:null===l||void 0===l?void 0:l.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsxs)("div",{className:"ltn__comment-item",children:[(0,o.jsx)("div",{className:"ltn__commenter-img",children:(0,o.jsx)("img",{src:"https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/testimonial/1.jpg",alt:""})}),(0,o.jsxs)("div",{className:"ltn__commenter-comment",children:[(0,o.jsx)("h6",{children:e.user}),(0,o.jsx)("div",{className:"rating"}),(0,o.jsx)(v.Z,{count:5,size:24,activeColor:"#ffd700",isHalf:!0,edit:!1,value:parseInt(e.rating)}),(0,o.jsx)("p",{children:e.text}),(0,o.jsx)("span",{class:"ltn__comment-reply-btn",children:(0,o.jsx)(d(),{format:"D MMM YYYY",children:e.created_at})})]})]})},e.id)}))})})})]})},b=n(1578),_=function(e){var s=e.id,n=(0,i.useState)(""),l=(0,t.Z)(n,2),r=l[0],c=l[1],d=(0,i.useState)(""),m=(0,t.Z)(d,2),u=m[0],x=m[1],v=(0,p.s0)(),f=(0,h.I0)(),N=(0,h.v9)((function(e){return e.comments})),_=N.loadingAdd,y=N.message,S=N.success,A=(0,h.v9)((function(e){return e.auth})),Y=A.isAuth,D=A.user;return(0,i.useEffect)((function(){y&&j.Am.success("".concat(y)),S&&setTimeout((function(){window.location.reload()}),1e3)}),[y,S]),(0,o.jsx)("section",{className:"ltn__comment-reply-area",children:(0,o.jsxs)("form",{method:"POST",onSubmit:function(e){if(e.preventDefault(),!(0===r.length||0===u.length||u>5))return Y||0===(null===D||void 0===D?void 0:D.length)?(j.Am.error("You must be logged in"),void setTimeout((function(){v("/login")}),1500)):void f((0,g.X6)({id:s,formData:{text:r,rating:u}}));j.Am.error("Enter All data")},children:[(0,o.jsx)("h4",{children:"Add a Review"}),(0,o.jsxs)("div",{class:"input-item input-item-textarea ltn__custom-icon",children:[(0,o.jsx)(a.tU3,{}),(0,o.jsx)("textarea",{name:"text",placeholder:"Type your comments....",value:r,onChange:function(e){return c(e.target.value)}})]}),(0,o.jsxs)("div",{class:"input-item input-item-rating",children:[(0,o.jsx)(b.FI7,{}),(0,o.jsx)("input",{placeholder:"Rating",type:"number",name:"rating",className:"form-control",value:u,onChange:function(e){return x(e.target.value)}})]}),(0,o.jsx)("button",{type:"submit",className:_?"btn2 btn_loading ":"btn2",children:"Submit"})]})})},y=function(e){var s=e.product,n=(0,p.s0)(),c=(0,h.I0)(),m=(0,i.useState)(""),v=(0,t.Z)(m,2),g=v[0],f=v[1],b=(0,i.useState)(""),y=(0,t.Z)(b,2),S=y[0],A=y[1],Y=(0,i.useState)(""),D=(0,t.Z)(Y,2),C=D[0],M=D[1],w=(0,h.v9)((function(e){return e.products.message})),Z=(0,h.v9)((function(e){return e.products})).loadingBook,k=(0,h.v9)((function(e){return e.auth})),E=k.isAuth,F=k.user;return(0,i.useEffect)((function(){w&&j.Am.success("".concat(w))}),[w]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("section",{className:"gallery",children:(0,o.jsx)("div",{className:"container-fluid p-0 m-0",children:(0,o.jsx)("div",{className:"gallery-slide"})})}),(0,o.jsx)("section",{className:"content_details pt-7",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-lg-8 p-0",children:(0,o.jsxs)("div",{className:"left_side",children:[(0,o.jsxs)("ul",{className:"top-content",children:[(0,o.jsx)("li",{className:"status ".concat("rent"===s.state?"rent":"sale"),children:(0,o.jsx)("span",{children:"rent"===s.state?"For Rent":"For Sale"})}),(0,o.jsxs)("li",{className:"date",children:[(0,o.jsx)(l.f$3,{}),(0,o.jsx)("span",{children:(0,o.jsx)(d(),{format:"YYYY/MM/DD",children:s.created})})]}),(0,o.jsxs)("li",{className:"comments",children:[(0,o.jsx)(a.ajU,{}),(0,o.jsx)("span",{children:"35 Comments"})]})]}),(0,o.jsxs)("div",{className:"content",children:[(0,o.jsx)("h1",{children:s.name}),(0,o.jsxs)("div",{className:"desc",children:[(0,o.jsx)("h4",{className:"content-head",children:"Description"}),(0,o.jsx)("p",{children:s.description})]}),(0,o.jsxs)("div",{className:"property_detail_parent mb-4",children:[(0,o.jsx)("h4",{className:"content-head",children:"Property Detail"}),(0,o.jsxs)("div",{className:"property_detail_list",children:[(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Property ID:"})," ",(0,o.jsx)("span",{children:"HZ29"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Home Area: "})," ",(0,o.jsx)("span",{children:"120 sqft"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Rooms:"})," ",(0,o.jsx)("span",{children:"7"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Baths:"})," ",(0,o.jsx)("span",{children:"2"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Year built:"})," ",(0,o.jsx)("span",{children:"1992"})]})]}),(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Lot Area:"})," ",(0,o.jsx)("span",{children:"HZ29 "})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Lot dimensions:"})," ",(0,o.jsx)("span",{children:"120 sqft"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Beds:"})," ",(0,o.jsx)("span",{children:"7"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Price:"})," ",(0,o.jsx)("span",{children:"2"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("label",{children:"Property Status:"})," ",(0,o.jsx)("span",{children:"For Sale"})]})]})]})]}),(0,o.jsxs)("div",{className:"amenities",children:[(0,o.jsx)("h4",{className:"content-head",children:"Amenities"}),(0,o.jsx)("ul",{className:"amenities_list",children:null===s||void 0===s?void 0:s.amenities.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)(r.oFd,{}),(0,o.jsx)("span",{children:e.name})]},e.id)}))})]}),(0,o.jsx)(N,{id:s.id}),(0,o.jsx)(_,{id:s.id})]})]})}),(0,o.jsx)("div",{className:"col-lg-4",children:(0,o.jsx)(u,{name:g,setName:f,email:S,setEmail:A,message:C,setMessage:M,handleSubmit:function(e){if(e.preventDefault(),0!==g.length&&0!==S.length&&0!==C.length)return E||0===(null===F||void 0===F?void 0:F.length)?(j.Am.error("You must be logged in"),void setTimeout((function(){n("/login")}),1500)):void c((0,x.DT)({id:s.id,formData:{name:g,email:S,message:C}}));j.Am.error("Enter All data")},loadingBook:Z})})]})})})]})}}}]);
//# sourceMappingURL=250.afc269fd.chunk.js.map