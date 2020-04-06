import React from 'react'

import Breadcrumbs from '../components/breadcrumbs'
import Blog from '../components/blog'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../assets/less/page.less'

const IndexPage = () => (
  <Layout>
    <SEO title='Blog' />
    <Breadcrumbs crumbs={[
      { label: 'Blog', url: '/', active: true },
      { label: 'Archive', url: '/archive' }
    ]} />
    <Blog />
  </Layout>
)

export default IndexPage
