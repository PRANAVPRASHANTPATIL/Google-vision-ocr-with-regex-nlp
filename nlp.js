// Simple regex-based extraction
export function extractPrescription(text) {
  let medicineRegex = /\b([A-Z][a-z]+(?: [A-Z][a-z]+)*)\b/;  
  let dosageRegex = /\b\d+mg\b/i;
  let frequencyRegex = /(once daily|twice daily|thrice daily|morning|night|afternoon|every \d+ hours)/i;
  let timeRegex = /(before meals|after meals|with water|empty stomach)/i;

  return {
    medicine: (text.match(medicineRegex) || [])[0] || "Not found",
    dosage: (text.match(dosageRegex) || [])[0] || "Not found",
    frequency: (text.match(frequencyRegex) || [])[0] || "Not found",
    time: (text.match(timeRegex) || [])[0] || "Not found"
  };
}
