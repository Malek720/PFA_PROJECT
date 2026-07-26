<div class="lang-fr" markdown="1">

# 👥 Acteurs du Système

[← Retour à l'accueil](../index.md)

---

## 1. Administrateur

Seul gestionnaire technique de la plateforme. Seul à pouvoir créer des comptes.

- Gère les comptes utilisateurs (création, modification, suppression, rôles)
- Gère les niveaux, options et classes académiques (remplace département)
- Gère les années académiques
- Configure le seuil de détection de plagiat
- Gère les sauvegardes de la base de données
- Visualise les statistiques globales

---

## 2. Enseignant Principal (Créateur de projet)

L'enseignant principal est le seul à pouvoir créer un projet PFA. Il invite optionnellement un enseignant secondaire lors de la création.

- Crée un projet PFA avec titre unique par classe, description, deadline
- Associe le projet à une classe (niveau + option + classe)
- Invite un enseignant secondaire lors de la création du projet
- Configure le type de livrable (INDIVIDUEL / GROUPE)
- Assigne des étudiants spécifiques au projet
- Pour un groupe : affecte les membres et désigne un responsable
- Valide ou rejette les soumissions avec une note (décision modifiable)
- Consulte le rapport de plagiat
- Visualise les statistiques du projet

---

## 3. Enseignant Secondaire

Mêmes privilèges que l'enseignant principal **sauf** la création de projet. Il est invité par l'enseignant principal lors de la création.

- Ne peut pas créer de projets
- Peut valider/rejeter des soumissions, modifier le statut, attribuer des notes
- Consulte les rapports de plagiat
- Visualise les statistiques du projet

---

## 4. Étudiant

Assigné individuellement à un projet par un enseignant.

- Se connecte avec un compte créé par l'administrateur
- Reçoit une notification lors de son assignation à un projet
- **Mode individuel :** dépose son propre rapport et code source
- **Mode groupe :**
  - Le **responsable du groupe** est le seul autorisé à déposer
  - Les autres membres sont bloqués et notifiés
- Suit le statut de sa soumission (en attente / validée / rejetée)
- Consulte la note et les commentaires reçus
- Consulte les archives des PFA validés

</div>
<div class="lang-en" markdown="1">

# 👥 System Actors

[← Back to Index](../index.md)

---

## 1. Administrator

Sole technical manager of the platform. Only actor who can create accounts.

- Manages user accounts (create, edit, delete, assign roles)
- Manages levels, options and academic classes (replaces department)
- Manages academic years
- Configures plagiarism detection threshold
- Manages database backups
- Views global statistics

---

## 2. Primary Teacher (Project Creator)

The primary teacher is the only one who can create a PFA project. They optionally invite a secondary teacher during creation.

- Creates a PFA project with a title unique per class, description, deadline
- Links the project to a class (level + option + class)
- Invites a secondary teacher during project creation
- Configures deliverable type (INDIVIDUAL / GROUP)
- Assigns specific students to the project
- For groups: assigns members and designates a group leader
- Validates or rejects submissions with a grade (decision is revisable)
- Consults plagiarism report
- Views project statistics

---

## 3. Secondary Teacher

Same privileges as the primary teacher **except** project creation. Invited by the primary teacher at creation time.

- Cannot create projects
- Can validate/reject submissions, modify status, assign grades
- Consults plagiarism reports
- Views project statistics

---

## 4. Student

Individually assigned to a project by a teacher.

- Logs in with an admin-created account
- Receives a notification when assigned to a project
- **Individual mode:** submits their own report and source code
- **Group mode:**
  - The **group leader** is the only one allowed to submit
  - Other members are blocked and notified
- Tracks submission status (pending / validated / rejected)
- Views grade and comments
- Browses archive of past validated PFAs

</div>
