import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import LeadTable from '../components/LeadTable'
import Loader from '../components/Loader'
import { getAllLeads, updateLeadStatus } from '../services/leadService'

export default function Dashboard() {
    const [leads, setLeads] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [updatingId, setUpdatingId] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const timer = setTimeout(async () => {
            setLoading(true)
            try {
                setLeads(await getAllLeads(search))
                setError('')
            } catch {
                setError('We could not load leads. Please refresh the page.')
            } finally {
                setLoading(false)
            }
        }, 250)

        return () => clearTimeout(timer)
    }, [search])

    async function changeStatus(id, status) {
        setUpdatingId(id)

        try {
            const updated = await updateLeadStatus(id, status)
            setLeads((all) =>
                all.map((lead) => (lead.id === id ? updated : lead))
            )
        } catch {
            setError('Status update failed. Please try again.')
        } finally {
            setUpdatingId(null)
        }
    }

    return (
        <>
            <Navbar dashboard />

            <main className="dashboard">
                <div className="dashboard-title">
                    <div>
                        <p className="eyebrow">Admin dashboard</p>
                        <h1>Leads</h1>
                    </div>

                    <span>{leads.length} total</span>
                </div>

                <SearchBar value={search} onChange={setSearch} />

                {error && <p className="error-message">{error}</p>}

                {loading ? (
                    <Loader label="Loading leads…" />
                ) : (
                    <LeadTable
                        leads={leads}
                        updatingId={updatingId}
                        onStatusChange={changeStatus}
                    />
                )}
            </main>

            <footer>
                Built for{' '}
                <a
                    href="https://digitalheroesco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Digital Heroes Training Task
                </a>
            </footer>
        </>
    )
}