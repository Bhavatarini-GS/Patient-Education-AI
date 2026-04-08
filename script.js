document.getElementById('generateBtn').addEventListener('click', generatePlan);

function generatePlan() {
    const disease = document.getElementById('disease').value;
    const literacy = document.getElementById('literacy').value;
    const culture = document.getElementById('culture').value;
    const preference = document.getElementById('preference').value;

    let explanation = "";
    let diet = "";
    let medication = "";
    let treatment = "";
    let extraNotes = null;

    // Disease logic spanning all conditions
    if (disease === "diabetes") {
        // Symptoms & Overview
        explanation = (literacy === "low") 
            ? "Diabetes: High sugar in blood." 
            : "Diabetes: A chronic condition where the body exhibits persistent high blood glucose levels, impairing normal metabolic function.";
        
        // Diet suggestions
        diet = (culture === "indian") 
            ? "Millets, ragi, home food, and avoiding sweets/sugar." 
            : "Whole grain foods, brown rice, low sugar alternatives, and balanced portioned meals.";
            
        // Medication guidance
        medication = (literacy === "low")
            ? "Take your prescribed diabetes medicine or insulin safely. Follow your doctor's exact dosage."
            : "Adhere precisely to prescribed oral antidiabetic medications or insulin therapy. Maintain consistent dosing schedules.";

        // Treatment & lifestyle
        treatment = (preference === "simple")
            ? "Go for a walk daily, avoid sugary drinks, and check your sugar levels."
            : "Implement a daily structured cardiovascular exercise regimen, routinely monitor Hemoglobin A1c levels, and schedule regular endocrinologist assessments.";
            
    } else if (disease === "fever") {
        // Symptoms & Overview
        explanation = (literacy === "low") 
            ? "Fever: Body heat is higher than normal. You might feel weak and shivery." 
            : "Fever: An abnormally elevated body temperature, which is a systemic medical response often indicating an underlying infection.";
        
        // Diet suggestions
        diet = (culture === "indian") 
            ? "Light khichdi, warm rasam, clear vegetable soups, and plenty of water." 
            : "Clear chicken or vegetable broths, easily digestible soups, and abundant hydrating fluids.";
            
        // Medication guidance
        medication = (literacy === "low")
            ? "Take a safe fever pill like paracetamol when needed. Do not take other strong medicines without a doctor."
            : "Take prescribed antipyretics such as paracetamol for temperature management. Avoid self-prescribing antibiotics without clinical confirmation.";

        // Treatment & lifestyle
        treatment = (preference === "simple")
            ? "Rest in bed and drink a lot of fluids."
            : "Ensure strict bed rest for recovery, utilize cold compresses if body temperature spikes dangerously, and document your temperature with a reliable thermometer.";

    } else if (disease === "hypertension") {
        // Symptoms & Overview
        explanation = (literacy === "low") 
            ? "Hypertension: High blood pressure. It makes your heart pump too hard and can make you feel tired or dizzy." 
            : "Hypertension: Persistent high arterial blood pressure, which significantly elevates long-term risks for cardiovascular diseases.";
        
        // Diet suggestions
        diet = (culture === "indian") 
            ? "Fresh green vegetables, low salt dals. Avoid papad, pickles, and salty packaged snacks." 
            : "Low sodium foods, DASH diet principles incorporating fresh fruits, green leafy vegetables, and lean proteins.";
            
        // Medication guidance
        medication = (literacy === "low")
            ? "Take your daily blood pressure pills at the exact same time every day. Do not skip them."
            : "Consistently take your prescribed antihypertensive medications. Never discontinue or adjust dosage abruptly without medical supervision.";

        // Treatment & lifestyle
        treatment = (preference === "simple")
            ? "Walk or exercise every day. Try to avoid stress and relax."
            : "Maintain a healthy Body Mass Index (BMI), pursue 150 minutes of aerobic exercise weekly, and utilize evidence-based stress reduction practices.";
    }

    // Output Building
    let finalOutputHtml = `
        <div class="output-item">
            <div class="output-label"><span style="margin-right:5px">🔍</span> Condition Overview</div>
            <div class="output-value">${explanation}</div>
        </div>
        <div class="output-item">
            <div class="output-label"><span style="margin-right:5px">🥗</span> Diet Suggestions</div>
            <div class="output-value">${diet}</div>
        </div>
        <div class="output-item">
            <div class="output-label"><span style="margin-right:5px">💊</span> Medication Guidance</div>
            <div class="output-value">${medication}</div>
        </div>
        <div class="output-item">
            <div class="output-label"><span style="margin-right:5px">🏥</span> Treatment & Lifestyle Tips</div>
            <div class="output-value">${treatment}</div>
        </div>
    `;

    // Extra Notes output when Learning Preference is Detailed
    if (preference === "detailed") {
        extraNotes = (literacy === "low")
            ? "Extra Note: Keep a small notebook to write down how you feel every day. Show it to your doctor. Being careful helps you get better fast and safely."
            : "Clinical Note: Maintain a meticulous daily log of any symptomatic transitions or adverse drug reactions. Present this data during your clinical follow-ups to optimize your individualized medical care.";
        
        finalOutputHtml += `
            <div class="output-item" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 8px; border-left: 4px solid var(--accent);">
                <div class="output-label" style="color: var(--accent);"><span style="margin-right:5px">📝</span> Extra Notes</div>
                <div class="output-value">${extraNotes}</div>
            </div>
        `;
    }

    // Display rendering
    const outputContent = document.getElementById('outputContent');
    const outputSection = document.getElementById('outputSection');
    
    // Apply a simple transition for better UX
    outputContent.style.opacity = 0;
    setTimeout(() => {
        outputContent.innerHTML = finalOutputHtml;
        outputSection.style.display = 'block';
        outputContent.style.opacity = 1;
        outputContent.style.transition = 'opacity 0.4s ease';
    }, 100);
}
