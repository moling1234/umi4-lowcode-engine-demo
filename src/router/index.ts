/*
 * @Author: moling
 * @Date: 2022-06-22 10:56:03
 * @LastEditTime: 2022-06-23 14:26:44
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /lowcode-collection/cms-lowcode-engine/cms-lowcode-engine-client/src/router/index.ts
 */
const router: any[] = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    name: '首页',
    path: '/index',
    component: './Index',
  },
]

export default router;
