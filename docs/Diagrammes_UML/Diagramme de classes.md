# 🗂️ Diagramme de Classes

[← Back to Index](../index.md)

---

```mermaid
classDiagram
    direction TB

    class Utilisateur {
      <<abstract>>
      +int id
      +string nom
      +string prenom
      +string email
      +string motDePasse
      +boolean actif
      +login()
      +logout()
    }

    class Etudiant {
      +string niveau
      +string classe
      +postuler(sujet)
      +deposerLivrable(fichier)
      +consulterStatut()
    }

    class Encadrant {
      +string departement
      +creerSujet()
      +gererCandidature(decision)
      +validerSoumission(note)
      +consulterPlagiat()
    }

    class Administrateur {
      +gererComptes()
      +gererClasses()
      +configurerPlagiat(seuil)
      +gererSauvegardes()
      +voirStatistiques()
    }

    class SujetPFA {
      +int id
      +string titre
      +string description
      +string technologies
      +string statut
      +Date dateCreation
      +configurer()
      +affecter(classe)
    }

    class Candidature {
      +int id
      +string statut
      +string commentaire
      +Date dateSoumission
      +File cv
      +File lettreMotivation
      +soumettre()
      +annuler()
    }

    class Soumission {
      +int id
      +string statut
      +float note
      +string commentaire
      +Date dateDepot
      +File rapport
      +File codeSource
      +modifier()
      +valider()
    }

    class RapportPlagiat {
      +int id
      +float tauxSimilarite
      +boolean alerte
      +Date dateAnalyse
      +string details
      +generer()
      +consulter()
    }

    class Archive {
      +int id
      +int anneeUniversitaire
      +boolean misEnAvant
      +string motsCles
      +publier()
      +rechercher()
    }

    Utilisateur <|-- Etudiant
    Utilisateur <|-- Encadrant
    Utilisateur <|-- Administrateur
    Encadrant "1" --> "0..*" SujetPFA : crée
    SujetPFA "1" --> "0..*" Candidature : reçoit
    Etudiant "1" --> "0..*" Candidature : soumet
    Candidature "1" --> "0..1" Soumission : génère
    Soumission "1" --> "1" RapportPlagiat : déclenche
    Soumission "1" --> "0..1" Archive : archivée dans
    Administrateur "1" --> "0..*" Utilisateur : gère
```
