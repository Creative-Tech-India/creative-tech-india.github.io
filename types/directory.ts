export type Category =
  | "Organisation"
  | "Studio"
  | "Community"
  | "Program"
  | "Event"
  | "Artist"
  | "Award";

export interface DirectoryItem {
  name: string;
  category: Category | string;
  city: string;
  link: string;
}
