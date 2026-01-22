---
name: gather-api
description: Gather and document API endpoints and their specifications from the codebase. Build a comprehensive API documentation in OpenAPI format.
---

# Behavior
The "gather-api" skill enables the AI to extract and document API endpoints and their specifications from a codebase. This skill focuses on identifying routes, methods, parameters, request/response schemas, and authentication mechanisms embedded within the code, and translating them into a structured OpenAPI documentation format.

- **Endpoint Identification**: The AI can identify API endpoints by analyzing code comments, route definitions, and controller structures that indicate API functionality.
- **Specification Extraction**: The AI can extract detailed specifications for each endpoint, including HTTP methods, parameters, request bodies, response formats, and status codes.
- **OpenAPI Generation**: The AI can generate a comprehensive OpenAPI document that outlines all identified API endpoints and their specifications.
- **Authentication Documentation**: The AI can document the authentication mechanisms used by the API, including token types, scopes, and required headers.
- **Versioning Support**: The AI can handle multiple versions of the API, documenting changes and differences between versions.
- **Guardrails**: AI mask all sensitive information such as API keys, tokens, and personal data from the generated documentation.
- **One directional Synchronization**: The AI focuses on building the OpenAPI documentation from the codebase, without modifying the original code.

# Required Result
The AI should produce a well-structured OpenAPI document (in YAML or JSON format) that includes:
- A summary of each API endpoint identified in the codebase.
- Detailed specifications for each endpoint, including methods, parameters, request/response schemas, and status codes.
- Documentation of authentication mechanisms used by the API.
- Support for multiple API versions, if applicable.

# Input
All codebase files, including source code, comments, and any existing documentation that may provide context for the API endpoints.

# Output Contract
The output of the "gather-api" skill should adhere to the following contract:
- **Format**: The documentation should be provided in OpenAPI format (YAML or JSON), following the OpenAPI Specification (OAS) standards.
- **Clarity**: The language used should be clear and free of jargon, making it accessible to developers and technical stakeholders. English should be used for all documentation.
- **Completeness**: All identified API endpoints should be thoroughly documented, with no critical specifications omitted.
- **Versioning**: If multiple API versions are present, the documentation should clearly differentiate between them and outline any changes.
- **Delivery**: The final OpenAPI document should be delivered as a single file named `<project-root>/.cerses/api-documentation.yaml`.
- **Review**: The documentation should be reviewed for accuracy and completeness before final delivery, ensuring that all API endpoints are correctly represented.