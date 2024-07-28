export const Header = (year, part, data, nav, lang) => {
  const result = document.createElement("header");
  result.innerHTML =
  `
    [<span class="concept">${data.concept[lang]}</span>]
    <span class="range">${year}. ${part}
      <span>${data.range.start} ~ ${data.range.end}</span>
    </span>
  `;
  //result.innerHTML += (data.count == data.repository.length) ? "" : "<span>remain : " + (data.count - data.repository.length) + "</span>";
  result.appendChild(nav);
  return result;
}