import fs from "fs";

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function readPage(path){
    return fs.readFileSync(path).toString();
}

export function renderPage(page, config={}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    header.replace("$TAB_TITLE#", config.tabTitle || "DogInder")
                .replace("$CSS_LINKS$", config.CSSLinks || "")
    return header + page + footer;
}