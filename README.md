# 🩺 Patient Education AI

An intelligent rule-based system that generates **personalized patient education** from user inputs using a structured workflow.

---

## 🚀 Overview

**Patient Education AI** simulates a healthcare assistant.  
It takes patient-related inputs, processes them through a **conditional logic workflow**, and outputs:

* 💡 Disease Information  
* 🥗 Diet Suggestions  
* 💊 Medication Guidance  
* 🏃 Lifestyle & Treatment Tips  

This ensures education is **personalized** according to **literacy level**, **cultural background**, and **learning preference**.  
The system is suitable for **healthcare awareness, educational purposes, and AI-driven patient support solutions**.

---

## 🧠 Agent Workflow

The project follows a **step-by-step intelligent agent pipeline**:

1. **Input Stage** – Accept user input for disease, literacy, culture, and learning preference  
2. **Processing Stage** – Normalize inputs (lowercase, check spelling)  
3. **Rule Evaluation** – Apply conditional rules based on disease and preferences  
4. **Diet & Treatment Suggestion** – Generate culturally and literacy-appropriate advice  
5. **Output Stage** – Display personalized education in terminal  

---

## 🛠️ Tech Stack

* Python 🐍 (main programming language)  
* CMD / Terminal (user interface)  

> Future GUI: Tkinter / Streamlit for dropdowns and button interface

---

## 📂 Project Structure


patient-education-ai/
│── patient_education_ai.py # Main Python script
│── data/ # Optional: Store extra data or disease info
│── assets/ # Optional: Images, icons, or resources
└── README.md # Documentation


---

## ▶️ How to Run

### 1. Navigate to project folder

```bash
cd Desktop\patient-education-ai
2. Run the Python script
python patient_education_ai.py

Or if Python uses python3:

python3 patient_education_ai.py
3. Enter inputs
Enter disease (Diabetes/Fever/Hypertension):
Enter literacy level (Low/High):
Enter culture (Indian/General):
Enter learning preference (Simple/Detailed):
4. View personalized output
📸 Example Output

Input:

Disease: Diabetes
Literacy Level: Low
Culture: Indian
Learning Preference: Simple

Output:

Diabetes: High sugar in blood. Avoid sweets.
Diet: Millets, ragi, home-cooked food.
Lifestyle: Basic monitoring and healthy habits

Input:

Disease: Hypertension
Literacy Level: High
Culture: General
Learning Preference: Detailed

Output:

Hypertension: Persistent high blood pressure affecting heart health
Diet: Low sodium, fruits, exercise
Treatment: Medication, monitoring, and lifestyle modifications
✨ Features
Rule-based AI for patient education
Personalized advice based on literacy, culture, and learning style
Simple terminal interface
Easy to extend for more diseases and guidance
🔮 Future Improvements
Add more diseases and conditions
GUI using Tkinter or Streamlit with dropdowns and buttons
Web version with Flask for online access
Integration of text-to-speech for accessibility
Store disease data in JSON for easy updates
👨‍💻 Author

Developed as part of an academic / hackathon project 🚀

🏁 Conclusion

This project demonstrates how a rule-based AI agent can provide structured, personalized patient education, transforming user inputs into actionable health guidance.
