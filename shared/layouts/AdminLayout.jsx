import DefaultLayout from "./DefaultLayout";
import Link from "next/link";
import { withRouter } from "next/router";
import { lifecycle } from "recompose";
import { HideLoader } from "./../../helper/Loader";

const LifeCycle = lifecycle({
  componentDidMount() {
    HideLoader();
  }
});

const AdminLayout = withRouter(props => {
  var currentRoute = props.router.route;
  var routeManageCars = "/admin/manage-cars";
  var routeManageUI = "/admin/manage-ui";
  return (
    <DefaultLayout>
      <div className="font-size-12">
        <h2>Mange cars page</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link prefetch href={routeManageUI + "/home-ui"}>
              <a className={`nav-link ${currentRoute.includes(routeManageUI) ? "active" : ""}`}>Quản lý giao diện</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link prefetch href={routeManageCars + "/add-new-car"}>
              <a className={`nav-link ${currentRoute.includes(routeManageCars) ? "active" : ""}`}>Quản lý xe</a>
            </Link>
          </li>
        </ul>
        {props.children}
      </div>
    </DefaultLayout>
  );
});

export default LifeCycle(AdminLayout);
