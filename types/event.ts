export interface CalendarEvent {
  id?: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  link: string;
  description: string;
  category?: string;
}
