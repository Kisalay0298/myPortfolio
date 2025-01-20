import { Skill } from "../types";

export const skills: Skill[]= [
    {
        category: "Languages",
        items: [
            {
                name: "C++",
                level: 90
            },
            {
                name: "Java",
                level: 65
            },
            {
                name: "Python",
                level: 65
            }
        ]
    },
    {
        category: "FrontEnd",
        items: [
            {
                name: "React",
                level: 90
            },
            {
                name: "TypeScript",
                level: 75
            },
            {
                name: "Next.Js",
                level: 80
            },
            {
                name: "Tailwind CSS", 
                level: 85
            }
        ]
    },
    {
        category: "BackEnd",
        items: [
            {
                name: "Node.js",
                level: 85
            },
            {
                name: "Express",
                level: 80
            },
            {
                name: "MySQL",
                level: 85
            },
            {
                name: "MongoDB", 
                level: 65
            }
        ]
    },
    {
        category: "Tools & Others",
        items: [
            {
                name: "Git",
                level: 80
            },
            {
                name: "Botpress",
                level: 65
            }
        ]
    }
]