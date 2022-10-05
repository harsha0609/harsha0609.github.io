import React from "react"
import Section from "../components/Section"
import ResumePDF from "../assets/HarshaResume.pdf"
import SGCartoon from "../assets/my_bitmoji-bg.png"
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/harsha-vardhan-946b6515a",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/harsha0609",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/harsha_2595",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.facebook.com/harsha.vardhan.7509",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/var_harsha3",
      icon: <FaInstagram />,
    },
  ]

  return (
    <Section id="about">
      <div className='row justify-content-between'>
        <div className='col-md-6 order-last order-lg-first' data-aos='fade-up'>
          <h1 className="mb-0">
            Harsha
            <span className="text-primary" style={{paddingLeft: '2vw'}}>Vardhan</span>
          </h1>
          <div className="subheading mb-3">
            <span style={{paddingRight: '0.3vw'}}>
              Remember when you wanted what you currently have
            </span>
            <span style={{paddingRight: '0.3vw'}}>
              ·
            </span>
            <a href="mailto:hv2595@gmail.com" className='home-mail'>
              hv2595@gmail.com
            </a>
          </div>
        </div>
        <div className='col-md-3 mb-5 mb-lg-0' data-aos='fade-up'>
          <img
            src={SGCartoon}
            alt="Harsha Cartoon"
            style={{height: '40vh', width: '40vh'}}
          />
        </div>
      </div>

      <p className="lead mb-4">
      A Machine learning enthusiast and a vivid open source contributor with 2+ years of experience specializing in machine learning, application development, algorithms, and full-stack web development. Well‑versed and seasoned developer in Django Rest Framework, ReactJs, and Natural
Language Processing. Aspire to become a socially responsible software architect.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(ResumePDF)}
        >
          Download CV
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
