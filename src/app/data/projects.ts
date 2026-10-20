import { Project } from "../models/project";

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Chatbot",
    repoUrl: "https://github.com/Malte0v0/Twitch-Chat-Bot",
    dateStarted: new Date("2025-06-18"),
    summary: "Chatbot for the livestreaming platform Twitch that lets viewers look up news, stock prices, weather information, set and receive reminders, along with other features. It integrates multiple APIs such as Google News, Yahoo Finance and OpenWeatherMap. User data is stored in SQLite, and API responses are cached. Used daily in a real Twitch chat.",
    description: `
## What it does
A chatbot for Twitch chat. Viewers can type commands to get news, stock prices, weather, quotes, movie info and more. They can also set reminders, mark themselves as away, and ask questions to an LLM. It has 190+ commits and runs daily in a real Twitch channel.

## How it's built
- Listens to Twitch chat over **Twitch EventSub (WebSocket)** and replies through the **Helix API**, with OAuth token validation and refresh.
- The current architecture consists of a microkernel that loads each command as a plugin. External services are reached via ports and adapters. For example, stock data has both a Yahoo Finance adapter and a Twelve Data adapter behind one interface, so the provider can be swapped.
- Integrates OpenWeatherMap, Google News, Yahoo Finance, Twelve Data, GeoNames, Seismic Portal (Earthquakes) and OpenRouter (LLM).
- User data, reminders and locations are stored in and SQLite database. Reminders and API responses are cached.

## What I learned
- How to connect to and handle WebSocket connections.
- The importance of software architecture and design patterns.
- Dependency injection with ports and adapters.
- The Microkernel pattern.
    `,
    stack: ["Node.js", "TypeScript", "SQLite"],
  },
  {
    id: 2,
    name: "Customer Service .NET",
    repoUrl: "https://github.com/Malte0v0/Customer-Service-NET",
    dateStarted: new Date("2026-10-02"),
    summary: "Port of the Customer Service from Java to C# with the goal of learning the fundamentals of C# and .NET.",
    description: `
## Goal
Learn C# and ASP.NET Core by rebuilding the Spring Boot customer service I had already written in Java for a school project.

## Current state
- REST API with \`[ApiController]\`: list, get by id, create and delete customers.
- DTOs for requests and responses, with a service registered through ASP.NET's built in dependency injection.
- Data is stored in memory for now.

## Next steps
Update and validation, switching to a real database, global exception handling, an HTTP client to the booking service, and tests.
    `,
    stack: ["C#", ".NET", "ASP.NET Core"],
  },
  {
    id: 3,
    name: "Portfolio Website",
    repoUrl: "https://github.com/Malte0v0/Portfolio",
    dateStarted: new Date("2026-10-14"),
    summary: "Portfolio website made with the goal of learning Angular and design with Figma. Ongoing project.",
    description: `
## Goal
Learn Angular and UI design by building my own portfolio, designed first in Figma.

## How it's built
- Angular with standalone components and routing between a project list and project detail pages.
- Project data lives in a typed TypeScript file. Long descriptions are written in Markdown and rendered with \`marked\`.
- Tested with Vitest and deployed to GitHub Pages.

Ongoing project, with new features added as I learn.
    `,
    stack: ["Angular", "TypeScript", "Figma", "Vitest", "GitHub Pages"],
  },
  {
    id: 4,
    name: "Microservice Architecture",
    repoUrl: "https://github.com/Malte0v0/Java-Backend-1",
    dateStarted: new Date("2026-05-14"),
    dateCompleted: new Date("2026-09-16"),
    summary: "Hotel booking system split into booking, customer and review microservices, each with its own database, plus a React frontend. School project from the Java Backend 1 and 2 courses, containerized with Docker Compose.",
    description: `
## Overview
A hotel booking system split into separate microservices:
- Booking
- Customer
- Review

Each service has its own MariaDB database, and the services talk to each other over REST. The linked repo contains the booking service and the React frontend.

## Booking service
- Spring Boot REST API for rooms and bookings, using JPA repositories and DTOs.
- Business rules such as invalid booking dates and double booked rooms are handled with custom exceptions and a global exception handler.
- Calls the customer service over HTTP to check that a customer exists, and returns a clear error if that service is down.

## Frontend
A React app (Vite + React Router) for browsing rooms and managing bookings.

## Deployment
- Every service, database and the frontend is containerized and started together with Docker Compose.
    `,
    stack: ["Java", "Spring Boot", "Docker", "React", "MariaDB"],
  }
];