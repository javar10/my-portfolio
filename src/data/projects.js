import BabyMixPreview from '../assets/BabyMixPreview.PNG'

const projects = [
    {
        title: "Baby Mix",
        description:
            "Mobile app built with React Native that allows users to generate, filter, favorite, and share baby names.",
        tech: ["React Native", "JavaScript"],
        link: "https://apps.apple.com/us/app/baby-mix/id6742421782",
        repo: "https://github.com/javar10/Random-Baby-Name-App",
        image: BabyMixPreview,
    },
    {
        title: "My Bookshelf",
        description:
            "Full-stack application built with React and Django that allows users to browse books via the Open Library API and curate a personalized bookshelf. Included cloud deployment using AWS (S3 and EC2).",
        tech: ["React", "Django", "JavaScript", "Python", "AWS", "APIs"],
        link: "#",
        image: "https://via.placeholder.com/400x200",
    },
    {
        title: "Speaking Analysis App",
        description:
            "App integrating speech-to-text APIs to analyze group speaking patterns and provide insights.",
        tech: ["JavaScript", "APIs"],
        link: "#",
        image: "https://via.placeholder.com/400x200",
    },
    {
        title: "Honey-Do List",
        description:
            "Full-stack task management app for organizing shared household responsibilities, featuring task creation, filtering, and persistent data using a backend API.",
        tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
        link: "#",
        image: "https://via.placeholder.com/400x200",
    },
    {
        title: "Education30",
        description:
            "Built a collection of educational games by extending vanilla JavaScript projects, customizing logic and user interactions to support student learning and engagement.",
        tech: ["JavaScript", "HTML", "CSS"],
        link: "#",
        image: "https://via.placeholder.com/400x200",
    },
    {
        title: "Frontend UI Projects",
        description:
            "Collection of responsive UI projects built from design files, focusing on translating Figma designs into clean and user-friendly interfaces.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        link: "#",
        image: "https://via.placeholder.com/400x200",
        subProjects: [
            { name: "GitHub User Search", link: "#" },
            { name: "Blogr Landing Page", link: "#" },
            { name: "Design Portfolio Page", link: "#" },
            { name: "Planets Fact Site", link: "#" },
        ],
    },
];

export default projects;