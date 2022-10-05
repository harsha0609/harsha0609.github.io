import React, { useEffect } from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { useState } from "react"
import { connect } from "react-redux"

const Projects = ({ projects }) => {
  const [count, setCount] = useState(8)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(projects.slice(0, count))
  }, [count, projects])

  return (
    <Section id="projects" title="Projects">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">RedFlare and Servedly</h3>
          <div className="subheading mb-3">Stratforge</div>
          <p>
            

            <li>Developed an application that processes customer calls and does SSQA analysis, also processes live customer calls and gives various statistical insights and in-depth analysis.</li>
            <li><b>Technical Skills:</b> Django, ReactJS, Redux, TensorFlow, Pandas, AWS</li>
            <li><b>Soft Skills:</b> Time Management, Teamwork, Presentation skills, Report writing.</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Jun 2020 - Apr 2021</span>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Intelligent Routing And Caching for Named Data Networks (Research Project)</h3>
          <div className="subheading mb-3">NITK</div>
          <p>
            <li>Worked on generic NDN routing and caching and studied the advantages of using caching policies for routing, implemented our own policies for both, and this implemented using reinforcement learning.</li>
            <li><b>Technical Skills:</b> C++, Reinforcement Learning</li>
            <li><b>Soft Skills:</b> Presentation skills, Teamwork, Logical Thinking, Thesis Writing, Literature Survey</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Jun 2020 - Apr 2021</span>
        </div>
      </div>


      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Machine Learning</h3>
          <div className="subheading mb-3">NITK / Personal</div>
          <p>
            <li>Neural Style Transfer - To detect if given two paintings belong to the same artist using CNNs.</li>
            <li>Twitter Suicidal Analysis to Predict the chance of Suicide based on the tweet.</li>
            <li>Predictive analysis for the prediction of the best group of physicians for Patient Diagnosis.</li>
          </p>
        </div>
        
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Medical Visual Q/A</h3>
          <div className="subheading mb-3">NITK </div>
          <p>
            <li>Developed model using LSTM to predict answer based on medical image and respective question. This was done as a part of imageCLEF 2019.</li>
            <li><b>Technical Skills:</b> Python, Tensorflow with Keras, Pandas, OpenCV </li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Jan 2019 - May 2019</span>
        </div>
        
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Web Development</h3>
          <div className="subheading mb-3">Personal </div>
          <p>
            <li>Equalizer - Live translation of video calls with multiple languages support.</li>
            <li>Multiple ReactJs Clone Applications such as Google Search, Instagram, Medium.</li>
            <li>Developed a custom Design System, worked on designing and implementing.</li>
          </p>
        </div>
        
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Miscellenous</h3>
          <div className="subheading mb-3">Personal </div>
          <p>
            <li>Distributed Computing - Parallel computation of skyline queries using map-reduce.</li>
            <li>Computer Vision - Estimation of Optimal Speedbreaker Placement and Lane Expansion.</li>
            <li>Socket Programming - A Banking management system(with GUI) implemented in Java communicates between systems through socket programming in real-time.</li>
          </p>
        </div>
        
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Preditive analysis for Debt Collection</h3>
          <div className="subheading mb-3">Stratforge</div>
          <p>
            <li>To predict the probability of loan repayment and other predictive analytics for collection of debt and credit.</li>
            <li>This was implemented as a part of OceanPro Cohert-II.</li>
          </p>
        </div>
        
      </div>

      {/* <div className="cards">
        {items && items.map((card, index) => <Card card={card} key={index} />)}
      </div>

      <div className="d-flex justify-content-center">
        {count < projects.length && (
          <div
            className="btn btn-primary mt-5 btn-lg"
            onClick={() => setCount(count + 4)}
          >
            See more
          </div>
        )}
      </div> */}
    </Section>
  )
}

const mapStateToProps = (store) => {
  const { projects } = store.project
  return { projects }
}

export default connect(mapStateToProps)(Projects)
