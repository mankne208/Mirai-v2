module.exports.config = {
	name: 'count',
	version: '1.0.0',
	hasPermssion: 0,
	credits: 'D-Jukie',
	description: 'Đếm mọi thứ trong server bot',
	commandCategory: 'Nhóm',
	usages: '[alluser/allthread/admin/adminbot/members/mess/mymess/fast/ping/uptime]',
	cooldowns: 5
};
module.exports.languages = {
    "vi": {
        "listAdmin": '⚡️ Danh sách toàn bộ người điều hành bot: \n\n%1'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1'
    }
}

module.exports.run = async ({ api, event, args, Currencies, Threads, Users, getText }) => {
	const { threadID, messageID, senderID} = event;
	if (args[0] == "alluser" || args[0] == "user" || args[0] == "users" || args[0] == "allusers") {

		return api.sendMessage(`⚡️Tổng users: ${global.data.allUserID.length}`, threadID);
	}
	if (args[0] == "allthread" || args[0] == "thread" || args[0] == "threads" || args[0] == "allthreads") {
		return api.sendMessage(`⚡️Tổng Nhóm: ${global.data.allThreadID.length}`, threadID);
	}
	if (args[0] == "admin" || args[0] == "ad" || args[0] == "qtv") {
		const { participantIDs, adminIDs } = (await Threads.getData(event.threadID)).threadInfo;
		let qtv = adminIDs.length;
		return api.sendMessage(`⚡️Số quản trị viên của nhóm: ${qtv}`, threadID);
	}
	if (args[0] == "member" || args[0] == "mem" || args[0] == "membox" || args[0] == "members") {
		const { participantIDs, adminIDs } = (await Threads.getData(event.threadID)).threadInfo;
		let members = (event.participantIDs).length;
		return api.sendMessage(`⚡️Số thành viên của nhóm: ${members}`, threadID);
	}
	if (args[0] == "mess" || args[0] == "inbox" || args[0] == "ib") {
		var threadInfo = await api.getThreadInfo(event.threadID);
		let sl = threadInfo.messageCount;
		return api.sendMessage(`⚡️Số tin nhắn của nhóm: ${sl}`, threadID);
	}
	if (args[0] == "mymess" || args[0] == "myinbox" || args[0] == "myib") {
		const countMess = await Currencies.getData(senderID);
		return api.sendMessage(`⚡️Số tin nhắn của bạn: ${countMess.exp}`, threadID);
	}
	if (args[0] == "fast") {
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const resault = await speedTest.getSpeed();
		return api.sendMessage(`⚡️Fast: ${resault}Mbs`, threadID);
	}
	if (args[0] == "ping") {
		const timeStart = Date.now();
		return api.sendMessage(`⚡️Ping: ${Date.now() - timeStart}ms`, threadID);
	}
	if (args[0] == "uptime" || args[0] == "upt") {
	const time = process.uptime(),
		  hours = Math.floor(time / (60 * 60)),
		  minutes = Math.floor((time % (60 * 60)) / 60),
		  seconds = Math.floor(time % 60);
		  return api.sendMessage(`⚡️Uptime: ${hours}:${minutes}:${seconds}`, threadID)
	}
	if (args[0] == "adminbot" || args[0] == "admbot" || args[0] == "adbot") {
			const { configPath } = global.client;
			const { ADMINBOT } = global.config;
			var config = require(configPath);
		    const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = (await Users.getData(idAdmin)).name 
                    msg.push(` - ${name}\n- Link: https://facebook.com/${idAdmin}`);
                }
            }
            return api.sendMessage(getText("listAdmin", msg.join("\n\n")), threadID, messageID);
	}

	else 
		return api.sendMessage("⚡️Bạn vui lòng nhập các tag alluser/allthread/admin/adminbot/members/mess/mymess/fast/ping/uptime", threadID, messageID)

}