import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">NATIONAL INSTITUTE OF TECHNOLOGY KARNATAKA, SURATHKAL</h3>
          <div className="subheading mb-3">B.TECH IN INFORMATION TECHNOLOGY</div>
          <div>Data Structures Algorithms, Machine Learning, Software Engineering, OS, DBMS, Web Development, Distributed Computing</div>
          <p>CGPA: 8.48</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">July 2016 - June 2020</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Narayana PU College</h3>
          <div className="subheading mb-3">High School ‑ Class XII PUC</div>
          <div>Physics, Chemistry, and Maths with Computer Science</div>
          <p>Percentage : 98 ( 588/600 )</p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">July 2014 - May 2016</span>
        </div>
      </div>
    </Section>
  );
}
