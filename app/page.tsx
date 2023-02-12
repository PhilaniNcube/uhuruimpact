
import { Fragment } from 'react'
import HomepageHero from './HomepageHero'
import OurFocus from './OurFocus'
import TeamHero from './TeamHero'
import Welcome from './Welcome'



export default function Home() {
  return (
  <Fragment>
    <main>
      <HomepageHero />
      <Welcome />
      <TeamHero />
      <OurFocus />
    </main>
  </Fragment>
  )
}
