import React from "react";

// components

import ProfileCard from "./profileComponents/ProfileCard";

export default function Profile() {
  return (
    <>
      <div className="w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3">
        <ProfileCard />
      </div>
    </>
  );
}
