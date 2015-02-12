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

/* Variables | @vars
   ========================================================================== */

var resize = function() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    // scale = WIDTH / 1440;
};
resize();
$(window).on('resize', resize);

/* Platform Detection | @detect
   ========================================================================== */

window.mobilecheck = function() {
  var check = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

/* Init ScrollMagic | @sm-init
   ========================================================================== */

// only init if not mobile/tablet
if (window.mobilecheck() === false) {

// init controller
var controller = new ScrollMagic({
  // globalSceneOptions: {
  //   triggerHook: "onLeave"
  // }
});

/* Scene 1 | @s1
   ========================================================================== */

var scene1_bgAnimation = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-1-scale-wrapper', 20, {
      y: '-10%'
    }),
    TweenMax.to('.grc-section-2-bg', 10, {
      backgroundColor: '#001d23'
    }),
    TweenMax.to('.grc-section-2-bg-stars', 5, {
      opacity: 1
    })
  ]);

var scene1_animation = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-1-book-cover', 0.5, {
      rotationY: '-90'
    }),
    TweenMax.to('.grc-section-1-book-cover-back', 0.5, {
      rotationY: '-90'
    })
  ])
  .add([
    TweenMax.to('.grc-section-1-book-cover', 0.01, {
      opacity: '0'
    })
  ])
  .add([
    TweenMax.to('.grc-section-1-book-cover-back', 0.5, {
      rotationY: '-180'
    })
  ])
  .add([
    TweenMax.to('.grc-section-1-scale-wrapper', 0.5, {
      scale: 5,
      x: '20%',
      opacity: 0
    })
  ])

  // Scene 2 elements
  .add([
    TweenMax.to('.grc-section-2-character', 5, {
      left: '100%'
    })
  ]);

var scene1 = new ScrollScene({
  duration: 3000
})
  .setPin(".grc-section-1")
  .setTween([scene1_animation, scene1_bgAnimation]);

/* Scene 2 | @s2
   ========================================================================== */

TweenMax.set('.grc-section-2', {
  position: 'fixed',
  top: '0',
  'z-index': '-1'
});

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

} // end mobilecheck