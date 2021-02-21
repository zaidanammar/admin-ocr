import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "../views/admin/Dashboard";
import Pengeluaran from "../views/admin/Pengeluaran";
import Absensi from "../views/admin/Absensi";
import Notifikasi from "../views/admin/Notifikasi";
import Laporan from "../views/admin/Laporan";
import Driver from "../views/admin/Driver";
import Pic from "../views/admin/Pic";
import Superpic from "../views/admin/Superpic";
import Admin from "../views/admin/Admin";
import SuperAdmin from "../views/admin/SuperAdmin";
import Profile from "../views/admin/Profile";
// import Maps from "views/admin/Maps.js";
// import Settings from "views/admin/Settings.js";
// import Tables from "views/admin/Tables.js";

export default function AdminLayout() {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64 bg-green-200">
 
        {/* <div className="mx-auto w-full bg-yellow-600"> */}
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
            {/* <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} /> */}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
     
        </div>
      {/* </div> */}
    </>
  );
}
