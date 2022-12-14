import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ShopPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mt-40 ml-60">
      <h1 className="text-7xl font-bold font-mono">Contact</h1>
      <p className="opacity-90 mt-5 max-w-sm text-lg">Feel free to send me a message!</p>
      <p className="text-fuchsia-500">a-emile-g@protonmail.com</p>
      </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default ShopPage
