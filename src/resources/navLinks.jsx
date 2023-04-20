import dashIcon from "../assets/icons/VectordashboardIcon.svg";
import settingsIcon from "../assets/icons/VectorsettingsIcon.svg";
import powerIcon from "../assets/icons/VectoractivitiesIcon.svg";
import usersIcon from "../assets/icons/IconusersIcon.svg";
import addedUserIcon from "../assets/icons/IconaddUsersIcon.svg";
import affiliateIcon from "../assets/icons/IconaffiliateIcon.svg";


export const UTILITY_LIST = [
  {
    id: 0,
    icon: dashIcon,
    desc: "dashboard",
    link: "/",
  },
  {
    id: 1,
    icon: settingsIcon,
    desc: "settings",
    link: "/settings",
  },
  {
    id: 3,
    icon: powerIcon,
    desc: "activities",
    link: "/activities",
  },
  {
    id: 4,
    icon: usersIcon,
    desc: "users",
    link: "/users",
  },
  {
    id: 5,
    icon: addedUserIcon,
    desc: "added user",
    link: "/addeduser",
  },
  {
    id: 6,
    icon: affiliateIcon,
    desc: "affiliate",
    link: "/affiliate",
  },
];

export const ACCOUNT_LIST = [
  {
    id: 0,
    icon: powerIcon,
    desc: "profile",
    link: "/profile",
  },
  {
    id: 1,
    icon: usersIcon,
    desc: "logout",
    link: "/logout",
  },
];
