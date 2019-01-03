import Fab from "@material/react-fab";
import "@material/react-fab/dist/fab.css";
import "../custom-css/fab.css";
import { goToAnchor, goToTop } from "react-scrollable-anchor";
import { lifecycle } from "recompose";
import { IsMobile } from "./../helper/IsMobile";

const LifeCycle = lifecycle({
  componentDidMount() {
    if (IsMobile()) {
      this.setState({
        isMobile: IsMobile(),
        toTop: () =>
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
          })
      });
    } else {
      this.setState({ isMobile: IsMobile() });
    }
  }
});

const FabButton = ({ isMobile, toTop }) => {
  return (
    <a className="toTop" onClick={toTop}>
      <Fab mini={isMobile} icon={<i className="material-icons">navigation</i>} />
    </a>
  );
};

export default LifeCycle(FabButton);
