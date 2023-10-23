import { Telegraf } from 'telegraf';
import { TasksService } from './tasks/tasks.service';

const BOT_TOKEN = '6798601503:AAG2g_6rUaMz_a3xN8vwhPktK2QGtvi3Yb8'; // Replace with your bot token
const bot = new Telegraf(BOT_TOKEN);
const tasksService = new TasksService();

bot.start((ctx) => ctx.reply('Welcome to Crunchyroll Account Verifier! Send /verify email1 password1 email2 password2 ... to check multiple accounts (up to 5).'));

bot.onText(/\/premium (.+)/, (msg, match) => {
  const userId = match[1];

  // If user is already premium
  let user = users.users.find((user) => user.id === userId);
  if (user && user.member_type === 'premium') {
    bot.sendMessage(msg.chat.id, 'User is already a premium member.');
    return;
  }

  users.users.push({ id: userId, member_type: 'premium' });
  fs.writeFile('users.json', JSON.stringify(users), (err) => {
    if (err) throw err;
    bot.sendMessage(msg.chat.id, 'User has been given premium status.');
  });
});

bot.onText(/\/removepremium (.+)/, (msg, match) => {
  const userId = match[1];

  users.users = users.users.filter((user) => user.id !== userId || user.member_type !== 'premium');
  fs.writeFile('users.json', JSON.stringify(users), (err) => {
    if (err) throw err;
    bot.sendMessage(msg.chat.id, 'User has been removed from premium status.');
  });
});

bot.command('verify', async (ctx) => {
    const input = ctx.message.text.split(' ').slice(1);  // Exclude the command itself
    if (input.length < 2 || input.length % 2 !== 0 || input.length > 10) {
        ctx.reply('Please use the format: /verify email1 password1 email2 password2 ... (up to 5 accounts)');
        return;
    }
    ctx.reply('Please Wait...');

    for (let i = 0; i < input.length; i += 2) {
        const email = input[i];
        const password = input[i + 1];
        const output = await tasksService.verifyCrunchyrollCredentials(email, password);
        ctx.reply(`Working on ${input[i]}`);

        if (output && Object.keys(output).length > 0) {
            const formattedOutput = `${email}:\n` + Object.entries(output)
                .map(([key]) => `${key.split("_").shift().replace("#", "")}`)
                .join('\n');
                ctx.reply(formattedOutput);
        } else {
            ctx.reply(`${email}: An error occurred.`);
        }
    }

});

bot.launch();
