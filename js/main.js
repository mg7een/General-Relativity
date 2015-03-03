/**
 * CONTENTS
 *
 * SETUP
 * Variables..................................@vars | General project variables.
 * Platform Detection.........................@detect | Platform detection.
 * Social.....................................@social | Social sharing functions.
 * Init ScrollMagic...........................@sm-init | Initialize scroll magic.
 *
 * SCENES
 * Scene Loader...............................@load | Intro load scene.
 * Scene 1....................................@s1 | Scene 1.
 * Scene 2....................................@s2 | Scene 2.
 * Scene 3....................................@s3 | Scene 3.
 * Scene 4....................................@s4 | Scene 4.
 * Scene 5....................................@s5 | Scene 5.
 * Scene 6....................................@s6 | Scene 6.
 * Scene 7....................................@s7 | Scene 7.
 * Scene End..................................@end | Scene 1.
 * Controller.................................@controller | Controller for managing scenes.
 *
 */

/**
 * Use @tag to jump to sections
 */

/* ==========================================================================
   Setup
   ========================================================================== */

/**
 * set to page top on load
 */

window.onbeforeunload = function(){
  window.scrollTo(0,0);
};

/* Variables | @vars
   ========================================================================== */

var resize = function() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    // scale = WIDTH / 1440;
};
resize();
$(window).on('resize', resize);

var scene1_trigger      = false,
    scene2_trigger      = false,
    scene3_trigger      = false,
    scene4_trigger      = false,
    scene5_trigger      = false,
    scene6_trigger      = false,
    scene7_trigger      = false,
    scene8_trigger      = false,
    sceneend_trigger    = false;

// scroll
var windowScrollable = false;
var $window = $(window);
var scrollTime = 0.6;
var scrollDistance = 200;


/* Platform Detection | @detect
   ========================================================================== */

window.mobilecheck = function() {
  var check = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

if (navigator.appVersion.indexOf("Win")!=-1) {
  $('html').addClass("ie");
}

/* Social | @social
   ========================================================================== */

// fallback for browsers that do not support window.location.origin
if (!window.location.origin) { window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: ''); }

var siteUrl = window.location.host;

var shareAccount = "sciencemagazine";
var shareUrl = window.location.origin + window.location.pathname;
var shareString = "Text. Via @" + shareAccount;
var shareStringWithHash = "Text. #Hash Via @" + shareAccount;

/* Functions
   ========================================================================== */

/* Facebook */
function shareFb() {

  if (window.mobilecheck()) {
    var shareUrl = "https://www.facebook.com/dialog/share_open_graph?" +
      "app_id=355911134593287" +
      "&display=page" +
      "&action_type=og.likes" +
      "&action_properties=%7B%22object%22%3A%22http%3A%2F%2Fwww.sciencemag.org%2Fsite%2Fspecial%2Fgeneralrelativity%22%7D" +
      "&redirect_uri=http%3A%2F%2Fwww.sciencemag.org%2Fsite%2Fspecial%2Fgeneralrelativity";
    window.open(shareUrl);
  } else {
    FB.ui({
      method: 'share',
      name: 'General Relativity 100th Anniversary',
      href: 'http://www.sciencemag.org/site/special/generalrelativity'
    });
  }

}

/* Twitter */
function shareTwitter() {
  // twitter share prompt
  window.open('https://twitter.com/intent/tweet?url='+shareUrl+'&text='+shareString+'&hashtags=GeneralRelativity','','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=550,height=420');
}

/* Mail */
function shareMail() {
  // mail share prompt
  document.location.href = "mailto:?subject=" + shareStringWithHash + "&body=" + shareUrl;
}

/* Share Buttons */

$('#grc-fb-share').on('click', function() {
  shareFb();
});

$('#grc-tw-share').on('click', function() {
  shareTwitter();
});

/* GSAP Scroll | @scroll
   ========================================================================== */

$(function(){

  if (windowScrollable) {
    $window.on("mousewheel DOMMouseScroll", function(event){

      event.preventDefault();

      var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
      var scrollTop = $window.scrollTop();
      var finalScroll = scrollTop - parseInt(delta*scrollDistance);

      TweenMax.to($window, scrollTime, {
        scrollTo : { y: finalScroll, autoKill:true },
          ease: Power1.easeOut,
          overwrite: 5
        });

    });
  }
});

/* Init ScrollMagic | @sm-init
   ========================================================================== */

/**
 * only init if not mobile/tablet
 * beginning of desktop code
 */
if (window.mobilecheck() === false) {

// init controller
var controller = new ScrollMagic();


/* ==========================================================================
   Scenes
   ========================================================================== */

/* Scene Loader | @load
   ========================================================================== */

/**
 * global toggle sound
 */

var buzzPlaying = false;

$('#grc-toggle-sound').show();
$('#grc-toggle-sound').on('click', function() {

  // toggle sound and play or stop corresponding to value
  buzzPlaying = !buzzPlaying;
  if (!buzzPlaying) { buzz.all().stop(); }
  else { s1Sound.play().loop(); }

  // swap text
  if ($(this).find('span').html() == "On") {
    $(this).find('span').html("Off");
  } else {
    $(this).find('span').html("On");
  }
});

/**
 * first load trigger first analytics call
 */

$(document).trigger('setScene', {
  scene: 'Loader Screen Complete',
});

/* Scene 1 | @s1
   ========================================================================== */

/* Buzz */

buzz.defaults.formats = [ 'ogg', 'mp3' ];
var s1Sound = new buzz.sound('sounds/opener-loop');

if (buzzPlaying) { s1Sound.play().loop(); }

/* Scene 1 Variables */

var s1SpriteWidth = 825 * 25;
var s1SteppedEase = new SteppedEase(25);

// scene 2 is under scene 1 so set up some initial properties

$('.grc-section-2-character').removeClass("animated");

TweenMax.set('.grc-section-1', {
  backgroundColor: 'transparent'
});

TweenMax.set('.grc-section-2-bg-stars', {
  opacity: 0
});

TweenMax.set('.grc-section-2-text', {
  opacity: 0,
  css: {autoAlpha:0},
  y: '10%'
});


var scene1_bgAnimation = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-1-scale-wrapper', 5, {
      y: '-5%'
    }),
    TweenMax.to('.grc-section-2-bg', 5, {
      backgroundColor: '#001d23'
    }),
    TweenMax.to('.grc-section-2-bg-stars', 5, {
      opacity: 1
    })
  ]);

var scene1_animation = new TimelineMax({ delay: 4 })
  .add([
    TweenMax.to('.grc-section-1-book-cover-2', 1.5, {
      backgroundPosition: "-" + s1SpriteWidth + "px 0px",
      ease: s1SteppedEase
    })
  ])
  // .add([
  //   TweenMax.to('.grc-section-1-book-cover', 0.5, {
  //     rotationY: '-90'
  //   }),
  //   TweenMax.to('.grc-section-1-book-cover-back', 0.5, {
  //     rotationY: '-90'
  //   })
  // ])
  // .add([
  //   TweenMax.to('.grc-section-1-book-cover', 0.01, {
  //     opacity: '0'
  //   })
  // ])
  // .add([
  //   TweenMax.to('.grc-section-1-book-cover-back', 0.5, {
  //     rotationY: '-180'
  //   })
  // ])
  .add([
    TweenMax.to('.grc-section-1-scale-wrapper', 3, {
      scale: 5,
      x: '20%',
      opacity: 0
    })
  ])

  // Scene 2 elements
  .add([
    // TweenMax.to('.grc-section-2-character', 5, {
    //   left: '100%'
    // }),
    TweenMax.to('.grc-section-2-text', 2.5, {
      opacity: 1,
      css: {autoAlpha:1},
      y: '0%',
      onStart: function() {
        $('.grc-section-2-character').addClass("animated");

        if (!scene2_trigger) {
          $(document).trigger('setScene', {
            scene: 'Scene 2: Floating',
          });
          scene2_trigger = true;
          console.log("s2 trigger");
        }
      }
    })
  ])
  // extend time on scene
  .add([
    TweenMax.to('.grc-section-2-text', 5, {
    })
  ]);

var scene1 = new ScrollScene({
  duration: 3000,
  triggerElement: '.grc-section-1',
  triggerHook: '0'
})
  .setPin(".grc-section-1")
  .setTween([scene1_animation, scene1_bgAnimation]);

scene1.on('enter', function() {
  if (!scene1_trigger) {
    $(document).trigger('setScene', {
      scene: 'Scene 1: Cover',
    });
    scene1_trigger = true;
    console.log("s1 trigger");
  }
});

/* Scene 2 | @s2
   ========================================================================== */

TweenMax.set('.grc-section-2', {
  position: 'fixed',
  top: '0',
  'z-index': '-1'
});

// TweenMax.set('.grc-section-2-character', {
//   left: '-30%',
//   right: 'auto'
// });

var scene2 = new ScrollScene({
  duration: 1000,
  triggerElement: '.grc-section-2',
  triggerHook: '0'
});

scene1.on('progress', function(ev) {
  if (ev.scrollDirection == "REVERSE") {
    $('.grc-section-2-character').removeClass("animated");
  }
});

/* Scene 3 | @s3
   ========================================================================== */

/* Buzz */

var s3Sound = new buzz.sound('sounds/traffic-loop');

/**
 * if animations are enabled,
 * swap the scene background to use the
 * one without the cars.
 *
 * also enable cars image for looping;
 */

$('.grc-section-3-panel-left-bg').attr("src", 'img/s3-panel-left-bg.png');
$('.grc-section-3-panel-left-vehicles-container, .grc-section-3-panel-left-char, .grc-section-3-panel-right-char').show();

$('.grc-section-3-panel-right-bg').attr("src", 'img/s3-panel-right-bg.png');

/**
 * set desktop animation defaults
 */

TweenMax.set('.grc-section-3-panel-left', {
  x: '25%'
});

TweenMax.set('.grc-section-3-panel-right', {
  opacity: 0,
  x: '50%'
});

TweenMax.set('.grc-section-3-panel-left-bubble', {
  scale: 0.5,
  opacity: 0
});

TweenMax.set('.grc-section-3-panel-right-bubble', {
  scale: 0.5,
  opacity: 0
});

TweenMax.set('.grc-section-3-panel-right-char', {
  y: '-150%'
});

// manually set height of s3 because of floated elements
$('.grc-section-3').css({
  'min-height': windowHeight
});

var _veh1 = $('.grc-section-3-panel-left-vehicles');
var _panelRight = $('.grc-section-3-panel-right-bg-repeat');
var _s3Char = $('.grc-section-3-panel-left-char');
var _s3CharRight = $('.grc-section-3-panel-right-char');
var _s3LeftBubble = $('.grc-section-3-panel-left-bubble');
var _s3RightBubble = $('.grc-section-3-panel-right-bubble');

var scene3_animation = TweenMax.to(_veh1, 6, {
  x: '1000',
  repeat: -1,
  ease: Linear.easeNone
});
scene3_animation.pause();

var scene3_timeline = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-3-panel-left', 3, {
      x: '0%'
    }),
    TweenMax.to('.grc-section-3-panel-left-bubble', 3, {
      scale: 1,
      opacity: 1
    }),
    TweenMax.to(_s3Char, 3, {
      top: '49%',
      left: '23%'
    })
  ])
  .add([
    TweenMax.to('.grc-section-3-panel-right', 3, {
      x: '0%',
      opacity: 1
    })
  ])
  .add([
    TweenMax.to(_s3CharRight, 3, {
      y: '0%'
    })
  ])
  .add([
    TweenMax.to('.grc-section-3-panel-right-bubble', 3, {
      scale: 1,
      opacity: 1
    })
  ]);

var scene3 = new ScrollScene({
  duration: 1000,
  triggerElement: '.grc-section-3',
  triggerHook: '0'
})
  .setPin('.grc-section-3')
  .setTween(scene3_timeline);

scene3.on('enter', function(ev) {
  scene3_animation.play();
  $(_panelRight).addClass("animated");
  if (ev.scrollDirection == "FORWARD") {
    // s1Sound.fadeOut(2000);
    s1Sound.pause();
    if (buzzPlaying) { s3Sound.fadeIn().loop(); }
  }

  if (!scene3_trigger) {
    $(document).trigger('setScene', {
      scene: 'Scene 3: City',
    });
    scene3_trigger = true;
    console.log("s3 trigger");
  }

});

scene3.on('leave', function(ev) {
  scene3_animation.pause();
  $(_panelRight).removeClass("animated");
  if (ev.scrollDirection == "REVERSE") {
    if (buzzPlaying) { s1Sound.play().loop(); }
    s3Sound.pause();
  }

});

/* Scene 4 | @s4
   ========================================================================== */

var _s4Bubble = $('.grc-section-4-bubble');
var _s4Text = $('.grc-section-4-text');

TweenMax.set(_s4Bubble, {
  opacity: 0,
  scale: 0.5,
  css: {autoAlpha:0},
});

TweenMax.set(_s4Text, {
  opacity: 0,
  y: '-10%'
});

TweenMax.set('.grc-section-4-bg', {
  scale: 4
});

TweenMax.set('.grc-section-4-char', {
  scale: 4
});

// manually set height of s4 because of floated elements
$('.grc-section-4').css({
  height: windowHeight
});

var scene4_animation = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-4-bg', 1, {
      scale: 1
    }),
    TweenMax.to('.grc-section-4-char', 1, {
      scale: 1
    })
  ])
  .add([
    TweenMax.to(_s4Text, 1, {
      opacity: 1,
      y: '0%'
    })
  ])
  .add([
    TweenMax.to(_s4Bubble, 1, {
      opacity: 1,
      scale: 1,
      css: {autoAlpha:1},
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

  if (!scene4_trigger) {
    $(document).trigger('setScene', {
      scene: 'Scene 4: Paradox',
    });
    scene4_trigger = true;
    console.log("s4 trigger");
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

$('.grc-section-5-text-warp').hide();
$('.grc-section-5-text-warp-animation').css({
  display: 'inline-block'
});

TweenMax.set('.grc-section-5-building-1', {
  y: '20%'
});

TweenMax.set('.grc-section-5-building-2', {
  y: '20%'
});

TweenMax.set('.grc-section-5-char', {
  y: '10%'
});

TweenMax.set('.grc-section-5-text', {
  opacity: 0,
  y: '20%'
});

var s5GraphWidth = 400 * 6;
var s5SteppedEase = new SteppedEase(6);
var s5Building1 = $('.grc-section-5-building-1');
var s5Building2 = $('.grc-section-5-building-2');
var s5Char = $('.grc-section-5-char');

var scene5_animation_bg = new TimelineMax()
  .add([
    TweenMax.to(s5Building1, 3, {
      scale: 1.15,
      x: '5%',
      y: '0%'
    }),
    TweenMax.to(s5Building2, 3, {
      scale: 1.15,
      x: '-5%',
      y: '0%'
    }),
    TweenMax.to(s5Char, 3, {
      y: '0%'
    })
  ]);

var scene5_animation = new TimelineMax()
  .add([
    TweenMax.to('.grc-section-5-text-warp-animation', 1.5, {
      backgroundPosition: "-" + s5GraphWidth + "px 0px",
      ease: s5SteppedEase
    })
  ])
  .add([
    TweenMax.to('.grc-section-5-text', 3, {
      opacity: 1,
      y: '0%'
    })
  ]);

var scene5 = new ScrollScene({
  duration: 1000,
  triggerElement: '.grc-section-5',
  triggerHook: '0'
})
  .setTween([scene5_animation, scene5_animation_bg])
  .setPin('.grc-section-5');

scene5.on('enter', function() {
  if (!scene5_trigger) {
    $(document).trigger('setScene', {
      scene: 'Scene 5: Warped',
    });
    scene5_trigger = true;
    console.log("s5 trigger");
  }
});

/* Scene 6 | @s6
   ========================================================================== */

/**
 * hide mobile graphs and show
 * animatable desktop graph
 */

$('.grc-section-6-graph-mobile-1, .grc-section-6-graph-mobile-2, .grc-section-6-character-container').hide();
$('.grc-section-6-roof-line-container, .grc-section-6-graph, .grc-section-6-graph-animation, .grc-section-6-graph-container, .grc-section-6-character-desktop').show();

$('.grc-section-6').css({
  'height': 'inherit'
});

TweenMax.set('.grc-section-6-text-2', {
  opacity: 0,
  x: '-10%'
});

TweenMax.set('.grc-section-6-bubble', {
  opacity: 0
});

TweenMax.set('.grc-section-6-char', {
  opacity: 0,
  x: '340px',
});

var _roofLine = $('.grc-section-6-roof-line');
var _s6Text1 = $('.grc-section-6-text-1');
var _s6Text2 = $('.grc-section-6-text-2');
var _s6Bubble = $('.grc-section-6-bubble');
var _s6Char = $('.grc-section-6-char');

// var frameWidth = 100, numCols = 12;
// var steppedEase = new SteppedEase(numCols);

// TweenMax.to('#selector', 6, {
//   backgroundPosition: '-'+(frameWidth*numCols)+'px 0px',
//   ease:steppedEase, repeat:-1});


var s6GraphWidth = 809 * 8;
var s6SteppedEase = new SteppedEase(8);

var scene6_animation = new TimelineMax({ delay: 2 })
  .add([
    TweenMax.to(_s6Text1, 1, {
      opacity: 0,
      y: '-10%'
    })
  ])
  .add([
    TweenMax.to(_s6Text2, 1, {
      opacity: 1,
      x: '10%'
    })
  ])
  .add([
    TweenMax.to('.grc-section-6-graph-animation', 1, {
      opacity: 1
    })
  ])
  .add([
    TweenMax.to('.grc-section-6-graph-animation', 1.5, {
      backgroundPosition: "-" + s6GraphWidth + "px 0px",
      ease: s6SteppedEase
    })
  ])
  .add([
    TweenMax.to(_s6Char, 3, {
      opacity: 1,
      x: '270px',
    })
  ])
  .add([
    TweenMax.to(_s6Bubble, 3, {
      opacity: 1
    })
  ])
  .add([
    TweenMax.to(_s6Bubble, 6, {
    })
  ]);

var scene6 = new ScrollScene({
  duration: 1000,
  triggerElement: '.grc-section-6',
  triggerHook: '0'
})
  .setTween(scene6_animation)
  .setPin('.grc-section-6');

scene6.on('enter', function(ev) {
  $(_roofLine).removeClass("animated");
  if (ev.scrollDirection == "FORWARD") {
    s3Sound.pause();
  }

  if (!scene6_trigger) {
    $(document).trigger('setScene', {
      scene: 'Scene 6: Graph',
    });
    scene6_trigger = true;
    console.log("s6 trigger");
  }
});

scene6.on('leave', function(ev) {
  if (ev.scrollDirection == "REVERSE") {
    $(_roofLine).addClass("animated");
    if (buzzPlaying) { s3Sound.play().loop(); }
  }
});

/* Scene 7 | @s7
   ========================================================================== */

/* Buzz */

var s7Sound = new buzz.sound('sounds/chalk-loop');
var s8Sound = new buzz.sound('sounds/equationscosmos');

$('.grc-section-7-main-equation').hide();
$('#s7-svg').show();
$('.grc-section-7-equation-1, .grc-section-7-equation-2, .grc-section-7-equation-3, .grc-section-7-equation-4, .grc-section-7-equation-5').css({
  width: '0%',
  overflow: 'hidden'
});

TweenMax.set('.grc-section-7-text-2', {
  opacity: 0
});
TweenMax.set('.grc-section-7-text-3', {
  opacity: 0
});

/* SVG */

function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

// var $word = $("path#word");
// var $dot = $("path#dot");
// pathPrepare($word);
// pathPrepare($dot);

var $s7Path1 = $('#s7-svg-path-1');
var $s7Path2 = $('#s7-svg-path-2');
var $s7Path3 = $('#s7-svg-path-3');
var $s7Path4 = $('#s7-svg-path-4');
var $s7Path5 = $('#s7-svg-path-5');
var $s7Path6 = $('#s7-svg-path-6');
var $s7Path7 = $('#s7-svg-path-7');
var $s7Path8 = $('#s7-svg-path-8');
var $s7Path9 = $('#s7-svg-path-9');
var $s7Path10 = $('#s7-svg-path-10');
var $s7Path11 = $('#s7-svg-path-11');
var $s7Path12 = $('#s7-svg-path-12');
var $s7Path13 = $('#s7-svg-path-13');
var $s7Path14 = $('#s7-svg-path-14');
var $s7Path15 = $('#s7-svg-path-15');
var $s7Path16 = $('#s7-svg-path-16');
var $s7Path17 = $('#s7-svg-path-17');
var $s7Path18 = $('#s7-svg-path-18');
var $s7Path19 = $('#s7-svg-path-19');
var $s7Path20 = $('#s7-svg-path-20');
var $s7Path21 = $('#s7-svg-path-21');
var $s7Path22 = $('#s7-svg-path-22');
var $s7Path23 = $('#s7-svg-path-23');
var $s7Path24 = $('#s7-svg-path-24');

pathPrepare($s7Path1);
pathPrepare($s7Path2);
pathPrepare($s7Path3);
pathPrepare($s7Path4);
pathPrepare($s7Path5);
pathPrepare($s7Path6);
pathPrepare($s7Path7);
pathPrepare($s7Path8);
pathPrepare($s7Path9);
pathPrepare($s7Path10);
pathPrepare($s7Path11);
pathPrepare($s7Path12);
pathPrepare($s7Path13);
pathPrepare($s7Path14);
pathPrepare($s7Path15);
pathPrepare($s7Path16);
pathPrepare($s7Path17);
pathPrepare($s7Path18);
pathPrepare($s7Path19);
pathPrepare($s7Path20);
pathPrepare($s7Path21);
pathPrepare($s7Path22);
pathPrepare($s7Path23);
pathPrepare($s7Path24);

// for (var i = 0; i < 25; i++) {
//   console.log(i);
//   pathPrepare();
// }

var _s7Text1              = $('.grc-section-7-text-1');
var _s7Chair              = $('.grc-section-7-chair');
var _s7Text2              = $('.grc-section-7-text-2');
var _s7Text3              = $('.grc-section-7-text-3');
var _s7EquationContainer  = $('.grc-section-7-equation-container');
var _s7Equation1          = $('.grc-section-7-equation-1');
var _s7Equation2          = $('.grc-section-7-equation-2');
var _s7Equation3          = $('.grc-section-7-equation-3');
var _s7Equation4          = $('.grc-section-7-equation-4');
var _s7Equation5          = $('.grc-section-7-equation-5');
var _s7Char               = $('.grc-section-7-char');
var _s7CosmosContainer    = $('.grc-section-7-cosmos-container');
var _s7Svg                = $('#s7-svg');
var _s7Blackhole          = $('.grc-section-7-blackhole');
var _s7Jupiter            = $('.grc-section-7-jupiter');
var _s7Planet             = $('.grc-section-7-planet');
var _s7Comet              = $('.grc-section-7-comet');

TweenMax.set(_s7Comet, {
  x: '100%'
});

// hide end section
TweenMax.set('.grc-section-end', {
  opacity: 0
});

var scene7_animation_bg = new TimelineMax()
  .add([
    TweenMax.to(_s7Chair, 2, {
      x: '-10%'
    }),
    TweenMax.to(_s7Char, 10, {
      x: '-10%'
    }),
    TweenMax.to(_s7Equation1, 10, {
      x: '-10%',
      onStart: function() {
        if (buzzPlaying && s7Sound.isPaused()) { s7Sound.play().loop(); }
      }
    }),
    TweenMax.to(_s7Equation2, 10, {
      x: '-10%'
    }),
    TweenMax.to(_s7Equation3, 10, {
      x: '-10%'
    }),
    TweenMax.to(_s7Equation4, 10, {
      x: '-10%'
    }),
    TweenMax.to(_s7Equation5, 10, {
      x: '-10%'
    })
  ]);
var scene7_animation = new TimelineMax()
  .add([
    TweenMax.to(_s7Equation1, 2.5, {
      width: '100%'
    })
  ])
  .add([
    TweenMax.to(_s7Equation2, 2.5, {
      width: '100%'
    })
  ])
  .add([
    TweenMax.to(_s7Equation3, 2.5, {
      width: '100%'
    })
  ])
  .add([
    TweenMax.to(_s7Equation4, 2.5, {
      width: '100%'
    })
  ])
  .add([
    TweenMax.to(_s7Equation5, 2.5, {
      width: '100%'
    })
  ])
  .add(
    TweenMax.to($s7Path1, 0.5, {
      strokeDashoffset: 0,
      ease:Linear.easeNone,
      onStart: function() {
        if (buzzPlaying) s8Sound.play();
        console.log("playing s8Sound");
      }
    })
  )
  .add(TweenMax.to($s7Path2, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path3, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path4, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path5, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path6, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path7, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path8, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path9, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path10, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path11, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path12, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path13, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path14, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path15, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path16, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path17, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path18, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path19, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path20, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path21, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path22, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path23, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}))
  .add(TweenMax.to($s7Path24, 2, {
    strokeDashoffset: 0,
    ease:Linear.easeNone,
    onComplete: function() {
      if (s7Direction == "FORWARD") {
        s7Sound.pause();
      }
    }
  }))
  .add([
    TweenMax.to(_s7Text1, 2.5, {
      opacity: 0,
      x: '-150%'
    }),
    TweenMax.to(_s7Text2, 2.5, {
      opacity: 1
    })
  ])

  // first wipe
  .add([
    TweenMax.to(_s7Svg, 5, {
      x: '-10%'
    }),
    TweenMax.to(_s7EquationContainer, 5, {
      x: '-10%'
    }),
    TweenMax.to(_s7Chair, 2.5, {
      x: '-10%'
    }),
  ])
  .add([
    TweenMax.to(_s7Svg, 5, {
      x: '-200%'
    }),
    TweenMax.to(_s7Chair, 2.5, {
      opacity: 0,
      x: '-100%'
    }),
    TweenMax.to(_s7EquationContainer, 5, {
      x: '-200%'
    }),
    TweenMax.to(_s7CosmosContainer, 5, {
      left: '0%',
      onComplete: function() {
        console.log("entered cosmos");
        if (!scene8_trigger) {
          $(document).trigger('setScene', {
            scene: 'Scene 8: Cosmos',
          });
          scene8_trigger = true;
          console.log("s8 trigger");
        }
      }
    })
  ])
  .add([
    TweenMax.to(_s7Svg, 5, {
      x: '-200%'
    }),
    TweenMax.to(_s7EquationContainer, 5, {
      x: '-200%'
    }),
    TweenMax.to(_s7CosmosContainer, 5, {
      left: '0%'
    }),
    TweenMax.to(_s7Blackhole, 5, {
      x: '-2%'
    }),
    TweenMax.to(_s7Jupiter, 5, {
      x: '-15%'
    }),
    TweenMax.to(_s7Planet, 5, {
      x: '-2%'
    }),
    TweenMax.to(_s7Comet, 5, {
      x: '-50%'
    }),
  ])
  .add([
    TweenMax.to(_s7Text3, 5, {
      x: '-10%',
      opacity: 1
    })
  ])
  // hold scene for a few more seconds
  .add([
    TweenMax.to(_s7Text3, 5, {
    })
  ])

  /* begin end section animations */

  // fade out previous stuff
  .add([
    TweenMax.to(_s7Text3, 3, {
      opacity: 0
    })
  ])
  // fade in section end
  .add([
    TweenMax.to('.grc-section-end', 3, {
      opacity: 1,
      'pointer-events': 'auto'
    })
  ]);

var scene7 = new ScrollScene({
  duration: 4000,
  triggerElement: '.grc-section-7',
  triggerHook: '0'
})
  .setPin('.grc-section-7')
  .setTween([scene7_animation, scene7_animation_bg]);


// set up s7 scroll direction variable
var s7Direction;

scene7.on('progress', function(ev) {
  s7Direction = ev.scrollDirection;
});

scene7.on('enter', function(ev) {
  if (ev.scrollDirection == "REVERSE") {
    s8Sound.pause();
  }
  if (!scene7_trigger) {
    $(document).trigger('setScene', {
      scene: 'Scene 7: Equations',
    });
    scene7_trigger = true;
    console.log("s7 trigger");
  }
});

/* Scene End | @end
   ========================================================================== */

/* Buzz */

// var s8Sound = new buzz.sound('sounds/equationscosmos');

/* Animation Defaults */

// TweenMax.set('.grc-section-end', {
//   opacity: 0
// });

// var sceneEnd = new ScrollScene({
//   triggerElement: '.grc-section-end',
//   triggerHook: '0'
// });

// sceneEnd.on('enter', function(ev) {
//   if(ev.scrollDirection == "FORWARD") {
//     if (buzzPlaying) s8Sound.play();
//   }
// });

// sceneEnd.on('leave', function(ev) {
//   buzz.all().pause();
// });

s8Sound.bind('ended', function() {
  s1Sound.fadeIn(300).stop().play().loop();
  console.log("s1Sound ended");
});

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
  // sceneEnd
]);

} // end mobilecheck