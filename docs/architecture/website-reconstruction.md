# Website Reconstruction Engine

## M0 contract

The reconstruction engine is an additive subsystem. Existing OpenRenderStudio render/edit routes remain unchanged.

Pipeline:

URL -> browser recon -> evidence-v1 -> generator -> renderer -> visual QA.

### Evidence-first rule

The model must consume measured evidence instead of guessing layout values from screenshots. Evidence is versioned so extraction can evolve without breaking generators.

### Viewport matrix

- phone: 390px
- ipad: 768px
- pc: 1440px

### Boundaries

- src/recon/ owns deterministic website inspection.
- src/layers/ owns reusable visual composition.
- src/generator/ owns AI/provider adapters and code generation.
- src/qa/ owns screenshot comparison and repair diagnostics.

M0 only establishes the contract. Browser extraction is the next atomic change.
