import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout>
        <SEO title="Not Found" />
        <div className="not-found">
            <h3>Oops, Page not found...</h3>
        </div>
    </Layout>
)

export default NotFoundPage
