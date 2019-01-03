import DefaultHead from "../../heads/DefaultHead";
import Nav from "../Nav";
import Intro from "./../Intro";
import FabButton from "../FabButton";
import { BreadCrumb } from "../BreadCrumb";
import Loader from "./../../helper/Loader";

const DefaultLayoutWithIntro = props => (
  <div style={{ minHeight: "100vh" }}>
    <DefaultHead />
    <Nav />
    <Intro />
    <div className="container mybody">
      <FabButton />
      <BreadCrumb />
      {props.children}
    </div>
  </div>
);

export default DefaultLayoutWithIntro;
