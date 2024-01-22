import React from "react";
import cx from "classnames";
import { Switch } from "antd";
import { connect } from "react-redux";
import { setThemeConfig } from "@/redux/modules/global/slice";

const SwitchTheme = (props: any) => {
  const { setThemeConfig, themeConfig, className } = props;
  const onChange = (checked: boolean) => {
    setThemeConfig({ ...themeConfig, isDark: checked });
  };
  return (
    <Switch
      className={cx("theme-switch-box", className)}
      defaultChecked={themeConfig.isDark}
      checkedChildren={<>🌞</>}
      unCheckedChildren={<>🌜</>}
      onChange={onChange}
    />
  );
};
const mapStateToProps = (state: any) => ({ themeConfig: state.global.themeConfig });
const mapDispatchToProps = {
  setThemeConfig
};
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(SwitchTheme));
