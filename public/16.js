(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(23),i=a.n(n),r=function(){return Math.random().toString(36).substring(2)},s={name:"ContentLoader",functional:!0,props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var a=e.props,n=e.data,s=e.children,l=a.uniqueKey?a.uniqueKey+"-idClip":r(),u=a.uniqueKey?a.uniqueKey+"-idGradient":r();return t("svg",i()([n,{attrs:{viewBox:"0 0 "+a.width+" "+a.height,version:"1.1",preserveAspectRatio:a.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+a.baseUrl+"#"+u+")"},attrs:{"clip-path":"url("+a.baseUrl+"#"+l+")",x:"0",y:"0",width:a.width,height:a.height}}),t("defs",[t("clipPath",{attrs:{id:l}},[s||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:a.width,height:a.height}})]),t("linearGradient",{attrs:{id:u}},[t("stop",{attrs:{offset:"0%","stop-color":a.primaryColor,"stop-opacity":a.primaryOpacity}},[a.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:a.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":a.secondaryColor,"stop-opacity":a.secondaryOpacity}},[a.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:a.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":a.primaryColor,"stop-opacity":a.primaryOpacity}},[a.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:a.speed+"s",repeatCount:"indefinite"}}):null])])])])}}},102:function(t,e,a){"use strict";a.r(e);var n={data:function(){return{dataRekapitulasiSulteng:[]}},methods:{fetchDataPCR:function(){var t=this;axios.get("/corona/api/test").then((function(e){t.dataRekapitulasiSulteng=e.data.data})).catch((function(t){console.log(t)}))},updater:function(){var t=this;setInterval((function(){t.fetchDataPCR()}),3e5)}},created:function(){this.fetchDataPCR(),this.updater()},components:{DataPCR:function(){return a.e(14).then(a.bind(null,107))},DataRDT:function(){return a.e(15).then(a.bind(null,108))},RtChart:function(){return Promise.all([a.e(0),a.e(1),a.e(23)]).then(a.bind(null,109))},PieChart:function(){return Promise.all([a.e(0),a.e(1),a.e(26),a.e(37)]).then(a.bind(null,110))},NewCase:function(){return Promise.all([a.e(0),a.e(1),a.e(36)]).then(a.bind(null,111))},ChartSex:function(){return Promise.all([a.e(27),a.e(35)]).then(a.bind(null,112))},ContentLoader:a(1).a,Dashboard:function(){return Promise.all([a.e(0),a.e(4),a.e(32)]).then(a.bind(null,113))},MapTab:function(){return a.e(33).then(a.bind(null,114))},TableTab:function(){return a.e(34).then(a.bind(null,115))},ChartTab:function(){return a.e(31).then(a.bind(null,116))},Partner:function(){return a.e(3).then(a.bind(null,117))}}},i=a(0),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-gray-800"},[a("dashboard"),t._v(" "),a("section",{staticClass:"m-8"},[a("dataRDT",{attrs:{"props-data-rekapitulasi-sulteng":t.dataRekapitulasiSulteng[1]},on:{"update:propsDataRekapitulasiSulteng":function(e){return t.$set(t.dataRekapitulasiSulteng,1,e)},"update:props-data-rekapitulasi-sulteng":function(e){return t.$set(t.dataRekapitulasiSulteng,1,e)}}})],1),t._v(" "),a("section",{staticClass:"m-8"},[a("DataPCR",{attrs:{"props-data-rekapitulasi-sulteng":t.dataRekapitulasiSulteng[0]},on:{"update:propsDataRekapitulasiSulteng":function(e){return t.$set(t.dataRekapitulasiSulteng,0,e)},"update:props-data-rekapitulasi-sulteng":function(e){return t.$set(t.dataRekapitulasiSulteng,0,e)}}})],1),t._v(" "),a("h3",{staticClass:"w-full mt-16 text-lg font-bold text-center md:text-left md:ml-6 md:text-3xl"},[t._v("Peta Penyebaran Kasus")]),t._v(" "),a("keep-alive",[a("map-tab",{staticClass:"mt-4"})],1),t._v(" "),a("h3",{staticClass:"w-full mt-16 text-lg font-bold text-center md:text-left md:ml-6 md:text-3xl"},[t._v("Tabel Penyebaran Kasus")]),t._v(" "),a("table-tab",{staticClass:"mt-4"}),t._v(" "),a("h3",{staticClass:"w-full mt-16 text-lg font-bold text-center md:text-left md:ml-6 md:text-3xl"},[t._v("Visualisasi Data Kasus COVID-19")]),t._v(" "),a("chart-tab",{staticClass:"mt-4"}),t._v(" "),a("keep-alive",[a("rt-chart",{staticClass:"mt-12"})],1),t._v(" "),a("div",{staticClass:"flex flex-col w-full mt-4 lg:flex-row"},[a("keep-alive",[a("new-case",{staticClass:"w-full lg:w-1/2"})],1),t._v(" "),a("keep-alive",[a("pie-chart",{staticClass:"w-full mt-4 lg:w-1/2 lg:mt-0"})],1)],1),t._v(" "),a("chart-sex",{staticClass:"mt-8"}),t._v(" "),t._m(0),t._v(" "),a("partner",{staticClass:"mt-16"})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-6 mx-4 mt-16 text-center bg-white rounded-lg shadow-lg hover:text-blue-400"},[e("a",{staticClass:"mx-auto text-sm font-bold lg:text-3xl",attrs:{href:"https://banuacoders.com/api/pico",target:"_blank"}},[this._v("\n      Akses API publik - Data PICO SulTeng disini\n      "),e("i",{staticClass:"fas fa-angle-right"})])])}],!1,null,null,null);e.default=r.exports},23:function(t,e){var a=/^(attrs|props|on|nativeOn|class|style|hook)$/;function n(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(t,e){var i,r,s,l,u;for(s in e)if(i=t[s],r=e[s],i&&a.test(s))if("class"===s&&("string"==typeof i&&(u=i,t[s]=i={},i[u]=!0),"string"==typeof r&&(u=r,e[s]=r={},r[u]=!0)),"on"===s||"nativeOn"===s||"hook"===s)for(l in r)i[l]=n(i[l],r[l]);else if(Array.isArray(i))t[s]=i.concat(r);else if(Array.isArray(r))t[s]=[i].concat(r);else for(l in r)i[l]=r[l];else t[s]=e[s];return t}),{})}}}]);