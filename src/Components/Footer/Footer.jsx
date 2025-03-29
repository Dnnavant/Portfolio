import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h4 className="footer-title">DA Developer</h4>
          <p className="footer-quote">
            "Embrace the unknown, for in the world of web development, every
            challenge is a chance to learn and grow."
          </p>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="footer-copyright">
        © Copyright {currentYear}. Made by Donnie Avant
      </p>
    </footer>
  );
}

export default Footer;