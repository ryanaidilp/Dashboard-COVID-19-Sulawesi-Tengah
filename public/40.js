(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{133:function(e,t,a){"use strict";a.r(t);a(12);var o=anychart.map(),i={data:function(){return{today:new Date,positiveDataset:[],positiveColor:["#F9CACD","#F4A8AC","#EE868B","#E76569","#DF4346","#D12E2A","#BB000E","#A90019","#960022","#820029","#6E002C","#CD0000"],recoveredDataset:[],recoveredColor:["#DEEDCF","#BFE1B0","#99D492","#74C67A","#56B870","#39A96B","#198C75","#188977","#137177","#0E4D64","#0A2F51","#1D9A6C"],deathDataset:[],deathColor:["#FFF3BA","#FFEB9B","#FFE07C","#FFD45D","#FFC63E","#FFB61F","#F89C07","#F0930F","#E98C16","#E1851E","#DA7F25","#FFA500"]}},methods:{loadGeoJson:function(){axios.get("/corona/public/assets/geojson/indonesia.json").then((function(e){o.geoData(e.data)}))},createChoropleth:function(e,t,a){o.removeAllSeries();var i=o.choropleth(t);i.colorScale(anychart.scales.ordinalColor([{less:100,color:a[0]},{from:100,to:200,color:a[1]},{from:200,to:300,color:a[2]},{from:300,to:400,color:a[3]},{from:400,to:500,color:a[4]},{from:500,to:600,color:a[5]},{from:600,to:700,color:a[6]},{from:700,to:800,color:a[7]},{from:800,to:900,color:a[8]},{from:900,to:1e3,color:a[9]},{greater:1e3,color:a[10]}])),i.tooltip().format((function(e){var t=null==e.getData("positif")?e.getData("value"):e.getData("positif"),a=null==e.getData("sembuh")?e.getData("value"):e.getData("sembuh"),o=null==e.getData("meninggal")?e.getData("value"):e.getData("meninggal");return"Positif: "+t+"\nDirawat: "+(t-(a+o))+"\nSembuh: "+a+"\nMeninggal: "+o})),i.tooltip().hideDelay(5e3);var n=o.title();n.enabled(!0),n.text("Choropleth Map kasus "+e+" COVID-19 di Indonesia"),i.name(e+"(Choropleth)"),i.labels(!0),i.labels().format("{%value}"),i.labels().fontWeight(600),i.hovered().fill(a[11]),o.colorRange().enabled(!0).length(1e4),i.selectionMode("none")},getAllProvinces:function(){var e=this;axios.get("/corona/api/provinsi").then((function(t){e.positiveDataset.length>0&&(e.positiveDataset=[],e.recoveredDataset=[],e.deathDataset=[]),t.data.data.forEach((function(t){e.positiveDataset.push({id:t.map_id,value:t.positif,sembuh:t.sembuh,meninggal:t.meninggal}),e.recoveredDataset.push({id:t.map_id,value:t.sembuh,positif:t.positif,meninggal:t.meninggal}),e.deathDataset.push({id:t.map_id,value:t.meninggal,positif:t.positif,sembuh:t.sembuh})}))}))}},mounted:function(){null==o.geoData()&&this.loadGeoJson(),this.getAllProvinces();var e=anychart.ui.zoom();e.target(o),e.render();var t=this.$refs.map_nasional_case,a="Data COVID-19 Nasional_"+(this.today.getDate()+"-"+(this.today.getMonth()+1)+"-"+this.today.getFullYear());o.exports().filename(a),o.container(t),o.draw(!0)}},n=a(0),s=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full p-3"},[a("div",{staticClass:"bg-white"},[a("div",{staticClass:"flex flex-wrap justify-center max-w-md mx-auto text-center"},[a("div",{staticClass:"flex items-center mr-4"},[a("input",{staticClass:"hidden",attrs:{id:"positif",type:"radio",name:"data_covid",value:"Positif",checked:""},on:{change:function(t){return e.createChoropleth("Positif",e.positiveDataset,e.positiveColor)}}}),e._v(" "),e._m(0)]),e._v(" "),a("div",{staticClass:"flex items-center mr-4"},[a("input",{staticClass:"hidden",attrs:{id:"sembuh",type:"radio",name:"data_covid",value:"Sembuh"},on:{change:function(t){return e.createChoropleth("Sembuh",e.recoveredDataset,e.recoveredColor)}}}),e._v(" "),e._m(1)]),e._v(" "),a("div",{staticClass:"flex items-center mr-4"},[a("input",{staticClass:"hidden",attrs:{id:"meninggal",type:"radio",name:"data_covid",value:"Meninggal"},on:{change:function(t){return e.createChoropleth("Meninggal",e.deathDataset,e.deathColor)}}}),e._v(" "),e._m(2)])]),e._v(" "),a("div",{ref:"map_nasional_case",staticClass:"w-full mt-2 rounded-lg",staticStyle:{height:"500px"}})])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"positif"}},[t("span",{staticClass:"inline-block w-4 h-4 mr-1 border rounded-full border-grey"}),this._v("\n          Positif\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"sembuh"}},[t("span",{staticClass:"inline-block w-4 h-4 mr-1 border rounded-full border-grey"}),this._v("\n          Sembuh\n        ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"flex items-center cursor-pointer",attrs:{for:"meninggal"}},[t("span",{staticClass:"inline-block w-4 h-4 mr-1 border rounded-full border-grey"}),this._v("\n          Meninggal\n        ")])}],!1,null,null,null);t.default=s.exports}}]);