### Dashboard Template

```
📦
├─ .env
├─ .eslintrc.json
├─ .gitignore
├─ README.md
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ next.svg
│  └─ vercel.svg
├─ src
│  ├─ app
│  │  ├─ (authentication)
│  │  │  ├─ layout.tsx
│  │  │  ├─ login
│  │  │  │  └─ page.tsx
│  │  │  └─ register
│  │  │     └─ page.tsx
│  │  ├─ (dashboard)
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  └─ posts
│  │  │     ├─ data.json
│  │  │     └─ page.tsx
│  │  ├─ api
│  │  │  └─ auth
│  │  │     └─ […nextauth]
│  │  │        └─ route.ts
│  │  └─ layout.tsx
│  ├─ application
│  │  ├─ config
│  │  │  ├─ codegen.config.ts
│  │  │  └─ t3-env.config.ts
│  │  ├─ gql
│  │  │  ├─ fragment-masking.ts
│  │  │  ├─ gql.ts
│  │  │  ├─ graphql.ts
│  │  │  └─ index.ts
│  │  ├─ providers
│  │  │  ├─ AppGlobalProvider.tsx
│  │  │  └─ MantainRegistry.tsx
│  │  └─ utils
│  │     ├─ clients
│  │     │  └─ apollo.client.ts
│  │     └─ emotion-cache.ts
│  ├─ styles
│  │  └─ globals.css
│  └─ ui
│     └─ layouts
│        └─ dashboard
│           ├─ DashboardHeader.tsx
│           ├─ UserMenu.tsx
│           ├─ dashboard-menu.config.ts
│           ├─ dashboard-menu.tsx
│           └─ dashboard.tsx
├─ tailwind.config.js
└─ tsconfig.json

```
