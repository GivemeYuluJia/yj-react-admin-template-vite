import { Outlet } from "react-router-dom";

const LayoutIndex = () => {
  return (
    <div>
      <div>sider</div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutIndex;
