"use strict";(self.webpackChunkberv_project_github_io=self.webpackChunkberv_project_github_io||[]).push([[8209],{6669:(e,t,a)=>{a.d(t,{A:()=>N});var l=a(6540),n=a(870),r=a(9408),s=a(4581),c=a(5489),i=a(1312);const m="sidebar_re4s",o="sidebarItemTitle_pO2u",u="sidebarItemList_Yudw",g="sidebarItem__DBe",b="sidebarItemLink_mo7H",p="sidebarItemLinkActive_I1ZP";function E(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.A)(m,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.A)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.A)(u,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:g},l.createElement(c.A,{isNavLink:!0,to:e.permalink,className:b,activeClassName:p},e.title)))))))}var d=a(5600);function _(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(c.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function h(e){return l.createElement(d.GX,{component:_,props:e})}function v(e){let{sidebar:t}=e;const a=(0,s.l)();return t?.items.length?"mobile"===a?l.createElement(h,{sidebar:t}):l.createElement(E,{sidebar:t}):null}function N(e){const{sidebar:t,toc:a,children:s,...c}=e,i=t&&t.items.length>0;return l.createElement(r.A,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(v,{sidebar:t}),l.createElement("main",{className:(0,n.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},9158:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(6540),n=a(870),r=a(1312);var s=a(1003),c=a(7559),i=a(6669),m=a(6133);const o="tag_Nnez";function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(m.A,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}var b=a(1463);function p(e){let{tags:t,sidebar:a}=e;const m=(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return l.createElement(s.e3,{className:(0,n.A)(c.G.wrapper.blogPages,c.G.page.blogTagsListPage)},l.createElement(s.be,{title:m}),l.createElement(b.A,{tag:"blog_tags_list"}),l.createElement(i.A,{sidebar:a},l.createElement("h1",null,m),l.createElement(g,{tags:t})))}},6133:(e,t,a)=>{a.d(t,{A:()=>m});var l=a(6540),n=a(870),r=a(5489);const s="tag_zVej",c="tagRegular_sFm0",i="tagWithCount_h2kH";function m(e){let{permalink:t,label:a,count:m}=e;return l.createElement(r.A,{href:t,className:(0,n.A)(s,m?i:c)},a,m&&l.createElement("span",null,m))}}}]);