export default function fetchData({ url, method = "GET", body }) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return fetch(`${import.meta.env.VITE_URI}${url}`, {
    method,
    mode: "cors",
    headers: myHeaders,
    body,
  })
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}
