import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { setToken } from "@/redux/modules/global/slice";
import "./index.less";

const LoginForm = (props: any) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="login-form-container"
      name="login-form"
      form={form}
      labelCol={{ span: 5 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      autoComplete="off"
    >
      <Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
        <Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
        <Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item className="login-btn-wrapper">
        <Button
          onClick={() => {
            form.resetFields();
          }}
          icon={<CloseCircleOutlined />}
        >
          {t("login.reset")}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
          {t("login.confirm")}
        </Button>
      </Form.Item>
    </Form>
  );
};
const mapDispatchToProps = { setToken };
export default React.memo(connect(null, mapDispatchToProps)(LoginForm));
