"use server";

import { feedbackData } from "./lib/data";

export async function submitFeedback(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    throw new Error("All fields are required.");
  }

  const newFeedback = {
    id: Date.now(),
    name,
    email,
    message,
  };
  

  feedbackData.push(newFeedback);

  return { success: true };
}
