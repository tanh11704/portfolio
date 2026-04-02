export type ProjectStatus = "live" | "in-progress" | "archived";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  period: string;
  role: string;
  highlights: string[];
  architecture: string[];
  outcomes: string[];
  /** Public demo or deployed URL */
  liveHref?: string;
  /** Source repository */
  repoHref?: string;
};

export const projects: Project[] = [
  {
    slug: "task-collaboration-api",
    title: "RESTful task collaboration API",
    summary:
      "Multi-module Spring Boot service with JWT security, role-based access, and PostgreSQL. Focus on clear boundaries and predictable error handling.",
    stack: ["Java 17", "Spring Boot 3", "Spring Security", "PostgreSQL", "JUnit 5"],
    status: "in-progress",
    period: "2025 - Present",
    role: "Backend Developer",
    highlights: [
      "Designed domain modules for users, projects, tasks, and comments with clean service boundaries.",
      "Implemented token-based authentication and role checks for workspace-level permissions.",
      "Added structured exception mapping and consistent API response contracts.",
    ],
    architecture: [
      "Layered architecture with controller / service / repository separation.",
      "DTO mapping and validation at API boundaries to keep domain model focused.",
      "Test pyramid with unit tests for service logic and integration tests for persistence flows.",
    ],
    outcomes: [
      "Reduced onboarding time for frontend integration through explicit API contracts.",
      "Improved confidence during refactors with stable test coverage on critical flows.",
    ],
    repoHref: "https://github.com",
  },
  {
    slug: "inventory-microservice",
    title: "Inventory microservice",
    summary:
      "CRUD domain with Hibernate, optimistic locking, and integration tests. Docker Compose for local parity with production-like databases.",
    stack: ["Spring Data JPA", "MySQL", "Docker", "Mockito"],
    status: "archived",
    period: "2024",
    role: "Backend Developer",
    highlights: [
      "Built stock movement endpoints with idempotent update behavior.",
      "Applied optimistic locking to prevent race conditions on concurrent stock updates.",
      "Prepared Docker-based local environment for faster team setup.",
    ],
    architecture: [
      "Hexagonal-ish dependency direction between domain services and persistence adapters.",
      "Repository-level integration tests against containerized MySQL.",
      "Centralized audit fields for created/updated metadata.",
    ],
    outcomes: [
      "Prevented negative-stock edge cases in concurrent requests.",
      "Kept deployment artifact lightweight and predictable for staging.",
    ],
    repoHref: "https://github.com",
  },
  {
    slug: "api-design-toolkit",
    title: "API design toolkit",
    summary:
      "OpenAPI-first workflow with Postman collections and contract checks. Documents endpoints and examples for frontend handoff.",
    stack: ["OpenAPI 3", "Postman", "Springdoc"],
    status: "live",
    period: "2024 - 2025",
    role: "Backend Developer",
    highlights: [
      "Defined reusable OpenAPI components for pagination, error envelopes, and auth responses.",
      "Synced Postman collections with spec updates for QA and frontend teams.",
      "Created endpoint examples to reduce ambiguity during implementation.",
    ],
    architecture: [
      "Spec-first design process before code implementation.",
      "Validation hooks in CI for schema consistency.",
      "Documentation portal generated from OpenAPI source.",
    ],
    outcomes: [
      "Cut API misunderstanding issues during handoff.",
      "Improved cross-team collaboration through shared contracts.",
    ],
    liveHref: "https://example.com",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
