import{r as o,j as e,k as h,l as m}from"./index-DLKqP2wg.js";const d=({imageSet:r})=>{const[s,a]=o.useState(0),i=r.images.length,n=()=>{a(s===i-1?0:s+1)},c=()=>{a(s===0?i-1:s-1)};return!Array.isArray(r.images)||r.images.length<=0?null:e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsxs("section",{className:"slider min-h-[25vh] md:min-h-[50vh] lg:min-h-[80vh] w-[100%] md:w-[90%]",children:[e.jsx(h,{className:"left-arrow",onClick:c}),e.jsx(m,{className:"right-arrow",onClick:n}),r.images.map((t,l)=>e.jsx("div",{className:l===s?"slide active":"slide",children:l===s&&e.jsx("img",{src:`${r.path}/${t}`,alt:t,className:"image",title:t})},l))]}),e.jsx("div",{children:r.images[s].split(".")[0]})]})};export{d as default};