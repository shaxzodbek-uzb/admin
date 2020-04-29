
const Colors = () => import('@/views/uikit/theme/Colors')
const Typography = () => import('@/views/uikit/theme/Typography')

const Charts = () => import('@/views/uikit/charts/Charts')
const Widgets = () => import('@/views/widgets/Widgets')

// Views - Components
const Cards = () => import('@/views/uikit/base/Cards')
const Forms = () => import('@/views/uikit/base/Forms')
const Switches = () => import('@/views/uikit/base/Switches')
const Tables = () => import('@/views/uikit/base/Tables')
const Tabs = () => import('@/views/uikit/base/Tabs')
const Breadcrumbs = () => import('@/views/uikit/base/Breadcrumbs')
const Carousels = () => import('@/views/uikit/base/Carousels')
const Collapses = () => import('@/views/uikit/base/Collapses')
const Jumbotrons = () => import('@/views/uikit/base/Jumbotrons')
const ListGroups = () => import('@/views/uikit/base/ListGroups')
const Navs = () => import('@/views/uikit/base/Navs')
const Navbars = () => import('@/views/uikit/base/Navbars')
const Paginations = () => import('@/views/uikit/base/Paginations')
const Popovers = () => import('@/views/uikit/base/Popovers')
const ProgressBars = () => import('@/views/uikit/base/ProgressBars')
const Tooltips = () => import('@/views/uikit/base/Tooltips')

// Views - Buttons
const StandardButtons = () => import('@/views/uikit/buttons/StandardButtons')
const ButtonGroups = () => import('@/views/uikit/buttons/ButtonGroups')
const Dropdowns = () => import('@/views/uikit/buttons/Dropdowns')
const BrandButtons = () => import('@/views/uikit/buttons/BrandButtons')

// Views - Icons
const CoreUIIcons = () => import('@/views/uikit/icons/CoreUIIcons')
const Brands = () => import('@/views/uikit/icons/Brands')
const Flags = () => import('@/views/uikit/icons/Flags')

// Views - Notifications
const Alerts = () => import('@/views/uikit/notifications/Alerts')
const Badges = () => import('@/views/uikit/notifications/Badges')
const Modals = () => import('@/views/uikit/notifications/Modals')
export default [
    {
        path: 'charts',
        name: 'Charts',
        component: Charts
    },
    {
        path: 'widgets',
        name: 'Widgets',
        component: Widgets
    },
    {
        path: 'base',
        redirect: '/base/cards',
        name: 'Base',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: 'cards',
            name: 'Cards',
            component: Cards
          },
          {
            path: 'forms',
            name: 'Forms',
            component: Forms
          },
          {
            path: 'switches',
            name: 'Switches',
            component: Switches
          },
          {
            path: 'tables',
            name: 'Tables',
            component: Tables
          },
          {
            path: 'tabs',
            name: 'Tabs',
            component: Tabs
          },
          {
            path: 'breadcrumbs',
            name: 'Breadcrumbs',
            component: Breadcrumbs
          },
          {
            path: 'carousels',
            name: 'Carousels',
            component: Carousels
          },
          {
            path: 'collapses',
            name: 'Collapses',
            component: Collapses
          },
          {
            path: 'jumbotrons',
            name: 'Jumbotrons',
            component: Jumbotrons
          },
          {
            path: 'list-groups',
            name: 'List Groups',
            component: ListGroups
          },
          {
            path: 'navs',
            name: 'Navs',
            component: Navs
          },
          {
            path: 'navbars',
            name: 'Navbars',
            component: Navbars
          },
          {
            path: 'paginations',
            name: 'Paginations',
            component: Paginations
          },
          {
            path: 'popovers',
            name: 'Popovers',
            component: Popovers
          },
          {
            path: 'progress-bars',
            name: 'Progress Bars',
            component: ProgressBars
          },
          {
            path: 'tooltips',
            name: 'Tooltips',
            component: Tooltips
          }
        ]
      },
      {
        path: 'buttons',
        redirect: '/buttons/standard-buttons',
        name: 'Buttons',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: 'standard-buttons',
            name: 'Standard Buttons',
            component: StandardButtons
          },
          {
            path: 'button-groups',
            name: 'Button Groups',
            component: ButtonGroups
          },
          {
            path: 'dropdowns',
            name: 'Dropdowns',
            component: Dropdowns
          },
          {
            path: 'brand-buttons',
            name: 'Brand Buttons',
            component: BrandButtons
          }
        ]
      },
      {
        path: 'icons',
        redirect: '/icons/coreui-icons',
        name: 'CoreUI Icons',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: 'coreui-icons',
            name: 'Icons library',
            component: CoreUIIcons
          },
          {
            path: 'brands',
            name: 'Brands',
            component: Brands
          },
          {
            path: 'flags',
            name: 'Flags',
            component: Flags
          }
        ]
      },
      {
        path: 'notifications',
        redirect: '/notifications/alerts',
        name: 'Notifications',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: 'alerts',
            name: 'Alerts',
            component: Alerts
          },
          {
            path: 'badges',
            name: 'Badges',
            component: Badges
          },
          {
            path: 'modals',
            name: 'Modals',
            component: Modals
          }
        ]
      },
      {
        path: 'theme',
        redirect: '/theme/colors',
        name: 'Theme',
        component: {
          render (c) { return c('router-view') }
        },
        children: [
          {
            path: 'colors',
            name: 'Colors',
            component: Colors
          },
          {
            path: 'typography',
            name: 'Typography',
            component: Typography
          }
        ]
      }
    ]