export type ProjectStatus = "live" | "in-progress" | "archived";

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  /** Public demo or deployed URL */
  liveHref?: string;
  /** Source repository */
  repoHref?: string;
};

export const projects: Project[] = [
  {
    title: "RESTful task collaboration API",
    summary:
      "Multi-module Spring Boot service with JWT security, role-based access, and PostgreSQL. Focus on clear boundaries and predictable error handling.",
    stack: ["Java 17", "Spring Boot 3", "Spring Security", "PostgreSQL", "JUnit 5"],
    status: "in-progress",
    repoHref: "https://github.com",
  },
  {
    title: "Inventory microservice",
    summary:
      "CRUD domain with Hibernate, optimistic locking, and integration tests. Docker Compose for local parity with production-like databases.",
    stack: ["Spring Data JPA", "MySQL", "Docker", "Mockito"],
    status: "archived",
    repoHref: "https://github.com",
  },
  {
    title: "API design toolkit",
    summary:
      "OpenAPI-first workflow with Postman collections and contract checks. Documents endpoints and examples for frontend handoff.",
    stack: ["OpenAPI 3", "Postman", "Springdoc"],
    status: "live",
    liveHref: "https://example.com",
  },
];
