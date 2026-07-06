import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_profile",
  title: "Get Profile",
  description: "Get Adarsh Sudhindra's professional profile summary including name, role, positioning statement, and contact links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Adarsh Sudhindra",
      role: "Chief Innovation Officer | Technologist | Innovator | Entrepreneur | TEDx Speaker | UIUC Computer Science | Kellogg School of Business",
      summary: "As Chief Innovation Officer at Excelsoft Technologies since February 2026, Adarsh brings extensive experience in product management, product development, and educational technology. His work emphasizes driving forward innovative solutions that align with organizational goals and foster impactful advancements in e-learning. He builds products that make high-stakes learning and assessment smarter, fairer, and more secure.",
      email: "adarsh.sudhindra@gmail.com",
      linkedin: "https://www.linkedin.com/in/adarshsudhindra/",
      website: "https://adarsh-sudhindra.lovable.app",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});
