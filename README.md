OCR + NLP Prescription Management System
Abstract

The proposed system is an AI-powered OCR & NLP-based prescription management solution designed to digitize handwritten prescriptions, extract key medical details, and prepare structured medicine schedules. By integrating Google Vision OCR for text extraction and custom NLP algorithms for medical entity recognition, this project aims to reduce human error, improve medication adherence, and build a foundation for automated healthcare management.

Chapter 1: Introduction

Healthcare systems face challenges in interpreting handwritten prescriptions, often leading to misreading, dosage errors, and compliance issues. Manual prescription handling is prone to mistakes due to illegible handwriting, lack of structured data, and absence of validation mechanisms.

This project proposes a scalable, intelligent, and automated pipeline that:

Uses OCR to read handwritten or printed prescriptions.

Applies NLP parsing to identify medicine names, dosage, frequency, and timing.

Outputs structured digital records that can integrate with reminder systems, pharmacist verification, and patient apps.

Chapter 2: Objectives

Develop an OCR pipeline using Google Vision API to digitize handwritten prescriptions.

Implement an NLP parser to extract structured medical details such as:

Medicine Name

Dosage (mg/ml)

Frequency (e.g., 2 times/day)

Duration (e.g., 5 days)

Build a Node.js-based modular system (ocr.js, nlp.js, index.js) for scalability.

Prepare the foundation for medication reminders, fraud detection, and pharmacist verification.

Ensure accuracy, privacy, and extensibility for future mobile/web application integration.

Chapter 3: System Design
Architecture

Input Layer: Prescription image (sample.jpg).

OCR Layer: Google Vision API processes the image and extracts raw text (ocr.js).

NLP Layer: Regex + keyword-based parsing identifies entities like dosage, frequency (nlp.js).

Processing Layer: Combines OCR + NLP results into structured JSON output (index.js).

Output Layer: Clean, structured prescription format ready for patient or pharmacist use.

Folder Structure

ocr-nlp-prescription/

│── package.json       # Dependencies + config

│── key.json           # Google Vision API key

│── sample.jpg         # Test prescription


│── src/

│   │── ocr.js         # OCR (Google Vision)

│   │── nlp.js         # NLP parsing

│   │── index.js       # Main integration

Chapter 4: Methodology

OCR Implementation

Configured Google Vision with service account (key.json).

Extracted text from prescription images (ocr.js).

Preprocessed text (remove noise, split by lines).

NLP Parsing

Used regex + keyword detection in nlp.js.

Example extraction:

"Paracetamol 500mg – 1 tablet twice daily" →

Medicine: Paracetamol

Dosage: 500mg

Frequency: 2 times/day

Form: Tablet

Integration (index.js)

Combined OCR + NLP outputs.

Generated structured JSON:

{
  "medicine": "Paracetamol",
  "dosage": "500mg",
  "frequency": "2/day",
  "duration": "5 days"
}

Chapter 5: Results & Discussion

Accuracy: OCR worked effectively on clear prescriptions; handwriting challenges remain.

NLP Extraction: Successfully detected common patterns but struggled with capturing the frequncy , time of med and  rare drug abbreviations.

Scalability: The modular Node.js structure makes it easy to add new NLP rules or integrate APIs.

Limitations:

Heavily depends on OCR accuracy.

Medical abbreviations and non-standard formats need ML-based improvements.

Chapter 6: Conclusion

This project demonstrates a partially working prototype of prescription digitization using OCR + NLP. It establishes a strong foundation for building a full healthcare automation system that can:

Reduce prescription errors.


Future scope includes:

Training ML-based models for drug abbreviation detection.

Integration with drug interaction databases (DrugBank, UMLS).

Developing a mobile app for patients and pharmacists.
