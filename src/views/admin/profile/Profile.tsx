import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

// components

import ProfileCard from "./profileComponents/ProfileCard";
import OldPassword from './profileComponents/profileSubCard/OldPassword'

export default function Profile() {
  let { path, url } = useRouteMatch();
  console.log(path)

  return (
    <>
      {/* <div className="w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3">
        <ProfileCard />
      </div> */}

      <Switch>
        <Route path={path}>
          <div className="w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3">
            <ProfileCard />
          </div>
        </Route>
        <Route path={`${path}/ganti-password`}>
          <div className="w-full xl:w-8/12 xl:mb-0 bg-white shadow-lg px-3 py-3">
            <OldPassword />
            <h1>tes</h1>
          </div>
        </Route>
      </Switch>
    </>
  );
}
