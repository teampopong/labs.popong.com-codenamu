<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>국회의원 정보보기 - 자리별</title>

  <meta name="description" content="국회의원 자리별 정보보기">
  <meta name="author" content="코드나무 8팀">

  <link rel="stylesheet/less" href="less/style.less">

  <script src="js/libs/less-1.3.0.min.js"></script>

  <script type="text/javascript" src="media/bootstrap/js/jquery.js"></script>
  <script type="text/javascript" src="media/js/common.js"></script>
  <script type="text/javascript" src="media/js/scratch.js"></script>
  <script type="text/javascript" src="media/js/zrssfeed/jquery.zrssfeed.js"></script>

  <script type="text/javascript" src="media/bootstrap/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="media/jquery.fancybox-1.3.4/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
  <link rel="stylesheet/less" href="media/jquery.fancybox-1.3.4/fancybox/jquery.fancybox-1.3.4.css">

  <style>
     ul#mashup {
      list-style:none;
      margin:0;
    }
    ul#mashup li {
      border:0;
    }
  </style>

  <script type="text/html" id="item_tmpl_single">
    <% obj.title = stripHTML(unescapeHTML(obj.title)); %>
    <li>
        <table>
          <tr>
            <td class="img-wrap"><img style="max-width:50px;max-height:50px;" src="<%=obj.thumbnail%>"></td>
            <td style="font-size:0.78em;">&nbsp;&nbsp;<a href="<%=obj.link%>"><%=obj.title%></a></td>
          </tr>
        </table>
        <p style="margin-top:10px;"><%=obj.pubDate%></p>
    </li>
  </script>

  <script type="text/html" id="item_tmpl_rss_single">
    <li>
      <a href="<%=obj.link%>"><%=obj.title%></a>
      <p style="margin-top:10px;"><%=obj.pubdate%></p>
    </li>
  </script>

  <!-- Use SimpLESS (Win/Linux/Mac) or LESS.app (Mac) to compile your .less files
  to style.css, and replace the 2 lines above by this one:
  <link rel="stylesheet" href="less/style.css">
   -->

  <script src="js/libs/modernizr-2.5.3-respond-1.1.0.min.js"></script>

</head>
<body>
  <div id="banner"><img src="img/banner-beta-right-90.png"></div>
  <div class="container">
  <div class="alert alert-error">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Warning!</strong> 본 프로젝트는 18대 국회(2008-2012)를 대상으로 진행된 것으로, 더 이상 유효하지 않습니다.
  </div>
  <h1><img src="img/logo.png"><small><i>Korea National Assembly, Now</i></small></h1>
