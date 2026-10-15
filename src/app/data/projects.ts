import { Project } from "../models/project";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Chatbot",
    description: "Chatbot for the livestreaming platform Twitch",
    stack: ["Node.js", "TypeScript", "SQLite"],
  },
  {
    id: 2,
    name: "Customer Service .NET",
    description: "Port of the Customer Service written in Java",
    stack: ["ASP.NET"],
  }
];