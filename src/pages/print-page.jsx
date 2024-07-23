import { NavLink } from "react-router-dom";

export const MainPrintPage = () => {
  return (
    <div id="links-main">
      <NavLink className={"print-link"} to={"/print_from_tg"}>
        Отправить через Telegram бота
      </NavLink>
      <NavLink className={"print-link"} to={"/print"}>
        #
      </NavLink>
      <NavLink className={"print-link"} to={"/print"}>
        #
      </NavLink>
    </div>
  );
};
