(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(a,t,e){"use strict";e.r(t);var n=e(35),o=e(40),r=e.n(o),i=e(18),l=e.n(i);function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function d(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){p(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function p(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var u=function(a){if(a){var t=a.split(" "),e=null;if(t.length>=3){var n=t[0],o="";switch(t[1]){case"Jan":o="01";break;case"Feb":o="02";break;case"Mar":o="03";break;case"Apr":o="04";break;case"May":o="05";break;case"Jun":o="06";break;case"Jul":o="07";break;case"Aug":o="08";break;case"Sep":o="09";break;case"Oct":o="10";break;case"Nov":o="11";break;case"Dec":o="12";break;default:o="01"}e=t[2]+"-"+o+"-"+n}else e=a;return new Date(e).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric"})}return""},b=function(a){return a?a.toLocaleString("id-ID"):"0"},c={components:{DataTable:n.DataTable,ItemsPerPageDropdown:n.ItemsPerPageDropdown,Pagination:n.Pagination},data:function(){return{jsonDataKabupaten:[{no:1,nama:"Banggai",dataHarian:[]},{no:2,nama:"Banggai Kepulauan",dataHarian:[]},{no:3,nama:"Banggai Laut",dataHarian:[]},{no:4,nama:"Buol",dataHarian:[]},{no:5,nama:"Donggala",dataHarian:[]},{no:6,nama:"Morowali",dataHarian:[]},{no:7,nama:"Morowali Utara",dataHarian:[]},{no:8,nama:"Parigi Moutong",dataHarian:[]},{no:9,nama:"Poso",dataHarian:[]},{no:10,nama:"Sigi",dataHarian:[]},{no:11,nama:"Tojo Una-Una",dataHarian:[]},{no:12,nama:"Toli-Toli",dataHarian:[]},{no:13,nama:"Kota Palu",dataHarian:[]}],isLoading:!0,jsonDataRekapitulasiSultengKumulatifKab:[],headerFields:[{name:"tanggal",label:"Tanggal",sortable:!0,format:u},{name:"nama_kab",label:"Nama Kabupaten/Kota",sortable:!0},{name:"odp",label:"Kumulatif -- (ODP)",sortable:!0,format:b},{name:"odp_selesai",label:"Kumulatif -- Selesai Pemantauan",sortable:!0,format:b},{name:"odp_proses",label:"Kumulatif -- Proses Pemantauan",sortable:!0,format:b},{name:"pdp",label:"Kumulatif -- (PDP)",sortable:!0,format:b},{name:"pdp_selesai",label:"Kumulatif -- Selesai Pengawasan",sortable:!0,format:b},{name:"pdp_proses",label:"Kumulatif -- Proses Pengawasan",sortable:!0,format:b},{name:"positif",label:"Kumulatif -- Positif",sortable:!0,format:b},{name:"sembuh",label:"Kumulatif -- Sembuh",sortable:!0,format:b},{name:"meninggal",label:"Kumulatif -- Meninggal",sortable:!0,format:b},{name:"pertumbuhan_odp",label:"Pertumbuhan -- (ODP)",sortable:!0,format:b},{name:"pertumbuhan_odp_selesai",label:"Pertumbuhan -- Selesai Pemantauan",sortable:!0,format:b},{name:"pertumbuhan_odp_proses",label:"Pertumbuhan -- Proses Pemantauan",sortable:!0,format:b},{name:"pertumbuhan_pdp",label:"Pertumbuhan -- (PDP)",sortable:!0,format:b},{name:"pertumbuhan_pdp_selesai",label:"Pertumbuhan -- Selesai Pengawasan",sortable:!0,format:b},{name:"pertumbuhan_pdp_proses",label:"Pertumbuhan -- Proses Pengawasan",sortable:!0,format:b},{name:"pertumbuhan_positif",label:"Pertumbuhan -- Positif",sortable:!0,format:b},{name:"pertumbuhan_sembuh",label:"Pertumbuhan -- Sembuh",sortable:!0,format:b},{name:"pertumbuhan_meninggal",label:"Pertumbuhan -- Meninggal",sortable:!0,format:b}],data:[],datatableCss:{table:"table table-bordered table-hover table-striped table-center",theadTh:"header-item",thWrapper:"th-wrapper",thWrapperCheckboxes:"th-wrapper checkboxes",arrowsWrapper:"arrows-wrapper",arrowUp:"arrow up",arrowDown:"arrow down",footer:"footer"},paginationCss:{paginationItem:"pagination-item",moveFirstPage:"move-first-page",movePreviousPage:"move-previous-page",moveNextPage:"move-next-page",moveLastPage:"move-last-page",pageBtn:"page-btn"},itemsPerPageCss:{select:"item-per-page-dropdown"},sort:"asc",sortField:"tanggal",listItemsPerPage:[10,20,50,100],itemsPerPage:50,currentPage:1,totalItems:0,hometown:null,createHeaderName:"created:header"}},created:function(){this.fetchDataRekapitulasiSultengKumulatifKab()},methods:{groupDataKab:function(a){var t=this;a.forEach((function(a){var e={hari_ke:a.hari_ke,tanggal:a.tanggal},n={nama:"",kasus_baru:{positif:0,sembuh:0,meninggal:0,ODP:0,PDP:0},aktif:{dalam_perawatan:0,ODP:0,PDP:0},selesai:{ODP:0,PDP:0},kumulatif:{positif:0,sembuh:0,meninggal:0,ODP:0,PDP:0,selesai_PDP:0,selesai_ODP:0}};t.jsonDataKabupaten.forEach((function(t){n.nama=t.nama;var o=d(d({},e),n);a.daftar_kabupaten.forEach((function(a){if(t.no===a.no){var n={nama:a.nama,kasus_baru:d({},a.kasus_baru),aktif:d({},a.aktif),selesai:d({},a.selesai),kumulatif:d({},a.kumulatif)};o=d(d({},e),n)}})),t.dataHarian.push(o)}))}))},fetchDataRekapitulasiSultengKumulatifKab:function(){var a=this;axios.get("/corona/api/statistik").then((function(t){a.groupDataKab(t.data.data),a.jsonDataKabupaten.forEach((function(t){for(var e={odp:0,odp_selesai:0,odp_proses:0,pdp:0,pdp_selesai:0,pdp_proses:0,positif:0,sembuh:0,meninggal:0},n=0;n<t.dataHarian.length;n++){var o=t.dataHarian[n],r={tanggal:"",nama_kab:"",odp:0,odp_selesai:0,odp_proses:0,pdp:0,pdp_selesai:0,pdp_proses:0,positif:0,sembuh:0,meninggal:0},i={pertumbuhan_odp:0,pertumbuhan_odp_selesai:0,pertumbuhan_odp_proses:0,pertumbuhan_pdp:0,pertumbuhan_pdp_selesai:0,pertumbuhan_pdp_proses:0,pertumbuhan_positif:0,pertumbuhan_sembuh:0,pertumbuhan_meninggal:0};r.tanggal=o.tanggal,r.nama_kab=o.nama,0===o.kumulatif.ODP&&0!==e.odp?r.odp=e.odp:r.odp=o.kumulatif.ODP,0===o.kumulatif.selesai_ODP&&0!==e.odp_selesai?r.odp_selesai=e.odp_selesai:r.odp_selesai=o.kumulatif.selesai_ODP,0===o.aktif.ODP&&0!==e.odp_proses?r.odp_proses=e.odp_proses:r.odp_proses=o.aktif.ODP,0===o.kumulatif.PDP&&0!==e.pdp?r.pdp=e.pdp:r.pdp=o.kumulatif.PDP,0==o.kumulatif.selesai_PDP&&0!==e.pdp_selesai?r.pdp_selesai=e.pdp_selesai:r.pdp_selesai=o.kumulatif.selesai_PDP,0==o.aktif.PDP&&0!==e.pdp_proses?r.pdp_proses=e.pdp_proses:r.pdp_proses=o.aktif.PDP,0==o.kumulatif.positif&&0!==e.positif?r.positif=e.positif:r.positif=o.kumulatif.positif,0==o.kumulatif.sembuh&&0!==e.sembuh?r.sembuh=e.sembuh:r.sembuh=o.kumulatif.sembuh,0==o.kumulatif.meninggal&&0!==e.meninggal?r.meninggal=e.meninggal:r.meninggal=o.kumulatif.meninggal,i.pertumbuhan_odp=o.kasus_baru.ODP,i.pertumbuhan_odp_selesai=o.selesai.ODP,i.pertumbuhan_odp_proses=o.kasus_baru.ODP-o.selesai.ODP,i.pertumbuhan_pdp=o.kasus_baru.PDP,i.pertumbuhan_pdp_selesai=o.selesai.PDP,i.pertumbuhan_pdp_proses=o.kasus_baru.PDP-o.selesai.PDP,i.pertumbuhan_positif=o.kasus_baru.positif,i.pertumbuhan_sembuh=o.kasus_baru.sembuh,i.pertumbuhan_meninggal=o.kasus_baru.meninggal,a.jsonDataRekapitulasiSultengKumulatifKab.push(d(d({},r),i)),e=d({},r)}})),a.data=a.jsonDataRekapitulasiSultengKumulatifKab.slice(0,a.itemsPerPage),a.totalItems=a.jsonDataRekapitulasiSultengKumulatifKab.length,a.isLoading=!1})).catch((function(a){console.log(a)}))},dtEditClick:function(a){return alert("Click props:"+JSON.stringify(a))},dtUpdateSort:function(a){var t=a.sortField,e=a.sort,n=r.a.orderBy(this.jsonDataRekapitulasiSultengKumulatifKab,[t],[e]),o=(this.currentPage-1)*this.itemsPerPage,i=this.currentPage*this.itemsPerPage;this.data=n.slice(o,i)},updateItemsPerPage:function(a){this.itemsPerPage=parseInt(a),a>=this.jsonDataRekapitulasiSultengKumulatifKab.length?this.data=this.jsonDataRekapitulasiSultengKumulatifKab:this.data=this.jsonDataRekapitulasiSultengKumulatifKab.slice(0,a)},changePage:function(a){this.currentPage=a;var t=(a-1)*this.itemsPerPage,e=a*this.itemsPerPage;this.data=this.jsonDataRekapitulasiSultengKumulatifKab.slice(t,e)},updateCurrentPage:function(a){this.currentPage=a},changeHometown:function(a,t){this.data=this.data.map((function(e){return e.id===t?d(d({},e),{},{hometown:a.target.value}):e}))},actionFirstClick:function(a){alert(JSON.stringify(a))},formatDate:function(a){return new Date(a).toLocaleString("id-ID",{day:"numeric",month:"short",year:"numeric"})},downloadCSV:function(){var a="";["tanggal","nama_kab","odp","odp_proses","odp_selesai","pdp","pdp_proses","pdp_selesai","positif","sembuh","meninggal"].forEach((function(t){a+=t+","})),a+="\n",this.jsonDataRekapitulasiSultengKumulatifKab.forEach((function(t){Object.keys(t).forEach((function(e){a+=t[e]+","})),a+="\n"}));var t=document.createElement("a");t.href="data:text/csv;charset=utf-8,"+encodeURI(a),t.target="_blank",t.download="Data COVID-19 Sulawesi Tengah.csv",t.click()},downloadExcel:function(){var a=l.a.utils.json_to_sheet(this.jsonDataRekapitulasiSultengKumulatifKab),t=l.a.utils.book_new();l.a.utils.book_append_sheet(t,a,"Data Kumulatif"),l.a.writeFile(t,"Data COVID-19 Sulawesi Tengah.xlsx")}}},m=(e(91),e(93),e(95),e(0)),g=Object(m.a)(c,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container mx-auto"},[e("br"),a._v(" "),a._m(0),a._v(" "),e("section",{staticClass:"m-4 mb-8 md:m-8"},[e("div",{staticStyle:{display:"flow-root"}},[e("div",{staticClass:"flex",staticStyle:{float:"left"}},[e("button",{staticClass:"w-full m-1 text-sm md:text-base button-selector xl:w-auto",staticStyle:{display:"flex"},on:{click:a.downloadCSV}},[e("i",{staticClass:"fas fa-download",staticStyle:{"margin-right":"5px","margin-top":"2px"}}),a._v("\n          Download CSV\n        ")]),a._v(" "),e("button",{staticClass:"w-full m-1 text-sm button-selector xl:w-auto md:text-base",staticStyle:{display:"flex"},on:{click:a.downloadExcel}},[e("i",{staticClass:"fas fa-download",staticStyle:{"margin-right":"5px","margin-top":"2px"}}),a._v("\n          Download Excel\n        ")])])])]),a._v(" "),e("section",{staticClass:"m-4 mb-8 bg-white rounded-lg shadow-lg md:m-8"},[e("div",{staticClass:"table-wrapper-scroll-y table-wrapper-scroll-x my-custom-scrollbar"},[a.jsonDataRekapitulasiSultengKumulatifKab?e("data-table",{attrs:{id:"table-download-data","header-fields":a.headerFields,"sort-field":a.sortField,sort:a.sort,data:a.data||[],"is-loading":a.isLoading,css:a.datatableCss,"not-found-msg":"Items not found"},on:{"on-update":a.dtUpdateSort}}):a._e()],1),a._v(" "),e("div",{staticClass:"pb-10 m-2",staticStyle:{display:"flow-root"}},[e("div",{staticClass:"mr-4 items-per-page",staticStyle:{float:"left"}},[e("items-per-page-dropdown",{attrs:{"list-items-per-page":a.listItemsPerPage,"items-per-page":a.itemsPerPage,css:a.itemsPerPageCss},on:{"on-update":a.updateItemsPerPage}}),a._v(" "),e("label",[a._v("Baris Per Halaman")])],1),a._v(" "),e("div",{staticStyle:{float:"right"}},[[e("pagination",{attrs:{page:a.currentPage,"total-items":a.totalItems,"items-per-page":a.itemsPerPage,css:a.paginationCss},on:{"on-update":a.changePage,"update-current-page":a.updateCurrentPage}})]],2)]),a._v(" "),e("hr"),a._v(" "),a._m(1)])])}),[function(){var a=this.$createElement,t=this._self._c||a;return t("header",{staticClass:"mx-8 my-4"},[t("h3",{staticClass:"text-lg font-bold leading-none text-left text-gray-900 md:text-3xl",staticStyle:{"margin-bottom":"10px"}},[this._v("Data COVID-19 Sulawesi Tengah (Public Version): DATA")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",{staticClass:"pb-8 mx-8 text-sm text-justify text-gray-800"},[this._v("\n      Keterangan:\n      "),t("br"),this._v("Data didapatkan dari hasil scraping di\n      "),t("a",{staticClass:"text-blue-800 no-underline hover:underline",attrs:{href:"http://corona.sultengprov.go.id"}},[this._v("Website Covid-19 Sulawesi Tengah by Diskominfo")]),this._v(" & website\n      "),t("a",{staticClass:"text-blue-800 no-underline hover:underline",attrs:{href:"http://dinkes.sultengprov.com"}},[this._v("Dinas Kesehatan Provinsi Sulawesi Tengah")]),this._v(" menggunakan Python dengan plugin PytTesseract untuk mengekstrak data pada gambar.\n    ")])}],!1,null,"5272d0a2",null);t.default=g.exports},21:function(a,t,e){var n=e(92);"string"==typeof n&&(n=[[a.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(3)(n,o);n.locals&&(a.exports=n.locals)},22:function(a,t,e){var n=e(94);"string"==typeof n&&(n=[[a.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(3)(n,o);n.locals&&(a.exports=n.locals)},23:function(a,t,e){var n=e(96);"string"==typeof n&&(n=[[a.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(3)(n,o);n.locals&&(a.exports=n.locals)},48:function(a,t){},89:function(a,t){},90:function(a,t){},91:function(a,t,e){"use strict";var n=e(21);e.n(n).a},92:function(a,t,e){(a.exports=e(2)(!1)).push([a.i,".chart-container[data-v-5272d0a2]{\n  display:grid;\n  grid-template-columns:1fr;\n  -moz-column-gap:1rem;\n       column-gap:1rem;\n  row-gap:1rem\n}\n@media (min-width: 768px){\n.chart-container[data-v-5272d0a2]{\n    grid-template-columns:2fr 4fr\n}\n}\n.button-selector[data-v-5272d0a2]{\n  padding-left:1.5rem;\n  padding-right:1.5rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  border-radius:0.375rem;\n  border-width:1px;\n  border-style:solid;\n  --border-opacity:1;\n  border-color:#4299e1;\n  border-color:rgba(66, 153, 225, var(--border-opacity));\n  --text-opacity:1;\n  color:#4299e1;\n  color:rgba(66, 153, 225, var(--text-opacity));\n  --bg-opacity:1;\n  background-color:#fff;\n  background-color:rgba(255, 255, 255, var(--bg-opacity))\n}\n.button-selector[active][data-v-5272d0a2]{\n  --text-opacity:1;\n  color:#4299e1;\n  color:rgba(66, 153, 225, var(--text-opacity));\n  --bg-opacity:1;\n  background-color:#fff;\n  background-color:rgba(255, 255, 255, var(--bg-opacity))\n}\n.button-selector[data-v-5272d0a2]:hover{\n  --bg-opacity:1;\n  background-color:#4299e1;\n  background-color:rgba(66, 153, 225, var(--bg-opacity));\n  --text-opacity:1;\n  color:#fff;\n  color:rgba(255, 255, 255, var(--text-opacity))\n}",""])},93:function(a,t,e){"use strict";var n=e(22);e.n(n).a},94:function(a,t,e){(a.exports=e(2)(!1)).push([a.i,".table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n}\n.table th,\r\n.table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #5e6061;\n}\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #eceeef;\n}\n.table tbody + tbody {\n  border-top: 2px solid #eceeef;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-sm th,\r\n.table-sm td {\n  padding: 0.3rem;\n}\n.table-bordered {\n  border: 1px solid #eceeef;\n}\n.table-bordered th,\r\n.table-bordered td {\n  border: 1px solid #eceeef;\n}\n.table-bordered thead th,\r\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-active,\r\n.table-active > th,\r\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover > td,\r\n.table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table-success,\r\n.table-success > th,\r\n.table-success > td {\n  background-color: #dff0d8;\n}\n.table-hover .table-success:hover {\n  background-color: #d0e9c6;\n}\n.table-hover .table-success:hover > td,\r\n.table-hover .table-success:hover > th {\n  background-color: #d0e9c6;\n}\n.table-info,\r\n.table-info > th,\r\n.table-info > td {\n  background-color: #d9edf7;\n}\n.table-hover .table-info:hover {\n  background-color: #c4e3f3;\n}\n.table-hover .table-info:hover > td,\r\n.table-hover .table-info:hover > th {\n  background-color: #c4e3f3;\n}\n.table-warning,\r\n.table-warning > th,\r\n.table-warning > td {\n  background-color: #fcf8e3;\n}\n.table-hover .table-warning:hover {\n  background-color: #faf2cc;\n}\n.table-hover .table-warning:hover > td,\r\n.table-hover .table-warning:hover > th {\n  background-color: #faf2cc;\n}\n.table-danger,\r\n.table-danger > th,\r\n.table-danger > td {\n  background-color: #f2dede;\n}\n.table-hover .table-danger:hover {\n  background-color: #ebcccc;\n}\n.table-hover .table-danger:hover > td,\r\n.table-hover .table-danger:hover > th {\n  background-color: #ebcccc;\n}\n.thead-inverse th {\n  color: #fff;\n  background-color: #292b2c;\n}\n.thead-default th {\n  color: #464a4c;\n  background-color: #eceeef;\n}\n.table-inverse {\n  color: #fff;\n  background-color: #292b2c;\n}\n.table-inverse th,\r\n.table-inverse td,\r\n.table-inverse thead th {\n  border-color: #fff;\n}\n.table-inverse.table-bordered {\n  border: 0;\n}\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.table-responsive.table-bordered {\n  border: 0;\n}\r\n",""])},95:function(a,t,e){"use strict";var n=e(23);e.n(n).a},96:function(a,t,e){(a.exports=e(2)(!1)).push([a.i,".my-custom-scrollbar {\n  position: relative;\n  height: 500px;\n  overflow-y: scroll;\n}\n\n/* thead tr:nth-child(1) th { position: sticky; top: 0; background-color: white;}\r\ntbody td:nth-child(1) { position: sticky; left: 0; background-color: white; }\r\nhead th:nth-child(1) { position: sticky; left: 0; top:0; background-color: white; } */\n#table-download-data thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: lightslategray;\n}\n#table-download-data tbody td {\n  text-align: right;\n}\n#table-download-data tbody td:first-child {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  background-color: lightslategray;\n  text-align: left;\n}\n#table-download-data tbody td:nth-child(2) {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 80px;\n  background-color: lightslategray;\n  text-align: left;\n}\n\n/* To have the header in the first column stick to the left: */\n#table-download-data thead th:first-child {\n  left: 0;\n  z-index: 1;\n  background-color: lightslategray;\n}\n#table-download-data thead th:nth-child(2) {\n  left: 80px;\n  z-index: 1;\n  background-color: lightslategray;\n}\n.column-0 {\n  width: 100px !important;\n}\n.column-1 {\n  width: 200px !important;\n}\n.th-wrapper {\n  width: 120px !important;\n}\n.header-column-0 {\n  width: 100px !important;\n}\n.header-column-1 {\n  width: 200px !important;\n}\n.header-column-2 {\n  width: 140px !important;\n}\n.header-column-5 {\n  width: 140px !important;\n}\n.header-column-11 {\n  width: 140px !important;\n}\n.header-column-14 {\n  width: 140px !important;\n}\n\n/* Datatable CSS */\n.v-datatable-light .header-item {\n  cursor: pointer;\n  color: white;\n  transition: color 0.15s ease-in-out;\n  vertical-align: top;\n  font-size: smaller;\n  padding-top: 0.5rem;\n  padding-bottom: 0.2rem;\n}\n.v-datatable-light .header-item:hover {\n  color: #337ab7;\n}\n.v-datatable-light .header-item.no-sortable {\n  cursor: default;\n}\n.v-datatable-light .header-item.no-sortable:hover {\n  color: lightslategrey;\n}\n.v-datatable-light .header-item .th-wrapper {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  font-weight: bold;\n}\n.v-datatable-light .header-item .th-wrapper.checkboxes {\n  justify-content: center;\n}\n.v-datatable-light .header-item .th-wrapper .arrows-wrapper {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n  justify-content: space-between;\n}\n.v-datatable-light .header-item .th-wrapper .arrows-wrapper.centralized {\n  justify-content: center;\n}\n.v-datatable-light .arrow {\n  transition: color 0.15s ease-in-out;\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.v-datatable-light .arrow.up {\n  border-bottom: 5px solid white;\n}\n.v-datatable-light .arrow.up:hover {\n  border-bottom: 5px solid #337ab7;\n}\n.v-datatable-light .arrow.down {\n  border-top: 5px solid white;\n}\n.v-datatable-light .arrow.down:hover {\n  border-top: 5px solid #337ab7;\n}\n.v-datatable-light .footer {\n  display: flex;\n  justify-content: space-between;\n  width: 500px;\n}\n.v-datatable-light tbody {\n  font-size: small;\n}\n\n/* #app .v-datatable-light .row-7 .column-4 {\r\n  color: steelblue;\r\n}\r\n#app .v-datatable-light .row-1 .column-2 {\r\n  color: green;\r\n}\r\n#app .v-datatable-light .row-2 .column-1 {\r\n  color: red;\r\n}\r\n#app .v-datatable-light .row-3 {\r\n  color: pink;\r\n}\r\n#app .v-datatable-light .column-5 {\r\n  color: goldenrod;\r\n}\r\n#app .v-datatable-light .row-3 .column-5 {\r\n  color: purple;\r\n} */\n\n/* End Datatable CSS */\n\n/* Pagination CSS */\n.v-datatable-light-pagination {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0;\n  padding: 0;\n  width: 300px;\n  height: 30px;\n}\n.v-datatable-light-pagination .pagination-item {\n  width: 30px;\n  margin-right: 5px;\n  font-size: 16px;\n  transition: color 0.15s ease-in-out;\n}\n.v-datatable-light-pagination .pagination-item.selected {\n  color: #ed9b19;\n}\n.v-datatable-light-pagination .pagination-item .page-btn {\n  background-color: transparent;\n  outline: none;\n  border: none;\n  color: #337ab7;\n  transition: color 0.15s ease-in-out;\n}\n.v-datatable-light-pagination .pagination-item .page-btn:hover {\n  color: #ed9b19;\n}\n.v-datatable-light-pagination .pagination-item .page-btn:disabled {\n  cursor: not-allowed;\n  box-shadow: none;\n  opacity: 0.65;\n}\n\n/* END PAGINATION CSS */\n\n/* ITEMS PER PAGE DROPDOWN CSS */\n.item-per-page-dropdown {\n  background-color: transparent;\n  min-height: 30px;\n  border: 1px solid #337ab7;\n  border-radius: 5px;\n  color: #337ab7;\n}\n.item-per-page-dropdown:hover {\n  cursor: pointer;\n}\n\n/* END ITEMS PER PAGE DROPDOWN CSS */\r\n",""])}}]);