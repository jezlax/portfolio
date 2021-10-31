$(function () {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "pip install cjez.human<br/>" +
        "><span class='caret'>$</span> skills: full stack data scientist... data eng, machine learning, data viz, web dev<br/> ^100" +
        "><span class='caret'>$</span> job: Director of Analytics at <a href='https://www.austinfc.com/'>Austin FC</a><br/> ^100" +
        "><span class='caret'>$</span> hobbies: wine, poker, golf, travel<br/> ^300" +
        "><span class='caret'>$</span> alias: cjez <br/>" +
        "><span class='caret'>$</span> highlight:  <a href='https://www.kaggle.com/c/mens-machine-learning-competition-2019'>Kaggle silver medalist</a><br/>",
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
