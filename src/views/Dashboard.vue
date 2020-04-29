<template>
  <div>
    <WidgetsDashboard />
    <CRow>
      <CCol md="12">
        <CCard class="no-border border-radius-18">
          <CCardHeader class="no-border border-radius-18">
            <CRow class="mb-3">
              <CCol md="9" class="mb-3">
                <CButton
                  key="filter"
                  shape="pill"
                  color="primary"
                  class="px-4 py-1"
                  :class="{'filter-show' : showFilter}"
                  size="sm"
                  v-on:click="showFilter = !showFilter"
                >
                  Filtr
                  <CIcon name="arrow"/>
                </CButton>
              </CCol>
              <CCol md="3" class="mb-3">
                <CInput
                  class="search-input"
                  placeholder="Izlash"
                  size="sm"
                >
                  
                  <div slot="append-content">
                    <CIcon name="search" />
                  </div>
                </CInput>
              </CCol>

              <CCol md="1" v-if="showFilter">
                <CInput
                  placeholder="#"
                  size="sm"
                />
              </CCol>
              <CCol md="2" v-if="showFilter">
                <CInput
                  placeholder="Kategoriya"
                  class="flex-grow-1"
                  size="sm"
                />
              </CCol>
              <CCol md="2" v-if="showFilter">
                <CInput
                  placeholder="Qisqacha mazmun"
                  class="flex-grow-1"
                  size="sm"
                />
              </CCol>
              <CCol md="2" v-if="showFilter">
                <CInput
                  placeholder="Murojaatchi"
                  class="flex-grow-1"
                  size="sm"
                />
              </CCol>
              <CCol md="2" v-if="showFilter">
                <CInput
                  placeholder="Murojaat sanasi"
                  class="flex-grow-1"
                  size="sm"
                />
              </CCol>
              <CCol md="2" v-if="showFilter">
                <CInput
                  placeholder="Kimdan"
                  size="sm"
                />
              </CCol>
              <CCol md="1" v-if="showFilter">
                <CInput
                  placeholder="Xolat"
                  class="flex-grow-1"
                  size="sm"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md="4">Barcha ma'lumotlar</CCol>
              <CCol md="8" class="d-flex justify-content-end">
                <CButton
                  key="filter"
                  shape="pill"
                  color="primary"
                  size="sm"
                  class="px-4 py-1 mx-1"
                >
                  Print
                </CButton>
                <CButton
                  key="filter"
                  shape="pill"
                  color="primary"
                  size="sm"
                  class="px-4 py-1 mx-1"
                >
                  PDF
                </CButton>
                <CButton
                  key="filter"
                  shape="pill"
                  color="primary"
                  size="sm"
                  class="px-4 py-1 mx-1"
                >
                  Excel
                </CButton>
                <CButton
                  key="filter"
                  shape="pill"
                  color="primary"
                  size="sm"
                  class="px-4 py-1 mx-1"
                >
                  CSV
                </CButton>
                <CButton
                  key="filter"
                  shape="pill"
                  color="primary"
                  size="sm"
                  class="px-4 py-1 mx-1"
                >
                  Copy
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              class="mb-0 custom-table"
              hover
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
              :items-per-page="5"
              sorter
            >
              <td slot="avatar" class="text-center" slot-scope="{item}">
                <div class="c-avatar">
                  <img :src="item.avatar.url" class="c-avatar-img" alt="">
                  <span
                    class="c-avatar-status"
                    :class="`bg-${item.avatar.status || 'secondary'}`"
                  ></span>
                </div>
              </td>
              <td slot="user" slot-scope="{item}">
                <div>{{item.user.name}}</div>
                <!-- <div class="small text-muted">
                  <span>
                    <template v-if="item.user.new">New</template>
                    <template v-else>Recurring</template>
                  </span> | Registered: {{item.user.registered}}
                </div> -->
              </td>
              <td
                slot="country"
                slot-scope="{item}"
                class="text-center"
              >
                <CIcon
                  :name="item.country.flag"
                  height="25"
                />
              </td>
              <td slot="usage" slot-scope="{item}">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{item.usage.value}}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{item.usage.period}}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.usage.value"
                  :color="color(item.usage.value)"
                />
              </td>
              <td
                slot="payment"
                slot-scope="{item}"
                class="text-center"
              >
                <CIcon
                  :name="item.payment.icon"
                  height="25"
                />
              </td>
              <!-- <td slot="activity" slot-scope="{item}">
                <div class="small text-muted">Last login</div>
                <strong>{{item.activity}}</strong>
              </td> -->
              <td slot="activity" slot-scope="{item}">
                Batafsil
              </td>
            </CDataTable>
            <div class="d-flex justify-content-end">
              <CPagination
                v-show="2"
                :activePage.sync="page"
                :pages="4"
                v-bind="true"
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
  </div>
</template>

<script>
import MainChartExample from './charts/MainChartExample'
import WidgetsDashboard from './widgets/WidgetsDashboard'
import WidgetsBrand from './widgets/WidgetsBrand'
export default {
  name: 'Dashboard',
  components: {
    MainChartExample,
    WidgetsDashboard,
    WidgetsBrand
  },
  data () {
    return {
      selected: 'Month',
      tableItems: [
        {
          id: 1,
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          category: 'Maishiy chiqindi',
          desc: 'Musor serg',
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'cif-us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'cib-cc-mastercard' },
          activity: '10 sec ago',
          created_at: '27.11.2019 16:26:02',
          from: 'Kanselariya',
          status: 'Ko\'rib chiqilmoqda'
        },
        {
          id: 1,
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          category: 'Maishiy chiqindi',
          desc: 'Musor serg',
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'cif-br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'cib-cc-visa' },
          activity: '5 minutes ago',
          created_at: '27.11.2019 16:26:02',
          from: 'Hokim yordamchisi',
          status: 'Yangi'
        },
        {
          id: 1,
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          category: 'Maishiy chiqindi',
          desc: 'Musor serg',
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'cif-in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'cib-stripe' },
          activity: '1 hour ago',
          created_at: '27.11.2019 16:26:02',
          from: 'Kanselariya',
          status: 'Ko\'rib chiqilmoqda'
        },
        {
          id: 1,
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          category: 'Maishiy chiqindi',
          desc: 'Musor serg',
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'cif-fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'cib-paypal' },
          activity: 'Last month',
          created_at: '27.11.2019 16:26:02',
          from: 'Hokim yordamchisi',
          status: 'Yangi'
        },
        {
          id: 1,
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          category: 'Maishiy chiqindi',
          desc: 'Musor serg',
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'cif-es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'cib-google-pay' },
          activity: 'Last week',
          created_at: '27.11.2019 16:26:02',
          from: 'Kanselariya',
          status: 'Yangi'
        },
        {
          id: 1,
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          category: 'Maishiy chiqindi',
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'cif-pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'cib-cc-amex' },
          activity: 'Last week',
          created_at: '27.11.2019 16:26:02',
          from: 'Hokim yordamchisi',
          status: 'Ko\'rib chiqilmoqda'
        }
      ],
      tableFields: [
        { key: 'id', label: 'Raqam', _classes: 'text-center' },
        //{ key: 'avatar', label: '', _classes: 'text-center' },
        { key: 'category', label: 'Kategoriya' },
        { key: 'desc', label: 'Qisqacha mazmun'},
        //{ key: 'country', _classes: 'text-center' },
        { key: 'user', label: 'Murijatchi'},
        { key: 'created_at', label: 'Murijat sanasi'},
        { key: 'from', label: 'Kimdan'},
        // { key: 'payment', label: 'Payment method', _classes: 'text-center' },
        { key: 'status', label: 'Xolat' },
        { key: 'activity' },
      ],
      page: 2,
      showFilter: false
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
