import { ShowLoader } from "./../helper/Loader";
import Link from "next/link";
export const HomeLink = ({ children, className }) => (
  <Link scroll={false} prefetch href="/">
    <a className={className} onClick={() => ShowLoader()}>
      {children}
    </a>
  </Link>
);
