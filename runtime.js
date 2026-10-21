module.exports = {
    name: "runtime",
    description: "Check bot uptime",

    async execute(sock, msg) {
        const seconds = Math.floor(process.uptime());

        const days = Math.floor(seconds / 86400);
        const hours = Math.floor((seconds % 86400) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const uptime = `${days}d ${hours}h ${minutes}m ${secs}s`;

        await sock.sendMessage(
            msg.key.remoteJid,
            {
                text: `╭━━━〔 ⏳ MUSTY TECH 〕━━━╮
┃
┃ 🤖 Status: ONLINE
┃ ⏱️ Runtime: ${uptime}
┃
╰━━━━━━━━━━━━━━━━━━╯`
            },
            { quoted: msg }
        );
    }
};