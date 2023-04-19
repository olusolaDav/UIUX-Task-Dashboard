import { createUseStyles, useTheme } from 'react-jss';
import { useNavigate } from "react-router-dom";
import ROUTES from '../../resources/routes';
import Button from "../shared/button/Button";
import addIcon from "../../assets//icons/PlusIcon.svg";

import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets
} from '../../assets/icons';
import { convertRouteToUrl } from "../../resources/utilities";
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';


const useStyles = createUseStyles({
  separator: {
    borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
});


function SidebarComponent() {
    const { push } = useNavigate();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(ROUTES.login);
    }

    function onClick(route, parameters = {}) {
        push(convertRouteToUrl(route, parameters));
    }

    return (
      <Menu isMobile={isMobile}>
        <div style={{ paddingTop: 30, paddingBottom: 30 }}>
          <LogoComponent />
        </div>
        <MenuItem
          id={ROUTES.dashboard}
          title="Dashboard"
          icon={IconSubscription}
          onClick={() => onClick(ROUTES.dashboard)}
        />
        <MenuItem
          id={ROUTES.settings}
          title="Settings"
          icon={IconOverview}
          onClick={() => onClick(ROUTES.settings)}
        />

        <MenuItem
          id={ROUTES.activities}
          title="Activities"
          icon={IconTickets}
          onClick={() => onClick(ROUTES.activities)}
        />

        <MenuItem
          id={ROUTES.users}
          title="Users"
          icon={IconContacts}
          onClick={() => onClick(ROUTES.users)}
        />
        <MenuItem
          id={ROUTES.addeduser}
          title="Added User"
          icon={IconAgents}
          onClick={() => onClick(ROUTES.addeduser)}
        />
        <MenuItem
          id={ROUTES.afflilite}
          title="Afflilite"
          icon={IconArticles}
          onClick={() => onClick(ROUTES.afflilite)}
        />

        <div className={classes.separator}></div>

        <MenuItem
          id={ROUTES.profile}
          title="Profile"
          icon={IconSubscription}
          onClick={() => onClick(ROUTES.profile)}
        />

        <MenuItem
          id={ROUTES.logout}
          title="Logout"
          icon={IconLogout}
          onClick={ROUTES.logout}
        />

        <div className={`absolute bottom-6 left-6`}>
          <Button className="p-[1.4rem] px-12 bg-onPrimary text-white mx-auto mb-6 leading-[1.4rem]">
            <img src={addIcon} alt="" />
            <p className="uppercase font-light leading-[1.9rem] line-clamp-1 xl:line-clamp-none">
              New project
            </p>
          </Button>
        </div>
      </Menu>
    );
}

export default SidebarComponent;
