import { Project } from '../types/Project';

export const projects: Array<Project> = [
    {
        "name": "Top Shelf Mobile Detailing",
        "description": "Website for Top Shelf Mobile Detailing. Built with react and deployed to netlify served on a custom domain. Custom 'contact us' form that uses Emailjs to email the owners when a client wishes to book an appointment. Website and gallery content served from cloudinary.",
        "link": "https://topshelfmobiledetailing.ca/",
        "github": "https://github.com/JStruk/tricity-mobile-detailing",
        "imgName": "topshelf.png",
        "imgAlt": "Top Shelf Mobile Detailing homepage",
        "tags": [
            "React",
            "styled-components",
            "netlify",
            "Custom domain",
            "SEO",
            "emailjs",
            "tailwindcss",
            "cloudinary"
        ]
    },
    {
        "name": "Scratchlist",
        "description": "Every developer builds a few todo apps in their time, right? This started as a todo app to learn react, and turned into a functional list app used by my partner and I everyday to ditch the paper and share various lists with each other (groceries, todo, packing, etc.)",
        "link": "https://www.list.jstruk.com",
        "github": "https://github.com/JStruk/scratchlist",
        "imgName": "scratchlist.png",
        "imgAlt": "Scratchlist list page example",
        "tags": [
            "React",
            "tailwindcss",
            "TypeScript",
            "netlify"
        ]
    },
    {
        "name": "Scratchlist API",
        "description": "Simple express.js REST API serving as the back-end for scratchlist. Running as a pm2 process on Google Compute Engine with nginx. Uses Firebase firestore for persistence. Click the link to see an example JSON payload returned from the API, fetched from the firestore db.",
        "link": "https://www.list.api.jstruk.com/list?listId=bGqzZMj55ue7eVupPYM5",
        "github": "https://github.com/JStruk/scratchlist-api",
        "imgName": "expressnode.png",
        "imgAlt": "Express.js and node.js logos",
        "tags": [
            "express.js",
            "Compute Engine",
            "Firebase firestore"
        ]
    },
    {
        "name": "MobTime IntelliJ Plugin",
        "description": "Plugin for IntelliJ-based IDEs that enables the use of Mobti.me directly inside the IDE as a tool window for structured mob programming.",
        "link": "https://plugins.jetbrains.com/plugin/16137-mobtime",
        "github": "https://github.com/mobtimeapp/mobtime-intellij-plugin",
        "imgName": "mobtime.png",
        "imgAlt": "MobTime icon",
        "tags": [
            "IntelliJ Plugin",
            "Mobtimeapp",
            "Java",
            "gradle",
        ]
    }
]