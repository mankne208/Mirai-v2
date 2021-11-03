module. exports. config = {
    name: "info",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Xem thông tin của người dùng facebook",
    commandCategory: "Nhóm",
    usages: "[reply/tag/id]",
    cooldowns: 3
    
};
module. exports. run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];  

    if(!args[0]){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await axios.get(`https://simsimi.info/v2/info_user_facebook.php?api_key=leanhtruong&id=${uid}`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "Không công khai";
    var love = res.data.user_love ? `${res.data.user_love}` : "Chưa kết hôn"
    var location = res.data.location ? `${res.data.location}` : "Không công khai"
    var callback = () => api.sendMessage({body:`🌻Tên: ${res.data.fullname}\n🌻UID: ${uid}\n🌻Follow: ${res.data.follow_user}\n🌻Giới tính: ${gender}\n🌻Birthday: ${birthday}\n🌻Kết hôn: ${love}\n🌻Location: ${location}\n🌻Profile: ${res.data.url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
   } 
    else {
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    const res = await axios.get(`https://simsimi.info/v2/info_user_facebook.php?api_key=leanhtruong&id=${mentions}`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "Không công khai";
    var love = res.data.user_love ? `${res.data.user_love}` : "Chưa kết hôn"
    var location = res.data.location ? `${res.data.location}` : "Không công khai"
    var callback = () => api.sendMessage({body:`🌻Tên: ${res.data.fullname}\n🌻UID: ${uid}\n🌻Follow: ${res.data.follow_user}\n🌻Giới tính: ${gender}\n🌻Birthday: ${birthday}\n🌻Kết hôn: ${love}\n🌻Location: ${location}\n🌻Profile: ${res.data.url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=1500&width=1500&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
    else { if (args[0].indexOf(".com/")!==-1) {
    const res_ID = await axios.get(`https://simsimi.info/v2/get_uid_facebook_from_url.php?api_key=leanhtruong&url=${args[0]}`);  
    const res = await axios.get(`https://simsimi.info/v1/info_user_facebook.php?api_key=leanhtruong&id=${res_ID.data.id}`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "Không công khai";
    var love = res.data.user_love ? `${res.data.user_love}` : "Chưa kết hôn"
    var location = res.data.location ? `${res.data.location}` : "Không công khai"
     var callback = () => api.sendMessage({body:`🌻Tên: ${res.data.fullname}\n🌻UID: ${res_ID.data.id}\n🌻Follow: ${res.data.follow_user}\n🌻Giới tính: ${gender}\n🌻Birthday: ${birthday}\n🌻Kết hôn: ${love}\n🌻Location: ${location}\n🌻Profile: ${res.data.url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${res_ID.data.id}/picture?height=1500&width=1500&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
    else {
    if (!parseInt(args[0])) {return api.sendMessage(`Vui lòng chỉ nhập 1 ID tài khoản Facebook`, event.threadID, event.messageID) }
    const res = await axios.get(`https://simsimi.info/v2/info_user_facebook.php?api_key=leanhtruong&id=${args[0]}`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "Không công khai";
    var love = res.data.user_love ? `${res.data.user_love}` : "Chưa kết hôn"
    var location = res.data.location ? `${res.data.location}` : "Không công khai"
     var callback = () => api.sendMessage({body:`🌻Tên: ${res.data.fullname}\n🌻UID: ${uid}\n🌻Follow: ${res.data.follow_user}\n🌻Giới tính: ${gender}\n🌻Birthday: ${birthday}\n🌻Kết hôn: ${love}\n🌻Location: ${location}\n🌻Profile: ${res.data.url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${args[0]}/picture?height=1500&width=1500&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
  }
}
}