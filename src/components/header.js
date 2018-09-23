import React from 'react'

const classes = {
  header: 'pv3 ph2 mh2 mh4-ns',
  company: 'f4 fw6',
  country: 'dib pl2 f6 fw4 ttu'
}

export default () => (
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
