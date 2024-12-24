(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5276],{90264:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/import/[sqid]",function(){return r(86678)}])},44387:function(e,s,r){"use strict";r.d(s,{Z:function(){return VrmDemo}});var t=r(85893),a=r(67294),l=r(54156),i=r(89537);function VrmDemo(e){let{vrmUrl:s,onScreenShot:r,onLoaded:n,onError:d}=e,{viewer:m}=(0,a.useContext)(l.Z),[o,c]=(0,a.useState)(!0),[u,x]=(0,a.useState)(!1);(0,a.useEffect)(()=>{c(!0),x(!1)},[s]);let g=(0,a.useCallback)(e=>{e&&(m.setup(e),new Promise(async(e,r)=>{try{await m.loadVrm((0,i.Q)(s)),e(!0)}catch(e){r()}}).then(()=>{console.log("vrm loaded"),c(!1),x(!1),n&&n()}).then(()=>{if(r)return new Promise(e=>setTimeout(e,300))}).then(()=>{r&&m.getScreenshotBlob(r)}).catch(e=>{console.error("vrm loading error",e),x(!0),c(!1),d&&d()}))},[m,s]);return(0,t.jsxs)("div",{children:[(0,t.jsx)("canvas",{ref:g,className:"h-full w-full"}),o&&(0,t.jsx)("div",{className:"text-gray-500 p-2 text-2xl",children:"Loading..."}),u&&(0,t.jsx)("div",{className:"p-2 text-2xl",children:"Error loading VRM model..."})]})}},86678:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return Import}});var t=r(85893),a=r(67294),l=r(67421),i=r(41664),n=r.n(i),d=r(11163),m=r(65752),o=r(40577),c=r(44387),u=r(2515);let x=(0,u.eI)("https://ekkahbpanvpdksqlxbxe.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVra2FoYnBhbnZwZGtzcWx4YnhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMDg1MzksImV4cCI6MjA1MDU4NDUzOX0.a8E4rRXQR9MUPuEaKdBQJkmrZ-Yx4Uu05ZBHEiKjgrg");var g=r(35118),p=r(67608);function Import(){let{t:e}=(0,l.$G)(),s=(0,d.useRouter)(),[r,i]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[f,b]=(0,a.useState)(""),[y,_]=(0,a.useState)(""),[w,v]=(0,a.useState)(""),[j,N]=(0,a.useState)(""),[k,S]=(0,a.useState)(""),[F,I]=(0,a.useState)(""),[V,C]=(0,a.useState)(""),[E,U]=(0,a.useState)(""),[Z,M]=(0,a.useState)(!1),[q,J]=(0,a.useState)(!1),[z,B]=(0,a.useState)(!1),[P,R]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{document.body.style.backgroundColor="#ffffff"},[]),(0,a.useEffect)(()=>{async function getCharacter(){let{data:e,error:r}=await x.from("characters").select("description, name, system_prompt, vision_system_prompt, bg_url, youtube_videoid, vrm_url, animation_url, voice_url").eq("sqid",s.query.sqid).single();if(r||!e){B(!0);return}let{description:t,name:a,system_prompt:l,vision_system_prompt:n,bg_url:d,youtube_videoid:m,vrm_url:o,animation_url:c,voice_url:u}=e;i(t),h(a),b(l),_(n),v(d),N(m),S(o),C(c),U(u),J(!0)}s.query.sqid&&getCharacter()},[s]),(0,t.jsxs)("div",{className:"p-4 md:p-20",children:[(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[z&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",role:"alert",children:[(0,t.jsx)("strong",{className:"font-bold",children:e("Error!")})," ",(0,t.jsx)("span",{className:"block sm:inline",children:e("Something went wrong.")})]}),(0,t.jsxs)("p",{className:"mt-8",children:[e("Try again later.")," ",(0,t.jsx)(n(),{href:"/",className:"text-cyan-500",children:e("Click here")})," ",e("to return to homepage.")]})]}),!z&&q&&(0,t.jsxs)("h1",{className:"text-lg",children:[e("Import")," ",q?"“".concat(u,"”")||0:"..."]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4 bg-gray-100",children:q&&(0,t.jsx)(c.Z,{vrmUrl:k,onScreenShot:async e=>{if(e)return(0,p.R)(e).then(e=>I(e))},onLoaded:()=>R(!0)})}),(0,t.jsx)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-2",children:q&&P&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-2",children:(0,t.jsx)("button",{onClick:async()=>{await void(u?(0,m.rF)("name",u):(0,m.rF)("name",(0,m.u_)("name")),f?(0,m.rF)("system_prompt",f):(0,m.rF)("system_prompt",(0,m.u_)("system_prompt")),y?(0,m.rF)("vision_system_prompt",y):(0,m.rF)("vision_system_prompt",(0,m.u_)("vision_system_prompt")),w?(0,m.rF)("bg_url",w):(0,m.rF)("bg_url",(0,m.u_)("bg_url")),j?(0,m.rF)("youtube_videoid",j):(0,m.rF)("youtube_videoid",(0,m.u_)("youtube_videoid")),k?((0,m.rF)("vrm_url",k),(0,m.rF)("vrm_save_type","web"),g.Z.addItem(k,"web","",k,F)):(0,m.rF)("vrm_url",(0,m.u_)("vrm_url")),V?(0,m.rF)("animation_url",V):(0,m.rF)("animation_url",(0,m.u_)("animation_url")),E?(0,m.rF)("voice_url",E):(0,m.rF)("voice_url",(0,m.u_)("voice_url"))),window.location.href="/",M(!0)},className:"inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-fuchsia-500 hover:bg-fuchsia-600 focus:outline-none ml-2",disabled:Z,children:e("Import")})}),(0,o.U)()&&(0,t.jsx)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-2",children:(0,t.jsx)(n(),{href:"/",children:(0,t.jsx)("button",{className:"mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none disabled:opacity-50 disabled:hover:bg-red-500 disabled:cursor-not-allowed ml-2",children:e("Cancel")})})})]})})]}),(0,t.jsxs)("div",{children:[r&&(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:e("Description")}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("textarea",{rows:4,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:r,disabled:!0})})]}),u&&u!=(0,m.u_)("name")&&(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:e("Name")}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:u,disabled:!0})})]}),f&&f!=(0,m.u_)("system_prompt")&&(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:e("System Prompt")}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("textarea",{rows:4,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:f,disabled:!0})})]}),y&&y!=(0,m.u_)("vision_system_prompt")&&(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:e("Vision System Prompt")}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("textarea",{rows:4,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:y,disabled:!0})})]}),w&&w!=(0,m.u_)("bg_url")&&(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:e("Background Url")}),(0,t.jsxs)("div",{className:"mt-2",children:[(0,t.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:w,disabled:!0}),(0,t.jsx)("img",{src:w,className:"mt-2"})]})]}),j&&j!=(0,m.u_)("youtube_videoid")&&(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:e("Youtube Video Id")}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:j,disabled:!0})}),(0,t.jsx)("iframe",{width:"100%",src:"https://www.youtube.com/embed/".concat(j),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]}),k&&k!=(0,m.u_)("vrm_url")&&(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:e("VRM Url")}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:k,disabled:!0})})]}),V&&V!=(0,m.u_)("animation_url")&&(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:e("Animation Url")}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:V,disabled:!0})})]}),E&&E!=(0,m.u_)("voice_url")&&(0,t.jsxs)("div",{className:"sm:col-span-3 max-w-md rounded-xl mt-4",children:[(0,t.jsx)("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:e("Voice Url")}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("input",{type:"text",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:E,disabled:!0})})]})]})]})]})}}},function(e){e.O(0,[8086,3737,7922,1546,923,9774,2888,179],function(){return e(e.s=90264)}),_N_E=e.O()}]);