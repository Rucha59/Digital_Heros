import LeadRow from './LeadRow'

export default function LeadTable({ leads, updatingId, onStatusChange }) {
    if (!leads.length) {
        return <div className="empty-state">No leads match your search.</div>;
    }

    return (
        <div className="table-wrap">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Budget</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Created at</th>
                </tr>
                </thead>
                <tbody>
                {leads.map((lead) => (
                    <LeadRow
                        key={lead.id}
                        lead={lead}
                        updating={updatingId === lead.id}
                        onStatusChange={onStatusChange}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
}