(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,c){e.exports={mainContainer:"home_mainContainer__2gfwy",textContainer:"home_textContainer__71u2F",mainText:"home_mainText__7KOJO",textAnimation:"home_textAnimation__1k-j2",glitch:"home_glitch__1OgD9",profile:"home_profile__isCOE",avatar:"home_avatar__1KR5F",description:"home_description__1v-OU",icons:"home_icons__6v-e3",arrowContainer:"home_arrowContainer__1dYT_",animated:"home_animated__2zYvd",bounce:"home_bounce__15lvu"}},43:function(e,t,c){},51:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),o=c(15),i=c.n(o),s=(c(43),c(6)),r=c(8),l=(c(51),c(9)),d=c(1),j=function(e){var t=e.points,c=e.to,a=e.mainDiv,n=e.xY,o=e.coord;return Object(d.jsx)("div",{style:a,children:Object(d.jsx)(l.b,{to:{pathname:c,xY:n,coord:o},href:c,className:"arrow ".concat(t," bounce")})})},h=c(10),m=c.n(h),p=c(14);function b(e,t){var c=n.a.useRef(t);n.a.useEffect((function(){c.current=t})),n.a.useEffect((function(){function t(t){t.code===e&&c.current(t)}return document.addEventListener("keydown",t),function(){return document.removeEventListener("keydown",t)}}),[e])}var x=function(e){var t=Object(s.f)();return b("ArrowDown",(function(){t.push({pathname:"/projects",xY:"y",coord:-500})})),Object(d.jsxs)(p.b.div,{initial:Object(r.a)({opacity:0},e.location.xY,[e.location.coord]),animate:Object(r.a)({opacity:1},e.location.xY,"0%"),exit:{opacity:0},className:m.a.homeContainer,children:[Object(d.jsxs)("div",{className:m.a.mainContainer,children:[Object(d.jsxs)("div",{className:m.a.textContainer,children:[Object(d.jsx)("p",{className:m.a.mainText,children:"Hi! "}),Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(d.jsx)("p",{className:m.a.mainText,children:"I'm "}),Object(d.jsx)("p",{className:"".concat(m.a.mainText," ").concat(m.a.textAnimation),children:"Manuel"})]}),Object(d.jsx)("p",{className:m.a.mainText,children:"Full Stack developer."})]}),Object(d.jsxs)("div",{className:m.a.profile,children:[Object(d.jsx)("img",{className:m.a.avatar,alt:"profile",src:"https://media-exp1.licdn.com/dms/image/C4E03AQFAo1Y4GOALbg/profile-displayphoto-shrink_200_200/0/1610467762713?e=1617235200&v=beta&t=vAGFLeXtZsx896h9u5-zoUAcDsVKtSSJAIrzosv_S4w"}),Object(d.jsx)("h3",{children:"Manuel Bolla Agrelo"}),Object(d.jsx)("h5",{children:"Full Stack developer"}),Object(d.jsx)("p",{className:"".concat(m.a.description),children:"Which is worse, that everyone has his price, or that the price is always so low."}),Object(d.jsxs)("div",{className:m.a.icons,children:[Object(d.jsx)("a",{href:"https://github.com/Manubolla",rel:"noreferrer noopener",target:"_blank",children:Object(d.jsx)("i",{className:"ion-social-github"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/manuel-bolla-agrelo/",rel:"noreferrer noopener",target:"_blank",children:Object(d.jsx)("i",{className:"ion-social-linkedin"})}),Object(d.jsx)("a",{href:"mailto:manubolla17@gmail.com",children:Object(d.jsx)("i",{className:"ion-social-google"})})]})]})]}),Object(d.jsxs)("div",{className:m.a.arrowContainer,children:[Object(d.jsx)("h3",{className:"".concat(m.a.animated," ").concat(m.a.bounce),style:{color:"white",marginBottom:30},children:"Follow me!"}),Object(d.jsx)("h3",{style:{color:"white",marginBottom:30},children:"( you can use the keyboard )"}),Object(d.jsx)(j,{points:"down",to:"projects",xY:"y",coord:-500})]})]})},u=(c(61),[{id:1,name:"Almazen",description:"First real project with a group of 7 members. We made a e-commerce of healthy products",socials:{github:"https://github.com/Manubolla/ecommerce-ft07-g12",youtube:"",deployedWeb:"https://almazenhenry-51bf6.web.app/"},logo:"https://i.ibb.co/8zRy23w/pexels-snapwire-349730.jpg"},{id:2,name:"PetBuddies",description:"React-native App that contact pet-owners and pet-workers",socials:{github:"https://github.com/Manubolla/PetBuddies",youtube:"",deployedWeb:""},logo:"https://i.ibb.co/17Q30j3/Pet-Buddies.jpg"},{id:3,name:"Pozo",description:"Game developed with react",socials:{github:"",youtube:"",deployedWeb:""},logo:"https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1484049536/content-items/001/822/416/logo_bueno-original.jpg?1484049536"}]),O=(c(62),function(e){return Object(d.jsx)("div",{className:"folder",children:Object(d.jsxs)("div",{className:"folder__back",children:[Object(d.jsx)("div",{className:"paper"}),Object(d.jsx)("div",{className:"paper"}),Object(d.jsx)("div",{className:"paper"}),Object(d.jsx)("div",{className:"folder__front"}),Object(d.jsx)("div",{className:"folder__front right",children:Object(d.jsx)("p",{className:"title",children:e.name})})]})})}),f=c(22),v=c(26),y=c(45),g=c(35),N=c(36),w=(c(63),function(e){var t=e.project,c=n.a.useState(!1),a=Object(f.a)(c,2),o=a[0],i=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{onClick:function(){return i(!0)},children:Object(d.jsx)(O,{name:t.name})}),Object(d.jsxs)(v.a,{show:o,onHide:function(){return i(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(d.jsx)(v.a.Header,{closeButton:!0,children:Object(d.jsx)(v.a.Title,{children:t.name})}),Object(d.jsxs)(v.a.Body,{style:{display:"flex"},children:[Object(d.jsx)("p",{style:{padding:20},children:t.description}),Object(d.jsx)(y.a,{src:t.logo,className:"project-logo"})]}),Object(d.jsxs)(v.a.Footer,{children:[Object(d.jsx)(N.a,{placement:"top",overlay:Object(d.jsx)(g.a,{children:"Watch my code!"}),children:Object(d.jsx)("a",{href:t.socials.github,rel:"noreferrer noopener",target:"_blank",children:Object(d.jsx)("i",{className:"ion-social-github"})})}),Object(d.jsx)(N.a,{placement:"top",overlay:Object(d.jsx)(g.a,{children:"Watch a short video of the app"}),children:Object(d.jsx)("a",{href:t.socials.youtube,rel:"noreferrer noopener",target:"_blank",children:Object(d.jsx)("i",{className:"ion-social-youtube"})})}),Object(d.jsx)(N.a,{placement:"top",overlay:Object(d.jsx)(g.a,{children:"Deployed app"}),children:Object(d.jsx)("a",{href:t.socials.deployedWeb,rel:"noreferrer noopener",target:"_blank",children:Object(d.jsx)("i",{className:"ion-ios-glasses"})})})]})]})]})}),_=function(e){var t=Object(s.f)();return b("ArrowUp",(function(){return t.push({pathname:"/",xY:"y",coord:500})})),b("ArrowLeft",(function(){return t.push({pathname:"/education",xY:"x",coord:-500})})),b("ArrowRight",(function(){return t.push({pathname:"/experience",xY:"x",coord:500})})),b("ArrowDown",(function(){return t.push({pathname:"/contact",xY:"y",coord:-500})})),Object(d.jsxs)(p.b.div,{initial:Object(r.a)({opacity:0},e.location.xY,[e.location.coord]),animate:Object(r.a)({opacity:1},e.location.xY,"0%"),exit:{opacity:0},children:[Object(d.jsxs)("div",{className:"arrowTop",children:[Object(d.jsx)(j,{points:"up",to:"/",from:"projects",xY:"y",coord:500}),Object(d.jsx)("h3",{style:{color:"white"},children:"Home"})]}),Object(d.jsxs)("div",{className:"mainContent",children:[Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(d.jsx)(j,{points:"left",mainDiv:{padding:15},to:"education",xY:"x",coord:500}),Object(d.jsx)("h3",{style:{color:"white"},children:"Education"})]}),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)("div",{className:"content-body",children:u&&u.map((function(e){return Object(d.jsx)(w,{project:e})}))})}),Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(d.jsx)("h3",{style:{color:"white"},children:"Experience"}),Object(d.jsx)(j,{points:"right",mainDiv:{padding:15},to:"experience",xY:"x",coord:-500})]})]}),Object(d.jsxs)("div",{className:"arrowBottom",children:[Object(d.jsx)("h3",{style:{color:"white"},children:"Contact"}),Object(d.jsx)(j,{points:"down",to:"contact",xY:"y",coord:-500})]})]})},Y=(c(65),function(){var e=Object(s.g)(),t=Object(a.useState)({home:"",projects:"",education:"",experience:"",contact:""}),c=Object(f.a)(t,2),n=c[0],o=c[1];return Object(a.useEffect)((function(){var t=function(){var t=e.pathname.substring(1,e.pathname.length);return""===t?{path:"home"}:{path:t}}().path;o((function(e){return Object(r.a)({},t,"active")}))}),[e]),Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)(l.b,{className:n.home?"active":"",to:{pathname:"/",xY:"y",coord:-500},children:[" ","Home"]})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{className:n.projects?"active":"",to:{pathname:"/projects",xY:"y",coord:-500},children:"Projects"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{className:n.education?"active":"",to:{pathname:"/education",xY:"y",coord:-500},children:"Education"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{className:n.experience?"active":"",to:{pathname:"/experience",xY:"y",coord:-500},children:"Work experience"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{className:n.contact?"active":"",to:{pathname:"/contact",xY:"y",coord:-500},children:"Contact me"})})]})})}),C=(c(66),[{school:"HENRY",degree:"Full Stack Developer",startYear:"Oct 2020",endYear:"Feb 2021",description:"I worked with SCRUM methodoliges, Data Structures, Algorithms, JavaScript (ES6), CSS, Sass, Less, React, Redux, NodeJs, Express, SQL, Sequelize, Passport."},{school:"National University of Luj\xe1n",degree:"University professor of physical education",startYear:"2014",endYear:"2020",description:"This career gave me lot of experience working with people, taught me how to be pacient and inspire others to achieve their goals."}]),k=function(e){var t=Object(s.f)();return b("ArrowRight",(function(){return t.push({pathname:"/projects",xY:"x",coord:-500})})),Object(d.jsx)(p.b.div,{initial:Object(r.a)({opacity:0},e.location.xY,[e.location.coord]),animate:Object(r.a)({opacity:1},e.location.xY,"0%"),exit:{opacity:0},children:Object(d.jsxs)("div",{className:"main-education-container",children:[Object(d.jsx)("div",{className:"education-container",children:Object(d.jsxs)("ul",{className:"education-table",children:[Object(d.jsxs)("li",{className:"table-header",children:[Object(d.jsx)("div",{className:"columna columna-1",children:"School"}),Object(d.jsx)("div",{className:"columna columna-2",children:"Degree"}),Object(d.jsx)("div",{className:"columna columna-3",children:"Year"}),Object(d.jsx)("div",{className:"columna columna-4",children:"Description"})]}),C&&C.map((function(e){return Object(d.jsxs)("li",{className:"table-row",children:[Object(d.jsx)("div",{className:"columna columna-1",children:e.school}),Object(d.jsx)("div",{className:"columna columna-2",children:e.degree}),Object(d.jsx)("div",{className:"columna columna-3",children:"".concat(e.startYear," - ").concat(e.endYear)}),Object(d.jsx)("div",{className:"columna columna-4",children:e.description})]})}))]})}),Object(d.jsxs)("div",{className:"arrowRight",children:[Object(d.jsx)(j,{points:"right",to:"/projects",xY:"x",coord:-500}),Object(d.jsx)("h3",{style:{color:"white"},children:"Projects"})]})]})})},A=(c(67),[{id:1,title:"HENRY",type:"FreeLance",company:"HENRY",year:"Dec 2020 - Jan 2021",description:"Developed several projects, mainly an e-commerce and a Mobile App using SCRUM methodologies."},{id:2,title:"PSA - Water purifiers",type:"FreeLance",company:"PSA",year:"Oct 2018 - Dec 2020",description:"Led a team of 5 people and in charge of searching and advising old and new clients"},{id:3,title:"Cordinator (P.E Teacher) ",type:"Seasonal",company:"Olivos Tenis Club",year:"Dec 2016 - Feb 2019",description:"Led a team of 20 teachers. In charge of special events, supervising and supporting each group. Direct contact with the president of the club."},{id:4,title:"Teaching assistant (College)",type:"Full-time",company:"Universidad Nacional de Luj\xe1n",year:"Jan 2017 - Jan 2018",description:"Direct contact with students, supporting classes and workshops. Participation in academic researches."}]),S=function(e){var t=Object(s.f)();return b("ArrowLeft",(function(){return t.push({pathname:"/projects",xY:"x",coord:500})})),Object(d.jsx)(p.b.div,{initial:Object(r.a)({opacity:0},e.location.xY,[e.location.coord]),animate:Object(r.a)({opacity:1},e.location.xY,"0%"),exit:{opacity:0},children:Object(d.jsxs)("div",{className:"main-experience-container",children:[Object(d.jsxs)("div",{className:"arrowLeft",children:[Object(d.jsx)(j,{points:"left",to:"/projects",xY:"x",coord:500}),Object(d.jsx)("h3",{style:{color:"white"},children:"Projects"})]}),Object(d.jsx)("div",{className:"experience-container",children:Object(d.jsxs)("ul",{className:"experience-table",children:[Object(d.jsxs)("li",{className:"table-header",children:[Object(d.jsx)("div",{className:"columna columna-1",children:"Title"}),Object(d.jsx)("div",{className:"columna columna-2",children:"Company"}),Object(d.jsx)("div",{className:"columna col-3",children:"Year"}),Object(d.jsx)("div",{className:"columna columna-4",children:"Description"})]}),A&&A.map((function(e){return Object(d.jsxs)("li",{className:"table-row row-".concat(e.id),children:[Object(d.jsx)("div",{className:"columna columna-1",children:e.title}),Object(d.jsx)("div",{className:"columna columna-2",children:"".concat(e.company," ").concat(e.type)}),Object(d.jsx)("div",{className:"columna columna-3",children:"".concat(e.year)}),Object(d.jsx)("div",{className:"columna columna-4",children:e.description})]})}))]})})]})})},D=c(42),E=(c(68),c(46)),F=c.n(E),L=function(e){var t=Object(s.f)();b("ArrowUp",(function(){return t.push({pathname:"/projects",xY:"y",coord:500})}));var c=n.a.useState(),a=Object(f.a)(c,2),o=a[0],i=a[1],l=function(e){return i(Object(D.a)(Object(D.a)({},o),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(d.jsxs)(p.b.div,{initial:Object(r.a)({opacity:0},e.location.xY,[e.location.coord]),animate:Object(r.a)({opacity:1},e.location.xY,"0%"),exit:{opacity:0},children:[Object(d.jsxs)("div",{className:"arrowTop",children:[Object(d.jsx)(j,{points:"up",to:"/projects",xY:"y",coord:500}),Object(d.jsx)("h3",{style:{color:"white"},children:"Projects"})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{id:"form",class:"topBefore",onSubmit:function(e){e.preventDefault(),F.a.sendForm("service_a982egf","template_1fz13oh",e.target,"user_RCaGvNahSzuVmDCQ5kz8F").then((function(e){alert("\xa1Email successfully sent! I will get in touch soon, thank you!")}),(function(e){alert("Oops, it didnt work, try using the traditional method instead. My mail is: manubolla17@gmail.com")}))},children:[Object(d.jsx)("input",{id:"name",type:"text",name:"name",placeholder:"NAME",onChange:l}),Object(d.jsx)("input",{id:"email",type:"text",name:"from_name",placeholder:"E-MAIL",onChange:l}),Object(d.jsx)("textarea",{id:"message",type:"text",name:"message",placeholder:"MESSAGE",onChange:l}),Object(d.jsx)("input",{id:"submit",type:"submit",value:"Contact Manu!"})]})})]})};var T=function(){var e=Object(s.g)();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(Y,{}),Object(d.jsx)(p.a,{exitBeforeEnter:!0,children:Object(d.jsxs)(s.c,{location:e,children:[Object(d.jsx)(s.a,{exact:!0,path:"/",component:x}),Object(d.jsx)(s.a,{exact:!0,path:"/projects",component:_}),Object(d.jsx)(s.a,{exact:!0,path:"/education",component:k}),Object(d.jsx)(s.a,{exact:!0,path:"/experience",component:S}),Object(d.jsx)(s.a,{exact:!0,path:"/contact",component:L}),Object(d.jsx)(s.a,{exact:!0,path:"/prueba",component:w})]},e.pathname)})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(l.a,{basename:"portfolio",children:Object(d.jsx)(T,{})}),document.getElementById("root")),P()}},[[71,1,2]]]);
//# sourceMappingURL=main.03157c6e.chunk.js.map