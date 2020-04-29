export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Barcha murojatlar',
        to: '/dashboard',
        icon: 'broadcast',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Statistika',
        to: '/statistics',
        icon: 'statistics',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Sergeli xaritasi',
        to: '/map',
        icon: 'map',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Foydalanuvchilar',
        to: '/users',
        icon: 'user_outline',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Eksportyor',
        to: '/exporters',
        icon: 'exports',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Investor',
        to: '/investors',
        icon: 'income',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Soliq va tushum',
        to: '/income',
        icon: 'money',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Rovd',
        to: '/rovd',
        icon: 'rovd',
      }
    ]
  }
]