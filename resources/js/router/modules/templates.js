/** When your routing table is too long, you can split it into small modules**/
import Layout from '@/layout';

const templateRoutes = {
  path: '/excel',
  component: Layout,
  redirect: '/excel/export-excel',
  name: 'Vorlagen',
  meta: {
    title: 'Vorlagen',
    icon: 'documentation',
    permissions: ['view menu excel'],
  },
  children: [
    {
      path: '/excel',
      component: Layout,
      redirect: '/excel/export-excel',
      name: 'Excel',
      meta: {
        title: 'excel',
        icon: 'excel',
        permissions: ['view menu excel'],
      },
      children: [
        {
          path: 'export-excel',
          component: () => import('@/views/excel/ExportExcel'),
          name: 'exportExcel',
          meta: { title: 'exportExcel' },
        },
        {
          path: 'export-selected-excel',
          component: () => import('@/views/excel/SelectExcel'),
          name: 'SelectExcel',
          meta: { title: 'selectExcel' },
        },
      ],
    },
    {
      path: '/zip',
      component: Layout,
      redirect: '/zip/download',
      alwaysShow: true,
      meta: { title: 'zip', icon: 'zip', permissions: ['view menu zip'] },
      children: [
        {
          path: 'download',
          component: () => import('@/views/zip'),
          name: 'ExportZip',
          meta: { title: 'exportZip' },
        },
      ],
    },
    {
      path: '/pdf',
      component: Layout,
      redirect: '/pdf/index',
      meta: { title: 'pdf', icon: 'pdf', permissions: ['view menu pdf'] },
      children: [
        {
          path: 'index',
          component: () => import('@/views/pdf'),
          name: 'Pdf',
          meta: { title: 'pdf' },
        },
      ],
    },
  ],
};

export default templateRoutes;
