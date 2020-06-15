<?php session_start();

//choose which service to call based on server request
switch ($_POST['action']) {

    case 'getUserData':
        require_once 'php_microservices/getUserData.php';
        break;
    case 'getUserData':
        require_once 'php_microservices/updateUserData.php';
        break;
    case 'getUserData':
        require_once 'php_microservices/updateUserCart.php';
        break;
    
    default:
        $response = array(
            'status'=>'failed'
        );
        break;
}

json_encode($response);