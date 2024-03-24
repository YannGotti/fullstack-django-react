import viteLogo from "/vite.svg";

export default function Footer() {
  return (
    <div className="row d-flex justify-content-center align-self-end m-3">
      <div className="col-6 col-lg-3">
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
            Создатель
          </a>
        </div>
      </div>
    </div>
  );
}
