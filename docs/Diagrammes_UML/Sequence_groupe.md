# 🔄 Séquence — Dépôt de Groupe

[← Back to Index](../index.md)

> The first student to submit locks the space. All other invited students are blocked and notified. The teacher reviews only the single group submission.

---

```mermaid
sequenceDiagram
    actor T as Enseignant
    participant P as Plateforme
    participant DB as Base de données
    participant AI as Anti-plagiat
    actor S1 as Étudiant A (premier)
    actor S2 as Étudiant B (bloqué)

    rect rgb(175, 169, 236)
      note over T,DB: Création de l'espace
      T->>P: Crée espace (type: GROUPE)
      P->>DB: Enregistre espace
      T->>P: Sélectionne étudiants A et B
      P->>DB: Lie étudiants à l'espace
      P-->>S1: Notification — invitation à l'espace
      P-->>S2: Notification — invitation à l'espace
    end

    rect rgb(159, 225, 203)
      note over S1,DB: Premier dépôt — Étudiant A
      S1->>P: Consulte l'espace
      S1->>P: Dépose rapport + code source
      P->>DB: Enregistre soumission (estPremiere: true)
      P->>DB: Crée VerrouGroupe → espace verrouillé
      P->>AI: Lance analyse plagiat
      AI-->>P: Rapport similarité
      P->>DB: Enregistre rapport plagiat
      P-->>T: Notification — soumission de groupe reçue
      P-->>S2: Notification — dépôt déjà effectué, accès bloqué
    end

    rect rgb(240, 200, 200)
      note over S2,P: Tentative Étudiant B — bloqué
      S2->>P: Tente de déposer
      P->>DB: Vérifie VerrouGroupe
      DB-->>P: Espace verrouillé
      P-->>S2: Erreur — dépôt de groupe déjà soumis par Étudiant A
    end

    rect rgb(240, 153, 123)
      note over T,DB: Validation du groupe
      T->>P: Consulte soumission groupe + rapport plagiat
      T->>P: Valide — attribue note au groupe
      P->>DB: Statut → validée + note
      P->>DB: Archive le projet
      P-->>S1: Notification — validée + note
      P-->>S2: Notification — validée + note
    end
```
