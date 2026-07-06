import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const experiences = [
  {
    company: "Excelsoft Technologies",
    title: "Chief Innovation Officer",
    duration: "Feb 2026 – Present",
    location: "India",
    current: true,
    outcomes: [
      "Leading innovation strategy and product vision for AI-powered assessment and learning platforms serving millions globally",
      "Driving forward innovative solutions that align with organizational goals and foster impactful advancements in e-learning",
      "Spearheaded integrity and security frameworks for high-stakes national examinations",
      "Built and scaled cross-functional teams across product, engineering, and design",
      "Drove partnerships with national bodies and global certification organizations",
      "Progressed from Product Strategist → Senior Product Strategist → VP Products & Innovation → Chief Innovation Officer",
    ],
  },
  {
    company: "Excelsoft Technologies",
    title: "Vice President — Products & Innovation",
    duration: "Oct 2014 – Jan 2026",
    location: "Greater Boston, US",
    outcomes: [
      "Led product strategy and innovation for AI-powered assessment and learning platforms",
      "Spearheaded integrity and security frameworks for high-stakes national examinations",
      "Built and scaled cross-functional teams across product, engineering, and design",
    ],
  },
  {
    company: "Adobe Systems",
    title: "Senior Software Development Engineer",
    duration: "Jun 2011 – Sep 2014",
    location: "India",
    outcomes: [
      "Worked on Adobe Flash Professional and Adobe Web Technology Group",
      "Contributed to core product development for enterprise creative tools",
      "Progressed from Software Development Engineer to Senior Software Development Engineer",
    ],
  },
  {
    company: "IBM Software Labs",
    title: "Software Development Intern",
    duration: "2008 – 2011",
    location: "India",
    outcomes: [
      "Contributed to enterprise collaboration and middleware platforms",
      "Gained foundational experience in large-scale software development",
    ],
  },
];

export default defineTool({
  name: "get_experience",
  title: "Get Work Experience",
  description: "Get Adarsh Sudhindra's full work experience timeline including roles, companies, durations, locations, and key outcomes. Optionally filter to only the current role.",
  inputSchema: {
    current_only: z.boolean().optional().describe("If true, only return the current role."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ current_only }) => {
    const filtered = current_only ? experiences.filter((e) => e.current) : experiences;
    return {
      content: [{ type: "text", text: JSON.stringify(filtered, null, 2) }],
      structuredContent: { experiences: filtered },
    };
  },
});
