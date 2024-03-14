import fs from "fs";

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function readPage(path){
    return fs.readFileSync(path).toString();
}

export function renderPage(page, config={}) {
    let header = fs.readFileSync("./public/components/header/header.html").toString();
    header = header.replace("$TAB_TITLE$", config.tabTitle || "Lysskov")
                .replace("$CSS_LINKS$", config.CSSLinks || "")
    return header + page + footer;
}