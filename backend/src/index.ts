
require("dotenv").config();

process.env.CLAUDE_API_KEY = process.env.CLAUDE_API_KEY || "";

console.log("Claude API Key:", process.env.CLAUDE_API_KEY);