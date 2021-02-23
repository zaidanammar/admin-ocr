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
      <div className="relative w-full px-4 py-4 max-w-full">
        <h3 className="font-medium text-base text-gray-800 font-sans">
          Profil
        </h3>
      </div>

      <div className="flex relative w-full px-4 max-w-full">

        <div className="mr-8">
          <div className="pt-1.5">
            <img className="object-cover rounded-full w-28 h-28 " src="https://mojok.co/terminal/wp-content/uploads/2019/11/deddy-800x540.jpg" />
          </div>
        </div>

        <div className="flex flex-col w-3/4">

          <div className="flex justify-between mb-5  h-32">

            <div className=" w-1/3 h-full flex flex-col justify-between">
              <div>
                <h1 className="font-normal text-gray-400 text-xs font-sans">Kode</h1>
                <h1 className="font-normal text-sm font-sans">41241</h1>
              </div>
              <div>
                <h1 className="font-normal text-gray-400 text-xs font-sans">Nama</h1>
                <h1 className="font-normal text-sm font-sans">Ican Natawijaya</h1>
              </div>
              <div>
                <h1 className="font-normal text-gray-400 text-xs font-sans">Username</h1>
                <h1 className="font-normal text-sm font-sans">Icanq</h1>
              </div>
            </div>

            <div className="w-1/3 mr-10 flex flex-col justify-between">
              <div>
                <h1 className="font-normal text-gray-400 text-xs font-sans">Email</h1>
                <h1 className="font-normal text-sm font-sans">icannatawijaya@mail.com</h1>
              </div>
              <div>
                <h1 className="font-normal text-gray-400 text-xs font-sans">Phone 1</h1>
                <h1 className="font-normal text-sm font-sans">0821241113</h1>
              </div>
              <div>
                <h1 className="font-normal text-gray-400 text-xs font-sans">Phone 2</h1>
                <h1 className="font-normal text-sm font-sans">0872112113</h1>
              </div>
            </div>

            <div className="w-1/3 flex flex-col justify-between">
              <div>
                <h1 className="font-normal text-gray-400 text-xs font-sans">Tanggal Mulai</h1>
                <h1 className="font-normal text-sm font-sans">21 Februari 2021</h1>
              </div>
            </div>

          </div>

          <hr className="md:min-w-full" />

          <div className="mt-4 mb-1">
            <button
              className="text-blue-500 text-xs font-normal mr-3 px-3 py-2 rounded border-blue-500 border"
              type="button"
              onClick={handlePassword}
            >
              Ubah Password
              </button>
          </div>

        </div>

      </div>
    </>
  );
}
