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
        img: 'images/Zaha-Hadid.jpg'
    },
    wright: {
        name: 'Frank Lloyd Wright',
        bio: 'Frank Lloyd Wright – The Harmonist. You’re grounded, thoughtful, and always seeking balance between self and surroundings. Like Wright, you’re a believer in timeless principles and quiet rebellion. Nature isn’t just something you admire — it’s part of your design DNA. Others chase trends; you build legacies.',
        img: 'images/Frank-Lloyd-Wright.jpg'
    },
    corbusier: {
        name: 'Le Corbusier',
        bio: 'Le Corbusier – The Rationalist. Structure, clarity, and purpose guide your every move. You’re not here for the frills — you’re here to solve, organize, and revolutionize. Like Le Corbusier, you believe the world can be reimagined through systems that serve humanity. Your vision is bold, clean, and unapologetically precise.',
        img: 'images/LeCorbusier.jpg'
    },
    ando: {
        name: 'Tadao Ando',
        bio: 'Tadao Ando – The Mystic. Still waters run deep, and so do you. You radiate calm, move with intention, and value the unseen just as much as the visible. Like Ando, you understand that silence speaks, shadows guide, and simplicity reveals the soul. Your presence doesn’t shout — it resonates.',
        img: 'images/Tadao-Ando.jpg'
    },
    ingels: {
        name: 'Bjarke Ingels',
        bio: 'Bjarke Ingels – The Visionary Rebel. You’re playful, provocative, and perpetually asking: “What if?” You see cities as canvases and problems as playgrounds. Like Bjarke, you balance big ideas with a wink — fusing fun with function, and spectacle with substance. Innovation isn’t optional for you — it’s inevitable.',
        img: 'images/Bjarke-Ingels.jpg'
    },
    foster: {
        name: 'Norman Foster',
        bio: 'Norman Foster – The Elegant Engineer. You’re polished, high-functioning, and laser-focused on performance. Like Foster, you blend efficiency with grace, innovation with restraint. Your ideas are big, but never bloated. You thrive in systems, love sleek design, and believe that beauty is a byproduct of precision.',
        img: 'images/Norman-Foster.jpg'
    },
    koolhaas: {
        name: 'Rem Koolhaas',
        bio: 'Rem Koolhaas – The Disruptor. You are sharp, cerebral, and a little dangerous. Like Koolhaas, you analyze the world with x-ray vision — deconstructing norms and rebuilding narratives. You’re not afraid to make people uncomfortable if it gets them to think. For you, cities are texts, and architecture is your critique.',
        img: 'images/Rem-Koolhaas.jpg'
    },
    kahn: {
        name: 'Louis Kahn',
        bio: 'Louis Kahn – The Philosopher Architect. You carry quiet strength. You ask deep questions and build with intention. Like Kahn, you believe architecture should endure — not just in form, but in feeling. You’re not swayed by noise or trends. Instead, you seek meaning, materiality, and light that stirs the soul.',
        img: 'images/Louis-Kahn.jpg'
    },
    lin: {
        name: 'Maya Lin',
        bio: 'Maya Lin – The Silent Sculptor. You are quiet, observant, and emotionally intelligent. Like Lin, your work honors memory and meaning — often saying the most by doing the least. You trust subtlety over spectacle, depth over decoration. Your presence brings reflection, and your ideas leave a lasting mark.',
        img: 'images/Maya-Lin.jpg'
    },
    gaudi: {
        name: 'Antoni Gaudí',
        bio: 'Antoni Gaudí – The Dream Builder. You live in color. Emotion and imagination flow through your every decision. Like Gaudí, you draw power from nature, faith, and fantasy, seeing no boundary between art and architecture. You don’t just make — you enchant. Rules feel like cages, and your spirit was built to roam free.',
        img: 'images/Antoni-Gaudi.jpg'
    }

        
const questions = {
    text: 'What kind of materials get you excited to design with?',
    options: [
        { text: 'Sleek steel curves that scream "future"', scores: { hadid: 1, foster: 1 } },
        { text: 'Warm wood and earthy stone — straight from nature', scores: { wright: 1, kahn: 1, gaudi: 1 } },
        { text: 'Raw concrete with attitude', scores: { ando: 1, koolhaas: 1 } },
        { text: 'Modern, modular materials that just make sense', scores: { corbusier: 1, ingels: 1, lin: 1 } },
        { text: 'Glass-filled structures that glow with light', scores: { foster: 1, lin: 1 } }
    ]
},
{
    text: 'What lights the spark for your design ideas?',
    options: [
        { text: 'Fast-paced cities and their chaotic beauty', scores: { hadid: 1, ingels: 1, koolhaas: 1, foster: 1 } },
        { text: 'Being immersed in nature — trees, streams, skies', scores: { wright: 1, gaudi: 1, lin: 1 } },
        { text: 'Designing systems that make cities smarter', scores: { corbusier: 1, foster: 1 } },
        { text: 'Stillness, silence, and the sacred', scores: { ando: 1, kahn: 1 } },
        { text: 'Layers of history and cultural roots', scores: { gaudi: 1, kahn: 1 } }
    ]
},
{
    text: 'Pick a shape that feels right to you:',
    options: [
        { text: 'Wild, flowing curves', scores: { hadid: 1, gaudi: 1 } },
        { text: 'Soft, natural forms', scores: { wright: 1, gaudi: 1 } },
        { text: 'Simple geometric boxes', scores: { corbusier: 1, kahn: 1, lin: 1 } },
        { text: 'Playful geometry and bold angles', scores: { ingels: 1, koolhaas: 1 } },
        { text: 'Sharp triangles and futuristic lines', scores: { foster: 1, hadid: 1 } }
    ]
},
{
    text: 'What\u2019s your creative philosophy?',
    options: [
        { text: 'Break the mold and take big swings', scores: { hadid: 1, koolhaas: 1 } },
        { text: 'Design things that feel eternal and grounded', scores: { wright: 1, gaudi: 1 } },
        { text: 'Let simplicity speak louder than decoration', scores: { ando: 1, lin: 1 } },
        { text: 'Be smart, modern, and solve real problems', scores: { corbusier: 1, ingels: 1, foster: 1 } },
        { text: 'Make a big impact with quiet strength', scores: { kahn: 1, corbusier: 1 } }
    ]
},
{
    text: 'Where would you most love to build?',
    options: [
        { text: 'In the middle of a major global city', scores: { hadid: 1, ingels: 1, foster: 1, koolhaas: 1 } },
        { text: 'Surrounded by trees, mountains, or coastlines', scores: { wright: 1, gaudi: 1 } },
        { text: 'Inside a perfectly planned, modern city', scores: { corbusier: 1, foster: 1 } },
        { text: 'A tranquil cultural site off the beaten path', scores: { ando: 1, kahn: 1, lin: 1 } },
        { text: 'Right in the historic heart of a city', scores: { gaudi: 1, kahn: 1 } }
    ]
},
{
    text: 'Choose a word that matches your vibe:',
    options: [
        { text: 'Futuristic', scores: { hadid: 1, foster: 1 } },
        { text: 'Organic', scores: { wright: 1, gaudi: 1 } },
        { text: 'Modernist', scores: { corbusier: 1, koolhaas: 1 } },
        { text: 'Minimalist', scores: { ando: 1, lin: 1 } },
        { text: 'Community-driven', scores: { ingels: 1, kahn: 1 } }
    ]
},
{
    text: 'Which description fits you best?',
    options: [
        { text: 'Visionary risk-taker who shakes things up', scores: { hadid: 1, ingels: 1, koolhaas: 1 } },
        { text: 'Grounded, reflective, and full of wisdom', scores: { wright: 1, kahn: 1 } },
        { text: 'Strategic thinker who loves structure and clarity', scores: { corbusier: 1, foster: 1 } },
        { text: 'Quiet creative who speaks through design', scores: { ando: 1, lin: 1 } },
        { text: 'Colorful dreamer who sees magic in everything', scores: { gaudi: 1, ingels: 1 } }
    ]
},
{
    text: 'Pick your go-to color palette:',
    options: [
        { text: 'High contrast — drama and intensity', scores: { hadid: 1, koolhaas: 1 } },
        { text: 'Earth tones that feel natural and warm', scores: { wright: 1, gaudi: 1, kahn: 1 } },
        { text: 'Concrete grays that feel raw and honest', scores: { ando: 1, foster: 1 } },
        { text: 'Clean whites that create calm', scores: { corbusier: 1, lin: 1 } },
        { text: 'Vibrant hues that spark joy', scores: { ingels: 1, gaudi: 1 } }
    ]
},
{
    text: 'How big do you dream?',
    options: [
        { text: 'Massive, iconic landmarks', scores: { hadid: 1, foster: 1 } },
        { text: 'Cozy homes with human touch', scores: { wright: 1, gaudi: 1, lin: 1 } },
        { text: 'Ambitious housing for lots of people', scores: { corbusier: 1, koolhaas: 1 } },
        { text: 'Spaces that bring communities together', scores: { ingels: 1, kahn: 1 } },
        { text: 'Sacred spaces that feel timeless', scores: { ando: 1, kahn: 1 } }
    ]
},
{
    text: 'What should architecture do?',
    options: [
        { text: 'Shock, delight, and challenge expectations', scores: { hadid: 1, koolhaas: 1 } },
        { text: 'Blend into nature and feel part of the land', scores: { wright: 1, gaudi: 1 } },
        { text: 'Bring order and make life easier', scores: { corbusier: 1, foster: 1 } },
        { text: 'Create peace and introspection', scores: { ando: 1, lin: 1 } },
        { text: 'Support sustainable and meaningful living', scores: { ingels: 1, kahn: 1 } }
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
