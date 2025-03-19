import profile from "../assets/overview/profile.png"

export interface Mentor {
    id: number;
    name: string;
    role: string;
    tasks: number;
    rating: number;
    reviews: number;
    imageUrl: string;
}

export const monthlyMentors = [
    {
        id: 1,
        name: "Pj Raiyani",
        role: "3D Design",
        tasks: 40,
        rating: 4.7,
        reviews: 750,
        imageUrl: profile

    },
    {
        id: 2,
        name: "Hardik Kubavat",
        role: "UI UX Design",
        tasks: 10,
        rating: 4.7,
        reviews: 750,
        imageUrl: profile,
    },
    {
        id: 3,
        name: "Harshil Vasoya",
        role: "MERN",
        tasks: 40,
        rating: 4.7,
        reviews: 750,
        imageUrl: profile
    },
    {
        id:4,
        name: "Priyank Raiyani",
        role: "DevOps",
        tasks: 40,
        rating: 4.7,
        reviews: 750,
        imageUrl: profile

    },
    {
        id: 5,
        name: "Meet Thoroiya",
        role: "Backend",
        tasks: 50,
        rating: 4.7,
        reviews: 750,
        imageUrl: profile

    },
    {
        id: 6,
        name: "Dhruvil Buva",
        role: "UI UX Design",
        tasks: 10,
        rating: 4,
        reviews: 7150,
        imageUrl: profile

    },

]