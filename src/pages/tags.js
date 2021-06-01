import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import setupTags from "../utils/setupTags"
import SEO from "../components/SEO"

const query = graphql`
  {
    allContentfulSingleRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default function Tags() {
  const {
    allContentfulSingleRecipe: { nodes: recipes },
  } = useStaticQuery(query)
  const newTags = setupTags(recipes)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/tags/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}
