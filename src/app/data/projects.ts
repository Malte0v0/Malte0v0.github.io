import { Project } from "../models/project";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Chatbot",
    repoUrl: "https://github.com/Malte0v0/Twitch-Chat-Bot",
    dateStarted: new Date("2025-06-18"),
    summary: "Chatbot for the livestreaming platform Twitch that lets viewers look up news, stock prices, weather information, set and receive reminders, and many other things. It integrates multiple APIs such as Google News, Yahoo Finance and OpenWeatherMap. User data is stored in SQLite, and API responses are cached. Used daily in a real Twitch chat.",
    description: "",
    stack: ["Node.js", "TypeScript", "SQLite"],
  },
  {
    id: 2,
    name: "Customer Service .NET",
    repoUrl: "https://github.com/Malte0v0/Customer-Service-NET",
    dateStarted: new Date("2026-10-02"),
    summary: "Port of the Customer Service from Java to C# with the goal of learning the fundamentals of C# and .NET.",
    description: "",
    stack: ["ASP.NET"],
  },
  {
    id: 3,
    name: "Portfolio Website",
    repoUrl: "https://github.com/Malte0v0/Portfolio",
    dateStarted: new Date("2026-10-14"),
    summary: "Portfolio website made with the goal of learning Angular and design with Figma. Ongoing project.",
    description: "",
    stack: ["Angular"],
  },
  {
    id: 4,
    name: "Microservice Architecture",
    repoUrl: "https://github.com/Malte0v0/Java-Backend-1",
    dateStarted: new Date("2026-05-14"),
    dateCompleted: new Date("2026-09-16"),
    summary: "School project part of the Java Backend 1 and 2 courses. The linked repo consists of a booking service and frontend, but it also integrates with a review service.",
    description: "## Containerized all services and a React frontend with Docker Compose.",
    stack: ["Java", "Spring Boot", "Docket", "React"],
  }
];