# ✅ Besoins Fonctionnels

[← Back to Index](../index.md)

---

## Authentication & Access (BF-01 → BF-03)

| ID | Feature | Description |
|---|---|---|
| BF-01 | Authentication | Secure login by email/password per role. No self-registration — accounts created by admin only. |
| BF-02 | Role-based access | Each actor only accesses features matching their role. |
| BF-03 | Password reset | Admin can reset any user's password. |

---

## Subject Management (BF-04 → BF-07)

| ID | Feature | Description |
|---|---|---|
| BF-04 | Create subject | Supervisor creates a PFA subject with title, description, required technologies and target classes. |
| BF-05 | Configure deliverables | Supervisor sets expected file types per subject (PDF report, source code, etc.). |
| BF-06 | Assign subject | Admin can assign a subject to a supervisor or class. |
| BF-07 | Subject catalogue | Students browse available subjects with filters (class, tech, supervisor). |

---

## Application Management (BF-08 → BF-11)

| ID | Feature | Description |
|---|---|---|
| BF-08 | Submit application | Student applies to a subject by uploading CV + cover letter as a single PDF. |
| BF-09 | Process application | Supervisor reviews applications and accepts/rejects with an optional comment. |
| BF-10 | Track application | Student tracks their application status in real time (pending / accepted / rejected). |
| BF-11 | Decision notification | Student receives a notification on any status change. |

---

## Deliverable Submission (BF-12 → BF-14)

| ID | Feature | Description |
|---|---|---|
| BF-12 | Upload deliverables | Accepted student uploads their PDF report and source code per supervisor config. |
| BF-13 | Edit submission | Student can edit their submission until the supervisor validates it. |
| BF-14 | Validate submission | Supervisor validates or rejects with a grade and comment. |

---

## Plagiarism Detection (BF-15 → BF-18)

| ID | Feature | Description |
|---|---|---|
| BF-15 | Auto analysis | On every report upload, the system automatically runs a similarity analysis against all archived reports. |
| BF-16 | Similarity report | Supervisor views a detailed report showing overall similarity rate and flagged passages. |
| BF-17 | Configurable threshold | Admin sets the similarity threshold that triggers an alert (e.g. 20%). |
| BF-18 | Plagiarism alert | If the threshold is exceeded, a warning is shown to the supervisor before validation. |

---

## Archive & Showcase (BF-19 → BF-21)

| ID | Feature | Description |
|---|---|---|
| BF-19 | Archive catalogue | Connected students browse past PFAs with filters (year, class, tech, grade). |
| BF-20 | Best projects showcase | Top-rated PFAs are highlighted and featured in the catalogue. |
| BF-21 | Archive search | Keyword search in titles and descriptions of archived PFAs. |

---

## Dashboards & Statistics (BF-22 → BF-24)

| ID | Feature | Description |
|---|---|---|
| BF-22 | Student dashboard | Student views active applications, submission status and grades. |
| BF-23 | Supervisor dashboard | Supervisor views validation rates, plagiarism rates and grades for their projects. |
| BF-24 | Admin dashboard | Admin views global stats by department, class and academic year. |
