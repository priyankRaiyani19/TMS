import upcoming from "../../assets/overview/upcoming.png"

export interface Tasks {
    id: number;
    title: string;
    role: string;
    time: string;
    percentage: number;
    imageUrl: string;
}

export const UpcomingTask: Tasks[] = [
    {
        id: 1,
        title: "Creating Mobile App Design",
        role: "UI UX Design",
        time: "3 Days Left",
        percentage: 40,
        imageUrl: upcoming,
    },
    {
        id: 2,
        title: "Developing API Endpoints",
        role: "Backend Development",
        time: "5 Days Left",
        percentage: 60,
        imageUrl: upcoming,
    },
    {
        id: 3,
        title: "Writing Technical Documentation",
        role: "Technical Writer",
        time: "2 Days Left",
        percentage: 30,
        imageUrl: upcoming,
    },
    {
        id: 4,
        title: "Testing New Features",
        role: "QA Engineer",
        time: "4 Days Left",
        percentage: 70,
        imageUrl: upcoming,
    },
    {
        id: 5,
        title: "Optimizing Database Queries",
        role: "Database Administrator",
        time: "6 Days Left",
        percentage: 50,
        imageUrl: upcoming,
    },
    {
        id: 6,
        title: "Creating Marketing Plan",
        role: "Marketing Manager",
        time: "3 Days Left",
        percentage: 80,
        imageUrl: upcoming,
    },
    {
        id: 7,
        title: "Fixing UI Bugs in Dashboard",
        role: "Frontend Developer",
        time: "1 Day Left",
        percentage: 90,
        imageUrl: upcoming,
    },
    {
        id: 8,
        title: "Conducting User Interviews",
        role: "Product Manager",
        time: "7 Days Left",
        percentage: 20,
        imageUrl: upcoming,
    },
    {
        id: 9,
        title: "Updating Security Policies",
        role: "Cybersecurity Analyst",
        time: "5 Days Left",
        percentage: 85,
        imageUrl: upcoming,
    },
    {
        id: 10,
        title: "Preparing Investor Pitch Deck",
        role: "Business Analyst",
        time: "4 Days Left",
        percentage: 55,
        imageUrl: upcoming,
    }
]