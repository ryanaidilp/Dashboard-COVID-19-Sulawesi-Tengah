<template>
  <layout>
    <div class="container mx-auto">
      <br />
      <header class="mx-8 my-4">
        <h3
          class="text-lg font-bold leading-none text-left text-gray-900 md:text-3xl"
          style="margin-bottom: 10px"
        >
          Data COVID-19 Sulawesi Tengah (Public Version): DATA
        </h3>
      </header>

      <section class="m-4 mb-8 md:m-8">
        <div style="display: flow-root">
          <div class="flex" style="float: left">
            <button
              class="w-full m-1 text-sm md:text-base button-selector xl:w-auto"
              style="display: flex"
              @click="downloadCSV"
            >
              <i
                class="fas fa-download"
                style="margin-right: 5px; margin-top: 2px"
              />
              Download CSV
            </button>
            <button
              class="w-full m-1 text-sm button-selector xl:w-auto md:text-base"
              style="display: flex"
              @click="downloadExcel"
            >
              <i
                class="fas fa-download"
                style="margin-right: 5px; margin-top: 2px"
              />
              Download Excel
            </button>
          </div>
        </div>
      </section>

      <section class="m-4 mb-8 bg-white rounded-lg shadow-lg md:m-8">
        <content-loader
          v-if="isLoading"
          :height="600"
          :width="1500"
          :speed="0.5"
          viewBox="0 0 1500 600"
          primaryColor="#ddd"
          secondaryColor="#fff"
        >
          <rect x="27" y="139" rx="4" ry="4" width="20" height="20" />
          <rect x="67" y="140" rx="10" ry="10" width="85" height="19" />
          <rect x="188" y="141" rx="10" ry="10" width="169" height="19" />
          <rect x="402" y="140" rx="10" ry="10" width="85" height="19" />
          <rect x="523" y="141" rx="10" ry="10" width="169" height="19" />
          <rect x="731" y="139" rx="10" ry="10" width="85" height="19" />
          <rect x="852" y="138" rx="10" ry="10" width="85" height="19" />
          <rect x="1424" y="137" rx="10" ry="10" width="68" height="19" />
          <rect x="26" y="196" rx="4" ry="4" width="20" height="20" />
          <rect x="66" y="197" rx="10" ry="10" width="85" height="19" />
          <rect x="187" y="198" rx="10" ry="10" width="169" height="19" />
          <rect x="401" y="197" rx="10" ry="10" width="85" height="19" />
          <rect x="522" y="198" rx="10" ry="10" width="169" height="19" />
          <rect x="730" y="196" rx="10" ry="10" width="85" height="19" />
          <rect x="851" y="195" rx="10" ry="10" width="85" height="19" />
          <circle cx="1456" cy="203" r="12" />
          <rect x="26" y="258" rx="4" ry="4" width="20" height="20" />
          <rect x="66" y="259" rx="10" ry="10" width="85" height="19" />
          <rect x="187" y="260" rx="10" ry="10" width="169" height="19" />
          <rect x="401" y="259" rx="10" ry="10" width="85" height="19" />
          <rect x="522" y="260" rx="10" ry="10" width="169" height="19" />
          <rect x="730" y="258" rx="10" ry="10" width="85" height="19" />
          <rect x="851" y="257" rx="10" ry="10" width="85" height="19" />
          <circle cx="1456" cy="265" r="12" />
          <rect x="26" y="316" rx="4" ry="4" width="20" height="20" />
          <rect x="66" y="317" rx="10" ry="10" width="85" height="19" />
          <rect x="187" y="318" rx="10" ry="10" width="169" height="19" />
          <rect x="401" y="317" rx="10" ry="10" width="85" height="19" />
          <rect x="522" y="318" rx="10" ry="10" width="169" height="19" />
          <rect x="730" y="316" rx="10" ry="10" width="85" height="19" />
          <rect x="851" y="315" rx="10" ry="10" width="85" height="19" />
          <circle cx="1456" cy="323" r="12" />
          <rect x="26" y="379" rx="4" ry="4" width="20" height="20" />
          <rect x="66" y="380" rx="10" ry="10" width="85" height="19" />
          <rect x="187" y="381" rx="10" ry="10" width="169" height="19" />
          <rect x="401" y="380" rx="10" ry="10" width="85" height="19" />
          <rect x="522" y="381" rx="10" ry="10" width="169" height="19" />
          <rect x="730" y="379" rx="10" ry="10" width="85" height="19" />
          <rect x="851" y="378" rx="10" ry="10" width="85" height="19" />
          <circle cx="1456" cy="386" r="12" />
          <rect x="978" y="138" rx="10" ry="10" width="169" height="19" />
          <rect x="977" y="195" rx="10" ry="10" width="169" height="19" />
          <rect x="977" y="257" rx="10" ry="10" width="169" height="19" />
          <rect x="977" y="315" rx="10" ry="10" width="169" height="19" />
          <rect x="977" y="378" rx="10" ry="10" width="169" height="19" />
          <rect x="1183" y="139" rx="10" ry="10" width="85" height="19" />
          <rect x="1182" y="196" rx="10" ry="10" width="85" height="19" />
          <rect x="1182" y="258" rx="10" ry="10" width="85" height="19" />
          <rect x="1182" y="316" rx="10" ry="10" width="85" height="19" />
          <rect x="1182" y="379" rx="10" ry="10" width="85" height="19" />
          <rect x="1305" y="137" rx="10" ry="10" width="85" height="19" />
          <rect x="1304" y="194" rx="10" ry="10" width="85" height="19" />
          <rect x="1304" y="256" rx="10" ry="10" width="85" height="19" />
          <rect x="1304" y="314" rx="10" ry="10" width="85" height="19" />
          <rect x="1304" y="377" rx="10" ry="10" width="85" height="19" />
          <circle cx="37" cy="97" r="11" />
          <rect x="26" y="23" rx="5" ry="5" width="153" height="30" />
          <circle cx="1316" cy="88" r="11" />
          <rect x="1337" y="94" rx="0" ry="0" width="134" height="3" />
          <circle cx="77" cy="96" r="11" />
        </content-loader>
        <div
          v-else
          class="table-wrapper-scroll-y table-wrapper-scroll-x my-custom-scrollbar"
        >
          <data-table
            id="table-download-data"
            v-if="jsonDataRekapitulasiSultengKumulatifKab"
            :header-fields="headerFields"
            :sort-field="sortField"
            :sort="sort"
            :data="data || []"
            :is-loading="isLoading"
            :css="datatableCss"
            not-found-msg="Items not found"
            @on-update="dtUpdateSort"
          />
        </div>
        <div class="pb-10 m-2" style="display: flow-root">
          <!-- <div slot="ItemsPerPage" class="items-per-page"> -->
          <div class="mr-4 items-per-page" style="float: left">
            <items-per-page-dropdown
              :list-items-per-page="listItemsPerPage"
              :items-per-page="itemsPerPage"
              :css="itemsPerPageCss"
              @on-update="updateItemsPerPage"
            />
            <label>Baris Per Halaman</label>
          </div>
          <!-- <template v-slot:pagination> -->
          <div style="float: right">
            <template>
              <pagination
                :page="currentPage"
                :total-items="totalItems"
                :items-per-page="itemsPerPage"
                :css="paginationCss"
                @on-update="changePage"
                @update-current-page="updateCurrentPage"
              />
            </template>
          </div>
        </div>
        <hr />
        <p class="pb-8 mx-8 text-sm text-justify text-gray-800">
          Keterangan:
          <br />Data didapatkan dari hasil scraping di
          <a
            class="text-blue-800 no-underline hover:underline"
            href="http://corona.sultengprov.go.id"
            >Website Covid-19 Sulawesi Tengah by Diskominfo</a
          >
          & website
          <a
            class="text-blue-800 no-underline hover:underline"
            href="http://dinkes.sultengprov.com"
            >Dinas Kesehatan Provinsi Sulawesi Tengah</a
          >
          menggunakan Python dengan plugin PytTesseract untuk mengekstrak data
          pada gambar.
        </p>
      </section>
      <div class="md:m-4">
        <partner-footer :partners="partners" />
      </div>
    </div>
  </layout>
</template>

<script>
/* eslint-disable */
import { DataTable, ItemsPerPageDropdown, Pagination } from "v-datatable-light";
import { ContentLoader } from "vue-content-loader";
import _ from "lodash";
import XLSX from "xlsx";
import Layout from "@/layout/Layout";
const addZero = (value) => ("0" + value).slice(-2);
const formatDate = (value) => {
  if (value) {
    var abs = value.split(" ");
    var tanggal = null;
    if (abs.length >= 3) {
      var date = abs[0];
      var month = "";
      switch (abs[1]) {
        case "Jan":
          month = "01";
          break;
        case "Feb":
          month = "02";
          break;
        case "Mar":
          month = "03";
          break;
        case "Apr":
          month = "04";
          break;
        case "May":
          month = "05";
          break;
        case "Jun":
          month = "06";
          break;
        case "Jul":
          month = "07";
          break;
        case "Aug":
          month = "08";
          break;
        case "Sep":
          month = "09";
          break;
        case "Oct":
          month = "10";
          break;
        case "Nov":
          month = "11";
          break;
        case "Dec":
          month = "12";
          break;
        default:
          month = "01";
          break;
      }
      var year = abs[2];
      tanggal = year + "-" + month + "-" + date;
    } else {
      tanggal = value;
    }
    const d = new Date(tanggal);
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return d.toLocaleString("id-ID", options);
  }
  return "";
};
const formatThousand = (value) => {
  if (value) {
    return value.toLocaleString("id-ID");
  }
  return "0";
};
export default {
  props: ["partners", "statistics"],
  components: {
    ContentLoader,
    DataTable,
    ItemsPerPageDropdown,
    Layout,
    Pagination,
    PartnerFooter: () => import("@/Shared/PartnerFooter"),
  },
  data() {
    return {
      jsonDataKabupaten: [
        {
          no: 1,
          nama: "Banggai",
          dataHarian: [],
        },
        {
          no: 2,
          nama: "Banggai Kepulauan",
          dataHarian: [],
        },
        {
          no: 3,
          nama: "Banggai Laut",
          dataHarian: [],
        },
        {
          no: 4,
          nama: "Buol",
          dataHarian: [],
        },
        {
          no: 5,
          nama: "Donggala",
          dataHarian: [],
        },
        {
          no: 6,
          nama: "Morowali",
          dataHarian: [],
        },
        {
          no: 7,
          nama: "Morowali Utara",
          dataHarian: [],
        },
        {
          no: 8,
          nama: "Parigi Mautong",
          dataHarian: [],
        },
        {
          no: 9,
          nama: "Poso",
          dataHarian: [],
        },
        {
          no: 10,
          nama: "Sigi",
          dataHarian: [],
        },
        {
          no: 11,
          nama: "Tojo Una-Una",
          dataHarian: [],
        },
        {
          no: 12,
          nama: "Toli-Toli",
          dataHarian: [],
        },
        {
          no: 13,
          nama: "Kota Palu",
          dataHarian: [],
        },
      ],
      isLoading: true,
      jsonDataRekapitulasiSultengKumulatifKab: [],
      headerFields: [
        {
          name: "tanggal",
          label: "Tanggal",
          sortable: true,
          format: formatDate,
        },
        {
          name: "nama_kab",
          label: "Nama Kabupaten/Kota",
          sortable: true,
        },
        {
          name: "odp",
          label: "Kumulatif -- (ODP)",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "odp_selesai",
          label: "Kumulatif -- Selesai Pemantauan",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "odp_proses",
          label: "Kumulatif -- Proses Pemantauan",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pdp",
          label: "Kumulatif -- (PDP)",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pdp_selesai",
          label: "Kumulatif -- Selesai Pengawasan",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pdp_proses",
          label: "Kumulatif -- Proses Pengawasan",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "positif",
          label: "Kumulatif -- Positif",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "sembuh",
          label: "Kumulatif -- Sembuh",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "meninggal",
          label: "Kumulatif -- Meninggal",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pertumbuhan_odp",
          label: "Pertumbuhan -- (ODP)",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pertumbuhan_odp_selesai",
          label: "Pertumbuhan -- Selesai Pemantauan",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pertumbuhan_odp_proses",
          label: "Pertumbuhan -- Proses Pemantauan",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pertumbuhan_pdp",
          label: "Pertumbuhan -- (PDP)",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pertumbuhan_pdp_selesai",
          label: "Pertumbuhan -- Selesai Pengawasan",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pertumbuhan_pdp_proses",
          label: "Pertumbuhan -- Proses Pengawasan",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pertumbuhan_positif",
          label: "Pertumbuhan -- Positif",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pertumbuhan_sembuh",
          label: "Pertumbuhan -- Sembuh",
          sortable: true,
          format: formatThousand,
        },
        {
          name: "pertumbuhan_meninggal",
          label: "Pertumbuhan -- Meninggal",
          sortable: true,
          format: formatThousand,
        },
      ],
      data: [],
      datatableCss: {
        table: "table table-bordered table-hover table-striped table-center",
        theadTh: "header-item",
        thWrapper: "th-wrapper",
        thWrapperCheckboxes: "th-wrapper checkboxes",
        arrowsWrapper: "arrows-wrapper",
        arrowUp: "arrow up",
        arrowDown: "arrow down",
        footer: "footer",
      },
      paginationCss: {
        paginationItem: "pagination-item",
        moveFirstPage: "move-first-page",
        movePreviousPage: "move-previous-page",
        moveNextPage: "move-next-page",
        moveLastPage: "move-last-page",
        pageBtn: "page-btn",
      },
      itemsPerPageCss: {
        select: "item-per-page-dropdown",
      },
      sort: "asc",
      sortField: "tanggal",
      listItemsPerPage: [10, 20, 50, 100],
      itemsPerPage: 50,
      currentPage: 1,
      totalItems: 0,
      hometown: null,
      createHeaderName: "created:header",
    };
  },
  mounted() {
    this.fetchDataRekapitulasiSultengKumulatifKab();
  },
  methods: {
    groupDataKab(data) {
      const self = this;
      data.forEach((element) => {
        const temp1 = {
          hari_ke: element.hari_ke,
          tanggal: element.tanggal,
        };
        const temp2 = {
          nama: "",
          kasus_baru: {
            positif: 0,
            sembuh: 0,
            meninggal: 0,
            ODP: 0,
            PDP: 0,
          },
          aktif: {
            dalam_perawatan: 0,
            ODP: 0,
            PDP: 0,
          },
          selesai: {
            ODP: 0,
            PDP: 0,
          },
          kumulatif: {
            positif: 0,
            sembuh: 0,
            meninggal: 0,
            ODP: 0,
            PDP: 0,
            selesai_PDP: 0,
            selesai_ODP: 0,
          },
        };

        self.jsonDataKabupaten.forEach((kabupaten) => {
          temp2.nama = kabupaten.nama;
          let temp4 = { ...temp1, ...temp2 };
          element.daftar_kabupaten.forEach((kab) => {
            if (kabupaten.no === kab.no) {
              const temp5 = {
                nama: kab.nama,
                kasus_baru: { ...kab.kasus_baru },
                aktif: { ...kab.aktif },
                selesai: { ...kab.selesai },
                kumulatif: { ...kab.kumulatif },
              };
              temp4 = {
                ...temp1,
                ...temp5,
              };
            }
          });
          kabupaten.dataHarian.push(temp4);
        });
      });
    },
    fetchDataRekapitulasiSultengKumulatifKab() {
      const self = this;
      self.groupDataKab(self.statistics.data);
      self.jsonDataKabupaten.forEach((kabupaten) => {
        let prev_data = {
          odp: 0,
          odp_selesai: 0,
          odp_proses: 0,
          pdp: 0,
          pdp_selesai: 0,
          pdp_proses: 0,
          positif: 0,
          sembuh: 0,
          meninggal: 0,
        };
        for (let i = 0; i < kabupaten.dataHarian.length; i++) {
          const harian = kabupaten.dataHarian[i];
          let temp3 = {
            tanggal: "",
            nama_kab: "",
            odp: 0,
            odp_selesai: 0,
            odp_proses: 0,
            pdp: 0,
            pdp_selesai: 0,
            pdp_proses: 0,
            positif: 0,
            sembuh: 0,
            meninggal: 0,
          };
          let temp2 = {
            pertumbuhan_odp: 0,
            pertumbuhan_odp_selesai: 0,
            pertumbuhan_odp_proses: 0,
            pertumbuhan_pdp: 0,
            pertumbuhan_pdp_selesai: 0,
            pertumbuhan_pdp_proses: 0,
            pertumbuhan_positif: 0,
            pertumbuhan_sembuh: 0,
            pertumbuhan_meninggal: 0,
          };
          temp3.tanggal = harian.tanggal;
          temp3.nama_kab = harian.nama;
          if (harian.kumulatif.ODP === 0 && prev_data.odp !== 0) {
            temp3.odp = prev_data.odp;
          } else {
            temp3.odp = harian.kumulatif.ODP;
          }
          if (
            harian.kumulatif.selesai_ODP === 0 &&
            prev_data.odp_selesai !== 0
          ) {
            temp3.odp_selesai = prev_data.odp_selesai;
          } else {
            temp3.odp_selesai = harian.kumulatif.selesai_ODP;
          }
          if (harian.aktif.ODP === 0 && prev_data.odp_proses !== 0) {
            if (
              harian.kumulatif.ODP !== 0 &&
              harian.kumulatif.selesai_ODP != 0
            ) {
              temp3.odp_proses = harian.aktif.ODP;
            } else {
              temp3.odp_proses = prev_data.odp_proses;
            }
          } else {
            temp3.odp_proses = harian.aktif.ODP;
          }
          if (harian.kumulatif.PDP === 0 && prev_data.pdp !== 0) {
            temp3.pdp = prev_data.pdp;
          } else {
            temp3.pdp = harian.kumulatif.PDP;
          }
          if (
            harian.kumulatif.selesai_PDP == 0 &&
            prev_data.pdp_selesai !== 0
          ) {
            temp3.pdp_selesai = prev_data.pdp_selesai;
          } else {
            temp3.pdp_selesai = harian.kumulatif.selesai_PDP;
          }
          if (harian.aktif.PDP == 0 && prev_data.pdp_proses !== 0) {
            if (
              harian.kumulatif.PDP !== 0 &&
              harian.kumulatif.selesai_PDP !== 0
            ) {
              temp3.pdp_proses = harian.aktif.PDP;
            } else {
              temp3.pdp_proses = prev_data.pdp_proses;
            }
          } else {
            temp3.pdp_proses = harian.aktif.PDP;
          }
          if (harian.kumulatif.positif == 0 && prev_data.positif !== 0) {
            temp3.positif = prev_data.positif;
          } else {
            temp3.positif = harian.kumulatif.positif;
          }
          if (harian.kumulatif.sembuh == 0 && prev_data.sembuh !== 0) {
            temp3.sembuh = prev_data.sembuh;
          } else {
            temp3.sembuh = harian.kumulatif.sembuh;
          }
          if (harian.kumulatif.meninggal == 0 && prev_data.meninggal !== 0) {
            temp3.meninggal = prev_data.meninggal;
          } else {
            temp3.meninggal = harian.kumulatif.meninggal;
          }
          temp2.pertumbuhan_odp = harian.kasus_baru.ODP;
          temp2.pertumbuhan_odp_selesai = harian.selesai.ODP;
          temp2.pertumbuhan_odp_proses =
            harian.kasus_baru.ODP - harian.selesai.ODP;
          temp2.pertumbuhan_pdp = harian.kasus_baru.PDP;
          temp2.pertumbuhan_pdp_selesai = harian.selesai.PDP;
          temp2.pertumbuhan_pdp_proses =
            harian.kasus_baru.PDP - harian.selesai.PDP;
          temp2.pertumbuhan_positif = harian.kasus_baru.positif;
          temp2.pertumbuhan_sembuh = harian.kasus_baru.sembuh;
          temp2.pertumbuhan_meninggal = harian.kasus_baru.meninggal;
          self.jsonDataRekapitulasiSultengKumulatifKab.push({
            ...temp3,
            ...temp2,
          });
          prev_data = { ...temp3 };
        }
      });

      self.data = self.jsonDataRekapitulasiSultengKumulatifKab.slice(
        0,
        self.itemsPerPage
      );
      self.totalItems = self.jsonDataRekapitulasiSultengKumulatifKab.length;
      self.isLoading = false;
    },
    dtEditClick: (props) => alert("Click props:" + JSON.stringify(props)),
    dtUpdateSort: function ({ sortField, sort }) {
      const sortedData = _.orderBy(
        this.jsonDataRekapitulasiSultengKumulatifKab,
        [sortField],
        [sort]
      );
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      this.data = sortedData.slice(start, end);
    },
    updateItemsPerPage: function (itemsPerPage) {
      this.itemsPerPage = parseInt(itemsPerPage);
      if (itemsPerPage >= this.jsonDataRekapitulasiSultengKumulatifKab.length) {
        this.data = this.jsonDataRekapitulasiSultengKumulatifKab;
      } else {
        this.data = this.jsonDataRekapitulasiSultengKumulatifKab.slice(
          0,
          itemsPerPage
        );
      }
    },
    changePage: function (currentPage) {
      this.currentPage = currentPage;
      const start = (currentPage - 1) * this.itemsPerPage;
      const end = currentPage * this.itemsPerPage;
      this.data = this.jsonDataRekapitulasiSultengKumulatifKab.slice(
        start,
        end
      );
    },
    updateCurrentPage: function (currentPage) {
      this.currentPage = currentPage;
    },
    changeHometown: function (event, id) {
      this.data = this.data.map((item) =>
        item.id === id ? { ...item, hometown: event.target.value } : item
      );
    },
    actionFirstClick: (params) => {
      alert(JSON.stringify(params));
    },
    formatDate(date) {
      const d = new Date(date);
      const options = {
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      return d.toLocaleString("id-ID", options);
    },
    downloadCSV() {
      const col = [
        "tanggal",
        "nama_kab",
        "odp",
        "odp_proses",
        "odp_selesai",
        "pdp",
        "pdp_proses",
        "pdp_selesai",
        "positif",
        "sembuh",
        "meninggal",
      ];
      let csvString = "";
      col.forEach((row) => {
        csvString += row + ",";
      });
      csvString += "\n";
      this.jsonDataRekapitulasiSultengKumulatifKab.forEach((obj) => {
        Object.keys(obj).forEach((key) => {
          csvString += obj[key] + ",";
        });
        csvString += "\n";
      });
      let anchor = document.createElement("a");
      anchor.href = "data:text/csv;charset=utf-8," + encodeURI(csvString);
      anchor.target = "_blank";
      anchor.download = "Data COVID-19 Sulawesi Tengah.csv";
      anchor.click();
    },
    downloadExcel() {
      var kumulatif = XLSX.utils.json_to_sheet(
        this.jsonDataRekapitulasiSultengKumulatifKab
      );
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, kumulatif, "Data Kumulatif");
      XLSX.writeFile(wb, "Data COVID-19 Sulawesi Tengah.xlsx");
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-container {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  @screen md {
    grid-template-columns: 2fr 4fr;
  }
}
.button-selector {
  @apply px-6 py-2 rounded-md border border-solid border-blue-500
  text-blue-500 bg-white;
  &[active] {
    @apply text-blue-500 bg-white;
  }
}

.button-selector:hover {
  @apply bg-blue-500 text-white;
}
</style>

<style>
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
}
.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #5e6061;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #eceeef;
}
.table tbody + tbody {
  border-top: 2px solid #eceeef;
}
.table .table {
  background-color: #fff;
}
.table-sm th,
.table-sm td {
  padding: 0.3rem;
}
.table-bordered {
  border: 1px solid #eceeef;
}
.table-bordered th,
.table-bordered td {
  border: 1px solid #eceeef;
}
.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.075);
}
.table-active,
.table-active > th,
.table-active > td {
  background-color: rgba(0, 0, 0, 0.075);
}
.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075);
}
.table-hover .table-active:hover > td,
.table-hover .table-active:hover > th {
  background-color: rgba(0, 0, 0, 0.075);
}
.table-success,
.table-success > th,
.table-success > td {
  background-color: #dff0d8;
}
.table-hover .table-success:hover {
  background-color: #d0e9c6;
}
.table-hover .table-success:hover > td,
.table-hover .table-success:hover > th {
  background-color: #d0e9c6;
}
.table-info,
.table-info > th,
.table-info > td {
  background-color: #d9edf7;
}
.table-hover .table-info:hover {
  background-color: #c4e3f3;
}
.table-hover .table-info:hover > td,
.table-hover .table-info:hover > th {
  background-color: #c4e3f3;
}
.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #fcf8e3;
}
.table-hover .table-warning:hover {
  background-color: #faf2cc;
}
.table-hover .table-warning:hover > td,
.table-hover .table-warning:hover > th {
  background-color: #faf2cc;
}
.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #f2dede;
}
.table-hover .table-danger:hover {
  background-color: #ebcccc;
}
.table-hover .table-danger:hover > td,
.table-hover .table-danger:hover > th {
  background-color: #ebcccc;
}
.thead-inverse th {
  color: #fff;
  background-color: #292b2c;
}
.thead-default th {
  color: #464a4c;
  background-color: #eceeef;
}
.table-inverse {
  color: #fff;
  background-color: #292b2c;
}
.table-inverse th,
.table-inverse td,
.table-inverse thead th {
  border-color: #fff;
}
.table-inverse.table-bordered {
  border: 0;
}
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.table-responsive.table-bordered {
  border: 0;
}
</style>

<style>
.my-custom-scrollbar {
  position: relative;
  height: 500px;
  overflow-y: scroll;
}
/* thead tr:nth-child(1) th { position: sticky; top: 0; background-color: white;}
tbody td:nth-child(1) { position: sticky; left: 0; background-color: white; }
head th:nth-child(1) { position: sticky; left: 0; top:0; background-color: white; } */
#table-download-data thead th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: lightslategray;
}
#table-download-data tbody td {
  text-align: right;
}
#table-download-data tbody td:first-child {
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  background-color: lightslategray;
  text-align: left;
}
#table-download-data tbody td:nth-child(2) {
  position: -webkit-sticky;
  position: sticky;
  left: 80px;
  background-color: lightslategray;
  text-align: left;
}
/* To have the header in the first column stick to the left: */
#table-download-data thead th:first-child {
  left: 0;
  z-index: 1;
  background-color: lightslategray;
}
#table-download-data thead th:nth-child(2) {
  left: 80px;
  z-index: 1;
  background-color: lightslategray;
}
.column-0 {
  width: 100px !important;
}
.column-1 {
  width: 200px !important;
}
.th-wrapper {
  width: 120px !important;
}
.header-column-0 {
  width: 100px !important;
}
.header-column-1 {
  width: 200px !important;
}
.header-column-2 {
  width: 140px !important;
}
.header-column-5 {
  width: 140px !important;
}
.header-column-11 {
  width: 140px !important;
}
.header-column-14 {
  width: 140px !important;
}
/* Datatable CSS */
.v-datatable-light .header-item {
  cursor: pointer;
  color: white;
  transition: color 0.15s ease-in-out;
  vertical-align: top;
  font-size: smaller;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
}
.v-datatable-light .header-item:hover {
  color: #337ab7;
}
.v-datatable-light .header-item.no-sortable {
  cursor: default;
}
.v-datatable-light .header-item.no-sortable:hover {
  color: lightslategrey;
}
.v-datatable-light .header-item .th-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  font-weight: bold;
}
.v-datatable-light .header-item .th-wrapper.checkboxes {
  justify-content: center;
}
.v-datatable-light .header-item .th-wrapper .arrows-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-between;
}
.v-datatable-light .header-item .th-wrapper .arrows-wrapper.centralized {
  justify-content: center;
}
.v-datatable-light .arrow {
  transition: color 0.15s ease-in-out;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}
.v-datatable-light .arrow.up {
  border-bottom: 5px solid white;
}
.v-datatable-light .arrow.up:hover {
  border-bottom: 5px solid #337ab7;
}
.v-datatable-light .arrow.down {
  border-top: 5px solid white;
}
.v-datatable-light .arrow.down:hover {
  border-top: 5px solid #337ab7;
}
.v-datatable-light .footer {
  display: flex;
  justify-content: space-between;
  width: 500px;
}
.v-datatable-light tbody {
  font-size: small;
}
/* #app .v-datatable-light .row-7 .column-4 {
  color: steelblue;
}
#app .v-datatable-light .row-1 .column-2 {
  color: green;
}
#app .v-datatable-light .row-2 .column-1 {
  color: red;
}
#app .v-datatable-light .row-3 {
  color: pink;
}
#app .v-datatable-light .column-5 {
  color: goldenrod;
}
#app .v-datatable-light .row-3 .column-5 {
  color: purple;
} */
/* End Datatable CSS */
/* Pagination CSS */
.v-datatable-light-pagination {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  width: 300px;
  height: 30px;
}
.v-datatable-light-pagination .pagination-item {
  width: 30px;
  margin-right: 5px;
  font-size: 16px;
  transition: color 0.15s ease-in-out;
}
.v-datatable-light-pagination .pagination-item.selected {
  color: #ed9b19;
}
.v-datatable-light-pagination .pagination-item .page-btn {
  background-color: transparent;
  outline: none;
  border: none;
  color: #337ab7;
  transition: color 0.15s ease-in-out;
}
.v-datatable-light-pagination .pagination-item .page-btn:hover {
  color: #ed9b19;
}
.v-datatable-light-pagination .pagination-item .page-btn:disabled {
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.65;
}
/* END PAGINATION CSS */
/* ITEMS PER PAGE DROPDOWN CSS */
.item-per-page-dropdown {
  background-color: transparent;
  min-height: 30px;
  border: 1px solid #337ab7;
  border-radius: 5px;
  color: #337ab7;
}
.item-per-page-dropdown:hover {
  cursor: pointer;
}
/* END ITEMS PER PAGE DROPDOWN CSS */
</style>