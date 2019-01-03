import Link from "next/link";
import { withRouter } from "next/router";
import AdminLayout from "./AdminLayout";
const ManageUILayout = withRouter(props => {
  var currentRoute = props.router.route;
  var routeHomeUI = "/admin/manage-ui/home-ui";
  return (
    <AdminLayout>
      <ul className="nav nav-pills margin-top-30">
        <li className="nav-item">
          <Link prefetch href={routeHomeUI}>
            <a className={`nav-link ${currentRoute.includes(routeHomeUI) ? "active" : ""}`}>Trang chủ</a>
          </Link>
        </li>
      </ul>
      <div className="mt-4">{props.children}</div>
    </AdminLayout>
  );
});

export default ManageUILayout;
