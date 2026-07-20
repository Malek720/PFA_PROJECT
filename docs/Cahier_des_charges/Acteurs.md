# 👥 Acteurs du Système

[← Back to Index](../index.md)

---

## 1. Administrateur

The admin manages the platform globally and is the sole account creator.

- Creates and manages user accounts (teachers and students)
- Manages departments, classes and academic years
- Configures plagiarism detection threshold
- Manages database backups
- Views global statistics

---

## 2. Enseignant (Teacher)

The teacher is the central actor of the space management workflow.

- Logs in with an admin-created account
- **Creates a submission space** linked to a specific class or subject
- **Configures the deliverable type** per space:
  - `INDIVIDUAL` — each invited student submits independently
  - `GROUP` — only the first submission is accepted; others are blocked
- **Selects and invites specific students** to the space (not the whole class automatically)
- Reviews submitted deliverables one by one (individual mode) or validates the first submission (group mode)
- Consults the plagiarism report for each submission
- Validates or rejects with a grade and optional comment
- Views statistics for their spaces

---

## 3. Étudiant (Student)

The student receives access to spaces they are invited to and submits deliverables accordingly.

- Logs in with an admin-created account (no self-registration)
- **Receives a notification** when invited to a submission space
- Views the space details: subject, deadline, deliverable type, expected files
- **Individual mode:** submits their own report and source code independently
- **Group mode:** 
  - If first to submit → submission is registered and space is locked for others
  - If not first → receives a notification that the group submission is already done and is blocked from submitting
- Tracks submission status (pending / validated / rejected)
- Views grade and teacher feedback
- Browses the archive of past validated PFAs
