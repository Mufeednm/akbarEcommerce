# Decision Log

## 2026-07-14 — Modular Next.js monolith

- **Decision:** Use Next.js App Router with feature modules and clean dependency boundaries.
- **Reason:** It supports SEO and fast delivery while preserving a migration path to services.
- **Alternatives:** Separate frontend/backend or a microservice-first design.
- **Impact:** Server-only integrations remain behind infrastructure contracts.

## 2026-07-14 — Sequelize with MySQL

- **Decision:** Use Sequelize as the MySQL ORM.
- **Reason:** It matches the project requirement and provides model-oriented data access.
- **Alternatives:** Raw SQL, Prisma, or another ORM.
- **Impact:** Migrations and models will be maintained together.

## 2026-07-14 — Deferred authentication implementation

- **Decision:** Do not implement authentication during foundation setup; recommend Auth.js with a credentials provider plus a database adapter for the identity milestone.
- **Reason:** Social login, MFA, recovery, roles, and user-data requirements need confirmation.
- **Alternatives:** Custom JWT authentication or a hosted identity provider.
- **Impact:** The identity milestone must add secure sessions, password hashing, CSRF protections, and authorization policies.
