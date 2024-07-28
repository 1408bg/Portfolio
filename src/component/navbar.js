const LangDropdownNode = (index, lang, onChange) => {
  const result = document.createElement("li");
  result.innerText = lang;
  result.addEventListener("click", () => {
    onChange(index);
  });
  return result;
}

const LangDropdown = (languages, onChange) => {
  const result = document.createElement("ul");
  const children = [];
  for (var i = 0; i < languages.length; i++){
    children.push(LangDropdownNode(i, languages[i].toUpperCase(), onChange));
  }
  result.append(...children);
  return result;
}

export const NavBar = (languages, onChange) => {
  const result = document.createElement("nav");
  const child = document.createElement("div");
  child.classList.add("navbar");
  const children = [LangDropdown(languages, onChange)];
  child.append(...children);
  result.appendChild(child);
  return result;
}