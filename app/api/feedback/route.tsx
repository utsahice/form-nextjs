import { feedbackData } from "@/app/lib/data";

export async function GET() {
  return Response.json(feedbackData);
}
