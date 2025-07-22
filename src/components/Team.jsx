
import React from 'react';

const Team = () => {
  return (
    <section id="testimonials">
      <div className="row">
        <div className="col-twelve">
          <h2 className="animate-this">Team</h2>
        </div>
      </div>
      <div className="row flex-container">
        <div id="testimonial-slider" className="flex-slider animate-this">
          <ul className="slides">
            <li>
              <p>
                An accomplished HR professional with over 20 years of experience in People Strategy, Practices, Organisation Development, Performance Management System, Change Management, Talent Acquisition, Talent Retention and Talent Engagement and Compensation & Benefits restructuring.
                In the entire professional career, she has demonstrated adaptive problem solving skills and has managed complexity across client profiles her through logical partnering and collaboration. Strong influencing skills, obsessive positivity, clear and crisp communication have been her greatest strengths and assets throughout these years.
              </p>
              <div className="testimonial-author">
                <img src="/src/images/avatars/vidya.jpg" alt="Author image" />
                <div className="author-info">
                  Vidya Unni
                  <span className="position">CEO and Director</span>
                </div>
              </div>
            </li>
            <li>
              <p>
                HR Professional with 12 plus years of experience in employee relations, HR operations, performance management, grievance handling, compensation & benefits administration, conflict resolution, HR Policy development & legal compliance.
                Throughout her career she has managed business requirements between stake holders, whilst driving overall HR processes and policy implementation. She is proficient in key account management and handling strategic business units.
                Been part of HR related projects with established organisations and well as budding start-ups.
              </p>
              <div className="testimonial-author">
                <img src="/src/images/avatars/maya.jpg" alt="Author image" />
                <div className="author-info">
                  Maya P
                  <span>COO and Director</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Team;
