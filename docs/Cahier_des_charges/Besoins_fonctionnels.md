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

## Space Management (BF-04 → BF-08)

| ID | Feature | Description |
|---|---|---|
| BF-04 | Create space | Teacher creates a submission space with a title, description, subject, deadline, and linked class. |
| BF-05 | Configure deliverable type | Teacher sets each space as `INDIVIDUAL` or `GROUP` mode. |
| BF-06 | Configure expected files | Teacher defines the types of files expected (PDF report, source code, etc.). |
| BF-07 | Invite students | Teacher selects specific students from the class to invite to the space. |
| BF-08 | Invitation notification | Invited students receive a notification with space details and deadline. |

---

## Individual Submission Mode (BF-09 → BF-12)

| ID | Feature | Description |
|---|---|---|
| BF-09 | Individual upload | Each invited student uploads their own deliverables independently. |
| BF-10 | Edit before validation | Student can edit their submission until the teacher validates it. |
| BF-11 | Teacher review | Teacher reviews each student's submission individually and accepts/rejects with a grade and comment. |
| BF-12 | Status notification | Student is notified when their submission is validated or rejected. |

---

## Group Submission Mode (BF-13 → BF-17)

| ID | Feature | Description |
|---|---|---|
| BF-13 | First submission wins | The first student in the group to submit registers the group deliverable. |
| BF-14 | Lock on first submission | Once a submission is registered, all other invited students are blocked from submitting. |
| BF-15 | Block notification | Blocked students receive a notification informing them the group submission is already done. |
| BF-16 | Teacher review | Teacher reviews the single group submission and accepts/rejects with a grade. |
| BF-17 | Group result notification | All students in the group are notified of the teacher's decision. |

---

## Plagiarism Detection (BF-18 → BF-21)

| ID | Feature | Description |
|---|---|---|
| BF-18 | Auto analysis | On every report upload, the system automatically runs a similarity analysis against all archived reports. |
| BF-19 | Similarity report | Teacher views a detailed report showing overall similarity rate and flagged passages. |
| BF-20 | Configurable threshold | Admin sets the similarity threshold that triggers an alert (e.g. 20%). |
| BF-21 | Plagiarism alert | If the threshold is exceeded, a warning is shown to the teacher before validation. |

---

## Archive & Showcase (BF-22 → BF-24)

| ID | Feature | Description |
|---|---|---|
| BF-22 | Archive catalogue | Connected students browse past validated PFAs with filters (year, class, tech, grade). |
| BF-23 | Best projects showcase | Top-rated PFAs are highlighted in the catalogue. |
| BF-24 | Archive search | Keyword search in titles and descriptions of archived PFAs. |

---

## Dashboards & Statistics (BF-25 → BF-27)

| ID | Feature | Description |
|---|---|---|
| BF-25 | Student dashboard | Student views their active spaces, submission status and grades. |
| BF-26 | Teacher dashboard | Teacher views submission rates, plagiarism rates and grades per space. |
| BF-27 | Admin dashboard | Admin views global stats by department, class and academic year. |
