
import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div className="overlay"></div>
      <div className="home-content-table">
        <div className="home-content-tablecell">
          <div className="row">
            <div className="col-twelve">
              <h3 className="animate-intro">We Are Vision & Magic Consulting.</h3>
              <h1 className="animate-intro">
                We Connect <br />
                people and business
              </h1>
              <div className="more animate-intro">
                <a className="smoothscroll button stroke" href="#about">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="home-social-list">
        <li className="animate-intro">
          <li><a href="https://www.linkedin.com/company/vision-and-magic-consulting/"><i className="fa fa-linkedin-square"></i></a></li>
        </li>
      </ul>
      <div className="scrolldown">
        <a href="#about" className="scroll-icon smoothscroll">
          Scroll Down
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
