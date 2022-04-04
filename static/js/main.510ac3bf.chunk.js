(this.webpackJsonpdevportfolio=this.webpackJsonpdevportfolio||[]).push([[0],{36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(12),s=n(3),i=n(0),a=n(1),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o='<a href="./">Home</a>',j="JD.",d="James Daniel",h="Software Engineer | Web Developer",b="Attorney turned Software Engineer and Web Developer. I create attractive, fully, functional websites for small businesses and sole proprieterships.  ",u="https://tinyurl.com/yxfdye3c",m={linkedin:"www.linkedin.com/in/jamdan",github:"https://github.com/jdbain67"},p=[{name:"Save Me A Book",description:"Web App where user can use the Google Books API to search and pre-view any book in the Google Books database, hosted on Codepen.io",stack:["HTML/CSS","Javascript","React"],livePreview:"https://codepen.io/jdbain67/live/OJmyOQp/"},{name:"Category: Movies",description:"A JavaScript Web App that allows the user to guess the name of a movie, similar to Wheel of Fortune, hosted on Netlify",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com",livePreview:"https://csb-y0mjmp.netlify.app/"},{name:"Chillout - Product Website",description:"A Demo Client Website built in Tailwind.css, hosted on Netlify ",stack:["Tailwind.css","Netlify"],sourceCode:"https://github.com",livePreview:"https://vigilant-austin-f8b871.netlify.app/ "},{name:"Ro-Sham-Bo",description:"Rock, Paper, Scissors app where user can play against the computer. Built using HTML, CSS, and JS as a front-end coding challenge for Frontend Mentor",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com",livePreview:" https://jdbain67.github.io/csb-isde1/ "},{name:"How is my Weather?",description:"Web App that uses the Open Weather API and the Google Maps Geocoding API. Together, these APIs make it possible to provide location specific weather data from Open Weather based on latitude and longitude coordinates derived from an address string provided to Google Maps Geocode by the user",stack:["HTML","CSS","JavaScript"],livePreview:" https://codepen.io/jdbain67/pen/dyzVmPz "}],O=["HTML","CSS","Bootstrap","Tailwind","JavaScript","React","Material UI","Github","Git","Netlify","VS Code"],f="James.Daniel.Bain@gmail.com",x=n(22),v=n.n(x),k=n(21),g=n.n(k),N=n(24),_=n.n(N),w=n(23),S=n.n(w),y=(n(36),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],d=o[1],h=function(){return d(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,f?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(g.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(S.a,{}):Object(a.jsx)(_.a,{})})]})}),C=(n(42),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(y,{})]})}),P=n(19),J=n.n(P),M=n(25),T=n.n(M),A=(n(43),function(){var e=d,t=h,n=b,c=u,s=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:[t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(J.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(T.a,{})})]})]})]})}),W=n(9),B=n.n(W),E=n(27),H=n.n(E),I=n(26),L=n.n(I),G=(n(45),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.img}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},B()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(L.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(H.a,{})})]})}),D=(n(49),function(){return p.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(a.jsx)(G,{project:e},B()())}))})]}):null}),R=(n(50),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},B()())}))})]}):null}),z=n(28),F=n.n(z),V=(n(51),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(F.a,{fontSize:"large"})})}):null}),Q=(n(52),function(){return f?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(f),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(53),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/jdbain67",className:"link footer__link",children:"Created By James Daniel"})})}),Y=(n(54),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(C,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(A,{}),Object(a.jsx)(D,{}),Object(a.jsx)(R,{}),Object(a.jsx)(Q,{})]}),Object(a.jsx)(V,{}),Object(a.jsx)(U,{})]})});n(55);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.510ac3bf.chunk.js.map