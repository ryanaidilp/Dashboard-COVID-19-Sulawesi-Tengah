(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var s=a(20),r=a.n(s),i=function(){return Math.random().toString(36).substring(2)},n={name:"ContentLoader",functional:!0,props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var a=e.props,s=e.data,n=e.children,o=a.uniqueKey?a.uniqueKey+"-idClip":i(),l=a.uniqueKey?a.uniqueKey+"-idGradient":i();return t("svg",r()([s,{attrs:{viewBox:"0 0 "+a.width+" "+a.height,version:"1.1",preserveAspectRatio:a.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+a.baseUrl+"#"+l+")"},attrs:{"clip-path":"url("+a.baseUrl+"#"+o+")",x:"0",y:"0",width:a.width,height:a.height}}),t("defs",[t("clipPath",{attrs:{id:o}},[n||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:a.width,height:a.height}})]),t("linearGradient",{attrs:{id:l}},[t("stop",{attrs:{offset:"0%","stop-color":a.primaryColor,"stop-opacity":a.primaryOpacity}},[a.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:a.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":a.secondaryColor,"stop-opacity":a.secondaryOpacity}},[a.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:a.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":a.primaryColor,"stop-opacity":a.primaryOpacity}},[a.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:a.speed+"s",repeatCount:"indefinite"}}):null])])])])}}},108:function(t,e,a){"use strict";a.r(e);var s={components:{ContentLoader:a(1).a},data:function(){return{posts:[]}},methods:{getPosts:function(){var t=this;axios.get("/corona/api/posko").then((function(e){t.posts=e.data.data}))}},mounted:function(){this.getPosts()}},r=a(0),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full"},[a("div",{staticClass:"p-6 mx-4 mt-8 bg-white rounded-lg shadow-lg"},[a("h3",{staticClass:"text-lg font-bold text-left lg:text-3xl"},[t._v("Hotline Gugus Tugas")]),t._v(" "),a("p",{staticClass:"text-sm md:text-base"},[t._v("Berikut ini adalah nomor telpon tim gugus tugas COVID-19 di Kab/Kota se Sulawesi Tengah.")]),t._v(" "),t.posts.length<=0?a("content-loader"):a("div",{staticClass:"flex flex-col flex-wrap justify-between w-full mt-4 md:flex-row"},t._l(t.posts,(function(e){return a("div",{key:e.no,staticClass:"flex flex-col flex-wrap w-full p-4 mx-auto mt-6 border-l-2 border-blue-400 rounded-lg shadow-lg md:m-4 md:max-w-lg border-left"},[a("h4",{staticClass:"font-bold text-left"},[t._v(t._s(e.nama))]),t._v(" "),a("p",{staticClass:"my-auto text-xs text-left text-justify md:text-sm"},[t._v("Hotline tim Gugus Tugas COVID-19 "+t._s(e.nama))]),t._v(" "),t._l(e.posko,(function(e){return a("span",{key:e.no,staticClass:"flex flex-wrap"},t._l(e.no_hp,(function(s){return a("a",{key:s,staticClass:"w-full p-2 mx-auto mt-2 text-sm text-left text-white bg-blue-600 rounded-md hover:opacity-75 md:text-base",attrs:{href:"tel:"+s}},[a("i",{staticClass:"fas fa-phone-alt"}),t._v("\n            "+t._s(e.nama+" - "+s)+"\n          ")])})),0)}))],2)})),0)],1)])}),[],!1,null,null,null);e.default=i.exports},20:function(t,e){var a=/^(attrs|props|on|nativeOn|class|style|hook)$/;function s(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(t,e){var r,i,n,o,l;for(n in e)if(r=t[n],i=e[n],r&&a.test(n))if("class"===n&&("string"==typeof r&&(l=r,t[n]=r={},r[l]=!0),"string"==typeof i&&(l=i,e[n]=i={},i[l]=!0)),"on"===n||"nativeOn"===n||"hook"===n)for(o in i)r[o]=s(r[o],i[o]);else if(Array.isArray(r))t[n]=r.concat(i);else if(Array.isArray(i))t[n]=[r].concat(i);else for(o in i)r[o]=i[o];else t[n]=e[n];return t}),{})}}}]);