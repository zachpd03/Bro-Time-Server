const Discord = require("discord.js");

module.exports = {
	id: "addpartner",
	load: () => {},
	execute: (call) => {
		let PartnersChannel = call.message.guild.channels.find("id", "409156491640045571");
		if(call.message.member.roles.has("409153912558583818")) {
			var Title = call.params.readRaw().split(" |")[0];
			var Description = call.params.readRaw().split(" |")[1].slice(1);
			var Thumbnail = call.message.content.slice(18+Title.length+Description.length);
			const PartnerEmbed = new Discord.RichEmbed()
				.setTitle(Title)
				.setColor("#FFA500")
				.setDescription(Description)
				.setThumbnail(Thumbnail);
			PartnersChannel.send(PartnerEmbed).then(() => {
				call.message.reply("Successfully send message!");
			}).catch((e) => {
				call.message.reply(`Couldn't send the partner message in the partners channel!\n\`${e}\``);
			});
		} else {
			call.message.reply("You do not have permission to use this command!");
		}
	}
};
