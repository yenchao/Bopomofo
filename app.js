const words = [
    // 動物
    { char: '貓', zhuyin: 'ㄇㄠ' },
    { char: '狗', zhuyin: 'ㄍㄡˇ' },
    { char: '豬', zhuyin: 'ㄓㄨ' },
    { char: '鳥', zhuyin: 'ㄋㄧㄠˇ' },
    { char: '魚', zhuyin: 'ㄩˊ' },
    { char: '馬', zhuyin: 'ㄇㄚˇ' },
    { char: '牛', zhuyin: 'ㄋㄧㄡˊ' },
    { char: '羊', zhuyin: 'ㄧㄤˊ' },
    { char: '兔', zhuyin: 'ㄊㄨˋ' },
    { char: '龍', zhuyin: 'ㄌㄨㄥˊ' },
    { char: '蛇', zhuyin: 'ㄕㄜˊ' },
    { char: '虎', zhuyin: 'ㄏㄨˇ' },
    { char: '熊', zhuyin: 'ㄒㄩㄥˊ' },
    { char: '象', zhuyin: 'ㄒㄧㄤˋ' },
    { char: '猴', zhuyin: 'ㄏㄡˊ' },
    { char: '雞', zhuyin: 'ㄐㄧ' },
    { char: '鴨', zhuyin: 'ㄧㄚ' },
    { char: '蛙', zhuyin: 'ㄨㄚ' },
    { char: '蜂', zhuyin: 'ㄈㄥ' },
    { char: '鹿', zhuyin: 'ㄌㄨˋ' },
    { char: '獅', zhuyin: 'ㄕ' },
    { char: '豹', zhuyin: 'ㄅㄠˋ' },
    { char: '狼', zhuyin: 'ㄌㄤˊ' },
    { char: '龜', zhuyin: 'ㄍㄨㄟ' },
    { char: '狐', zhuyin: 'ㄏㄨˊ' },
    // 身體
    { char: '手', zhuyin: 'ㄕㄡˇ' },
    { char: '腳', zhuyin: 'ㄐㄧㄠˇ' },
    { char: '眼', zhuyin: 'ㄧㄢˇ' },
    { char: '耳', zhuyin: 'ㄦˇ' },
    { char: '口', zhuyin: 'ㄎㄡˇ' },
    { char: '鼻', zhuyin: 'ㄅㄧˊ' },
    { char: '頭', zhuyin: 'ㄊㄡˊ' },
    { char: '臉', zhuyin: 'ㄌㄧㄢˇ' },
    { char: '牙', zhuyin: 'ㄧㄚˊ' },
    { char: '毛', zhuyin: 'ㄇㄠˊ' },
    // 家人
    { char: '爸', zhuyin: 'ㄅㄚˋ' },
    { char: '媽', zhuyin: 'ㄇㄚ' },
    { char: '哥', zhuyin: 'ㄍㄜ' },
    { char: '姐', zhuyin: 'ㄐㄧㄝˇ' },
    { char: '弟', zhuyin: 'ㄉㄧˋ' },
    { char: '妹', zhuyin: 'ㄇㄟˋ' },
    { char: '爺', zhuyin: 'ㄧㄝˊ' },
    { char: '奶', zhuyin: 'ㄋㄞˇ' },
    // 食物
    { char: '飯', zhuyin: 'ㄈㄢˋ' },
    { char: '麵', zhuyin: 'ㄇㄧㄢˋ' },
    { char: '蛋', zhuyin: 'ㄉㄢˋ' },
    { char: '肉', zhuyin: 'ㄖㄡˋ' },
    { char: '菜', zhuyin: 'ㄘㄞˋ' },
    { char: '水', zhuyin: 'ㄕㄨㄟˇ' },
    { char: '糖', zhuyin: 'ㄊㄤˊ' },
    { char: '餅', zhuyin: 'ㄅㄧㄥˇ' },
    { char: '茶', zhuyin: 'ㄔㄚˊ' },
    { char: '米', zhuyin: 'ㄇㄧˇ' },
    { char: '湯', zhuyin: 'ㄊㄤ' },
    // 物品與自然
    { char: '書', zhuyin: 'ㄕㄨ' },
    { char: '筆', zhuyin: 'ㄅㄧˇ' },
    { char: '車', zhuyin: 'ㄔㄜ' },
    { char: '船', zhuyin: 'ㄔㄨㄢˊ' },
    { char: '球', zhuyin: 'ㄑㄧㄡˊ' },
    { char: '花', zhuyin: 'ㄏㄨㄚ' },
    { char: '草', zhuyin: 'ㄘㄠˇ' },
    { char: '樹', zhuyin: 'ㄕㄨˋ' },
    { char: '山', zhuyin: 'ㄕㄢ' },
    { char: '河', zhuyin: 'ㄏㄜˊ' },
    { char: '海', zhuyin: 'ㄏㄞˇ' },
    { char: '雨', zhuyin: 'ㄩˇ' },
    { char: '雪', zhuyin: 'ㄒㄩㄝˇ' },
    { char: '雲', zhuyin: 'ㄩㄣˊ' },
    { char: '星', zhuyin: 'ㄒㄧㄥ' },
    { char: '月', zhuyin: 'ㄩㄝˋ' },
    { char: '太', zhuyin: 'ㄊㄞˋ' },
    { char: '火', zhuyin: 'ㄏㄨㄛˇ' },
    { char: '冰', zhuyin: 'ㄅㄧㄥ' },
    { char: '土', zhuyin: 'ㄊㄨˇ' },
    { char: '橋', zhuyin: 'ㄑㄧㄠˊ' },
    { char: '門', zhuyin: 'ㄇㄣˊ' },
    { char: '窗', zhuyin: 'ㄔㄨㄤ' },
    { char: '床', zhuyin: 'ㄔㄨㄤˊ' },
    { char: '椅', zhuyin: 'ㄧˇ' },
    { char: '桌', zhuyin: 'ㄓㄨㄛ' },
    { char: '燈', zhuyin: 'ㄉㄥ' },
    { char: '鞋', zhuyin: 'ㄒㄧㄝˊ' },
    { char: '帽', zhuyin: 'ㄇㄠˋ' },
    // 顏色
    { char: '紅', zhuyin: 'ㄏㄨㄥˊ' },
    { char: '黃', zhuyin: 'ㄏㄨㄤˊ' },
    { char: '藍', zhuyin: 'ㄌㄢˊ' },
    { char: '綠', zhuyin: 'ㄌㄩˋ' },
    { char: '白', zhuyin: 'ㄅㄞˊ' },
    { char: '黑', zhuyin: 'ㄏㄟ' },
    { char: '紫', zhuyin: 'ㄗˇ' },
    // 數字
    { char: '一', zhuyin: 'ㄧ' },
    { char: '二', zhuyin: 'ㄦˋ' },
    { char: '三', zhuyin: 'ㄙㄢ' },
    { char: '四', zhuyin: 'ㄙˋ' },
    { char: '五', zhuyin: 'ㄨˇ' },
    { char: '六', zhuyin: 'ㄌㄧㄡˋ' },
    { char: '七', zhuyin: 'ㄑㄧ' },
    { char: '八', zhuyin: 'ㄅㄚ' },
    { char: '九', zhuyin: 'ㄐㄧㄡˇ' },
    { char: '十', zhuyin: 'ㄕˊ' },
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
    if (!('speechSynthesis' in window)) {
        alert('您的瀏覽器不支援語音合成功能');
        return;
    }
    window.speechSynthesis.cancel();
    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-TW';
        utterance.rate = 0.3;
        window.speechSynthesis.speak(utterance);
    }, 150);
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
