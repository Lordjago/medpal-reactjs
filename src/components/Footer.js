export default function Footer() {
  return (
    <footer className="footer-grid">
    <div className="grid">
      <div className="footer-logo">
        <img src="https://medpal.care/static/logo.svg" alt="" />
      </div>
      <h2>MedPal.Care is digital healthcare platform that provides on-demand 24/7 healthcare services to its clients.</h2>
      <div className="social-media-links">
        <div className="media-item">
          <i className="bi bi-facebook"></i>
        </div>
        <div className="media-item">
          <i className="bi bi-instagram"></i>
        </div>
        <div className="media-item">
          <i className="bi bi-linkedin"></i>
        </div>
        <div className="media-item">
          <i className="bi bi-whatsapp"></i>
        </div>
      </div>
    </div>
    <div className="grid-link">
        <h2>MEDPALCARE</h2>
        <ul className="footer-nav">
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Contact us</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
        </ul>
    </div>
    <div className="grid-link">
      <h2>LEGAL</h2>
      <ul className="footer-nav">
        <li>
          <a href="">Terms and Condition</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">Data Protection Policy</a>
        </li>
      </ul>
    </div>
   
    <div className="grid-link">
      <h2>CONTACT</h2>
      <ul className="footer-nav">
        <li>
          <a href="">hello@medpal.care</a>
        </li>
        <li>
          <a href="">Lagos Nigeria</a>
        </li>
      </ul>
    </div>
    <p>© 2022. All rights reserved</p>
</footer>
  )
}
