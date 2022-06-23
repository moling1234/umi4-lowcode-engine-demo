/*
 * @Author: moling
 * @Date: 2022-06-22 14:02:18
 * @LastEditTime: 2022-06-23 11:13:34
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /lowcode-collection/cms-lowcode-engine/cms-lowcode-engine-client/config/layoutSettings.ts
 */
import type { Settings as LayoutSettings, BasicLayoutProps, HeaderProps } from '@ant-design/pro-layout';

const layoutSettings: LayoutSettings & BasicLayoutProps & HeaderProps & {
  pwa?: boolean;
  logo?: string;
} = {
  locale: undefined,
  // siderWidth: 208,
  // layout: 'mix',
  // navTheme: 'light',
  // title: false,
  // logo: 'https://cmspro-test.diezhi.net/static/logo.f9ac036f.png',
  // fixedHeader: false,
  // fixSiderbar: true,
  // 此处配置无效，在 src/app/layout 配置
  // 不展示顶栏
  headerRender: false,
  // 不展示页脚
  footerRender: false,
  // 不展示菜单
  menuRender: false,
  // 不展示菜单顶栏
  menuHeaderRender: false,
  pwa: false,
};

export default layoutSettings;
