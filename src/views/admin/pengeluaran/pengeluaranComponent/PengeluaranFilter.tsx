import React from "react";

export default function PengeluaranCard() {
    return (
        <div className="my-3 ml-1">
            <div className="">
                <h1 className="font-medium text-base">Pengeluaran</h1>
            </div>
            <div className="flex mt-4 justify-between">
                <div className="">
                    <select name="" id="" className="text-sm">
                        <option value="">Super PIC</option>
                        <option value="">Super PIC</option>
                        <option value="">Super PIC</option>
                        <option value="">Super PIC</option>
                    </select>
                </div>
                <div className="w-1/2  -ml-72">
                    <input type="text" placeholder="Cari kode driver atau nama driver" className="w-full text-sm"/>
                </div>
                <div className="mr-7">
                    <button className="bg-blue-800 rounded py-1 px-3 text-white text-base">Download</button>
                </div>
            </div>
        </div>
    );
}
