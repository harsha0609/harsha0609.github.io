import React from "react";
import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Software Engineer</h3>
          <div className="subheading mb-3">Stratforge</div>
          <p>
            <strong>Roles/Responsibilities</strong><br />
            <li>Developed Multiple ML models for classification, deriving intelligence, and scoring.</li>
            <li>Full stack Development, with designing and architecting the application. Multiple releases with agile development process</li>
            <li>Currently leading the product development as the technical lead with hands-on deployment routines.</li>
            <li><b>Technical Skills:</b> Python with Tensorflow, Django Rest Framework, ReactJS, Pandas, Redux, Docker, AWS </li>
            <li><b>Soft Skills:</b> Teamwork, Time Management, Communication, Presentation skills, Leadership </li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Sept 2020 - Present</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Machine Learning Intern</h3>
          <div className="subheading mb-3">Stratforge</div>
          <p>
            <li>Build a model with the team for generic resume sorting and intelligent clustering of CV's</li>
            <li>Worked on Automatic Speech recognition and Intelligent Summarisation.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">May 2019 - July 2019</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Software Intern</h3>
          <div className="subheading mb-3">OGS PayLab</div>
          <p>
            <li>Got exposure to day to day software development ethics with learning multiple technologies</li>
            <li>Worked on Dashboard for multiple switch scenarios</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">May 2018 - July 2018</span>
        </div>
      </div>
    </Section>
  );
}
