import Link from "next/link";
import Default from "./../helper/Default";
import { ToURL } from "./../helper/ToURL";
import { ShowLoader } from "../helper/Loader";
const CarDetailsLink = ({ id, brandName, name, typeName, className, children }) => (
  <Link
    scroll={false}
    prefetch
    as={`/${Default.urlCar}/${id}/thue-xe-${ToURL(brandName)}-${ToURL(name)}-${ToURL(typeName)}`}
    href={`/details/car-details?id=${id}`}
  >
    <a onClick={() => ShowLoader()} className={className}>
      {children}
    </a>
  </Link>
);

export default CarDetailsLink;
