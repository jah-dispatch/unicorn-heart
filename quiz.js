const quizData = [
    {
        question: "1. When a potential client searches for your specific service in your city, what is their exact first impression?",
        answers: [
            { text: "We dictate the narrative. They see a highly optimized Google Business Profile, flawless directories, and curated 5-star reviews.", score: 3 },
            { text: "They usually find our website, but our Yelp or Apple Maps might have outdated hours or old photos.", score: 1 },
            { text: "Honestly, they probably see our competitors first. We haven't looked in a while.", score: 0 }
        ]
    },
    {
        question: "2. If you have a physical location (or a core product), does your digital presence match that exact level of quality?",
        answers: [
            { text: "Absolute parity. The digital experience feels just as premium and intentional as walking through our front door.", score: 3 },
            { text: "It’s okay, but our website looks a bit dated and doesn't fully capture how great we are in person.", score: 1 },
            { text: "Not at all. We definitely lose leads because our online footprint looks unpolished or confusing.", score: 0 }
        ]
    },
    {
        question: "3. How does your business currently handle 'Data Breaches of Trust' (e.g., a harsh public review or an angry comment)?",
        answers: [
            { text: "We utilize front-line hospitality with a documented crisis playbook to de-escalate and convert detractors into advocates.", score: 3 },
            { text: "We try to reply quickly and apologize when we happen to see them.", score: 1 },
            { text: "We usually ignore them, delete them, or get defensive. The customer doesn't always understand how hard we work.", score: 0 }
        ]
    },
    {
        question: "4. Most agencies pad their invoices by reporting on 'vanity metrics'. How are you currently measuring your marketing success?",
        answers: [
            { text: "Through ruthless data execution. We track actual local keyword movement, lead conversion, and real ROI.", score: 3 },
            { text: "We mostly look at how many followers we have and if our posts are getting likes.", score: 1 },
            { text: "We aren't tracking anything. We're just throwing boiled spaghetti at the wall and hoping revenue goes up.", score: 0 }
        ]
    },
    {
        question: "5. Consider the journey of one new customer interaction. How many small, friction-causing glitches currently exist in your customer's journey?",
        answers: [
            { text: "Zero. We proactively audit for broken links, confusing menus, and unanswered messages to maintain 'Tactile Integrity.'", score: 3 },
            { text: "A few. We fix broken things when a customer complains about them.", score: 1 },
            { text: "Probably a lot. We don't have the time to go through our own site or social media to see what's broken.", score: 0 }
        ]
    },
    {
        question: "6. Are your business name, address, and phone number (NAP data) perfectly synchronized across the internet?",
        answers: [
            { text: "Yes. We use directory management software to lock down our data across 50+ platforms so search engines trust us implicitly.", score: 3 },
            { text: "Our Google and Facebook are correct, but we've moved or changed numbers before so old info might be out there.", score: 1 },
            { text: "We've never checked this. We just assume Google figures it out.", score: 0 }
        ]
    },
    {
        question: "7. If someone reads your website, then your Instagram, and then visits your store, do you sound like the exact same entity?",
        answers: [
            { text: "Yes. We have a unified narrative architecture that ensures our brand voice is identical across every single touchpoint.", score: 3 },
            { text: "We try to be professional, but our social media is a bit more random than our website.", score: 1 },
            { text: "No. Whoever has the luck of the draw posts whatever they want. There is no cohesive voice.", score: 0 }
        ]
    },
    {
        question: "8. How are you currently tracking the digital movements of your top 3 local competitors?",
        answers: [
            { text: "We use elite software infrastructure to monitor their keywords, find their weak spots, and intercept their traffic.", score: 3 },
            { text: "We occasionally look at their Facebook pages to see what they are posting.", score: 1 },
            { text: "We don't track them at all. We just keep our heads down.", score: 0 }
        ]
    },
    {
        question: "9. When it comes to the technical foundation of your brand—website speed, mobile optimization, and security—where do you stand?",
        answers: [
            { text: "It is lightning fast, mobile-first, and highly secure. We don't let slow load times cost us sales.", score: 3 },
            { text: "Our site works, but it's rarely updated, looks like it was built in the 90s, and needs aesthetic updates.", score: 1 },
            { text: "We don't even have a functioning website, or the one we have is completely broken.", score: 0 }
        ]
    },
    {
        question: "10. In your specific local market, how is your brand currently positioned in the minds of consumers?",
        answers: [
            { text: "We are the definitive, unquestioned authority. We do not compete on price because our perceived value is absolute.", score: 3 },
            { text: "We are known as a 'good option,' but we still have to fight for attention against cheaper competitors.", score: 1 },
            { text: "We are viewed as a commodity. We constantly have to lower prices just to get people in the door.", score: 0 }
        ]
    }
];

const quizApp = document.getElementById('quiz-app');
let currentQuestionIndex = 0;
let totalScore = 0;

// --- The Start Screen ---
function loadStartScreen() {
    quizApp.innerHTML = `
        <div class="results-container" style="text-align: center;">
            <h3 style="font-size: 1.8rem; font-weight: 800; color: #e2b35c; margin-bottom: 15px; letter-spacing: 1px;">Initiate Your Diagnostic</h3>
            <p style="color: #ffffff; font-size: 1.1rem; margin-bottom: 40px; line-height: 1.6;">
                Discover the structural fractures in your digital and physical presence that are leaking revenue. Take this 10-point diagnostic to pinpoint your brand's "Data Breaches of Trust" and learn exactly how to architect absolute dominance in your market.
            </p>
            <a href="#" onclick="startDiagnostic(); return false;" class="uhbm-pill-button" style="margin-top: 10px;">
                TAKE THE SURVEY
                <span class="sparkle top-left"></span>
                <span class="sparkle bottom-right"></span>
            </a>
        </div>
    `;
}

// --- The Trigger Function ---
function startDiagnostic() {
    currentQuestionIndex = 0;
    totalScore = 0;
    loadQuestion();
}

// --- Standard Quiz Functions ---
function loadQuestion() {
    quizApp.innerHTML = '';

    const currentQ = quizData[currentQuestionIndex];

    const questionEl = document.createElement('div');
    questionEl.className = 'question-text';
    questionEl.innerText = currentQ.question;
    quizApp.appendChild(questionEl);

    const answersEl = document.createElement('div');
    answersEl.className = 'answer-grid';

    currentQ.answers.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerText = answer.text;
        btn.onclick = () => selectAnswer(answer.score);
        answersEl.appendChild(btn);
    });

    quizApp.appendChild(answersEl);
}

function selectAnswer(score) {
    totalScore += score;
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizApp.innerHTML = '';
    
    let resultMessage = "";
    let callToAction = "";

    // Maximum possible score is 30
    if (totalScore >= 24) {
        resultMessage = "Your foundation is structurally sound.";
        callToAction = "You understand the value of 'Tactile Integrity.' You likely only need our <strong>Sustaining Plan</strong> to protect your current reputation, manage your listings, and keep competitors at bay without funding agency bloat.";
    } else if (totalScore >= 12) {
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
            <p style="font-size: 1.1rem; color: #CCCCCC; margin-bottom: 30px; line-height: 1.6;">${callToAction}</p>
            
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