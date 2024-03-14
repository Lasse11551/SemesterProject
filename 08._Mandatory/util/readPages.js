import { readPage, renderPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html")
export const homepagePage = renderPage(homepage, {
    tabsTitle: "Homepage",
    CSSLinks: '<link rel="stylesheet" href="/pages/homepage/homepage.css">'
})

const introduction = readPage("./public/pages/introduction/introduction.html")
export const introductionPage = renderPage(introduction, {
    tabsTitle:"Introduction",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
})