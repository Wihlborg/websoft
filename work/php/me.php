<?php
$pageTitle = "Me";
include 'view/header.php';?>

<body onload="moveDuckToRandomPos()">

<hr>

<article>

<h1>My report page in the course DA377B</h1>

<p><img src="img/me.jpg" width="500" alt="Me on an image"></p>

<p>This is my report-page in the course. This page contains a presentation of myself. Keep this site updated all through the course and hand it in, for grading, in the end of the course.</p>

<p>My name is Henrik Vihlborg.</p>

<p>Born and raised in Glimåkra in northeastern Skåne.</p>

<p><font color = "red">North London is red</font></p>

</article>
<div id="duck"></div>
<?php include 'view/footer.php';?>



<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/duck.js"></script>
</body>
</html>
