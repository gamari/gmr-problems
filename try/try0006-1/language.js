document.addEventListener('DOMContentLoaded', function() {
    const currentLanguageElement = document.getElementById("currentLanguage");

    // TODO ここに処理を書く

    // ボタン //
    const changeLanguageButton = document.getElementById("changeLanguageButton");
    
    // 最初に『English』表示 //
    GlobalSettings.setLanguage(currentLanguageElement, GlobalSettings.default);

    changeLanguageButton.addEventListener("click", () => {
        // 新しい言語を表示に反映 //
        GlobalSettings.setLanguage(currentLanguageElement, GlobalSettings.getLanguage(currentLanguageElement));
    })
});