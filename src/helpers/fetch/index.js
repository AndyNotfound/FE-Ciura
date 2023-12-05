export default function fetchData({ url, method = "GET", body }) {
  return fetch(`${import.meta.env.VITE_URI}${url}`, {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
    .then((response) => JSON.parse(response.json()))
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
