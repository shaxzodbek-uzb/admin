<template>
  <CRow>
    <CCol md="12">
      <p
        style="font-size: 20px; color: #5A5A5A !important;"
        class="text-center"
      >
        Сергели тумани бўйича солиқлар ва йиғимлар тушуми бажарилиши
      </p>
    </CCol>
    <CCol md="12">
      <CCard class="no-border border-radius-18">
        <CCardHeader class="no-border border-radius-18 p-5 pb-1 pt-5">
          <CRow>
            <CCol md="2">
              <div class="per-page-controller">
                <CSelect
                  :custom="true"
                  :options="['Йилик', 'Oylik', 'Haftalik']"
                />
              </div>
            </CCol>
            <CCol md="2">
              <div class="per-page-controller">
                <CSelect :custom="true" :options="[2020, 2019, 2018, 2017]" />
              </div>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            class=" custom-table incomes"
            hover
            :items="items"
            :fields="fields"
            head-color="light"
            :items-per-page="5"
            responsive
            :header="false"
          >
            <slot slot="thead-top">
              <tr>
                <th rowspan="2">№</th>
                <th rowspan="2">Солик турлари</th>
                <th colspan="4">Контингент</th>
                <th colspan="4">Туман маҳаллий бюджет</th>
              </tr>
              <tr>
                <th>Режа</th>
                <th>Тушум</th>
                <th>%</th>
                <th>Фарқи</th>

                <th>Режа</th>
                <th>Тушум</th>
                <th>%</th>
                <th>Фарқи</th>
              </tr>
            </slot>

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

            <div slot="contingent_plan-header" class="text-center">
              <CIcon name="add" size="lg" />
            </div>
            <div slot="type-header" class="text-center">
              Солик турлари
            </div>
            <td slot="contingent_plan">
              <CInput />
            </td>

            <div slot="budget_plan-header" class="text-center">
              <CIcon name="add" size="lg" />
            </div>
            <td slot="budget_plan">
              <CInput />
            </td>
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
              <CCol md="5">Итого:</CCol>
              <CCol md="2">1231243</CCol>
              <CCol md="1">7832782</CCol>
              <CCol md="1">7373982</CCol>
              <CCol md="1">18255</CCol>
              <CCol md="1">9329832</CCol>
              <CCol md="1">0</CCol>
            </CRow>
          </CAlert>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import incomeData from "./incomeData";
export default {
  name: "IncomeIndex",
  data() {
    return {
      items: incomeData,
      fields: [
        { key: "id", label: "" },
        { key: "type", label: "" },
        { key: "contingent_plan", label: "Режа" },
        { key: "contingent_income", label: "Тушум" },
        { key: "contingent_percent", label: "%" },
        { key: "contingent_difference", label: "Фарқи" },
        { key: "budget_plan", label: "Режа" },
        { key: "budget_income", label: "Тушум" },
        { key: "budget_percent", label: "%" },
        { key: "budget_difference", label: "Фарқи" }
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
