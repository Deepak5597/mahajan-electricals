export class SidebarConfig{

  sidenavItems:any[] = [
    {
      heading: "Home",
      iconClass: "fa fa-home",
      hasChildNav: false,
      routingPath: ''
    },
    {
      heading: "Parties",
      iconClass: "fas fa-users",
      hasChildNav: true,
      routingPath: '',
      childNavItems: [
        {
          heading: "Cash",
          routingPath: ''
        },
        {
          heading: "Borrow",
          routingPath: ''
        }
      ]
    },
    {
      heading: "Items",
      iconClass: "fas fa-sitemap",  
      hasChildNav: false,
      routingPath: ''
    },
    {
      heading: "Sale",
      iconClass: "fas fa-dollar-sign",
      hasChildNav: false,
      routingPath: ''
    },
    {
      heading: "Purchase",
      iconClass: "fas fa-shopping-cart",
      hasChildNav: false,
      routingPath: ''
    },
    {
      heading: "Expenses",
      iconClass: "fas fa-wallet",
      hasChildNav: false,
      routingPath: ''
    },
    {
      heading: "Reports",
      iconClass: "fa fa-file",
      hasChildNav: false,
      routingPath: ''
    },
    {
      heading: "Settings",
      iconClass: "fa fa-cog",
      hasChildNav: false,
      routingPath: ''
    }
  ]

}