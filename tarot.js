var rnd = Math.floor( Math.random() * 22 );

//結果を表示
document.getElementById('tarot_btn').onclick = function () {
    var result;
    if (rnd === 0) tarot = "愚者"
    if (rnd === 1) tarot = "魔術師"
    if (rnd === 2) tarot = "女教皇"
    if (rnd === 3) tarot = "女帝"
    if (rnd === 4) tarot = "皇帝"
    if (rnd === 5) tarot = "教皇"
    if (rnd === 6) tarot = "恋人"
    if (rnd === 7) tarot = "戦車"
    if (rnd === 8) tarot = "力"
    if (rnd === 9) tarot = "隠者"
    if (rnd === 10) tarot = "運命の輪"
    if (rnd === 11) tarot = "正義"
    if (rnd === 12) tarot = "吊るされた男"
    if (rnd === 13) tarot = "死神"
    if (rnd === 14) tarot = "節制"
    if (rnd === 15) tarot = "悪魔"
    if (rnd === 16) tarot = "塔"
    if (rnd === 17) tarot = "星"
    if (rnd === 18) tarot = "月"
    if (rnd === 19) tarot = "太陽"
    if (rnd === 20) tarot = "審判"
    if (rnd === 21) tarot = "世界"

    document.getElementById('result').textContent = tarot;　//webに表示
}