import { useState } from "react";
import Profile from "../assets/photos/Nov Phannak-cv-profile.jpg";

function Cv() {
  return (
    <div className="w-full  h-auto flex justify-center items-center  py-10">
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1">
        <div className="col-span-1">
          <div className="lg:w-130 md:w-170 w-90">
            <img src={Profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
