var OriginTitile = document.title, st;
document.addEventListener("visibilitychange", function () {
    document.hidden ? (document.title = "看不见我🙈~看不见我🙈~", clearTimeout(st)) : (document.title = "(๑•̀ㅂ•́) ✧被发现了～", st = setTimeout(function () {
        document.title = OriginTitile
    }, 3e3))
});