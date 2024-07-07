document.addEventListener("DOMContentLoaded", () => {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);

    const target = urlParams.get("to");

    const links = new Map();

    links.set("twitch", "https://twitch.tv/Imabanana80");
    links.set("github", "https://twitch.tv/Imabanana80");
    links.set("youtube", "https://twitch.tv/Imabanana80");
    links.set("discord", "https://twitch.tv/Imabanana80");
    links.set("modrinth", "https://twitch.tv/Imabanana80");
    links.set("patreon", "https://twitch.tv/Imabanana80");
    links.set("gerald", "https://twitch.tv/Imabanana80");
    links.set("source", "https://twitch.tv/Imabanana80");

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
