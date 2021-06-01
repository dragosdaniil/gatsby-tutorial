import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>contrained / default</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          height={400}
          width={400}
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          width={200}
          placeholder="dominantColor"
          layout="fixed"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h4>fullwidth</h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="blurred"
          layout="fullWidth"
          className="example-img"
          as="article"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  text-align: center;
  gap: 5px;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export default Images
