# Architecture

The application is a modular Next.js monolith. App Router pages compose presentation; feature modules coordinate use cases; domain code holds business rules; infrastructure owns database and storage integrations. This keeps deployment simple while preserving a later migration path.

Dependencies point inward: app/features → application → domain. Infrastructure implements contracts at the edges.
