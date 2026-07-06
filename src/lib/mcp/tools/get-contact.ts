import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const contact = {
  email: "adarsh.sudhindra@gmail.com",
  linkedin: "https://www.linkedin.com/in/adarshsudhindra/",
  website: "https://adarsh-sudhindra.lovable.app",
  reasons_to_reach_out: [
    "Speaking invitations (conferences, panels, keynotes, workshops)",
    "Collaboration (product partnerships, advisory, joint ventures)",
    "Media & interviews (podcasts, articles, press inquiries)",
    "General inquiries",
  ],
};

export default defineTool({
  name: "get_contact",
  title: "Get Contact Info",
  description: "Get Adarsh Sudhindra's contact information (email, LinkedIn, website) and the types of inquiries he welcomes.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
