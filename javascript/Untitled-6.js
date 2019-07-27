<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


var audio = $("screem.mp3")[0];
$("nav a").mouseenter(function () {
    audio.play();
});