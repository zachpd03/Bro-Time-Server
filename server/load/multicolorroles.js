module.exports = {
	exec: (client) => {
		client.on("ready", async () => {
			var loopNumber = 0;
			var colors = ["Red", "Blue", "Orange", "Green", "Black", "Purple", "Pink", "Yellow",
				"HotPink", "Indigo", "Bronze", "Cyan", "LightGreen", "Silver", "BrightRed", "HotBrown",
				"DarkViolet", "Gold"
			];
			var guild = client.guilds.get("330913265573953536");
			var multiColorRole = guild.roles.find("name", "Multicolored");
			setInterval(() => {
				loopNumber = loopNumber + 1;
				if(loopNumber !== colors.length) {
					loopNumber + 1;
				} else {
					loopNumber = 0;
				}
				multiColorRole.setColor(guild.roles.find("name", colors[loopNumber]).hexColor);
			}, 500);
		});
	}
};