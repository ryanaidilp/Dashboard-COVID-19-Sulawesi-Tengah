(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{Dptc:function(a,t,o){"use strict";o.r(t);var r=o("MO+k"),i=o.n(r),e=(o("JVhT"),o("TXrT"));function n(a,t){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),o.push.apply(o,r)}return o}function s(a){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){d(a,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(o,t))}))}return a}function d(a,t,o){return t in a?Object.defineProperty(a,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[t]=o,a}var l=o("b/SL").format,p={props:{kejadian:{type:String,default:function(){return"Positif"}},lokasi:{type:Object,default:function(){return"Sulawesi Tengah"}},propsDataRekapitulasiProv:{type:Array,default:function(){return[]}},propsDataRekapitulasiNasional:{type:Array,default:function(){return[]}}},data:function(){return{chartCumulative:null,positiveBgColor:"rgba(246, 71, 71, 1)",positiveBorderColor:"rgba(246, 71, 71, 0.8)",recoveredBgColor:"rgba(42, 187, 155, 1)",recoveredBorderColor:"rgba(42, 187, 155, 0.8)",deceasedBgColor:"rgba(245, 171, 53, 1)",deceasedBorderColor:"rgba(245, 171, 53, 0.8)",odpBgColor:"rgba(103, 65, 114, 1)",odpBorderColor:"rgba(103, 65, 114, 0.8)",finishedOdpBgColor:"rgba(36, 37, 42, 1)",finishedOdpBorderColor:"rgba(36, 37, 42, 0.8)",activeOdpBgColor:"rgba(65, 131, 215, 1)",activeOdpBorderColor:"rgba(65, 131, 215, 0.8)",pdpBgColor:"rgba(247, 202, 24, 1)",pdpBorderColor:"rgba(247, 202, 24, 0.8)",finishedPdpBgColor:"rgba(242, 217, 132, 1)",finishedPdpBorderColor:"rgba(242, 217, 132, 0.8)",activePdpBgColor:"rgba(211, 84, 0, 1)",activePdpBorderColor:"rgba(211, 84, 0, 0.8)",jsonDataHarianProvinsi:[],jsonDataHarianNasional:[],jsonDataKabupaten:[{no:1,nama:"Banggai",dataHarian:[]},{no:2,nama:"Banggai Kepulauan",dataHarian:[]},{no:3,nama:"Banggai Laut",dataHarian:[]},{no:4,nama:"Buol",dataHarian:[]},{no:5,nama:"Donggala",dataHarian:[]},{no:6,nama:"Morowali",dataHarian:[]},{no:7,nama:"Morowali Utara",dataHarian:[]},{no:8,nama:"Parigi Moutong",dataHarian:[]},{no:9,nama:"Poso",dataHarian:[]},{no:10,nama:"Sigi",dataHarian:[]},{no:11,nama:"Tojo Una-Una",dataHarian:[]},{no:12,nama:"Toli-Toli",dataHarian:[]},{no:13,nama:"Kota Palu",dataHarian:[]}],chartHarianOption:{type:"bar",data:{labels:[],datasets:[{label:"",data:[],type:"line",fill:!1,pointRadius:1,backgroundColor:"",borderColor:""},{label:"",data:[],type:"line",fill:!1,pointRadius:1,backgroundColor:"",borderColor:""},{label:"",data:[],type:"line",fill:!1,pointRadius:1,backgroundColor:"",borderColor:""},{label:"",data:[],type:"line",fill:!1,pointRadius:1,backgroundColor:"",borderColor:""}]},options:{plugins:{datalabels:{display:!1}},scales:{yAxes:[{position:"right",ticks:{beginAtZero:!0}}],xAxes:[{ticks:{callback:function(a,t,o){var r=a.split(" ");return r[0]+r[1]},maxRotation:90,minRotation:90},display:!0,scaleLabel:{display:!0,labelString:"Tanggal"}}]},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"index",intersect:!1,backgroundColor:"rgba(255,255,255,1)",titleFontColor:"#000",bodyFontColor:"#000",borderColor:"#222",borderWidth:1},hover:{mode:"index",intersect:!1},legend:{position:"bottom",usePointStyle:!0}}},chartOdpOption:{type:"bar",data:{labels:[],datasets:[{label:"",data:[],type:"line",fill:!1,pointRadius:1,backgroundColor:"",borderColor:""},{label:"",data:[],type:"line",fill:!1,pointRadius:1,backgroundColor:"",borderColor:""},{label:"",data:[],type:"line",fill:!1,pointRadius:1,backgroundColor:"",borderColor:""}]},options:{plugins:{datalabels:{display:!1}},scales:{yAxes:[{position:"right",ticks:{beginAtZero:!0}}],xAxes:[{ticks:{callback:function(a,t,o){var r=a.split(" ");return r[0]+r[1]},maxRotation:90,minRotation:90},display:!0,scaleLabel:{display:!0,labelString:"Tanggal"}}]},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"index",intersect:!1,backgroundColor:"rgba(255,255,255,1)",titleFontColor:"#000",bodyFontColor:"#000",borderColor:"#222",borderWidth:1},hover:{mode:"index",intersect:!1},legend:{position:"bottom",usePointStyle:!0}}}}},methods:{createCumulativeChart:function(a,t){var o=document.getElementById(a);null!=this.chartCumulative&&this.chartCumulative.destroy(),this.chartCumulative=new i.a(o,{type:t.type,data:t.data,options:t.options})},dateFormat:function(a){return l(Date.parse(a),"dd MMM yyyy",{locale:e.a})},fetchDataProvinsi:function(){var a=this,t=this,o=[],r=[],i=[],e=[],n=[],s="",d="",l="",p="",u="",c="",h="",b="";this.jsonDataHarianProvinsi.forEach((function(g){n.push(t.dateFormat(g.tanggal)),"Positif"===a.kejadian?(o.push(g.kumulatif.positif),r.push(g.kumulatif.sembuh),i.push(g.kumulatif.meninggal),e.push(g.aktif.dalam_perawatan),s=a.positiveBgColor,d=a.positiveBorderColor,l=a.activeOdpBgColor,p=a.activeOdpBorderColor,h=a.deceasedBgColor,b=a.deceasedBorderColor,u=a.recoveredBgColor,c=a.recoveredBorderColor):"PDP"===a.kejadian?(o.push(g.kumulatif.PDP),r.push(g.kumulatif.selesai_PDP),e.push(g.aktif.PDP),s=a.pdpBgColor,d=a.pdpBorderColor,l=a.activePdpBgColor,p=a.activePdpBorderColor,u=a.finishedPdpBgColor,c=a.finishedPdpBorderColor):"ODP"===a.kejadian&&(o.push(g.kumulatif.ODP),r.push(g.kumulatif.selesai_ODP),e.push(g.aktif.ODP),s=a.odpBgColor,d=a.odpBorderColor,l=a.activeOdpBgColor,p=a.activeOdpBorderColor,u=a.finishedOdpBgColor,c=a.finishedOdpBorderColor)})),"PDP"===t.kejadian||"ODP"===t.kejadian?t.drawChartOdp(n,o,e,r,s,d,l,p,u,c):t.drawChartHarian(n,o,e,r,i,s,d,l,p,u,c,h,b)},fetchDataKab:function(a){var t=this,o=this,r=[],i=[],e=[],n=[],s=[],d="",l="",p="",u="",c="",h="",b="",g="";this.jsonDataKabupaten.forEach((function(f){f.no===a&&f.dataHarian.forEach((function(a){if(s.push(o.dateFormat(a.tanggal)),"Positif"===t.kejadian){r.push(a.kasus_baru.positif),i.push(a.kasus_baru.sembuh),e.push(a.kasus_baru.meninggal);var f=a.kasus_baru.positif-(a.kasus_baru.sembuh+a.kasus_baru.meninggal);n.push(f),d=t.positiveBgColor,l=t.positiveBorderColor,p=t.activeOdpBgColor,u=t.activeOdpBorderColor,b=t.deceasedBgColor,g=t.deceasedBorderColor,c=t.recoveredBgColor,h=t.recoveredBorderColor}else if("PDP"===t.kejadian){r.push(a.kasus_baru.PDP),i.push(a.selesai.PDP);var C=a.kasus_baru.PDP-a.selesai.PDP;n.push(C),d=t.pdpBgColor,l=t.pdpBorderColor,p=t.activePdpBgColor,u=t.activePdpBorderColor,c=t.finishedPdpBgColor,h=t.finishedPdpBorderColor}else if("ODP"===t.kejadian){r.push(a.kasus_baru.ODP),i.push(a.selesai.ODP);var O=a.kasus_baru.ODP-a.selesai.ODP;n.push(O),d=t.odpBgColor,l=t.odpBorderColor,p=t.activeOdpBgColor,u=t.activeOdpBorderColor,c=t.finishedOdpBgColor,h=t.finishedOdpBorderColor}}))}));var f=[],C=[],O=[],v=[];r.reduce((function(a,t,o){return f[o]=a+t}),0),i.reduce((function(a,t,o){return O[o]=a+t}),0),n.reduce((function(a,t,o){return C[o]=a+t}),0),e.reduce((function(a,t,o){return v[o]=a+t}),0),"PDP"===o.kejadian||"ODP"===o.kejadian?o.drawChartOdp(s,f,C,O,d,l,p,u,c,h):o.drawChartHarian(s,f,C,O,v,d,l,p,u,c,h,b,g)},fetchDataNasional:function(){var a=this,t=this,o=[],r=[],i=[],e=[],n=[],s="",d="",l="",p="",u="",c="",h="",b="";this.jsonDataHarianNasional.forEach((function(g){n.push(t.dateFormat(g.tanggal)),o.push(g.kumulatif.positif),r.push(g.kumulatif.sembuh),i.push(g.kumulatif.meninggal),e.push(g.kumulatif.dalam_perawatan),s=a.positiveBgColor,d=a.positiveBorderColor,l=a.activeOdpBgColor,p=a.activeOdpBorderColor,h=a.deceasedBgColor,b=a.deceasedBorderColor,u=a.recoveredBgColor,c=a.recoveredBorderColor})),t.drawChartHarian(n,o,e,r,i,s,d,l,p,u,c,h,b)},fetchData:function(){"Sulawesi Tengah"===this.lokasi?this.fetchDataProvinsi():"Indonesia"===this.lokasi?this.fetchDataNasional():this.fetchDataKab(this.lokasi)},drawChartHarian:function(a,t,o,r,i,e,n,s,d,l,p,u,c){this.chartHarianOption.data.labels=a,this.chartHarianOption.data.datasets[0].data=t,this.chartHarianOption.data.datasets[0].label="POSITIF - TOTAL",this.chartHarianOption.data.datasets[0].backgroundColor=e,this.chartHarianOption.data.datasets[0].borderColor=n,this.chartHarianOption.data.datasets[1].data=i,this.chartHarianOption.data.datasets[1].label="POSITIF - MENINGGAL",this.chartHarianOption.data.datasets[1].backgroundColor=u,this.chartHarianOption.data.datasets[1].borderColor=c,this.chartHarianOption.data.datasets[2].data=r,this.chartHarianOption.data.datasets[2].label="POSITIF - SEMBUH",this.chartHarianOption.data.datasets[2].backgroundColor=l,this.chartHarianOption.data.datasets[2].borderColor=p,this.chartHarianOption.data.datasets[3].data=o,this.chartHarianOption.data.datasets[3].label="POSITIF - DIRAWAT",this.chartHarianOption.data.datasets[3].backgroundColor=s,this.chartHarianOption.data.datasets[3].borderColor=d,this.createCumulativeChart("chart-cumulative",this.chartHarianOption),this.chartCumulative.update(),this.chartCumulative.render()},drawChartOdp:function(a,t,o,r,i,e,n,s,d,l){this.chartOdpOption.data.labels=a,this.chartOdpOption.data.datasets[0].data=t,this.chartOdpOption.data.datasets[0].label="Total kejadian",this.chartOdpOption.data.datasets[0].backgroundColor=i,this.chartOdpOption.data.datasets[0].borderColor=e,this.chartOdpOption.data.datasets[1].data=r,this.chartOdpOption.data.datasets[1].label="Selesai",this.chartOdpOption.data.datasets[1].backgroundColor=d,this.chartOdpOption.data.datasets[1].borderColor=l,this.chartOdpOption.data.datasets[2].data=o,this.chartOdpOption.data.datasets[2].label="Aktif",this.chartOdpOption.data.datasets[2].backgroundColor=n,this.chartOdpOption.data.datasets[2].borderColor=s,this.createCumulativeChart("chart-cumulative",this.chartOdpOption),this.chartCumulative.update(),this.chartCumulative.render()},groupDataKab:function(){var a=this;this.jsonDataHarianProvinsi.forEach((function(t){var o={hari_ke:t.hari_ke,tanggal:t.tanggal},r={kasus_baru:{positif:0,sembuh:0,meninggal:0,ODP:0,PDP:0},aktif:{ODP:0,PDP:0},selesai:{ODP:0,PDP:0}};a.jsonDataKabupaten.forEach((function(a){var i=s(s({},o),r);t.daftar_kabupaten.forEach((function(t){if(a.no===t.no){var r={kasus_baru:s({},t.kasus_baru),aktif:s({},t.aktif),selesai:s({},t.selesai)};i=s(s({},o),r)}})),a.dataHarian.push(i)}))}))}},watch:{propsDataRekapitulasiProv:function(){this.jsonDataKabupaten.forEach((function(a){a.dataHarian=[]})),this.jsonDataHarianProvinsi=this.propsDataRekapitulasiProv,this.groupDataKab(),this.fetchData()},propsDataRekapitulasiNasional:function(){this.jsonDataHarianNasional.length>0&&(this.jsonDataHarianNasional=[]),this.jsonDataHarianNasional=this.propsDataRekapitulasiNasional,this.fetchData()},lokasi:function(){this.fetchData()},kejadian:function(){this.fetchData()}},mounted:function(){this.fetchData()}},u=o("KHd+"),c=Object(u.a)(p,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticStyle:{height:"400px"}},[t("keep-alive",[t("canvas",{attrs:{id:"chart-cumulative","aria-label":"Chart Kumulatif COVID-19",role:"img"}})])],1)}),[],!1,null,null,null);t.default=c.exports}}]);