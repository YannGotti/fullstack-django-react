import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center row-height">
        <div className="col-8 col-lg-3 text-center">
          <div className="vstack gap-2">
            <h1 className="text-h1-custom">Ошибка 404</h1>
            <p className="text-h5-custom">такой страницы не существует</p>
            <Link to="/" className="text-h5-custom text-blue link-text">
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
