const TelegramBot = require('node-telegram-bot-api');

const token = '7003497654:AAEON1feRqWr4IRXt1sELLAJkhf4vLBxWDo';

const bot = new TelegramBot(token, { polling: true });

// Обработчик события при добавлении нового участника
bot.on('new_chat_members', (msg) => {
  const chatId = msg.chat.id;

  msg.new_chat_members.forEach((member) => {
    const username = member.username ? `@${member.username}` : member.first_name;
    bot.sendMessage(chatId, `Добро пожаловать , ${username}  в чат любителей настольных игр "Пилигримы"! Мы рады тебя видеть! Расскажи нам о себе немного! Какие настольные игры  нравятся?`);
  });
});
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Бот успешно запущен и работает!');
  });
  
console.log('Бот запущен и ожидает новых участников...');
