# Human Atlas

An interactive 3D anatomy explorer built with React, Three.js, and shadcn/ui. Explore **male and female reference anatomy** — take the BodyParts3D adult male apart into **2,234 individually selectable meshes** or study the **888-mesh Human Reference Atlas female assembly** — with **15 anatomical systems**, bilingual **clinical reference cards**, **CT-style cross-sections**, **anatomic labels**, and **shareable views**.

**[Explore the live demo](https://human-atlas-seven.vercel.app)**

## Explore

- Orbit, zoom, and select structures directly on the body; read clinical cards in **English or Indonesian**.
- Switch between **male (BodyParts3D)** and **female (Human Reference Atlas)** anatomy.
- Cut the body like a CT: **axial, coronal, and sagittal cross-sections** with adjustable position, thickness, and direction.
- Turn on **anatomic labels** with leader lines for every major structure.
- Jump to a **region** — head & neck, thorax, abdomen & pelvis, upper limb, lower limb — and the camera frames it automatically.
- Toggle individual systems or use skeleton and organ presets.
- Move from assembled anatomy to a spaced inventory of every visible piece.
- Search anatomical names and source identifiers; isolate a structure and study its **function, blood supply, innervation, drainage, common conditions, and clinical notes**.
- **Share** the exact view as a link, or **export a PNG** with attribution for teaching.
- Use compact controls and detail panels on mobile.

## Run locally

Requires Node.js 22.13 or newer. No API keys or accounts are needed.

```sh
npm ci
npm run dev
```

Open http://localhost:3016. To build the static site, run `npm run build`; the output is in `dist/`.

## Validate

```sh
npm run check
node scripts/validate-atlas.mjs
node scripts/validate-atlas.mjs atlas-female.json
node scripts/validate-interactions.mjs
npm run build
```

Validation covers mesh buffers, names and concept membership for both atlases, nonoverlapping exploded layouts at desktop and mobile aspect ratios, search and inspection contracts, and tap-versus-drag handling. Browser interaction checks have exercised selection, system controls, search, isolation, cross-sections, labels, regions, sharing, export, rotation, and 390×844, 320×568, and 844×390 layouts. Phone controls stay clear of the exploded inventory, and isolated structures fit the space above or beside the detail panel. Physical-device performance and real multitouch hardware have not been tested.

## Anatomy data

The male viewer uses **BodyParts3D 4.0**, an adult male reference anatomy, licensed **CC BY 4.0**. The female viewer uses the **Human Reference Atlas** *3D Reference Organ Set for Female v1.5* (2023), also **CC BY 4.0**. Neither represents every human structure or variation. Individual source meshes are distinct from named concepts, which may group multiple meshes.

Geometry is simplified for browser performance while retaining every source mesh. The male model contains 2,288,268 triangles (~33 MB compressed); the female model contains 1,810,038 triangles (~26 MB compressed). Full credits, source links, and adaptation details are in [ATTRIBUTION.md](public/ATTRIBUTION.md).

Clinical reference cards are compiled from Gray's Anatomy of the Human Body (20th edition, 1918, public domain) and standard clinical anatomy teaching references, in English and Indonesian. They provide general educational context only.

This is an educational explorer, not a diagnostic or surgical tool.

## How it works

Geometry is merged into batches. Per-structure GPU textures control translation, visibility, and selection, while component geometry supports accurate picking. Cross-sections use world-space clipping planes shared by every material, with slab thickness and a cutting-plane indicator. Labels reuse the screen-space projection machinery: curated clinical-card concepts are anchored to their largest mesh and placed with collision avoidance. Exploded layouts pack only the visible pieces. Rendering updates when the scene changes; orbit controls remain responsive without thousands of separate draw calls.

The optional WebMCP tools expose anatomy search and inspection in compatible browsers. The visible interface works without them.

## Rebuilding geometry

The repository includes browser-ready geometry. Rebuilding it is optional: obtain the official source archives (BodyParts3D OBJ archive or the HRA united-female GLB) and metadata tables, prepare the joined concepts and display-system mappings, run `scripts/convert-anatomy.py` or `scripts/convert-female.py`, then `node scripts/optimize-anatomy.mjs` and `node scripts/compress-models.mjs`. Simplification uses a 0.2% relative error limit per structure.

## Deploy

Import this repository into Vercel as a Vite project. The included `vercel.json` configures `npm ci`, `npm run build`, and the `dist` output directory. It can also be served by a static host.

## License

Original application code is released under the [MIT License](LICENSE). **The anatomy data has its own CC BY 4.0 licenses** (BodyParts3D © DBCLS; Human Reference Atlas © HuBMAP contributors); preserve the attribution when redistributing it. Third-party dependencies retain their respective licenses.

Issues and pull requests are welcome. Please include reproduction steps and browser/device details for interaction problems.
