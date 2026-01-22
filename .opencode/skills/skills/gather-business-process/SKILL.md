---
name: gather-business-process
description: Gather and document business processes effectively from the codebase.
---

# Behavior

The "gather-business-process" skill enables the AI to extract and document business processes from a codebase. This skill focuses on identifying workflows, procedures, and operational steps embedded within the code, and translating them into clear, structured documentation. Point of truths for this skill include:
- **Process Identification**: The AI can identify key business processes by analyzing code comments, function names, and module structures that indicate workflow logic.
- **Workflow Mapping**: The AI can create visual representations (e.g., flowcharts, diagrams) of the identified business processes to enhance understanding.
- **Documentation Generation**: The AI can generate comprehensive documentation that outlines each business process, including steps, decision points, and involved entities.
- **Stakeholder Communication**: The AI can tailor the documentation to suit different stakeholders, ensuring clarity for both technical and non-technical audiences.
- **Continuous Improvement**: The AI can suggest improvements to the documented processes based on best practices and industry standards.
By leveraging this skill, the AI can help organizations better understand and optimize their business processes as reflected in their codebase.

# Required Result

The AI should produce a detailed document that outlines the identified business processes, including:
- A summary of each business process identified in the codebase.
- Step-by-step descriptions of each process, including inputs, outputs, and decision points.
- Visual representations (e.g., flowcharts) of the workflows.

The documentation should be clear, concise, and tailored to the intended audience, ensuring that both technical and non-technical stakeholders can understand the processes.

# Input

All codebase files, including source code, comments, and any existing documentation that may provide context for the business processes.

# Output Contract

The output of the "gather-business-process" skill should adhere to the following contract:
- **Format**: The documentation should be provided in a structured format: Markdown, that is easy to read and navigate.
- **Clarity**: The language used should be clear and free of jargon, making it accessible to non-technical stakeholders. English should be used for all documentation.
- **Completeness**: All identified business processes should be thoroughly documented, with no critical steps or decision points omitted.
- **Visual Representation**: Include visual representations of workflows to enhance understanding. Diagrams should be clear and properly labeled. Mermaid syntax can be used for diagrams.
- **Insights and Recommendations**: Where applicable, provide insights or recommendations for process improvements based on best practices.
- **No Versioning**: The documentation should not include versioning information or change logs. Documentation should focus solely on the current state of business processes.
- **Delivery**: The final documentation should be delivered as a single Markdown file, with any accompanying diagrams embedded or linked appropriately. File names should follow the format: `business-process-documentation.md` and placed in the root directory of the project.
- **Review**: The documentation should be reviewed for accuracy and completeness before final delivery, ensuring that all business processes are correctly represented.
