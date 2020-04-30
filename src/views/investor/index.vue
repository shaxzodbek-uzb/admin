<template>
  <CRow>
    <CCol md="12">
      <p
        style="font-size: 20px; color: #5A5A5A !important;"
        class="text-center"
      >
        Параметры экспорта продукции предприятий Сергелийского района города
        Ташкента,<br />
        в том числе субъектов малого бизнеса на 2019 год
      </p>
    </CCol>
    <CCol md="12">
      <CCard class="no-border border-radius-18">
        <CCardHeader class="no-border border-radius-18 pb-1 pt-4">
          <CRow>
            <CCol md="4">
              <div class="per-page-controller d-flex flex-row">
                <CSelect :custom="true" size="sm" :options="[7, 10, 15, 30]" />
                <div class="per-page-title">ta yozuvni korsatish</div>
              </div>
            </CCol>
            <CCol md="8" class="d-flex justify-content-end pb-3">
              <CButton
                key="filter"
                shape="pill"
                color="primary"
                size="sm"
                class="px-4 py-1 mx-1"
              >
                Yangi qo'shish
              </CButton>
              <CButton
                key="filter"
                shape="pill"
                color="primary"
                size="sm"
                class="px-4 py-1 mx-1"
              >
                Excel export
              </CButton>
              <CButton
                key="filter"
                shape="pill"
                color="primary"
                size="sm"
                class="px-4 py-1 mx-1"
              >
                Statistika
              </CButton>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody class=" p-3">
          <CDataTable
            class="mb-0 custom-table exporters"
            hover
            :items="items"
            :fields="fields"
            head-color="light"
            :items-per-page="5"
            responsive
          >
            <td slot="avatar" class="text-center" slot-scope="{ item }">
              <div class="c-avatar">
                <img :src="item.avatar" class="c-avatar-img" alt="" />
              </div>
            </td>
            <td slot="username" slot-scope="{ item }">
              <div>{{ item.username }}</div>
              <div class="small text-muted">
                {{ item.role }}
              </div>
            </td>

            <td slot="action">
              <CIcon name="more" />
            </td>

            <div slot="action-header" class="text-center">
              <CIcon name="add" size="lg" />
            </div>
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
            <CRow>
              <CCol md="3">Итого:</CCol>
              <CCol md="3">Прогноз: 0</CCol>
              <CCol md="3">Факт: 0</CCol>
              <CCol md="3">Процент: NaN</CCol>
            </CRow>
          </CAlert>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import investorData from "./investorData";
export default {
  name: "ExporterIndex",
  data() {
    return {
      items: investorData,
      fields: [
        { key: "id", label: "№" },
        {
          key: "company_name",
          label: "Наименование предприятий"
        },
        { key: "type", label: "Наименование продукции" },
        { key: "main", label: "Основание" },
        { key: "sector", label: "Номер сектора" },
        { key: "inn", label: "ИНН" },
        { key: "okpo", label: "ОКПО" },
        { key: "full_name", label: "ФИО руководителя/учредителя" },
        { key: "phone", label: "Контактные номера телефонов" },
        { key: "bank", label: "Наименование обслуживающего банка" },
        { key: "problems", label: "Проблемы" },
        { key: "prognoz", label: "Прогноз" },
        { key: "fact", label: "Факт" },
        { key: "percent", label: "Процент" },
        { key: "user_id", label: "Пользователь" },
        { key: "date", label: "Дата" },
        { key: "action" }
      ],
      activePage: 1,
      page: 1
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page);
        }
      }
    }
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
    rowClicked(item, index) {
      this.$router.push({ path: `users/${index + 1}` });
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    }
  }
};
</script>
