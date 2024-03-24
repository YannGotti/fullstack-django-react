import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <Content />
        <Footer />
      </div>
    </>
  );
}
