import{C as k,W as G,g as Q,d as O,a as p,r as f,c as F,o as d,b as u,t as T,u as $,e as h,f as e,h as l,w as _,n as K,i as c,j as A,k as L,_ as b,F as M,l as Z,M as J,m as X,A as ee,p as te,q as ne,s as se,v as ae,x as oe,y as ie,z as re,B as le,D as ce,E as de,G as ue,H as pe,I as ye,J as _e,K as me,L as fe,N as he,O as ve,P as ge,Q as be,R as we,S as xe,T as ke,U as Te}from"./vendor.547de413.js";const $e=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};$e();var Ae="/assets/brand.8f27336b.svg";const P=[{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"string",name:"baseURI_",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"MAX_PURCHASE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MINT_PRICE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"flipPublicSaleActive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"flipSaleState",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"order",type:"uint256"}],name:"getMintedIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"n",type:"uint256"},{internalType:"bytes",name:"signature",type:"bytes"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"publicSaleActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"n",type:"uint256"}],name:"reserveTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"saleIsActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI_",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],x="0x351821Ed49F23f884D6B168247Ec36D7732D8BD3",Me=1e4,Pe="ropsten",D=3;function Ce(t){return new k(x,P,t)}let C;function Se(){return C===void 0&&(C=new k(x,P,H())),C}function q(){return typeof window.ethereum!="undefined"}let S;function I(){return S===void 0&&(S=new G(window.ethereum)),S}async function Ie(){if(!q())return!1;const t=I();return await t.send("eth_requestAccounts",[]),await t.send("wallet_switchEthereumChain",[{chainId:"0x"+D.toString(16)}]),!0}let N;function H(){return N===void 0&&(N=Q(Pe)),N}const R=O("wallet",{state:()=>({address:null,validChain:!1}),actions:{async registerWalletListener(){}}});async function Ne(){if(!q())return;const t=R(),s=I();let[n]=await s.send("eth_accounts",[]),o=+window.ethereum.networkVersion;function a(){n?(t.address=n,t.validChain=o===D):(t.address=null,t.validChain=!1)}window.ethereum.on("accountsChanged",i=>{n=i[0],a()}),window.ethereum.on("chainChanged",i=>{o=+i,a()}),a()}let E=!1;function B(){return E||(Ne(),E=!0),R()}const Oe=["disabled"],Fe=p({props:{connectHint:{type:String,required:!0},switchHint:{type:String,required:!0}},setup(t){const s=t,n=f(!1),o=B(),a=F(()=>o.address===null?s.connectHint:o.validChain?o.address.substring(0,8)+" ... "+o.address.substring(o.address.length-6):s.switchHint);async function i(){try{n.value=!0,await Ie()}finally{n.value=!1}}return(r,m)=>(d(),u("button",{class:"disabled:opacity-50",onClick:i,disabled:n.value},T($(a)),9,Oe))}});const Le={id:"navbar",class:"lg:flex px-3 py-3 shadow-md bg-aca-red text-white"},De={class:"self-stretch flex items-center justify-between"},qe={class:"self-stretch flex items-center mr-8"},He=e("img",{src:Ae,width:"48",height:"48",class:"mr-2"},null,-1),Re=c("AcaPunks "),Ee={class:"lg:self-stretch lg:flex mt-4 lg:mt-0"},Be={class:"text-left self-stretch lg:flex items-center space-y-2 lg:space-y-0 lg:space-x-8"},Ue=c("Mint"),je=c("FAQ"),We=c("Punk Pocket"),Ve=c("Terms & Conditions"),ze={class:"lg:self-stretch lg:flex mt-4 lg:mt-0 border-t lg:border-t-0 pt-4 lg:pt-0",style:{"border-top-color":"rgba(255,255,255,.7)"}},Ye={class:"text-left self-stretch justify-end lg:flex space-y-2 lg:space-y-0 items-center lg:space-x-2 text-opacity-70 hover:text-opacity-100"},Ge={href:"https://twitter.com/acapunks",target:"_blank",rel:"noopener noreferrer",class:"nav-link"},Qe={class:"inline-block text-center",style:{width:"2em"}},Ke=e("span",{class:"lg:hidden xl:inline"},"Twitter",-1),Ze={href:"https://discord.gg/DHGvhfrYFZ",target:"_blank",rel:"noopener noreferrer",class:"nav-link"},Je={class:"inline-block text-center",style:{width:"2em"}},Xe=e("span",{class:"lg:hidden xl:inline"},"Discord",-1),et={class:"lg:ml-8"},tt=p({setup(t){const s=f(!0),n=()=>s.value=!s.value;return(o,a)=>{const i=h("router-link"),r=h("fa");return d(),u("nav",Le,[e("div",De,[e("div",qe,[l(i,{to:"/#landing",class:"inline-flex items-center nav-link"},{default:_(()=>[He,Re]),_:1})]),e("button",{class:"flex lg:hidden ml-auto items-center rounded px-4",onClick:n},[l(r,{icon:"bars",class:"text-2xl"})])]),e("div",{class:K(["grow self-stretch flex-col lg:flex-row justify-between overflow-hidden transition-transform",[{hidden:s.value},"lg:flex"]])},[e("div",Ee,[e("ul",Be,[e("li",null,[l(i,{to:"/#mint",class:"nav-link"},{default:_(()=>[Ue]),_:1})]),e("li",null,[l(i,{to:"/#faq",class:"nav-link"},{default:_(()=>[je]),_:1})]),e("li",null,[l(i,{to:"/my",class:"nav-link"},{default:_(()=>[We]),_:1})]),e("li",null,[l(i,{to:"/terms-and-conditions",class:"nav-link"},{default:_(()=>[Ve]),_:1})])])]),e("div",ze,[e("ul",Ye,[e("li",null,[e("a",Ge,[e("span",Qe,[l(r,{icon:["fab","twitter"],class:"mr-1"})]),Ke])]),e("li",null,[e("a",Ze,[e("span",Je,[l(r,{icon:["fab","discord"],class:"mr-1"})]),Xe])])]),e("div",et,[l(Fe,{class:"border rounded-full w-60 py-3 lg:py-0 my-4 lg:my-0 bg-white bg-opacity-0 hover:bg-opacity-10 h-full","connect-hint":"Connect to Wallet","switch-hint":"Switch Network"})])])],2)])}}});const nt={key:0,class:"rounded-md"},st=p({setup(t){const s=f(!1),n=()=>s.value=!0;return(o,a)=>s.value?L("",!0):(d(),u("div",nt,[A(o.$slots,"default"),e("p",{class:"text-left"},[e("button",{class:"border text-white bg-green-600 hover:bg-opacity-80 rounded-md py-1 px-3",onClick:n},"OK")])]))}});var at="/assets/acala.5ee7dc77.svg";const ot={},it={class:"py-3 text-center bg-gray-100"},rt={class:"md:flex flex-row-reverse justify-center items-center text-center"},lt={class:"flex-1 text-center md:text-left mb-2 md:mb-0 md:pl-12 social-links"},ct={class:"mr-4",href:"https://twitter.com/acapunks",target:"_blank",rel:"noopener noreferrer"},dt={class:"mr-4",href:"https://discord.gg/DHGvhfrYFZ",target:"_blank",rel:"noopener noreferrer"},ut={href:"mailto:contact@acapunks.com",target:"_blank",rel:"noopener noreferrer"},pt=e("div",{class:"flex-1 text-center md:text-right md:pr-12 md:border-r md:border-slate-300"},[e("span",{class:"relative",style:{top:"0.13em","font-size":"1.05em"}}),c("Powered By "),e("a",{target:"_blank",href:"https://acala.network",rel:"noopener noreferrer",class:"ml-1"},[e("img",{src:at,class:"h-9 inline-block"})])],-1);function yt(t,s){const n=h("fa");return d(),u("footer",it,[e("div",rt,[e("div",lt,[e("a",ct,[l(n,{icon:["fab","twitter"]})]),e("a",dt,[l(n,{icon:["fab","discord"]})]),e("a",ut,[l(n,{icon:["fas","envelope"]})])]),pt])])}var _t=b(ot,[["render",yt]]);const mt={class:"flex flex-col min-h-screen",style:{"padding-top":"72px"}},ft={class:"grow flex flex-col"},ht={class:"content"},vt=c(" Use of the tools on this website is strictly at your own risk and is governed by the "),gt=c("Terms and Conditions"),bt=c(". "),wt=e("p",{class:"content"}," In short: We cannot undo, reverse, or restore any transaction involving any punk. You take the sole responsibility. ",-1),xt=p({setup(t){return(s,n)=>{const o=h("router-view"),a=h("router-link");return d(),u(M,null,[l(tt,{class:"fixed top-0 right-0 left-0 z-10"}),e("div",mt,[e("main",ft,[l(o)]),l(_t)]),l(st,{id:"popup",class:"fixed bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-lg m-4 min-w-1-4 max-w-screen md:max-w-2/5"},{default:_(()=>[e("p",ht,[vt,l(a,{to:"/terms-and-conditions"},{default:_(()=>[gt]),_:1}),bt]),wt]),_:1})],64)}}}),kt="modulepreload",U={},Tt="/",j=function(s,n){return!n||n.length===0?s():Promise.all(n.map(o=>{if(o=`${Tt}${o}`,o in U)return;U[o]=!0;const a=o.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const r=document.createElement("link");if(r.rel=a?"stylesheet":kt,a||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),a)return new Promise((m,v)=>{r.addEventListener("load",m),r.addEventListener("error",v)})})).then(()=>s())};const $t=p({props:{slides:{type:Array,required:!0}},setup(){const t=f(null);return Z(()=>{J.Carousel.init(t.value)}),{carousel:t}}}),At={class:"carousel",ref:"carousel"},Mt={class:"carousel-item"},Pt=["src","alt"];function Ct(t,s,n,o,a,i){return d(),u("div",At,[(d(!0),u(M,null,X(t.slides,r=>(d(),u("a",Mt,[e("img",{src:r.source,alt:r.alt},null,8,Pt)]))),256))],512)}var St=b($t,[["render",Ct],["__scopeId","data-v-326531f0"]]);const It={scroll:"no",id:"landing",class:"flex flex-col items-stretch lg:flex-row lg:items-center py-10 bg-aca-gradient-light"},Nt={class:"lg:container lg:mx-auto grow flex flex-col lg:flex-row justify-center lg:items-center px-4"},Ot=e("div",{class:"lg:w-1/3 lg:mb-0 lg:mr-24"},[e("h1",{class:"text-transparent text-4xl lg:text-7xl font-black mb-3"},"AcaPunks"),e("h2",{class:"text-gray-50 md:text-xl lg:text-2xl"},[c(" 10,000 uniquely generated punks living on the Acala Network "),e("br"),c("Join the club and explore the Acala universe together ")])],-1),Ft={class:"lg:grow flex justify-center items-center"},Lt=p({setup(t){const s=Array.from({length:5},(n,o)=>o+1).map(n=>({source:"/demo/"+n+".svg",alt:"slide "+n}));return(n,o)=>(d(),u("section",It,[e("div",Nt,[Ot,e("div",Ft,[l(St,{slides:$(s),class:"-mt-6 -mb-6 md:my-0 md:mt-12 lg:mt-0"},null,8,["slides"])])])]))}});var Dt="/assets/mint.40a72a25.gif",qt="/assets/acala-coin.ee286171.svg";const W=ee({position:"bottom-right",dismissible:!1,duration:4e3});function V(t){W.success(t)}function w(t){W.error(t)}const Ht=3,Rt=new Uint8Array;async function Et(t){const s={value:te(t.toString(),"16")},n=await Ce(I().getSigner()).mint(t,Rt,s);return async function(){await n.wait(Ht)}}async function Gn(t){return 1}async function Bt(t){return await new Promise(s=>setTimeout(s,50)),"https://picsum.photos/id/"+(t%64+1)+"/64"}async function Ut(t,s,n){const i=(await Se().tokenOfOwnerByIndex(t,s)).toNumber(),r=await Bt(i);n[s]={tokenId:i,imageUrl:r}}async function Qn(t,s,n,o){const a=5,i=1e3;for(let r=s;r<s+n;r++)r-s>0&&(r-s)%a==0&&await new Promise(m=>setTimeout(m,i)),Ut(t,r+s,o)}const jt={},Wt={class:"lds-circle"};function Vt(t,s){return d(),u("div",Wt,[e("div",null,[A(t.$slots,"default")])])}var zt=b(jt,[["render",Vt]]);const z=O("nft",{state:()=>({sold:void 0}),getters:{remaining:t=>t.sold===void 0?void 0:Me-t.sold}});async function Yt(){const t=H(),n=await new k(x,P).connect(t).totalSupply(),o=z();o.sold=n.toNumber();const a={address:x,topics:[ne("Transfer(address,address,uint256)")]};t.on(a,()=>{typeof o.sold=="number"&&o.sold++})}let Y=!1;function Gt(){return Y||(Yt(),Y=!0),z()}const Qt={key:0,class:"page-mask fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-20"},Kt=p({props:{active:{type:Boolean,required:!0}},setup(t){const s=t;function n(){document.body.classList.add("no-scroll")}function o(){document.body.classList.remove("no-scroll")}return se(ae(s,"active"),a=>{a===!0?n():o()}),(a,i)=>t.active?(d(),u("div",Qt,[A(a.$slots,"default")])):L("",!0)}});const Zt={class:"shadow-lg"},Jt=e("img",{src:Dt,width:"280",height:"280",class:"shadow"},null,-1),Xt={class:"bg-white rounded-bottom"},en={class:"py-6 flex flex-col items-center bg-gray-50",style:{"box-shadow":"inset 0px 4px 4px -4px #AAA, inset 0px -4px 4px -4px #AAA"}},tn={key:0},nn={key:1},sn=c(" Mint "),an={class:"inline-block text-right",style:{width:"1em"}},on={class:"text-center py-6",style:{"font-weight":"600"}},rn={class:"w-full h-full flex flex-col justify-center items-center px-8"},ln=e("img",{src:qt,width:"64",height:"64"},null,-1),cn=e("div",{class:"mt-4 text-center minting"},[e("p",{class:"text-3xl font-bold mb-2"},"Minting..."),e("p",null,"click anywhere to close this window or wait until minted")],-1),dn=p({setup(t){const s=f(1),n=f(!1),o=B(),a=Gt(),i=F(()=>a.remaining===void 0?"Loading...":a.remaining===0?"Sold Out!":a.remaining+" Punks Remaining!");function r(){document.body.classList.remove("no-scroll"),n.value=!1,V("Your mint is processing.")}async function m(){var g;if(o.address===null){w("Please connect to the wallet.");return}if(!o.validChain){w("Please switch to the correct chain.");return}let v;try{v=await Et(s.value)}catch(y){((g=y==null?void 0:y.error)==null?void 0:g.code)===-32e3?w("Sorry, your have insufficient funds."):(y==null?void 0:y.code)===4001||w("Sorry, something went wrong. The mint failed.");return}try{document.body.classList.add("no-scroll"),n.value=!0,await v(),document.body.classList.remove("no-scroll"),n.value=!1,V("Congratulation! You receive your AcaPunks!")}catch{document.body.classList.remove("no-scroll"),n.value=!1,w("Sorry, something went wrong. The mint failed.")}}return(v,g)=>(d(),u("figure",Zt,[Jt,e("figcaption",Xt,[e("div",en,[oe(e("input",{"onUpdate:modelValue":g[0]||(g[0]=y=>s.value=y),type:"range",min:"1",max:"10",class:"mint-bar mb-3 w-full block",style:{width:"80%"}},null,512),[[ie,s.value]]),e("button",{class:"block w-full py-2 border rounded-full border-aca-red text-aca-red active:text-white hover:shadow active:bg-aca-red active-bg-opacity-1 transition-colors",style:{width:"60%"},onClick:m},[n.value?(d(),u("span",tn,"Minting...")):(d(),u("span",nn,[sn,e("span",an,T(s.value),1)]))])]),e("div",on,T($(i)),1)]),l(Kt,{active:n.value,onClick:r},{default:_(()=>[e("div",rn,[l(zt,null,{default:_(()=>[ln]),_:1}),cn])]),_:1},8,["active"])]))}}),un={id:"mint",class:"bg-[#f8f8f8] text-gray-800 flex items-center justify-center py-10"},pn=p({setup(t){return(s,n)=>(d(),u("section",un,[l(dn)]))}});const yn={},_n={id:"roadmap",class:"bg-[#01030d] text-[#848198] py-24"},mn=re('<div class="container mx-auto px-4"><div class="mb-24 lg:px-[15vw]"><h2 class="text-center text-4xl mb-6 text-white font-black">Roadmap</h2><p class="text-center"> The AcaPunks aims to be a long-term community-driven project.Holders will be able to stake to earn. <a href="https://twitter.com/ParachainLabs" rel="noopener noreferrer">Parachain Labs</a> is also building an NFT marketplace \u2014 Acalart, whose profit will be distributed to DAO token stakers. </p></div><div class="goals flex flex-col relative py-24 lg:py-48"><div class="timeline"></div><div class="goal"><h3>Welcome to the AcaPunks</h3><p> The official discord is open. Whitelists and free AcaPunks giveaways are held to reward early supporters and community contributors. </p></div><div class="goal"><h3>Private Mint Start</h3><p> Early supporters and community contributors will be able to mint one hour before everyone else for their contribution. </p></div><div class="goal"><h3>$ART Token</h3><p> The staking contract will go online. Holders will be able to earn $ART by staking their AcaPunks! </p></div><div class="goal"><h3>$aUSD Giveaways</h3><p> 1000 $aUSD prize will be given to people who mint all tribes of AcaPunks. </p></div><div class="goal"><h3>Acalart</h3><p> Acalart \u2014 a DAO governed NFT marketplace will open. Transaction fees will be distributed to $ART token stakers. </p></div></div></div>',1),fn=[mn];function hn(t,s){return d(),u("section",_n,fn)}var vn=b(yn,[["render",hn]]);const gn={},bn={id:"faq",class:"text-center py-24 bg-[#f0f1f5]"},wn={class:"container mx-auto px-4"},xn=e("div",{class:"mb-8"},[e("h1",{class:"text-4xl mb-6 text-gray-700 font-black"},"FAQ"),e("p",null,[c(" Have questions? Here are the FAQs. Also follow our official "),e("a",{href:"https://twitter.com/acapunks",target:"_blank",rel:"noopener noreferrer"},"Twitter"),c(" for updates! ")])],-1),kn={class:"lg:flex flex-row flex-wrap justify-center gap-x-24 gap-y-36 pt-28"},Tn={class:"question"},$n={class:"icon"},An=e("h3",{class:"title"},"What are AcaPunks?",-1),Mn=e("p",{class:"answer"}," AcaPunks are 10,000 uniquely generated characters. No two are exactly alike, and each one of them can be officially owned by a single person on the Acala blockchain. ",-1),Pn={class:"question"},Cn={class:"icon"},Sn=e("h3",{class:"title"},"When is the drop?",-1),In=e("p",{class:"answer"}," Once the Acala EVM+ come online, we will deploy the smart contract ASAP. This is expected to happen in early Q1 2022. ",-1),Nn=e("p",{class:"answer"}," There will be two phases for the drop. In the first phase, whitelisted members will be able to claim their AcaPunks; one hour after the first phase, public sale will begin and everyone will have a chance to mint their unique AcaPunks. ",-1),On={class:"question"},Fn={class:"icon"},Ln=e("h3",{class:"title"},"How to get whitelisted?",-1),Dn=e("p",{class:"answer"},[c(" Active community members that interact with our official "),e("a",{href:"https://twitter.com/acapunks",target:"_blank",rel:"noopener noreferrer"},"Twitter"),c(" and "),e("a",{href:"https://discord.gg/DHGvhfrYFZ",target:"_blank",rel:"noopener noreferrer"},"Discord"),c(" will win a chance to mint their AcaPunks in stage one. Visit our discord for detail. ")],-1),qn={class:"question"},Hn={class:"icon"},Rn=e("h3",{class:"title"},"How can I get an AcaPunk?",-1),En=e("p",{class:"answer"},[c(" Set up your "),e("a",{href:"https://metamask.io",target:"_blank",rel:"noopener noreferrer"},"Metamask"),c(" wallet. On the mint page, you can connect to your wallet and mint 1 AcaPunk for ACA worth ~0.05 ETH. However, it will be too late to get one at mint cost if they are sold out. ")],-1);function Bn(t,s){const n=h("fa");return d(),u("section",bn,[e("div",wn,[xn,e("div",kn,[e("div",Tn,[e("span",$n,[l(n,{icon:"fish"})]),An,Mn]),e("div",Pn,[e("span",Cn,[l(n,{icon:"dog"})]),Sn,In,Nn]),e("div",On,[e("span",Fn,[l(n,{icon:"spider"})]),Ln,Dn]),e("div",qn,[e("span",Hn,[l(n,{icon:"horse-head"})]),Rn,En])])])])}var Un=b(gn,[["render",Bn]]);const jn=p({setup(t){return(s,n)=>(d(),u(M,null,[l(Lt,{class:"w-100 min-h-screen-no-navbar"}),l(pn,{class:"w-100 min-h-screen-no-navbar"}),l(vn,{class:"w-100 min-h-screen-no-navbar"}),l(Un,{class:"w-100 min-h-screen-no-navbar"})],64))}}),Wn=[{path:"/",name:"home",component:jn},{path:"/terms-and-conditions",name:"terms-and-conditions",component:()=>j(()=>import("./TermsAndConditions.81798d57.js"),["assets/TermsAndConditions.81798d57.js","assets/vendor.547de413.js","assets/vendor.b5128024.css"])},{path:"/my",name:"my-punks",component:()=>j(()=>import("./MyPunks.806a3616.js"),["assets/MyPunks.806a3616.js","assets/MyPunks.c83e31c9.css","assets/vendor.547de413.js","assets/vendor.b5128024.css"])}],Vn=le({history:ce(),routes:Wn,scrollBehavior(t,s){if(t.hash)return{el:t.hash,behavior:s.name===t.name?"smooth":"auto",top:72}}});de.add(ue,pe,ye,_e,me,fe,he,ve,ge,be,we);const zn=xe();ke(xt).use(Vn).use(zn).component("fa",Te).mount("#app");export{Kt as _,Qn as f,Gn as g,B as u};
