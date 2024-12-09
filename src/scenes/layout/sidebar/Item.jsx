/* eslint-disable react/prop-types */
import { MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";

const Item = ({ title, path, icon }) => {
  const location = useLocation();
  return (
    <MenuItem
      component={<Link to={path} />}
      to={path}
      icon={icon}
      rootStyles={{
        color: path === location.pathname && "#157bf8",
        background: path === location.pathname && "rgba(21, 123, 248, 0.1);",
        borderRadius: "15px",
      }}
    >
      {title}
    </MenuItem>
  );
};

export default Item;
