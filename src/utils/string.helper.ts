
export const removeHtmlTags = (html: string) => {
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || "";
    return text
}