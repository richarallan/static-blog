import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Nada encontrado!</h1>
    <p>A página que você tentou acessar não está disponível</p>
  </Layout>
)

export default NotFoundPage
