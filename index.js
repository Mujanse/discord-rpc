const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const startTime = Date.now();

client.on('ready', async () => {
  console.log(`Запущено от имени ${client.user.tag}!`);

  setInterval(() => {
    client.user.setPresence({
      activities: [{
        name: 'Visual Studio Code',
        type: 'PLAYING',
        application_id: '1558650297377890314', // Вставьте сюда ваш ID
        details: 'Editing mainSERVER.py',
        state: 'Workspace: CyberSecurityServerDID',
        timestamps: { start: startTime },
        assets: {
          largeImage: 'vscode', // Название загруженной большой картинки
          largeText: 'Visual Studio Code',
          smallImage: 'python', // Название загруженной маленькой картинки
          smallText: 'Editing Python file'
        }
      }]
    });
  }, 15000);
});

client.login(process.env.TOKEN);