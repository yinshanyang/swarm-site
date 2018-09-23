import React from 'react'
import Helmet from 'react-helmet'

const classes = {
  html: 'h-100',
  body: 'h-100 sans-serif text-normal-80 bg-background-100'
}

export default () => (
  <Helmet>
    <title>Swarm — An Independent Data Visualization Studio</title>
    <meta name='description' content='An independent data visualization studio based in Singapore. We build tools that allow us to better think about and understand the world around us.' />
    <meta name='keywords' content='swarm, data visualisation, data visualization, studio, agency, singapore, dashboard, cartography' />
    <meta name='format-detection' content='telephone=no' />
    <link rel='canonical' href='https://swarm.is/' />
    <html className={classes.html} />
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
