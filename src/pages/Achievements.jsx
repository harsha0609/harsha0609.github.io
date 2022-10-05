import React from "react";
import Section from "../components/Section";

import { BsTrophy } from "react-icons/bs"

export default function Achievements() {
  return (
    <React.Fragment>
      <Section id="achievements" title="Achievements &amp; Certifications">
        <ul className="fa-ul mb-0">
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            Shortlisted as a finalist in a  national level hackathon(MAKE-IT REAL) conducted by SIEMENS. (In the top 20 out of 600 teams).
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            Participated and successfully completed ImageClef 2019 Medical VQA Task, an international competition.
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            Ranked in Top 0.1% amongst 1,200,000 in JEE MAIN 2016.
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            Pinnacle Performer of the Year 2022, Stratforge.
          </div>
          <div>
            <span className="fa-li p-2">
              <i className="fas fa-trophy text-warning"><BsTrophy /></i>
            </span>
            Cleared the International Standard of Mental Arithematic Proficiency Examination.
          </div>

        </ul>
      </Section>
    </React.Fragment>
  );
}
