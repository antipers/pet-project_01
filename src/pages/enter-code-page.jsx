import { useState } from "react";

export const EnterCodePage = () => {
  const [code, setCode] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [info, setInfo] = useState([]);

  const getInfoAboutFile = async () => {
    try {
      let response = await fetch("http://localhost:8081/files/file1.pdf");

      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    /* .then((data) => {
      console.log(`1`, data);
      setInfo(data);
    });

    console.log(`2`, info); */
  };

  return (
    <div>
      <h2>Введи код полученный от бота ниже</h2>
      <input
        type="number"
        value={code}
        style={{ width: 400 + "px", height: 400 + "px", fontSize: 10 + "rem" }}
        autoFocus
        onChange={(e) => setCode(e.target.value)}
        //разобраться с min/max
      />
      <button type="submit" onClick={getInfoAboutFile}>
        ОТПРАВИТЬ
      </button>
    </div>
  );
};
