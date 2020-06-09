(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{133:function(a,t,e){"use strict";e.r(t);var r=e(2),o=e.n(r),s=e(6),d=e.n(s),i=(e(16),e(102)),l=e(10).format,n={type:"bar",data:{labels:[],datasets:[{label:"Rata-Rata Mingguan",type:"line",data:[],fill:!1,pointRadius:1,pointBackgroundColor:"rgba(118, 93, 105, 1)",borderColor:"rgba(118, 93, 105, 1)"},{label:"Kasus Baru",data:[],yAxisID:"kasus-baru",backgroundColor:"",borderColor:""},{label:"Selesai",data:[],backgroundColor:"",borderColor:""}]},options:{plugins:{datalabels:{display:!1}},scales:{yAxes:[{type:"linear",id:"kasus-baru",position:"right",display:!0,scaleLabel:{display:!0,labelString:"Kasus Baru/Selesai"}}],xAxes:[{ticks:{callback:function(a,t,e){var r=a.split(" ");return r[0]+r[1]},maxRotation:90,minRotation:90},display:!0,stacked:!0,scaleLabel:{display:!0,labelString:"Tanggal"}}]},maintainAspectRatio:!1,responsive:!0,tooltips:{mode:"index",intersect:!1,backgroundColor:"rgba(255,255,255,1)",titleFontColor:"#000",bodyFontColor:"#000",borderColor:"#222",borderWidth:1},hover:{mode:"index",intersect:!1},legend:{position:"bottom",usePointStyle:!0,display:!1}}},p={components:{Loading:o.a},props:["kasus","wilayah"],data:function(){return{isLoading:!1,chart:null,positiveBgColor:"rgba(246, 71, 71, 1)",positiveBorderColor:"rgba(246, 71, 71, 0.8)",recoveredBgColor:"rgba(42, 187, 155, 1)",recoveredBorderColor:"rgba(42, 187, 155, 0.8)",deceasedBgColor:"rgba(245, 171, 53, 1)",deceasedBorderColor:"rgba(245, 171, 53, 0.8)",odpBgColor:"rgba(65, 131, 215, 1)",odpBorderColor:"rgba(65, 131, 215, 0.8)",finishedOdpBgColor:"rgba(58, 83, 155, 1)",finishedOdpBorderColor:"rgba(58, 83, 155, 0.8)",pdpBgColor:"rgba(83, 51, 237, 1)",pdpBorderColor:"rgba(83, 51, 237, 0.8)",finishedPdpBgColor:"rgba(102, 51, 153, 1)",finishedPdpBorderColor:"rgba(102, 51, 153, 0.8)"}},methods:{createChart:function(a,t){var e=document.getElementById(a);null!=this.chart&&this.chart.destroy(),this.chart=new d.a(e,{type:t.type,data:t.data,options:t.options})},getStatistic:function(){var a=this;this.isLoading=!0;var t=null;t="Sulawesi Tengah"==this.$props.wilayah?"statistik":"Indonesia"==this.$props.wilayah?"nasional":"statistik/"+this.$props.wilayah,axios.get("/corona/api/"+t).then((function(t){for(var e=t.data.data,r=[],o=[],s=[],d=[],p=[],c=[],u=[],g=[],h=[],b=[],C=[],k=[],y=[],f=0;f<e.length;f++){var B=e[f].tanggal.split("/"),v=null;if(B.length>=3){var w=B[2].split(" ");w=w[0];var m=B[1];v=B[0]+"-"+m+"-"+w}else v=e[f].tanggal;v=l(Date.parse(v),"dd MMM yyyy",{locale:i.a});r.push(v),o.push(e[f].kasus_baru.positif),s.push(e[f].rekap.rata_rata.positif_weekly),d.push(e[f].kasus_baru.sembuh),p.push(e[f].rekap.rata_rata.sembuh_weekly),c.push(e[f].kasus_baru.meninggal),u.push(e[f].rekap.rata_rata.meninggal_weekly),"Indonesia"!=a.$props.wilayah&&(g.push(e[f].kasus_baru.ODP),h.push(e[f].selesai.ODP),b.push(e[f].rekap.rata_rata.ODP_weekly),C.push(e[f].kasus_baru.PDP),k.push(e[f].selesai.PDP),y.push(e[f].rekap.rata_rata.PDP_weekly))}switch(a.$props.kasus){case"Positif":n.data.datasets[1].data=o,n.data.datasets[1].backgroundColor=a.positiveBgColor,n.data.datasets[1].borderColor=a.positiveBorderColor,n.data.datasets[2].data=[],n.data.datasets[0].data=s;break;case"Sembuh":n.data.datasets[1].data=d,n.data.datasets[1].backgroundColor=a.recoveredBgColor,n.data.datasets[1].borderColor=a.recoveredBorderColor,n.data.datasets[2].data=[],n.data.datasets[0].data=p;break;case"Meninggal":n.data.datasets[1].data=c,n.data.datasets[1].backgroundColor=a.deceasedBgColor,n.data.datasets[1].borderColor=a.deceasedBorderColor,n.data.datasets[2].data=[],n.data.datasets[0].data=u;break;case"ODP":n.data.datasets[1].data=g,n.data.datasets[1].backgroundColor=a.odpBgColor,n.data.datasets[1].borderColor=a.odpBorderColor,n.data.datasets[2].data=h,n.data.datasets[2].backgroundColor=a.finishedOdpBgColor,n.data.datasets[2].borderColor=a.finishedOdpBorderColor,n.data.datasets[0].data=b;break;case"PDP":n.data.datasets[1].data=C,n.data.datasets[1].backgroundColor=a.pdpBgColor,n.data.datasets[1].borderColor=a.pdpBorderColor,n.data.datasets[2].data=k,n.data.datasets[2].backgroundColor=a.finishedPdpBgColor,n.data.datasets[2].borderColor=a.finishedPdpBorderColor,n.data.datasets[0].data=y}n.data.labels=r,a.chart.update(),a.isLoading=!1}))},updater:function(){var a=this;setInterval((function(){a.createChart("chart-container",n),a.getStatistic()}),3e5)}},watch:{wilayah:function(){this.createChart("chart-container",n),this.getStatistic()},kasus:function(){this.createChart("chart-container",n),this.getStatistic()}},mounted:function(){this.createChart("chart-container",n),this.getStatistic(),this.updater()}},c=e(0),u=Object(c.a)(p,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticStyle:{height:"400px"}},[e("div",{staticClass:"absolute flex justify-center w-full"},[e("loading",{attrs:{active:a.isLoading,opacity:.8,height:300,width:128,loader:"spinner",color:"#59F"},on:{"update:active":function(t){a.isLoading=t}}})],1),a._v(" "),e("keep-alive",[e("canvas",{attrs:{id:"chart-container","aria-label":"Chart Harian COVID-19",role:"img"}})])],1)}),[],!1,null,null,null);t.default=u.exports}}]);