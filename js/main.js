/**
 * CONTENTS
 *
 * SETUP
 * XX.........................................@XX | Description.
 * YY.........................................@YY | Description.
 *
 */

/**
 * Use @tag to jump to sections
 */

/* ==========================================================================
   Setup
   ========================================================================== */

/* XX | @XX
   ========================================================================== */



var windowHeight = $(window).height();

// init controller
var controller = new ScrollMagic({
  // globalSceneOptions: {
  //   triggerHook: "onLeave"
  // }
});

/**
 * scene1
 *
 */
var scene1_animateBg = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-1-bg', 1, {
      scale: '2'
    })
  ]);

var scene1_animateCover = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-1-book-cover', 1, {
      rotationY: '180',
      y: '-38',
      x: '-10'
    }),
    TweenMax.to('.grc-section-1-book-cover-shadow', 0.5, {
      width: '0%'
    }),
    TweenMax.to('.grc-section-1-book-cover-container', 1, {
      scale: '2'
    })
  ]);

var scene1 = new ScrollScene({duration: 2000})
  .setPin(".grc-section-1")
  .setTween([scene1_animateBg, scene1_animateCover]);



var scene2 = new ScrollScene();

var scene3 = new ScrollScene({
  duration: 2000,
  triggerElement: '.grc-section-3',
  triggerHook: '0',
  // reverse: true
})
  .setPin(".grc-section-3");

var scene4 = new ScrollScene();


// Add Scenes to ScrollMagic Controller
controller.addScene([
  scene1,
  scene2,
  scene3,
  scene4
]);













$('#clip-triangle, #svg-defs').on('click', function() {
  $('#clip-triangle circle').css({
    'transform': 'scale(2)'
  });
  console.log("tweenin");
});
