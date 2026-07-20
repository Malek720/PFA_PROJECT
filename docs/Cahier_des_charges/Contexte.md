# 📌 Contexte et Objectifs

[← Back to Index](../index.md)

---

## 1. Problem Statement

Each academic year, ESPRIT students produce PFA (Projets de Fin d'Année) that accumulate without any structured submission or archiving system. Teachers currently manage deliverable collection manually, with no way to enforce submission rules (who submits, how many copies, in what order) or verify reports automatically for plagiarism.

A centralised platform is needed where teachers can create structured submission spaces per class, define the type of deliverables expected, and invite specific students — while the system enforces submission rules and runs automatic plagiarism detection.

---

## 2. Project Objective

Develop a web application **"Plateforme de Gestion des PFA"** that will:

- Allow teachers to create submission spaces tied to specific classes or student groups
- Let teachers configure each space with individual or group deliverable types
- Allow teachers to invite specific students to each space
- Enforce submission rules: individual (each student submits their own) vs group (first submission locks out others)
- Notify students of space invitations, submission status, and teacher decisions
- Run automatic AI-based plagiarism detection on every submitted report
- Archive validated projects for future cohorts to browse

---

## 3. Scope

- Web application with three roles: **Admin, Teacher (Encadrant), Student**
- Teacher creates and configures submission spaces per class/group
- Teacher selects specific students to invite to each space
- Two deliverable modes per space:
  - **Individual** — every invited student submits independently, teacher reviews each one
  - **Group** — first student to submit locks the space; others are notified and blocked
- Automatic plagiarism detection on submitted reports
- Archive of validated PFAs browsable by connected students
- Admin manages accounts, departments, classes, and academic years

---

## 4. Timeline

| Week | Focus |
|---|---|
| 1–2 | Requirements analysis, UML diagrams, environment setup |
| 3–4 | Auth, space creation, student invitation system |
| 5–6 | Deliverable submission (individual + group logic), plagiarism module |
| 7 | Archive, notifications, dashboards |
| 8 | Testing, fixes, deployment, internship report |
