import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from '../components/headers/HeaderStats'

// views

import Dashboard from "../views/admin/dashboard/Dashboard";
import Pengeluaran from "../views/admin/pengeluaran/Pengeluaran";
import Absensi from "../views/admin/absensi/Absensi";
import Notifikasi from "../views/admin/notifikasi/Notifikasi";
import Laporan from "../views/admin/Laporan";
import Driver from "../views/admin/Driver";
import Pic from "../views/admin/Pic";
import Superpic from "../views/admin/Superpic";
import Admin from "../views/admin/Admin";
import SuperAdmin from "../views/admin/SuperAdmin";
import Profile from "../views/admin/profile/Profile";

import OldPassword from "../views/admin/profile/profileComponents/profileSubCard/OldPassword";
import NewPassword from "../views/admin/profile/profileComponents/profileSubCard/NewPassword";


export default function AdminLayout() {

  return (
    <>
      <Sidebar />
      <div className="md:ml-64 h-full pb-10 bg-gray-100">
        {/* header */}
        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full mt-5">
          <h1 className="mb-5 text-blue-700 text-xs "> {(window.location.href.indexOf("/admin/dashboard") !== -1 ? "Dashboard" : "Dashboard/" + window.location.href.slice(28))}</h1>

          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/pengeluaran" exact component={Pengeluaran} />
            <Route path="/admin/absensi" exact component={Absensi} />
            <Route path="/admin/notifikasi" exact component={Notifikasi} />
            <Route path="/admin/laporan" exact component={Laporan} />
            <Route path="/admin/driver" exact component={Driver} />
            <Route path="/admin/pic" exact component={Pic} />
            <Route path="/admin/superpic" exact component={Superpic} />
            <Route path="/admin/admin" exact component={Admin} />
            <Route path="/admin/superAdmin" exact component={SuperAdmin} />
            <Route path="/admin/profile" exact component={Profile} />
            <Route path="/admin/profile/ganti-password" exact >
              <div className="w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3">
                <OldPassword />
              </div>
            </Route>
            <Route path="/admin/profile/new-password" exact >
              <div className="w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3">
                <NewPassword />
              </div>
            </Route>
            {/* <Redirect from="/admin" to="/admin/dashboard" /> */}
          </Switch>

        </div>
      </div>
    </>
  );
}
