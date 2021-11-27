module.exports.config = {
	name: "uid",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "Mirai Team, Jukie mod",
	description: "Lấy ID người dùng bản vip",
	commandCategory: "Tiện ích",
        usages: "[reply/tag/link]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
    const axios = global.nodemodule['axios']; 
    if(event.type == "message_reply") { 
	uid = event.messageReply.senderID
	return api.sendMessage(`${uid}`, event.threadID, event.messageID) }
    if (!args[0]) {return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);}
    else {
	if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await axios.get(`https://simsimi.info/v1/get_uid_facebook_from_url.php?api_key=leanhtruong&url=${args[0]}`);  
    return api.sendMessage(`${res_ID.data.id}`, event.threadID, event.messageID) }
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
}
}
