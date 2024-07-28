import { Layout } from "/layout.js";
import { Header } from "/component/header.js";
import { NavBar } from "/component/navbar.js";
import { Main } from "/component/main.js";
import { Footer } from "/component/footer.js";

const manifest = await fetch("./manifest.json").then(data=>data.json());
const root = document.getElementById("root");
const layout = Layout(root);
let source;
try { 
  source = await fetch(`https://1408bg.github.io/portfolio/${manifest.year}/${manifest.part}/data.json`).then(data=>data.json());
} catch(err) {
  console.error(err);
  source = null;
  root.innerHTML = "<h1>Offline detected</h1>";
}

const selectLanguage = async (index) => {
  layout.setLayout(
    Header(manifest.year, manifest.part, source, NavBar(manifest.languages, selectLanguage), manifest.languages[index]),
    await Main(manifest.languages[index], source),
    null
  );
  layout.apply();
}

layout.setLayout(
  Header(manifest.year, manifest.part, source, NavBar(manifest.languages, selectLanguage), manifest.languages[0]),
  await Main(manifest.languages[0], source),
  Footer({mail: "b_g@dsm.hs.kr", repository: "https://github.com/1408bg?tab=repositories"})
);

layout.apply();