const quizData = [
    {
        question: "1. When a potential client searches for your specific service in your city, what is their exact first impression?",
        answers: [
            { text: "We dictate the narrative. They see a highly optimized Google Business Profile and curated 5-star reviews.", score: 3 },
            { text: "They usually find our website, but our local listings might have outdated hours or old photos.", score: 1 },
            { text: "Honestly, they probably see our competitors first. We haven't looked in a while.", score: 0 }
        ]
    },
    {
        question: "2. How does your business currently handle 'Data Breaches of Trust' (e.g., a harsh public review or an angry comment)?",
        answers: [
            { text: "We utilize front-line hospitality to de-escalate and convert the detractor into an advocate.", score: 3 },
            { text: "We usually reply with a generic 'please call us' message or apologize briefly.", score: 1 },
            { text: "We ignore them, delete them, or argue back. It's not worth our time.", score: 0 }
        ]
    },
    {
        question: "3. How confident are you that your business's core data (Name, Address, Phone) is 100% identical across all 50+ major internet directories?",
        answers: [
            { text: "Very confident. We use software infrastructure to lock down our data network-wide.", score: 3 },
            { text: "It's probably correct on Google and Yelp, but we haven't checked the smaller directories.", score: 1 },
            { text: "Not confident at all. We've moved or changed numbers and never updated the old listings.", score: 0 }
        ]
    },
    {
        question: "4. What is the strategy behind your current social media and content marketing?",
        answers: [
            { text: "It is a calculated pillar of our digital moat, driving measurable local engagement and authority.", score: 3 },
            { text: "We post when we have time or when we have a special promotion going on.", score: 1 },
            { text: "We rarely post. We rely almost entirely on word-of-mouth or traditional advertising.", score: 0 }
        ]
    },
    {
        question: "5. If a new competitor opened across the street tomorrow with a massive marketing budget, how vulnerable is your market share?",
        answers: [
            { text: "Secure. Our digital moat is deep, and our community loyalty is documented and visible.", score: 3 },
            { text: "Slightly worried. We have loyal regulars, but our online presence doesn't reflect our true value.", score: 1 },
            { text: "Highly vulnerable. If they look better online, we will lose foot traffic immediately.", score: 0 }
        ]
    }
];

let currentQuestion = 0;
let totalScore = 0;

const quizApp = document.getElementById('quiz-app');

function loadStartScreen() {
    quizApp.innerHTML = `
        <div class="results-container" style="text-align: center;">
            <h3 style="color: #FFFFFF; font-weight: 500; letter-spacing: 1px; margin-bottom: 20px;">The Brand Volatility Diagnostic</h3>
            <p style="font-size: 1.1rem; color: #CCCCCC; margin-bottom: 30px; line-height: 1.6;">Before you invest in marketing, you must identify where your business is bleeding trust. This 5-question diagnostic evaluates your digital infrastructure and prescribes the exact level of intervention required.</p>
            <button onclick="startQuiz()" class="uhbm-pill-button">
                BEGIN DIAGNOSTIC
                <span class="sparkle top-left"></span>
                <span class="sparkle bottom-right"></span>
            </button>
        </div>
    `;
}

function startQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    loadQuestion();
}

function loadQuestion() {
    const qData = quizData[currentQuestion];
    
    let html = `
        <div class="quiz-question">${qData.question}</div>
        <div class="quiz-options">
    `;
    
    qData.answers.forEach((answer, index) => {
        html += `
            <button class="quiz-option" onclick="selectAnswer(${answer.score})">
                ${answer.text}
            </button>
        `;
    });
    
    html += `</div>`;
    quizApp.innerHTML = html;
}

function selectAnswer(score) {
    totalScore += score;
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    let resultMessage = "";
    let callToAction = "";
    
    // Max score is now 15 (5 questions * 3 points)
    if (totalScore >= 12) {
        resultMessage = "Your digital moat is strong. You need Maintenance, not an overhaul.";
        callToAction = "You have excellent foundational integrity. You do not need a bloated agency contract. Our <strong>Sustaining Plan</strong> provides the software leasing and essential oversight needed to protect your current market share without overspending.";
    } else if (totalScore >= 6) {
        resultMessage = "You have a foundation, but you are leaking revenue.";
        callToAction = "You have 'Data Breaches of Trust' costing you clients—from inconsistent directories to disjointed messaging. Our <strong>Growth Plan</strong> replaces guesswork with data, patching these structural holes to architect aggressive regional growth.";
    } else {
        resultMessage = "Critical Warning: Your brand is a liability.";
        callToAction = "You are currently viewed as a commodity and losing market share to competitors with better infrastructure. You need immediate, experienced intervention. You require the <strong>Architect Plan</strong> to rebuild your brand integrity from the ground up.";
    }

    const resultsHTML = `
        <div class="results-container" style="text-align: center;">
            <h3 style="color: #FFFFFF; font-weight: 500; letter-spacing: 1px;">Diagnostic Complete</h3>
            <div class="score-highlight">${resultMessage}</div>
            <p style=\"font-size: 1.1rem; color: #CCCCCC; margin-bottom: 30px; line-height: 1.6;\">${callToAction}</p>
            
            <a href="contact.html" class="uhbm-pill-button">
                REQUEST YOUR CONSULTATION
                <span class="sparkle top-left"></span>
                <span class="sparkle bottom-right"></span>
            </a>
        </div>
    `;

    quizApp.innerHTML = resultsHTML;
}

// Initialize the Start Screen instead of the first question
loadStartScreen();