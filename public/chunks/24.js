(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"4zA5":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("kvrn"),s=a.n(i),r=function(){return Math.random().toString(36).substring(2)},n={name:"ContentLoader",functional:!0,props:{width:{type:[Number,String],default:400},height:{type:[Number,String],default:130},speed:{type:Number,default:2},preserveAspectRatio:{type:String,default:"xMidYMid meet"},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},render:function(t,e){var a=e.props,i=e.data,n=e.children,o=a.uniqueKey?a.uniqueKey+"-idClip":r(),l=a.uniqueKey?a.uniqueKey+"-idGradient":r();return t("svg",s()([i,{attrs:{viewBox:"0 0 "+a.width+" "+a.height,version:"1.1",preserveAspectRatio:a.preserveAspectRatio}}]),[t("rect",{style:{fill:"url("+a.baseUrl+"#"+l+")"},attrs:{"clip-path":"url("+a.baseUrl+"#"+o+")",x:"0",y:"0",width:a.width,height:a.height}}),t("defs",[t("clipPath",{attrs:{id:o}},[n||t("rect",{attrs:{x:"0",y:"0",rx:"5",ry:"5",width:a.width,height:a.height}})]),t("linearGradient",{attrs:{id:l}},[t("stop",{attrs:{offset:"0%","stop-color":a.primaryColor,"stop-opacity":a.primaryOpacity}},[a.animate?t("animate",{attrs:{attributeName:"offset",values:"-2; 1",dur:a.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"50%","stop-color":a.secondaryColor,"stop-opacity":a.secondaryOpacity}},[a.animate?t("animate",{attrs:{attributeName:"offset",values:"-1.5; 1.5",dur:a.speed+"s",repeatCount:"indefinite"}}):null]),t("stop",{attrs:{offset:"100%","stop-color":a.primaryColor,"stop-opacity":a.primaryOpacity}},[a.animate?t("animate",{attrs:{attributeName:"offset",values:"-1; 2",dur:a.speed+"s",repeatCount:"indefinite"}}):null])])])])}}},kvrn:function(t,e){var a=/^(attrs|props|on|nativeOn|class|style|hook)$/;function i(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(t,e){var s,r,n,o,l;for(n in e)if(s=t[n],r=e[n],s&&a.test(n))if("class"===n&&("string"==typeof s&&(l=s,t[n]=s={},s[l]=!0),"string"==typeof r&&(l=r,e[n]=r={},r[l]=!0)),"on"===n||"nativeOn"===n||"hook"===n)for(o in r)s[o]=i(s[o],r[o]);else if(Array.isArray(s))t[n]=s.concat(r);else if(Array.isArray(r))t[n]=[s].concat(r);else for(o in r)s[o]=r[o];else t[n]=e[n];return t}),{})}},"pc/K":function(t,e,a){"use strict";a.r(e);var i={components:{ContentLoader:a("4zA5").a},data:function(){return{hospitals:[]}},methods:{getHospitals:function(){var t=this;axios.get("/corona/api/rumahsakit").then((function(e){t.hospitals=e.data.data}))}},mounted:function(){this.getHospitals()}},s=a("KHd+"),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full"},[a("div",{staticClass:"p-6 mx-4 mt-8 bg-white rounded-lg shadow-lg"},[a("h3",{staticClass:"text-lg font-bold text-left lg:text-3xl"},[t._v("Daftar Rumah Sakit Rujukan")]),t._v(" "),a("p",{staticClass:"mt-4 text-sm md:text-base"},[t._v("Berikut ini adalah rumah sakit yang menjadi rujukan untuk pasien dengan status Pasien dalam Pengawasan. Anda harus mengunjungi fasilitas kesehatan terdekat terlebih dahulu seperti klinik/rumah sakit umum sebelum akhirnya dapat dirujuk ke rumah sakit di bawah ini.")]),t._v(" "),t.hospitals.length<=0?a("content-loader"):a("div",{staticClass:"flex flex-col flex-wrap justify-between w-full mt-4 md:flex-row"},t._l(t.hospitals,(function(e){return a("div",{key:e.no,staticClass:"flex flex-col flex-wrap w-full p-4 mx-auto mt-6 border-l-2 border-blue-400 rounded-lg shadow-lg md:m-4 md:max-w-lg border-left"},[a("h4",{staticClass:"font-bold text-left"},[t._v(t._s(e.nama))]),t._v(" "),a("p",{staticClass:"text-xs text-left md:text-sm"},[t._v(t._s(e.alamat))]),t._v(" "),a("a",{staticClass:"w-full p-2 mx-auto mt-2 text-sm text-left text-white bg-blue-400 rounded-md hover:opacity-75 md:text-base",attrs:{href:"tel:"+e.telepon},on:{"update:href":function(a){return t.$set("tel:"+e,"telepon",a)}}},[a("i",{staticClass:"fas fa-phone-alt"}),t._v("\n          "+t._s(e.telepon)+"\n        ")]),t._v(" "),a("a",{staticClass:"w-full p-2 mx-auto mt-2 text-sm text-left text-white bg-blue-600 rounded-md hover:opacity-75 md:text-base",attrs:{href:"mailto:"+e.email},on:{"update:href":function(a){return t.$set("mailto:"+e,"email",a)}}},[a("i",{staticClass:"fas fa-mail-bulk"}),t._v("\n          "+t._s(e.email)+"\n        ")]),t._v(" "),a("a",{staticClass:"w-full p-2 mx-auto mt-2 text-sm text-left text-white bg-gray-700 rounded-md hover:opacity-75 md:text-base",attrs:{href:"https://maps.google.com/maps?q="+e.latitude+","+e.longitude},on:{"update:href":function(a){return t.$set("https://maps.google.com/maps?q="+e.latitude+","+e,"longitude",a)}}},[a("i",{staticClass:"fas fa-map"}),t._v(" Lihat di Map\n        ")])])})),0)],1)])}),[],!1,null,null,null);e.default=r.exports}}]);