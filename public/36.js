(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{111:function(a,t,e){"use strict";e.r(t);var r=e(2),s=e.n(r),o=e(6),i=e.n(o),d=(e(16),e(10).format,{type:"bar",data:{labels:[],datasets:[{data:[],label:"Positif",borderColor:"rgba(246, 71, 71, 0.8)",backgroundColor:"rgba(246, 71, 71, 1)"},{data:[],label:"Sembuh",borderColor:"rgba(42, 187, 155, 0.8)",backgroundColor:"rgba(42, 187, 155, 1)"},{data:[],label:"Meninggal",borderColor:"rgba(245, 171, 53, 0.8)",backgroundColor:"rgba(245, 171, 53, 1)"},{data:[],label:"Negatif",borderColor:"rgba(118, 93, 105, 0.8)",backgroundColor:"rgba(118, 93, 105, 1)"},{data:[],label:"ODP Baru",borderColor:"rgba(65, 131, 215, 0.8)",backgroundColor:"rgba(65, 131, 215, 1)"},{data:[],label:"ODP Selesai",borderColor:"rgba(58, 83, 155, 0.8)",backgroundColor:"rgba(58, 83, 155, 1)"},{data:[],label:"PDP Baru",borderColor:"rgba(83, 51, 237, 0.8)",backgroundColor:"rgba(83, 51, 237, 1)"},{data:[],label:"PDP Selesai",borderColor:"rgba(102, 51, 153, 0.8)",backgroundColor:"rgba(102, 51, 153, 1)"}]},options:{title:{display:!0,fontSize:16,text:"Perubahan Data di Kabupaten/Kota"},plugins:{datalabels:{display:!1}},scales:{yAxes:[{stacked:!0,gridLines:{display:!1,color:"#fff",zeroLineColor:"#fff",zeroLineWidth:0}}],xAxes:[{stacked:!0,ticks:{beginAtZero:!0},scaleLabel:{display:!1},gridLines:{}}]},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"label",intersect:!1,backgroundColor:"rgba(255,255,255,1)",titleFontColor:"#000",bodyFontColor:"#000",borderColor:"#222",borderWidth:1},hover:{mode:"nearest",intersect:!0},legend:{position:"bottom",usePointStyle:!1,display:!0}}}),l={components:{Loading:s.a},props:["kasus","wilayah"],data:function(){return{isLoading:!1,chart:null}},methods:{createChart:function(a,t){var e=document.getElementById(a);null!=this.chart&&this.chart.destroy(),this.chart=new i.a(e,{type:t.type,data:t.data,options:t.options})},getStatistic:function(){var a=this;this.isLoading=!0,axios.get("/corona/api/statistik/terkini").then((function(t){for(var e=t.data.data.daftar_kabupaten,r=[],s=[],o=[],i=[],l=[],n=[],b=[],u=[],c=[],g=0;g<e.length;g++)r.push(e[g].nama),s.push(e[g].kasus_baru.positif),o.push(e[g].kasus_baru.sembuh),i.push(e[g].kasus_baru.meninggal),l.push(e[g].kasus_baru.negatif),n.push(e[g].kasus_baru.ODP),b.push(e[g].selesai.ODP),u.push(e[g].kasus_baru.PDP),c.push(e[g].selesai.PDP);d.data.labels=r,d.data.datasets[0].data=s,d.data.datasets[1].data=o,d.data.datasets[2].data=i,d.data.datasets[3].data=l,d.data.datasets[4].data=n,d.data.datasets[5].data=b,d.data.datasets[6].data=u,d.data.datasets[7].data=c,a.chart.update(),a.isLoading=!1}))},updater:function(){var a=this;setInterval((function(){a.createChart("chart-bar",d),a.getStatistic()}),3e5)}},mounted:function(){this.createChart("chart-bar",d),this.getStatistic(),this.updater()}},n=e(0),b=Object(n.a)(l,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"w-full p-3"},[e("div",{staticClass:"relative bg-white rounded-lg shadow-lg"},[e("div",{staticClass:"absolute flex justify-center w-full"},[e("loading",{attrs:{active:a.isLoading,opacity:.8,width:128,loader:"spinner",color:"#59F"},on:{"update:active":function(t){a.isLoading=t}}})],1),a._v(" "),e("div",{staticClass:"p-5",staticStyle:{height:"400px"}},[e("keep-alive",[e("canvas",{attrs:{id:"chart-bar","aria-label":"Chart Kasus Baru",role:"img"}})])],1)])])}),[],!1,null,null,null);t.default=b.exports}}]);