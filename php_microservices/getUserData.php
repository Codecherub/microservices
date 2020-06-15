<?php
session_start();

$response = array(
    'name'=>$_SESSION['name'],
    'email'=>$_SESSION['email'],
    'cart'=>$_SESSION['cart']
);