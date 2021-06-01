import React from "react"
import TagList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulSingleRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        featured
        id
        cookTime
        prepTime
        title
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  const {
    allContentfulSingleRecipe: { nodes: recipes },
  } = useStaticQuery(query)

  return (
    <div>
      <section className="recipes-container">
        <TagList recipes={recipes} />
        <RecipesList recipes={recipes} />
      </section>
    </div>
  )
}

export default AllRecipes
