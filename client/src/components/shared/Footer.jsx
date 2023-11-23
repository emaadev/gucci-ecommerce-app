import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Founded in Florence, Italy, in 1921, Gucci is one of the world’s
            leading luxury brands. Following the House’s centenary, Gucci forges
            ahead continuing to redefine luxury while celebrating creativity,
            Italian craftsmanship, and innovation.
            <br />
            <br />
            Gucci is part of the global luxury group Kering, which manages
            renowned Houses in fashion, leather goods, jewelry, and eyewear.
            Discover the stories behind the House's collections, exclusively on
            Stories
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>
            Our Client Advisors are available Monday through Saturday, 9:00AM -
            11:00PM (EST) and Sunday, 10:00AM - 9:00PM (EST), excluding
            holidays.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">GUCCI STORE</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/assets/payments-footer.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
