<div class="lang-fr" markdown="1">

# 🔒 Besoins Non Fonctionnels

[← Retour à l'accueil](../index.md)

---

## Sécurité

- Authentification JWT avec contrôle d'accès par rôle (RBAC)
- Aucune auto-inscription — comptes créés exclusivement par l'administrateur
- Fichiers uploadés stockés hors du dossier public web
- Hachage des mots de passe avec bcrypt
- Verrou du dépôt de groupe géré de façon atomique au niveau base de données
- Protection contre les injections SQL, XSS et CSRF

## Performance

- Temps de réponse inférieur à 2 secondes en conditions normales
- Analyse de plagiat exécutée en tâche de fond (async)
- Pagination sur toutes les listes

## Fiabilité

- Sauvegardes automatiques planifiées par l'administrateur
- Journalisation des actions critiques (connexions, soumissions, validations, modifications de statut)
- Gestion des erreurs avec messages explicites

## Ergonomie

- Interface responsive (ordinateur, tablette, smartphone)
- Distinction visuelle claire entre enseignant principal et secondaire
- Statut de soumission modifiable avec historique visible

## Maintenabilité

- Code structuré en MVC
- API documentée
- Docker pour le déploiement

</div>
<div class="lang-en" markdown="1">

# 🔒 Non-Functional Requirements

[← Back to Index](../index.md)

---

## Security

- JWT authentication with role-based access control (RBAC)
- No self-registration — accounts created exclusively by the admin
- Uploaded files stored outside the public web root
- Password hashing with bcrypt
- Group submission lock handled atomically at database level
- Protection against SQL injection, XSS and CSRF

## Performance

- Page response time under 2 seconds under normal conditions
- Plagiarism analysis runs as async background job
- Pagination on all lists

## Reliability

- Scheduled automatic database backups managed by admin
- Logging of critical actions (logins, submissions, validations, status changes)
- Error handling with clear user-facing messages

## Ergonomics

- Responsive design (desktop, tablet, mobile)
- Clear visual distinction between primary and secondary teacher
- Submission status revisable with visible history

## Maintainability

- MVC-structured code
- Documented REST API
- Docker for deployment

</div>
