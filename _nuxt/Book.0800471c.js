import{r as b,o as e,E as n,F as o,P as l,Q as h,N as u,L as g,R as c,S as i,O as _,U as m}from"./entry.3624abb4.js";const p=""+globalThis.__publicAssetsURL("pay/jkopay.jpg"),k=""+globalThis.__publicAssetsURL("store/14-momoshu_dian_.jpeg"),f=""+globalThis.__publicAssetsURL("store/bo_ke_lai_.jpeg"),y=""+globalThis.__publicAssetsURL("store/cheng_pin_xian_shang_-heng_shi_-2.png"),w=""+globalThis.__publicAssetsURL("store/kingstone-qu_bei_.png"),x={class:"p-1 text-2xl font-light bg-yellow-700 text-white"},j=["href"],v={class:"md:flex sm:container"},$=["src"],L={class:"text-xl font-light"},N={class:"p-1 bg-yellow-700 text-white"},O={class:"text-xl font-light"},R={class:"font-light"},T={class:"p-3"},U=["href"],A=o("img",{class:"m-2 object-contain h-120 w-96 ...",src:p},null,-1),B={class:"lg:flex sm:container xl:max-w-none"},C=["href"],S=o("img",{class:"object-contain h-20 m-5",src:k,alt:"MOMO\u66F8\u5E97"},null,-1),V=[S],D=["href"],E=o("img",{class:"object-contain h-20 m-5",src:f,alt:"\u535A\u5BA2\u4F86"},null,-1),F=[E],M=["href"],q=o("img",{class:"object-contain h-20 m-5",src:y,alt:"\u8AA0\u54C1"},null,-1),G=[q],I=["href"],P=o("img",{class:"object-contain h-20 m-5",src:w,alt:"\u91D1\u77F3\u5802"},null,-1),Q=[P],z={data(){return{show_buy_option:!1,show_pay_option:!1}}},J=Object.assign(z,{__name:"Book",props:{book:{type:Object}},setup(t){return(s,a)=>{const r=b("spa");return e(),n(m,null,[o("h4",x,l(t.book.title),1),o("a",{class:"bg-blue-700 text-red-100",href:`${t.book.podcast}`},"podcast",8,j),o("div",v,[o("img",{class:"object-contain md:h-120 md:w-96",src:`/book/${t.book.ISBN13}.jpeg`},null,8,$),o("div",null,[o("h5",L,[h(" \u4F5C\u8005\uFF1A"),o("span",N,l(t.book.writer_name),1)]),o("h5",O,[h(" \u51FA\u7248\u793E\uFF1A"),u(r,null,{default:g(()=>[h(l(t.book.published_by),1)]),_:1})]),o("p",R,l(t.book.desc),1)])]),o("div",T,[c(o("button",{onClick:a[0]||(a[0]=d=>s.show_pay_option=!0),class:"rounded-lg bg-green-500 text-neutral-100 p-2 m-2"}," \u6350\u8D08\u9019\u672C ",512),[[i,!s.show_pay_option]]),c(o("div",null,[o("a",{href:`${t.book.donate}`,class:"m-2 rounded-lg bg-green-500 text-neutral-100 p-2 m-2"}," Sound On \u6296\u5167 \u53EF\u5237\u4FE1\u7528\u5361 \u53CA Google pay ",8,U),A],512),[[i,s.show_pay_option]]),c(o("button",{onClick:a[1]||(a[1]=d=>s.show_buy_option=!0),class:"rounded-lg bg-red-500 text-neutral-100 p-2 m-2"}," \u81EA\u5DF1\u770B ",512),[[i,!s.show_buy_option]]),c(o("div",B,[t.book.purchase_channel_momo?(e(),n("a",{key:0,href:`${t.book.purchase_channel_momo}`},V,8,C)):_("",!0),t.book.purchase_channel_books?(e(),n("a",{key:1,href:`${t.book.purchase_channel_books}`},F,8,D)):_("",!0),t.book.purchase_channel_eslite?(e(),n("a",{key:2,href:`${t.book.purchase_channel_eslite}`},G,8,M)):_("",!0),t.book.purchase_channel_kingstone?(e(),n("a",{key:3,href:`${t.book.purchase_channel_kingstone}`},Q,8,I)):_("",!0)],512),[[i,s.show_buy_option]])])],64)}}});export{J as default};
