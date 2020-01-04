<template>
  <!-- conponentではroot要素は1つのみなのでarticleで括り、root要素を1つにまとめた。将来的には各素材をcomponentにまとめるのはありカモ-->
  <article id="contents">
    <!-- メイン画像表示-->
    <img :src="image_src" id="main_visual">

    <!-- ピックアップニュース表示-->
    <selecttion id="section01">
      <div class="container">
        <h2 class="heading_sec fadein_top scrollin">
          <span class="en">PICK UP NEWS</span>
          <span class="ja">ピックアップ</span>
        </h2>
        <!-- ピックアップ情報 3つ載せる-->
        <div class="news_pickup_list">
          <ul>
            <li>
              <a href="/news/2442.html">
                <figure class="thumb"><img :src="image_src" width="1024" height="747" alt=""></figure>
                <time class="date" itemprop="datePublished" datetime="2019-12-19">2019.xx.xx</time>
                <h3 class="title">ここにはピックアップ情報が入ります ここは1番目の情報が表示されます</h3>
              </a>
            </li>
            <li>
              <a href="/news/2442.html">
                <figure class="thumb"><img :src="image_src" width="1024" height="747" alt=""></figure>
                            <time class="date" itemprop="datePublished" datetime="2019-12-19">2019.xx.xx</time>
                <h3 class="title">ここにはピックアップ情報が入ります ここは2番目の情報が表示されます</h3>
              </a>
            </li>
            <li>
              <a href="/news/2442.html">
                <figure class="thumb"><img :src="image_src" width="1024" height="747" alt=""></figure>
                            <time class="date" itemprop="datePublished" datetime="2019-12-19">2019.xx.xx</time>
                <h3 class="title">ここにはピックアップ情報が入ります ここは3番目の情報が表示されます</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </selecttion>

    <!-- 新着情報表示-->
    <selecttion id="section02">
      <div class="container">
        <h2 class="heading_sec fadein_top scrollin">
          <span class="en">LATEST NEWS</span>
          <span class="ja">新着情報</span>
        </h2>
        <!-- ピックアップ情報 6つ載せる-->
        <div class="news_latest_list fadein_top scrollin">
          <ul>
            <li>
              <a href="/news/2457.html" class="thumb">
                <img :src="image_src" width="300" height="208" alt="">
              </a>
              <div class="content">
              <div class="data">
                <time class="date" itemprop="datePublished" datetime="2019-12-10">2019.xx.xx</time>
                <a href="https://upd8.jp/news/?genre=news" class="ctg_tag ctg_tag_news">ニュース</a>
              </div>
              <h3 class="title">
                <a href="/news/2457.html">ここにはピックアップ情報が表示されます</a>
              </h3>
            </div>
          </li>
          <li>
              <a href="/news/2457.html" class="thumb"><img :src="image_src" width="300" height="208" alt=""></a>
              <div class="content">
                <div class="data">
                  <time class="date" itemprop="datePublished" datetime="2019-12-10">2019.xx.xx</time>
                  <a href="https://upd8.jp/news/?genre=news" class="ctg_tag ctg_tag_news">ニュース</a>
                </div>
                <h3 class="title">
                  <a href="/news/2457.html">ここにはピックアップ情報が表示されます</a>
                </h3>
              </div>
            </li>
            <li>
              <a href="/news/2457.html" class="thumb"><img :src="image_src" width="300" height="208" alt=""></a>
              <div class="content">
                <div class="data">
                  <time class="date" itemprop="datePublished" datetime="2019-12-10">2019.xx.xx</time>
                  <a href="https://upd8.jp/news/?genre=news" class="ctg_tag ctg_tag_news">ニュース</a>
                </div>
                <h3 class="title">
                  <a href="/news/2457.html">ここにはピックアップ情報が表示されます</a>
                </h3>
              </div>
            </li>
            <li>
              <a href="/news/2457.html" class="thumb"><img :src="image_src" width="300" height="208" alt=""></a>
              <div class="content">
                <div class="data">
                  <time class="date" itemprop="datePublished" datetime="2019-12-10">2019.xx.xx</time>
                  <a href="https://upd8.jp/news/?genre=news" class="ctg_tag ctg_tag_news">ニュース</a>
                </div>
                <h3 class="title">
                  <a href="/news/2457.html">ここにはピックアップ情報が表示されます</a>
                </h3>
              </div>
            </li>
            <li>
              <a href="/news/2457.html" class="thumb"><img :src="image_src" width="300" height="208" alt=""></a>
              <div class="content">
                <div class="data">
                  <time class="date" itemprop="datePublished" datetime="2019-12-10">2019.xx.xx</time>
                  <a href="https://upd8.jp/news/?genre=news" class="ctg_tag ctg_tag_news">ニュース</a>
                </div>
                <h3 class="title">
                  <a href="/news/2457.html">ここにはピックアップ情報が表示されます</a>
                </h3>
              </div>
            </li>
            <li>
              <a href="/news/2457.html" class="thumb"><img :src="image_src" width="300" height="208" alt=""></a>
              <div class="content">
                <div class="data">
                  <time class="date" itemprop="datePublished" datetime="2019-12-10">2019.xx.xx</time>
                  <a href="https://upd8.jp/news/?genre=news" class="ctg_tag ctg_tag_news">ニュース</a>
                </div>
                <h3 class="title">
                  <a href="/news/2457.html">ここにはピックアップ情報が表示されます</a>
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn_block fadein_top scrollin">
          <a href="https://upd8.jp/news/" class="btn_primary btn_primary_yellow"><span>READ MORE</span></a>
      </div>
    </selecttion>

    <section id="section04">
      <div class="container">
       <h2 class="heading_sec fadein_top scrollin">
        <span class="en">MEIN CONTENTS</span>
        <span class="ja">コンテンツのご紹介</span>
       </h2>
     </div>

     <carousel
     ref="carousel"
     :per-page="1"
     :navigation-enabled="true"
     navigation-prev-label="〈"
     navigation-next-label="〉"
     :speed="1000"
     autoplay="true"
     loop="true"
     @pageChange="onPageChange">
       <slide>
         <h3 class="talent_name">SAMPLE1</h3>
         <div class="channel">
           <a href="https://www.youtube.com/channel/UCGcD5iUDG8xiywZeeDxye-A?sub_confirmation=1" target="_blank" tabindex="-1">コンテンツ名</a>
         </div>
         <p class="intro">
               ここには紹介したいコンテンツの紹介文を書くことが出来ます。<br>
               最大文字数等の制限はありませんが最大100文字程度に収めて頂くと、可読性が向上します。
         </p>
         <div class="btn_block">
             <a href="/virtual_talent/%e7%b9%94%e7%94%b0-%e4%bf%a1%e5%a7%ab.html" class="btn_primary" tabindex="-1"><span>MORE</span></a>
         </div>
         <div class="links">
            <ul class="sns">
              <li class="twitter"><a href="https://twitter.com/9LVEdFpddLnnxWg" target="_blank" tabindex="-1"><i class="icon-twitter"></i></a></li>
            </ul>
        </div>
        <img :src="image_src" width="400px" height="400px" alt="サンプル1" class="avator">
       </slide>
       <slide>
          <h3 class="talent_name">SAMPLE2</h3>
          <div class="channel">
            <a href="https://www.youtube.com/channel/UCGcD5iUDG8xiywZeeDxye-A?sub_confirmation=1" target="_blank" tabindex="-1">コンテンツ名</a>
          </div>
          <p class="intro">
                ここには紹介したいコンテンツの紹介文を書くことが出来ます。<br>
                最大文字数等の制限はありませんが最大100文字程度に収めて頂くと、可読性が向上します。
          </p>
          <div class="btn_block">
              <a href="/virtual_talent/%e7%b9%94%e7%94%b0-%e4%bf%a1%e5%a7%ab.html" class="btn_primary" tabindex="-1"><span>MORE</span></a>
          </div>
          <div class="links">
             <ul class="sns">
               <li class="twitter"><a href="https://twitter.com/9LVEdFpddLnnxWg" target="_blank" tabindex="-1"><i class="icon-twitter"></i></a></li>
             </ul>
         </div>
         <img :src="image_src" width="400px" height="400px" alt="サンプル2" class="avator">
       </slide>
       <slide>
          <h3 class="talent_name">SAMPLE3</h3>
          <div class="channel">
            <a href="https://www.youtube.com/channel/UCGcD5iUDG8xiywZeeDxye-A?sub_confirmation=1" target="_blank" tabindex="-1">コンテンツ名</a>
          </div>
          <p class="intro">
                ここには紹介したいコンテンツの紹介文を書くことが出来ます。<br>
                最大文字数等の制限はありませんが最大100文字程度に収めて頂くと、可読性が向上します。
          </p>
          <div class="btn_block">
              <a href="/virtual_talent/%e7%b9%94%e7%94%b0-%e4%bf%a1%e5%a7%ab.html" class="btn_primary" tabindex="-1"><span>MORE</span></a>
          </div>
          <div class="links">
             <ul class="sns">
               <li class="twitter"><a href="https://twitter.com/9LVEdFpddLnnxWg" target="_blank" tabindex="-1"><i class="icon-twitter"></i></a></li>
             </ul>
         </div>
         <img :src="image_src" width="400px" height="400px" alt="サンプル3" class="avator">
       </slide>
       <slide>
          <h3 class="talent_name">SAMPLE4</h3>
          <div class="channel">
            <a href="https://www.youtube.com/channel/UCGcD5iUDG8xiywZeeDxye-A?sub_confirmation=1" target="_blank" tabindex="-1">コンテンツ名</a>
          </div>
          <p class="intro">
                ここには紹介したいコンテンツの紹介文を書くことが出来ます。<br>
                最大文字数等の制限はありませんが最大100文字程度に収めて頂くと、可読性が向上します。
          </p>
          <div class="btn_block">
              <a href="/virtual_talent/%e7%b9%94%e7%94%b0-%e4%bf%a1%e5%a7%ab.html" class="btn_primary" tabindex="-1"><span>MORE</span></a>
          </div>
          <div class="links">
             <ul class="sns">
               <li class="twitter"><a href="https://twitter.com/9LVEdFpddLnnxWg" target="_blank" tabindex="-1"><i class="icon-twitter"></i></a></li>
             </ul>
         </div>
         <img :src="image_src" width="400px" height="400px" alt="サンプル1" class="avator">
       </slide>
     </carousel>
     <nuxt-link to="/example"></nuxt-link>
     <p @click.prevent="nextSlide"></p>


       <!-- カルーセル以下画像リスト -->
       <div class="vt_list fadein_top scrollin">
        <ul class="owl-carousel">
          <li>
            <a href="/virtual_talent/kizunaai.html">
              <span><figure class="thumb"><img :src="image_src" width="500" height="500" alt="キズナアイ"></figure></span>
            </a>
          </li>
          <li>
            <a href="/virtual_talent/%e7%b9%94%e7%94%b0-%e4%bf%a1%e5%a7%ab.html">
              <span><figure class="thumb"><img :src="image_src" width="800" height="779" alt="織田 信姫"></figure></span>
            </a>
          </li>
          <li>
            <a href="/virtual_talent/%e3%81%8a%e3%82%81%e3%81%8c%e3%82%b7%e3%82%b9%e3%82%bf%e3%83%bc%e3%82%ba.html">
              <span><figure class="thumb"><img :src="image_src" width="738" height="738" alt="おめがシスターズ"></figure></span>
            </a>
          </li>
          <li>
            <a href="/virtual_talent/yuni.html">
              <span><figure class="thumb"><img :src="image_src" width="975" height="963" alt="YuNi"></figure></span>
            </a>
          </li>
          <li>
            <a href="/virtual_talent/%e9%ad%94%e7%8e%8b%e3%83%9e%e3%82%b0%e3%83%ad%e3%83%8a.html">
              <span><figure class="thumb"><img :src="image_src" width="400" height="400" alt="魔王マグロナ"></figure></span>
              <figure class="flag_new"><img src="/image/common/image_flag_new_02.png" alt="NEW"></figure>
            </a>
          </li>
          <li>
            <a href="/virtual_talent/%e5%85%8e%e9%9e%a0%e3%81%be%e3%82%8a.html">
              <span><figure class="thumb"><img :src="image_src" width="500" height="500" alt="兎鞠まり"></figure></span>
              <figure class="flag_new"><img src="/image/common/image_flag_new_02.png" alt="NEW"></figure>
            </a>
          </li>
          <li>
            <a href="/virtual_talent/%e6%a1%9c%e6%9c%88%e8%8a%b1%e9%9f%b3.html">
              <span>
                <figure class="thumb"><img :src="image_src" width="500" height="500" alt="桜月花音"></figure>
              </span>
              <figure class="flag_new"><img src="/image/common/image_flag_new_02.png" alt="NEW"></figure>
            </a>
          </li>
          </ul>
       </div>
       <div class="btn_block fadein_top scrollin">
        <a href="https://upd8.jp/virtual_talent/" class="btn_primary"><span>全てのコンテンツをチェック</span></a>
       </div>
      <div class="bg_skew"></div>
    </section>

  </article>
</template>
<script>
// カルーセル
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
  Carousel,
  Slide
},
  // 画像path設定用
  data () {
        return {
            image_src: require("../assets/icon.png"),
            image_src_100: require("../assets/100en.png"),
            image_src_waifu: require("../assets/waifu.png"),
            image_src_heart: require("../assets/heart.jpg")
        }
    }
}
</script>

<style>
.company {
  background: #808080;
}

/* heading_secを付いたclass の子要素span の中の class en */
.heading_sec span.en {
     font-size: 50px;
     letter-spacing: 0.4em;
     margin-bottom: 20px;
}
/* heading_secを付いたclass の子要素span は1spanで一つのまとまりとする*/
.heading_sec span {
    display: block;
}

.heading_sec {
    text-align: center;
    margin-bottom: 10px;
}

h2.fadein_top.scrollin {
      transform: translate(0, 0) rotate(0.05deg);
}

.en {
    font-family: 'Oswald', Helvetica, Arial, sans-serif;
    font-weight: 7000;
}
@charset "UTF-8";
.clearfix {
  *zoom: 1; }
  .clearfix:after {
    content: "";
    display: table;
    clear: both; }

.d_flex, #section01 .news_pickup_list ul, #section02 .news_latest_list ul, #section02 .news_latest_list ul li, #section03 .container, #section04     .slider_item .info .list_channel, #section04     .slider_item .info .list_channel .sub, #section04     .slider_item .info .list_channel .sub a, #section04     .slider_item .info .links, #section04     .slider_item .info .links .sns, #section04 .vt_list ul, #section05 .slider_navigation, #section06 .archives_list ul {
  display: flex; }

.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent; }

.slick-list {
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0; }
  .slick-list:focus {
    outline: none; }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand; }

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); }

.slick-track {
  position: relative;
  left: 0;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto; }
  .slick-track:before, .slick-track:after {
    content: "";
    display: table; }
  .slick-track:after {
    clear: both; }
  .slick-loading .slick-track {
    visibility: hidden; }

.slick-slide {
  float: left;
  height: 100%;
  min-height: 1px;
  display: none; }
  [dir="rtl"] .slick-slide {
    float: right; }
  .slick-slide img {
    display: block; }
  .slick-slide.slick-loading img {
    display: none; }
  .slick-slide.dragging img {
    pointer-events: none; }
  .slick-initialized .slick-slide {
    display: block; }
  .slick-loading .slick-slide {
    visibility: hidden; }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent; }

.slick-arrow.slick-hidden {
  display: none; }

/*--------------------------
main_visual
---------------------------*/
#main_visual {
  width: 100%;
  height: 900px;
  position: relative;
  overflow: hidden; }
  @media only screen and (max-width: 768px) {
    #main_visual {
      height: auto;
      margin-top: 60px; } }
  #main_visual::before {
    width: 100%;
    height: 100%;
    background: url(/image/common/bg_squares_mask_01.png) center center;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    display: block;
    content: "";
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); }
  #main_visual .mv_sp {
    display: none; }
    @media only screen and (max-width: 768px) {
      #main_visual .mv_sp {
        display: block; } }
    #main_visual .mv_sp img {
      width: 100%; }

.mb_YTPlayer:focus {
  outline: 0; }

.mbYTP_wrapper {
  min-height: 105% !important;
  display: block;
  -webkit-transform: translateZ(0) translate3d(0, 0, 0);
  transform: translateZ(0) translate3d(0, 0, 0);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000;
  perspective: 1000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box; }

.mbYTP_wrapper iframe {
  max-width: 4000px !important; }

body.tablet #main_visual {
  height: auto;
  margin-top: 60px; }
  body.tablet #main_visual .mv_sp {
    display: block !important; }

/*--------------------------
section01
---------------------------*/
#section01 {
  padding: 120px 0 80px; }
  @media only screen and (max-width: 768px) {
    #section01 {
      padding: 60px 0 30px; } }

  #section01 .heading_sec{
    padding: 10px 0 ;
  }
  #section01 .news_pickup_list {
    margin: 40px 0 20px; }
    @media only screen and (max-width: 768px) {
      #section01 .news_pickup_list {
        margin: 30px 0; } }
    #section01 .news_pickup_list ul {
      flex-wrap: wrap; }
      @media only screen and (max-width: 768px) {
        #section01 .news_pickup_list ul {
          display: block; } }
      #section01 .news_pickup_list ul li {
        flex: 0 0 31%;
        max-width: 31%;
        margin: 0 3.5% 40px 0;
        position: relative; }
        @media only screen and (max-width: 768px) {
          #section01 .news_pickup_list ul li {
            max-width: inherit;
            margin: 0 0 20px; } }
        #section01 .news_pickup_list ul li a {
          display: block; }
        #section01 .news_pickup_list ul li .thumb {
          background: #eee;
          height: 250px;
          position: relative;
          overflow: hidden; }
          @media only screen and (max-width: 768px) {
            #section01 .news_pickup_list ul li .thumb {
              height: 0;
              padding-bottom: 70%; } }
          #section01 .news_pickup_list ul li .thumb img {
            width: 100%;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%); }
        #section01 .news_pickup_list ul li .date {
          font-size: 14px;
          font-weight: 700;
          margin: 12px 0 6px;
          display: block; }
          @media only screen and (max-width: 768px) {
            #section01 .news_pickup_list ul li .date {
              font-size: 13px; } }
        #section01 .news_pickup_list ul li .title {
          line-height: 1.4; }
        #section01 .news_pickup_list ul li::before {
          width: 110%;
          height: 110%;
          background: #ffff00;
          position: absolute;
          top: -5%;
          left: -5%;
          z-index: -1;
          display: block;
          content: "";
          opacity: 0;
          -webkit-transform: rotate(0);
          transform: rotate(0);
          transition: all 0.2s linear 0s; }
        #section01 .news_pickup_list ul li:hover::before {
          opacity: 1;
          -webkit-transform: rotate(-6deg);
          transform: rotate(-6deg); }
        #section01 .news_pickup_list ul li:nth-child(3n) {
          margin-right: 0; }

/*--------------------------
section02
---------------------------*/
#section02 {
  padding: 40px 0 20px; }
  @media only screen and (max-width: 768px) {
    #section02 {
      padding: 30px 0 60px; } }

  #section02 .news_latest_list {
    margin: 20px auto 40px; }
    @media only screen and (max-width: 768px) {
      #section02 .news_latest_list {
        width: 100%; } }
    #section02 .news_latest_list ul {
      flex-wrap: wrap; }
      @media only screen and (max-width: 768px) {
        #section02 .news_latest_list ul {
          display: block; } }
      #section02 .news_latest_list ul li {
        flex: 0 0 49%;
        margin-right: 2%;
        margin-bottom: 30px;
        position: relative;
        align-items: center; }
        @media only screen and (max-width: 768px) {
          #section02 .news_latest_list ul li {
            margin-right: 0; } }
        #section02 .news_latest_list ul li .thumb {
          background: #eee;
          flex: 0 0 140px;
          max-width: 140px;
          height: 100px;
          position: relative;
          overflow: hidden;
          display: block; }
          @media only screen and (max-width: 768px) {
            #section02 .news_latest_list ul li .thumb {
              flex: 0 0 100px;
              max-width: 100px;
              height: 75px; } }
          #section02 .news_latest_list ul li .thumb img {
            width: 100%;
            height: auto;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%); }
        #section02 .news_latest_list ul li .content {
          margin-left: 25px; }
          @media only screen and (max-width: 768px) {
            #section02 .news_latest_list ul li .content {
              margin-left: 10px; } }
          #section02 .news_latest_list ul li .content .data {
            margin-bottom: 10px; }
            @media only screen and (max-width: 768px) {
              #section02 .news_latest_list ul li .content .data {
                display: block;
                margin-bottom: 6px; } }
            #section02 .news_latest_list ul li .content .data .date {
              font-size: 14px;
              font-weight: 700;
              display: block;
              margin-bottom: 5px; }
              @media only screen and (max-width: 768px) {
                #section02 .news_latest_list ul li .content .data .date {
                  font-size: 12px; } }
            #section02 .news_latest_list ul li .content .data .ctg_tag {
              color: #fff;
              background: #ccc;
              font-size: 10px;
              text-align: center;
              min-width: 70px;
              padding: 4px 6px;
              display: inline-block; }
              #section02 .news_latest_list ul li .content .data .ctg_tag_event {
                background: #ef7d9a; }
              #section02 .news_latest_list ul li .content .data .ctg_tag_news {
                background: #fc0; }
              #section02 .news_latest_list ul li .content .data .ctg_tag_members {
                background: #4dcfe2; }
              #section02 .news_latest_list ul li .content .data .ctg_tag_item {
                background: #4de269; }
              #section02 .news_latest_list ul li .content .data .ctg_tag:not(:last-of-type) {
                margin-right: 5px; }
                @media only screen and (max-width: 768px) {
                  #section02 .news_latest_list ul li .content .data .ctg_tag:not(:last-of-type) {
                    margin: 0 2px 4px 0; } }
          #section02 .news_latest_list ul li .content .title {
            line-height: 1.4; }
            @media only screen and (max-width: 768px) {
              #section02 .news_latest_list ul li .content .title {
                font-size: 13px; } }
            #section02 .news_latest_list ul li .content .title a:hover {
              transition: color 0.2s linear 0s;
              color: #00deff; }
        @media only screen and (max-width: 768px) {
          #section02 .news_latest_list ul li:not(:last-child) {
            margin-bottom: 18px; } }
        #section02 .news_latest_list ul li:nth-of-type(2n) {
          margin-right: 0; }

/*--------------------------
section04
---------------------------*/

#section04 {
  padding: 220px 0 40px; }
  @media only screen and (max-width: 768px) {
    #section04 {
      padding: 60px 0 60px; } }
  /* z-index 重なりのpriorityを指定できる。大きいほど優先される。優先度99*/
  #section04 .container {
    z-index: 99; }
    /* カルーセル上部の空白の大きさ指定*/
  #section04   {
    padding: 100px 30px 200px; }
    @media only screen and (max-width: 768px) {
      #section04   {
        padding: 60px 0 100px; } }

      /* コンテンツ名*/
      #section04 .VueCarousel-slide .talent_name {
        padding: 20px;
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 4px; }
        @media only screen and (max-width: 768px) {
          #section04 .VueCarousel-slide .talent_name {
            font-size: 20px; } }

      /* コンテンツ名の補足   & チャンネルへのリンク */
      #section04 .channel {
        font-size: 13px;
        padding: 0 20px; }
        @media only screen and (max-width: 768px) {
          #section04  .channel {
            font-size: 10px;
            padding: 0 20px;} }
      /* コンテンツ紹介文 */
      #section04  .intro {
        line-height: 1.5;
        margin: 20px 0;
      width: 45%;}
        @media only screen and (max-width: 768px) {
          #section04 .intro {
            font-size: 12px;
            text-shadow: 0px 0px 2px #ffffff, 0px 0px 2px #ffffff, 0px 0px 1px #ffffff, 0px 0px 1px #ffffff; } }
        #section04 .intro a {
          color: #00b9d4;
          transition: all 0.2s linear 0s; }
          #section04  a:hover {
            color: #00deff; }
      /* カルーセル内のボタン */
      #section04 .VueCarousel-slide .btn_block {
        margin-top: 60px;
        text-align: center; }
        @media only screen and (max-width: 768px) {
          #section04 .VueCarousel-slide .btn_block {
            margin-top: 5px;
            text-align: center; } }


      /* カルーセル内の画像*/
      #section04 .avator {
        max-width: 524px;
        position: relative;
        TOP: 50%;
        right: -500px;
        z-index: -1;

      transform: translate(0, -100%);
    }
    @media only screen and (max-width: 768px) {
      #section04 .avator {
        width: 70%;
        top: 0;
        -webkit-transform: translate(-30px, 0);
        transform: translate(-30px, 0);

        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
         } }
    @media only screen and (max-width: 768px) {
      #section04   .avator img {
        max-height: 400px;
        margin-left: auto;
        width: auto; } }

      /* カルーセル設定 */
      .VueCarousel{
        padding: 20px;
        height: 500px;
        /* 中央寄せ 大きさは80% 最大2000px */
        width: 80%;
        margin: 0 auto;
        max-width: 2000px;
        border: 20px solid rgba(0, 0, 0, 0.1);
        position: relative;
      }
      .VueCarousel-wrapper, .VueCarousel-inner, .VueCarousel-slide{
        /* 高さは100%最優先 */
        height: 100% !important;
      }
/* リスト*/
  #section04 .vt_list {
    padding: 40px 0;
    width: 1060px;
    margin: 0 auto; }
    @media only screen and (max-width: 768px) {
      #section04 .vt_list {
        width: 100%; } }
    #section04 .vt_list ul {
      flex-wrap: wrap; }
      @media only screen and (max-width: 768px) {
        #section04 .vt_list ul {
          padding: 0 10px;
          justify-content: space-between; } }
      #section04 .vt_list ul li {
        flex: 0 0 220px;
        max-width: 220px;
        margin: 0 60px 60px 0;
        position: relative; }
        @media only screen and (max-width: 768px) {
          #section04 .vt_list ul li {
            flex: 0 0 45%;
            max-width: 45%;
            margin: 0 0 40px; } }
        #section04 .vt_list ul li a {
          position: relative;
          display: block; }
          #section04 .vt_list ul li a .thumb {
            background: #fff;
            height: 220px;
            position: relative;
            overflow: hidden; }
            @media only screen and (max-width: 768px) {
              #section04 .vt_list ul li a .thumb {
                height: 0;
                padding-bottom: 100%; } }
            #section04 .vt_list ul li a .thumb img {
              width: 100%;
              height: auto;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              margin: auto;
              transition: all 0.8s linear 0s; }
          #section04 .vt_list ul li a .flag_new {
            position: absolute;
            top: -28px;
            left: -20px;
            z-index: 1; }
            @media only screen and (max-width: 768px) {
              #section04 .vt_list ul li a .flag_new {
                top: -10px;
                left: -10px; } }
            @media only screen and (max-width: 768px) {
              #section04 .vt_list ul li a .flag_new img {
                width: 45px; } }
        #section04 .vt_list ul li:nth-child(4n) {
          margin-right: 0; }
        #section04 .vt_list ul li::before {
          width: 106%;
          height: 106%;
          background: #ffff00;
          position: absolute;
          top: -3%;
          left: -3%;
          z-index: -1;
          display: block;
          content: "";
          -webkit-transform: rotate(-8deg);
          transform: rotate(-8deg);
          transition: all 0.2s linear 0s; }
        #section04 .vt_list ul li:hover .thumb img {
          -webkit-transform: scale(1.2);
          transform: scale(1.2); }
  #section04 .slider-inner .btn_block a {
    min-width: 240px; }



/*--------------------------
bg_wrapper
---------------------------*/
#bg_wrapper {
  padding-bottom: 130px;
  margin-bottom: -130px;
  position: relative; }
  @media only screen and (max-width: 768px) {
    #bg_wrapper {
      padding-bottom: 30px;
      margin-bottom: -30px; } }
  #bg_wrapper .bg_skew {
    background: url(/image/top/bg_sec05_06_01.jpg) center center/cover no-repeat;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 0;
    -webkit-transform: skewY(-6deg) translate(-50%, 0);
    transform: skewY(-6deg) translate(-50%, 0);
    overflow: hidden; }
    @media only screen and (max-width: 768px) {
      #bg_wrapper .bg_skew {
        background-image: url(/image/top/bg_sec05_06_01_sp.jpg); } }
    #bg_wrapper .bg_skew::before {
      width: 100%;
      height: 150%;
      background: url(/image/common/bg_squares_mask_01.png) center center;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      display: block;
      content: "";
      -webkit-transform: skewY(6deg) translate(-50%, -50%);
      transform: skewY(6deg) translate(-50%, -50%); }

/*--------------------------
section05
---------------------------*/
#section05 {
  padding: 240px 0 100px;
  position: relative;
  z-index: 10; }
  @media only screen and (max-width: 768px) {
    #section05 {
      padding: 100px 0 20px; } }
  #section05 .service_slider {
    margin-top: 80px; }
    @media only screen and (max-width: 768px) {
      #section05 .service_slider {
        margin-top: 40px; } }
    #section05 .service_slider .slick-list {
      overflow: visible; }
    #section05 .service_slider .slider_item {
      position: relative; }
      #section05 .service_slider .slider_item .info {
        width: 370px;
        margin-left: 180px;
        transition: all 0.2s linear 0s; }
        @media only screen and (max-width: 768px) {
          #section05 .service_slider .slider_item .info {
            width: 70%;
            margin-left: 0; } }
        #section05 .service_slider .slider_item .info .service_title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px; }
          @media only screen and (max-width: 768px) {
            #section05 .service_slider .slider_item .info .service_title {
              font-size: 16px; } }
        #section05 .service_slider .slider_item .info .intro {
          font-size: 14px;
          line-height: 1.6;
          margin-top: 16px; }
          @media only screen and (max-width: 768px) {
            #section05 .service_slider .slider_item .info .intro {
              font-size: 12px; } }
        #section05 .service_slider .slider_item .info .btn_block {
          text-align: right; }
      #section05 .service_slider .slider_item .pic {
        max-width: 637px;
        position: absolute;
        top: -220px;
        right: -80px;
        z-index: -1;
        transition-delay: 0.3s; }
        @media only screen and (max-width: 768px) {
          #section05 .service_slider .slider_item .pic {
            width: 100vw;
            max-width: inherit;
            top: 80%;
            right: -10%; } }
        @media only screen and (max-width: 768px) {
          #section05 .service_slider .slider_item .pic img {
            -webkit-transform: rotate(3deg);
            transform: rotate(3deg); } }
    #section05 .service_slider .slick-counter {
      margin: 20px 0 0 460px;
      font-size: 13px; }
      @media only screen and (max-width: 768px) {
        #section05 .service_slider .slick-counter {
          margin: 20px 0 0 34px; } }
  #section05 .slider_navigation {
    margin: 30px 0 0 180px;
    position: relative;
    z-index: 10; }
    @media only screen and (max-width: 768px) {
      #section05 .slider_navigation {
        margin: 15px 0 0 0; } }
    #section05 .slider_navigation .slick-arrow {
      font-size: 15px;
      line-height: 40px;
      text-align: center;
      background: #eee;
      width: 40px;
      height: 40px;
      display: inline-block !important;
      transition: all 0.2s linear 0s; }
      @media only screen and (max-width: 768px) {
        #section05 .slider_navigation .slick-arrow {
          font-size: 14px;
          line-height: 36px;
          width: 36px;
          height: 36px; } }
      #section05 .slider_navigation .slick-arrow:hover {
        background: #ccc; }
      #section05 .slider_navigation .slick-arrow.slick-prev {
        order: 1; }
      #section05 .slider_navigation .slick-arrow.slick-next {
        order: 3; }
    #section05 .slider_navigation .slick-dots {
      margin: 0 8px;
      position: relative;
      overflow: hidden;
      order: 2; }
      @media only screen and (max-width: 768px) {
        #section05 .slider_navigation .slick-dots {
          margin: 0 6px; } }
      #section05 .slider_navigation .slick-dots li {
        float: left; }
        #section05 .slider_navigation .slick-dots li button {
          font-family: 'M PLUS 1p', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;
          font-size: 15px;
          text-align: center;
          line-height: 40px;
          background: #eee;
          border: none;
          border-radius: 0;
          width: 40px;
          height: 40px;
          margin: 0;
          padding: 0 5px;
          outline: none;
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          transition: all 0.2s linear 0s; }
          @media only screen and (max-width: 768px) {
            #section05 .slider_navigation .slick-dots li button {
              font-size: 14px;
              line-height: 36px;
              width: 36px;
              height: 36px; } }
          #section05 .slider_navigation .slick-dots li button::-moz-focus-inner {
            border: none; }
        #section05 .slider_navigation .slick-dots li.slick-active button {
          background: #ffff00; }
        #section05 .slider_navigation .slick-dots li:not(:last-child) {
          margin-right: 8px; }
          @media only screen and (max-width: 768px) {
            #section05 .slider_navigation .slick-dots li:not(:last-child) {
              margin-right: 6px; } }
        #section05 .slider_navigation .slick-dots li:not([class="slick-active"]):hover button {
          background: #ccc; }
  #section05 .btn_block {
    margin-top: 40px; }
    @media only screen and (max-width: 768px) {
      #section05 .btn_block {
        margin-top: 90%; } }

/*--------------------------
section06
---------------------------*/
#section06 {
  padding: 60px 0 100px;
  position: relative;
  z-index: 10; }
  @media only screen and (max-width: 768px) {
    #section06 {
      padding: 50px 0; } }
  #section06 .archives_content {
    margin: 60px 0; }
    @media only screen and (max-width: 768px) {
      #section06 .archives_content {
        margin: 30px 0; } }
  #section06 .archives_slider .slider_item .thumb {
    margin: 0 5px;
    display: block;
    background: #eee;
    height: 200px;
    position: relative;
    overflow: hidden; }
    @media only screen and (max-width: 768px) {
      #section06 .archives_slider .slider_item .thumb {
        margin: 0; } }
    #section06 .archives_slider .slider_item .thumb img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto; }
  #section06 .archives_slider .slider_item .titile {
    line-height: 1.4;
    margin-top: 10px; }
  #section06 .archives_slider .slick-dots {
    margin-top: 20px;
    display: flex !important;
    justify-content: center; }
    #section06 .archives_slider .slick-dots li button {
      color: transparent;
      line-height: 0;
      font-size: 0;
      border: 1px solid #b6b6b6;
      background: #b6b6b6;
      width: 15px;
      height: 15px;
      padding: 0;
      border-radius: 0;
      display: block;
      outline: none;
      cursor: pointer; }
      @media only screen and (max-width: 768px) {
        #section06 .archives_slider .slick-dots li button {
          width: 10px;
          height: 10px; } }
    #section06 .archives_slider .slick-dots li:not(:last-child) {
      margin-right: 10px; }
    #section06 .archives_slider .slick-dots li.slick-active button {
      background: #ffff00; }
  #section06 .archives_list {
    margin: 60px 0 20px; }
    #section06 .archives_list ul {
      flex-wrap: wrap; }
      #section06 .archives_list ul li {
        flex: 0 0 282px;
        max-width: 282px;
        margin: 0 14px 24px 0; }
        #section06 .archives_list ul li a {
          display: block; }
          #section06 .archives_list ul li a .thumb {
            background: #eee;
            height: 200px;
            position: relative;
            overflow: hidden; }
            #section06 .archives_list ul li a .thumb img {
              width: 100%;
              height: auto;
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              margin: auto;
              transition: all 0.8s linear 0s; }
        #section06 .archives_list ul li .titile {
          line-height: 1.4;
          margin-top: 10px; }
        #section06 .archives_list ul li:hover .thumb img {
          -webkit-transform: scale(1.2);
          transform: scale(1.2); }
        #section06 .archives_list ul li:nth-child(4n) {
          margin-right: 0; }


.header_nav {
  background: rgba(240,240,240,0.3);
  position: fixed;
  z-index: 100;
}


html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{
  margin:0;padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent
}
body{line-height:1;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
ul,li{list-style:none}
blockquote,q{quotes:none}
blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}
a{margin:0;padding:0;text-decoration:none;outline:none}
ins{background-color:#ff9;color:#000;text-decoration:none}
mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold}
del{text-decoration:line-through}
abbr[title],
dfn[title]{border-bottom:1px dotted;cursor:help}
table{border-collapse:collapse;border-spacing:0}
hr{display:block;height:1px;border:0;border-top:1px solid #cccccc;margin:1em 0;padding:0}
input,select{vertical-align:middle}.clearfix{*zoom:1}.clearfix:after{content:"";display:table;clear:both}.d_flex,#header .header_content,#header .header_content .nav_wrapper .gnavi>ul,#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner,#header .header_content .header_btn,#footer .row,#footer .row .nav_sns ul,#wanted_entry,#wanted_entry>div
.inner{display:flex}
@font-face{font-family:'fontello';src:url("/fonts/icon/fontello.eot?66616483");src:url("/fonts/icon/fontello.eot?66616483#iefix") format("embedded-opentype"),url("/fonts/icon/fontello.woff2?66616483") format("woff2"),url("/fonts/icon/fontello.woff?66616483") format("woff"),url("/fonts/icon/fontello.ttf?66616483") format("truetype"),url("/fonts/icon/fontello.svg?66616483#fontello") format("svg");font-weight:normal;font-style:normal}
[class^="icon-"]
:before,[class*=" icon-"]
:before{font-family:"fontello";font-style:normal;font-weight:normal;speak:none;display:inline-block;text-decoration:inherit;text-align:center;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
.icon-cancel:before{content:'\e800'}
.icon-globe:before{content:'\e801'}
.icon-down-dir:before{content:'\e802'}
.icon-up-dir:before{content:'\e803'}
.icon-plus:before{content:'\e804'}
.icon-minus:before{content:'\e805'}
.icon-users-1:before{content:'\e806'}
.icon-service01:before{content:'\e807'}
.icon-search:before{content:'\e808'}
.icon-arrow:before{content:'\e81b'}
.icon-contact:before{content:'\e81c'}
.icon-twitch:before{content:'\e81e'}
.icon-twitter:before{content:'\e81f'}
.icon-youtube:before{content:'\e820'}
.icon-niconico:before{content:'\e821'}
.icon-job_offer:before{content:'\e822'}
.icon-collaboration:before{content:'\e823'}.icon-merchandise:before{content:'\e824'}.icon-knowledge:before{content:'\e825'}.icon-event:before{content:'\e826'}.icon-character:before{content:'\e827'}.icon-community:before{content:'\e828'}.icon-rights_protection:before{content:'\e829'}.icon-flow01:before{content:'\e82a'}.icon-flow02:before{content:'\e82b'}.icon-flow03:before{content:'\e82c'}.icon-flow04:before{content:'\e82d'}.icon-line:before{content:'\e82e'}.icon-home:before{content:'\e82f'}.icon-handshake-o:before{content:'\e830'}.icon-service02:before{content:'\e831'}.icon-service03:before{content:'\e832'}.icon-service04:before{content:'\e833'}.icon-service05:before{content:'\e834'}.icon-service06:before{content:'\e835'}.icon-service07:before{content:'\e836'}.icon-service08:before{content:'\e837'}.icon-service09:before{content:'\e838'}.icon-service10:before{content:'\e839'}.icon-service11:before{content:'\e83a'}.icon-service12:before{content:'\e83b'}.icon-service14:before{content:'\e83d'}.icon-service13:before{content:'\e83e'}.icon-gplus:before{content:'\f0d5'}.icon-angle-left:before{content:'\f104'}.icon-angle-right:before{content:'\f105'}.icon-angle-up:before{content:'\f106'}.icon-angle-down:before{content:'\f107'}.icon-instagram:before{content:'\f16d'}.icon-facebook:before{content:'\f308'}*{box-sizing:border-box;-webkit-appearance:none}*:before,*:after{box-sizing:border-box;}html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;}html *{text-rendering:optimizeLegibility}body{color:#333;font-weight:400;font-size:16px;word-wrap:break-word;background:url(/image/common/bg_squares_01.jpg);}@media only screen and (max-width: 768px){body{font-size:14px;}}html[lang="ja"] body{font-family:'M PLUS 1p', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;}html[lang="en"] body{font-family:'Oswald', Helvetica, Arial, sans-serif;font-weight:700}a{color:#333}a[href^="tel:"]{pointer-events:none}@media only screen and (max-width: 768px){a[href^="tel:"]{pointer-events:all}}img{max-width:100%;height:auto;vertical-align:bottom;backface-visibility:hidden}img[src$=".svg"]{width:100%;max-width:100%}h1,h2,h3,h4,h5,h6{font-weight:400}p{line-height:1.8;text-align:justify;text-justify:inter-ideograph}strong,em{font-weight:700}sup{font-size:smaller;vertical-align:super}h1,h2,h3,h4,h5,h6,p,a,time,dl,input,select,textarea,label,button,figcaption{transform:rotate(0.05deg)}body{min-width:1200px;max-width:2560px}@media only screen and (max-width: 768px){body{min-width:inherit;max-width:inherit}}#contents{overflow:hidden}.container{position:relative;width:1170px;margin:0 auto}@media only screen and (max-width: 768px){.container{width:100%;margin:0;padding:0 15px}}.under_ie9{width:100%;height:100%;background:#000;position:fixed;z-index:1000;opacity:0.9;filter:alpha(opacity=90);-ms-filter:"alpha(opacity=90)"}.under_ie9 p{color:#fff;font-size:24px;line-height:1.7;text-align:center;display:block;width:800px;margin:200px auto 0px;z-index:10000;opacity:1;filter:alpha(opacity=100);-ms-filter:"alpha(opacity=100)";position:relative;z-index:1100}.under_ie9 p img{display:block;margin:0px auto 14px}#header{width:100%;position:fixed;top:0;left:0;z-index:1000;background-color:rgba(255,255,255,0.9);transition:background .2s linear 0s}@media only screen and (max-width: 1170px){#header{margin:0}}#header .header_content{width:1170px;margin:0 auto;height:80px;position:relative;align-items:center;transition:height .2s linear 0s}@media only screen and (max-width: 1170px){#header .header_content{width:100%;display:block;height:60px}}#header .header_content .btn_contact{align-self:flex-start}#header .header_content .header_logo{flex:0 0 120px;max-width:120px}@media only screen and (max-width: 1170px){#header .header_content .header_logo{display:none}}#header .header_content .header_logo img{width:100px;transition:width .2s linear 0s}#header .header_content .header_nav{margin-left:50px}#header .header_content .header_nav-sp{display:none}@media only screen and (max-width: 1170px){#header .header_content .header_nav-sp{position:relative;display:block}#header .header_content .header_nav-sp li{display:inline-block;cursor:pointer}#header .header_content .header_nav-sp li.is-open .btnSpMenu_content span{background-color:rgba(255,255,255,0)}#header .header_content .header_nav-sp li.is-open .btnSpMenu_content span:before{top:0;transform:rotate(-45deg);transition:transform .3s}#header .header_content .header_nav-sp li.is-open .btnSpMenu_content span:after{top:0;transform:rotate(45deg);transition:transform .3s}#header .header_content .header_nav-sp li .btnSpMenu_content{font-size:8px;padding:6px 10px;height:60px;position:relative;z-index:101}#header .header_content .header_nav-sp li .btnSpMenu_content .bar{display:block;width:100%;text-align:center;position:relative;height:40px;width:40px;margin:0 auto}#header .header_content .header_nav-sp li .btnSpMenu_content p{text-align:center;line-height:1}#header .header_content .header_nav-sp li .btnSpMenu_content span{position:absolute;display:block;width:100%;background-color:#000;top:20px;height:2px;transition:.2s ease-in-out}#header .header_content .header_nav-sp li .btnSpMenu_content span:after,#header .header_content .header_nav-sp li .btnSpMenu_content span:before{content:"";position:absolute;left:0;display:block;width:100%;height:2px;background-color:#000;transition:transform .35s}#header .header_content .header_nav-sp li .btnSpMenu_content span:before{transform:translateY(-10px)}#header .header_content .header_nav-sp li .btnSpMenu_content span:after{transform:translateY(10px)}#header .header_content .header_nav-sp li .btnSpMenu_lang{font-family:'Oswald', Helvetica, Arial, sans-serif;font-weight:700;font-size:8px;text-align:center;width:60px;height:60px;display:flex;justify-content:center;align-items:center;position:absolute;top:0;right:60px;z-index:100}#header .header_content .header_nav-sp li .btnSpMenu_lang i{font-size:24px;margin-bottom:4px;display:block}}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi{width:calc(100vw - 60px);height:100vh;position:fixed;position:absolute;top:-150vh;left:0;overflow:auto;transition:top .3s linear 0s;-webkit-overflow-scrolling:touch}#header .header_content .nav_wrapper .gnavi.is-open{top:0}}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul{background:#fff;height:100vh;padding-top:60px;margin:0;display:block}}#header .header_content .nav_wrapper .gnavi>ul>li{margin:0 5px}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li{margin:0}}#header .header_content .nav_wrapper .gnavi>ul>li>a{font-family:'Oswald', Helvetica, Arial, sans-serif;font-weight:700;letter-spacing:0.12em;padding:12px 25px;display:block;position:relative;transform:none}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li>a{font-size:14px;padding:15px}}#header .header_content .nav_wrapper .gnavi>ul>li>a span::before,#header .header_content .nav_wrapper .gnavi>ul>li>a span::after{content:"";width:100%;height:100%;display:block;position:absolute;top:0;left:0;opacity:0;transition:all .2s linear 0s}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li>a span::before,#header .header_content .nav_wrapper .gnavi>ul>li>a span::after{display:none}}#header .header_content .nav_wrapper .gnavi>ul>li>a span::before{background:#ff0;z-index:-1;transform:rotate(0)}#header .header_content .nav_wrapper .gnavi>ul>li>a span::after{background:#00deff;z-index:-2;transform:rotate(0)}#header .header_content .nav_wrapper .gnavi>ul>li:hover>a span::before,#header .header_content .nav_wrapper .gnavi>ul>li.is-current>a span::before{opacity:1;transform:rotate(-6deg)}#header .header_content .nav_wrapper .gnavi>ul>li:hover>a span::after{opacity:1;transform:rotate(6deg)}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li .has-child::after{font-family:"fontello";font-style:normal;font-weight:normal;speak:none;display:inline-block;text-decoration:inherit;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#000;font-size:28px;content:'\e804';position:absolute;top:50%;right:15px;transform:translateY(-50%)}}#header .header_content .nav_wrapper .gnavi>ul>li .has-child.is-open ~ .mega_menu{max-height:100vh;padding:90px 0 30px}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li .has-child.is-open ~ .mega_menu{padding:0}}#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu{background:rgba(255,255,255,0.9);width:100%;max-height:0;padding:0px;position:absolute;top:0;left:0;z-index:-3;overflow:hidden;transition:all .2s linear 0s}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu{background:#f4f4f4;position:static}}#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner{width:1170px;margin:0 auto}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner{width:100%;padding:15px;display:block}}#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner .pic{flex:0 0 250px;max-width:250px;margin-right:40px}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner .pic{max-width:180px;margin:0 0 20px 0}}#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner ul li a{font-size:14px;padding:10px 0;display:inline-block;transition:all .2s linear 0s}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner ul li a{font-size:13px;display:block}}#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner ul li a:hover{color:#00deff}#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner ul:first-of-type{margin-right:100px}@media only screen and (max-width: 1170px){#header .header_content .nav_wrapper .gnavi>ul>li .mega_menu .inner ul:first-of-type{margin-right:0}}#header .header_content .header_btn{font-family:'Oswald', Helvetica, Arial, sans-serif;font-weight:700;align-self:flex-start;align-items:center;position:absolute;top:0;right:0}@media only screen and (max-width: 1170px){#header .header_content .header_btn{display:block}}#header .header_content .header_btn .btn_language{margin-right:20px;position:relative}@media only screen and (max-width: 1170px){#header .header_content .header_btn .btn_language{position:fixed;padding:60px 0 0;top:0;left:-60%;bottom:0;width:60%;margin:0;background-color:#f8f8f8;z-index:100;transition:left .2s linear 0s}#header .header_content .header_btn .btn_language.is-open{left:0}}#header .header_content .header_btn .btn_language .language_txt{font-size:13px;text-align:center;padding:5px;width:70px;border-radius:99px;border:1px solid #333;transition:all .2s linear 0s;cursor:pointer}@media only screen and (max-width: 1170px){#header .header_content .header_btn .btn_language .language_txt{display:none}}#header .header_content .header_btn .btn_language .language_txt:after{content:'\e802';font-family:"fontello";display:inline-block;margin-left:3px}#header .header_content .header_btn .btn_language .language_txt.is-open:after{content:'\e803'}#header .header_content .header_btn .btn_language .language_txt.is-open ~ ul{max-height:100vh}#header .header_content .header_btn .btn_language .language_txt:hover,#header .header_content .header_btn .btn_language .language_txt.is-open{background:#ff0}#header .header_content .header_btn .btn_language ul{transition:max-height .5s;position:absolute;z-index:10000;top:auto;right:0;width:100px;max-height:0;overflow:hidden;background:#e9e9e9}@media only screen and (max-width: 1170px){#header .header_content .header_btn .btn_language ul{width:100%}}#header .header_content .header_btn .btn_language ul li:not(:last-child){border-bottom:1px solid #fff}#header .header_content .header_btn .btn_language ul li a{color:#333;font-size:12px;text-align:center;padding:6px 5px;display:block;transition:all 0.5s}#header .header_content .header_btn .btn_language ul li a:hover{background:#ff0}@media only screen and (max-width: 1170px){#header .header_content .header_btn .btn_language ul{display:block;max-height:inherit;overflow:inherit;border-right:none}#header .header_content .header_btn .btn_language ul li{display:block}#header .header_content .header_btn .btn_language ul li a{display:block;padding:15px 10px}}#header .header_content .header_btn .btn_contact{color:#fff;font-size:14px;letter-spacing:0.1em;text-align:center;background:#333;padding:16px 30px;display:inline-block;transition:all .2s linear 0s}@media only screen and (max-width: 1170px){#header .header_content .header_btn .btn_contact{font-size:8px;text-align:center;width:60px;height:60px;display:flex;justify-content:center;align-items:center;position:absolute;top:0;right:0;z-index:100}}#header .header_content .header_btn .btn_contact i{display:none}@media only screen and (max-width: 1170px){#header .header_content .header_btn .btn_contact i{font-size:24px;margin-bottom:4px;display:block}}#header .header_content .header_btn .btn_contact:hover{color:#333;background:#ff0}#header.is-sticky{background:rgba(255,255,255,0.9)}@media only screen and (min-width: 1171px){#header.is-sticky .header_content{height:64px}#header.is-sticky .header_content .header_logo img{width:80px}}.header_overlay{position:fixed;z-index:-1;top:0;left:0;display:none;width:100%;height:100%;background-color:rgba(0,0,0,0.7)}body.is-open .header_overlay{display:block}#footer{padding:40px 0 20px}@media only screen and (max-width: 768px){#footer{padding:30px 0 15px}}#footer .row{justify-content:space-between;align-items:center}@media only screen and (max-width: 768px){#footer .row{text-align:center;display:block}}#footer .row .logo{display:inline-block}#footer .row .logo img{width:130px}@media only screen and (max-width: 768px){#footer .row .logo img{width:120px}}#footer .row .nav_sns{padding-top:20px}@media only screen and (max-width: 768px){#footer .row .nav_sns{padding-top:15px}}#footer .row .nav_sns ul{align-items:center}@media only screen and (max-width: 768px){#footer .row .nav_sns ul{justify-content:center}}#footer .row .nav_sns ul li a{display:block}#footer .row .nav_sns ul li a img{transition:opacity .2s linear 0s}#footer .row .nav_sns ul li.twitter img{width:30px}#footer .row .nav_sns ul li.youtube img{width:35px}#footer .row .nav_sns ul li.instagram img{width:25px}#footer .row .nav_sns ul li:not(:last-child){margin-right:20px}#footer .row .nav_sns ul li:hover img{opacity:0.6}#footer .copyright{font-size:11px;margin-top:4px;display:block}@media only screen and (max-width: 768px){#footer .copyright{text-align:center;margin-top:20px}}.badge{width:220px;height:220px;display:block;border-radius:100%;position:fixed;bottom:100px;right:15px;background-repeat:no-repeat;background-position:center;background-size:cover;overflow:hidden;font-size:0;text-indent:-9999px;transition:0.4s;box-shadow:0px 0px 15px 4px rgba(0,0,0,0.3);z-index:100}@media only screen and (min-width: 769px){.badge:hover{opacity:0.7}}@media only screen and (max-width: 768px){.badge{width:80px;height:80px;bottom:15px;right:60px}}#page_top{font-size:40px;line-height:46px;text-align:center;width:50px;height:50px;border-radius:50%;position:fixed;bottom:30px;right:30px;z-index:999;transition:all .2s linear 0s}@media only screen and (max-width: 768px){#page_top{right:3%}}#page_top:before{font-family:"fontello";font-style:normal;font-weight:normal;speak:none;display:inline-block;text-decoration:inherit;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:'\f106'}#page_top:hover{background:#ff0}@media only screen and (max-width: 768px){#wanted_entry{display:block;margin-top:-60px;padding-top:60px}}#wanted_entry>div{width:100%}@media only screen and (max-width: 768px){#wanted_entry>div{max-width:inherit}}#wanted_entry>div .inner{color:#fff;text-align:center;height:540px;padding:0 20px;justify-content:center;align-items:center;flex-flow:column}@media only screen and (max-width: 768px){#wanted_entry>div .inner{width:100%;height:auto;padding:40px 0;display:block}}#wanted_entry>div .holder{width:100%}@media only screen and (max-width: 768px){#wanted_entry>div .holder{padding:0 15px}}#wanted_entry>div .h{font-family:'Oswald', Helvetica, Arial, sans-serif;font-weight:700;font-size:40px;font-weight:700;letter-spacing:0.5em}@media only screen and (max-width: 768px){#wanted_entry>div .h{font-size:34px;letter-spacing:0.35em}}#wanted_entry>div p{font-size:18px;text-align:center;margin:50px 0}@media only screen and (max-width: 768px){#wanted_entry>div p{font-size:14px;margin:20px 0}}#wanted_entry .wanted{background:url(/image/common/bg_wanted_01.jpg) center center/cover no-repeat}#wanted_entry .wanted .inner{float:right}@media only screen and (max-width: 768px){#wanted_entry .wanted .inner{float:none}}#wanted_entry .entry{background:url(/image/common/bg_entry_01.jpg) center center/cover no-repeat}#contact_us{padding:60px 0 40px}@media only screen and (max-width: 768px){#contact_us{padding:40px 0 20px}}#contact_us .lead{font-size:16px;font-weight:700;text-align:center;margin:60px 0 20px}@media only screen and (max-width: 768px){#contact_us .lead{font-size:14px;margin:30px 0 15px}}#contact_us .btn_block{text-align:center}#contact_us .btn_block .btn_primary{min-width:500px}@media only screen and (max-width: 768px){#contact_us .btn_block .btn_primary{min-width:80%}}#staff_form{padding:60px 0 40px;background-color:#eee}@media only screen and (max-width: 768px){#staff_form{padding:40px 0 20px}}#staff_form .lead{font-size:16px;font-weight:700;text-align:center;margin:60px 0 20px}@media only screen and (max-width: 768px){#staff_form .lead{font-size:14px;margin:30px 0 15px}}#staff_form .btn_block{text-align:center}#staff_form .btn_block .btn_primary{min-width:500px}@media only screen and (max-width: 768px){#staff_form .btn_block .btn_primary{min-width:80%}}.heading_sec{text-align:center}.heading_sec span{display:block}.heading_sec span.en{font-size:50px;letter-spacing:0.4em;margin-bottom:20px}@media only screen and (max-width: 768px){.heading_sec span.en{font-size:34px;letter-spacing:0.35em;margin-bottom:12px}}.heading_sec span.ja{font-family:'M PLUS 1p', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', Meiryo, メイリオ, Osaka, 'MS PGothic', arial, helvetica, sans-serif;font-weight:700}.btn_block{text-align:center}.btn_primary{font-size:14px;font-weight:700;text-align:center;background:#fff;border:1px solid #b5b5b5;max-width:100%;min-width:160px;padding:22px 10px;display:inline-block;position:relative;transition:color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s}@media only screen and (max-width: 768px){.btn_primary{min-width:150px;padding:18px 10px}}.btn_primary span{position:relative}.btn_primary::before,.btn_primary::after{display:block;position:absolute}.btn_primary::before{background:#333;width:0%;height:100%;top:0;right:0;content:"";transition:width 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s}.btn_primary::after{font-family:"fontello";font-style:normal;font-weight:normal;speak:none;display:inline-block;text-decoration:inherit;text-align:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"\e81b";font-size:10px;top:50%;right:-30px;transform:translate(0, -50%);transition:all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;}.btn_primary:hover{color:#fff}.btn_primary:hover::before{width:100%;left:0;right:auto}.btn_primary:hover::after{color:#333;opacity:0;transform:translate(-50%, -50%)}.btn_primary_yellow{background:#ff0;border:none;}.btn_primary_yellow::after{right:auto;left:-30px}.btn_primary_yellow:hover::after{transform:translate(50%, -50%)}.btn_primary_transparent{color:#fff;border-color:#fff;background:transparent}.btn_primary_transparent::before{background:#fff}.btn_primary_transparent:hover{color:#333}.btn_primary_transparent:hover::after{color:#fff}.visible-sp{display:none !important}@media only screen and (max-width: 768px){.visible-sp{display:block !important}}@media only screen and (max-width: 768px){.hidden-sp{display:none !important}}.en{font-family:'Oswald', Helvetica, Arial, sans-serif;font-weight:700}.fadein_top{opacity:0;transform:translate(0, 40px);transition:all 1s}@media only screen and (max-width: 768px){.fadein_top{transform:translate(0, 30px)}}.fadein_top.scrollin{opacity:1;transform:translate(0, 0);}h1.fadein_top,h2.fadein_top,h3.fadein_top,h4.fadein_top,h5.fadein_top,h6.fadein_top,p.fadein_top,a.fadein_top{transform:translate(0, 40px) rotate(0.05deg)}@media only screen and (max-width: 768px){h1.fadein_top,h2.fadein_top,h3.fadein_top,h4.fadein_top,h5.fadein_top,h6.fadein_top,p.fadein_top,a.fadein_top{transform:translate(0, 30px) rotate(0.05deg)}}h1.fadein_top.scrollin,h2.fadein_top.scrollin,h3.fadein_top.scrollin,h4.fadein_top.scrollin,h5.fadein_top.scrollin,h6.fadein_top.scrollin,p.fadein_top.scrollin,a.fadein_top.scrollin{transform:translate(0, 0) rotate(0.05deg)}.fadein_bottom{opacity:0;transform:translate(0, -40px);transition:all 1s}@media only screen and (max-width: 768px){.fadein_bottom{transform:translate(0, -30px)}}.fadein_bottom.scrollin{opacity:1;transform:translate(0, 0)}.fadein_right{opacity:0;transform:translate(40px, 0);transition:all 1s}@media only screen and (max-width: 768px){.fadein_right{transform:translate(30px, 0)}}.fadein_right.scrollin{opacity:1;transform:translate(0, 0)}
</style>
