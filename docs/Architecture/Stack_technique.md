# ⚙️ Stack Technique

[← Back to Index](../index.md)

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
| Backend | Symfony (PHP) |
| Desktop client for teacher | Electron.js |
| Database | MySQL |

---

## Key Technical Decisions

### Group submission lock
The group submission lock (`VerrouGroupe`) must be handled **atomically at the database level** to prevent race conditions (two students submitting at the exact same time). This is done with a database transaction + unique constraint on `(espaceId)` in the `VerrouGroupe` table.

```sql
-- Only one lock per space allowed
ALTER TABLE verrou_groupe ADD CONSTRAINT unique_espace UNIQUE (espace_id);
```

### Plagiarism async job
Plagiarism analysis runs as a **background job** after upload to avoid blocking the UI. The submission is saved immediately with status `EN_ANALYSE`, then updated to `EN_ATTENTE` once the report is ready.

---

## Architecture Overview

```mermaid
flowchart LR
    subgraph Client ["Client Layer"]
        Browser["React.js\nBrowser"]:::fe
        Desktop["Electron.js\n(optional)"]:::fe
    end

    subgraph Server ["Server Layer"]
        API["Node.js / Express\nREST API"]:::be
        Auth["JWT Middleware"]:::be
        Lock["Group Lock\n(atomic DB tx)"]:::be
        Plagiarism["Python\nPlagiarism Engine\n(async)"]:::be
    end

    subgraph Data ["Data Layer"]
        DB["PostgreSQL"]:::db
        Files["File Storage\n(reports, code)"]:::db
    end

    Browser --> API
    Desktop --> API
    API --> Auth
    API --> DB
    API --> Files
    API --> Lock
    Lock --> DB
    API --> Plagiarism
    Plagiarism --> DB

    classDef fe fill:#9FE1CB,stroke:#1D9E75,color:#085041
    classDef be fill:#AFA9EC,stroke:#534AB7,color:#26215C
    classDef db fill:#F0997B,stroke:#D85A30,color:#4A1B0C
```
