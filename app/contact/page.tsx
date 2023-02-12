import { Fragment } from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import ContactHero from "./ContactHero";

export default function Contact() {
  return (
    <Fragment>
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactForm />
      </main>
    </Fragment>
  );
}
