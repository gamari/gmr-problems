// TODO settingsという変数をexportしてください。
export {settings};

// TODO toggleLanguageという関数をexportしてください。
export {toggleLanguage};

let settings = "ja"

function toggleLanguage(el) {
    let rtnTxt;
    if(el.innerText === "English") {
        rtnTxt = "日本語"
    } else if(el.innerText === "日本語") {
        rtnTxt = "English"
    }

    el.innerText = rtnTxt;
}