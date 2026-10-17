import { Article } from "../models/article";

export const ARTICLES: Article[] = [
  {
    slug: "how-i-use-llms-to-learn",
    title: "How I Use LLMs to Learn",
    date: new Date("2026-10-15"),
    summary: "In this article I explain how I work with LLMs and learn things without letting the LLM think for me.",
    content:
    `
## 1. Introduction
LLMs have gotten so good that many jobs, including software development, are going to change. When it's easy to fall back on an LLM, many beginners will let it do the work instead of struggling through problems themselves, and they won't learn much. People who are genuinely passionate and don't use it as a crutch will learn at an even deeper level than was possible before LLMs. 

For software, I think this means plenty of junior developers and "vibe coders", but fewer mid-level and senior developers. Unless LLMs keep improving exponentially, the junior market will stay tough, while I believe demand would grow for developers who use LLMs intelligently.
## 2. My Starting Point
I used to be wary of LLMs and only used them as a last resort after trying myself and googling. As they got better and after reading articles and other peoples experiences, I realized that they work best as tutors, and that I should begin using them as a tool for learning rather than as a last resort for when I got stuck.
## 3. Principles
- **Don't outsource your thinking.** Never ask for the solution to a problem.
- **Use it like a tutor.** Make it teach before explaining.
- **Plan with it, then do the steps yourself.**
- **Explain concepts back and have it review.**
- **Aim for good enough.** As a beginner, perfectionism will slow you down.
## 4. Learning
Before I begin the session I ask myself, "What do I want to learn?". I might not care about the specific JSON schema of a Maven config file right now, but I do care about learning the syntax and formatting of GitHub workflows. I make that clear to both me and the LLM before starting.

I begin the session by explaining what my goal is and what I want the LLMs job to be. Then I give it a rough plan of the steps I think are needed and ask it to refine it in to something concrete and clear.

After that I go though it one step at a time, asking questions when areas are unclear. In the case of programming, I write every line of code by myself.
## 5. Custom Instructions
I use a *custom instruction* that applies globally to every Claude Code session I create. It lives in \`~/home/claude/CLAUDE.md\` and contains the learning style explained above.

I use this in order not to have the LLM fall back to its default behavior in case I forgot to include anything. I have experimented with Claude SKILLs before, but found a well formulated \`CLAUDE.md\` to be sufficient for my use case.
## 6. A Real Example
To build this website I had to learn Angular. I wrote a rough plan, had it refine step by step. I used /btw for side questions, like Git flow, without cluttering the session. Often I did one section with the LLM as a tutor and the rest on my own.
## 7. Pitfalls
1. LLMs can be confidently wrong or outdated.
2. A good explanation can feel like learning when it isn't.
3. They tend to agree with you, so I ask for criticism.
## 8. Conclusion
How you use LLMs makes the difference. As a shortcut, they make you dependent. As a tutor, they help you learn faster than ever. I want to use them to think better, not less.
    `
  }
];