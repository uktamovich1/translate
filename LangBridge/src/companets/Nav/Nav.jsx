import Logo from '/translate.png';
import './style.css';

function Nav({ darkMode, toggleMode }) {
  return (
    <div>
      <div className={`header ${darkMode ? "dark" : "light"}`}>
        <div className="header-contanier">
          <div className="menus">
            <div className="logo">
              <img src={Logo} alt="logo" width={40} />
              <p style={{ color: darkMode ? "white" : "black" }}>
                Lang<span style={{ color: "blue" }}>Bridge</span>
              </p>
            </div>
          </div>
          <div className="icon">
            <button onClick={toggleMode} className="thame-btn" title="Rejimni o'zgartirish">
              {darkMode ? (
                <i className="bi bi-sun-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
