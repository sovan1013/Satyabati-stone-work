# SATYABATI STONE WORK

A responsive React + TypeScript business website for a stone crusher and aggregate production plant based in Kendeijuri, Deogarh, Odisha.

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Gallery Management

All gallery images are managed in `src/data/galleryData.ts`.

Example:

```ts
{
  src: '/images/plant-9.jpg',
  title: 'Plant View',
  description: 'SATYABATI STONE WORK',
}
```

Place the image files in `public/images` and update the array in `src/data/galleryData.ts`.

## Notes

- The site uses placeholder SVG-based imagery initially so the structure is ready for real plant photography.
- Business information used matches the details provided by the client.
- No fabricated certifications, ratings, years, or approvals were added.
