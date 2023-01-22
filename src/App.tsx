import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

const lngs = {
  ptBR: { nativeName: "Português" },
  en: { nativeName: "English" },
};

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t("count is")} {count}
        </button>
        <p>
          {t("Edit")} <code>src/App.tsx</code> {t("and save to test HMR")}
        </p>
      </div>
      <p className="read-the-docs">
        {t("Click on the Vite and React logos to learn more")}
      </p>

      <div>
        {Object.keys(lngs).map((lng: string) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {(lngs as any)[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
