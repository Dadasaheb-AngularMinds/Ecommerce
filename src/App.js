import React from 'react';
import AdminLayout from './layouts/AdminLayout';
import Login from './components/Login';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import AppLayout from './layouts';
import Welcome from './layouts/Welcome';
import RequireAuth from './components/Auth';
import Dashboard from './pages/Dashboard';
import UserLayout from './layouts/UserLayout';
import Register from './components/Register';

function App() {
  console.log('app');
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* <Route element={<RequireAuth />}></Route> */}
        {/* Protected Routes */}
        {/* <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>

                <Route index element={<Welcome />} />

                <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}>
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
        </Route>
        End Protected Routes */}
      </Route>
    </Routes>
  );
}

export default App;
