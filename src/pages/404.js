import React from "react"

import Header from "../components/header"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <>
        <SEO title="Not Found" />
        <Header />
        <div className="not-found">
            <h3>Opps, Page not found...</h3>
        </div>
    </>
)

export default NotFoundPage
