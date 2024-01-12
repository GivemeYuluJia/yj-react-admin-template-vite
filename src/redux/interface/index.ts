/* themeConfigProp */
export interface ThemeConfigProp {
  primary: string;
  isDark: boolean;
  weakOrGray: string;
  breadcrumb: boolean;
  tabs: boolean;
  footer: boolean;
}
/* GlobalState */
export interface GlobalState {
  token: string;
  userInfo: any;
  assemblySize: any;
  language: string;
  themeConfig: ThemeConfigProp;
}
