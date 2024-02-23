document.addEventListener("DOMContentLoaded", () => {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const target = urlParams.get("to");

  const valid = [
    "https://twitch.tv/Imabanana80",
    "https://github.com/Imabanana80",
    "https://youtube.com/@Imabanana80",
    "https://discord.gg/FVvRMAx2Sm",
    "https://modrinth.com/user/wZCAi9ke",
    "https://thegerald.net",
    "https://github.com/Imabanana80/imabanana80.github.io",
  ];

  if (valid.includes(target)) {
    location.replace(target);
  } else {
    setTimeout(() => {
      location.replace("https://imabanana80.com/404");
    }, 1000);
  }
});
