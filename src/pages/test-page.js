import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

// import { convertToBgImage } from "gbimage-bridge"
import { BgImage } from "gbimage-bridge"
// import BackgroundImage from "gatsby-background-image"

const TestPage = () => {

  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query{
        backgroundImage123: file(relativePath: {eq: "bg-test-image.jpg"}) {
            childrenImageSharp {
              gatsbyImageData(
                width: 2000
                quality: 50
                webpOptions: {quality: 70}
              )
            }
          }
      }
    `
  )

  const image = getImage(backgroundImage123)
//   const bgImage = convertToBgImage(image)

  return (
    // <BackgroundImage
    //   Tag="section"
    //   {...bgImage}
    //   preserveStackingContext
    // >
    //   <h1>Testing Page here</h1>
    // </BackgroundImage>
    <BgImage image={image} style={{ minWidth: 200, minHeight: 200 }}>Testing</BgImage>
  )

  // const { placeholderImage } = useStaticQuery(
  //   graphql`
  //     query {
  //       placeholderImage: file(relativePath: { eq: "Baumann_background_desktop.png" }) {
  //         childImageSharp {
  //           gatsbyImageData(
  //             width: 1920
  //             placeholder: BLURRED
  //             formats: [AUTO, WEBP, AVIF]
  //           )
  //         }
  //       }
  //     }
  //   `
  // )
  // const image = getImage(placeholderImage)
  // const bgImage = convertToBgImage(image)

  // return (
  //   <BackgroundImage
  //     Tag="section"
  //     {...bgImage}
  //     preserveStackingContext
  //   >
  //     <div style={{minHeight: 1000, minWidth: 1000}}>
  //       <GatsbyImage image={image} alt={"testimage"}/>
  //     </div>
  //   </BackgroundImage>
  // )
}

export default TestPage

