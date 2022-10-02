import { Link } from "react-router-dom";
export const Nav = () => {
  const dashNav = [
    {
      id: 1,
      name: "DASHBOARD",
      path: "dashboard",
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
    {
      id: 9,
      name: "LOGOUT",
      path: "logout",
    },
  ];
  return (
    <div className="flex justify-center items-center w-full px-3 overflow-auto whitespace-nowrap">
      <ul className="w-full flex justify-between px-3 font-medium">
        {dashNav.map((navItem) => (
          <li className="pb-3 mr-3" key={navItem.id}>
            <Link
              className="focus:text-dark-blue focus:border-b-[2px] focus:border-dark-blue pb-3"
              to={navItem.path}
            >
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
