const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '+wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**ئەگەر بەخۆت نێیە ڤۆیس ئەمنیش نایێم😂**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/2JMR9tyw9g`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("904790332787535912").send(
`> <:ARBELE_UPUP:791411050238836766> By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ڕیکلامەکە بنێرە بۆمن دایدەنێم☑️`) 
});




client.login("ODg4MTA4MTIzMjAwNTUyOTgx.YUN5JA.O9t6daVLrnthakNPMBL_r_zxRfw");//تۆکین لێرە دانێ
