export type HomeNote = {
  id: string;
  title: string;
  preview: string;
  updatedAt: string;
  accent: string;
};

export type HomeReminder = {
  title: string;
  time: string;
};

export const pinnedNotes: HomeNote[] = [
  {
    id: 'mba-prep',
    title: 'MBA Prep',
    preview: 'Key topics: Finance, Marketing...',
    updatedAt: 'Yesterday',
    accent: '#D9A36F',
  },
];

export const recentNotes: HomeNote[] = [
  {
    id: 'japan-trip',
    title: 'Trip to Japan ✈',
    preview: 'Flights, places, budget...',
    updatedAt: '2 hours ago',
    accent: '#8B9B7B',
  },
  {
    id: 'weekly-review',
    title: 'Weekly review',
    preview: 'Ideas and priorities for this week',
    updatedAt: 'Yesterday',
    accent: '#D8B88C',
  },
];

export const upcomingReminder: HomeReminder = {
  title: 'Call Rahul',
  time: 'Tomorrow, 10:00 AM',
};
