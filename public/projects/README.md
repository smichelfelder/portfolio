# Project assets

This folder needs case-study imagery. Until the files are here, each case page
renders glass placeholders with the expected dimensions and a caption.

Each case study lives in its own subfolder. Filenames and dimensions are the
contract — the `<Placeholder>` components use these exact values, so you can
drop in PNG/JPG/WebP at those names and the page will render them automatically
(after we swap `Placeholder` for `next/image`, see "Next step" at the bottom).

## iBPM Platform — `/projects/ibpm/` ✅ exported

Source: `jBuVTrfglrhsDZ9wtcdb67`, frame `0:1846` ("Flowbuilder"). Old platform = `0:2310`, screens = `0:2321`–`0:2324`.

| File                       | Size      | Source frame (Figma)        |
| -------------------------- | --------- | --------------------------- |
| `thumb.png`                | 1200×900  | Cover thumbnail for /work card |
| `hero.png`                 | 1600×1000 | Hero composition (multi-device) |
| `process-ia.png`           | 1600×900  | IA diagram across form factors |
| `process-react.png`        | 1600×900  | Figma wireframe vs shipped React |
| `solution-dashboard.png`   | 1600×1000 | Supervisor dashboard |
| `solution-tablet.png`      | 1600×1000 | Operator tablet view |
| `solution-watch.png`       | 800×1000  | Industrial smartwatch screen |

## Digital Checklists — `/projects/digital-checklists/` ✅ exported

Source: Figma file `YQOsv59JMv7vVPwseJRUbF` (Usability improvements, Jun–Jul 2025).

| File                              | Size     | Source frame (Figma)                    |
| --------------------------------- | -------- | --------------------------------------- |
| `hero.png`                        | 1512×982 | `2:2674` Number input – Flagging advanced |
| `solution-checklist-flagging.png` | 1512×982 | `2:2714` Checklist – Flagging (also thumb) |
| `solution-library.png`            | 1524×982 | `2:2463` Document library               |
| `solution-conditional.png`        | 1512×982 | `2:2766` Section – Display options      |
| `solution-versions.png`           | 1524×982 | `2:3208` Versions panel (has TRUMPF photo) |
| `solution-custom-key.png`         | 1512×982 | `2:2953` Error key                      |
| `solution-signature.png`          | 1512×982 | `2:3074` Signature (unused yet)         |
| `process-version-history.png`     | 552×556  | `2:3122` Version history dialog         |
| `process-add-step.png`            | 1512×982 | `2:2986` Add step in between            |
| `process-import.png`              | 708×831  | `2:2614` Import – step 2 (unused yet)   |

## GuardiasYa — `/projects/guardiasya/` ✅ exported

Source: Figma file `jBuVTrfglrhsDZ9wtcdb67` (Portfolio-Steph), frame `0:698`. Hero is a crop of the header composition; solution images are crops of Major Screens (`0:1111`).

| File                            | Size      | Source frame (Figma)        |
| ------------------------------- | --------- | --------------------------- |
| `thumb.png`                     | 1200×900  | Cover thumbnail |
| `hero.png`                      | 1600×1000 | Major Screens composition   |
| `process-taskflows.png`         | 1600×900  | Scenario 1 + 2 task flows   |
| `process-sketches.png`          | 1600×900  | Sketches block              |
| `solution-onboarding.png`       | 1200×900  | Splash + onboarding screens |
| `solution-search.png`           | 1200×900  | Specialty search screen     |
| `solution-detail.png`           | 1200×900  | ER detail screen            |

## Moorea UI Kit — `/projects/moorea/` ✅ exported (except `process-tokens.png`)

Source: `jBuVTrfglrhsDZ9wtcdb67`, frame `0:1170` (named "iBPM Platform" in Figma). No token diagram exists in the file.

| File                          | Size      | Source frame (Figma)      |
| ----------------------------- | --------- | ------------------------- |
| `thumb.png`                   | 1200×900  | Cover thumbnail |
| `hero.png`                    | 1600×1000 | UI Kit overview           |
| `process-tokens.png`          | 1600×900  | Three-layer token diagram |
| `solution-palette.png`        | 1600×1000 | Color Palette block       |
| `solution-components.png`     | 1600×1000 | Buttons/Inputs/Tables     |
| `solution-icons.png`          | 1600×1000 | Icon grid                 |

## Leafnoise — `/projects/leafnoise/` ✅ exported (except `process-sitemap.png`)

Source: `jBuVTrfglrhsDZ9wtcdb67`, frame `0:2337`. Page images are top crops of each screen; `solution-stories.png` is the homepage Testimonios section. No sitemap exists in the file.

| File                          | Size      | Source frame (Figma)      |
| ----------------------------- | --------- | ------------------------- |
| `thumb.png`                   | 1200×900  | Cover thumbnail |
| `hero.png`                    | 1600×1000 | Top header composition    |
| `process-sitemap.png`         | 1600×900  | Sitemap & content model   |
| `solution-home.png`           | 1600×1000 | Homepage                  |
| `solution-products.png`       | 1600×1000 | Product pages             |
| `solution-stories.png`        | 1600×1000 | Customer stories template |

## How to export from the Figma file

The original Figma file is
[k6bDFPwax5H0sNDYh3hqyU](https://www.figma.com/design/k6bDFPwax5H0sNDYh3hqyU/Sin-t%C3%ADtulo).

Each case study's source frame:

- iBPM → node `1:1845`
- GuardiasYa → node `1:697`
- Moorea UI Kit → node `1:1169`
- Leafnoise → node `1:2336`

In Figma: select the sub-frame you want → File → Export → PNG @2x.

## How images render

`<CaseImage>` (`src/components/case-study/case-image.tsx`) checks at build time
whether the file exists in `public/`. If it does, it renders `next/image`; if
not, it falls back to the glass placeholder. Same for the `thumbnail` on the
home work cards. Drop a file in with the right name and it shows up — no code
changes needed.
