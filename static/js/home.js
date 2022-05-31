$(function () {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "pip install cjez.human<br/>" +
        "><span class='caret'>$</span> skills: full stack data scientist... data eng, machine learning, data viz, web dev<br/> ^100" +
        "><span class='caret'>$</span> job: Sporting Consultant: NBA, MLS, PGA Tour<br/> ^100" +
        "><span class='caret'>$</span> hobbies: wine, poker, golf, travel, F1<br/> ^300" +
        "><span class='caret'>$</span> alias: cjez <br/>" +
        "><span class='caret'>$</span> tech stack: python, snowflake, flask, svelte, AWS<br/>",
    ],
    showCursor: true,
    cursorChar: "_",
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $(".message form").hide(),
    onStop: $(".message form").show(),
    onTypingResumed: $(".message form").hide(),
    onTypingPaused: $(".message form").show(),
    onComplete: $(".message form").show(),
    onStringTyped: function (pos, self) {
      $(".message form").show();
    },
  });
  $(".message form").hide();
});
