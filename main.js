
const client = require('discord-rich-presence')('693462700998656070');
const chalk = require('chalk');
const config = require('./config.json');
// =============== VARIABLES START ===================

let len_missions = config.missions.length;
let len_chars = config.chars.length;

// =============== VARIABLES END ===================


// =============== FUNCTIONS START ===================
function transferSeconds(duration) {
  ms = duration * 1000; // перевод в миллисекунды
  return ms; // показ ответа
};

function random(min, max) {
  // случайное число от min до max
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}

function runGame() {
config.level++; // + "Уровень" в мини-аватарке Rich Presence

 client.updatePresence({
  state: `Миссия: ${config.missions[random(0, len_missions)]}`,
  details: `Играет за ${config.chars[random(0, len_chars)]}`,
  startTimestamp: Date.now(),
  largeImageKey: 'cyb',
  largeImageText: "Cyberpunk 2077",
  smallImageKey: 'mini',
  smallImageText: `Уровень ${config.level}`,
    partyId: 'qwerty1',
    partySize: random(1, 5),
    partyMax: 5,
    joinSecret: 'qwerty2',
    spectateSecret: 'qwerty3',
    instance: false,
  });
   console.log(`[${chalk.yellow('CHANGE')}] Миссия/персонаж была успешно установлена/обновлена!`);
};
// =============== FUNCTIONS END ===================




// =============== BANNER START ===================
var banner = 
` ▄████▄▓██   ██▓ ▄▄▄▄   ▓█████  ██▀███   ██▓███   ██▀███   ▄▄▄       ███▄    █  ██ ▄█▀
▒██▀ ▀█ ▒██  ██▒▓█████▄ ▓█   ▀ ▓██ ▒ ██▒▓██░  ██▒▓██ ▒ ██▒▒████▄     ██ ▀█   █  ██▄█▒ 
▒▓█    ▄ ▒██ ██░▒██▒ ▄██▒███   ▓██ ░▄█ ▒▓██░ ██▓▒▓██ ░▄█ ▒▒██  ▀█▄  ▓██  ▀█ ██▒▓███▄░ 
▒▓▓▄ ▄██▒░ ▐██▓░▒██░█▀  ▒▓█  ▄ ▒██▀▀█▄  ▒██▄█▓▒ ▒▒██▀▀█▄  ░██▄▄▄▄██ ▓██▒  ▐▌██▒▓██ █▄ 
▒ ▓███▀ ░░ ██▒▓░░▓█  ▀█▓░▒████▒░██▓ ▒██▒▒██▒ ░  ░░██▓ ▒██▒ ▓█   ▓██▒▒██░   ▓██░▒██▒ █▄
░ ░▒ ▒  ░ ██▒▒▒ ░▒▓███▀▒░░ ▒░ ░░ ▒▓ ░▒▓░▒▓▒░ ░  ░░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░ ▒░   ▒ ▒ ▒ ▒▒ ▓▒
  ░  ▒  ▓██ ░▒░ ▒░▒   ░  ░ ░  ░  ░▒ ░ ▒░░▒ ░       ░▒ ░ ▒░  ▒   ▒▒ ░░ ░░   ░ ▒░░ ░▒ ▒░
░       ▒ ▒ ░░   ░    ░    ░     ░░   ░ ░░         ░░   ░   ░   ▒      ░   ░ ░ ░ ░░ ░ 
░ ░     ░ ░      ░         ░  ░   ░                 ░           ░  ░         ░ ░  ░   
░       ░ ░           ░                                                               
                              === codered by si4man ===                               
`;

// =============== BANNER END ===================



// =============== GLOBAL SCRIPT START ===================

console.log(chalk.yellow(banner));

// =============== GLOBAL SCRIPT END ===================



// =============== DISCORD CONNECTION START ===================
client.on('connected', () => {
  	console.log(`[${chalk.yellow('START')}] Rich Presence был успешно установлен`);
    console.log(`[${chalk.yellow('CONFIG')}] Настройки будут меняться каждые ${config.time} секунд`);


runGame(); // Запуск игры


setInterval(runGame, transferSeconds(config.time)); // Смена значений из массива каждые config.time

});
// =============== DISCORD CONNECTION END ===================


process.on('unhandledRejection', console.error); // показ ошибок, в случае проблем