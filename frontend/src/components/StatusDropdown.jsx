const statuses = ['NEW', 'CONTACTED', 'CLOSED']
export default function StatusDropdown({ status, disabled, onChange }) { return <select className={`status ${status.toLowerCase()}`} value={status} disabled={disabled} onChange={(event) => onChange(event.target.value)} aria-label="Lead status">{statuses.map((item) => <option key={item}>{item}</option>)}</select> }
