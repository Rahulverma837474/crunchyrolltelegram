import { Telegraf } from 'telegraf';
import { TasksService } from './tasks/tasks.service';

const BOT_TOKEN = '6628981381:AAGosTCmeocMVsJXxyGadpe2luFr0pZeCj8'; // Replace with your bot token
const bot = new Telegraf(BOT_TOKEN);
const tasksService = new TasksService();

bot.start((ctx) => ctx.reply('Welcome to Crunchyroll Account Verifier! Send /verify email1 password1 email2 password2 ... to check multiple accounts (up to 5).'));

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