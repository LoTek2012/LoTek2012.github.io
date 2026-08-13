const themeButton =
    document.getElementById("themeButton");

let lightMode = false;


themeButton.addEventListener("click", () => {

    lightMode = !lightMode;


    if (lightMode) {

        document.documentElement.style.setProperty(
            "--background",
            "#f4f4f5"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--card-hover",
            "#f0f0f2"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#dedee3"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#111113"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#66666e"
        );

        themeButton.textContent = "🌙";

    } else {

        document.documentElement.style.setProperty(
            "--background",
            "#09090b"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#111114"
        );

        document.documentElement.style.setProperty(
            "--card-hover",
            "#18181d"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#25252c"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f5f5f7"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#96969f"
        );

        themeButton.textContent = "☀️";

    }

});