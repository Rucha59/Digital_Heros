import StatusDropdown from './StatusDropdown'

export default function LeadRow({ lead, updating, onStatusChange }) {
    const date = lead.createdAt
        ? new Intl.DateTimeFormat('en', {
            dateStyle: 'medium',
            timeStyle: 'short',
        }).format(new Date(lead.createdAt))
        : '—';

    return (
        <tr>
            <td><strong>{lead.name}</strong></td>

            <td>
                <a href={`mailto:${lead.email}`}>{lead.email}</a>
            </td>

            <td>{lead.budget}</td>

            <td className="message-cell" title={lead.message}>
                {lead.message}
            </td>

            <td>
                <StatusDropdown
                    status={lead.status}
                    disabled={updating}
                    onChange={(status) => onStatusChange(lead.id, status)}
                />
            </td>

            <td>{date}</td>
        </tr>
    );
}