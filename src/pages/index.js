import React from "react"

import SEO from "../components/seo"

import "../styles/layout.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Hi, I'm Kristin Baumann.</h1>
    <p>
      I love to create meaningful things on the web, pragmatically and
      interdisciplinarly:
    </p>
    <ul>
      <li>Frontend Development</li>
      <li>Product Management</li>
      <li>UX Design</li>
      <li>Data Visualisation</li>
    </ul>
    <div>
      <p>Looking for help?</p>
      <button>Get in contact</button>
    </div>
    <ul>
      <li>LinkedIn</li>
      <li>Twitter</li>
    </ul>
  </div>
)

export default IndexPage
