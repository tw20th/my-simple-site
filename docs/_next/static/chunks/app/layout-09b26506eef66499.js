(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7261:(e,t,r)=>{Promise.resolve().then(r.bind(r,8148)),Promise.resolve().then(r.t.bind(r,3275,23)),Promise.resolve().then(r.t.bind(r,7808,23)),Promise.resolve().then(r.bind(r,65))},8148:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var l=r(7437);r(2265);var a=r(7138),s=r(65);function n(){let{theme:e,toggleTheme:t}=(0,s.F)();return(0,l.jsxs)("header",{className:"header",children:[(0,l.jsx)("div",{className:"header-logo",children:"My Logo"}),(0,l.jsxs)("nav",{className:"header-nav",children:[(0,l.jsx)(a.default,{href:"/",className:"nav-link",children:"Home"}),(0,l.jsx)(a.default,{href:"/about",className:"nav-link",children:"About"}),(0,l.jsx)(a.default,{href:"/contact",className:"nav-link",children:"Contact"})]}),(0,l.jsx)("button",{onClick:t,className:"theme-toggle-button",children:"light"===e?"Switch to Dark Mode":"Switch to Light Mode"})]})}r(1359)},65:(e,t,r)=>{"use strict";r.d(t,{F:()=>i,ThemeProvider:()=>n});var l=r(7437),a=r(2265);let s=(0,a.createContext)(void 0);function n(e){let{children:t}=e,[r,n]=(0,a.useState)(null),[i,h]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{h(!0);{let e=localStorage.getItem("theme");if(e)n(e);else{let e=window.matchMedia("(prefers-color-scheme: dark)");n(e.matches?"dark":"light");let t=e=>{n(e.matches?"dark":"light")};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}}},[]),null===r)?null:(0,l.jsx)(s.Provider,{value:{theme:r,toggleTheme:()=>{if(r){let e="light"===r?"dark":"light";n(e),i&&localStorage.setItem("theme",e)}}},children:(0,l.jsx)("div",{className:r,children:t})})}function i(){let e=(0,a.useContext)(s);if(!e)throw Error("useTheme must be used within a ThemeProvider");return e}},7808:()=>{},1359:()=>{},3275:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[832,138,130,215,744],()=>t(7261)),_N_E=e.O()}]);