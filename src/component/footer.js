export const Footer = (data) => {
  const result = document.createElement("footer");
  result.innerHTML =
  `
  <address>
    Email : ${data.mail}<br>
    <a href="${data.repository}">Repository</a>
    </address>
  `
  return result;
}