var idx = [0, 0];
window.onload = () => {
    keyEnter();
    btnClick();
    show();
}

function keyEnter() {
    $("#id").on("keyup", function(key) {
        if(key.keyCode == 13) {
            var handle = $(this).val();
            $("#profile img").attr("src", "http://mazassumnida.wtf/api/generate_badge?boj=" + handle);
            
            fetch('https://solved.ac/api/v3/user/show?handle=dldyou')
            .then(res => res.json()) 
            .then(res => {
                if(res.success) {
                    console.log("${res.tier}");
                }
            });
        }
    })
}

function btnClick() {
    $(".left").on("click", function() {
        console.log("left");
        var par = $(this).parent();
        console.log(par);
    }); 
    $(".right").on("click", function() {
        console.log("right");
        var par = $(this).parent();
        console.log(par);
    })
}

function show() {
    $(".ctx").hide();
    $(".content").each(function(index) {
        var ctx = $(this).find(".ctx");
        console.log(idx[index], ctx);
        ctx.show();  
    });
}