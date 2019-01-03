import Link from "next/link";
import { withRouter } from "next/router";
import AdminLayout from "./AdminLayout";
const ManageCarsLayout = withRouter(props => {
  var currentRoute = props.router.route;
  var routeAddNew = "/admin/manage-cars/add-new-car";
  var routeEditDelete = "/admin/manage-cars/edit-delete-car";
  var routeEditTypes = "/admin/manage-cars/edit-types";
  var routeEditBrands = "/admin/manage-cars/edit-brands";
  return (
    <AdminLayout>
      <ul className="nav nav-pills margin-top-30">
        <li className="nav-item">
          <Link prefetch href={routeAddNew}>
            <a className={`nav-link ${currentRoute.includes(routeAddNew) ? "active" : ""}`}>Thêm xe mới</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link prefetch href={routeEditDelete}>
            <a className={`nav-link ${currentRoute.includes(routeEditDelete) ? "active" : ""}`}>Chỉnh sửa xe</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link prefetch href={routeEditTypes}>
            <a className={`nav-link ${currentRoute.includes(routeEditTypes) ? "active" : ""}`}>Thay đổi loại xe</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link prefetch href={routeEditBrands}>
            <a className={`nav-link ${currentRoute.includes(routeEditBrands) ? "active" : ""}`}>Thay đổi hãng xe</a>
          </Link>
        </li>
      </ul>
      <div className="mt-4">{props.children}</div>
    </AdminLayout>
  );
});

export default ManageCarsLayout;
