import React from 'react'

import Layout from '../components/layout'

const classes = {
  section: 'pv4 ph5 bb b--foreground-20',
  lastSection: 'pv4 ph5',
  subtitle: 'f6 ttu tracked',
  blurb: 'f4 lh-copy measure',
  body: 'f5 lh-copy measure',
  link: 'text-normal no-underline bb b--foreground-20 dim'
}

export default () => (
  <Layout>
    <div>
      <section className={classes.lastSection}>
        <h3 className={classes.subtitle}>
          How the fuck?
        </h3>
        <p className={classes.blurb}>
          How the fuck did you even get here?
        </p>
        <p className={classes.body}>
          I mean… it’s a single page site yos.
        </p>
      </section>
    </div>
  </Layout>
)
