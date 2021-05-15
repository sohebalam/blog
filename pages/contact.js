import ContactForm from "../components/contactform/ContactForm"
import Head from "next/head"
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="descritpion" content="send me your messages" />
      </Head>
      <ContactForm />
    </>
  )
}

export default Contact
