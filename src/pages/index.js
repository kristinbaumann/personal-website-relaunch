import React from "react"

import SEO from "../components/seo"

import "../styles/layout.css"
import "typeface-nunito"
import "typeface-libre-baskerville"
import "../styles/custom.css"

import BackgroundImage from "../components/background-image"

const IndexPage = () => (
  <>
    <SEO />
    <BackgroundImage>
      <div className="container">
        <div className="container-top">
          <div className="section-content">
            <h1 className="headline">
              Hi, I'm <br></br>
              <strong>Kristin Baumann</strong>.
            </h1>
            <p className="intro">
              I love to create meaningful things on the web, pragmatically and
              interdisciplinarly:
            </p>
            <ul className="topics">
              <li>- Frontend Development</li>
              <li>- Product Management</li>
              <li>- Data Visualisation</li>
              <li>- UX Design</li>
            </ul>
          </div>
          <div className="section-cta">
            <p>Looking for help?</p>
            <a className="cta" href="mailto:mail@kristin-baumann.com">
              Get in contact
            </a>
          </div>
        </div>
        <ul className="section-interaction links">
          <li>
            <a
              href="https://linkedin.com/in/kristinbaumann"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/kristin_baumann"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kristinbaumann"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </BackgroundImage>
  </>
)

export default IndexPage
