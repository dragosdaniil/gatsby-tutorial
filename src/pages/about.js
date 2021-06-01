import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const query = graphql`
  {
    allContentfulSingleRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        featured
        id
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const About = () => {
  const {
    allContentfulSingleRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
              vero.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quod quae consequuntur! Id, veritatis asperiores.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aliquam enim nihil alias fugiat, expedita voluptates facilis ipsa
              eligendi soluta.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Some about damage"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Awesome recipes</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export default About
