# ⚙️ Stack Technique

[[Index|← Back to Index]]

---

## Primary Stack

| Layer | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js / Express |
| Database | PostgreSQL |
| Auth | JWT (JSON Web Token) |
| Plagiarism | Python / NLP (TF-IDF + cosine similarity) or external API |
| DevOps | Docker / Docker Compose |
| Version control | Git (GitHub) |
| IDE | VSCode |

---

## Alternatives / Extensions

| Use case | Alternative |
|---|---|
| Backend | Symfony (PHP) — strong MVC, ORM, security built-in |
| Desktop client for supervisor | Electron.js |
| Database | MySQL |

---

## Architecture Overview

```mermaid
flowchart LR
    subgraph Client ["Client Layer"]
        Browser["React.js\nBrowser"]:::fe
        Desktop["Electron.js\nDesktop (optional)"]:::fe
    end

    subgraph Server ["Server Layer"]
        API["Node.js / Express\nREST API"]:::be
        Auth["JWT Auth\nMiddleware"]:::be
        Plagiarism["Python\nPlagiarism Engine"]:::be
    end

    subgraph Data ["Data Layer"]
        DB["PostgreSQL\nDatabase"]:::db
        Files["File Storage\n(reports, CVs)"]:::db
    end

    Browser --> API
    Desktop --> API
    API --> Auth
    API --> DB
    API --> Files
    API --> Plagiarism
    Plagiarism --> DB

    classDef fe fill:#9FE1CB,stroke:#1D9E75,color:#085041
    classDef be fill:#AFA9EC,stroke:#534AB7,color:#26215C
    classDef db fill:#F0997B,stroke:#D85A30,color:#4A1B0C
```

---

## Security Decisions

- Files stored **outside** the public web root — never accessible by direct URL
- All routes protected by JWT middleware
- RBAC enforced at API level, not just UI level
- Passwords hashed with bcrypt
- Plagiarism runs as an **async background job** to avoid blocking the UI
