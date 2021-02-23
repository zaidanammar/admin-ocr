import React, { useState } from "react";

//components

import DetailPengeluaran from './DetailPengeluaran'
import DetailTopUp from './DetailTopUp'

export default function PengeluaranCard() {
    const [flag, setFlag] = useState<string>('pengeluaran')

    const handlePengeluaran = () => {
        if (flag === 'pengeluaran') {
            setFlag('topUp')
        } else {
            setFlag('pengeluaran')
        }
        console.log(flag)
    }

    return (
        <div className="mx-2.5 my-1">
            <div className="flex">
                <h1  className={
                    "text-base font-normal mr-7 " +
                    (flag  === 'pengeluaran'
                      ? "text-blue-700 hover:text-blue-600 cursor-pointer"
                      : "text-gray-800 hover:text-gray-600 cursor-pointer")
                  } onClick={handlePengeluaran}>Detail Pengeluaran</h1>
                <h1  className={
                    "text-base font-normal " +
                    (flag  === 'topUp'
                      ? "text-blue-700 hover:text-blue-600 cursor-pointer"
                      : "text-gray-800 hover:text-gray-600 cursor-pointer")
                  } onClick={handlePengeluaran}>Top Up</h1>
            </div>
            <hr className="my-2 md:min-w-full" />

            {flag === "pengeluaran" ? (<DetailPengeluaran />) : (<DetailTopUp />)}
        </div>
    );
}