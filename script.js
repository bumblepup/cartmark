(() => {
    function update(ctx, inputs) {
        var is = {};
        for (var i = 0; i < 8; i += 1) {
            is[inputs[i].id] = inputs[i].value;
        }
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 400, 120);
        ctx.fillStyle = 'black';
        ctx.fillRect(265, 0, 5, 120)
        ctx.font = '20pt Arial';
        ctx.fillText(is['strain'], 15, 35, 370);
        ctx.fillText(is['brand'], 105, 85, 370);
    }

    function savelabel(canvas) {
        window.location = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    }

    document.addEventListener("DOMContentLoaded", () => {
        var preview = document.getElementsByClassName("preview")[0];
        var download = document.getElementsByClassName("download")[0];
        var inputs = document.getElementsByTagName("input");
        var ctx = preview.getContext("2d");
        for (var i = 0; i < 8; i += 1) {
            inputs[i].addEventListener("change", () => {
                update(ctx, inputs);
            });
        }
        download.addEventListener("click", () => {
            savelabel(preview);
        });
        update(ctx, inputs);
    });
})();
