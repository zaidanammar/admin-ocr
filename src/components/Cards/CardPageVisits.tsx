import React from "react";

// components

export default function CardPageVisits() {
  return (
    <>
      {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"> */}
      {/* <div className="rounded-t mb-0 px-4 py-3 border-0"> */}
      {/* <div className="flex flex-wrap items-center bg-red-400"> */}
      <div className="relative w-full px-4 py-4 max-w-full">
        <h3 className="font-semibold text-base text-gray-800">
          Profil
        </h3>
      </div>

      <div className="flex relative w-full px-4 max-w-full">

        <div className="mr-8">
          <div className="w-28 h-28">
            <img className="" src="https://cdn.discordapp.com/attachments/798894344962441267/812754976102285322/pngaaa.com-864976.png" alt="foto profile" />
          </div>
        </div>

        <div className="flex flex-col w-3/4">

          <div className="flex justify-between mb-5  h-32">

            <div className=" w-1/3 h-full flex flex-col justify-between">
              <div>
                <h1 className="font-normal text-gray-400 text-xs">Kode</h1>
                <h1 className="font-normal text-sm">41241</h1>
              </div>
              <div>
                <h1 className="font-normal text-gray-400 text-xs">Nama</h1>
                <h1 className="font-normal text-sm">Ican Natawijaya</h1>
              </div>
              <div>
                <h1 className="font-normal text-gray-400 text-xs">Username</h1>
                <h1 className="font-normal text-sm">Icanq</h1>
              </div>
            </div>

            <div className="w-1/3 mr-10 flex flex-col justify-between">
              <div>
                <h1 className="font-normal text-gray-400 text-xs">Email</h1>
                <h1 className="font-normal text-sm">icannatawijaya@mail.com</h1>
              </div>
              <div>
                <h1 className="font-normal text-gray-400 text-xs">Phone1</h1>
                <h1 className="font-normal text-sm">0821241113</h1>
              </div>
              <div>
                <h1 className="font-normal text-gray-400 text-xs">Phone2</h1>
                <h1 className="font-normal text-sm">0872112113</h1>
              </div>
            </div>

            <div className="w-1/3 flex flex-col justify-between">
              <div>
                <h1 className="font-normal text-gray-400 text-xs">Tanggal Mulai</h1>
                <h1 className="font-normal text-sm">21 Februari 2021</h1>
              </div>
            </div>

          </div>

          <hr className="md:min-w-full" />

          <div className="mt-4 mb-1">
            <button
              className="text-white text-xs font-normal mr-3 px-3 py-2 rounded bg-blue-500"
              type="button"
            >
              Ubah Password
              </button>
          </div>

        </div>

      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
