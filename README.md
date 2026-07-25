# Digital Heros - Lead Management System

A full-stack Lead Management application that allows potential customers to submit enquiries through a public landing page while providing administrators with a secure dashboard to manage incoming leads.

The application is built using **React**, **Spring Boot**, and **MySQL**, and is deployed using **Vercel**, **Render**, and **Railway**.

---

## Features

### Public Landing Page
- Submit lead enquiries with:
  - Name
  - Email
  - Budget Range
  - Message
- Client-side and server-side validation
- Stores submissions securely in a MySQL database

### Admin Dashboard
- Secure JWT-based authentication
- View all submitted leads
- Search leads by name or email
- Update lead status
- View submission details
- Protected API endpoints

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- Java 17
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Maven

### Database
- MySQL (Railway)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Railway

---

## Project Structure

```
digital-heros/
│
├── frontend/          # React application
│
└── backend/           # Spring Boot REST API
    ├── controller
    ├── service
    ├── repository
    ├── entity
    ├── security
    └── dto
```

---

## Authentication

The admin dashboard is protected using **JSON Web Tokens (JWT)**.

1. Admin logs in using username and password.
2. Backend validates the credentials.
3. A JWT token is generated and returned.
4. The frontend stores the token.
5. All protected API requests include the token in the `Authorization` header.

---

## API Endpoints

### Public APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/login` | Admin login |
| POST | `/api/leads` | Submit a new lead |

### Protected APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/leads` | Get all leads |
| GET | `/api/leads/{id}` | Get lead by ID |
| PUT | `/api/leads/{id}` | Update lead status |

---

## Database

Each lead contains:

- Name
- Email
- Budget Range
- Message
- Status
- Created Timestamp

The application also stores administrator credentials securely using **BCrypt password hashing**.

---

## Security

- Spring Security
- BCrypt password encryption
- JWT authentication
- Stateless sessions
- CORS configuration for frontend deployment
- Endpoint authorization based on authentication

---

## Running Locally

### Backend

```bash
cd backend
mvn spring-boot:run
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

### Backend

```properties
DB_URL=
DB_USERNAME=
DB_PASSWORD=

JWT_SECRET=
JWT_EXPIRATION_MS=

ADMIN_USERNAME=
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

---

## Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | Railway |

---

## Future Improvements

- Pagination
- Sorting and filtering
- Delete leads
- Email notifications
- Dashboard analytics
- Role-based access control
- Refresh tokens
- Password reset functionality
- Docker support
- Unit and integration tests


---

## Author

**Rucha Pathak**

- BITS Pilani, Goa Campus
- Computer Science
- Full Stack Developer
