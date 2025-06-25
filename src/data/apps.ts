
export interface App {
  id: number;
  title: string;
  image: string;
  link: string;
  description: string;
}

export const apps: App[] = [
  {
    id: 1,
    title: "secure -quiz-app",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    link:"https://secure-quiz-app-git-main-manideep-ms-projects.vercel.app/",
    description: "A comprehensive task management application with real-time collaboration features."
  },
  {
    id: 2,
    title: "Code Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    link: "https://example.com/analytics-app",
    description: "Advanced analytics dashboard for tracking code quality and development metrics."
  },
  {
    id: 3,
    title: "Creative Portfolio Builder",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
    link: "https://example.com/portfolio-app",
    description: "Intuitive drag-and-drop portfolio builder for creative professionals."
  },
  {
    id: 4,
    title: "Finance Tracker",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    link: "https://example.com/finance-app",
    description: "Smart personal finance tracker with AI-powered insights and budgeting tools."
  },
  {
    id: 5,
    title: "Learning Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    link: "https://example.com/learning-app",
    description: "Interactive learning platform with progress tracking and gamification elements."
  },
  {
    id: 6,
    title: "Weather Dashboard",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    link: "https://example.com/weather-app",
    description: "Beautiful weather dashboard with detailed forecasts and climate data visualization."
  }
];
