---
name: build-features
description: Synchronise feature definitions between business-process-documentation and json objects using the feature json schema.
---

# Behavior

The "build-features" skill enables the AI to synchronize feature definitions between business process documentation and JSON objects based on a predefined feature JSON schema. This skill focuses on ensuring that features described in the documentation are accurately represented in the JSON format, facilitating consistency and ease of use across different systems. Point of truths for this skill include:

- **Feature Extraction**: The AI can identify and extract feature definitions from business process documentation, including descriptions, attributes, and relationships.
- **Schema Compliance**: The AI can map extracted features to the predefined feature JSON schema, ensuring that all required fields are populated correctly.
- **JSON Generation**: The AI can generate well-structured JSON objects that accurately reflect the features described in the documentation.
- **One-directional Synchronization**: The AI focuses on building JSON objects from documentation, without modifying the original documentation.
- **Validation**: The AI can validate the generated JSON objects against the feature JSON schema to ensure correctness and completeness.
- **Delivery**: The AI can deliver the final JSON objects in a structured format, ready for integration into other systems or processes.
- **Guardrails**: If one or more inputs are missing, the AI should respond with a clear message indicating which inputs are required to proceed.

# Required Result

The AI should produce a set of JSON objects that represent the features defined in the business process documentation. Each JSON object should adhere to the feature JSON schema and include all relevant information extracted from the documentation.

# Input

- Business process documentation containing feature definitions: `<project_root>/.cerses/business-process-documentation.md`
- Predefined feature JSON schema that outlines the structure and required fields for the JSON objects: `<project_root>/.cerses/schemas/feature-schema.json`

# Output Contract

The output of the "build-features" skill should adhere to the following contract:
- **Format**: The output should be a set of JSON objects, each representing a feature, structured according to the feature JSON schema.
- **Schema Compliance**: Each JSON object must comply with the predefined feature JSON schema, including all required fields and data types.
- **Completeness**: All features identified in the business process documentation should be represented in the generated JSON objects, with no critical information omitted.
- **Validation**: The generated JSON objects should be validated against the feature JSON schema to ensure correctness and completeness.
- **Delivery**: The final JSON objects should be delivered as a single JSON file named `<project_root>/.cerses/features.json`.
- **Review**: The JSON objects should be reviewed for accuracy and completeness before final delivery, ensuring that all features are correctly represented according to the schema.
- **Validation**: The AI can validate the generated JSON objects against the feature JSON schema to ensure correctness and completeness.