import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => (
  <div id="loader" className=" mt-0" style={{ zIndex: 9999 }}>
    <BarLoader width={"100%"} color={"#004d40"} height={4} loading={true} />
  </div>
);

export const HideLoader = () => {
  var el = document.getElementById("loader");
  el.className = "hidden";
};

export const ShowLoader = () => {
  var el = document.getElementById("loader");
  el.className = "visible";
};

export default Loader;
