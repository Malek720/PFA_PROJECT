# 🔒 Besoins Non Fonctionnels

[← Back to Index](../index.md)

---

## Security

- JWT-based authentication with role-based access control (RBAC)
- No self-registration — accounts created exclusively by the admin
- Uploaded files stored outside the public web root, not directly accessible by URL
- Password hashing with bcrypt
- Group submission race condition handled server-side (atomic lock on first submission)
- Protection against SQL injection, XSS and CSRF

---

## Performance

- Page response time under 2 seconds under normal conditions
- Plagiarism analysis runs asynchronously (background job) to avoid blocking the UI
- Submission lock in group mode handled atomically at database level to prevent double submissions
- Pagination on all lists (spaces, submissions, archive)

---

## Availability & Reliability

- Scheduled automatic database backups managed by the admin
- Error handling with clear user-facing messages
- Logging of critical actions (logins, submissions, validations, locks)
- Notifications delivered reliably on all key events (invitation, submission, lock, decision)

---

## Ergonomics & Accessibility

- Responsive design — works on desktop, tablet and mobile
- Clear visual distinction between Individual and Group spaces
- Group-locked spaces clearly show which student submitted and when
- Students blocked from submitting see a clear, friendly message explaining why

---

## Maintainability

- Code structured following MVC best practices
- API documented (REST endpoints)
- Docker containerisation for easy deployment and portability
