# LeadDesk Mini

A full-stack lead management application built as part of the **Digital Heroes Internship Qualification Task**.

The application consists of a public landing page where potential customers can submit enquiries and a secure admin dashboard where authorized users can view, search, and manage submitted leads.

---

## Live Demo

**Landing Page:** [https://digital-heros-qfxa8kdpb-rucha3.vercel.app/](https://digital-heros-qfxa8kdpb-rucha3.vercel.app/)

**Admin Dashboard:**  https://digital-heros-qfxa8kdpb-rucha3.vercel.app/login   
  Note: (is accessible only through the landing page)

**Backend API:** https://digital-heros-mmyr.onrender.com

---

## Test Credentials

Username: `admin`

Password: `Admin@123`

---

# Features

## Public Landing Page

Visitors can submit a lead by filling out:

- Name
- Email
- Budget Range
- Message

### Validation

Client-side validation:
- Required fields
- Email format validation
- Budget selection

Server-side validation:
- Bean Validation using Jakarta Validation
- Invalid requests return appropriate HTTP responses

Submitted leads are stored in a MySQL database.

---

## Admin Dashboard

The admin dashboard provides:

- Secure login
- View all submitted leads
- Search leads by name or email
- Update lead status

Lead statuses include:

- New
- Contacted
- Closed

Only authenticated administrators can access protected endpoints.

---

# Tech Stack

## Frontend

- React
- Vite
- Axios
- CSS

## Backend

- Java 17
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Maven

## Database

- MySQL (Railway)

## Deployment

Frontend:
- Vercel

Backend:
- Render

Database:
- Railway

---

# Data Model

## Lead

| Field | Type |
|--------|------|
| id | Long |
| name | String |
| email | String |
| budgetRange | String |
| message | String |
| status | Enum (NEW, CONTACTED, CLOSED) |
| createdAt | Timestamp |

---

## User

| Field | Type |
|--------|------|
| id | Long |
| username | String |
| email | String |
| passwordHash | String (BCrypt) |
| role | String |
| active | Boolean |

---

# Authentication

The admin dashboard is secured using **JWT (JSON Web Tokens)**.

Authentication flow:

1. Admin logs in with username and password.
2. Spring Security validates the credentials.
3. Passwords are verified using BCrypt hashing.
4. A signed JWT is generated.
5. The frontend stores the token.
6. Every protected request sends:

```
Authorization: Bearer <JWT_TOKEN>
```

7. A custom JWT filter validates the token before granting access.

Sessions are stateless and handled entirely through JWT.

---

# API Endpoints

## Public APIs

### Login

```
POST /api/auth/login
```

Returns a JWT token after successful authentication.

---

### Submit Lead

```
POST /api/leads
```

Creates a new lead.

---

## Protected APIs

### Get All Leads

```
GET /api/leads
```

Returns all leads.

---

### Get Lead

```
GET /api/leads/{id}
```

Returns a single lead.

---

### Update Lead Status

```
PUT /api/leads/{id}
```

Updates the lead status.

Requires authentication.

---

# Running Locally

## Backend

```bash
cd backend
mvn spring-boot:run
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

```
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

# Deployment

| Component | Platform |
|------------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | Railway |

---

# Project Structure

```
backend/
 ├── controller
 ├── dto
 ├── entity
 ├── exception
 ├── repository
 ├── security
 ├── service

frontend/
 ├── components
 ├── pages
 ├── services
 ├── App.jsx
```

---

# Future Improvements

- Pagination
- Sorting
- Better filtering
- Delete leads
- Email notifications
- Dashboard analytics
- Multiple admin users
- Role-based authorization
- Refresh tokens
- Unit and integration tests
- Docker support

---

# Qualification Task Requirements

## Task A

-  Public landing page
-  Client-side validation
-  Server-side validation
-  Real MySQL database
-  Admin dashboard
-  Search functionality
-  Lead status management

## Task B

-  Secure JWT authentication
-  BCrypt password hashing
-  Fully deployed application
-  Stateless authentication
-  README documentation
-  Ready for Loom walkthrough

---

## Footer Credit

The application includes the required footer:

**Built for Digital Heroes Training Task**

linked to **https://digitalheroesco.com**

---

## Author

**Rucha Pathak**

BITS Pilani, Goa Campus

Computer Science
