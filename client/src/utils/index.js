import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  // Generate a random index based on the length of the "surpriseMePrompts" array.
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  // Retrieve a random prompt from the "surpriseMePrompts" array using the random index.
  const randomPrompt = surpriseMePrompts[randomIndex];

  // If the random prompt is the same as the original prompt, call the "getRandomPrompt" function recursively until a different prompt is found.
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
