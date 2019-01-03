import { ShowLoader } from "../helper/Loader";

export const A = ({ children, className, href }) => (
  <a onClick={() => ShowLoader()} className={className}>
    {children}
  </a>
);
