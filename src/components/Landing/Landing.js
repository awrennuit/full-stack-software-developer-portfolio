import "./Landing.css";
import { useHistory } from "react-router-dom";

export default function Landing() {
  const history = useHistory();

  return (
    <div className="main-container">
      <div className="landing-container">
        <p>Hi there!</p>
        <p>
          I'm&nbsp;
          <span className="landing-name">awren nuit</span>.
        </p>
        <p>I bring ideas to reality.</p>
        <div className="landing-btn-container">
          <button
            className="landing-button"
            onClick={() => history.push("/about")}
          >
            Go
          </button>
          <span className="landing-box-lg"></span>
          <span className="landing-box-sm"></span>
        </div>
      </div>
    </div>
  );
}
