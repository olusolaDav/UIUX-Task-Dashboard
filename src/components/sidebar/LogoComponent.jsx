import React from "react";
import { Row } from "simple-flexbox";
import { createUseStyles, useTheme } from "react-jss";
import powerIcon from "../../assets/icons/VectoractivitiesIcon.svg";

const useStyles = createUseStyles((theme) => ({
  container: {
    marginLeft: 32,
    marginRight: 32,
  },
  title: {
    ...theme.typography.cardTitle,
    color: theme.color.grayishBlue,
    opacity: 0.7,
    marginLeft: 12,
  },
}));

function LogoComponent() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div
      className={`flex items-center bg-onPrimary py-4  text-white  mx-6 rounded-[.8rem]`}
    >
      <Row className={classes.container} horizontal="center" vertical="center">
        <img src={powerIcon} alt="user-icon" className="w-[2.2rem] h-[2.2rem] mr-4" />
        <p className="line-clamp-1 xl:line-clamp-none">Welcome Keerthi</p>
      </Row>
    </div>
  );
}

export default LogoComponent;
