# 🗂️ Diagramme de Classes

[← Retour à l'accueil](../index.md)

```mermaid
classDiagram
    direction TB

    class Utilisateur {
      <<abstract>>
      +int id
      +String firstName
      +String lastName
      +String email
      +String password
      +Role role
      +login()
      +logout()
    }

    class Role {
      <<enumeration>>
      ETUDIANT
      ENSEIGNANT
      ADMIN
    }

    class Etudiant {
      +String studentNumber
      +submitProject()
      +editSubmission()
      +viewSubmission()
    }

    class Enseignant {
      +int teacherNumber
      +String typeRole
      +validateSubmission()
      +rejectSubmission()
      +updateSubmissionStatus()
      +assignGrade()
      +configureDeliverables()
    }

    class EnseignantPrincipal {
      +createSubject()
      +inviteSecondaryTeacher()
      +assignStudents()
      +assignGroupLeader()
    }

    class EnseignantSecondaire {
      +note: invité par l enseignant principal
    }

    class Admin {
      +manageUsers()
      +manageClasses()
      +manageAcademicYears()
      +configurePlagiarismThreshold()
      +managePFAProjects()
      +manageBackups()
    }

    class Dashboard {
      +totalProjects()
      +acceptedProjects()
      +rejectedProjects()
      +averageGrade()
      +plagiarismRate()
    }

    class ClasseAcademique {
      +int id
      +String name
      +String niveau
      +String option
    }

    class AnneeAcademique {
      +int id
      +Date year
    }

    class SujetPFA {
      +int id
      +String title
      +String description
      +Date deadline
      +String statut
      +note: titre unique par classe
    }

    class TypeLivrable {
      <<enumeration>>
      REPORT
      SOURCE_CODE
      OTHER
    }

    class LivrableTelecharge {
      +int id
      +String fileName
      +Date uploadDate
    }

    class Groupe {
      +int id
      +String nom
      +assignerMembres()
      +designerResponsable()
    }

    class MembreGroupe {
      +boolean estResponsable
    }

    class Soumission {
      +int id
      +Date submissionDate
      +StatutSoumission status
      +float grade
      +String commentaire
      +deposer()
      +modifier()
      +valider()
      +rejeter()
      +modifierStatut()
    }

    class StatutSoumission {
      <<enumeration>>
      EN_ATTENTE
      EN_ANALYSE
      VALIDEE
      REJETEE
    }

    class HistoriqueStatut {
      +int id
      +StatutSoumission ancienStatut
      +StatutSoumission nouveauStatut
      +Date dateChangement
      +int modifiePar
    }

    class RapportPlagiat {
      +int id
      +float similarityScore
      +Date generatedAt
      +boolean alerte
      +generer()
      +consulter()
    }

    class Archive {
      +int id
      +int anneeUniversitaire
      +boolean misEnAvant
      +String motsCles
      +publier()
      +rechercher()
    }

    Utilisateur <|-- Etudiant
    Utilisateur <|-- Enseignant
    Utilisateur <|-- Admin
    Enseignant <|-- EnseignantPrincipal
    Enseignant <|-- EnseignantSecondaire

    Utilisateur "1" --> "1" Role : a un
    EnseignantPrincipal "1" --> "0..1" EnseignantSecondaire : invite
    EnseignantPrincipal "1" --> "0..*" SujetPFA : crée
    Enseignant "1" --> "1" Dashboard : visualise
    Admin "1" --> "1" Dashboard : visualise
    Admin "1" --> "0..*" Utilisateur : gère

    Etudiant "1..*" --> "1" ClasseAcademique : appartient à
    ClasseAcademique "0..*" --> "0..*" AnneeAcademique : cycle sur
    ClasseAcademique "0..*" --> "0..*" SujetPFA : associée à

    SujetPFA "1..*" --> "1..*" Etudiant : assigne
    SujetPFA "1" --> "1" TypeLivrable : définit
    SujetPFA "1" --> "0..1" Groupe : contient
    SujetPFA "1" --> "0..*" Soumission : reçoit

    Groupe "1" --> "0..*" MembreGroupe : composé de
    MembreGroupe "0..*" --> "1" Etudiant : référence

    Etudiant "1" --> "0..*" Soumission : dépose
    Soumission "1" --> "1" StatutSoumission : a un statut
    Soumission "1" --> "0..*" HistoriqueStatut : tracé dans
    Soumission "1" --> "0..*" LivrableTelecharge : contient
    Soumission "1" --> "0..1" RapportPlagiat : déclenche
    Soumission "1" --> "0..1" Archive : archivée dans
    LivrableTelecharge "0..*" --> "1" TypeLivrable : de type
```
