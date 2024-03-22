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

const firstServer = readPage("./public/pages/firstServer/firstServer.html")
export const firstServerPage = renderPage(firstServer, {
    tabsTitle:"First Server",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
})

const servingHtmlFiles = readPage("./public/pages/servinghtmlfiles/servinghtmlfiles.html")
export const servingHtmlFilesPage = renderPage(servingHtmlFiles, {
    tabsTitle:"Serving Html files",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
})

const time = readPage("./public/pages/time/time.html")
export const timePage = renderPage(time, {
    tabsTitle:"Time",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
})

const exportimport = readPage("./public/pages/exportImport/exportImport.html")
export const exportimportPage = renderPage(exportimport, {
    tabsTitle: "Export and Import",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
})

const ssr = readPage("./public/pages/ssr/ssr.html")
export const ssrPage = renderPage(ssr, {
    tabsTitle: "SSR",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
})

const asyncrousCode = readPage("./public/pages/async/async.html")
export const asyncPage = renderPage(asyncrousCode, {
    tabsTitle: "Asynchronous Code / Routers",
    CSSLinks: '<link rel="stylesheet" href="/assets/css/main.css">'
})

