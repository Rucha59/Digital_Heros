import api from './api'

export const createLead = (lead) => api.post('/leads', lead).then(({ data }) => data)
export const getAllLeads = (search = '') => api.get('/leads', { params: search ? { search } : {} }).then(({ data }) => data)
export const updateLeadStatus = (id, status) => api.patch(`/leads/${id}`, { status }).then(({ data }) => data)
