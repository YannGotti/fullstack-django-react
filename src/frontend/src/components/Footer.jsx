import viteLogo from "/vite.svg";

export default function Footer() {
  return (
    <div className="container mt-4 mb-4 d-flex align-self-end justify-content-center">
      <div className="hstack gap-2">
        <a href="/">
          <img src={viteLogo} alt="" style={{ height: 25 }} />
        </a>
        <h1 className="text-h6-custom mt-2 me-5 text-light">
          © 2024 Mironov, Inc.
        </h1>

        <a
          href="https://t.me/mironovvvc"
          target="_blank"
          className="text-h6-custom link-footer-about text-light"
        >
          Обратная связь
        </a>
      </div>
    </div>
  );
}
