import NightModeImg from "../assets/images/icon-moon.svg";
import "./HeaderM.css";

function HeaderM() {
  return (
    <div>
      <div className="header">
        <h1>TODO</h1>
        <img
          className="nightmodeIcon"
          src={NightModeImg}
          alt="nightmode-icon"
        />
      </div>
    </div>
  );
}

export default HeaderM;
