import React from 'react'

import 'ui-tachyons-light'

import Head from './Head'
import Header from './Header'

export default ({ children }) => (
  <div>
    <Head />
    <Header />
    {children}
  </div>
)
