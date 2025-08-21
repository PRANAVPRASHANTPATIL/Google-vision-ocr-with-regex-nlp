import vision from "@google-cloud/vision";

const client = new vision.ImageAnnotatorClient();

export async function extractTextFromImage(fileName) {
  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations;
  return detections[0] ? detections[0].description : "";
}
