<?php
    require "config.php";
    require "functions.php";

    //Incoming variables
    $label = $_POST["label"] ?? null;
    $type   = $_POST["type"] ?? null;
    $create = $_POST["create"] ?? null;

    if ($create) {
        // Connect to DB
        $db = connectDatabase($dsn);
    
        // Prepare and execute the INSERT INTO SQL statement
        $sql = "INSERT INTO tech VALUES (default, ?, ?)";
        $stmt = $db->prepare($sql);
        $stmt->execute([$label, $type]);
    
        // Get the results as an array with column names as array keys
        $sql = "SELECT * FROM tech";
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll();
    }
    

    $pageTitle = "create";
    include 'view/header.php';
    ?>

    
<div class="container">
<h1>Create a new database entry</h1>

<form method="post">
    <fieldset>
        <legend>Create</legend>
        <p>
            <label>Label: 
                <input type="text" name="label" placeholder="Enter label">
            </label>
        </p>
        <p>
            <label>Type: 
                <input type="text" name="type" placeholder="Enter type">
            </label>
        </p>
        <p>
            <input type="submit" name="create" value="Create">
        </p>
    </fieldset>
</form>

<?php if ($res ?? null) : ?>
    <table>
        <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Type</th>
        </tr>

    <?php foreach ($res as $row) : ?>
        <tr>
            <td><?= $row["id"] ?></td>
            <td><?= $row["label"] ?></td>
            <td><?= $row["type"] ?></td>
        </tr>
    <?php endforeach; ?>

    </table>
<?php endif; ?>

</div>

<?php include 'view/footer.php';?>