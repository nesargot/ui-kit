window.addEventListener("load", function() {
    let container  = document.getElementById("main-container");
    let layouts    = document.getElementById("layouts");
    let navigation = document.getElementById("navigation");

    function onresize() {
        container.style.height = window.innerHeight + "px";
        layouts.style.height = window.innerHeight - navigation.offsetHeight + "px";
    }

    window.addEventListener("resize", onresize);
    onresize();
});
