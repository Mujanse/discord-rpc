const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`Запущено от имени ${client.user.tag}!`);

  setInterval(() => {
    client.user.setPresence({
      activities: [{
        name: 'Visual Studio Code',
        type: 'PLAYING',
        application_id: '383226320970055681', // ID зарегистрированного приложения VS Code
        details: 'Editing server.py',
        state: 'Workspace: CyberSecurityServerDID',
        timestamps: { start: Date.now() },
        assets: {
          largeImage: 'vscode', // Иконка VS Code
          largeText: 'Visual Studio Code',
          smallImage: 'python', // Иконка Python
          smallText: 'Editing Python file'
        }
      }]
    });
  }, 15000);
});

client.login(process.env.TOKEN);