
import AgencyLayout from "./AgencyLayout";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <AgencyLayout>
      <Outlet />
    </AgencyLayout>
  );
};

export default Layout;
