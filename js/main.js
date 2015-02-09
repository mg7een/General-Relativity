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

var resize = function() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    // scale = WIDTH / 1440;
};

resize();

$(window).on('resize', resize);

// init controller
var controller = new ScrollMagic({
  // globalSceneOptions: {
  //   triggerHook: "onLeave"
  // }
});

/* Scene 1 | @s1
   ========================================================================== */

var scene1_animation = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-1-book-cover', 0.5, {
      rotationY: '90'
    }),
    TweenMax.to('.grc-section-1-book-cover-back', 0.5, {
      rotationY: '90'
    }),
    TweenMax.to('.grc-section-1-book-cover-top-shadow', 0.5, {
      rotationY: '90',
      opacity: '0.5'
    })
  ])
  .add([
    TweenMax.to('.grc-section-1-book-cover', 0.01, {
      opacity: '0'
    })
  ])
  .add([
    TweenMax.to('.grc-section-1-book-cover-back', 0.5, {
      rotationY: '180'
    }),
    TweenMax.to('.grc-section-1-book-cover-shadow', 0.5, {
      width: '0%'
    })
  ])
  .add([
    TweenMax.to('.grc-section-1-book-cover-container', 1, {
      scale: '5',
      x: '-62px'
    }),
    TweenMax.to('.grc-section-1-bg', 1, {
      scale: '5',
      x: '200px'
    }),
    TweenMax.to('.grc-section-1-book-cover-container', 1, {
      delay: 1,
      opacity: 0
    }),
    TweenMax.to('.grc-section-1-bg', 1, {
      delay: 1,
      opacity: 0
    })
  ])
  .add([
    TweenMax.to('.grc-section-2-character', 3, {
      left: '120%'
    })
  ]);

var scene1 = new ScrollScene({
  duration: 1000
})
  .setPin(".grc-section-1")
  .setTween([scene1_animation]);

/* Scene 2 | @s2
   ========================================================================== */

TweenMax.set('.grc-section-2', {
  position: 'fixed',
  top: '0',
  'z-index': '-1'
});

var scene2_animation = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-2', 1, {
      // position: 'absolute',
      // top: '',
      // 'z-index': ''
    })
  ]);

var scene2 = new ScrollScene({
  duration: 1000,
  triggerElement: '.grc-section-2',
  triggerHook: '0'
});

/* Scene 3 | @s3
   ========================================================================== */

var _veh1 = $('.grc-section-3-vehicle-1');
var _panelRight = $('.grc-section-3-panel-right');

var scene3_animation = TweenMax.to(_veh1, 1, {
  x: '300',
  repeat: -1,
  // onStart: function() {
  // }
});
scene3_animation.pause();

var scene3 = new ScrollScene({
  duration: 1000,
  triggerElement: '.grc-section-3',
  triggerHook: '0'
});

scene3.on('enter', function() {
  scene3_animation.play();
  $(_panelRight).addClass("animated");
});

// TODO: find fix for end/leave event
scene3.on('leave', function(ev) {
  scene3_animation.pause();
  $(_panelRight).removeClass("animated");
});

/* Scene 4 | @s4
   ========================================================================== */

TweenMax.set('.grc-section-4-bg', {
  scale: 4
});

var scene4_animation = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-4-bg', 1, {
      scale: 1
    })
  ]);

var scene4 = new ScrollScene({
  duration: 1000,
  triggerElement: '.grc-section-4',
  triggerHook: '0'
})
  .setTween(scene4_animation)
  .setPin('.grc-section-4');

scene4.on('enter', function(ev) {
  // unset fixed position on section 2 if scrolling downwards
  if (ev.scrollDirection == "FORWARD") {
    TweenMax.set('.grc-section-2', {
      position: 'absolute'
    });
  }
});

scene4.on('leave', function(ev) {
  // re-set fixed position on section 2 if scrolling upwards
  if (ev.scrollDirection == "REVERSE") {
    TweenMax.set('.grc-section-2', {
      position: 'fixed'
    });
  }
});

/* Scene 5 | @s5
   ========================================================================== */

var scene5 = new ScrollScene();

/* Scene 6 | @s6
   ========================================================================== */

var _roofLine = $('.grc-section-6-roof-line');

// var scene6_animation = TweenMax.to(_roofLine, 1, {
//   x: '10%'
// });

// scene6_animation.pause();

var scene6 = new ScrollScene({
  duration: 1000,
  triggerElement: '.grc-section-6',
  triggerHook: '0'
})
  // .setTween(scene6_animation)
  .setPin('.grc-section-6');

scene6.on('enter', function() {
  $(_roofLine).addClass("animated");
  // console.log("s6 enter");
});

scene6.on('leave', function(ev) {
  if (ev.scrollDirection == "REVERSE") $(_roofLine).removeClass("animated");
  // console.log("s6 leave");
});

/* Scene 7 | @s7
   ========================================================================== */

var _cosmos = $('.grc-section-7-cosmos');
var _s7Svg = $('#s7-svg');
var _cosmosWidth = 2703; // hardcoded width of cosmos img

var scene7_animation = new TimelineMax()
  .add([
    TweenMax.to(_cosmos, 1, {
      x: '-' + (_cosmosWidth - windowWidth)
    }),
    TweenMax.to(_s7Svg, 1, {
      x: '-100%'
    })
  ]);

/* SVG */

function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $word = $("path#word");
var $dot = $("path#dot");
pathPrepare($word);
pathPrepare($dot);

var scene7_svgtween = new TimelineMax()
  .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
  .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
  .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);     // change color during the whole thing

var scene7 = new ScrollScene({
  duration: 2000,
  triggerElement: '.grc-section-7',
  triggerHook: '0'
})
  .setPin('.grc-section-7')
  .setTween([scene7_animation, scene7_svgtween]);

/* Controller | @controller
   ========================================================================== */

// Add Scenes to ScrollMagic Controller
controller.addScene([
  scene1,
  scene2,
  scene3,
  scene4,
  scene5,
  scene6,
  scene7
]);