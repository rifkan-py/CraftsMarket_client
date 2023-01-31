import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import ManageOrders from "./ManageOrders";
import ManageProducts from "./ManageProducts";
import ManageUsers from "./ManageUsers";
import {
  DashboardLabel,
  DashboardWrapper,
  Logout,
  MainContent,
  Sidebar,
  SidebarLinks,
} from "./styles";
import TopSelling from "./TopSelling";
import UserService from "../../services/UserService";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Routes>
        <Route path="/" element={<DashboardNavbar />}>
          <Route path="/orders" element={<ManageOrders />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/manage-products" element={<ManageProducts />} />
          <Route path="/top-selling-products" element={<TopSelling />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </DashboardWrapper>
  );
};

const DashboardNavbar = () => {
  const handleLogout = async (e) => {
    e.preventDefault();
    await UserService.logout();
    window.location.href = "/";
  };
  return (
    <>
      <Sidebar>
        <SidebarLinks>
          <DashboardLabel>Dashboard</DashboardLabel>
          <Link to="/dashboard/orders">Orders</Link>
          <Link to="/dashboard/users">Manage Users</Link>
          <Link to="/dashboard/manage-products">Manage Products</Link>
          <Link to="/dashboard/top-selling-products">Top Selling Products</Link>
          <Link to="/dashboard/customer">Customer Activity</Link>
          <Link to="/dashboard/performance">Sales Performance</Link>
          <Link to="/dashboard/feedbacks">Customer Feedbacks</Link>
        </SidebarLinks>
        <Logout>
          <a style={{ color: "white" }} href="#" onClick={handleLogout}>
            Logout
          </a>
        </Logout>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default Dashboard;
