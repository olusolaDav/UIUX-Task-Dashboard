import { createUseStyles, useTheme } from 'react-jss';
import { Column, Row } from 'simple-flexbox';
import { SidebarComponent, SidebarContext } from '../components/sidebar';
//import HeaderComponent from 'components/header/HeaderComponent';
import PrivateRoutes from './PrivateRoutes';

const useStyles = createUseStyles({
    container: {
        height: '100%',
        minHeight: 850,
        maxWidth: '1920px',
        width: '100%'
    },
    mainBlock: {
        marginLeft: 255,
        padding: 30,
        '@media (max-width: 1080px)': {
            marginLeft: 0
        }
    },
    contentBlock: {
        marginTop: -32,
        
        
    }
});

function PrivateSection() {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
      <SidebarContext>
        <Row className={classes.container}>
          <SidebarComponent />
          <Column flexGrow={1} className={classes.mainBlock}>
            {/* <HeaderComponent />  */}
            <div className={`${classes.contentBlock} max-w-[1920px]`}>
              <PrivateRoutes />
            </div>
          </Column>
        </Row>
      </SidebarContext>
    );
}

export default PrivateSection;
