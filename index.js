const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`Запущено от имени ${client.user.tag}!`);
  
  setInterval(() => {
    client.user.setPresence({
      activities: [{
        name: 'Visual Studio Code',
        type: 'PLAYING',
        details: 'Editing server.py',
        state: 'Workspace: CyberSecurityServerDID',
        timestamps: { start: Date.now() },
        assets: {
          largeImage: 'python'
        }
      }]
    });
  }, 15000);
});

client.login(process.env.TOKEN);