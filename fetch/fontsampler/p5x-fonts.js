
window.addEventListener("load", function () {
    var fonts = [
        {
            name: "AsiaKCHD-B",
            files: ["/gallery/assets/rips/p5x/fonts/AsiaKCHD-B.ttf"],
        },
        {
            name: "AsiaKCM-R",
            files: ["/gallery/assets/rips/p5x/fonts/AsiaKCM-R.ttf"],
        },
        {
            name: "LiberationSans",
            files: ["/gallery/assets/rips/p5x/fonts/LiberationSans.ttf"],
        },
        {
            name: "SourceHanSansCN-Bold-JP",
            files: ["/gallery/assets/rips/p5x/fonts/SourceHanSansCN-Bold-JP-(EB+UB).otf"],
        },
        {
            name: "SourceHanSerifCN-Heavy",
            files: ["/gallery/assets/rips/p5x/fonts/SourceHanSerifCN-Heavy-4.otf"],
        },
    ];

    var options = {
        multiline: true,
        lazyload: false,
        initialText: "Sample Text 字体样本",
        order: [
            ["fontsize", "lineheight"],
            ["fontfamily"],
            "tester",
        ],
        config: {
            tester: {
                editable: true,
                label: false,
            },
            fontfamily: {
                label: "Font",
                init: "",
            },
            fontsize: {
                unit: "px",
                init: 36,
                min: 12,
                max: 96,
                step: 1,
                label: "Size",
            },
            lineheight: {
                unit: "%",
                init: 120,
                min: 80,
                max: 200,
                step: 5,
                label: "Leading",
            },
        },
    };

    var fs = new Fontsampler(
        document.getElementById("demo-all"),
        fonts,
        options,
    );
    FontsamplerSkin(fs);
    fs.init();
});
