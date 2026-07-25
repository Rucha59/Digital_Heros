# Digital Heros LeadDesk Mini API

## Development admin account

The application creates this account on its first startup if it does not already exist:

- Username: `admin`
- Password: `Admin@123`
- Role: `ADMIN`

The password is stored in MySQL as a BCrypt hash, never as plain text. Before deploying, set a strong password and JWT key through environment variables:

```powershell
$env:ADMIN_USERNAME = "admin"
$env:ADMIN_EMAIL = "admin@your-domain.com"
$env:ADMIN_PASSWORD = "replace-with-a-long-unique-password"
$env:JWT_SECRET = "replace-with-a-base64-encoded-key-of-at-least-32-bytes"
```

## Authentication

1. `POST /api/auth/login` with JSON `{ "username": "admin", "password": "Admin@123" }`.
2. Copy the `token` returned in the response.
3. Include it in every admin request: `Authorization: Bearer <token>`.

Public endpoints:

- `POST /api/auth/login`
- `POST /api/leads`

Admin-only endpoints:

- `GET /api/leads` (all leads, newest first)
- `GET /api/leads?search=acme` (case-insensitive search across name, email, budget, and message)
- `PATCH /api/leads/{id}`

Tokens have a one-hour lifetime by default and are validated for their signature and expiry on each request. Disabled users cannot authenticate.
