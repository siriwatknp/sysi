<!DOCTYPE html>
<html>
    <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VKQNVK01SN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VKQNVK01SN');
</script>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>SYSI & เครือข่ายประชาชนเพื่อรัฐสวัสดิการ</title>
        
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/fontAwesome.css">
        <link rel="stylesheet" href="css/hero-slider.css">
        <link rel="stylesheet" href="css/owl-carousel.css">
        <link rel="stylesheet" href="css/datepicker.css">
        <link rel="stylesheet" href="css/templatemo-style.css">

        <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900" rel="stylesheet">

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
<!--
	Venue Template
	http://www.templatemo.com/tm-522-venue
-->
<style>
    .section-heading h2 {
    margin-bottom: 0px;
    margin-top: 14px;
    font-size: 23px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.5px;
}
footer .footer-heading h4 {
    font-size: 21px;
    color: #000;
    letter-spacing: 0.5px;

}
footer {
    padding: 30px 20px 30px 80px;
    border-top: 1px solid #ddd;
    background-color: #fff;
}

#cover123 {
  background: url(img/main_banner.jpg);
  background-repeat: no-repeat;
  background-size: auto;
}

section {
    padding-top: 60px;
    background-color: #071937;
    color:white;

}
.table>thead>tr>th, .table>tbody>tr>th, .table>tfoot>tr>th, .table>thead>tr>td, .table>tbody>tr>td, .table>tfoot>tr>td {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
    
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    color: black;
}
.btns {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #ff7043;
    border: 1px solid transparent;
    border-radius: 4px;
    color: white;
}
.btn-deep-orange {
    color: #fff;
    background-color: #ff7043 !important;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-right: 0px;
    padding-left: 0px;
}
.rightleft{
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 5px;
}

.fbvdo{   
    height: 30% !important;;
    }

</style>
    </head>

<body>
 
 <?
    include "menu.php";
    ?>


                <img  src="img/main_banner3.jpg" class="imgband" alt="Responsive image"><br>
                <img  src="img/main_banner31.jpg" class="imgband" alt="Responsive image">

 

  
                <section class="our-services" id="register">
                <div class="container">
                <div class="row">
                <div class="col-md-12 text-center">

                <a href="https://docs.google.com/forms/d/e/1FAIpQLScf8rNfL_Tn_c5lRhEOEWaVag-FrrFUzDIQJygC5n-ihSVC7A/viewform" class="btn btn-deep-orange" role="button"><h3>สมัครเข้า YouthWel Hackathon</h3></a>    
            </div>
                </div>
                </div>
                </section>


    <section class="our-services" id="link">
        <div class="container">
        <div class="row">
                <div class="col-md-12">
                    <div class="section-heading">
                        <h2>แหล่งข้อมูลแนะนำ</h2>
                    </div>

                    <?php

        
          include 'dbpass.php';
          $strSQL = "SELECT * FROM c_link";
          $objQuery = mysql_query($strSQL) or die ("Error Query [".$strSQL."]");
          $Num_Rows = mysql_num_rows($objQuery);
          $objQuery  = mysql_query($strSQL);

          ?>
<table class="table">
  <thead class="black white-text">
    <tr>
      <th class="col text-center" class="text-white">ลำดับ</th>
      <th class="col text-center" class="text-white">แหล่งข้อมูลแนะนำ</th>
      <th class="col" class="text-white"></th>
    </tr>
  </thead>
  <tbody>
      <?
      $i = '1';
      while($objResult = mysql_fetch_array($objQuery)){
        
    ?>
    <tr>
      <th class="row text-center"><?echo $i;?></th>
      <th class="text-white text-left"><?php echo $objResult["name"];?></td>
      <th class="text-white"><a href=<?php echo $objResult["link"];?>> <button type="button" class="btn btn-secondary">กด</button></a></td>
    </tr>
      <?
    $i = $i+1;
    }?>
  </tbody>
</table>
                </div> 
            </div> 
            
        </div>
    </section>

    


    <section class="our-services" id="contact">
<?php
include "footer.html";
?>
</section>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" type="text/javascript"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

    <script src="js/vendor/bootstrap.min.js"></script>
    
    <script src="js/datepicker.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
</body>
</html>