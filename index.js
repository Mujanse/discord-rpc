const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

// Фиксируем время запуска один раз при старте скрипта
const startTime = Date.now();

client.on('ready', async () => {
  console.log(`Запущено от имени ${client.user.tag}!`);

  setInterval(() => {
    client.user.setPresence({
      activities: [{
        name: 'Visual Studio Code',
        type: 'PLAYING',
        application_id: '383226320970055681',
        details: 'Editing server.py',
        state: 'Workspace: CyberSecurityServerDID',
        timestamps: { start: startTime }, // Используем постоянное время запуска
        assets: {
          largeImage: 'vscode',
          largeText: 'Visual Studio Code',
          smallImage: 'python',
          smallText: 'Editing Python file'
        }
      }]
    });
  }, 15000);
});

client.login(process.env.TOKEN);