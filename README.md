# WebLabTP

Ce TP a été réalisé dans le cadre d'un cours de pentest à Ynov Aix Campus.

## Règles

- Ne pas lire les fichiers.
- 3 flags à retrouver.

## Installation

1. Clonez ce dépôt sur votre machine.
2. Placez-vous dans le dossier du dépôt cloné.

```bash
docker build -t weblab-tp .
docker run -d -p 80:80 --name weblab-tp weblab-tp:latest
```

3. Rendez-vous sur localhost dans votre navigateur et bonne chance ! 😊
