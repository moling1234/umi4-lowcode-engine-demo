// 运行时配置
import type {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';

export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings; routeData: any; adminInfo: any };
}): BasicLayoutProps => {
  return {
    ...initialState?.settings,
    // 自定义头内容
    // headerContentRender: false, // 全局的环境切换
    // 不展示头部标题
    // headerTitleRender: false, // 取消默认字体
    // 不展示顶栏
    headerRender: false,
    // 不展示页脚
    footerRender: false,
    // 不展示菜单
    menuRender: false,
    // 不展示菜单顶栏
    menuHeaderRender: false,
  };
};
