(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{97:function(t,a,s){"use strict";s.r(a);var e=s(92),i=s(1),n=s(11).format,l=s(27).formatToTimeZone,r=new Intl.NumberFormat("id"),o={components:{ContentLoader:i.a,CardCase:function(){return s.e(7).then(s.bind(null,112))},CardSuspect:function(){return s.e(8).then(s.bind(null,113))}},data:function(){return{lastUpdate:null,statistics:null,totalPositif:0,totalSembuh:0,totalMeninggal:0,positifBaru:0,sembuhBaru:0,meninggalBaru:0,ODPBaru:0,ODPAktif:0,PDPBaru:0,PDPAktif:0,selesaiODP:0,selesaiODPBaru:0,selesaiPDP:0,selesaiPDPBaru:0,totalODP:0,totalPDP:0,positifNasional:0,sembuhNasional:0,meninggalNasional:0,positifBaruNasional:0,sembuhBaruNasional:0,meninggalBaruNasional:0}},methods:{getStatistics:function(){var t=this;axios.get("/corona/api/statistik/terkini").then((function(a){new Intl.NumberFormat("id-ID");t.statistics=a.data.data,t.totalPositif=r.format(t.statistics.kumulatif.positif),t.totalSembuh=r.format(t.statistics.kumulatif.sembuh),t.totalMeninggal=r.format(t.statistics.kumulatif.meninggal),t.positifBaru=r.format(t.statistics.kasus_baru.positif),t.sembuhBaru=r.format(t.statistics.kasus_baru.sembuh),t.meninggalBaru=r.format(t.statistics.kasus_baru.meninggal),t.totalODP=r.format(t.statistics.kumulatif.ODP),t.selesaiODP=r.format(t.statistics.kumulatif.selesai_ODP),t.ODPAktif=r.format(t.statistics.aktif.ODP),t.ODPBaru=r.format(t.statistics.kasus_baru.ODP),t.selesaiODPBaru=r.format(t.statistics.selesai.ODP),t.totalPDP=r.format(t.statistics.kumulatif.PDP),t.selesaiPDP=r.format(t.statistics.kumulatif.selesai_PDP),t.PDPAktif=r.format(t.statistics.aktif.PDP),t.PDPBaru=r.format(t.statistics.kasus_baru.PDP),t.selesaiPDPBaru=r.format(t.statistics.selesai.PDP)})).catch((function(t){return console.log(t)}))},getNationalData:function(){var t=this;axios.get("/corona/api/nasional/terkini").then((function(a){var s=a.data.data,i=l(new Date(s.tanggal),"HH:mm:ss",{timeZone:"Asia/Makassar"});t.lastUpdate=n(new Date(s.tanggal),"EEEE, dd MMMM yyyy",{locale:e.a}),t.lastUpdate+=" "+i,t.positifNasional=r.format(s.kumulatif.positif),t.sembuhNasional=r.format(s.kumulatif.sembuh),t.meninggalNasional=r.format(s.kumulatif.meninggal),t.positifBaruNasional=r.format(s.kasus_baru.positif),t.sembuhBaruNasional=r.format(s.kasus_baru.sembuh),t.meninggalBaruNasional=r.format(s.kasus_baru.meninggal)}))}},mounted:function(){var t=this;this.getStatistics(),this.getNationalData(),setInterval((function(){t.getStatistics(),t.getNationalData()}),6e4)}},u=s(0),c=Object(u.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("h3",{staticClass:"w-full mt-8 text-lg font-bold text-center md:text-left md:ml-4 md:text-3xl"},[t._v("Dashboard COVID-19 Sulawesi Tengah")]),t._v(" "),t.lastUpdate?s("p",{staticClass:"w-full h-10 text-xs text-center md:text-left md:ml-4 text-muted md:text-lg"},[t._v("\n    Pembaruan Terakhir :\n    "+t._s(t.lastUpdate)+"\n    WITA\n    "),s("br"),t._v(" "),t._m(0)]):s("div",{staticClass:"h-10"},[s("content-loader",{attrs:{speed:2,height:400,width:900,animate:!0,primaryColor:"#ddd",secondaryColor:"#fff"}},[s("rect",{attrs:{x:"10",y:"0",rx:"3",ry:"3",width:"400",height:"15"}})])],1),t._v(" "),t.statistics||this.positifNasional?s("div",{staticClass:"flex flex-col flex-wrap items-center justify-center block w-full mt-8 text-gray-800 md:flex-row"},[s("card-case",{attrs:{title:"Positif",cumulative_local:t.totalPositif,new_local:t.positifBaru,cumulative_national:t.positifNasional,new_national:t.positifBaruNasional,bg_card:"bg-red-300",bg_new:"bg-red-400",text_color:"text-red-300"}}),t._v(" "),s("card-case",{attrs:{title:"Sembuh",cumulative_local:t.totalSembuh,new_local:t.sembuhBaru,cumulative_national:t.sembuhNasional,new_national:t.sembuhBaruNasional,bg_card:"bg-green-300",bg_new:"bg-green-400",text_color:"text-green-300"}}),t._v(" "),s("card-case",{attrs:{title:"Meninggal",cumulative_local:t.totalMeninggal,new_local:t.meninggalBaru,cumulative_national:t.meninggalNasional,new_national:t.meninggalBaruNasional,bg_card:"bg-orange-300",bg_new:"bg-orange-400",text_color:"text-orange-300"}}),t._v(" "),s("card-suspect",{attrs:{title:"Pasien Dalam Pengawasan (PDP)",new_case:t.PDPBaru,new_finished_case:t.selesaiPDPBaru,active_case:t.PDPAktif,total_case:t.totalPDP,total_finished_case:t.selesaiPDP,status:"Pengawasan"}}),t._v(" "),s("card-suspect",{attrs:{title:"Orang Dalam Pemantauan (ODP)",new_case:t.ODPBaru,new_finished_case:t.selesaiODPBaru,active_case:t.ODPAktif,total_case:t.totalODP,total_finished_case:t.selesaiODP,status:"Pemantauan"}})],1):s("content-loader",{attrs:{height:400,width:900,speed:1,primaryColor:"#ddd",secondaryColor:"#fff"}},[s("rect",{attrs:{x:"0",y:"20",rx:"3",ry:"3",width:"290",height:"110"}}),t._v(" "),s("rect",{attrs:{x:"320",y:"20",rx:"3",ry:"3",width:"290",height:"110"}}),t._v(" "),s("rect",{attrs:{x:"640",y:"20",rx:"3",ry:"3",width:"290",height:"110"}}),t._v(" "),s("rect",{attrs:{x:"0",y:"150",rx:"3",ry:"3",width:"450",height:"210"}}),t._v(" "),s("rect",{attrs:{x:"480",y:"150",rx:"3",ry:"3",width:"450",height:"210"}})])],1)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("i",{staticClass:"text-xs text-center text-gray-600"},[this._v("\n      Sumber data :\n      "),a("a",{staticClass:"no-underline hover:no-underline hover:text-blue-200",attrs:{href:"https://dinkes.sultengprov.go.id"}},[this._v("https://dinkes.sultengprov.go.id")])])}],!1,null,null,null);a.default=c.exports}}]);