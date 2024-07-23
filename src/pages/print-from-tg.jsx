import { NavLink } from "react-router-dom";
// сделать универсальный??? компонент для всех видов печати

export const PrintFromTelegram = () => {
  return (
    <div id="links-main">
      <h2>
        Отсканируй QR-код ниже с помощью камеры своего мобильного телефона для
        отправки файла через нашего TG-бота
      </h2>

      <img
        src="public\qr.svg"
        alt="qr_bot"
        width="400px"
        height="400px"
      ></img>
      <h2>или найди бота вручную @prinTomatFatherBot</h2>
      <NavLink className={"print-link"} to={"/enter-code"}>
        Я уже отправил файл и у меня есть КОД
      </NavLink>
    </div>
  );
};
