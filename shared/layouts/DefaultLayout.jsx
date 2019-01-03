import DefaultHead from "../../heads/DefaultHead";
import Nav from "../Nav";
import { BreadCrumb } from "../BreadCrumb";
import FabButton from "../FabButton";

const DefaultLayout = props => (
  <div style={{ minHeight: "100vh" }}>
    <Nav />
    <div className="container mybody">
      <DefaultHead />
      <FabButton />
      <BreadCrumb />
      {props.children}
    </div>
  </div>
);

export default DefaultLayout;
