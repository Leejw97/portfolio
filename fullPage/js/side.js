///////////// 로딩구역 //////////////////////////////////
$(function () { ////// jQB ///////////////////////////////

  // a요소 기본이동막기 ///////
  // $("a").click(function (e) {
  //   e.preventDefault();
  // }); /////////// click ////////////

  /************************************* 
      GNB li요소 클릭시 페이지 이동하기
      + 인디케이터 li요소 클릭시 기능동일!
  *************************************/
  // 대상: .gnb li + .indic li
  $(".gnb li,.indic li").click(function (e) { // e - 이벤트전달값

    // 기본기능막기 : li의 이동기능막기 불필요!
    // e.preventDefault();

    // 1. 클릭된 li요소의 순번읽어오기
    // $(this) -> 클릭된 li요소 자신!
    let idx = $(this).index();
    // index() 요소(li)의 순번
    console.log("클릭된 li순번:", idx);

    // 2. 클릭된 순번을 전역 페이지변수 pno에 넣어 일치시키기
    pno = idx;

    //***************************
    // 3. 페이지번호를 높이값에 곱하여 스크롤 이동하기
    // 이동높이값
    let pos = $(window).height() * pno;
    // console.log("이동값:", pos);
    // 이동애니메이션
    $("html,body").animate({
      scrollTop: pos + "px"
    }, dur_sc, easing_sc);
    // dur_sc 상수에 공통시간설정

    // 4. 클릭시 .gnb+.indic 의 li에 클래스 on넣기
    $(".gnb li").eq(pno).addClass("on")
      // $(gnb전체li).eq(해당순번).클래스넣기("on")
      .siblings().removeClass("on");
    // .다른형제들().클래스제거("on")

    $(".indic li").eq(pno).addClass("on")
      // $(indic전체li).eq(해당순번).클래스넣기("on")
      .siblings().removeClass("on");
    // .다른형제들().클래스제거("on")


  }); /////////// click ////////////


}); /////////////////// jQB ////////////////////////////
////////////////////////////////////////////////////////