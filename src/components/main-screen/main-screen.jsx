import { NavLink } from "react-router-dom";

export const MainScreen = () => {
  return (
    <div id="links-main">
      <NavLink className={"print-link"} to={"print"}>
        Распечатать документ
      </NavLink>
      <NavLink className={"print-link"} to={"print"}>
        Сделать копию
      </NavLink>
      <NavLink className={"print-link"} to={"print"}>
        Отсканировать документ
      </NavLink>
    </div>
  );
};
