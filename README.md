# Concierge ERP

Base technique (Phase 1) d'un ERP de conciergerie immobilière avec :

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- ESLint + Prettier
- Dépendances métier déjà installées : shadcn/ui (configuration), Lucide, React Hook Form, Zod, Recharts, date-fns

## Architecture proposée (phases suivantes)

```txt
app/
  dashboard/
  logements/
  reservations/
  proprietaires/
  voyageurs/
  personnel/
  planning/
  taches/
  import/
  parametres/
components/
  ui/
  dashboard/
  properties/
  reservations/
  planning/
  tasks/
lib/
  prisma.ts
  validations/
  services/
    reservation-service.ts
    cleaning-service.ts
    planning-service.ts
    alert-service.ts
  utils/
  constants/
prisma/
  schema.prisma
  migrations/
```

## Prérequis

- Node.js 20+
- Docker (optionnel, pour PostgreSQL local)

## Installation locale

```bash
npm install
cp .env.example .env.local
```

Configurer `DATABASE_URL` dans `.env.local`.

Exemple de format :

```env
DATABASE_URL="postgresql://<DB_USER>:<DB_PASSWORD>@<DB_HOST>:5432/<DB_NAME>?schema=public"
```

## PostgreSQL local (option Docker)

```bash
docker compose up -d
```

Le service PostgreSQL local démarre sur `localhost:5432`.

## Prisma

```bash
npm run prisma:generate
npm run prisma:migrate:dev
```

## Lancement

```bash
npm run dev
```

## Qualité

```bash
npm run lint
npm run format:check
npm run build
```

## Déploiement Vercel

1. Connecter le dépôt GitHub à Vercel.
2. Ajouter la variable d'environnement `DATABASE_URL` (Production/Preview).
3. Déployer.
4. Exécuter les migrations en production :

```bash
npm run prisma:migrate:deploy
```

## Sécurité des secrets

- Ne jamais commiter de `.env` réel.
- `.env` et `.env.local` sont ignorés par Git.
