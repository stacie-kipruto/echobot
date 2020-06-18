const Telegraf = require("telegraf");

const bot = new Telegraf("1202096058:AAHFziPPwoPZ_W73xCGuDdV0Q-2vmRmhA-E");

const helpMessage = `This is the bot.
/start - type this to start
/help - type this to get help`;

bot.use((ctx, next) => {
    
  if (ctx.updateSubTypes[0] == "text") {
      bot.telegram.sendMessage(-490584846, ctx.from.username + " said: " + ctx.message.text)
    
  } else {
      bot.telegram.sendMessage(-490584846 ,ctx.from.username + "sent a " + ctx.updateSubTypes[0])
    
  }
  next()
});

bot.start((ctx) => {
  
  ctx.reply("Hey, I am Stacie Kipruto");
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  
  ctx.reply(helpMessage);
});

bot.command("echo", (ctx) => {
 
  let input = ctx.message.text;
  let inputArr = input.split(" ");
  let message = "";

  if (inputArr.length == 1) {
    message = "you said echo";
  } else {
    inputArr.shift();
    message = inputArr.join(" ");
  }
  ctx.reply(message);
});

bot.launch();
