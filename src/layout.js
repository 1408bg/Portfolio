export const Layout = (root) => {
  const _root = root;
  let _header;
  let _main;
  let _footer;
  const setLayout = (header, main, footer) => {
    if (header){ _header = header }
    if (main){ _main = main }
    if (footer){ _footer = footer }
  }
  const apply = () => {
    _root.innerHTML = "";
    _root.append(
      _header,
      _main,
      _footer
    );
  }
  return { apply, setLayout };
}