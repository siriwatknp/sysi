import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const FixedImage = ({ fileName, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        edges {
          node {
            id
            extension
            name
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 120, height: 120) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);
  const fixed = data.allFile.edges.find(({ node }) => node.name === fileName);
  return <Img {...props} fixed={fixed.node.childImageSharp.fixed} />;
};

export default FixedImage;
