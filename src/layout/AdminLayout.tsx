import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderStats from '../components/headers/HeaderStats'

// dashboard
import Dashboard from "../views/admin/dashboard/Dashboard";

// pengeluaran
import Pengeluaran from "../views/admin/pengeluaran/Pengeluaran";

// absensi
import Absensi from "../views/admin/absensi/Absensi";

// notifikasi
import Notifikasi from "../views/admin/notifikasi/Notifikasi";

// laporan
import Laporan from "../views/admin/laporan/Laporan";

// driver
import Driver from "../views/admin/driver/Driver";
import DriverText from '../views/admin/driver/driverComponent/driverTableComponent/DriverText'
import DriverMessage from '../views/admin/driver/driverComponent/driverTableComponent/DriverMessage'

// pic
import Pic from "../views/admin/pic/Pic";
import PicText from "../views/admin/pic/picComponent/picTableComponent/PicText";
import PicMessage from "../views/admin/pic/picComponent/picTableComponent/PicMessage";

// superpic
import Superpic from "../views/admin/superpic/Superpic";
import SuperpicText from "../views/admin/superpic/superpicComponent/superPicTableComponent/SuperPicText";
import SuperpicMessage from "../views/admin/superpic/superpicComponent/superPicTableComponent/SuperPicMessage";

// admin
import Admin from "../views/admin/admin/Admin";

// super admin
import SuperAdmin from "../views/admin/superAdmin/SuperAdmin";

// profile
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

        <div className="px-4 md:px-10 mx-auto w-full mt-6">
          <div className="flex items-center mb-5">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.776855 6.66667H6.08316V0H0.776855V6.66667ZM0.776855 12H6.08316V8H0.776855V12ZM7.40974 12H12.716V5.33333H7.40974V12ZM7.40974 0V4H12.716V0H7.40974Z" fill="#0036A0" />
            </svg>
            <h1 className="ml-3 text-blue-700 text-xs "> {(window.location.href.indexOf("/admin/dashboard") !== -1 ? "Dashboard" : "Dashboard / " + window.location.href.slice(28)).split('/').join(' / ')}</h1>
          </div>

          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/pengeluaran" exact component={Pengeluaran} />
            <Route path="/admin/absensi" exact component={Absensi} />
            <Route path="/admin/notifikasi" exact component={Notifikasi} />
            <Route path="/admin/laporan" exact component={Laporan} />
            
            {/*route driver*/}
            <Route path="/admin/driver" exact component={Driver} />
            <Route path="/admin/driver/driver-text/:id" component={DriverText} />
            <Route path="/admin/driver/driver-message/:id" component={DriverMessage} />

            {/*route PIC*/}
            <Route path="/admin/pic" exact component={Pic} />
            <Route path="/admin/pic/pic-text/:id" exact component={PicText} />
            <Route path="/admin/pic/pic-message/:id" exact component={PicMessage} />
            

            {/*route super Pic*/}
            <Route path="/admin/superpic" exact component={Superpic} />
            <Route path="/admin/superpic/superpic-text/:id" exact component={SuperpicText} />
            <Route path="/admin/superpic/superpic-message/:id" exact component={SuperpicMessage} />
            
            <Route path="/admin/admin" exact component={Admin} />
            
            <Route path="/admin/superAdmin" exact component={SuperAdmin} />
            
            {/*route profile */}
            <Route path="/admin/profile" exact component={Profile} />
            <Route path="/admin/profile/ganti-password" exact component={OldPassword} />
            <Route path="/admin/profile/new-password" exact component={NewPassword} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>

        </div>
      </div>
    </>
  );
}
