$("document").ready(function() {
    let startTime = 0; 
    let currentTime =0;
    let passedTime = 0; 
    let time;
    let stopTime = 0;

    $("#start").click(function() {
        if(startTime == 0) {
            //初回スタートクリック時
            startTime = Date.now();
            time = setInterval(runTimer, 100);
        }else {
            //ストップ→スタートクリック時
            startTime += (Date.now() - stopTime);
            time = setInterval(runTimer, 100);
        }
        //スタート非活性、ストップ・リセット活性
        document.getElementById("start").disabled = true;
        document.getElementById("stop").disabled = false;
        document.getElementById("reset").disabled = false;

        //発火確認
        console.log("start");
    });

    $("#stop").click(function() {
        clearInterval(time);
        //停止した時間を獲得
        stopTime = Date.now();

        //発火確認
        console.log("stop");

        //ストップ非活性、スタート・リセット活性
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("reset").disabled = false;
    });

    $("#reset").click(function() {
        clearInterval(time);
        //各変数リセット
        startTime = 0;
        currentTime = 0;
        passedTime = 0;

        //表示リセット
        $("#hour").text("0");
        $("#minute").text("0");
        $("#second").text("0");
        $("#deci").text("0");

        //リセット確認&発火確認
        console.log("reset");
        console.log("startTime: " + startTime);
        console.log("currentTime: " + currentTime);
        console.log("passedTime: " + passedTime);

        //リセット・ストップ非活性、スタート活性
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
        document.getElementById("reset").disabled = true;
    });

    function runTimer() {
        currentTime = Date.now();
        //経過時間獲得
        passedTime = Math.floor((currentTime - startTime)/100);
        showTime();
    }

    function showTime() {
        //時間算出
        let hour = Math.floor(passedTime/3600); 
        //分算出
        let minute = Math.floor((passedTime - hour*3600)/600);
        //秒算出
        let second = Math.floor((passedTime - hour*3600 - minute*600)/10);
        //10-1秒算出
        let deci = Math.floor(passedTime - hour*3600 - minute*600 - second*10);

        //各単位の表示に反映
        $("#hour").text(hour);
        $("#minute").text(minute);
        $("#second").text(second);
        $("#deci").text(deci);

        //各単位確認&発火確認
        console.log("passedTime: "+passedTime);
        console.log(hour,minute, second,deci);
        
    }
});