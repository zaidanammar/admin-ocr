import React from "react";

// components

import PengeluaranCard from "../pengeluaran/pengeluaranComponent/PengeluaranCard";
import PengeluaranFilter from "../pengeluaran/pengeluaranComponent/PengeluaranFilter";

export default function Pengeluaran() {
  return (
    <>
      <div className="w-full xl:w-full xl:mb-0 bg-white shadow-lg px-3 py-3">
        () ? <PengeluaranFilter /> :  
      </div>
      <div className="w-full xl:w-full xl:mb-10 bg-white shadow-lg px-3 py-3 mt-4">
        <PengeluaranCard />
      </div>
    </>
  );
}
