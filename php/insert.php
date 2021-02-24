<?php
    if(isset($_POST['send']))
    {
        if(!empty($_POST['name']) && !empty($_POST['age']))
        {
            echo "Datos insertados";
        }
    }
?>