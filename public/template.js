module.exports = () => { return `<!DOCTYPE html>
<html>

<head>
    <title>화상채팅</title>
    <link rel="stylesheet" href="styles.css">

</head>

<body>
<div id="roomnum" hidden>${1234}</div>
    <div class="gamepage">
        <div class="gamestart">홍승표의 화면</div>
        <div class="container">
            <div class="left-pane">
                <div class = "anger" id="key3">Anger</div>
                <div class = "stick" id="key3Value"></div>
                <video id="webcamStream" autoplay muted></video>
                <canvas id="captureCanvas" width="644" height="548" style="display: none;"></canvas>
                <div id="status">준비 중...</div>

            </div>

            <div class="center-pane">
                <div class="ratio">


                </div>
                <div class="ratio">

                </div>
                <br>
                <br>
            </div>

            <div class="right-pane">

                <video id="remoteVideo" autoplay></video>
            </div>

        </div>
    </div>
    <!-- script.js 파일 로드 -->
    <script src="https://cdn.socket.io/4.2.0/socket.io.min.js"></script>
    <script src="ai-connection.js"></script>

    <script>
   
    </script>

</body>

</html>`}