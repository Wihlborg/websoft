<?php
    $pageTitle = "flag";
    include 'view/header.php';
    ?>


<body onload="moveDuckToRandomPos()">

<header>
    <nav>
        <a href="me.html">Me</a> |
        <a href="report.html">Report</a> | 
        <a href="about.html">About</a> |
        <a href="schools.html">Schools</a> |
        <a href="flags.html">Flags</a>
    </nav>
</header>
<b id="sweden">Sweden</b>
<b id="denmark">Denmark</b>
<b id="france">France</b>
<div class="flag sweden" id="swedenFlag"></div>
<div class="flag denmark" id="denmarkFlag"></div>
<div class="flag france"id="franceFlag"></div>

<div id="duck"></div>
<?php include 'view/footer.php';?>



<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/duck.js"></script>
<script type="text/javascript" src="js/flags.js"></script>
</body>
</html>
