'use strict';

var web = require('solid-js/web');
var solidJs = require('solid-js');

const _tmpl$$7 = ["<div", " class=\"Front-container\"><h1 class=\"Front-title\">Making the future accessible</h1><p class=\"Front-text\">Wij hebben gevarieerde expertise en een toewijding aan inclusie. Bij Studio Prime zijn we vastbesloten om een inclusieve en toegangkelijke wereld te bouwen, waar iedereen gelijke kansen heeft.</p><img src=\"/images/crown.svg\" class=\"Front-crown\" alt=\"crown\"></div>"];
function Front() {
  return web.ssr(_tmpl$$7, web.ssrHydrationKey());
}

const _tmpl$$6 = ["<div", " class=\"Footer-container\"><img src=\"/images/logo-white.svg\" class=\"Footer-logo\" alt=\"logo\"><div class=\"Footer-text-container\"><div class=\"Footer-copyright\">\xA9 2023 Studio Prime (Minor IUXD 23/24)</div><a class=\"Footer-bronnenlijst\">Bronnenlijst</a></div></div>"];
function Footer() {
  return web.ssr(_tmpl$$6, web.ssrHydrationKey());
}

const _tmpl$$5 = ["<div", " class=\"ImageWithText-container\"><img src=\"/images/Image1.png\" class=\"ImageWithText-image\" alt=\"foto\"><div class=\"ImageWithText-text-container\"><h2 class=\"ImageWithText-title\">About us</h2><p class=\"ImageWithText-text\">Eerst waren we Team 13, een priemgetal, en noemden onszelf Team Prime. Toen werden we Team 12, maar besefte dat we nog steeds in onze prime waren. Gedreven door onze passie voor toegankelijkheid, met leden uit verschillende achtergronden (CMD en CMGT) die samenwerken voor innovatie zonder een verleden, en een sterke focus op de toekomst. Onze missie is duidelijk: bevorder inclusie. Onze waarden zijn diversiteit en openheid, en onze Unique Selling Points zijn expertise en toewijding aan inclusie. Bij Studio Prime streven we vastberaden naar een inclusieve wereld met gelijke kansen en toegankelijkheid voor iedereen.</p></div></div>"];
function ImageWithText() {
  return web.ssr(_tmpl$$5, web.ssrHydrationKey());
}

const _tmpl$$4 = ["<div", " class=\"TeamMember-container\"><div class=\"TeamMember-content\"><h3 class=\"TeamMember-name\">", "</h3><p class=\"TeamMember-study\">CMD</p><img class=\"TeamMember-image\" src=\"", "\" alt=\"Team member\"></div></div>"];
function TeamMember(props) {
  return web.ssr(_tmpl$$4, web.ssrHydrationKey(), web.escape(props.name), "/images/" + web.escape(props.name, true) + ".png");
}

const _tmpl$$3 = ["<h2", " class=\"TeamSection-title\">Meet the Team</h2>"],
  _tmpl$2$1 = ["<div", " class=\"TeamSection-container\"><div class=\"TeamSection-grid\"><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div></div>"];
function TeamSection() {
  return [web.ssr(_tmpl$$3, web.ssrHydrationKey()), web.ssr(_tmpl$2$1, web.ssrHydrationKey(), web.escape(web.createComponent(TeamMember, {
    name: "Jorick"
  })), web.escape(web.createComponent(TeamMember, {
    name: "Roy"
  })), web.escape(web.createComponent(TeamMember, {
    name: "Danny"
  })), web.escape(web.createComponent(TeamMember, {
    name: "Koen"
  })))];
}

const _tmpl$$2 = ["<div", " class=\"Modal-container\" style=\"", "\"><div class=\"Modal-content\"><img src=\"/images/styleguide-doc.png\" alt=\"styleguide\" class=\"Modal-image\"><a class=\"Modal-close-button\">X</a></div></div>"];
function Modal({
  isOpen,
  close
}) {
  return web.ssr(_tmpl$$2, web.ssrHydrationKey(), "display:" + (isOpen() ? "flex" : "none"));
}

const _tmpl$$1 = ["<h2", " class=\"Deliverables-title\">Deliverables</h2>"],
  _tmpl$2 = ["<div", " class=\"Deliverables-container\"><div class=\"Deliverables-subcontainer\"><a class=\"Deliverables-item Deliverables-styleguide-button\"><img src=\"/images/styleguide.svg\" class=\"Deliverables-styleguide-image\" alt=\"Styleguide image\"></a><div class=\"Deliverables-item\"></div></div><div class=\"Deliverables-subcontainer\"><div class=\"Deliverables-item\"></div><div class=\"Deliverables-item\"></div></div></div>"];
function Deliverables() {
  const [isModalOpen, setIsModalOpen] = solidJs.createSignal(false);
  return [web.createComponent(Modal, {
    isOpen: isModalOpen,
    close: () => setIsModalOpen(false)
  }), web.ssr(_tmpl$$1, web.ssrHydrationKey()), web.ssr(_tmpl$2, web.ssrHydrationKey())];
}

const _tmpl$ = ["<div", " class=\"App\"><link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Bungee&amp;display=swap\"><header class=\"App-header\"><img src=\"/images/logo.svg\" class=\"App-logo\" alt=\"logo\"></header><!--#-->", "<!--/--><div class=\"content\"><!--#-->", "<!--/--><!--#-->", "<!--/--><!--#-->", "<!--/--></div><!--#-->", "<!--/--></div>"];
function App() {
  return web.ssr(_tmpl$, web.ssrHydrationKey(), web.escape(web.createComponent(Front, {})), web.escape(web.createComponent(ImageWithText, {})), web.escape(web.createComponent(TeamSection, {})), web.escape(web.createComponent(Deliverables, {})), web.escape(web.createComponent(Footer, {})));
}

const root = document.getElementById('root');
if (undefined.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?');
}
web.render(() => web.createComponent(App, {}), root);
