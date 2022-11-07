import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="mt-40 ml-60">
      <h1 className="text-7xl font-bold font-mono">WAKE-MT-2</h1>
      <p className="opacity-90 mt-5 max-w-sm mb-10 text-lg">
        The industry's strongest and most <font className="text-fuchsia-500 font-bold">beautiful </font>
        Wakeboard Mount. At 4.5" in length its one of the compactest and fits everywhere. It even looks great without a board.
      </p>
      <Link to="/shop/wakemount" className="uppercase text-lg font-semibold border p-5 px-10 hover:bg-opacity-10 bg-opacity-0  hover:text-fuchsia-500 hover:border-fuchsia-500 transition-all active:translate-y-[2px]">Buy Now</Link>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
