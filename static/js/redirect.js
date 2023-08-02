const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const target = urlParams.get("to");
location.replace(target);
