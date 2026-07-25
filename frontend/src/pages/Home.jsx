import Navbar from '../components/Navbar'
import LeadForm from '../components/LeadForm'

export default function Home() {
  return <>
    <Navbar />
    <main className="home">
      <section className="home-copy">
        <p className="eyebrow">Digital Heros · LeadDesk</p>
        <h1>Let’s make the<br /><em>next big thing.</em></h1>
        <p className="intro">Have a project in mind? Share the essentials and our team will get back to you shortly.</p>
        <div className="shape shape-one" /><div className="shape shape-two" />

      </section>
      <section className="form-card"><p className="form-number">01 / New enquiry</p><h2>Tell us about<br />your project.</h2><LeadForm /></section>

    </main>
    <footer>
      <a href="https://digitalheroesco.com" target="_blank" rel="noreferrer">Built for Digital Heroes<br />Training Task</a>
    </footer>
  </>
}
