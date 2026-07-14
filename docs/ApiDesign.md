# API Design

Route handlers are versioned under `/api/v1` when public APIs begin. They accept validated request DTOs, return consistent JSON errors, use correct HTTP status codes, and never reveal internals. Authentication, authorization, rate limiting, and audit context are middleware concerns.
