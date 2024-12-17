// 背景色変更のカラーピッカー
document.getElementById("bg-color").addEventListener("input", function (e) {
    document.body.style.backgroundColor = e.target.value; // 背景色を変更
});

// 文字色変更のカラーピッカー
document.getElementById("text-color").addEventListener("input", function (e) {
    document.body.style.color = e.target.value; // 文字色を変更
});
