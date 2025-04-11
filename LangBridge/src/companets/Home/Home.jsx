import React, { useState } from "react";
import "./Home.css";
import axios from "axios";

function Home({ darkMode, toggleMode }) {
  const [text, setText] = useState("");
  const [translate, setTranslate] = useState("");
  const [langFrom, setLangFrom] = useState("uz");
  const [langTo, setLangTo] = useState("en");
  const [charCount, setCharCount] = useState(0);

  const lang = {
    uz: "Uzbek",
    en: "English",
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLangFrom(selectedLang);
    setLangTo(selectedLang === "en" ? "uz" : "en");
  };

  const handleTranslate = async () => {
    if (!text.trim()) return;

    try {
      const response = await axios.post(
        "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        {
          from: langFrom,
          to: langTo,
          text: text,
        },
        {
          headers: {
            "content-type": "application/json",
            "x-rapidapi-key": "70940c6217mshf82f988590138dcp1ba129jsn931481b268dc",
            "x-rapidapi-host": "google-translate113.p.rapidapi.com",
          },
        }
      );
      setTranslate(response.data.trans || "Tarjima topilmadi");
    } catch (error) {
      console.error("Tarjima xatoligi:", error);
      setTranslate("Xatolik yuz berdi");
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);

    if (newText.trim()) {
      handleTranslate();
    } else {
      setTranslate("");
    }
  };

  return (
    <div>
      <div className={`home ${darkMode ? "dark" : "light"}`}>
        <div className="home-contanier">
          <div className="lang">
            <div className="tLang">
              <select
                className={`select ${darkMode ? "dark" : "light"}`}
                value={langFrom}
                onChange={handleLanguageChange}
              >
                {Object.entries(lang).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <i className="bi bi-arrow-right"></i>

            <div className="rLang">
              <p>{langTo === "uz" ? "O‘zbekcha" : langTo === "ru" ? "Ruscha" : "Inglizcha"}</p>
            </div>
          </div>

          <div className="textarea">
            <div className="input">
              <textarea
                placeholder="Matn kiriting..."
                maxLength="5000"
                value={text}
                onChange={handleTextChange}
              ></textarea>

              <div className="limited">
                <button
                  className="paste"
                  onClick={() =>
                    navigator.clipboard.readText().then(setText)
                  }
                >
                  <i className="bi bi-clipboard2"></i>
                  <p>Qo‘yish</p>
                </button>
                <div className="limit">{charCount}/5000</div>
              </div>
            </div>

            <div className="result">
              <textarea className="res"
                placeholder="Tarjima..."
                readOnly
                value={translate}
              ></textarea>

              <button
                className="copy"
                onClick={() => navigator.clipboard.writeText(translate)}
              >
                <i className="bi bi-copy"></i> Nusxa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
