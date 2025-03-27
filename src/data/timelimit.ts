import upcoming from "../assets/overview/upcoming.png"


export interface Tasks {
    title: string;
    role: string;
    time: string;
    percentage: number;
    imageUrl: string;
}

export const LimitedTasks: Tasks[] = [
    {
        title: "Developing API Endpoints",
        role: "Backend Development",
        time: "1 Hour",
        percentage: 60,
        imageUrl: upcoming,
    },
    {
        title: "Database Schema Design",
        role: "Backend Development",
        time: "2 Hours",
        percentage: 75,
        imageUrl: upcoming,
    },
    {
        title: "UI Component Implementation",
        role: "Frontend Development",
        time: "1.5 Hours",
        percentage: 50,
        imageUrl: upcoming,
    },
    {
        title: "Authentication & Authorization",
        role: "Full Stack Development",
        time: "2.5 Hours",
        percentage: 80,
        imageUrl: upcoming,
    },
    {
        title: "Performance Optimization",
        role: "Backend Development",
        time: "1 Hour",
        percentage: 65,
        imageUrl: upcoming,
    },
    {
        title: "State Management with Redux",
        role: "Frontend Development",
        time: "2 Hours",
        percentage: 70,
        imageUrl: upcoming,
    },
    {
        title: "Unit & Integration Testing",
        role: "Full Stack Development",
        time: "3 Hours",
        percentage: 85,
        imageUrl: upcoming,
    },
    {
        title: "Bug Fixing & Debugging",
        role: "Full Stack Development",
        time: "1.5 Hours",
        percentage: 55,
        imageUrl: upcoming,
    },
    {
        title: "Deploying on Cloud",
        role: "DevOps",
        time: "2 Hours",
        percentage: 78,
        imageUrl: upcoming,
    },
    {
        title: "Creating Reusable Components",
        role: "Frontend Development",
        time: "1 Hour",
        percentage: 60,
        imageUrl: upcoming,
    }
]
