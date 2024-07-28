import { Card } from "/component/card.js";

export const Main = async (lang, source) => {
  const result = document.createElement("main");
  const cards = [];
  source.repository.forEach(repo => {
    cards.push(Card(repo, lang));
  });
  result.append(...cards);
  return result;
}