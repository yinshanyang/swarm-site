import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import 'ui-tachyons-light'

const classes = {
  header: 'pv3 ph2 mh2 mh4-ns',
  company: 'f4 fw6',
  country: 'dib pl2 f6 fw4 ttu',
  html: 'h-100',
  body: 'h-100 sans-serif text-normal-80 bg-background-100'
}

const Header = () => (
  <header className={classes.header}>
    <div className='pv3 ph2 bb b--foreground-20'>
      <div className={classes.company}>
        Swarm
        <span className={classes.country}>
          Singapore
        </span>
      </div>
    </div>
  </header>
)

const Head = () => (
  <Helmet>
    <title>Swarm — An Independent Data Visualization Studio</title>
    <meta name='description' content='An independent data visualization studio based in Singapore. We build tools that allow us to better think about and understand the world around us.' />
    <meta name='keywords' content='swarm, data visualisation, data visualization, singapore, dashboard, cartography' />
    <meta name='format-detection' content='telephone=no' />
    <link rel='canonical' href='https://swarm.is/' />
    <html className='h-100' />
    <body className={classes.body} />
    <style>{`
      @-webkit-keyframes fade {
        0%   { opacity: 0; }
        100% { opacity: 1; }
      }
      @-moz-keyframes fade {
        0%   { opacity: 0; }
        100% { opacity: 1; }
      }
      @-o-keyframes fade {
        0%   { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes fade {
        0%   { opacity: 0; }
        100% { opacity: 1; }
      }

      .animation-fade-0 {
        -webkit-animation: fade 1s 0s forwards cubic-bezier(0.6, 0.2, 0.1, 1);
      	-moz-animation:    fade 1s 0s forwards cubic-bezier(0.6, 0.2, 0.1, 1);
      	-o-animation:      fade 1s 0s forwards cubic-bezier(0.6, 0.2, 0.1, 1);
      	animation:         fade 1s 0s forwards cubic-bezier(0.6, 0.2, 0.1, 1);
      }
      .animation-fade-1 {
        -webkit-animation: fade 1s 0.5s forwards cubic-bezier(0.6, 0.2, 0.1, 1);
      	-moz-animation:    fade 1s 0.5s forwards cubic-bezier(0.6, 0.2, 0.1, 1);
      	-o-animation:      fade 1s 0.5s forwards cubic-bezier(0.6, 0.2, 0.1, 1);
      	animation:         fade 1s 0.5s forwards cubic-bezier(0.6, 0.2, 0.1, 1);
      }

    `}</style>
  </Helmet>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Head />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
