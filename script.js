function initializescrollbar(){
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#center",
    markers: true,   
    start: "top top",
    toggleActions:"restart none none reset",
    scrub: true,
    duration: 1,

  }   

})
tl.addLabel()
.to("#vid",{
  width:"100%",
  ease: "expo easeInOut",
  duration:3,
},"abcd")


.to("#left1",{
  x:-100,
  opacity:0,
  ease: "expo easeInOut",
  duration:6,
},"abcd")

.to("#left2",{
  x:-100,
  opacity:0,
  ease: "expo easeInOut",
  duration:6,
},"abcd")

.to("#right1",{
  x:100,
  opacity:0,
  ease: "expo easeInOut",
  duration:6,
},"abcd")

.to("#right2",{
  x:100,
  opacity:0,
  ease: "expo easeInOut",
  duration:6,
},"abcd");
}
initializescrollbar();


function texilatesectionone(){
$('#p').textillate({
  
  selector: '#p',

  loop: false,

  
  minDisplayTime: 2000,

  initialDelay: 0,

    autoStart: true,

  inEffects: [],

  outEffects: [ 'hinge' ],

  in: {
  	
    effect: 'fadeInUp',

    delayScale: 1.5,

    delay: 50,

    sync: false,

    shuffle: false,

    reverse: false,

      callback: function () {}
  },

  out: {
    effect: 'hinge',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },
  
  callback: function () {},

 
  type: 'char'
});
}
texilatesectionone();

function scrollbartwo(){
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#down",
      markers: false,   
      start: "top 50%",
      // scrub: true,
      // duration: 1,
    
    }   
  })
  tl2.addLabel()
.to("#line",{
  width:"80%",
  opacity:1,
  ease: "expo easeInOut",
  duration:3,
},"abcd")

.to("#ellips",{
  scale:1.5,
  opacity:1,
  ease: "expo easeInOut",
  duration:2,
},"abcd")

}
scrollbartwo();


function texilatesectiontwo(){
$('#down h1,h2').textillate({
  
  selector: '#down h1,h2',

  loop: false,

  
  minDisplayTime: 2000,

  initialDelay: 0,

    autoStart: true,

  inEffects: [],

  outEffects: [ 'hinge' ],

  in: {
  	
    effect: 'fadeInUp',

    delayScale: 1.5,

    delay: 50,

    sync: false,

    shuffle: false,

    reverse: false,

      callback: function () {}
  },

  out: {
    effect: 'hinge',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },
  
  callback: function () {},

 
  type: 'char'
});
$('#down h5').textillate({
  
  selector: '#down h5',

  loop: false,

  
  minDisplayTime: 2000,

  initialDelay: 0,

    autoStart: true,

  inEffects: [],

  outEffects: [ 'hinge' ],

  in: {
  	
    effect: 'fadeInUp',

    delayScale: 1.5,

    delay: 50,

    sync: false,

    shuffle: false,

    reverse: false,

      callback: function () {}
  },

  out: {
    effect: 'hinge',
    delayScale: 0,
    delay: 0,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },
  
  callback: function () {},

 
  type: 'char'
});
$('#cenleft').textillate({
  
  selector: '#cenleft',

  loop: false,

  
  minDisplayTime: 2000,

  initialDelay: 0,

    autoStart: true,

  inEffects: [],

  outEffects: [ 'hinge' ],

  in: {
  	
    effect: 'animated__slideInLeft',

    delayScale: 1.2,

    delay: 10,

    sync: false,

    shuffle: false,

    reverse: false,

      callback: function () {}
  },

  out: {
    effect: 'hinge',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },
  
  callback: function () {},

 
  type: 'char'
});
$('#cenleft,#textdown').textillate({
  
  selector: '#textdown',

  loop: false,

  
  minDisplayTime: 2000,

  initialDelay: 0,

    autoStart: true,

  inEffects: [],

  outEffects: [ 'hinge' ],

  in: {
  	
    effect: 'animated__slideInLeft',

    delayScale: 1.2,

    delay: 10,

    sync: false,

    shuffle: false,

    reverse: false,

      callback: function () {}
  },

  out: {
    effect: 'hinge',
    delayScale: 1.5,
    delay: 50,
    sync: false,
    shuffle: false,
    reverse: false,
    callback: function () {}
  },
  
  callback: function () {},

 
  type: 'char'
});

}
texilatesectiontwo();
  
let circle=document.querySelector("#circle");

window.addEventListener("mousemove",function(details){
  let xValue = details.pageX;
  let yValue = details.pageY;
  
  this.setTimeout(function(){
  circle.style.top=yValue + "px";
  circle.style.left=xValue + "px";
  },100);
})