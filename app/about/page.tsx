import { Fragment } from "react";
import AboutHero from "./AboutHero";
import Advisory from "./Advisory";


export default function About() {
  return (
    <Fragment>
      <main>
        <AboutHero />
        <Advisory />
      </main>
    </Fragment>
  );
}
