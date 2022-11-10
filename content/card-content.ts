export interface CardContent {
  id: number;
  href: string;
  headerText: string;
  infoText: string;
}
export const cardContent: CardContent[] = [
  {
    id: 1,
    href: "/rendering",
    headerText: "Rendering",
    infoText:
      "Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.",
  },
  {
    id: 2,
    href: "/routing",
    headerText: "Routing",
    infoText:
      "New file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.",
  },
  {
    id: 3,
    href: "/data-fetching",
    headerText: "Data Fetching",
    infoText:
      "Simplified data fetching with async/await support in React Components and the fetch() API that aligns with React and the Web Platform.",
  },
  {
    id: 4,
    href: "/optimization",
    headerText: "Optimization",
    infoText:
      "Improved Image Component with native browser lazy loading. New Font Module with automatic font optimization.",
  },
  {
    id: 5,
    href: "/turbopack",
    headerText: "Turbopack",
    infoText: "Find in-depth information about Turbopack",
  },
  {
    id: 6,
    href: "/more-other",
    headerText: "More Other Stuff",
    infoText: "Find in-depth information about More Other Stuff",
  },
];
