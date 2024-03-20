import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar m-3">
      <div className="container d-flex justify-content-center">
        <Link to="/" className="navbar-brand text-light text-h4-custom">
          <div className="hstack gap-3">
            <img src={viteLogo} alt="Главная" />
            <h4 style={{ fontWeight: 600 }}>3D Стримеры</h4>
          </div>
        </Link>
      </div>
    </nav>
  );
}
