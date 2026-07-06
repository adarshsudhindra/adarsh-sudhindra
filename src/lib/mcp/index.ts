import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import getExperienceTool from "./tools/get-experience";
import getEducationTool from "./tools/get-education";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "adarsh-sudhindra-mcp",
  title: "Adarsh Sudhindra",
  version: "0.1.0",
  instructions:
    "Query Adarsh Sudhindra's professional profile. Use get_profile for a summary, get_experience for the full work timeline (or the current role only), get_education for academic background and certifications, and get_contact for email and LinkedIn.",
  tools: [getProfileTool, getExperienceTool, getEducationTool, getContactTool],
});
