// TODO importしてください。
import { settings, toggleLanguage } from "./settings.js";

document.addEventListener('DOMContentLoaded', () => {
    const currentLanguageSpan = document.getElementById('currentLanguage');
    const changeLanguageButton = document.getElementById('changeLanguageButton');

    // TODO 切り替え処理を書いてください。
    if(settings === "ja") {
        currentLanguageSpan.innerText = "日本語";
    }

    changeLanguageButton.addEventListener("click", () => {
        toggleLanguage(currentLanguageSpan);
    })
});
