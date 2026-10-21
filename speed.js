module.exports = {
    name: "speed",
    description: "Check bot response speed",

    async execute(sock, msg) {
        const start = Date.now();

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                text: "⚡ Testing MUSTY TECH speed..."
            },
            { quoted: msg }
        );

        const speed = Date.now() - start;

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                text: `╭━━━〔 ⚡ MUSTY TECH 〕━━━╮
┃
┃ 🚀 Status: ONLINE
┃ ⚡ Speed: ${speed} ms
┃ 🤖 System: WhatsApp Bot
┃
╰━━━━━━━━━━━━━━━━━━╯`
            },
            { quoted: msg }
        );
    }
};