
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
      </div>
      <div className="footer-bottom">
        <div className="row">
            <div className="copyright">
              <span style={{ float: 'right' }}>© Copyright Vision and Magic 2025</span>
              <span style={{ float: 'left', fontSize: '1.2rem' }}>
                <a target="_blank" style={{ color: '#6A6A6A' }} href="https://styleshout.com">styleshout</a> | ksankar
              </span>
            </div>
        </div>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
