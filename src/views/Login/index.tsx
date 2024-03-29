import LoginForm from "./components/LoginForm";
import SwitchTheme from "@/components/SwitchTheme";
import logo from "@/assets/images/logo.png";
import "./index.less";
const Login = () => {
  return (
    <div className="login-container">
      <SwitchTheme className="theme-switch" />
      <div className="login-box">
        <div className="login-left">{/* <img src={loginLeft} alt="login" /> */}</div>
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src={logo} alt="logo" />
            <span className="logo-text">Admin</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
