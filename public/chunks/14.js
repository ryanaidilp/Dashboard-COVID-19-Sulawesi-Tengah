(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{J7lf:function(a,t,i){var s=i("gmyT");"string"==typeof s&&(s=[[a.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i("aET+")(s,n);s.locals&&(a.exports=s.locals)},gmyT:function(a,t,i){(a.exports=i("I1BE")(!1)).push([a.i,".chart-container[data-v-152e6088]{\n  display:grid;\n  grid-template-columns:1fr;\n  -moz-column-gap:1rem;\n       column-gap:1rem;\n  row-gap:1rem\n}\n@media (min-width: 768px){\n.chart-container[data-v-152e6088]{\n    grid-template-columns:2fr 4fr\n}\n}",""])},ptJB:function(a,t,i){"use strict";var s=i("J7lf");i.n(s).a},yCAR:function(a,t,i){"use strict";i.r(t);var s=i("TXrT"),n=i("4zA5"),e=i("b/SL").format,o=i("SjEe").formatToTimeZone,l=new Intl.NumberFormat("id"),r={components:{ContentLoader:n.a,CardCase:function(){return i.e(45).then(i.bind(null,"8t3s"))},CardSuspect:function(){return i.e(46).then(i.bind(null,"XeHt"))}},props:{propsDataProvinsi:{type:Object,default:function(){}},propsDataNasional:{type:Object,default:function(){}}},data:function(){return{lastUpdate:null,statistics:null,totalPositif:0,totalDirawat:0,totalSembuh:0,totalMeninggal:0,positifBaru:0,dirawatBaru:0,sembuhBaru:0,meninggalBaru:0,ODPBaru:0,ODPAktif:0,PDPBaru:0,PDPAktif:0,selesaiODP:0,selesaiODPBaru:0,selesaiPDP:0,selesaiPDPBaru:0,totalODP:0,totalPDP:0,positifNasional:0,dirawatNasional:0,sembuhNasional:0,meninggalNasional:0,positifBaruNasional:0,dirawatBaruNasional:0,sembuhBaruNasional:0,meninggalBaruNasional:0,jsonDataNasional:{},jsonDataProvinsi:{}}},methods:{getStatistics:function(){new Intl.NumberFormat("id-ID");this.statistics=this.jsonDataProvinsi,this.totalPositif=l.format(this.statistics.kumulatif.positif),this.totalDirawat=l.format(this.statistics.aktif.dalam_perawatan),this.totalSembuh=l.format(this.statistics.kumulatif.sembuh),this.totalMeninggal=l.format(this.statistics.kumulatif.meninggal),this.positifBaru=l.format(this.statistics.kasus_baru.positif),this.dirawatBaru=l.format(this.statistics.kasus_baru.dalam_perawatan),this.sembuhBaru=l.format(this.statistics.kasus_baru.sembuh),this.meninggalBaru=l.format(this.statistics.kasus_baru.meninggal),this.totalODP=l.format(this.statistics.kumulatif.ODP),this.selesaiODP=l.format(this.statistics.kumulatif.selesai_ODP),this.ODPAktif=l.format(this.statistics.aktif.ODP),this.ODPBaru=l.format(this.statistics.kasus_baru.ODP),this.selesaiODPBaru=l.format(this.statistics.selesai.ODP),this.totalPDP=l.format(this.statistics.kumulatif.PDP),this.selesaiPDP=l.format(this.statistics.kumulatif.selesai_PDP),this.PDPAktif=l.format(this.statistics.aktif.PDP),this.PDPBaru=l.format(this.statistics.kasus_baru.PDP),this.selesaiPDPBaru=l.format(this.statistics.selesai.PDP)},getNationalData:function(){var a=this.jsonDataNasional,t=o(new Date(a.tanggal),"HH:mm:ss",{timeZone:"Asia/Makassar"});this.lastUpdate=e(new Date(a.tanggal),"EEEE, dd MMMM yyyy",{locale:s.a}),this.lastUpdate+=" "+t,this.positifNasional=l.format(a.kumulatif.positif),this.dirawatNasional=l.format(a.kumulatif.dalam_perawatan),this.sembuhNasional=l.format(a.kumulatif.sembuh),this.meninggalNasional=l.format(a.kumulatif.meninggal),this.positifBaruNasional=l.format(a.kasus_baru.positif),this.dirawatBaruNasional=l.format(a.kasus_baru.dalam_perawatan),this.sembuhBaruNasional=l.format(a.kasus_baru.sembuh),this.meninggalBaruNasional=l.format(a.kasus_baru.meninggal)}},watch:{propsDataProvinsi:function(){this.jsonDataProvinsi=this.propsDataProvinsi,this.getStatistics()},propsDataNasional:function(){this.jsonDataNasional=this.propsDataNasional,this.getNationalData()}}},u=i("KHd+"),c=Object(u.a)(r,(function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("h3",{staticClass:"w-full mt-8 text-lg font-bold text-center md:text-left md:ml-4 md:text-3xl"},[a._v("Dashboard COVID-19 Sulawesi Tengah")]),a._v(" "),a.lastUpdate?i("p",{staticClass:"w-full h-10 text-xs text-center md:text-left md:ml-4 text-muted md:text-lg"},[a._v("\n    Pembaruan Terakhir :\n    "+a._s(a.lastUpdate)+"\n    WITA\n    "),i("br"),a._v(" "),a._m(0)]):i("div",{staticClass:"h-10"},[i("content-loader",{attrs:{speed:2,height:400,width:900,animate:!0,primaryColor:"#ddd",secondaryColor:"#fff"}},[i("rect",{attrs:{x:"10",y:"0",rx:"3",ry:"3",width:"400",height:"15"}})])],1),a._v(" "),a.statistics||this.positifNasional?i("div",{staticClass:"flex flex-col flex-wrap items-center justify-center block w-full mt-8 text-gray-800 md:flex-row"},[i("div",{staticClass:"container px-4 mx-auto md:pl-4 md:pr-0"},[i("div",[i("section",{staticClass:"flex flex-col lg:flex-row lg:flex-no-wrap"},[i("card-case",{attrs:{title:"Positif",cumulative_local:a.totalPositif,new_local:a.positifBaru,cumulative_national:a.positifNasional,new_national:a.positifBaruNasional,bg_card:"bg-red-300",bg_new:"bg-red-700"},on:{"update:cumulative_local":function(t){a.totalPositif=t},"update:new_local":function(t){a.positifBaru=t},"update:cumulative_national":function(t){a.positifNasional=t},"update:new_national":function(t){a.positifBaruNasional=t}}}),a._v(" "),i("card-case",{attrs:{title:"Dirawat",cumulative_local:a.totalDirawat,new_local:a.dirawatBaru,cumulative_national:a.dirawatNasional,new_national:a.dirawatBaruNasional,bg_card:"bg-blue-300",bg_new:"bg-blue-700"},on:{"update:cumulative_local":function(t){a.totalDirawat=t},"update:new_local":function(t){a.dirawatBaru=t},"update:cumulative_national":function(t){a.dirawatNasional=t},"update:new_national":function(t){a.dirawatBaruNasional=t}}}),a._v(" "),i("card-case",{attrs:{title:"Sembuh",cumulative_local:a.totalSembuh,new_local:a.sembuhBaru,cumulative_national:a.sembuhNasional,new_national:a.sembuhBaruNasional,bg_card:"bg-green-300",bg_new:"bg-green-700"},on:{"update:cumulative_local":function(t){a.totalSembuh=t},"update:new_local":function(t){a.sembuhBaru=t},"update:cumulative_national":function(t){a.sembuhNasional=t},"update:new_national":function(t){a.sembuhBaruNasional=t}}}),a._v(" "),i("card-case",{attrs:{title:"Meninggal",cumulative_local:a.totalMeninggal,new_local:a.meninggalBaru,cumulative_national:a.meninggalNasional,new_national:a.meninggalBaruNasional,bg_card:"bg-orange-300",bg_new:"bg-orange-700"},on:{"update:cumulative_local":function(t){a.totalMeninggal=t},"update:new_local":function(t){a.meninggalBaru=t},"update:cumulative_national":function(t){a.meninggalNasional=t},"update:new_national":function(t){a.meninggalBaruNasional=t}}})],1)])]),a._v(" "),i("card-suspect",{attrs:{title:"Pasien Dalam Pengawasan (PDP)",new_case:a.PDPBaru,new_finished_case:a.selesaiPDPBaru,active_case:a.PDPAktif,total_case:a.totalPDP,total_finished_case:a.selesaiPDP,status:"Pengawasan"},on:{"update:new_case":function(t){a.PDPBaru=t},"update:new_finished_case":function(t){a.selesaiPDPBaru=t},"update:active_case":function(t){a.PDPAktif=t},"update:total_case":function(t){a.totalPDP=t},"update:total_finished_case":function(t){a.selesaiPDP=t}}}),a._v(" "),i("card-suspect",{attrs:{title:"Orang Dalam Pemantauan (ODP)",new_case:a.ODPBaru,new_finished_case:a.selesaiODPBaru,active_case:a.ODPAktif,total_case:a.totalODP,total_finished_case:a.selesaiODP,status:"Pemantauan"},on:{"update:new_case":function(t){a.ODPBaru=t},"update:new_finished_case":function(t){a.selesaiODPBaru=t},"update:active_case":function(t){a.ODPAktif=t},"update:total_case":function(t){a.totalODP=t},"update:total_finished_case":function(t){a.selesaiODP=t}}})],1):i("content-loader",{attrs:{height:400,width:900,speed:1,primaryColor:"#ddd",secondaryColor:"#fff"}},[i("rect",{attrs:{x:"5",y:"20",rx:"10",ry:"10",width:"210",height:"110"}}),a._v(" "),i("rect",{attrs:{x:"230",y:"20",rx:"10",ry:"10",width:"210",height:"110"}}),a._v(" "),i("rect",{attrs:{x:"460",y:"20",rx:"10",ry:"10",width:"210",height:"110"}}),a._v(" "),i("rect",{attrs:{x:"690",y:"20",rx:"10",ry:"10",width:"210",height:"110"}}),a._v(" "),i("rect",{attrs:{x:"0",y:"150",rx:"10",ry:"10",width:"450",height:"210"}}),a._v(" "),i("rect",{attrs:{x:"480",y:"150",rx:"10",ry:"10",width:"450",height:"210"}})])],1)}),[function(){var a=this.$createElement,t=this._self._c||a;return t("i",{staticClass:"text-xs text-center text-gray-600"},[this._v("\n      Sumber data :\n      "),t("a",{staticClass:"no-underline hover:no-underline hover:text-blue-200",attrs:{href:"https://dinkes.sultengprov.go.id"}},[this._v("https://dinkes.sultengprov.go.id")])])}],!1,null,null,null).exports,p={data:function(){return{jsonDataRekapitulasiProv:[],jsonDataRekapitulasiNasional:[],jsonDataTesProvinsi:[],jsonDataProvinsi:[],jsonDataKabupaten:[],jsonDataGenderProvinsi:{},jsonDataHarianProvinsi:{},jsonDataHarianNasional:{}}},methods:{fetchDataProvinsi:function(){var a=this;axios.get("/corona/api/provinsi").then((function(t){a.jsonDataProvinsi=t.data.data})).catch((function(a){console.log(a)}))},fetchDataKabupaten:function(){var a=this;axios.get("/corona/api/kabupaten").then((function(t){a.jsonDataKabupaten=t.data.data})).catch((function(a){console.log(a)}))},fetchDataHarianProvinsi:function(){var a=this.jsonDataRekapitulasiProv;this.jsonDataHarianProvinsi=a[a.length-1]},fetchDataHarianNasional:function(){var a=this.jsonDataRekapitulasiNasional;this.jsonDataHarianNasional=a[a.length-1]},fetchDataRekapitulasiNasional:function(){var a=this;axios.get("/corona/api/nasional").then((function(t){a.jsonDataRekapitulasiNasional=t.data.data,a.fetchDataHarianNasional()})).catch((function(a){console.log(a)}))},fetchDataRekapitulasiProvinsi:function(){var a=this;axios.get("/corona/api/statistik").then((function(t){a.jsonDataRekapitulasiProv=t.data.data,a.fetchDataHarianProvinsi()})).catch((function(a){console.log(a)}))},fetchDataTes:function(){var a=this;axios.get("/corona/api/test").then((function(t){a.jsonDataTesProvinsi=t.data.data})).catch((function(a){console.log(a)}))},fetchDataGenderProvinsi:function(){var a=this;axios.get("/corona/api/gender").then((function(t){a.jsonDataGenderProvinsi=t.data.data})).catch((function(a){console.log(a)}))},updater:function(){var a=this;setInterval((function(){a.fetchDataKabupaten(),a.fetchDataProvinsi(),a.fetchDataRekapitulasiProvinsi(),a.fetchDataRekapitulasiNasional(),a.fetchDataTes(),a.fetchDataGenderProvinsi()}),3e5)}},mounted:function(){this.fetchDataKabupaten(),this.fetchDataProvinsi(),this.fetchDataRekapitulasiProvinsi(),this.fetchDataRekapitulasiNasional(),this.fetchDataTes(),this.fetchDataGenderProvinsi(),this.updater()},components:{DataPCR:function(){return i.e(20).then(i.bind(null,"U3lU"))},DataRDT:function(){return i.e(21).then(i.bind(null,"4Lje"))},RtChart:function(){return Promise.all([i.e(0),i.e(36)]).then(i.bind(null,"iW7D"))},PieChart:function(){return Promise.all([i.e(0),i.e(26),i.e(35)]).then(i.bind(null,"S4W+"))},NewCase:function(){return Promise.all([i.e(0),i.e(27)]).then(i.bind(null,"ILw6"))},ContentLoader:n.a,Dashboard:c,BarStatUsia:function(){return i.e(12).then(i.bind(null,"tfmT"))},BarStatJenisKelamin:function(){return i.e(11).then(i.bind(null,"hpvC"))},MapTab:function(){return i.e(31).then(i.bind(null,"Zt9Z"))},TableTab:function(){return i.e(32).then(i.bind(null,"A/7X"))},ChartTab:function(){return i.e(30).then(i.bind(null,"I3dC"))},Partner:function(){return i.e(2).then(i.bind(null,"e4pp"))}}},d=(i("ptJB"),Object(u.a)(p,(function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"container mx-auto text-gray-800"},[i("section",{staticClass:"m-4 mb-8 md:m-8"},[i("div",{staticClass:"w-full"},[i("dashboard",{attrs:{"props-data-provinsi":a.jsonDataHarianProvinsi,"props-data-nasional":a.jsonDataHarianNasional},on:{"update:propsDataProvinsi":function(t){a.jsonDataHarianProvinsi=t},"update:props-data-provinsi":function(t){a.jsonDataHarianProvinsi=t},"update:propsDataNasional":function(t){a.jsonDataHarianNasional=t},"update:props-data-nasional":function(t){a.jsonDataHarianNasional=t}}})],1)]),a._v(" "),i("section",{staticClass:"px-4 m-4 mb-8 md:m-8"},[i("div",{staticClass:"w-full"},[i("dataRDT",{attrs:{"props-data-rekapitulasi-sulteng":a.jsonDataTesProvinsi[1]},on:{"update:propsDataRekapitulasiSulteng":function(t){return a.$set(a.jsonDataTesProvinsi,1,t)},"update:props-data-rekapitulasi-sulteng":function(t){return a.$set(a.jsonDataTesProvinsi,1,t)}}})],1)]),a._v(" "),i("section",{staticClass:"px-4 m-4 mb-8 md:m-8"},[i("div",{staticClass:"w-full"},[i("DataPCR",{attrs:{"props-data-rekapitulasi-sulteng":a.jsonDataTesProvinsi[0]},on:{"update:propsDataRekapitulasiSulteng":function(t){return a.$set(a.jsonDataTesProvinsi,0,t)},"update:props-data-rekapitulasi-sulteng":function(t){return a.$set(a.jsonDataTesProvinsi,0,t)}}})],1)]),a._v(" "),i("section",{staticClass:"m-4 mb-8 md:m-8"},[i("div",{staticClass:"w-full"},[i("h3",{staticClass:"w-full mt-16 text-lg font-bold text-center md:text-left md:ml-6 md:text-3xl"},[a._v("Peta Penyebaran Kasus")]),a._v(" "),i("map-tab",{staticClass:"mt-4"})],1)]),a._v(" "),i("section",{staticClass:"m-4 mb-8 md:m-8"},[i("div",{staticClass:"w-full"},[i("h3",{staticClass:"w-full text-lg font-bold text-center md:text-left md:ml-6 md:text-3xl"},[a._v("Tabel Penyebaran Kasus")]),a._v(" "),i("table-tab",{staticClass:"mt-4",attrs:{"props-data-provinsi-nasional":a.jsonDataProvinsi,"props-data-sulteng-kabupaten":a.jsonDataKabupaten},on:{"update:propsDataProvinsiNasional":function(t){a.jsonDataProvinsi=t},"update:props-data-provinsi-nasional":function(t){a.jsonDataProvinsi=t},"update:propsDataSultengKabupaten":function(t){a.jsonDataKabupaten=t},"update:props-data-sulteng-kabupaten":function(t){a.jsonDataKabupaten=t}}})],1)]),a._v(" "),i("section",{staticClass:"m-4 mb-8 md:m-8"},[i("div",{staticClass:"w-full"},[i("h3",{staticClass:"w-full text-lg font-bold text-center md:text-left md:ml-6 md:text-3xl"},[a._v("Visualisasi Data Kasus COVID-19")]),a._v(" "),i("chart-tab",{staticClass:"mt-4",attrs:{"props-data-rekapitulasi-prov":a.jsonDataRekapitulasiProv,"props-data-rekapitulasi-nasional":a.jsonDataRekapitulasiNasional},on:{"update:propsDataRekapitulasiProv":function(t){a.jsonDataRekapitulasiProv=t},"update:props-data-rekapitulasi-prov":function(t){a.jsonDataRekapitulasiProv=t},"update:propsDataRekapitulasiNasional":function(t){a.jsonDataRekapitulasiNasional=t},"update:props-data-rekapitulasi-nasional":function(t){a.jsonDataRekapitulasiNasional=t}}})],1)]),a._v(" "),i("section",{staticClass:"m-4 mb-8 md:m-8"},[i("div",{staticClass:"w-full"},[i("rt-chart",{attrs:{"props-data-rekapitulasi-prov":a.jsonDataRekapitulasiProv},on:{"update:propsDataRekapitulasiProv":function(t){a.jsonDataRekapitulasiProv=t},"update:props-data-rekapitulasi-prov":function(t){a.jsonDataRekapitulasiProv=t}}})],1)]),a._v(" "),i("section",{staticClass:"m-4 mb-8"},[i("div",{staticClass:"w-full"},[i("div",{staticClass:"flex flex-col w-full mt-4 lg:flex-row"},[i("keep-alive",[i("new-case",{staticClass:"w-full lg:w-1/2",attrs:{"props-data-provinsi":a.jsonDataHarianProvinsi},on:{"update:propsDataProvinsi":function(t){a.jsonDataHarianProvinsi=t},"update:props-data-provinsi":function(t){a.jsonDataHarianProvinsi=t}}})],1),a._v(" "),i("keep-alive",[i("pie-chart",{staticClass:"w-full mt-4 lg:w-1/2 lg:mt-0",attrs:{"props-data-provinsi":a.jsonDataHarianProvinsi},on:{"update:propsDataProvinsi":function(t){a.jsonDataHarianProvinsi=t},"update:props-data-provinsi":function(t){a.jsonDataHarianProvinsi=t}}})],1)],1)])]),a._v(" "),i("section",{staticClass:"m-4 mb-8 md:m-8"},[i("div",{staticClass:"w-full chart-container"},[i("BarStatJenisKelamin",{attrs:{"props-data-rekapitulasi-sulteng":a.jsonDataGenderProvinsi},on:{"update:propsDataRekapitulasiSulteng":function(t){a.jsonDataGenderProvinsi=t},"update:props-data-rekapitulasi-sulteng":function(t){a.jsonDataGenderProvinsi=t}}}),a._v(" "),i("BarStatUsia",{attrs:{"props-data-rekapitulasi-sulteng":a.jsonDataGenderProvinsi},on:{"update:propsDataRekapitulasiSulteng":function(t){a.jsonDataGenderProvinsi=t},"update:props-data-rekapitulasi-sulteng":function(t){a.jsonDataGenderProvinsi=t}}})],1)]),a._v(" "),i("section",{staticClass:"m-4 mb-8"},[i("div",{staticClass:"w-full"},[i("div",{staticClass:"flex-col p-6 mx-4 mt-16 text-center bg-white rounded-lg shadow-lg md:flex-row hover:text-blue-400"},[i("router-link",{staticClass:"mx-auto text-sm font-bold lg:text-xl",attrs:{to:"/corona/table-data",target:"_blank"}},[a._v("\n          Akses DATA publik - Data PICO SulTeng disini\n          "),i("i",{staticClass:"fas fa-angle-right"})])],1),a._v(" "),a._m(0)])]),a._v(" "),i("section",{staticClass:"m-4 mb-8"},[i("div",{staticClass:"w-full"},[i("partner",{staticClass:"mt-16"})],1)])])}),[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"flex-col p-6 mx-4 mt-16 text-center bg-white rounded-lg shadow-lg md:flex-row hover:text-blue-400"},[t("a",{staticClass:"mx-auto text-sm font-bold lg:text-xl",attrs:{href:"https://banuacoders.com/api/pico",target:"_blank"}},[this._v("\n          Akses API publik - Data PICO SulTeng disini\n          "),t("i",{staticClass:"fas fa-angle-right"})])])}],!1,null,"152e6088",null));t.default=d.exports}}]);