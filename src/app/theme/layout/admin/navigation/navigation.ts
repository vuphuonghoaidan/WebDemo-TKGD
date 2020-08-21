import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {

    id: 'dashboard',
    title: 'Classroom Management',
    type: 'item',
    url: '/dashboard/default',
    classes: 'nav-item',
    icon: 'feather icon-book'
    
    // id: 'product-and-services',
    // title: 'Product and services',
    // type: 'group',
    // icon: 'feather icon-monitor',
    // children: [
    //   {
    //     id: 'dashboard',
    //     title: 'Dashboard',
    //     type: 'item',
    //     url: '/dashboard/default',
    //     classes: 'nav-item',
    //     icon: 'feather icon-home'
        // id: 'navigation',
        // title: 'Navigation',
        // type: 'group',
        // icon: 'feather icon-monitor',
        // children: [
        //   {
        //     id: 'dashboard',
        //     title: 'Dashboard',
        //     type: 'item',
        //     url: '/dashboard/default',
        //     classes: 'nav-item',
        //     icon: 'feather icon-home'
        //   },
        // {
        //   id: 'page-layouts',
        //   title: 'Page Layouts',
        //   type: 'collapse',
        //   icon: 'feather icon-layout',
        //   children: [
        //     {
        //       id: 'vertical',
        //       title: 'Vertical',
        //       type: 'item',
        //       url: '/layout/static',
        //       target: true
        //     },
        //     {
        //       id: 'horizontal',
        //       title: 'Horizontal',
        //       type: 'item',
        //       url: '/layout/horizontal',
        //       target: true
        //     }
        //   ]
    //   },
    //   {
    //     id: 'accountinformation',
    //     title: 'Account Information',
    //     type: 'item',
    //     url: '/accountinformation',
    //     classes: 'nav-item',
    //     icon: 'feather icon-file-text'
    //   },
    //   {
    //     id: 'recipientlist',
    //     title: 'Recipient list',
    //     type: 'item',
    //     url: '/recipientlist',
    //     classes: 'nav-item',
    //     icon: 'feather icon-list'
    //   },
    //   {
    //     id: 'transfer',
    //     title: 'Transfer',
    //     type: 'collapse',
    //     icon: 'fa fa-hand-holding-usd',
    //     children: [
    //       {
    //         id: 'internal-transfer',
    //         title: 'Intra-bank transfer',
    //         type: 'item',
    //         url: '/transfer/internal'
    //       },
    //       {
    //         id: 'interbank-transfer',
    //         title: 'Inter-bank transfer',
    //         type: 'item',
    //         url: '/transfer/interbank'
    //       }
    //     ]
    //   },
    //   {
    //     id: 'debt-reminder-management',
    //     title: 'Debt reminder management',
    //     type: 'item',
    //     url: '/debt-reminder-management',
    //     classes: 'nav-item',
    //     icon: 'feather icon-bell'
    //   },
    //   {
    //     id: 'transaction-history',
    //     title: 'Transaction history',
    //     type: 'item',
    //     url: '/transaction-history',
    //     classes: 'nav-item',
    //     icon: 'feather icon-clock'
    //   }
    // ]
  },
  // {
  //   id: 'ui-element',
  //   title: 'UI ELEMENT',
  //   type: 'group',
  //   icon: 'feather icon-layers',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Basic',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'alert',
  //           title: 'Alert',
  //           type: 'item',
  //           url: '/basic/alert'
  //         },
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/basic/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/basic/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumbs & Pagination',
  //           type: 'item',
  //           url: '/basic/breadcrumb-paging'
  //         },
  //         {
  //           id: 'cards',
  //           title: 'Cards',
  //           type: 'item',
  //           url: '/basic/cards'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/basic/collapse'
  //         },
  //         {
  //           id: 'carousel',
  //           title: 'Carousel',
  //           type: 'item',
  //           url: '/basic/carousel'
  //         },
  //         {
  //           id: 'grid-system',
  //           title: 'Grid System',
  //           type: 'item',
  //           url: '/basic/grid-system'
  //         },
  //         {
  //           id: 'progress',
  //           title: 'Progress',
  //           type: 'item',
  //           url: '/basic/progress'
  //         },
  //         {
  //           id: 'modal',
  //           title: 'Modal',
  //           type: 'item',
  //           url: '/basic/modal'
  //         },
  //         {
  //           id: 'spinner',
  //           title: 'Spinner',
  //           type: 'item',
  //           url: '/basic/spinner'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/basic/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/basic/typography'
  //         },
  //         {
  //           id: 'tooltip-popovers',
  //           title: 'Tooltip & Popovers',
  //           type: 'item',
  //           url: '/basic/tooltip-popovers'
  //         },
  //         {
  //           id: 'toasts',
  //           title: 'Toasts',
  //           type: 'item',
  //           url: '/basic/toasts'
  //         },
  //         {
  //           id: 'other',
  //           title: 'Other',
  //           type: 'item',
  //           url: '/basic/other'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'forms',
  //   title: 'Forms & Table',
  //   type: 'group',
  //   icon: 'feather icon-layout',
  //   children: [
  //     {
  //       id: 'forms-element',
  //       title: 'Forms',
  //       type: 'item',
  //       url: '/forms/basic',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-text'
  //     },
  //     {
  //       id: 'bootstrap',
  //       title: 'Bootstrap',
  //       type: 'item',
  //       url: '/tbl-bootstrap/bt-basic',
  //       classes: 'nav-item',
  //       icon: 'feather icon-server'
  //     }
  //   ]
  // },
  // {
  //   id: 'chart-maps',
  //   title: 'Chart & Maps',
  //   type: 'group',
  //   icon: 'feather icon-pie-chart',
  //   children: [
  //     {
  //       id: 'charts',
  //       title: 'Charts',
  //       type: 'item',
  //       url: '/charts/apex',
  //       classes: 'nav-item',
  //       icon: 'feather icon-pie-chart'
  //     },
  //     {
  //       id: 'maps',
  //       title: 'Maps',
  //       type: 'item',
  //       url: '/maps/google',
  //       classes: 'nav-item',
  //       icon: 'feather icon-map'
  //     }
  //   ]
  // },
  // {
  //   id: 'pages',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'feather icon-file-text',
  //   children: [
  //     {
  //       id: 'auth',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'feather icon-lock',
  //       children: [
  //         {
  //           id: 'signup',
  //           title: 'Sign up',
  //           type: 'item',
  //           url: '/auth/signup',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'signin',
  //           title: 'Sign in',
  //           type: 'item',
  //           url: '/auth/signin',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     },
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     }
  //   ]
  // },
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
