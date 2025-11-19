# Meriaz Website

Site marketing Next.js pour la plateforme Meriaz (microfinance numérique).\
Construit avec l'App Router, Tailwind CSS, Framer Motion et Lucide.

## Démarrage

```bash
npm install
npm run dev
```

Visitez `http://localhost:3000`.

## Build & Production

```bash
npm run build
npm start
```

## Déploiement Vercel

```bash
npm i -g vercel
vercel login
vercel --prod
```

Le fichier `vercel.json` reprend les commandes (build/dev/install) et définit `.next` comme répertoire de sortie.

## Variables d'environnement

Créez un fichier `.env.local` (non versionné) avec :

```
NEXT_PUBLIC_SITE_URL=https://meriaz-website.vercel.app
```

## Structure

- `app/` : App Router, `layout.tsx`, `page.tsx`, styles globaux
- `components/` : sections modulaires (Modules → Footer)
- `tailwind.config.ts` / `postcss.config.mjs` : configuration Tailwind
- `vercel.json` : configuration de déploiement

## Principales Sections

1. Hero + navigation fixe
2. Modules complémentaires
3. Architecture technique
4. Conformité & sécurité
5. Tarification (3 plans)
6. Roadmap & expansion
7. Contact + formulaire
8. Footer

Toutes les animations utilisent Framer Motion et le design applique glassmorphisme, dégradés et responsive.

