import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export default function ProfileCard() {
  const history = useHistory()
  const { url } = useRouteMatch()

  const handlePassword = () => {
    history.push(`${url}/ganti-password`)
  }

  return (
    <>
      <div className="w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3">
        <div className="relative w-full px-4 py-4 max-w-full">
          <h3 className="font-medium text-base text-gray-800 font-sans">
            Profil
        </h3>
        </div>

        <div className="flex relative w-full px-4 max-w-full">

          <div className="mr-8">
            <div className="pt-1.5">
              <img className="object-cover rounded-full w-28 h-28 " src="https://mojok.co/terminal/wp-content/uploads/2019/11/deddy-800x540.jpg" alt="foto profil" />
            </div>
          </div>

          <div className="flex flex-col w-3/4">

            <div className="flex justify-between mb-5  h-32">

              <div className=" w-1/3 h-full flex flex-col justify-between">
                <div>
                  <h1 className="font-normal text-abuabu text-xs font-sans">Kode</h1>
                  <h1 className="font-normal text-sm font-sans">41241</h1>
                </div>
                <div>
                  <h1 className="font-normal text-abuabu text-xs font-sans">Nama</h1>
                  <h1 className="font-normal text-sm font-sans">Ican Natawijaya</h1>
                </div>
                <div>
                  <h1 className="font-normal text-abuabu text-xs font-sans">Username</h1>
                  <h1 className="font-normal text-sm font-sans">Icanq</h1>
                </div>
              </div>

              <div className="w-1/3 mr-10 flex flex-col justify-between">
                <div>
                  <h1 className="font-normal text-abuabu text-xs font-sans">Email</h1>
                  <h1 className="font-normal text-sm font-sans">icannatawijaya@mail.com</h1>
                </div>
                <div>
                  <h1 className="font-normal text-abuabu text-xs font-sans">Phone 1</h1>
                  <h1 className="font-normal text-sm font-sans">0821241113</h1>
                </div>
                <div>
                  <h1 className="font-normal text-abuabu text-xs font-sans">Phone 2</h1>
                  <h1 className="font-normal text-sm font-sans">0872112113</h1>
                </div>
              </div>

              <div className="w-1/3 flex flex-col justify-between">
                <div>
                  <h1 className="font-normal text-abuabu text-xs font-sans">Tanggal Mulai</h1>
                  <h1 className="font-normal text-sm font-sans">21 Februari 2021</h1>
                </div>
              </div>

            </div>

            <hr className="md:min-w-full" />

            <div className="mt-4 mb-1">
              <button
                className="flex items-center mr-3 px-3 py-2 rounded border-biru border"
                type="button"
                onClick={handlePassword}
              >
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75 4H8.125V2.85714C8.125 1.28 6.725 0 5 0C3.275 0 1.875 1.28 1.875 2.85714V4H1.25C0.5625 4 0 4.51429 0 5.14286V10.8571C0 11.4857 0.5625 12 1.25 12H8.75C9.4375 12 10 11.4857 10 10.8571V5.14286C10 4.51429 9.4375 4 8.75 4ZM5 9.14286C4.3125 9.14286 3.75 8.62857 3.75 8C3.75 7.37143 4.3125 6.85714 5 6.85714C5.6875 6.85714 6.25 7.37143 6.25 8C6.25 8.62857 5.6875 9.14286 5 9.14286ZM6.9375 4H3.0625V2.85714C3.0625 1.88 3.93125 1.08571 5 1.08571C6.06875 1.08571 6.9375 1.88 6.9375 2.85714V4Z" fill="#0036A0" />
                </svg>
                <h1 className="text-biru text-xs font-normal ml-2">Ubah Password</h1>
              </button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
