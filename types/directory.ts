export type Category =
  | "Organisation"
  | "Studio"
  | "Community"
  | "Program"
  | "Event"
  | "Artist"
  | "Award";

export const CATEGORIES: Category[] = [
  "Organisation",
  "Studio",
  "Community",
  "Program",
  "Event",
  "Artist",
  "Award",
];

export const POPULAR_TAGS: string[] = [
  "XR (AR/VR/MR)",
  "Physical Computing",
  "Interactive Installations",
  "TouchDesigner",
  "Projection Mapping",
  "Live Coding / Algorave",
  "Generative Art",
  "Creative AI",
  "Robotics & Kinetics",
  "Computer Vision & LiDAR",
  "Tangible UI & HCI",
  "Sound Art & Spatial Audio",
  "GLSL & Shaders",
  "WebXR",
  "Unreal Engine",
  "Unity",
  "Light & DMX Choreography",
  "Bio-art & Biosensing",
];

export interface DirectoryItem {
  name: string;
  category: Category;
  city: string;
  link: string;
  description: string;
  tags: string[];
}

export type SubmissionType = "new" | "update";
export type SubmissionStatus = "pending" | "approved" | "rejected";

export interface DirectorySubmission {
  id?: string;
  created_at?: string;
  type: SubmissionType;
  name: string;
  category: Category;
  city: string;
  link: string;
  description: string;
  tags: string[];
  target_name?: string;
  submitter_name?: string;
  submitter_email?: string;
  notes?: string;
  status: SubmissionStatus;
  admin_notes?: string;
}
