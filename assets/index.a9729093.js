import{r as e,D as t,a as n}from"./vendor.a38766b8.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const l=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,o)=>{const a=new URL(e,l);if(self[t].moduleMap[a])return n(self[t].moduleMap[a]);const c=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){o(new Error(`Failed to import: ${e}`)),r(m)},onload(){n(self[t].moduleMap[a]),r(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("/assets/");const l=()=>e.createElement(e.Fragment,null,e.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},e.createElement("div",null,e.createElement("h1",null,"Hello world"),e.createElement(t,null))));n.render(e.createElement(e.StrictMode,null,e.createElement(l,null)),document.getElementById("root"));
