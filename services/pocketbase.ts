import PocketBase from "pocketbase";
const POCKET_BASE_URL = "http://localhost:8090";
console.log("POCKET_BASE_URL:", POCKET_BASE_URL);
const pb = new PocketBase(POCKET_BASE_URL);
async function checkHealth() {
  try {
    const response = await pb.health.check();
    console.log("Health Check Response:", response);
  } catch (error) {
    console.error("Failed to perform health check:", error);
  }
}

checkHealth();
export default pb;
