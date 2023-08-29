document.addEventListener("DOMContentLoaded", () => {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const target = urlParams.get("to");

  const valid = [
    "https://twitch.tv/Imabanana80",
    "https://github.com/Imabanana80",
    "https://youtube.com/@Imabanana80",
    "https://discord.gg/Hz5TwPs8Rv",
    "https://modrinth.com/user/wZCAi9ke",
    "https://thegerald.net",
  ];

  if (valid.includes(target)) {
    location.replace(target);
  } else {
    location.replace("https://imabanana80.com/404");
  }
});
