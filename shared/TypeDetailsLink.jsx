import { ShowLoader } from "./../helper/Loader";
import Default from "./../helper/Default";
import Link from "next/link";
import { ToURL } from "./../helper/ToURL";
export const TypeDetailsLink = ({ id, name, children, className }) => (
  <Link scroll={false} prefetch as={`/${Default.urlType}/${id}/thue-xe-${ToURL(name)}`} href={`/details/type-details?id=${id}`}>
    <a className={className} onClick={() => ShowLoader()}>
      {children}
    </a>
  </Link>
);
