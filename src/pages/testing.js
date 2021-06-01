import React from "react"
import { graphql } from "gatsby"
import Gallery from "../examples/Gallery"
import Layout from "../components/Layout"
const Testing = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

export default Testing
