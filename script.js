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
        bio: 'Zaha Hadid – The Futurist. You’re a force of nature — unafraid to bend the rules, break the grid, or dream beyond dimensions. You thrive in fluidity, chaos, and bold visions. Like Zaha, you turn resistance into momentum and see beauty in the unpredictable. Your mind doesn’t just think outside the box — it liquefies it.',
        img: 'images/zaha-hadid.jpg'
    },
    wright: {
        name: 'Frank Lloyd Wright',
        bio: 'Frank Lloyd Wright – The Harmonist. You’re grounded, thoughtful, and always seeking balance between self and surroundings. Like Wright, you’re a believer in timeless principles and quiet rebellion. Nature isn’t just something you admire — it’s part of your design DNA. Others chase trends; you build legacies.',
        img: 'images/frank-lloyd-wright.jpg'
    },
    corbusier: {
        name: 'Le Corbusier',
        bio: 'Le Corbusier – The Rationalist. Structure, clarity, and purpose guide your every move. You’re not here for the frills — you’re here to solve, organize, and revolutionize. Like Le Corbusier, you believe the world can be reimagined through systems that serve humanity. Your vision is bold, clean, and unapologetically precise.',
        img: 'images/le-corbusier.jpg'
    },
    ando: {
        name: 'Tadao Ando',
        bio: 'Tadao Ando – The Mystic. Still waters run deep, and so do you. You radiate calm, move with intention, and value the unseen just as much as the visible. Like Ando, you understand that silence speaks, shadows guide, and simplicity reveals the soul. Your presence doesn’t shout — it resonates.',
        img: 'images/tadao-ando.jpg'
    },
    ingels: {
        name: 'Bjarke Ingels',
        bio: 'Bjarke Ingels – The Visionary Rebel. You’re playful, provocative, and perpetually asking: “What if?” You see cities as canvases and problems as playgrounds. Like Bjarke, you balance big ideas with a wink — fusing fun with function, and spectacle with substance. Innovation isn’t optional for you — it’s inevitable.',
        img: 'images/bjarke-ingels.jpg'
    },
    foster: {
        name: 'Norman Foster',
        bio: 'Norman Foster – The Elegant Engineer. You’re polished, high-functioning, and laser-focused on performance. Like Foster, you blend efficiency with grace, innovation with restraint. Your ideas are big, but never bloated. You thrive in systems, love sleek design, and believe that beauty is a byproduct of precision.',
        img: 'images/norman-foster.jpg'
    },
    koolhaas: {
        name: 'Rem Koolhaas',
        bio: 'Rem Koolhaas – The Disruptor. You are sharp, cerebral, and a little dangerous. Like Koolhaas, you analyze the world with x-ray vision — deconstructing norms and rebuilding narratives. You’re not afraid to make people uncomfortable if it gets them to think. For you, cities are texts, and architecture is your critique.',
        img: 'images/rem-koolhaas.jpg'
    },
    kahn: {
        name: 'Louis Kahn',
        bio: 'Louis Kahn – The Philosopher Architect. You carry quiet strength. You ask deep questions and build with intention. Like Kahn, you believe architecture should endure — not just in form, but in feeling. You’re not swayed by noise or trends. Instead, you seek meaning, materiality, and light that stirs the soul.',
        img: 'images/louis-kahn.jpg'
    },
    gaudi: {
        name: 'Antoni Gaudí',
        bio: 'Antoni Gaudí – The Dream Builder. You live in color. Emotion and imagination flow through your every decision. Like Gaudí, you draw power from nature, faith, and fantasy, seeing no boundary between art and architecture. You don’t just make — you enchant. Rules feel like cages, and your spirit was built to roam free.',
        img: 'images/antoni-gaudi.jpg'
    },
    lin: {
        name: 'Maya Lin',
        bio: 'Maya Lin – The Silent Sculptor. You are quiet, observant, and emotionally intelligent. Like Lin, your work honors memory and meaning — often saying the most by doing the least. You trust subtlety over spectacle, depth over decoration. Your presence brings reflection, and your ideas leave a lasting mark.',
        img: 'images/maya-lin.jpg'
    }
};

const questions = [
    {
        text: 'Which building material do you prefer?',
        options: [
            { text: 'Futuristic steel curves', scores: { hadid: 1, foster: 1 } },
            { text: 'Natural stone and wood', scores: { wright: 1, kahn: 1, gaudi: 1 } },
            { text: 'Raw concrete forms', scores: { ando: 1, koolhaas: 1 } },
            { text: 'Modular modern materials', scores: { corbusier: 1, ingels: 1, lin: 1 } },
            { text: 'Glass and light-filled spaces', scores: { foster: 1, lin: 1 } }
        ]
    },
    {
        text: 'What inspires your designs?',
        options: [
            { text: 'Dynamic cityscapes', scores: { hadid: 1, ingels: 1, koolhaas: 1, foster: 1 } },
            { text: 'Harmony with nature', scores: { wright: 1, gaudi: 1, lin: 1 } },
            { text: 'Efficient urban planning', scores: { corbusier: 1, foster: 1 } },
            { text: 'Quiet spiritual spaces', scores: { ando: 1, kahn: 1 } },
            { text: 'Historical references', scores: { gaudi: 1, kahn: 1 } }
        ]
    },
    {
        text: 'Pick a shape you love:',
        options: [
            { text: 'Fluid curves', scores: { hadid: 1, gaudi: 1 } },
            { text: 'Organic forms', scores: { wright: 1, gaudi: 1 } },
            { text: 'Simple boxes', scores: { corbusier: 1, kahn: 1, lin: 1 } },
            { text: 'Geometric play', scores: { ingels: 1, koolhaas: 1 } },
            { text: 'Sleek triangles', scores: { foster: 1, hadid: 1 } }
        ]
    },
    {
        text: 'Favorite design approach?',
        options: [
            { text: 'Unconventional and daring', scores: { hadid: 1, koolhaas: 1 } },
            { text: 'Timeless and natural', scores: { wright: 1, gaudi: 1 } },
            { text: 'Minimal and contemplative', scores: { ando: 1, lin: 1 } },
            { text: 'Pragmatic and modern', scores: { corbusier: 1, ingels: 1, foster: 1 } },
            { text: 'Monumental simplicity', scores: { kahn: 1, corbusier: 1 } }
        ]
    },
    {
        text: 'Ideal project location?',
        options: [
            { text: 'Iconic urban center', scores: { hadid: 1, ingels: 1, foster: 1, koolhaas: 1 } },
            { text: 'In the heart of nature', scores: { wright: 1, gaudi: 1 } },
            { text: 'Carefully planned city', scores: { corbusier: 1, foster: 1 } },
            { text: 'Quiet cultural site', scores: { ando: 1, kahn: 1, lin: 1 } },
            { text: 'Historic city center', scores: { gaudi: 1, kahn: 1 } }
        ]
    },
    {
        text: 'Pick a keyword:',
        options: [
            { text: 'Futuristic', scores: { hadid: 1, foster: 1 } },
            { text: 'Organic', scores: { wright: 1, gaudi: 1 } },
            { text: 'Modernist', scores: { corbusier: 1, koolhaas: 1 } },
            { text: 'Minimalist', scores: { ando: 1, lin: 1 } },
            { text: 'Community-driven', scores: { ingels: 1, kahn: 1 } }
        ]
    },
    {
        text: 'Which describes you best?',
        options: [
            { text: 'Visionary risk-taker', scores: { hadid: 1, ingels: 1, koolhaas: 1 } },
            { text: 'Grounded philosopher', scores: { wright: 1, kahn: 1 } },
            { text: 'Orderly planner', scores: { corbusier: 1, foster: 1 } },
            { text: 'Quiet thinker', scores: { ando: 1, lin: 1 } },
            { text: 'Colorful visionary', scores: { gaudi: 1, ingels: 1 } }
        ]
    },
    {
        text: 'Your favorite color palette?',
        options: [
            { text: 'Bold contrasts', scores: { hadid: 1, koolhaas: 1 } },
            { text: 'Earthy tones', scores: { wright: 1, gaudi: 1, kahn: 1 } },
            { text: 'Concrete greys', scores: { ando: 1, foster: 1 } },
            { text: 'Clean whites', scores: { corbusier: 1, lin: 1 } },
            { text: 'Bright playful hues', scores: { ingels: 1, gaudi: 1 } }
        ]
    },
    {
        text: 'Preferred scale?',
        options: [
            { text: 'Large iconic landmarks', scores: { hadid: 1, foster: 1 } },
            { text: 'Human-scale dwellings', scores: { wright: 1, gaudi: 1, lin: 1 } },
            { text: 'Mass housing projects', scores: { corbusier: 1, koolhaas: 1 } },
            { text: 'Community-focused spaces', scores: { ingels: 1, kahn: 1 } },
            { text: 'Sacred contemplative spaces', scores: { ando: 1, kahn: 1 } }
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
    resultImg.alt = winner.name;
    resultBio.textContent = winner.bio;
    resultScreen.classList.add('active');
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}
