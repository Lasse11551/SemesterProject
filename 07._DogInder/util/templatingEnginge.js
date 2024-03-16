import fs from "fs";

const footer = fs.readFileSync("./public/components/footer/footer.html").toString();

export function readPage(path){
    return fs.readFileSync(path).toString();
}

//nullish coalesce operator
const value = "";

console.log(value ?? "some other value");
console.log(value || "some other value"); //type coerces... takes falsy values and coercer


export function renderPage(page, config={}) {
    const header = fs.readFileSync("./public/components/header/header.html").toString();
    header.replace("$TAB_TITLE#", config.tabTitle ?? "DogInder")
                .replace("$CSS_LINKS$", config.CSSLinks ?? "")
    return header + page + footer;
}