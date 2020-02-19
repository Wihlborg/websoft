<?php
    $pageTitle = "schools";
    include 'view/header.php';
    ?>

<body>
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