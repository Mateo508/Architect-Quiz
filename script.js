const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const progressEl = document.getElementById('progress');
const resultTitle = document.getElementById('result-title');
const resultImg = document.getElementById('result-img');
const resultBio = document.getElementById('result-bio');

const architects = {
    hadid: {
        name: 'Zaha Hadid',
        bio: 'Bold, futuristic, unconventional.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Zaha_Hadid_in_Heydar_Aliyev_Cultural_center_in_Baku_nov_2013.jpg'
    },
    wright: {
        name: 'Frank Lloyd Wright',
        bio: 'Nature-integrated, philosophical, organic.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Frank_Lloyd_Wright_portrait.jpg'
    },
    corbusier: {
        name: 'Le Corbusier',
        bio: 'Rational, modernist, structured.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Le_Corbusier_1933.jpg'
    },
    ando: {
        name: 'Tadao Ando',
        bio: 'Minimalist, spiritual, concrete-heavy.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Tadao_Ando_2004.jpg'
    },
    ingels: {
        name: 'Bjarke Ingels',
        bio: 'Playful, sustainable, visionary.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Bjarke_Ingels_Kongrescenteret.jpg'
    },
    foster: {
        name: 'Norman Foster',
        bio: 'High-tech, sustainable, sleek.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Norman_Foster_%282009%29.jpg'
    },
    koolhaas: {
        name: 'Rem Koolhaas',
        bio: 'Conceptual, urbanist, theory-driven.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Rem_Koolhaas_%282009%29.jpg'
    },
    kahn: {
        name: 'Louis Kahn',
        bio: 'Monumental, timeless, luminous.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Louis_Kahn_%28cropped%29.jpg'
    },
    gaudi: {
        name: 'Antoni Gaudí',
        bio: 'Organic, Catalan modernist, whimsical.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Antoni_Gaudi_1878.jpg'
    },
    lin: {
        name: 'Maya Lin',
        bio: 'Minimalist, site-specific, memorials.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Maya_Lin.jpg'
    }
};

const questions = [
    {
        text: 'Which building material do you prefer?',
        options: [
            { text: 'Futuristic steel curves', scores: { hadid: 1, foster: 1 } },
            { text: 'Natural stone and wood', scores: { wright: 1, kahn: 1, gaudi: 1 } },
            { text: 'Raw concrete forms', scores: { ando: 1, koolhaas: 1 } },
            { text: 'Modular modern materials', scores: { corbusier: 1, ingels: 1, lin: 1 } }
        ]
    },
    {
        text: 'What inspires your designs?',
        options: [
            { text: 'Dynamic cityscapes', scores: { hadid: 1, ingels: 1, koolhaas: 1, foster: 1 } },
            { text: 'Harmony with nature', scores: { wright: 1, gaudi: 1, lin: 1 } },
            { text: 'Efficient urban planning', scores: { corbusier: 1, foster: 1 } },
            { text: 'Quiet spiritual spaces', scores: { ando: 1, kahn: 1 } }
        ]
    },
    {
        text: 'Pick a shape you love:',
        options: [
            { text: 'Fluid curves', scores: { hadid: 1, gaudi: 1 } },
            { text: 'Organic forms', scores: { wright: 1, gaudi: 1 } },
            { text: 'Simple boxes', scores: { corbusier: 1, kahn: 1, lin: 1 } },
            { text: 'Geometric play', scores: { ingels: 1, koolhaas: 1 } }
        ]
    },
    {
        text: 'Favorite design approach?',
        options: [
            { text: 'Unconventional and daring', scores: { hadid: 1, koolhaas: 1 } },
            { text: 'Timeless and natural', scores: { wright: 1, gaudi: 1 } },
            { text: 'Minimal and contemplative', scores: { ando: 1, lin: 1 } },
            { text: 'Pragmatic and modern', scores: { corbusier: 1, ingels: 1, foster: 1 } }
        ]
    },
    {
        text: 'Ideal project location?',
        options: [
            { text: 'Iconic urban center', scores: { hadid: 1, ingels: 1, foster: 1, koolhaas: 1 } },
            { text: 'In the heart of nature', scores: { wright: 1, gaudi: 1 } },
            { text: 'Carefully planned city', scores: { corbusier: 1, foster: 1 } },
            { text: 'Quiet cultural site', scores: { ando: 1, kahn: 1, lin: 1 } }
        ]
    },
    {
        text: 'Pick a keyword:',
        options: [
            { text: 'Futuristic', scores: { hadid: 1, foster: 1 } },
            { text: 'Organic', scores: { wright: 1, gaudi: 1 } },
            { text: 'Modernist', scores: { corbusier: 1, koolhaas: 1 } },
            { text: 'Minimalist', scores: { ando: 1, lin: 1 } }
        ]
    },
    {
        text: 'Which describes you best?',
        options: [
            { text: 'Visionary risk-taker', scores: { hadid: 1, ingels: 1, koolhaas: 1 } },
            { text: 'Grounded philosopher', scores: { wright: 1, kahn: 1 } },
            { text: 'Orderly planner', scores: { corbusier: 1, foster: 1 } },
            { text: 'Quiet thinker', scores: { ando: 1, lin: 1 } }
        ]
    },
    {
        text: 'Your favorite color palette?',
        options: [
            { text: 'Bold contrasts', scores: { hadid: 1, koolhaas: 1 } },
            { text: 'Earthy tones', scores: { wright: 1, gaudi: 1, kahn: 1 } },
            { text: 'Concrete greys', scores: { ando: 1, foster: 1 } },
            { text: 'Clean whites', scores: { corbusier: 1, lin: 1 } }
        ]
    },
    {
        text: 'Preferred scale?',
        options: [
            { text: 'Large iconic landmarks', scores: { hadid: 1, foster: 1 } },
            { text: 'Human-scale dwellings', scores: { wright: 1, gaudi: 1, lin: 1 } },
            { text: 'Mass housing projects', scores: { corbusier: 1, koolhaas: 1 } },
            { text: 'Community-focused spaces', scores: { ingels: 1, kahn: 1 } }
        ]
    },
    {
        text: 'What should architecture do?',
        options: [
            { text: 'Surprise and challenge', scores: { hadid: 1, koolhaas: 1 } },
            { text: 'Blend with nature', scores: { wright: 1, gaudi: 1 } },
            { text: 'Create order and efficiency', scores: { corbusier: 1, foster: 1 } },
            { text: 'Inspire tranquility', scores: { ando: 1, lin: 1 } },
            { text: 'Promote sustainability', scores: { ingels: 1, kahn: 1 } }
        ]
    }
];

let currentQuestion = 0;
let scores = {};

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestion = 0;
    scores = {};
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.text;
    optionsEl.innerHTML = '';
    q.options.forEach((opt, index) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = opt.text;
        btn.addEventListener('click', () => selectOption(index));
        li.appendChild(btn);
        optionsEl.appendChild(li);
    });
    progressEl.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    nextBtn.disabled = true;
}

function selectOption(index) {
    const buttons = optionsEl.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    const btn = buttons[index];
    btn.classList.add('selected');
    nextBtn.disabled = false;
    optionsEl.dataset.selected = index;
}

function handleNext() {
    recordAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function recordAnswer() {
    const selectedIndex = parseInt(optionsEl.dataset.selected, 10);
    if (isNaN(selectedIndex)) return;
    const opt = questions[currentQuestion].options[selectedIndex];
    for (const [arch, val] of Object.entries(opt.scores)) {
        scores[arch] = (scores[arch] || 0) + val;
    }
}

function showResult() {
    quizScreen.classList.remove('active');
    const topScore = Math.max(...Object.values(scores));
    const topArchitects = Object.keys(scores).filter(a => scores[a] === topScore);
    const winnerKey = topArchitects[Math.floor(Math.random() * topArchitects.length)];
    const winner = architects[winnerKey];

    resultTitle.textContent = `You got: ${winner.name}`;
    resultImg.src = winner.img;
    resultBio.textContent = winner.bio;
    resultScreen.classList.add('active');
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}
