# Database

MySQL 8 and Sequelize are the initial persistence stack. Models and migrations will live in `src/infrastructure/database`. All schema changes require a migration, timestamps, foreign keys, appropriate indexes, and an explicit rollback plan.

Planned entities: users, roles, permissions, addresses, categories, brands, products, variants, inventory, images, orders, payments, coupons, reviews, wishlists, notifications, shipping, audit logs, and analytics.
