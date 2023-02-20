import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="About" />
        <Hero title="About" />
      </Layout>
    )
  }
}

export default AboutPage
