import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

//import { GatsbyImage } from "gatsby-plugin-image"

const BackgroundSection = () => {

  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query{
        backgroundImage123: file(relativePath: {eq: "bg-test-image.jpg"}) {
          childrenImageSharp {
            gatsbyImageData(
              width: 2000, 
              quality: 50, 
              webpOptions: {quality: 70})
          }
        }
      }
    `
  )

  const image = getImage(backgroundImage123)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      {...bgImage}
      preserveStackingContext
    >
      Test
    </BackgroundImage>
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

export default BackgroundSection

