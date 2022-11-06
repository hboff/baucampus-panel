/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout';

const componentRoutes = {
  path: '/components',
  component: Layout,
  redirect: 'noredirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Konto',
    icon: 'user',
    permissions: ['view menu components'],
  },
  children: [
    {
      path: 'avatar-upload',
      component: () => import('@/views/components-demo/AvatarUpload'),
      name: 'AvatarUploadDemo',
      meta: { title: 'avatarUpload' },
    },
    {
      path: 'dropzone',
      component: () => import('@/views/components-demo/Dropzone'),
      name: 'DropzoneDemo',
      meta: { title: 'dropzone' },
    },
    {
      path: 'edit',
      component: () => import('@/views/users/SelfProfile'),
      name: 'SelfProfile',
      meta: { title: 'Konto', noCache: true },
    },
  ],
};

export default componentRoutes;
