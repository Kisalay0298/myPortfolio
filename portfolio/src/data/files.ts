import { FileItem } from "../types";

const ProjectFiles: FileItem[] = [
    {
        name: "Projects",
        type: "folder",
        isOpen: true,
        children: [
            {
                name: "FashionFusionHub.html",
                type: "file",
                language: "javaScript"
            },
            {
                name: "BlogminiaExpress.php",
                type: "file",
                language: "PHP"
            },
            {
                name: "OnlineCodeEditor.js",
                type: "file",
                language: "typescript"
            },
            {
                name: "assets",
                type: "folder",
                children: [
                    { name: "prev1.png", type: "file" },
                    { name: "prev2.png", type: "file" },
                    { name: "prev3.png", type: "file" },
                    { name: "prev4.png", type: "file" }
                ]
            }
        ]
    }
];

const skillFiles: FileItem[] = [
    {
        name: "Skills",
        type: "folder",
        isOpen: true,
        children: [
        {
            name: "Coding Languages",
            type: "folder",
            isOpen: true,
            children: [
                {
                    name: "CPP.cpp",
                    type: "file",
                    language: "C++"
                },
                {
                    name: "Java.java",
                    type: "file",
                    language: "java"
                },
                {
                    name: "python.py",
                    type: "file",
                    language: "python"
                }
            ]
        },
        {
            name: "Frontend",
            type: "folder",
            isOpen: true,
            children: [
                {
                    name: "React.jsx",
                    type: "file",
                    language: "javascript"
                },
                {
                    name: "Typescript.ts",
                    type: "file",
                    language: "typescript"
                },
                {
                    name: "NextJS.tsx",
                    type: "file",
                    language: "javascript"
                }
            ]
        },
        {
            name: "Backend",
            type: "folder",
            isOpen: true,
            children: [
                {
                    name: "NodeJS.js",
                    type: "file",
                    language: "javascript"
                },
                {
                    name: "Express.JS",
                    type: "file",
                    language: "typescript"
                },
                {
                    name: "MySQL.sql",
                    type: "file",
                    language: "sql"
                },
                {
                    name: "MongoDB.sql",
                    type: "file",
                    language: "sql"
                }
            ]
        },
        {
            name: "Tools & Others",
            type: "folder",
            isOpen: true,
            children: [
                {
                    name: "Git.txt",
                    type: "file"
                },
                {
                    name: "Botpress.txt",
                    type: "file"
                }
            ]
        }]
    }
]

const aboutFiles: FileItem[] = [
    {
        name: "About",
        type: "folder",
        isOpen: true,
        children: [
            {
                name: "Profile.md",
                type: "file",
                language: "markdown"
            },
            {
                name: "CodingExperience.json",
                type: "file",
                language: "json"
            },
            {
                name: "Education.md",
                type: "file",
                language: "markdown"
            },
            {
                name: "Certificates",
                type: "folder",
                children: [
                    {
                        name: "Cert1.pdf",
                        type: "file",
                    },
                    {
                        name: "Cert1.pdf",
                        type: "file",
                    },
                    {
                        name: "Cert1.pdf",
                        type: "file",
                    },
                    {
                        name: "Cert1.pdf",
                        type: "file",
                    },
                    {
                        name: "Cert1.pdf",
                        type: "file",
                    },
                ]
            }
        ]
    }
]

const contactFiles: FileItem[] = [
    {
        name: "Contact",
        type: "folder",
        isOpen: true,
        children: [
            {
                name: "ContactForm.tsx",
                type: "file",
                language: "typescript"
            },
            {
                name: "SocialLinks.tsx",
                type: "file",
                language: "typescript"
            },
            {
                name: "ContactiNFO.json",
                type: "file",
                language: "json"
            }
        ]
    }
]

export const getFileStructure = (activeTab: string): FileItem[] => {
    switch(activeTab){
        case "Projects":
            return ProjectFiles;
        case "Skills":
            return skillFiles;
        case "About":
            return aboutFiles;
        case "Contact":
            return contactFiles;
        default:
            return ProjectFiles;
    }
}