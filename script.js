// --- Data Sets ---

// Vocabulario 51 (Routine & Hygiene)
const vocab51 = [
    // Los verbos reflexivos
    { category: "Verbos Reflexivos", spanish: "acordarse (de) (o:ue)", english: "to remember" },
    { category: "Verbos Reflexivos", spanish: "acostarse (o:ue)", english: "to go to bed" },
    { category: "Verbos Reflexivos", spanish: "afeitarse", english: "to shave" },
    { category: "Verbos Reflexivos", spanish: "bañarse", english: "to bathe; to take a bath" },
    { category: "Verbos Reflexivos", spanish: "cepillarse el pelo", english: "to brush one's hair" },
    { category: "Verbos Reflexivos", spanish: "cepillarse los dientes", english: "to brush one's teeth" },
    { category: "Verbos Reflexivos", spanish: "despertarse (e:ie)", english: "to wake up" },
    { category: "Verbos Reflexivos", spanish: "dormirse (o:ue)", english: "to go to sleep; to fall asleep" },
    { category: "Verbos Reflexivos", spanish: "ducharse", english: "to shower; to take a shower" },
    { category: "Verbos Reflexivos", spanish: "enojarse (con)", english: "to get angry (with)" },
    { category: "Verbos Reflexivos", spanish: "irse", english: "to go away; to leave" },
    { category: "Verbos Reflexivos", spanish: "lavarse la cara", english: "to wash one's face" },
    { category: "Verbos Reflexivos", spanish: "lavarse las manos", english: "to wash one's hands" },
    { category: "Verbos Reflexivos", spanish: "levantarse", english: "to get up" },
    { category: "Verbos Reflexivos", spanish: "llamarse", english: "to be called; to be named" },
    { category: "Verbos Reflexivos", spanish: "maquillarse", english: "to put on makeup" },
    { category: "Verbos Reflexivos", spanish: "peinarse", english: "to comb one's hair" },
    { category: "Verbos Reflexivos", spanish: "ponerse", english: "to put on" },
    { category: "Verbos Reflexivos", spanish: "ponerse (+ adj.)", english: "to become (+ adj.)" },
    { category: "Verbos Reflexivos", spanish: "preocuparse (por)", english: "to worry (about)" },
    { category: "Verbos Reflexivos", spanish: "probarse (o:ue)", english: "to try on" },
    { category: "Verbos Reflexivos", spanish: "quedarse", english: "to stay; to remain" },
    { category: "Verbos Reflexivos", spanish: "quitarse", english: "to take off" },
    { category: "Verbos Reflexivos", spanish: "secarse", english: "to dry oneself" },
    { category: "Verbos Reflexivos", spanish: "sentarse (e:ie)", english: "to sit down" },
    { category: "Verbos Reflexivos", spanish: "sentirse (e:ie)", english: "to feel" },
    { category: "Verbos Reflexivos", spanish: "vestirse (e:i)", english: "to get dressed" },
    // Palabras de secuencia
    { category: "Palabras de secuencia", spanish: "antes (de)", english: "before" },
    { category: "Palabras de secuencia", spanish: "después", english: "afterwards; then" },
    { category: "Palabras de secuencia", spanish: "después (de)", english: "after" },
    { category: "Palabras de secuencia", spanish: "durante", english: "during" },
    { category: "Palabras de secuencia", spanish: "entonces", english: "then" },
    { category: "Palabras de secuencia", spanish: "luego", english: "then" },
    { category: "Palabras de secuencia", spanish: "más tarde", english: "later on" },
    { category: "Palabras de secuencia", spanish: "por último", english: "finally" },
    // Verbos similares a gustar
    { category: "Verbos similares a gustar", spanish: "aburrir", english: "to bore" },
    { category: "Verbos similares a gustar", spanish: "encantar", english: "to like very much; to love (inanimate)" },
    { category: "Verbos similares a gustar", spanish: "faltar", english: "to lack; to need" },
    { category: "Verbos similares a gustar", spanish: "fascinar", english: "to fascinate; to like very much" },
    { category: "Verbos similares a gustar", spanish: "importar", english: "to be important to; to matter" },
    { category: "Verbos similares a gustar", spanish: "interesar", english: "to be interesting to; to interest" },
    { category: "Verbos similares a gustar", spanish: "molestar", english: "to bother; to annoy" },
    { category: "Verbos similares a gustar", spanish: "quedar", english: "to be left over; to fit (clothing)" },
    // Indefinidas y negativas
    { category: "Indefinidas y negativas", spanish: "algo", english: "something; anything" },
    { category: "Indefinidas y negativas", spanish: "alguien", english: "someone; somebody; anyone" },
    { category: "Indefinidas y negativas", spanish: "alguno/a(s), algún", english: "some; any" },
    { category: "Indefinidas y negativas", spanish: "jamás", english: "never; not ever" },
    { category: "Indefinidas y negativas", spanish: "nada", english: "nothing; not anything" },
    { category: "Indefinidas y negativas", spanish: "nadie", english: "no one; nobody; not anyone" },
    { category: "Indefinidas y negativas", spanish: "ni... ni", english: "neither... nor" },
    { category: "Indefinidas y negativas", spanish: "ninguno/a, ningún", english: "no; none; not any" },
    { category: "Indefinidas y negativas", spanish: "nunca", english: "never; not ever" },
    { category: "Indefinidas y negativas", spanish: "o... o", english: "either... or" },
    { category: "Indefinidas y negativas", spanish: "siempre", english: "always" },
    { category: "Indefinidas y negativas", spanish: "también", english: "also; too" },
    { category: "Indefinidas y negativas", spanish: "tampoco", english: "neither; not either" },
    // Palabras adicionales
    { category: "Palabras adicionales", spanish: "el despertador", english: "alarm clock" },
    { category: "Palabras adicionales", spanish: "las pantuflas", english: "slippers" },
    { category: "Palabras adicionales", spanish: "la rutina diaria", english: "daily routine" },
    { category: "Palabras adicionales", spanish: "por la mañana", english: "in the morning" },
    { category: "Palabras adicionales", spanish: "por la noche", english: "at night" },
    { category: "Palabras adicionales", spanish: "por la tarde", english: "in the afternoon; in the evening" },
    // En el baño
    { category: "En el baño", spanish: "el baño, el cuarto de baño", english: "bathroom" },
    { category: "En el baño", spanish: "el champú", english: "shampoo" },
    { category: "En el baño", spanish: "la crema de afeitar", english: "shaving cream" },
    { category: "En el baño", spanish: "la ducha", english: "shower" },
    { category: "En el baño", spanish: "el espejo", english: "mirror" },
    { category: "En el baño", spanish: "el inodoro", english: "toilet" },
    { category: "En el baño", spanish: "el jabón", english: "soap" },
    { category: "En el baño", spanish: "el lavabo", english: "sink" },
    { category: "En el baño", spanish: "el maquillaje", english: "makeup" },
    { category: "En el baño", spanish: "la pasta de dientes", english: "toothpaste" },
    { category: "En el baño", spanish: "la toalla", english: "towel" }
];

// Vocabulario 91 (Food & Comparisons)
const vocab91 = [
    // Las comidas
    { category: "Las comidas", spanish: "el/la camarero/a", english: "waiter/waitress" },
    { category: "Las comidas", spanish: "la comida", english: "food; meal" },
    { category: "Las comidas", spanish: "el/la dueño/a", english: "owner; landlord" },
    { category: "Las comidas", spanish: "el menú", english: "menu" },
    { category: "Las comidas", spanish: "el almuerzo", english: "lunch" },
    { category: "Las comidas", spanish: "la cena", english: "dinner" },
    { category: "Las comidas", spanish: "el desayuno", english: "breakfast" },
    { category: "Las comidas", spanish: "los entremeses", english: "hors d'oeuvres; appetizers" },
    { category: "Las comidas", spanish: "el plato (principal)", english: "(main) dish" },
    { category: "Las comidas", spanish: "delicioso/a", english: "delicious" },
    { category: "Las comidas", spanish: "rico/a", english: "tasty; delicious" },
    { category: "Las comidas", spanish: "sabroso/a", english: "tasty; delicious" },
    // Las frutas
    { category: "Las frutas", spanish: "la banana", english: "banana" },
    { category: "Las frutas", spanish: "las frutas", english: "fruits" },
    { category: "Las frutas", spanish: "el limón", english: "lemon" },
    { category: "Las frutas", spanish: "la manzana", english: "apple" },
    { category: "Las frutas", spanish: "el melocotón", english: "peach" },
    { category: "Las frutas", spanish: "la naranja", english: "orange" },
    { category: "Las frutas", spanish: "la pera", english: "pear" },
    { category: "Las frutas", spanish: "la uva", english: "grape" },
    // Las verduras
    { category: "Las verduras", spanish: "las arvejas", english: "peas" },
    { category: "Las verduras", spanish: "la cebolla", english: "onion" },
    { category: "Las verduras", spanish: "el champiñón", english: "mushroom" },
    { category: "Las verduras", spanish: "la ensalada", english: "salad" },
    { category: "Las verduras", spanish: "los espárragos", english: "asparagus" },
    { category: "Las verduras", spanish: "los frijoles", english: "beans" },
    { category: "Las verduras", spanish: "la lechuga", english: "lettuce" },
    { category: "Las verduras", spanish: "el maíz", english: "corn" },
    { category: "Las verduras", spanish: "las papas/patatas (fritas)", english: "(fried) potatoes; French fries" },
    { category: "Las verduras", spanish: "el tomate", english: "tomato" },
    { category: "Las verduras", spanish: "las verduras", english: "vegetables" },
    { category: "Las verduras", spanish: "la zanahoria", english: "carrot" },
    // La carne y el pescado
    { category: "La carne y el pescado", spanish: "el atún", english: "tuna" },
    { category: "La carne y el pescado", spanish: "el bistec", english: "steak" },
    { category: "La carne y el pescado", spanish: "los camarones", english: "shrimp" },
    { category: "La carne y el pescado", spanish: "la carne", english: "meat" },
    { category: "La carne y el pescado", spanish: "la carne de res", english: "beef" },
    { category: "La carne y el pescado", spanish: "la chuleta (de cerdo)", english: "(pork) chop" },
    { category: "La carne y el pescado", spanish: "la hamburguesa", english: "hamburger" },
    { category: "La carne y el pescado", spanish: "el jamón", english: "ham" },
    { category: "La carne y el pescado", spanish: "la langosta", english: "lobster" },
    { category: "La carne y el pescado", spanish: "los mariscos", english: "shellfish" },
    { category: "La carne y el pescado", spanish: "el pavo", english: "turkey" },
    { category: "La carne y el pescado", spanish: "el pescado", english: "fish" },
    { category: "La carne y el pescado", spanish: "el pollo (asado)", english: "(roast) chicken" },
    { category: "La carne y el pescado", spanish: "la salchicha", english: "sausage" },
    { category: "La carne y el pescado", spanish: "el salmón", english: "salmon" },
    // Otras comidas
    { category: "Otras comidas", spanish: "el aceite", english: "oil" },
    { category: "Otras comidas", spanish: "el ajo", english: "garlic" },
    { category: "Otras comidas", spanish: "el arroz", english: "rice" },
    { category: "Otras comidas", spanish: "el azúcar", english: "sugar" },
    { category: "Otras comidas", spanish: "los cereales", english: "cereal; grains" },
    { category: "Otras comidas", spanish: "el helado", english: "ice cream" },
    { category: "Otras comidas", spanish: "el huevo", english: "egg" },
    { category: "Otras comidas", spanish: "la mantequilla", english: "butter" },
    { category: "Otras comidas", spanish: "la margarina", english: "margarine" },
    { category: "Otras comidas", spanish: "la mayonesa", english: "mayonnaise" },
    { category: "Otras comidas", spanish: "el pan (tostado)", english: "(toasted) bread" },
    { category: "Otras comidas", spanish: "la pimienta", english: "black pepper" },
    { category: "Otras comidas", spanish: "el postre", english: "dessert" },
    { category: "Otras comidas", spanish: "el queso", english: "cheese" },
    { category: "Otras comidas", spanish: "la sal", english: "salt" },
    { category: "Otras comidas", spanish: "el sándwich", english: "sandwich" },
    { category: "Otras comidas", spanish: "la sopa", english: "soup" },
    { category: "Otras comidas", spanish: "el vinagre", english: "vinegar" },
    { category: "Otras comidas", spanish: "el yogur", english: "yogurt" },
    // Las bebidas
    { category: "Las bebidas", spanish: "el agua (mineral)", english: "(mineral) water" },
    { category: "Las bebidas", spanish: "la bebida", english: "drink" },
    { category: "Las bebidas", spanish: "el café", english: "coffee" },
    { category: "Las bebidas", spanish: "el jugo (de fruta)", english: "(fruit) juice" },
    { category: "Las bebidas", spanish: "la leche", english: "milk" },
    { category: "Las bebidas", spanish: "el refresco", english: "soft drink; soda" },
    { category: "Las bebidas", spanish: "el té (helado)", english: "(iced) tea" },
    // Verbos
    { category: "Verbos", spanish: "escoger", english: "to choose" },
    { category: "Verbos", spanish: "merendar (e:ie)", english: "to snack" },
    { category: "Verbos", spanish: "morir (o:ue)", english: "to die" },
    { category: "Verbos", spanish: "pedir (e:i)", english: "to order (food)" },
    { category: "Verbos", spanish: "probar (o:ue)", english: "to taste; to try" },
    { category: "Verbos", spanish: "recomendar (e:ie)", english: "to recommend" },
    { category: "Verbos", spanish: "saber (a)", english: "to taste (like)" },
    { category: "Verbos", spanish: "servir (e:i)", english: "to serve" },
    // Las comparaciones
    { category: "Las comparaciones", spanish: "como", english: "like; as" },
    { category: "Las comparaciones", spanish: "más de (+ number)", english: "more than" },
    { category: "Las comparaciones", spanish: "más... que", english: "more... than" },
    { category: "Las comparaciones", spanish: "menos de (+ number)", english: "fewer than" },
    { category: "Las comparaciones", spanish: "menos... que", english: "less... than" },
    { category: "Las comparaciones", spanish: "tan... como", english: "as... as" },
    { category: "Las comparaciones", spanish: "tantos/as... como", english: "as many... as" },
    { category: "Las comparaciones", spanish: "tanto... como", english: "as much... as" },
    { category: "Las comparaciones", spanish: "el/la mayor", english: "the oldest" },
    { category: "Las comparaciones", spanish: "el/la mejor", english: "the best" },
    { category: "Las comparaciones", spanish: "el/la menor", english: "the youngest" },
    { category: "Las comparaciones", spanish: "el/la peor", english: "the worst" },
    { category: "Las comparaciones", spanish: "mejor", english: "better" },
    { category: "Las comparaciones", spanish: "peor", english: "worse" }
];

// --- DOM Element References ---
const flashcard = document.getElementById('flashcard');
const cardFrontText = document.getElementById('card-front-text');
const cardBackText = document.getElementById('card-back-text');
const categoryFront = document.getElementById('category-front');
const categoryBack = document.getElementById('category-back');
const progressIndicator = document.getElementById('progress-indicator');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const shuffleButton = document.getElementById('shuffle-button');
const deckSelect = document.getElementById('deck-select');
const chapterTitle = document.getElementById('chapter-title');

// --- State ---
const decks = {
    'vocab51': { data: vocab51, title: 'Capítulo 2 - Vocabulario 51' },
    'vocab91': { data: vocab91, title: 'Capítulo 3 - Vocabulario 91' }
};

let currentDeckId = 'vocab51';
let originalDeck = [...decks['vocab51'].data];
let cards = [...originalDeck];
let currentIndex = 0;

// --- Functions ---

/**
 * Updates the content of the flashcard and the progress indicator.
 */
function updateCard() {
    if (cards.length === 0) return;

    const currentCard = cards[currentIndex];
    const isFlipped = flashcard.classList.contains('is-flipped');
    
    // 1. Always update Front and Categories immediately
    cardFrontText.textContent = currentCard.spanish;
    categoryFront.textContent = currentCard.category;
    categoryBack.textContent = currentCard.category;
    progressIndicator.textContent = `Card ${currentIndex + 1} / ${cards.length}`;

    // 2. Handle Back Logic to prevent spoilers
    if (isFlipped) {
        // If flipped, unflip first
        flashcard.classList.remove('is-flipped');
        
        // Wait for the card to be edge-on (300ms) before changing the back text
        setTimeout(() => {
            cardBackText.textContent = currentCard.english;
        }, 300);
    } else {
        // If not flipped, update back immediately
        cardBackText.textContent = currentCard.english;
    }
}

/**
 * Switch deck based on dropdown selection
 */
function switchDeck(deckId) {
    currentDeckId = deckId;
    const selectedDeck = decks[deckId];
    
    // Update Title
    chapterTitle.textContent = selectedDeck.title;
    
    // Reset Data
    originalDeck = [...selectedDeck.data];
    cards = [...originalDeck];
    currentIndex = 0;
    
    // Ensure card is not flipped
    if (flashcard.classList.contains('is-flipped')) {
        flashcard.classList.remove('is-flipped');
        // Small delay to allow flip back before updating content if needed, 
        // but updateCard handles logic well.
        setTimeout(updateCard, 300); 
    } else {
        updateCard();
    }
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCard();
}

function showPrevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCard();
}

function shuffleCards() {
    // Fisher-Yates Shuffle
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    currentIndex = 0;
    
    if (flashcard.classList.contains('is-flipped')) {
        flashcard.classList.remove('is-flipped');
        setTimeout(updateCard, 300);
    } else {
        updateCard();
    }
}

function handleKeydown(e) {
    if (e.key === 'ArrowRight') showNextCard();
    if (e.key === 'ArrowLeft') showPrevCard();
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault(); 
        flashcard.classList.toggle('is-flipped');
    }
}

// --- Event Listeners ---
flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('is-flipped');
});

nextButton.addEventListener('click', showNextCard);
prevButton.addEventListener('click', showPrevCard);
shuffleButton.addEventListener('click', shuffleCards);

deckSelect.addEventListener('change', (e) => {
    switchDeck(e.target.value);
});

document.addEventListener('keydown', handleKeydown);

// --- Initial Load ---
updateCard();

