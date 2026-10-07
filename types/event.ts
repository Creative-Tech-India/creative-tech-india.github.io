export interface CalendarEvent {
  id?: string;
  title: string;
  date: string;
  startDate?: string;
  endDate?: string;
  time?: string;
  location: string;
  link: string;
  description: string;
  category?: string;
}
