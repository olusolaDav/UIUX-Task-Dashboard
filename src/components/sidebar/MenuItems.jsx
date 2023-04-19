import { Link } from "react-router-dom";
import { UTILITY_LIST, ACCOUNT_LIST } from "../../resources/navLinks";


const MenuItems = () => {
  const navLinks = UTILITY_LIST.map((data) => (
    <li key={data.id}>
      <Link
        className="gap-6 flex text-white text-[1.4rem] leading[1.4rem] capitalize hover:bg-onPrimary py-2 px-8 rounded-md transition-all duration-300"
        to={data.link}
      >
        <img src={data.icon} alt={data.disc} />
        {data.desc}
      </Link>
    </li>
  ));

  const utility = ACCOUNT_LIST.map((data) => (
    <li key={data.id}>
      <Link
        className="gap-6 flex text-white opacity-90 text-[1.4rem] leading[1.7rem] capitalize hover:bg-onPrimary py-2 px-8 rounded transition-all duration-200"
        to={data.link}
      >
        <img src={data.icon} alt={data.disc} />
        {data.desc}
      </Link>
    </li>
  ));
  return (
    <div className="my-12 px-3 overflow-y-scroll space-y-10 divide-y divide-gray-50">
      <ul className=" list-none  space-y-8">{navLinks}</ul>
      <ul className="list-none  space-y-8 pt-10">{utility}</ul>
    </div>
  );
};

export default MenuItems;
