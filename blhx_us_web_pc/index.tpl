<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

<head>
  <meta charset="utf-8">
  <title>
    <%= htmlWebpackPlugin.options.title %>
  </title>
   <meta name="viewport"
        content="width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=0.5"/>
  <meta name="keywords" content="Azur Lane Official, Azur Lane,Azur">
  <meta name="description" content="Conquer the ships, Conquer the sea! Naval shoot-em-up mobile game Azur Lane will take you to a brand new adventure. The battleship girls are ready for your orders, commander!">
  <meta name="searchtitle" content="Conquer the ships, Conquer the sea! Naval shoot-em-up mobile game Azur Lane will take you to a brand new adventure. The battleship girls are ready for your orders, commander!">
  <meta name="renderer" content="webkit" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="full-screen" content="yes" />
  <meta name="x5-fullscreen" content="true" />
  <meta name="format-detection" content="telephone=no">
    <script src="./static/config.js"></script>
    <script src="./static/fast.click.js"></script>
</head>

<body>
  <div id="app" class="app">
  </div>
  <% if (process.env.NODE_ENV === 'production') { %>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js"></script>
    <script src="https://cdn.bootcss.com/vue/2.5.15/vue.runtime.min.js"></script>
 <!-- Global site tag (gtag.js) - Google Ads: 798490883 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-798490883"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-798490883');
</script>
<script>  
!function(f,b,e,v,n,t,s)  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?  n.callMethod.apply(n,arguments):n.queue.push(arguments)};  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';  n.queue=[];t=b.createElement(e);t.async=!0;  t.src=v;s=b.getElementsByTagName(e)[0];  s.parentNode.insertBefore(t,s)}(window, document,'script',  'https://connect.facebook.net/en_US/fbevents.js');  
fbq('init', '857675331096354');  
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"  src="https://www.facebook.com/tr?id=857675331096354&ev=PageView&noscript=1"/>
</noscript>
  <% } %>
</body>

</html>