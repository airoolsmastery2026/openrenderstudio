---
name: ui-architecture
description: Plan page structure, navigation, component boundaries, and UI states before implementation. Invoke for new screens, major redesigns, or complex interaction flows.
---

# UI Architecture

## Procedure
1. Identify user roles, primary jobs, page goal, and top conversion/task.
2. Map route and navigation placement. Preserve existing routing and deep links.
3. Build an information hierarchy: primary action, supporting content, secondary actions, progressive disclosure.
4. Define page regions and component boundaries. Prefer existing shared components over duplication.
5. Specify data requirements and state model: initial, loading, success, empty, validation, error, offline, permission-denied where relevant.
6. Define interaction contracts: trigger, state change, feedback, escape/cancel behavior, keyboard behavior.
7. Define responsive composition and accessibility requirements.
8. Identify dependencies, migration risk, and test cases.

## Deliverables
- Route/page outline
- Component tree with responsibilities
- State/interaction matrix
- Data/API dependencies (read-only inventory unless change approved)
- Responsive and accessibility notes
- Small implementation plan with verifiable steps

## Guardrails
- Do not change backend schemas, API payloads, auth, or persistence as part of a visual-only task.
- Do not create giant monolithic page components.
- Do not abstract a component before at least two concrete uses justify it.
- Do not remove existing functionality to simplify the design.
