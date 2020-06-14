(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"2NTw":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".anychart-tooltip {\n  justify-content: center;\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n  z-index: 100;\n  background: rgb(250, 250, 250);\n  color: #2d3748;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n}\n.anychart-tooltip-separator {\n  height: 1px;\n  background-color: rgba(136, 136, 136, 0.7);\n}\n.anychart-tooltip-title {\n  font-size: 0.875rem;\n  text-align: left;\n  font-weight: 700;\n}\r\n",""])},G1Ar:function(t,e,a){"use strict";a.r(e);a("Xd0Y");var o=anychart.map(),n={data:function(){return{today:new Date,positiveDataset:[],positiveColor:["#418a47","#689849","#8da64e","#b1b356","#d6bf63","#facb75","#f6b063","#f19557","#ea7951","#e15c4f","#d43d51","#CD0000"],recoveredDataset:[],recoveredColor:["#DEEDCF","#BFE1B0","#99D492","#74C67A","#56B870","#39A96B","#198C75","#188977","#137177","#0E4D64","#0A2F51","#1D9A6C"],deathDataset:[],deathColor:["#FFF3BA","#FFEB9B","#FFE07C","#FFD45D","#FFC63E","#FFB61F","#F89C07","#F0930F","#E98C16","#E1851E","#DA7F25","#FFA500"]}},methods:{loadGeoJson:function(){axios.get("/corona/public/assets/geojson/indonesia.json").then((function(t){o.geoData(t.data)}))},createChoropleth:function(t,e,a){o.removeAllSeries();var n=o.choropleth(e);n.colorScale(anychart.scales.ordinalColor([{less:100,color:a[0]},{from:100,to:200,color:a[1]},{from:200,to:300,color:a[2]},{from:300,to:400,color:a[3]},{from:400,to:500,color:a[4]},{from:500,to:600,color:a[5]},{from:600,to:700,color:a[6]},{from:700,to:800,color:a[7]},{from:800,to:900,color:a[8]},{from:900,to:1e3,color:a[9]},{greater:1e3,color:a[10]}])),n.tooltip().useHtml(!0),n.tooltip().format((function(t){var e=null==t.getData("positif")?t.getData("value"):t.getData("positif"),a=null==t.getData("sembuh")?t.getData("value"):t.getData("sembuh"),o=null==t.getData("meninggal")?t.getData("value"):t.getData("meninggal");return'<table class="flex text-xs text-left text-gray-800 table-auto justify-left"><tbody><tr><td class="px-1">Positif</td><td class="px-1 font-bold">'+e+'</td></tr><tr><td class="px-1">Dirawat</td><td class="px-1 font-bold">'+(e-(a+o))+'</td></tr><tr><td class="px-1">Sembuh</td><td class="px-1 font-bold">'+a+'</td></tr><tr><td class="px-1">Meninggal</td><td class="px-1 font-bold">'+o+"</td></tr><tr></tbody></table>"}));var r=o.title();r.enabled(!0),r.text("Choropleth Map kasus "+t+" COVID-19 di Indonesia"),n.name(t+"(Choropleth)"),n.labels(!0),n.labels().format("{%value}"),n.labels().fontWeight(600),n.hovered().fill(a[11]),o.colorRange().enabled(!0).length(1e4),n.selectionMode("none")},getAllProvinces:function(){var t=this;axios.get("/corona/api/provinsi").then((function(e){t.positiveDataset.length>0&&(t.positiveDataset=[],t.recoveredDataset=[],t.deathDataset=[]),e.data.data.forEach((function(e){t.positiveDataset.push({id:e.map_id,value:e.positif,sembuh:e.sembuh,meninggal:e.meninggal}),t.recoveredDataset.push({id:e.map_id,value:e.sembuh,positif:e.positif,meninggal:e.meninggal}),t.deathDataset.push({id:e.map_id,value:e.meninggal,positif:e.positif,sembuh:e.sembuh})}))}))}},mounted:function(){null==o.geoData()&&this.loadGeoJson(),this.getAllProvinces();var t=anychart.ui.zoom();t.target(o),t.render();var e=this.$refs.map_nasional_case,a="Data COVID-19 Nasional_"+(this.today.getDate()+"-"+(this.today.getMonth()+1)+"-"+this.today.getFullYear());o.exports().filename(a),o.container(e),o.draw(!0)}},r=(a("uKNb"),a("KHd+")),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-full p-3"},[a("div",{staticClass:"bg-white"},[a("div",{staticClass:"flex flex-wrap justify-center max-w-md mx-auto text-center"},[a("div",{staticClass:"flex items-center mr-4"},[a("input",{staticClass:"hidden",attrs:{id:"positif",type:"radio",name:"data_covid",value:"Positif",checked:""},on:{change:function(e){return t.createChoropleth("Positif",t.positiveDataset,t.positiveColor)}}}),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"flex items-center mr-4"},[a("input",{staticClass:"hidden",attrs:{id:"sembuh",type:"radio",name:"data_covid",value:"Sembuh"},on:{change:function(e){return t.createChoropleth("Sembuh",t.recoveredDataset,t.recoveredColor)}}}),t._v(" "),t._m(1)]),t._v(" "),a("div",{staticClass:"flex items-center mr-4"},[a("input",{staticClass:"hidden",attrs:{id:"meninggal",type:"radio",name:"data_covid",value:"Meninggal"},on:{change:function(e){return t.createChoropleth("Meninggal",t.deathDataset,t.deathColor)}}}),t._v(" "),t._m(2)])]),t._v(" "),a("div",{ref:"map_nasional_case",staticClass:"w-full mt-2 rounded-lg",staticStyle:{height:"500px"}})])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"positif"}},[e("span",{staticClass:"inline-block w-4 h-4 mr-1 border rounded-full border-grey"}),this._v("\n          Positif\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"sembuh"}},[e("span",{staticClass:"inline-block w-4 h-4 mr-1 border rounded-full border-grey"}),this._v("\n          Sembuh\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"meninggal"}},[e("span",{staticClass:"inline-block w-4 h-4 mr-1 border rounded-full border-grey"}),this._v("\n          Meninggal\n        ")])}],!1,null,null,null);e.default=s.exports},RWyd:function(t,e,a){var o=a("2NTw");"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(o,n);o.locals&&(t.exports=o.locals)},uKNb:function(t,e,a){"use strict";var o=a("RWyd");a.n(o).a}}]);