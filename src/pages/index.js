import React from "react"
//import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <PostItem 
      slug ="/about/"
      background = "#cecece"
      category = "Misc"
      date = "07 de Dezembro de 2020"
      timeToRead = "5"
      title = "Diga não ao Medium: tenha sua própria plataforma"
      description = "Algumas razões para você ter a sua própria plataforma ao invés de soluções como o Medium"
    />
  </Layout>
)

export default IndexPage