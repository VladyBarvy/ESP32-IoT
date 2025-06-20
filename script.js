// Конфигурация Adafruit IO
const ADAFRUIT_IO_USERNAME = 'YOUR_ADAFRUIT_IO_USERNAME';
const ADAFRUIT_IO_KEY = 'YOUR_ADAFRUIT_IO_KEY';
const FEED_NAME = 'led-control';

// Элементы DOM
const ledOnBtn = document.getElementById('led-on');
const ledOffBtn = document.getElementById('led-off');
const ledStatus = document.getElementById('led-status');
const connectionStatus = document.getElementById('connection-status');

// Инициализация
let isConnected = false;
let currentLedState = null;

// Подключение к Adafruit IO
function connectToAdafruitIO() {
    connectionStatus.textContent = 'подключение...';
    
    // Здесь мы бы использовали WebSocket или MQTT для реального подключения
    // Для демонстрации имитируем подключение
    setTimeout(() => {
        isConnected = true;
        connectionStatus.textContent = 'подключено';
        connectionStatus.classList.add('connected');
        connectionStatus.classList.remove('disconnected');
        
        // Запросить текущее состояние
        fetchCurrentLedState();
    }, 1500);
}

// Получить текущее состояние светодиода
function fetchCurrentLedState() {
    // В реальном приложении здесь был бы запрос к Adafruit IO API
    // Имитируем запрос
    setTimeout(() => {
        // Для демонстрации предположим, что светодиод выключен
        currentLedState = 0;
        updateLedStatusDisplay();
    }, 500);
}

// Обновить отображение состояния
function updateLedStatusDisplay() {
    if (currentLedState === 1) {
        ledStatus.textContent = 'ВКЛЮЧЕН';
        ledStatus.style.color = '#2ecc71';
    } else if (currentLedState === 0) {
        ledStatus.textContent = 'ВЫКЛЮЧЕН';
        ledStatus.style.color = '#e74c3c';
    } else {
        ledStatus.textContent = 'неизвестно';
        ledStatus.style.color = '#7f8c8d';
    }
}

// Отправить команду на включение светодиода
function turnOnLed() {
    if (!isConnected) {
        alert('Не подключено к Adafruit IO');
        return;
    }
    
    // В реальном приложении здесь был бы запрос к Adafruit IO API
    console.log('Sending command to turn LED ON (1) to Adafruit IO');
    
    // Имитация отправки команды
    setTimeout(() => {
        currentLedState = 1;
        updateLedStatusDisplay();
    }, 300);
}

// Отправить команду на выключение светодиода
function turnOffLed() {
    if (!isConnected) {
        alert('Не подключено к Adafruit IO');
        return;
    }
    
    // В реальном приложении здесь был бы запрос к Adafruit IO API
    console.log('Sending command to turn LED OFF (0) to Adafruit IO');
    
    // Имитация отправки команды
    setTimeout(() => {
        currentLedState = 0;
        updateLedStatusDisplay();
    }, 300);
}

// Обработчики событий
ledOnBtn.addEventListener('click', turnOnLed);
ledOffBtn.addEventListener('click', turnOffLed);

// Инициализация приложения
connectToAdafruitIO();
