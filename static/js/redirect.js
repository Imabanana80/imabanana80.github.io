document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const target = urlParams.get("to");

    const links = new Map();

    links.set("twitch", "https://twitch.tv/Imabanana80");
    links.set("github", "https://github.com/Imabanana80");
    links.set("youtube", "https://youtube.com/@Imabanana80");
    links.set("discord", "https://discord.gg/FVvRMAx2Sm");
    links.set("modrinth", "https://modrinth.com/user/Imabanana80");
    links.set("patreon", "https://www.patreon.com/Imabanana80");
    links.set("gerald", "https://thegerald.net/");
    links.set("source", "https://github.com/Imabanana80/imabanana80.github.io");

    if (links.has(target)) {
        console.log(target);
        console.log(links.get(target));
        location.replace(links.get(target));
    } else {
        setTimeout(() => {
            location.replace("https://imabanana80.com/404");
        }, 1000);
    }
});
