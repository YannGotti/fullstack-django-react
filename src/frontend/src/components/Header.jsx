import viteLogo from "/vite.svg";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-center">
        <a className="navbar-brand text-light text-h4-custom" href="/">
          <div className="hstack gap-3">
            <img src={viteLogo} alt="Главная" />
            <h4 style={{ fontWeight: 600 }}>3D Стримеры</h4>
          </div>
        </a>
      </div>
    </nav>
  );
}
