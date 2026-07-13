# 🔒 Besoins Non Fonctionnels

[← Back to Index](../index.md)

---

## Security

- JWT-based authentication (or secure Symfony sessions)
- Strict role-based access control (RBAC) — each actor only sees what belongs to them
- No self-registration — accounts created exclusively by the admin
- Uploaded files (CVs, reports) stored outside the public web folder, not directly accessible by URL
- Password hashing with bcrypt
- Protection against SQL injection, XSS and CSRF

---

## Performance

- Page response time under 2 seconds under normal conditions
- Plagiarism analysis runs asynchronously (background task) to avoid blocking the UI
- Pagination on all lists (applications, archive, users)

---

## Availability & Reliability

- Scheduled automatic database backups managed by the admin
- Error handling with clear user-facing messages
- Logging of critical actions (logins, validations, deletions)

---

## Ergonomics & Accessibility

- Responsive design — works on desktop, tablet and mobile
- Modern, intuitive UI with distinct spaces per connected role
- Clear navigation between all sections

---

## Maintainability

- Code structured following MVC best practices
- Technical documentation for code and APIs
- Docker containerisation for easy deployment and portability
