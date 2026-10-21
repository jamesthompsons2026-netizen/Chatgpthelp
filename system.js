module.exports = {
    name: "system",
    description: "Display system information",

    async execute(sock, msg) {
        const memory = process.memoryUsage();
        const usedMemory = (memory.rss / 1024 / 1024).toFixed(2);

        const text = `╭━━━〔 🖥️ MUSTY TECH 〕━━━╮
┃
┃ 🤖 Bot: Online
┃ 🟢 Node.js: ${process.version}
┃ 💻 Platform: ${process.platform}
┃ 🧠 Memory: ${usedMemory} MB
┃ ⏱️ Uptime: ${Math.floor(process.uptime())} seconds
┃
╰━━━━━━━━━━━━━━━━━━╯`;

        await sock.sendMessage(
            msg.key.remoteJid,
            { text },
            { quoted: msg }
        );
    }
};