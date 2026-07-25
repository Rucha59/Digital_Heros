import { useState } from 'react'
import { createLead } from '../services/leadService'

const emptyLead = { name: '', email: '', budget: '', message: '' }

export default function LeadForm() {
  const [lead, setLead] = useState(emptyLead); const [state, setState] = useState('idle'); const [error, setError] = useState('')
  const change = ({ target }) => setLead((current) => ({ ...current, [target.name]: target.value }))
  async function submit(event) {
    event.preventDefault(); setError(''); setState('loading')
    try { await createLead(lead); setLead(emptyLead); setState('success') }
    catch (exception) { setState('idle'); setError(exception.response?.data?.message || 'Unable to send your enquiry. Please try again.') }
  }
  return <form className="lead-form" onSubmit={submit}>
    <label>Name<input name="name" required value={lead.name} onChange={change} placeholder="Your name" autoComplete="name" /></label>
    <label>Email<input name="email" type="email" required value={lead.email} onChange={change} placeholder="you@company.com" autoComplete="email" /></label>
    <label>Budget range<select name="budget" required value={lead.budget} onChange={change}><option value="" disabled>Select a range</option><option value="Under $5,000">Under $5,000</option><option value="$5,000 – $10,000">$5,000 – $10,000</option><option value="$10,000 – $25,000">$10,000 – $25,000</option><option value="$25,000+">$25,000+</option></select></label>
    <label>Project details<textarea name="message" required minLength="10" maxLength="500" value={lead.message} onChange={change} placeholder="Tell us a little about your project…" /></label>
    {error && <p className="error-message" role="alert">{error}</p>}
    {state === 'success' && <p className="success-message" role="status">Thanks — your lead has been sent successfully.</p>}
    <button
        type="submit"
        disabled={state === "loading"}
        style={{
          width: "100%",
          marginTop: "1.5rem",
          padding: "16px",
          border: "none",
          borderRadius: "999px",
          background: "#6F8F7A", // Dark sage green
          color: "#fff",
          fontSize: "16px",
          fontWeight: "600",
          cursor: state === "loading" ? "not-allowed" : "pointer",
          opacity: state === "loading" ? 0.7 : 1,
          transition: "all 0.2s ease"
        }}
    >
      {state === "loading" ? "Submitting..." : "Submit Enquiry"}
    </button>
  </form>
}
