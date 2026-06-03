const words = [
    { char: '貓', zhuyin: 'ㄇㄠ' },
    { char: '狗', zhuyin: 'ㄍㄡˇ' },
    { char: '豬', zhuyin: 'ㄓㄨ' },
    { char: '鳥', zhuyin: 'ㄋㄧㄠˇ' },
    { char: '魚', zhuyin: 'ㄩˊ' },
    { char: '馬', zhuyin: 'ㄇㄚˇ' },
    { char: '牛', zhuyin: 'ㄋㄧㄡˊ' },
    { char: '羊', zhuyin: 'ㄧㄤˊ' },
    { char: '兔', zhuyin: 'ㄊㄨˋ' },
    { char: '龍', zhuyin: 'ㄌㄨㄥˊ' }
];

const correctImages = Array.from({length: 35}, (_, i) => `correct/${i + 1}.jpg`);
const wrongImages = [
    ...Array.from({length: 11}, (_, i) => `wrong/${i + 1}.jpg`),
    'wrong/1.png',
    'wrong/2.png',
];

let currentWord = null;
let currentInput = "";

// 注音鍵盤配置
const keyboardLayout = [
    ['ㄅ', 'ㄆ', 'ㄇ', 'ㄈ', 'ㄉ', 'ㄊ', 'ㄋ', 'ㄌ'],
    ['ㄍ', 'ㄎ', 'ㄏ', 'ㄐ', 'ㄑ', 'ㄒ'],
    ['ㄓ', 'ㄔ', 'ㄕ', 'ㄖ', 'ㄗ', 'ㄘ', 'ㄙ'],
    ['ㄧ', 'ㄨ', 'ㄩ', 'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ'],
    ['ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ'],
    [{char: '˙', class: 'tone'}, {char: 'ˊ', class: 'tone'}, {char: 'ˇ', class: 'tone'}, {char: 'ˋ', class: 'tone'}]
];

const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');
const statusMessage = document.getElementById('status-message');
const userInputDisplay = document.getElementById('user-input');
const keyboardContainer = document.getElementById('keyboard');
const backspaceBtn = document.getElementById('backspace-btn');
const clearBtn = document.getElementById('clear-btn');
const submitBtn = document.getElementById('submit-btn');
const charDisplay = document.getElementById('char-display');
const resultOverlay = document.getElementById('result-overlay');
const overlayImg = document.getElementById('overlay-img');

resultOverlay.addEventListener('click', () => {
    resultOverlay.classList.remove('active');
});

function showResultImage(type) {
    const list = type === 'correct' ? correctImages : wrongImages;
    if (list.length === 0) return;
    const src = list[Math.floor(Math.random() * list.length)];
    overlayImg.src = src;
    resultOverlay.classList.add('active');
}

function initKeyboard() {
    keyboardContainer.innerHTML = '';
    keyboardLayout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        row.forEach(key => {
            const btn = document.createElement('button');
            btn.className = 'key-btn';
            
            if (typeof key === 'object') {
                btn.textContent = key.char;
                btn.classList.add(key.class);
            } else {
                btn.textContent = key;
            }
            
            btn.addEventListener('click', () => {
                handleInput(btn.textContent);
            });
            
            rowDiv.appendChild(btn);
        });
        keyboardContainer.appendChild(rowDiv);
    });
}

function handleInput(char) {
    currentInput += char;
    updateDisplay();
}

function updateDisplay() {
    userInputDisplay.textContent = currentInput;
}

function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-TW';
        utterance.rate = 0.5;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('您的瀏覽器不支援語音合成功能');
    }
}

function nextWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    currentInput = "";
    updateDisplay();
    charDisplay.textContent = currentWord.char;
    resultImageWrap.innerHTML = '';
    statusMessage.textContent = '請聽發音，並輸入注音符號！';
    statusMessage.className = 'status';
    speak(currentWord.char);
}

playBtn.addEventListener('click', () => {
    if (currentWord) {
        speak(currentWord.char);
    } else {
        nextWord();
    }
});

nextBtn.addEventListener('click', () => {
    nextWord();
});

backspaceBtn.addEventListener('click', () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
});

clearBtn.addEventListener('click', () => {
    currentInput = "";
    updateDisplay();
});

submitBtn.addEventListener('click', () => {
    if (!currentWord) {
        statusMessage.textContent = '請先點擊「念出這個字」開始遊戲！';
        return;
    }
    
    if (currentInput === currentWord.zhuyin) {
        statusMessage.textContent = `答對了！好棒棒！ 🎉`;
        statusMessage.className = 'status correct';
        showResultImage('correct');
    } else {
        statusMessage.textContent = '答錯了，再試一次！';
        statusMessage.className = 'status wrong';
        showResultImage('wrong');
    }
});

// 初始化
initKeyboard();
