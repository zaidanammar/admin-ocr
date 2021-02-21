import React from "react";

// components

// import CardLineChart from "../../components/Cards/CardLineChart";
// import CardBarChart from "../../components/Cards/CardBarChart";
import CardPageVisits from "../../components/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic";

export default function Notifikasi() {
  return (
    <>
      {/* <div className="flex flex-wrap mx-auto mt-36 bg-pink-600"> */}
      {/* <h1 className="mt-48 text-blue-700">ahlo</h1> */}
        <div className="w-full xl:w-8/12 xl:mb-0 bg-purple-600 mx-auto px-3 py-3">
          <CardPageVisits />
          <h1>Notifikasi</h1>
        </div>
      {/* </div> */}
    </>
  );
}
