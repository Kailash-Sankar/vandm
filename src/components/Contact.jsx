
import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="overlay"></div>
      <div className="row narrow section-intro with-bottom-sep animate-this">
        <div className="col-twelve">
          <h3>Contact</h3>
          <h1>Get In Touch.</h1>
          <p className="lead"> We are here to answer your queries, help you with more information - With you and your HR needs. </p>
        </div>
      </div>
      <div className="row contact-content">
        <div className="col-seven tab-full animate-this">
          <h5>Send Us A Message</h5>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdgo9tmIPHWfr-leQ-m_2CbT6egN2I2QoCHwFaN-s8Zhl5HXw/viewform?embedded=true" className="form-frame" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
          <div id="message-warning"></div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!<br />
          </div>
        </div>
        <div className="col-four tab-full contact-info end animate-this">
          <h5>Contact Information</h5>
          <div className="cinfo">
            <h6>Where to Find Us</h6>
            <p>
              Vision and Magic Consulting<br />
              G 6, Block B, Kethna Enclave,<br />
              29th C Cross, Kaggadasapura,<br />
              CV Raman Nagar, <br />
              Bengaluru - 560 093
            </p>
          </div>
          <div className="cinfo">
            <h6>Email Us At</h6>
            <p>
              <a href="mailto:vidya@vandmconsulting.in" target="_top">vidya@vandmconsulting.in</a><br />
              <a href="mailto:maya@vandmconsulting.in" target="_top">maya@vandmconsulting.in</a><br />
              <a href="mailto:hello@vandmconsulting.in" target="_top">hello@vandmconsulting.in</a>
            </p>
          </div>
          <div className="cinfo">
            <h6>Call Us At</h6>
            <p>
              +91 9900100380 <br />
              +91 9880499290
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
