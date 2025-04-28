$(document).ready(function(){//start
  //#allmap
  //#allmap 이 사라짐
  $("#allmap").hide();
  //.all-open을 클릭하면 #allmap이 나옴
  $(".all-open").click(function(){
    $("#allmap").show();
  });
  //.a-x을 클릭하면 #allmap이 사라짐
  $(".a-x").click(function(){
    $("#allmap").hide();
  });

  //header .gnb .depth2,.depth2-bg 숨기기
  $("header .gnb .depth2, header .depth2-bg").hide();
  //header에 마우스 오버하면 active 추가 / 삭제
  $("header").mouseenter(function(){
    $(this).addClass("active")
  });
  $("header").mouseleave(function(){
    $(this).removeClass("active")
  });
  //header .gnb > li에 마우스 오버하면 .depth2,.depth2-bg 나오기
  $("header .gnb > li").mouseenter(function(){
    $(this).children(".depth2").stop().fadeIn();
    $("header .depth2-bg").stop().show();
  });
  $("header .gnb > li").mouseleave(function(){
    $(this).children(".depth2").stop().fadeOut();
    $("header .depth2-bg").stop().hide();
  });
  
  //.mgnb-wrap 
  //.mgnb-open을 클릭하면 #mgnb-wrap 오른쪽에서 나옴
  $(".mgnb-open").click(function(){
    $(".mgnb-wrap"). animate({"right" : "0"})
  });
  //.mgnb-x을 클릭하면 .mgnb-wrap  오른쪽으로 사라짐
  $(".mgnb-x").click(function(){
    $(".mgnb-wrap"). animate({"right" : "-100%"})
  });

  //.mdepth2 숨기기
  $(".mdepth2").hide();
  // //.mgnb > li를 클릭하면  그것의 자식이 슬라이드 다운
  // // 나머지 자식은 슬라이드 업
  $(".mgnb > li").click(function(){
    if($(this).children(".mdepth2").css("display") == "none"){
    $(this).children(".mdepth2").stop().slideDown();
    $(this).siblings().children(".mdepth2").stop().slideUp();
    }else{
    $(this).children(".mdepth2").stop().slideUp();
    }
  });

  //#main-visual
  const mv = new Swiper(".mv", {
    // 옵션(parameter) 추가
    autoplay: {
      // 자동슬라이드
      delay: 3500, // 슬라이드 한장이 머무르는 시간 5000 = 5초
      disableOnInteraction: false,
    },
    speed: 1000, // 슬라이드 넘어가는 속도
    navigation: {
      nextEl: ".swiper-button-next", // 다음버튼
      prevEl: ".swiper-button-prev", // 이전버튼
    },
    pagination: {
      el: ".swiper-pagination", // 슬라이드 페이지 버튼
      type: "fraction", // 'bullets' 'fraction' 'progressbar'
      clickable: true, // 클릭가능
    },
    loop: true, // 슬라이드 반복 (centeredSlides 사용안됨)
  });

 //슬라이드 재생 정지
  //.mb-play 숨기기
  $(".mb-play").hide();
  //.mb-pause 누르면 재생 정지 +.mb-pause 숨고 + .mb-play 나오기
  $(".mb-pause").click(function(){
    mv.autoplay.stop();
    $(".mb-play").show();
    $(".mb-pause").hide();
  });
  //.mb-play 누르면 재생 + .mb-play 숨고 + .mb-pause 나오기
  $(".mb-play").click(function(){
    mv.autoplay.start();
    $(".mb-pause").show();
    $(".mb-play").hide();
  });

  //menu_list
  const menu_list = new Swiper(".menu-list", {
    // 옵션(parameter) 추가
    autoplay: {
      // 자동슬라이드
      delay: 2000, // 슬라이드 한장이 머무르는 시간 5000 = 5초
      disableOnInteraction: false,
    },
    speed: 1000, // 슬라이드 넘어가는 속도
    navigation: {
      nextEl: ".swiper-button-next", // 다음버튼
      prevEl: ".swiper-button-prev", // 이전버튼
    },
    pagination: {
      el: ".swiper-pagination", // 슬라이드 페이지 버튼
      type: "progressbar", // 'bullets' 'fraction' 'progressbar'
      clickable: true, // 클릭가능
    },
    loop: true, // 슬라이드 반복 (centeredSlides 사용안됨)
    slidesPerView: 2, // (기본 모바일)가로 한줄에 보이는 슬라이드 갯수
     // 슬라이드 간의 거리 px
    centeredSlides: true, // 첫번째 슬라이드가 정중앙에
    breakpoints: { // 반응형 슬라이드
      1000: {
        // 1000px 이상
        slidesPerView: 4,
      },
    },
   
  });
   
  $(".ml-play").hide();
  //.ml-pause 누르면 재생 정지 +.ml-pause 숨고 + .ml-play 나오기
  $(".ml-pause").click(function(){
    menu_list.autoplay.stop();
    $(".ml-play").show();
    $(".ml-pause").hide();
  });
  //.ml-play 누르면 재생 + .ml-play 숨고 + .ml-pause 나오기
  $(".ml-play").click(function(){
    menu_list.autoplay.start();
    $(".ml-pause").show();
    $(".ml-play").hide();
  });
  //#new tab menu
  //#new .new-box .new-img ul li에서 첫번째 말고 숨기
  $("#new .new-box .new-img ul li").not(":first").hide();

  //#new .new-box .new-txt ul li 를 클릭하면 다음과 같은 일이 일어남
  // 1. 선택한 li만 active가 붙고 나머지는 active가 없어져야함
  // 2. 선택한 li의 순번을 담을 변수를 하난 생성
  // 3. #new .new-box .new-img ul li 중에 순번과 동일한 요소만 보여주고 나머지는 숨김
  $("#new .new-box .new-txt ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    let aa = $(this).index();
    $("#new .new-box .new-img ul li").eq(aa).fadeIn().siblings().hide();
  });

  //아코디언배너
  $("#happy ul li").eq(0).addClass("active");
  $("#happy ul li").mouseenter(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
});//end