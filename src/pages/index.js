import React from "react"

// import SEO from "../components/seo"

import "../styles/layout.css"
import "typeface-nunito"
import "typeface-libre-baskerville"
import "../styles/custom.css"

const IndexPage = () => (
  <div class="container">
    {/* <SEO title="Home" /> */}
    <h1 class="headline">
      Hi, I'm <strong>Kristin Baumann</strong>.
    </h1>
    <div class="section-content">
      <p>
        I love to create meaningful things on the web, pragmatically and
        interdisciplinarly:
      </p>
      <ul class="topics">
        <li>- Frontend Development</li>
        <li>- Product Management</li>
        <li>- UX Design</li>
        <li>- Data Visualisation</li>
      </ul>
    </div>
    <div class="section-cta">
      <p>Looking for help?</p>
      <button class="cta" href="mailto:test@test.de">
        Get in contact
      </button>
    </div>
    <ul class="section-interaction links">
      <li>
        <a href="#">LinkedIn</a>
      </li>
      <li>
        <a href="#">Twitter</a>
      </li>
      <li>
        <a href="#">Github</a>
      </li>
    </ul>
  </div>
)

export default IndexPage
