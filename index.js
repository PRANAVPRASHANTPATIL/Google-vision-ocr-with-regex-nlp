import { extractTextFromImage } from "./ocr.js";
import { extractPrescription } from "./nlp.js";

async function main() {
  const fileName = "sample.jpg"; // test image

  // Step 1: OCR
  const text = await extractTextFromImage(fileName);
  console.log("OCR Output:\n", text);

  // Step 2: NLP Extraction
  const structured = extractPrescription(text);
  console.log("\nStructured Output:\n", structured);
}

main();
