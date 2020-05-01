<template>
  <CRow>
    <CCol md="12">
      <p
        style="font-size: 20px; color: #5A5A5A !important;"
        class="text-center"
      >
        Сергели туманида 2019-2020 йилларда амалга ошириладиган инвестиция
        лойиҳаларининг<br />
        МАНЗИЛЛИ РЎЙХАТИ
      </p>
    </CCol>
    <CCol md="12">
      <CRow>
        <CCol md="4">
          <div class="per-page-controller d-flex flex-row">
            <CSelect :custom="true" size="sm" :options="[7, 10, 15, 30]" />
            <div class="per-page-title">ta yozuvni korsatish</div>
          </div>
        </CCol>
        <CCol md="8" class="d-flex justify-content-end pb-3">
          <CButton
            key="filter1"
            shape="pill"
            color="primary"
            size="sm"
            class="px-4 py-1 mx-1"
          >
            Yangi qo'shish
          </CButton>
          <CButton
            key="filter2"
            shape="pill"
            color="primary"
            size="sm"
            class="px-4 py-1 mx-1"
          >
            Excel export
          </CButton>
          <CButton
            key="filter3"
            shape="pill"
            color="primary"
            size="sm"
            class="px-4 py-1 mx-1"
          >
            Statistika
          </CButton>
        </CCol>
      </CRow>
      <CDataTable
        :items="items"
        :fields="fields"
        class="custom-table investor"
        hover
      >
        <template #status="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">
              {{ item.status }}
            </CBadge>
          </td>
        </template>
        <template #show_details="{item, index}">
          <td class="p-2" @click="toggleDetails(item, index)">
            <CIcon name="arrow_primary" />
          </td>
        </template>
        <template #details="{item}">
          <CCollapse
            :show="Boolean(item._toggled)"
            :duration="collapseDuration"
          >
            <CCardBody>
              <CRow>
                <CCol md="4">
                  <p><b class="title">Сектор:</b> 2</p>
                  <p>
                    <b class="title">Лойиҳа манзили:</b>SPUTNIK 10-MAVZE, 63A-UY
                  </p>
                  <p><b class="title">Директор:</b>Mирхидоватов Азам</p>
                  <p><b class="title">Телефон рақами:</b>(71) 2584715</p>
                  <p>
                    <b class="title">Хорижий ҳамкор номи:</b>Jiangsu Newamstar
                    Packaging Machinery Co.,Ltd.
                  </p>
                </CCol>
                <CCol md="4">
                  <p><b class="title">Давлати:</b> Хитой</p>
                  <p>
                    <b class="title">Хизмат кўрсатувчи тижорат банки:</b>Ипотека
                    банк
                  </p>
                  <p><b class="title">Иш ўринлари:</b>1231</p>
                  <p><b class="title">Ишга тушиш муддати:</b>01.12.2019</p>
                  <p><b class="title">СТИР:</b>206206943</p>
                </CCol>
                <CCol md="4">
                  <p>
                    <b class="title">Лойиҳанинг умумий қиймати минг доллар:</b>
                    4975
                  </p>
                  <p>
                    <b class="title"
                      >2019 йилда ўзлаштириш прогнози Жами минг доллар:
                    </b>
                    1232
                  </p>
                  <p>
                    <b class="title">
                      2019 йилда ўзлаштириш прогнози хорижий инвестиция, (минг
                      долл.):
                    </b>
                    1232
                  </p>
                  <p><b class="title">Фойдаланувчи:</b>206206943</p>
                  <p><b class="title">Сана:</b>04.03.2020</p>
                </CCol>
              </CRow>
            </CCardBody>
          </CCollapse>
        </template>
        <td slot="action">
          <CIcon name="more" />
        </td>

        <div slot="action-header" class="text-center"></div>
      </CDataTable>
      <div class="d-flex justify-content-end my-3">
        <CPagination
          v-show="2"
          :activePage.sync="page"
          :pages="4"
          :doubleArrows="false"
          class="custom-pagination"
        >
          <div slot="previous-button">Oldingi</div>
          <div slot="next-button">Keyingi</div>
        </CPagination>
      </div>
      <CAlert color="info">
        <CDataTable :items="footer_items" class="custom-table footer-table">
        </CDataTable>
      </CAlert>
    </CCol>
  </CRow>
</template>

<script>
import investorData from "./investorData";
const footer_items = [
  {
    "Иш ўринлари": 5905,
    "Лойиҳанинг умумий қиймати млн.сўм": 2127701,
    "Лойиҳанинг умумий қиймати минг доллар": 124532,
    "ўз маблағи, млн. сўм": 5905,
    "хорижий инвестиция, (минг долл.)": 56743,
    "2019 йилда ўзлаштириш прогнози Жами млн.сўм": 5905,
    "2019 йилда ўзлаштириш прогнози Жами минг доллар": 123214,
    '2019 йилда ўзлаштириш прогнози "ўз маблағи, (млн. сўм)"': 4556,
    "2019 йилда ўзлаштириш прогнози хорижий инвестиция, (минг долл.)": 45743
  }
];

const fields = [
  {
    key: "show_details",
    label: "",
    sorter: false,
    filter: false
  },
  { key: "id", label: "№" },
  { key: "company_name", label: "Ташаббускор корхона" },
  { key: "project_name", label: "Лойиҳа номи" },
  { key: "overal_sum", label: "Лойиҳанинг умумий қиймати млн.сўм" },
  { key: "own_sum", label: "Ўз маблағи млн. сўм" },
  { key: "investition", label: "Xорижий инвестиция, (минг долл.)" },
  { key: "exchange", label: "2019 йилда ўзлаштириш прогнози Жами млн.сўм" },
  {
    key: "own_sum_exchange",
    label: '2019 йилда ўзлаштириш прогнози "ўз маблағи,(млн. сўм)"'
  },
  {
    key: "action"
  }
];

export default {
  name: "AdvancedTables",
  data() {
    return {
      page: 1,
      items: investorData.map((item, id) => {
        return { ...item, id };
      }),
      fields,
      footer_items,
      details: [],
      collapseDuration: 0
    };
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case "Active":
          return "success";
        case "Inactive":
          return "secondary";
        case "Pending":
          return "warning";
        case "Banned":
          return "danger";
        default:
          "primary";
      }
    },
    toggleDetails(item) {
      this.$set(this.items[item.id], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    }
  }
};
</script>
