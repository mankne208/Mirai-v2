module.exports.config = {
    name: "totinh",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "totinh @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn tỏ tình", event.threadID);
let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu tỏ tình !");
setTimeout(() => {a({body: "Có một câu chuyện" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Người yêu nhau sẽ tìm thấy nhau" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Người muốn sẽ tìm cách" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Người ko muốn sẽ tìm lí do" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Người thích em sẽ nói thích e" + " " + name, mentions: arraytag})}, 11000);
setTimeout(() => {a({body: "Người ghét e sẽ xa lánh e" + " " + name, mentions: arraytag})}, 13000);
setTimeout(() => {a({body: "Người thương e sẽ quan tâm e" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Người yêu em sẽ hy sinh vì e" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Người thân em sẽ trân trọng e" + " " + name, mentions: arraytag})}, 19000);
setTimeout(() => {a({body: "Người có tình sẽ tìm thấy nhau" + " " + name, mentions: arraytag})}, 21000);
setTimeout(() => {a({body: "Người hạnh phúc sẽ ở bên nhau" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Người đau khổ sẽ xa lìa nhau" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Người vui vẻ sẽ vun đắp tình yêu" + " " + name, mentions: arraytag})}, 27000);
setTimeout(() => {a({body: "Người giàu có sẽ nâng niu em" + " " + name, mentions: arraytag})}, 29000);
setTimeout(() => {a({body: "Người nghèo khổ sẽ ko để e chịu khổ" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Người lạnh lùng sẽ yêu theo cách lạnh lùng" + " " + name, mentions: arraytag})}, 33000);
setTimeout(() => {a({body: "Người ấm áp sẽ yêu theo cách ấm áp" + " " + name, mentions: arraytag})}, 35000);
setTimeout(() => {a({body: "Người bỏ e sẽ đau buồn hay vui vẻ" + " " + name, mentions: arraytag})}, 37000);
setTimeout(() => {a({body: "Người e bỏ sẽ vui vẻ hay đau buồn" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Người đó sẽ là ai?" + " " + name, mentions: arraytag})}, 41000);
setTimeout(() => {a("Có phải anh ko?")} , 43000);
setTimeout(() => {a({body: "Mong đó là anh..." + " " + name, mentions: arraytag})}, 45000);
setTimeout(() => {a({body: "Vì e yêu a" + " " + name, mentions: arraytag})}, 47000);
setTimeout(() => {a({body: "Và mong cta là 1 phần cuộc sống của nhau" + " " + name, mentions: arraytag})}, 49000);
setTimeout(() => {a("Thương em 😘🥺")} , 51000);
setTimeout(() => {a("Cảm ơn em đã lắng nghe anh ns ")} , 53000);
setTimeout(() => {a("Và những lời anh ns nãy giờ là thật lòng thốt ra từ trong tim anh ")} , 55000);
setTimeout(() => {a("Và anh hy vọng là sẽ được em đón nhận lấy nó và trân trong nó :( ")} , 57000);


  
  }