import Link from "next/link";
import { withRouter } from "next/router";
import { lifecycle, compose } from "recompose";
import Db from "./../config/FirebaseConfig";
import { ToURL } from "./../helper/ToURL";
import Default from "./../helper/Default";
import ScrollableAnchor from "react-scrollable-anchor";
import { IsMobile } from "./../helper/IsMobile";
import { ShowLoader } from "../helper/Loader";
import { HomeLink } from "./HomeLink";
import { TypeDetailsLink } from "./TypeDetailsLink";

const LifeCycle = lifecycle({
  async componentDidMount() {
    var types = await Db.collection("types")
      .orderBy("order", "asc")
      .get();
    var uiType = types.docs.map(type => {
      return { name: type.data().name, id: type.id };
    });
    var show = "";
    if (IsMobile()) {
      show = "show";
    }
    this.setState({ types: uiType, show: show });
  }
});

const enhance = compose(
  // SetStatic,
  withRouter,
  LifeCycle
);

const Nav = ({ router, types, show }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-2 pl-3 bg-primary font-size-12">
      <div className="container">
        {/* <ScrollableAnchor id={"brand"}> */}
        <HomeLink className="navbar-brand font-size-14">
          <i className="material-icons">directions_car</i>
          <span className="ml-2">Thuê xe Quý Tâm</span>
        </HomeLink>
        {/* </ScrollableAnchor> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${router.route === "/" ? "active" : ""}`}>
              <HomeLink className="nav-link">
                <span className="ml-1">Trang chủ</span>
              </HomeLink>
            </li>
            <li className={`nav-item dropdown ${router.asPath.includes(Default.urlType) ? "active show" : ""}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="ml-1">Các loại xe</span>
              </a>
              <div
                style={{ zIndex: 9999 }}
                className={`dropdown-menu ${router.asPath.includes(Default.urlType) ? show : ""}`}
                aria-labelledby="navbarDropdownMenuLink"
              >
                {types &&
                  types.map(type => (
                    <TypeDetailsLink
                      key={type.id}
                      id={type.id}
                      name={type.name}
                      className={`font-size-11 dropdown-item ${router.asPath.includes(`/thue-xe-${ToURL(type.name)}`) ? "active" : ""}`}
                    >
                      Xe {type.name}
                    </TypeDetailsLink>
                  ))}
              </div>
            </li>
            <li className={`nav-item`}>
              <Link prefetch href="/">
                <a className="nav-link">
                  <span className="ml-1">Hoạt động</span>
                </a>
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link prefetch href="/">
                <a className="nav-link">
                  <span className="ml-1">Giới thiệu</span>
                </a>
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link prefetch href="/">
                <a className="nav-link">
                  <span className="ml-1">Liên hệ</span>
                </a>
              </Link>
            </li>
            <li className={`nav-item ${router.route.includes("/admin") ? "active" : ""}`}>
              <Link prefetch href="/admin/manage-cars/add-new-car">
                <a className="nav-link">
                  <span className="ml-1">Quản lý</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default enhance(Nav);
