import { Article } from "../models/article";

export const ARTICLES: Article[] = [
  {
    slug: "how-i-work-with-llms",
    title: "How I work with LLMs",
    date: new Date("2026-10-15"),
    summary: "In this article I explain how I work with LLMs",
    content: // Switch from array of strings to markdown formatting later
    [`
    # How I work with LLMs
    In this article I will talk about how I use LLMs when:
    - Learning things
    - Doing school assignments
    - Making personal projects

    This article will be structured in to the following chapters.
    - **1** My philosophy when it comes to LLM use
      - **1.1** My philosophy
      - **1.2** Why I don't like pure vibe-coding
    - **2** How I use LLMs when learning generally
    - **3** How I use LLMs during school assignments
    - **4** How I use LLMs during personal projects
    `]
  }
];