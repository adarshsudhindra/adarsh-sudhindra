import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const education = [
  {
    institution: "Northwestern University — Kellogg School of Management",
    degree: "Executive Scholar — Products & Innovation",
    year: "Apr 2025 – Jul 2026",
  },
  {
    institution: "University of Illinois Urbana-Champaign",
    degree: "Master's Degree, Computer Science",
    year: "2013 – 2014",
  },
  {
    institution: "The National Institute of Engineering, Mysore",
    degree: "Bachelor's Degree, Computer Science",
    year: "2004 – 2008",
  },
];

const certifications = [
  {
    title: "Digital Marketing and Social Media Analytics",
    organization: "MIT Sloan School of Management",
    issued: "Jul 2016",
  },
];

export default defineTool({
  name: "get_education",
  title: "Get Education & Certifications",
  description: "Get Adarsh Sudhindra's academic background and professional certifications including institutions, degrees, and years.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = { education, certifications };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
