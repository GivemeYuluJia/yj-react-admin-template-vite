import { HashRouter } from "react-router-dom";
import AuthRouter from "@/routers/AuthRouter";
import Router from "@/routers/index";
const App = () => {
  return (
    <HashRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </HashRouter>
  );
};

export default App;
