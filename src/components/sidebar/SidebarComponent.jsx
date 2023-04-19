import { useNavigate, Link } from "react-router-dom";
//import ROUTES from '../../resources/routes';
import Button from "../shared/button/Button";
import addIcon from "../../assets//icons/PlusIcon.svg";


import { convertRouteToUrl } from "../../resources/utilities";
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItems from './MenuItems';


function SidebarComponent() {
    const { push } = useNavigate();
    const isMobile = window.innerWidth <= 1080;

  /* unauthenticated user route

    async function logout() {
        push(ROUTES.login);
    }

*/

    function onClick(route, parameters = {}) {
        push(convertRouteToUrl(route, parameters));
    }

    return (
      <Menu isMobile={isMobile}>
        {/* The Side bar User's name and icon*/}
        <div style={{ paddingTop: 30, paddingBottom: 5 }}>
          <LogoComponent />
        </div>

        {/* The Sidebar Menu Items and Navigation links of the admin dashboard */}
        <MenuItems />

        {/* The sidebar call to action button "NEW PROJECT" */}
       
          <Link to="/new-project" className={`bottom-2 py-4 left-6 space-y-10`}>
            <Button className="p-[1.4rem] px-12 bg-onPrimary text-white mx-auto mb-6 leading-[1.4rem]">
              <img src={addIcon} alt="" />
              <p className="uppercase font-light leading-[1.9rem] line-clamp-1 xl:line-clamp-none">
                New project
              </p>
            </Button>
          </Link>
       
      </Menu>
    );
}

export default SidebarComponent;
