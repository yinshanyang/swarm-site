import React from 'react'

const classes = {
  main: 'ph2 mh2 mh4-ns',
  titleSection: 'ph2 vh-100',
  section: 'pv5 ph2',
  title: 'f2 f1-ns fw6 lh-title measure-narrow ma0 mb4',
  header: 'f4 fw6 lh-title measure ma0 mt5 mb3',
  subheader: 'f6 fw6 lh-title ttu measure ma0 mt5 mb3',
  blurb: 'f4 f3-ns lh-copy measure ma0 mb3',
  body: 'f5 lh-copy measure ma0 mb3',
  list: 'list f5 lh-copy measure ma0 pa0',
  item: 'db',
  link: 'text-normal-100 link fw5 bb b--foreground-10 dim bw1',
  strong: 'fw5'
}

export default () => (
  <main className={classes.main}>
    <section className={classes.titleSection}>
      <div className={classes.title}>
        <h1 className='di f2 f1-ns animation-fade-0 o-0'>An independent data visualisation studio based in Singapore.</h1>{` `}
        <h2 className='di f2 f1-ns fw4 animation-fade-1 o-0'>We build tools that allow us to better think about and understand the world around us.</h2>
      </div>
    </section>

    <section className={classes.section}>
      <h3 className={classes.header}>
        Services
      </h3>
      <p className={classes.blurb}>
        <strong className={classes.strong}>We build software tools that facilitate understanding and decision making.</strong>{` `}
        We have built tools used in mobile network planning, media monitoring, transport planning, retail performance tracking, and crowd monitoring amongst others.
      </p>

      <h3 className={classes.header}>
        Projects
      </h3>
      <p className={classes.blurb}>
        Visualisations are closely tied to the data that drives them, and thus it’s hard to present commerical work without exposing the proprietary data that lies beneath.
      </p>
      <p className={classes.blurb}>
        Instead, here are some of our exploratory work that we have worked on previously. We recommend starting with <a className={classes.link} href='https://medium.com/@yinshanyang/isochronic-singapore-a-gentle-introduction-to-isochrone-maps-9cceebc72f60'>Isochronic Singapore</a>, a collection of analyses and an online application which focuses on commuter travel and accessibility in Singapore.
      </p>
      <p className={classes.blurb}>
        Or explore the social network of corporate Singapore in <a className={classes.link} href='https://static.swarm.is/corporate.cosmograph/live/'>Corporate Cosmograph</a>. And lastly, one of our earliest works, <a className={classes.link} href='https://techwireasia.com/2011/04/visualisation-chart-maps-singapore-election-buzz-online/'>GE2011 Tracker</a>, tracks the national agenda online during the Singapore general elections in 2011.
      </p>

      <h3 className={classes.header}>
        Clients
      </h3>
      <p className={classes.body}>
        <ul className={classes.list}>
          <li className={classes.item}>Asian Art Archive</li>
          <li className={classes.item}>Bill & Melinda Gates Foundation</li>
          <li className={classes.item}>Bosch</li>
          <li className={classes.item}>Bureau of Cultural Affairs, Kaoshiung City Government</li>
          <li className={classes.item}>DataSpark</li>
          <li className={classes.item}>DBS Bank</li>
          <li className={classes.item}>Deloitte</li>
          <li className={classes.item}>DesignSingapore Council</li>
          <li className={classes.item}>Housing and Development Board</li>
          <li className={classes.item}>International Fund for Agricultural Development</li>
          <li className={classes.item}>Mann+Hummel</li>
          <li className={classes.item}>MSL Group</li>
          <li className={classes.item}>Samsung Asia</li>
          <li className={classes.item}>Sedgwick Richardson</li>
          <li className={classes.item}>Singapore Visual Archive</li>
          <li className={classes.item}>SingTel</li>
          <li className={classes.item}>State of Buildings</li>
          <li className={classes.item}>Teralytics</li>
          <li className={classes.item}>The OTHER Media</li>
          <li className={classes.item}>Uniqlo</li>
          <li className={classes.item}>Urbanzoom</li>
          <li className={classes.item}>Xynteo</li>
          <li className={classes.item}>Young & Rubicam</li>
        </ul>
      </p>
    </section>

    <section className={classes.section}>
      <h3 className={classes.header}>
        Contact
      </h3>
      <p className={classes.body}>
        49 Jalan Pemimpin #02-08<br />
        Singapore 577203
      </p>
      <p className={classes.body}>
        (65) 6354 3006
      </p>
      <p className={classes.body}>
        <a className={classes.link} href='mailto:hello@swarm.is'>hello@swarm.is</a>
      </p>
    </section>
  </main>
)
