import{r as t,v as s,x as a,L as l,t as r}from"./BFH_Pyy1.js";const m={__name:"animation",setup(c){const e=t(!1),n=t(null),o=()=>{e.value=!e.value};return(i,u)=>(r(),s("div",null,[a("button",{class:"rounded bg-blue-500 p-2 text-white",onClick:o},"切換顯示/隱藏"),a("div",{ref_key:"content",ref:n,class:l([["overflow-hidden transition-all duration-500",e.value?"max-h-[100px] opacity-100":"max-h-0 opacity-0"],"mt-4 bg-gray-200 p-4"])}," 這是要顯示/隱藏的內容 ",2)]))}};export{m as default};
