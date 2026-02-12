// Game State
const gameState = {
    ageVerified: false,
    currentScreen: 'age-verify',
    currentCharacter: null,
    currentDialogue: null,
    affection: 0,
    cringe: 0,
    achievements: [],
    settings: {
        musicVolume: 50,
        sfxVolume: 70,
        textSpeed: 'normal',
        skipCringe: false
    }
};

// Characters Database
const characters = [
    {
        id: 'sakura',
        name: 'Sakura-chan',
        avatar: '🌸',
        title: 'The Classic Tsundere',
        trait: 'Has emotional range of teaspoon',
        personality: 'tsundere',
        dialogues: [
            {
                id: 1,
                text: "B-b-baka! It's not like I wanted to meet you or anything! I just happened to be walking in the same direction for the past 30 minutes!",
                options: [
                    { text: '"I\'m honored you stalked me!"', affection: 5, cringe: 10 },
                    { text: '"My GPS says you\'ve been following me since yesterday."', affection: -5, cringe: 15 },
                    { text: '"I understand completely. That makes total sense."', affection: 0, cringe: 20 }
                ],
                responses: [
                    "I-I wasn't stalking you! This is just a VERY specific coincidence!",
                    "SHUT UP! Don't use logic! Logic is for boring people!",
                    "Finally someone gets it! ...Wait, was that sarcasm?"
                ]
            },
            {
                id: 2,
                text: "Hmph. You're actually kind of... decent. For someone with zero redeeming qualities. Don't get a big head about it!",
                options: [
                    { text: '"I\'ll treasure that compliment forever."', affection: 5, cringe: 8 },
                    { text: '"That was the most backhanded thing anyone\'s said to me."', affection: 0, cringe: 12 },
                    { text: '*Cry*', affection: -10, cringe: 25 }
                ],
                responses: [
                    "Ugh, don't be gross! It wasn't a compliment!",
                    "You should be grateful I'm even talking to you!",
                    "WHAT?! Why are you crying?! I didn't mean... wait, yes I did!"
                ]
            },
            {
                id: 3,
                text: "I baked you cookies. BUT DON'T GET THE WRONG IDEA! My mom made too many and I didn't want them to go to waste! It's purely about food waste reduction!",
                options: [
                    { text: '"These are amazing! I can taste the hate!"', affection: 10, cringe: 5 },
                    { text: '"This is obviously a love confession."', affection: -5, cringe: 15 },
                    { text: '"Can I get more of this food waste reduction?"', affection: 5, cringe: 8 }
                ],
                responses: [
                    "W-WHAT?! I put my heart into those... NOT THAT I CARE ABOUT YOU!",
                    "NO! IT'S NOT! YOU'RE IMAGINING THINGS!",
                    "Maybe. If you beg enough. Probably not though."
                ]
            }
        ]
    },
    {
        id: 'yuki',
        name: 'Yuki-senpai',
        avatar: '❄️',
        title: 'The Stoic Ice Queen',
        trait: 'Emotional constipation level: Expert',
        personality: 'kuudere',
        dialogues: [
            {
                id: 1,
                text: "...",
                options: [
                    { text: '"..."', affection: 5, cringe: 15 },
                    { text: '"Did you fall asleep?"', affection: -5, cringe: 10 },
                    { text: '*Intense staring contest*', affection: 0, cringe: 20 }
                ],
                responses: [
                    "...",
                    "No. I am contemplating the futility of human interaction.",
                    "..."
                ]
            },
            {
                id: 2,
                text: "I calculated that there is a 0.0003% chance of us being compatible. However, my calculator has been malfunctioning lately. The screen keeps showing 'ERROR: BAD IDEA'.",
                options: [
                    { text: '"I like those odds!"', affection: 5, cringe: 8 },
                    { text: '"That\'s the most romantic thing anyone\'s said to me."', affection: 10, cringe: 12 },
                    { text: '"Time to buy a new calculator."', affection: -5, cringe: 5 }
                ],
                responses: [
                    "That is an irrational statement.",
                    "That was not intended to be romantic.",
                    "You should. Also, delete my number while you're shopping."
                ]
            },
            {
                id: 3,
                text: "I have prepared an Excel spreadsheet listing all the reasons why pursuing any relationship with me would be detrimental to your mental health and career prospects.",
                options: [
                    { text: '"I love spreadsheets! Show me!"', affection: 10, cringe: 5 },
                    { text: '"This is oddly specific."', affection: 0, cringe: 10 },
                    { text: '"I\'ll take my chances."', affection: -5, cringe: 15 }
                ],
                responses: [
                    "Finally, someone with an appreciation for data.",
                    "I am always specific. Precision is not odd.",
                    "That was not a suggestion. It was a warning."
                ]
            }
        ]
    },
    {
        id: 'hina',
        name: 'Hina-tan',
        avatar: '🌟',
        title: 'The Energetic Genki Girl',
        trait: 'Screams instead of speaking',
        personality: 'genki',
        dialogues: [
            {
                id: 1,
                text: "KYAAAAAAAAA!!! I'M SO EXCITED TO MEET YOU!!! LET'S BE BEST FRIENDS FOREVER AND GET MATCHING TATTOOS AND MOVE IN TOGETHER!!!",
                options: [
                    { text: '"I DON\'T KNOW YOU BUT OKAY!!!"', affection: 5, cringe: 10 },
                    { text: '"Please lower your voice. My ears are bleeding."', affection: -5, cringe: 8 },
                    { text: '*Runs away*', affection: -10, cringe: 15 }
                ],
                responses: [
                    "YAAAAY!!! I KNEW WE'D GET ALONG!!!",
                    "OH SORRY!!! SHOULD I WHISPER?!?!?",
                    "WHY ARE YOU RUNNING?! COME BACK!!!"
                ]
            },
            {
                id: 2,
                text: "I organized a surprise party for us! I invited everyone in the phonebook! Also, I think some of them might be serial killers but YOLO, right?!",
                options: [
                    { text: '"This is a red flag."*', affection: -5, cringe: 5 },
                    { text: '"As long as there\'s cake, I\'m in!"', affection: 5, cringe: 10 },
                    { text: '"I\'m calling the police."*', affection: -10, cringe: 8 }
                ],
                responses: [
                    "It's not a red flag! It's just... enthusiastic flag! :D",
                    "THERE'S A CAKE THAT'S SHAPED LIKE US!!!",
                    "BUT IT'S TOO LATE THEY'RE ALREADY HERE!!!"
                ]
            },
            {
                id: 3,
                text: "So I was thinking, what if we start a business together? I have a GREAT idea! It's a subscription service for... uh... I'll get back to you on the details!",
                options: [
                    { text: '"I\'ll invest 500 yen."', affection: 0, cringe: 12 },
                    { text: '"This sounds safe."*', affection: -5, cringe: 15 },
                    { text: '"How about we don\'t?"*', affection: 5, cringe: 5 }
                ],
                responses: [
                    "YAY!!! I'll buy... something! With the money!",
                    "Right?! Best business plan ever!",
                    "YOU'RE NO FUN!!! But okay..."
                ]
            }
        ]
    },
    {
        id: 'ryu',
        name: 'Ryu-kun',
        avatar: '🐉',
        title: 'The Mysterious Edgelord',
        trait: 'Writes poetry in the dark',
        personality: 'edgelord',
        dialogues: [
            {
                id: 1,
                text: "Hmph. So you've come to my dark realm. Few dare to enter the void. Most flee in terror. You... you have seen things, haven't you?",
                options: [
                    { text: '"Yes, I saw your Instagram posts. Very edgy."', affection: -5, cringe: 15 },
                    { text: '"I work at Walmart. That\'s pretty dark."', affection: 5, cringe: 10 },
                    { text: '"..."', affection: 0, cringe: 20 }
                ],
                responses: [
                    "Fool! That is not the darkness I speak of! ...wait, you saw my posts?",
                    "Ah, the retail void. I too have worked in customer service. The darkness knows no bounds.",
                    "Your silence... it speaks to me. It says 'please go away'. But I shall not."
                ]
            },
            {
                id: 2,
                text: "I wrote a poem. It's about how nobody understands me and how I'm like a raven that cannot fly because society clipped my wings.",
                options: [
                    { text: '"Let me hear it."', affection: 5, cringe: 8 },
                    { text: '"Ravens can still fly with clipped wings sometimes."', affection: -5, cringe: 12 },
                    { text: '"I think birds regenerate feathers."', affection: 0, cringe: 15 }
                ],
                responses: [
                    "*clears throat* THE DARKNESS WHISPERS... oh wait, I didn't memorize the rest",
                    "YOU'RE MISSING THE POINT! IT'S METAPHORICAL!",
                    "STOP RUINING MY POETRY WITH SCIENCE!"
                ]
            },
            {
                id: 3,
                text: "I sit in the dark contemplating the futility of existence. Also I have a really expensive gaming setup and anime figures. My soul is tormented.",
                options: [
                    { text: '"Can I play on your gaming setup?"', affection: 10, cringe: 5 },
                    { text: '"The darkness has RGB lights?"', affection: 0, cringe: 12 },
                    { text: '"Sell me your anime figures."', affection: -5, cringe: 8 }
                ],
                responses: [
                    "Fine. But only if you acknowledge my torment.",
                    "The darkness... is lit. For aesthetic reasons.",
                    "THEY ARE PRICELESS COLLECTIBLES! Also I bought them with my soul money."
                ]
            }
        ]
    },
    {
        id: 'kaoru',
        name: 'Kaoru-nee',
        avatar: '🎀',
        title: 'The Overprotective Onee-san',
        trait: 'Has adopted 47 people this month',
        personality: 'oneesan',
        dialogues: [
            {
                id: 1,
                text: "Oh my goodness, look at you! You're so cute! Are you eating enough? Do you have a jacket? Have you called your mother today? She worries, you know!",
                options: [
                    { text: '"I\'m 25 years old..."', affection: 0, cringe: 8 },
                    { text: '"Can I call you mom?"', affection: 5, cringe: 12 },
                    { text: '"Yes, please take care of me!"', affection: 10, cringe: 10 }
                ],
                responses: [
                    "You're NEVER too old for mothering! Here, I packed you a lunch!",
                    "Awwww! That's the sweetest thing anyone's said to me!",
                    "Of course! I've already enrolled you in my family plan!"
                ]
            },
            {
                id: 2,
                text: "I was thinking, you should move in with me! I have an extra room and I need someone to help taste-test my experimental cooking! What could go wrong?",
                options: [
                    { text: '"Food poisoning. That\'s what could go wrong."', affection: -5, cringe: 5 },
                    { text: '"I\'ll bring my own emergency medical kit."', affection: 5, cringe: 10 },
                    { text: '"I\'m actually really good at eating."', affection: 0, cringe: 12 }
                ],
                responses: [
                    "Nonsense! I follow recipes! Sort of! Sometimes!",
                    "Perfect! I have one too! It's fully stocked!",
                    "Then you're PERFECT for the job!"
                ]
            },
            {
                id: 3,
                text: "Remember to bundle up! It's cold outside! Also here's a scarf, gloves, hat, thermal underwear, and a portable heater. Don't lose them!",
                options: [
                    { text: '"This is too much stuff!"', affection: 0, cringe: 8 },
                    { text: '"I\'m going to overheat..."', affection: -5, cringe: 10 },
                    { text: '"Thank you, Kaoru-nee!"', affection: 10, cringe: 5 }
                ],
                responses: [
                    "There's no such thing as too much safety!",
                    "Better to be warm than cold! Now wear ALL of it!",
                    "You're welcome! Call me if you need anything! I'll pick up on the first ring!"
                ]
            }
        ]
    }
];

// Achievements
const achievementsList = [
    { id: 'first_contact', name: 'First Contact', icon: '🏆', desc: 'Started the game' },
    { id: 'tsundere_trigger', name: 'Tsundere Triggered', icon: '💥', desc: 'Made Sakura-chan angry' },
    { id: 'ice_queen_melting', name: 'Ice Queen Melting', icon: '💧', desc: 'Got Yuki to emote' },
    { id: 'hearing_loss', name: 'Hearing Loss', icon: '👂', desc: 'Talked to Hina-tan' },
    { id: 'edgelord_approved', name: 'Edgelord Approved', icon: '🖤', desc: 'Connected with Ryu-kun' },
    { id: 'adopted', name: 'Adopted', icon: '🏠', desc: 'Got adopted by Kaoru-nee' },
    { id: 'max_cringe', name: 'Maximum Cringe', icon: '😱', desc: 'Reached 100 cringe points' },
    { id: 'true_love', name: 'True Love?', icon: '💕', desc: 'Reached 50 affection' }
];

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    gameState.currentScreen = screenId;
}

// Age Verification
function verifyAge(isAdult) {
    gameState.ageVerified = isAdult;
    if (isAdult) {
        showScreen('main-menu');
        unlockAchievement('first_contact');
    } else {
        alert("Good choice. Go do something productive with your life. Maybe touch some grass.");
    }
}

// Main Menu Functions
function startGame() {
    showScreen('character-select');
    renderCharacterGrid();
}

function showCharacters() {
    showScreen('character-select');
    renderCharacterGrid();
}

function showGallery() {
    showScreen('gallery');
    renderAchievements();
}

function showSettings() {
    showScreen('settings');
}

function showMainMenu() {
    showScreen('main-menu');
}

// Character Selection
function renderCharacterGrid() {
    const grid = document.getElementById('character-grid');
    grid.innerHTML = '';

    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.onclick = () => selectCharacter(character.id);
        card.innerHTML = `
            <div class="character-avatar">${character.avatar}</div>
            <div class="character-name">${character.name}</div>
            <div class="character-role">"${character.title}"</div>
            <div class="character-trait">${character.trait}</div>
        `;
        grid.appendChild(card);
    });
}

function selectCharacter(characterId) {
    const character = characters.find(c => c.id === characterId);
    if (character) {
        gameState.currentCharacter = character;
        gameState.currentDialogue = 0;
        gameState.affection = 0;
        gameState.cringe = 0;
        updateGameUI();
        showScreen('game-screen');
        displayDialogue();
    }
}

// Game Functions
function updateGameUI() {
    const character = gameState.currentCharacter;
    document.getElementById('current-location').textContent = '📍 The Void of Anime Tropes';
    document.getElementById('player-name').textContent = 'Player-kun';
    document.getElementById('current-character-name').textContent = character.name;
    document.getElementById('current-character-title').textContent = `"${character.title}"`;
    document.getElementById('sprite-placeholder').textContent = character.avatar;
    document.getElementById('affection-level').textContent = gameState.affection;
    document.getElementById('cringe-level').textContent = gameState.cringe;
}

function displayDialogue() {
    const character = gameState.currentCharacter;
    const dialogueIndex = gameState.currentDialogue;
    const dialogue = character.dialogues[dialogueIndex];

    document.getElementById('dialogue-text').textContent = `"${dialogue.text}"`;

    const optionsContainer = document.getElementById('dialogue-options');
    optionsContainer.innerHTML = '';

    dialogue.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'dialogue-option';
        button.textContent = option.text;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });
}

function selectOption(optionIndex) {
    const character = gameState.currentCharacter;
    const dialogue = character.dialogues[gameState.currentDialogue];
    const option = dialogue.options[optionIndex];
    const response = dialogue.responses[optionIndex];

    // Update stats
    gameState.affection += option.affection;
    gameState.cringe += option.cringe;
    updateGameUI();

    // Show response
    document.getElementById('dialogue-text').textContent = `"${response}"`;

    // Clear options and add continue button
    const optionsContainer = document.getElementById('dialogue-options');
    optionsContainer.innerHTML = '';

    const continueButton = document.createElement('button');
    continueButton.className = 'dialogue-option';
    continueButton.textContent = 'Continue...';
    continueButton.onclick = () => nextDialogue();
    optionsContainer.appendChild(continueButton);

    // Check achievements
    checkAchievements(character);
}

function nextDialogue() {
    const character = gameState.currentCharacter;
    gameState.currentDialogue++;

    if (gameState.currentDialogue >= character.dialogues.length) {
        // End of character route
        endRoute();
    } else {
        displayDialogue();
    }
}

function endRoute() {
    const character = gameState.currentCharacter;
    const characterName = character.name;

    let endingText = '';
    if (gameState.affection >= 30) {
        endingText = `🎊 CONGRATULATIONS! You've won ${characterName}'s heart! 🎊\n\nJust kidding, this is a parody. But here's a virtual cookie: 🍪`;
    } else if (gameState.cringe >= 50) {
        endingText = `😱 YOU HAVE SURVIVED ${characterName}!\n\nThe cringe level was off the charts. Your dignity has been compromised, but you lived to tell the tale.`;
    } else {
        endingText = `👋 You've finished ${characterName}'s route!\n\nYou didn't really connect, but you survived the anime tropes. That's something, right?`;
    }

    const optionsContainer = document.getElementById('dialogue-options');
    optionsContainer.innerHTML = '';
    document.getElementById('dialogue-text').innerHTML = endingText.replace(/\n/g, '<br>');

    const backButton = document.createElement('button');
    backButton.className = 'dialogue-option';
    backButton.textContent = 'Return to Menu';
    backButton.onclick = () => showMainMenu();
    optionsContainer.appendChild(backButton);
}

// Achievements
function unlockAchievement(achievementId) {
    if (!gameState.achievements.includes(achievementId)) {
        gameState.achievements.push(achievementId);
        const achievement = achievementsList.find(a => a.id === achievementId);
        if (achievement) {
            alert(`🏆 Achievement Unlocked: ${achievement.name}!\n\n${achievement.desc}`);
        }
    }
}

function checkAchievements(character) {
    // Character-specific achievements
    if (character.id === 'sakura' && gameState.affection < 0) {
        unlockAchievement('tsundere_trigger');
    }
    if (character.id === 'yuki' && gameState.affection > 10) {
        unlockAchievement('ice_queen_melting');
    }
    if (character.id === 'hina') {
        unlockAchievement('hearing_loss');
    }
    if (character.id === 'ryu' && gameState.affection > 5) {
        unlockAchievement('edgelord_approved');
    }
    if (character.id === 'kaoru' && gameState.affection > 0) {
        unlockAchievement('adopted');
    }

    // General achievements
    if (gameState.cringe >= 50) {
        unlockAchievement('max_cringe');
    }
    if (gameState.affection >= 30) {
        unlockAchievement('true_love');
    }
}

function renderAchievements() {
    const grid = document.getElementById('achievement-grid');
    grid.innerHTML = '';

    achievementsList.forEach(achievement => {
        const isUnlocked = gameState.achievements.includes(achievement.id);
        const div = document.createElement('div');
        div.className = `achievement ${isUnlocked ? '' : 'locked'}`;
        div.innerHTML = `
            <span class="achievement-icon">${isUnlocked ? achievement.icon : '🔒'}</span>
            <p class="achievement-name">${isUnlocked ? achievement.name : '???'}</p>
            ${isUnlocked ? `<p class="achievement-desc">${achievement.desc}</p>` : ''}
        `;
        grid.appendChild(div);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('Yamete Kudasai - Loaded and ready to disappoint!');
});
