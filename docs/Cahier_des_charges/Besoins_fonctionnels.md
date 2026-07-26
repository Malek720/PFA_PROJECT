<div class="lang-fr" markdown="1">

# ✅ Besoins Fonctionnels

[← Retour à l'accueil](../index.md)

---

## Authentification & Accès (BF-01 → BF-03)

| ID | Fonctionnalité | Description |
|---|---|---|
| BF-01 | Authentification | Connexion sécurisée par email/mot de passe selon le rôle. Aucune auto-inscription. |
| BF-02 | Contrôle d'accès par rôle | Chaque acteur accède uniquement aux fonctionnalités correspondant à son rôle. |
| BF-03 | Réinitialisation mot de passe | L'administrateur peut réinitialiser le mot de passe d'un utilisateur. |

---

## Gestion des Classes (BF-04 → BF-06)

| ID | Fonctionnalité | Description |
|---|---|---|
| BF-04 | Structure classe | Une classe académique est définie par : niveau (L1/L2/L3/M1/M2) + option + nom de classe. Remplace département. |
| BF-05 | Unicité du titre par classe | Le titre d'un projet PFA doit être unique au sein d'une même classe académique. |
| BF-06 | Cycle classe ↔ sujet | Un sujet peut être associé à plusieurs classes sur plusieurs années ; une classe peut avoir plusieurs sujets (relation many-to-many cyclique via année académique). |

---

## Gestion des Projets (BF-07 → BF-12)

| ID | Fonctionnalité | Description |
|---|---|---|
| BF-07 | Création de projet | L'enseignant principal crée un projet PFA avec titre, description, deadline et classe associée. |
| BF-08 | Invitation enseignant secondaire | Lors de la création, l'enseignant principal peut inviter un enseignant secondaire qui obtient les mêmes privilèges sauf la création. |
| BF-09 | Configuration du type de livrable | L'enseignant configure le type : INDIVIDUEL ou GROUPE. |
| BF-10 | Assignation individuelle d'étudiants | L'enseignant assigne des étudiants spécifiques au projet (pas d'assignation automatique de classe entière). |
| BF-11 | Gestion des groupes | En mode GROUPE : l'enseignant affecte les membres du groupe et désigne un responsable unique. |
| BF-12 | Notification d'assignation | Les étudiants assignés reçoivent une notification avec les détails du projet. |

---

## Dépôt Individuel (BF-13 → BF-16)

| ID | Fonctionnalité | Description |
|---|---|---|
| BF-13 | Dépôt individuel | Chaque étudiant assigné dépose son propre rapport + code source. |
| BF-14 | Modification avant validation | L'étudiant peut modifier sa soumission tant qu'elle n'est pas validée. |
| BF-15 | Validation individuelle | L'enseignant valide ou rejette chaque soumission avec une note et un commentaire. |
| BF-16 | Modification du statut | L'enseignant peut modifier une décision déjà prise (ex. passer de rejeté à validé). |

---

## Dépôt de Groupe (BF-17 → BF-21)

| ID | Fonctionnalité | Description |
|---|---|---|
| BF-17 | Dépôt par le responsable | Seul le responsable du groupe désigné par l'enseignant peut déposer le livrable. |
| BF-18 | Blocage des autres membres | Les autres membres du groupe sont bloqués et ne peuvent pas déposer. |
| BF-19 | Notification de blocage | Les membres bloqués reçoivent une notification expliquant que le responsable doit déposer. |
| BF-20 | Validation du groupe | L'enseignant valide le livrable de groupe avec une note commune. |
| BF-21 | Modification du statut | L'enseignant peut réviser sa décision (ex. rejeter une soumission précédemment acceptée). |

---

## Détection de Plagiat (BF-22 → BF-25)

| ID | Fonctionnalité | Description |
|---|---|---|
| BF-22 | Analyse automatique | À chaque dépôt de rapport, le système lance une analyse de similarité par IA (async). |
| BF-23 | Rapport de similarité | L'enseignant consulte le taux de similarité et les passages suspects. |
| BF-24 | Seuil configurable | L'administrateur configure le seuil au-delà duquel une alerte est générée. |
| BF-25 | Alerte de plagiat | Si le seuil est dépassé, une alerte est affichée à l'enseignant avant validation. |

---

## Archives & Tableaux de bord (BF-26 → BF-29)

| ID | Fonctionnalité | Description |
|---|---|---|
| BF-26 | Catalogue des archives | Les étudiants connectés consultent les PFA archivés avec filtres (année, niveau, option, classe). |
| BF-27 | Dashboard étudiant | L'étudiant visualise ses projets, statuts de soumission et notes. |
| BF-28 | Dashboard enseignant | L'enseignant visualise les taux de validation, de plagiat et les notes de ses projets. |
| BF-29 | Dashboard admin | L'administrateur visualise les statistiques globales par niveau, option, classe et année. |

</div>
<div class="lang-en" markdown="1">

# ✅ Functional Requirements

[← Back to Index](../index.md)

---

## Authentication & Access (BF-01 → BF-03)

| ID | Feature | Description |
|---|---|---|
| BF-01 | Authentication | Secure login by email/password per role. No self-registration. |
| BF-02 | Role-based access | Each actor only accesses features matching their role. |
| BF-03 | Password reset | Admin can reset any user's password. |

---

## Class Management (BF-04 → BF-06)

| ID | Feature | Description |
|---|---|---|
| BF-04 | Class structure | An academic class is defined by: level (L1/L2/L3/M1/M2) + option + class name. Replaces department. |
| BF-05 | Title uniqueness per class | A PFA project title must be unique within a given academic class. |
| BF-06 | Class ↔ subject cycle | A subject can be linked to multiple classes across multiple years; a class can have multiple subjects (many-to-many via academic year). |

---

## Project Management (BF-07 → BF-12)

| ID | Feature | Description |
|---|---|---|
| BF-07 | Create project | Primary teacher creates a PFA project with title, description, deadline and linked class. |
| BF-08 | Invite secondary teacher | At creation, primary teacher can invite a secondary teacher who gets the same privileges except project creation. |
| BF-09 | Configure deliverable type | Teacher sets the type: INDIVIDUAL or GROUP. |
| BF-10 | Individual student assignment | Teacher assigns specific students to the project (no automatic whole-class assignment). |
| BF-11 | Group management | In GROUP mode: teacher assigns group members and designates a single group leader. |
| BF-12 | Assignment notification | Assigned students receive a notification with project details. |

---

## Individual Submission (BF-13 → BF-16)

| ID | Feature | Description |
|---|---|---|
| BF-13 | Individual upload | Each assigned student uploads their own report + source code. |
| BF-14 | Edit before validation | Student can edit their submission until the teacher validates it. |
| BF-15 | Individual validation | Teacher validates or rejects each submission with a grade and comment. |
| BF-16 | Status revision | Teacher can revise a decision already made (e.g. change rejected to validated). |

---

## Group Submission (BF-17 → BF-21)

| ID | Feature | Description |
|---|---|---|
| BF-17 | Leader submits | Only the group leader designated by the teacher can upload the deliverable. |
| BF-18 | Block other members | Other group members are blocked from submitting. |
| BF-19 | Block notification | Blocked members receive a notification explaining the leader must submit. |
| BF-20 | Group validation | Teacher validates the group deliverable with a shared grade. |
| BF-21 | Status revision | Teacher can revise their decision (e.g. reject a previously accepted submission). |

---

## Plagiarism Detection (BF-22 → BF-25)

| ID | Feature | Description |
|---|---|---|
| BF-22 | Auto analysis | On every report upload, the system automatically runs an AI similarity analysis (async). |
| BF-23 | Similarity report | Teacher views similarity rate and flagged passages. |
| BF-24 | Configurable threshold | Admin sets the threshold above which an alert is triggered. |
| BF-25 | Plagiarism alert | If threshold exceeded, a warning is shown to the teacher before validation. |

---

## Archive & Dashboards (BF-26 → BF-29)

| ID | Feature | Description |
|---|---|---|
| BF-26 | Archive catalogue | Connected students browse past PFAs with filters (year, level, option, class). |
| BF-27 | Student dashboard | Student views their projects, submission statuses and grades. |
| BF-28 | Teacher dashboard | Teacher views validation rates, plagiarism rates and grades per project. |
| BF-29 | Admin dashboard | Admin views global stats by level, option, class and academic year. |

</div>
