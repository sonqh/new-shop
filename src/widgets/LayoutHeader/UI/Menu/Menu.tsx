import { FC } from "react";
import { Menu as MenuType } from "../../model/types";
import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

const Menu: FC<MenuType> = ({ links }: MenuType) => {
  const location = useLocation();

  return (
    <div className="navbar-center">
      <ul tabIndex={0} className="text-xl normal-case flex space-x-4">
        {links.map((link) => (
          <li
            key={link.name}
            className={`text-white btn-ghost btn ${
              location.pathname === link.href ? "selected" : ""
            }`}
          >
            <Link
              to={link.href}
              className={location.pathname === link.href ? "selected-link" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
