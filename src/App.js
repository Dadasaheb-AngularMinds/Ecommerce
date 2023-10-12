import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import { lazy } from "react";
import Loadable from "./components/Loadable";
import "react-toastify/dist/ReactToastify.css";
import SessionTimeout from "./components/User/SessionTimeout.js";
const AdminLayout = Loadable(lazy(() => import("./layouts/AdminLayout")));
const Login = Loadable(lazy(() => import("./components/Auth/Login")));
const AppLayout = Loadable(lazy(() => import("./layouts")));
const Welcome = Loadable(lazy(() => import("./layouts/Welcome")));
const RequireAuth = Loadable(lazy(() => import("./components/Auth")));
const UserLayout = Loadable(lazy(() => import("./layouts/UserLayout")));
const Register = Loadable(lazy(() => import("./components/Auth/Register")));
const AddProduct = Loadable(lazy(() => import("./pages/Admin/AddProduct")));
const UserDashboard = Loadable(lazy(() => import("./pages/User/Dashboard")));
const ProductView = Loadable(lazy(() => import("./components/User/Product")));
const Cart = Loadable(lazy(() => import("./pages/User/Cart")));
const UserProfile = Loadable(lazy(() => import("./pages/User/Profile")));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Welcome />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="session-timeout" element={<SessionTimeout />} />
        <Route element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="product" element={<ProductView />} />
          <Route element={<RequireAuth />}>
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add-product" element={<AddProduct />} />
        </Route>

        {/* Protected Routes */}
        {/* <Route element={<PersistLogin />}>
        <Route
          element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}
        >
          <Route element={<Prefetch />}>
            <Route path="dash" element={<DashLayout />}>
              <Route index element={<Welcome />} />

              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />
                }
              >
                <Route path="users">
                  <Route index element={<UsersList />} />
                  <Route path=":id" element={<EditUser />} />
                  <Route path="new" element={<NewUserForm />} />
                </Route>
              </Route>

              <Route path="notes">
                <Route index element={<NotesList />} />
                <Route path=":id" element={<EditNote />} />
                <Route path="new" element={<NewNote />} />
              </Route>
            </Route>
            End Dash
          </Route>
        </Route>
      </Route> */}
        {/* End Protected Routes */}
      </Route>
    </Routes>
  );
}

export default App;
