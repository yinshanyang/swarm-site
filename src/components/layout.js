import React from 'react'

import 'ui-tachyons-light'

import Head from './head'
import Header from './header'

export default ({ children }) => (
  <div>
    <Head />
    <Header />
    {children}
  </div>
)
