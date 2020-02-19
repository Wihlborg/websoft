<?php
    $pageTitle = "schools";
    include 'view/header.php';
    ?>

<body>

<!--
Comments are written as HTML style.
-->


<header>
    <nav>
        <a href="me.html">Me</a> |
        <a href="report.html">Report</a> | 
        <a href="about.html">About</a> |
        <a href="schools.html">Schools</a> |
        <a href="flags.html">Flags</a>
    </nav>
</header>
<hr>
<div id="content">

    <select id="locality-dropdown" name="locality">
    </select>

    <button id="fetchButton">Fetch</button>
    <table id = "table"></table>

</div>
<div id="duck"></div>

<?php include 'view/footer.php';?>

<script type="text/javascript" src="js/fetch.js"></script>
<script type="text/javascript" src="js/duck.js"></script>
</body>
</html>