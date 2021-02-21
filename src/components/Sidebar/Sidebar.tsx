/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.tsx";
// import UserDropdown from "components/Dropdowns/UserDropdown.tsx";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("show");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          {/* <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button> */}
          {/* Brand */}
          <div className="flex items-center w-56">
            <div className="flex w-14 h-14">
              <img className="" src="https://cdn.discordapp.com/attachments/798894344962441267/812754976102285322/pngaaa.com-864976.png" alt="foto profile" />
            </div>
            <div className="flex-row justify-center ml-2 py-4">
              <Link
                className="md:block text-left md:pb-2 text-gray-700 whitespace-nowrap text-base  font-bold"
                to="/profile"
              >
                Ican Natawijaya
          </Link>
              <Link
                className="md:block text-left md:pb-2 text-gray-700 whitespace-nowrap text-xs font-normal"
                to="/profile"
              >
                Admin
          </Link>
            </div>
          </div>

          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Notus React
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="mb-2 md:min-w-full" />
         
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {/* <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li> */}

              <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li> 

              <li className="items-center py-3 ">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/pengeluaran") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/pengeluaran"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/pengeluaran") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Pengeluaran
                </Link>
              </li>

              <li className="items-center py-3 ">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/absensi") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/absensi"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/absensi") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Absensi
                </Link>
              </li>

              {/* <li className="items-center py-3 ">
                <Link
                  className={
                    "text-xs font-normal" +
                    (window.location.href.indexOf("/admin/absensi") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/absensi"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/absensi") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Absensi
                </Link>
              </li> */}

              <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/notifikasi") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/notifikasi"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/notifikasi") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Notifikasi
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/laporan") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/laporan"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/laporan") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Laporan
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/driver") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/driver"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/driver") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Driver
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/pic") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/pic"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/pic") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  PIC
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/superpic") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/superpic"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/superpic") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Super PIC
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/admin") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/admin"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/admin") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Admin
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/superAdmin") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/superAdmin"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/superAdmin") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Super Admin
                </Link>
              </li>

              <li className="items-center py-3">
                <Link
                  className={
                    "text-xs font-normal " +
                    (window.location.href.indexOf("/admin/logout") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/admin/logout"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/logout") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Logout
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
