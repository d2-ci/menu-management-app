(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[135],{379:function(e,a,t){e.exports={container:"App_container__2zgzu",title:"App_title__1NBlr",description:"App_description__3qOuV"}},380:function(e){e.exports=JSON.parse('{"Your apps":"\u062a\u0637\u0628\u064a\u0642\u0627\u062a\u0643","Drag and drop the menu items to re-order them.":"","Updated order of apps.":"","Something went wrong whilst loading your apps":""}')},381:function(e){e.exports=JSON.parse('{"Your apps":"Va\u0161e aplikace","Drag and drop the menu items to re-order them.":"P\u0159et\xe1hn\u011bte polo\u017eky nab\xeddky a uspo\u0159\xe1dejte je znovu.","Updated order of apps.":"Aktualizovan\xe9 po\u0159ad\xed aplikac\xed.","Something went wrong whilst loading your apps":"P\u0159i na\u010d\xedt\xe1n\xed aplikac\xed se n\u011bco pokazilo"}')},382:function(e){e.exports=JSON.parse('{"Your apps":"","Drag and drop the menu items to re-order them.":"","Updated order of apps.":"","Something went wrong whilst loading your apps":""}')},383:function(e){e.exports=JSON.parse('{"Your apps":"Sus aplicaciones","Drag and drop the menu items to re-order them.":"","Updated order of apps.":"","Something went wrong whilst loading your apps":""}')},384:function(e){e.exports=JSON.parse('{"Your apps":"Vos applications","Drag and drop the menu items to re-order them.":"","Updated order of apps.":"","Something went wrong whilst loading your apps":""}')},385:function(e){e.exports=JSON.parse('{"Your apps":"Dine applikasjoner","Drag and drop the menu items to re-order them.":"Dra og slipp menypunktene for \xe5 endre rekkef\xf8lge","Updated order of apps.":"Oppdatert rekkef\xf8lge av apper.","Something went wrong whilst loading your apps":"Noe gikk galt under innlasting av appene dine"}')},386:function(e){e.exports=JSON.parse('{"Your apps":"Dina appar","Drag and drop the menu items to re-order them.":"","Updated order of apps.":"","Something went wrong whilst loading your apps":""}')},387:function(e){e.exports=JSON.parse('{"Your apps":"\u0622\u067e \u06a9\u06cc \u0627\u06cc\u067e\u0633","Drag and drop the menu items to re-order them.":"","Updated order of apps.":"","Something went wrong whilst loading your apps":""}')},388:function(e){e.exports=JSON.parse('{"Your apps":"\u0421\u0438\u0437\u043d\u0438\u043d\u0433 \u0438\u043b\u043e\u0432\u0430\u043b\u0430\u0440\u0438\u043d\u0433\u0438\u0437","Drag and drop the menu items to re-order them.":"","Updated order of apps.":"","Something went wrong whilst loading your apps":""}')},389:function(e){e.exports=JSON.parse('{"Your apps":"Sizning ilovalaringiz","Drag and drop the menu items to re-order them.":"","Updated order of apps.":"","Something went wrong whilst loading your apps":""}')},390:function(e){e.exports=JSON.parse('{"Your apps":"\u1ee8ng d\u1ee5ng c\u1ee7a b\u1ea1n","Drag and drop the menu items to re-order them.":"","Updated order of apps.":"","Something went wrong whilst loading your apps":""}')},391:function(e){e.exports=JSON.parse('{"Your apps":"\u4f60\u7684\u5e94\u7528","Drag and drop the menu items to re-order them.":"\u62d6\u653e\u83dc\u5355\u9879\u4ee5\u5bf9\u5176\u91cd\u65b0\u6392\u5e8f\u3002","Updated order of apps.":"\u5e94\u7528\u7a0b\u5e8f\u7684\u66f4\u65b0\u987a\u5e8f\u3002","Something went wrong whilst loading your apps":"\u52a0\u8f7d\u5e94\u7528\u7a0b\u5e8f\u65f6\u51fa\u4e86\u70b9\u95ee\u9898"}')},392:function(e,a,t){e.exports={"app-link":"DraggableApp_app-link__1sukN","app-icon":"DraggableApp_app-icon__2JFke","app-name":"DraggableApp_app-name__2jau-"}},397:function(e,a,t){e.exports={apps:"MenuManagement_apps__23px2"}},401:function(e,a,t){"use strict";t.r(a);var r=t(10),n=t(0),o=t.n(n),p=t(379),s=t.n(p),i=t(11),d=t(400),c=t(398),l=t(5),u=t(380),m=t(381),g=t(382),h=t(383),f=t(384),w=t(385),O=t(386),S=t(387),b=t(388),k=t(389),D=t(390),E=t(391);const N="default";l.a.addResources("ar",N,u),l.a.addResources("cs",N,m),l.a.addResources("en",N,g),l.a.addResources("es",N,h),l.a.addResources("fr",N,f),l.a.addResources("nb",N,w),l.a.addResources("sv",N,O),l.a.addResources("ur",N,S),l.a.addResources("uz",N,b),l.a.addResources("uz_Latn",N,k),l.a.addResources("vi",N,D),l.a.addResources("zh",N,E);var y=l.a,_=t(402),v=t(403),x=t(392),j=t.n(x);const J=({defaultAction:e,icon:a,displayName:t})=>o.a.createElement("div",null,o.a.createElement("a",{className:j.a["app-link"],href:e},o.a.createElement("img",{className:j.a["app-icon"],src:a}),o.a.createElement("div",{className:j.a["app-name"]},t)));var A=({app:e,onDrag:a,onDrop:t})=>{const[{isDragging:r},p]=Object(_.a)({item:{name:e.name,type:"APP"},collect:e=>({isDragging:e.isDragging()}),end:t}),[,s]=Object(v.a)({accept:"APP",hover(t){t.name!=e.name&&a(t.name,e.name)}}),i=Object(n.useRef)();return p(i),s(i),o.a.createElement("div",{ref:i,style:{visibility:r?"hidden":"visible"}},o.a.createElement(J,e))},U=t(397),R=t.n(U);const Y={apps:{resource:"action::menu/getModules"}},z={resource:"menu",type:"create",data:({items:e})=>e},P=({apps:e,initialAppsOrder:a})=>{const[t,p]=Object(n.useState)(a),{show:s}=Object(i.c)(y.t("Updated order of apps."),{success:!0}),{show:l}=Object(i.c)((e=>e),{critical:!0}),[u]=Object(i.f)(z,{onComplete(){s()},onError(e){l(e.message)}}),m=Object(n.useCallback)(((e,a)=>{const r=((e,a,t)=>{const r=e.indexOf(a),n=e.indexOf(t),o=[...e];return o.splice(r,1),o.splice(n,0,a),o})(t,e,a);p(r)}),[t]),g=Object(n.useCallback)((()=>{u({items:t})}),[t]);return o.a.createElement(r.d,null,o.a.createElement(d.a,{backend:c.a},o.a.createElement("div",{className:R.a.apps},t.map((a=>o.a.createElement(A,{key:a,onDrag:m,onDrop:g,app:e[a]}))))))};var M=()=>{const{baseUrl:e}=Object(i.e)(),{loading:a,error:t,data:p}=Object(i.g)(Y),s=Object(n.useMemo)((()=>{const a=a=>a.startsWith("http:")||a.startsWith("https:")?a:((...e)=>e.filter((e=>!!e)).map((e=>e.replace(/^\/+|\/+$/g,""))).join("/"))(e,"api",a);return null===p||void 0===p?void 0:p.apps.modules.map((e=>({...e,icon:a(e.icon),defaultAction:a(e.defaultAction)})))}),[p]);if(a)return o.a.createElement(r.e,null,o.a.createElement(r.f,null));if(t){const e=y.t("Something went wrong whilst loading your apps");return o.a.createElement(r.p,{error:!0,title:e},t.message)}const d={};return s.forEach((e=>d[e.name]=e)),o.a.createElement(P,{apps:d,initialAppsOrder:s.map((({name:e})=>e))})};a.default=()=>o.a.createElement(o.a.Fragment,null,o.a.createElement(r.h,{spacers:!0,theme:!0}),o.a.createElement("div",{className:s.a.container},o.a.createElement("header",null,o.a.createElement("h1",{className:s.a.title},y.t("Your apps")),o.a.createElement("p",{className:s.a.description},y.t("Drag and drop the menu items to re-order them."))),o.a.createElement(M,null)))}}]);
//# sourceMappingURL=app.52e12b7d.chunk.js.map