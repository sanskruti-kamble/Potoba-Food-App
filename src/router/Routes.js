import { Route, Routes } from "react-router-dom";
import RoutingPaths from "../utility/RoutingPaths";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export default function Router() {
  return (
    <Routes>
      <Route index exact path={RoutingPaths.INDEX} element={<Landing />} />
      <Route exact path={RoutingPaths.DASHBOARD} element={<Dashboard />} />
      <Route exact path={RoutingPaths.LOGIN} element={<Login/>}/>
    </Routes>
  );
}
