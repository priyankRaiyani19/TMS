import upcoming from "../../assets/overview/upcoming.png"

export interface Tasks {
    title: string;
    role: string;
    time: string;
    percentage: number;
    imageUrl: string;
}

export const UpcomingTask: Tasks[] = [
    {
        title: "Creating Mobile App Design",
        role: "UI UX Design",
        time: "3 Days Left",
        percentage: 40,
        imageUrl:upcoming,
    },
    {
        title: "Developing API Endpoints",
        role: "Backend Development",
        time: "5 Days Left",
        percentage: 60,
        imageUrl:upcoming,
    },
    {
        title: "Writing Technical Documentation",
        role: "Technical Writer",
        time: "2 Days Left",
        percentage: 30,
        imageUrl:upcoming,
    },
    {
        title: "Testing New Features",
        role: "QA Engineer",
        time: "4 Days Left",
        percentage: 70,
        imageUrl:upcoming,
    },
    {
        title: "Optimizing Database Queries",
        role: "Database Administrator",
        time: "6 Days Left",
        percentage: 50,
        imageUrl:upcoming,
    },
    {
        title: "Creating Marketing Plan",
        role: "Marketing Manager",
        time: "3 Days Left",
        percentage: 80,
        imageUrl:upcoming,
    },
    {
        title: "Fixing UI Bugs in Dashboard",
        role: "Frontend Developer",
        time: "1 Day Left",
        percentage: 90,
        imageUrl:upcoming,
    },
    {
        title: "Conducting User Interviews",
        role: "Product Manager",
        time: "7 Days Left",
        percentage: 20,
        imageUrl:upcoming,
    },
    {
        title: "Updating Security Policies",
        role: "Cybersecurity Analyst",
        time: "5 Days Left",
        percentage: 85,
        imageUrl:upcoming,
    },
    {
        title: "Preparing Investor Pitch Deck",
        role: "Business Analyst",
        time: "4 Days Left",
        percentage: 55,
        imageUrl:upcoming,
    }
];