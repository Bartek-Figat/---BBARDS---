import { Link } from "react-router-dom";
import Logout from "../logout/logout";
export const Nav = () => {
  const dashNav = [
    {
      id: 1,
      name: "DASHBOARD",
      path: "/dashboard",
    },
    {
      id: 2,
      name: "PROFILE",
      path: "profile",
    },
    {
      id: 3,
      name: "AD POST",
      path: "addPost",
    },
    {
      id: 4,
      name: "MY ADS",
      path: "myAds",
    },
    {
      id: 5,
      name: "SETTINGS",
      path: "settings",
    },
    {
      id: 6,
      name: "BOOKMARKS",
      path: "bookmarks",
    },
    {
      id: 7,
      name: "MESSAGE",
      path: "message",
    },
    {
      id: 8,
      name: "NOTIFICATION",
      path: "notification",
    },
  ];
  return (
    <div className="flex w-full items-center px-3 overflow-auto whitespace-nowrap p-2">
      <ul className="flex w-full justify-between px-3 font-medium">
        {dashNav.map(({ id, path, name }) => (
          <li className="p-2" key={id}>
            <Link
              className="hover:border-b-[2px] hover:border-dark-blue"
              to={path}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex">
        <button
          className="rounded-md bg-dark-blue p-2 text-white font-medium"
          onClick={() => Logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
