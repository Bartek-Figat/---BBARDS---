import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <div className="flex justify-center items-center w-full px-3">
      <ul className="w-full flex justify-between px-3 ">
        <li className="pb-3">
          <Link to="/">DASHBOARD</Link>
        </li>
        <li className="pb-3">
          <Link to="/profile">PROFILE</Link>
        </li>
        <li className="pb-3">
          <Link to="/">AD POST</Link>
        </li>
        <li className="pb-3">
          <Link to="/">MY ADS</Link>
        </li>
        <li className="pb-3">
          <Link to="/">SETTINGS</Link>
        </li>
        <li className="pb-3">
          <Link to="/">BOOKMARKS</Link>
        </li>
        <li className="pb-3">
          <Link to="/">MESSAGE</Link>
        </li>
        <li className="pb-3">
          <Link to="/">NOTIFICATION</Link>
        </li>
        <li className="pb-3">
          <Link to="/">LOGOUT</Link>
        </li>
      </ul>
    </div>
  );
};
