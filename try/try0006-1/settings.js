// TODO windowを使って、GlobalSettingsにgetLanguage, setLanguageを追加してください。
window.GlobalSettings = {
    default: "English",
    getLanguage: (chkLangEl) => {
        let rtnTxt;
        if(chkLangEl.innerText === "English") {
            rtnTxt = "日本語"
        } else if(chkLangEl.innerText === "日本語") {
            rtnTxt = "English"
        }
        return rtnTxt;
    },

    setLanguage: (el,lang) => {
        el.innerText = lang;
    }
}