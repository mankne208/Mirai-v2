module.exports.config = {
    name: "tilemayman",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mank & DMH",
    description: "Tỉ lệ % may mắn của bạn?",
    commandCategory: "Game",
    cooldowns: 5
};

module.exports.run = function ({ api, event }) {
const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var tile = Math.floor(Math.random() * 101); 
    var link = ["https://i.imgur.com/gWACvcO.jpg",
    "https://i.imgur.com/mpHit7i.jpg",
    "https://i.imgur.com/glHFetf.jpg",
    "https://i.imgur.com/CxwzNMv.png",
    "https://i.imgur.com/RVerKnc.jpg"
    ];
var callback = () => api.sendMessage({body:`⚜Tỉ lệ may mắn của bạn là ${tile}% ⚜`, attachment: fs.createReadStream(__dirname + "/cache/tile.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tile.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tile.jpg")).on("close",() => callback());
 }

