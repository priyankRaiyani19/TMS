import upcoming from "../assets/overview/upcoming.png"

export interface Tasks {
    id: number;
    title: string;
    role: string;
    time: string;
    percentage: number;
    imageUrl: string;
}

export const LimitedTasks: Tasks[] = [
    {
        id: 1,
        title: "Developing API Endpoints",
        role: "Backend Development",
        time: "1 Hour",
        percentage: 60,
        imageUrl: upcoming,
    },
    {
        id: 2,
        title: "Database Schema Design",
        role: "Backend Development",
        time: "2 Hours",
        percentage: 75,
        imageUrl: upcoming,
    },
    {
        id: 3,
        title: "UI Component Implementation",
        role: "Frontend Development",
        time: "1.5 Hours",
        percentage: 50,
        imageUrl: upcoming,
    },
    {
        id: 4,
        title: "Authentication & Authorization",
        role: "Full Stack Development",
        time: "2.5 Hours",
        percentage: 80,
        imageUrl: upcoming,
    },
    {
        id: 5,
        title: "Performance Optimization",
        role: "Backend Development",
        time: "1 Hour",
        percentage: 65,
        imageUrl: upcoming,
    },
    {
        id: 6,
        title: "State Management with Redux",
        role: "Frontend Development",
        time: "2 Hours",
        percentage: 70,
        imageUrl: upcoming,
    },
    {
        id: 7,
        title: "Unit & Integration Testing",
        role: "Full Stack Development",
        time: "3 Hours",
        percentage: 85,
        imageUrl: upcoming,
    },
    {
        id: 8,
        title: "Bug Fixing & Debugging",
        role: "Full Stack Development",
        time: "1.5 Hours",
        percentage: 55,
        imageUrl: upcoming,
    },
    {
        id: 9,
        title: "Deploying on Cloud",
        role: "DevOps",
        time: "2 Hours",
        percentage: 78,
        imageUrl: upcoming,
    },
    {
        id: 10,
        title: "Creating Reusable Components",
        role: "Frontend Development",
        time: "1 Hour",
        percentage: 60,
        imageUrl: upcoming,
    }
]