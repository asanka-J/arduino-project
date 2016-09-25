<?php
require_once 'firebaseLib.php';
// --- This is your Firebase URL
$url = 'https://project-edb28.firebaseio.com/';
$url1='https://project-edb28.firebaseio.com/humid';

// --- Use your token from Firebase here
$token = 'AIzaSyCSnApMhC_go1PvvuivL5LYxSGol3BhqyU';
// --- Here is your parameter from the http GET
//$arduino_data = $_GET['arduino_data'];
  //  $arduino_data = $_POST["temp1"];

$temp1=$_POST["temp1"];
$hum1=$_POST["hum1"];
$vib1=$_POST["vib1"];
$ind1=$_POST["index1"];

// --- $arduino_data_post = $_POST['name'];
// --- Set up your Firebase url structure here
$firebasePath = '/temp';
$firebasepath3='/humid';
$firebasePath2='/vib';
/// --- Making calls
$fb = new fireBase($url);
$fb2 = new fireBase($url1);



$response = $fb->push($firebasePath, $temp1);
$response = $fb->push($firebasePath2, $vib1);
$response = $fb2->push($firebasePath3, $hum1);
sleep(2);