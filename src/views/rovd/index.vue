<template>
  <CRow>
    <CCol md="12">
      <CCard class="no-border border-radius-18">
        <CCardHeader class="no-border border-radius-18">
          <CRow>
            <CCol md="3">
              <div class="per-page-controller d-flex flex-row">
                <CSelect :custom="true" size="sm" :options="[7, 10, 15, 30]" />
                <div class="per-page-title">ta yozuvni korsatish</div>
              </div>
            </CCol>
            <CCol md="6" />
            <CCol md="3">
              <CInput class="search-input" placeholder="Izlash" size="sm">
                <div slot="append-content">
                  <CIcon name="search" />
                </div>
              </CInput>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            class="mb-0 custom-table"
            hover
            :items="items"
            :fields="fields"
            head-color="light"
            :items-per-page="5"
            sorter
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
          <div class="d-flex justify-content-end">
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
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from "./rovdData";
export default {
  name: "RovdIndex",
  data() {
    return {
      items: usersData,
      fields: [
        { key: "id", label: "#" },
        { key: "desc", label: "Qisqacha mazmun", sorter: true },
        { key: "file", label: "File" },
        { key: "registered", label: "Yaratilgan sana" }
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
