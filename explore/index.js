// function playstate_change(target, playstate_paused) {
//     if (playstate_paused.checked) {
//       target.style.animationPlayState = "paused";
//     } else {
//       target.style.animationPlayState = "running";
//     }
//   }

//   function fillmode_change(target, fillmode_none) {
//     if (fillmode_none.checked) {
//       target.style.animationFillMode = "none";
//     } else if (fillmode_backwards.checked) {
//       target.style.animationFillMode = "backwards";
//     } else if (fillmode_forwards.checked) {
//       target.style.animationFillMode = "forwards";
//     } else if (fillmode_both.checked) {
//       target.style.animationFillMode = "both";
//     }
//   }
  
//   function play(animation) {
//     if (animation) {
//       animation.play();
//     } else {
//       console.log("play: unable to get animation.");
//     }
//   }
//   function pause(animation) {
//     if (animation) {
//       animation.pause();
//     } else {
//       console.log("pause: unable to get animation.");
//     }
//   }
//   function finish(animation) {
//     if (animation) {
//       animation.finish();
//     } else {
//       console.log("finish: unable to get animation.");
//     }
//   }
//   function reverse(animation) {
//     if (animation) {
//       animation.reverse();
//     } else {
//       console.log("reverse: unable to get animation.");
//     }
//   }
//   function cancel(animation) {
//     if (animation) {
//       animation.cancel();
//     } else {
//       console.log("cancel: unable to get animation.");
//     }
//   }

// const TYPE_TO_ANIMATION = {
//   "alternate": "fade-in .5s both",
//   "repeat": "fade-in .5s both",
//   "once": "fade-in .5s both",
//   "state": "fade-in 5s both",
// };

// const TYPE_TO_TRIGGER = {
//   "alternate": "--viewtrigger view() contain 0% contain 100%",
//   "repeat": "--viewtrigger view() contain 0% contain 100% cover 0% cover 100%",
//   "once": "--viewtrigger view() contain 0% contain 100%",
//   "state": "--viewtrigger view() contain 0% contain 100%",
// };

// function trigger_type_change(target, trigger_type, demo, force=false) {
//   const before = getComputedStyle(target).animationTrigger;
//   ["alternate", "repeat", "once", "state"].forEach((type) => {
//     if (type !== trigger_type) {
//       target.classList.remove(type);
//     } else {
//       target.classList.add(type);
//     }
//   });
//   const after = getComputedStyle(target).animationTrigger;

//   if (before !== after || force) {
//     const cssTextElement = demo.querySelector("#cssText");

//     const animation = TYPE_TO_ANIMATION[trigger_type];
//     target.style.animation = animation;

//     const trigger = TYPE_TO_TRIGGER[trigger_type];
//     const subject = demo.querySelector("#subject");
//     subject.style.timelineTrigger = trigger;

//     cssTextElement.innerHTML = `<pre>
//                 @keyframes fade-in {
//                     from {
//                       opacity: 0.1;
//                       transform: scaleX(0.1);
//                       background-color: black;
//                     }

//                     to {
//                       background-color: black;
//                       transform: scaleX(3);
//                     }
//                 }
//                 .source {
//                   timeline-trigger: ${trigger};
//                 }
//                 .target {
//                   animation: ${animation};
//                   animation-trigger: ${after};
//                 }
//             </pre>`;

//     const typeTitle = demo.querySelector("#typeTitle");
//     typeTitle.innerText = trigger_type.toUpperCase();
//   }
// }

  // const ctrls = [
  //   { name: "play", click: play },
  //   { name: "pause", click: pause },
  //   { name: "finish", click: finish },
  //   { name: "reverse", click: reverse },
  //   { name: "cancel", click: cancel }
  // ];
  
  // function updateInfo(demo, animation) {
  //   // const currentTimeText = demo.querySelector("#currentTimeText");
  //   // const playStateText = demo.querySelector("#playStateText");
  //   // const progressText = demo.querySelector("#progressText");
  //   // const scrollTopText = demo.querySelector("#scrollTopText");
  //   // const scroller = demo.querySelector("#scroller");
  //   // const counter = demo.querySelector("#getAnimationsCount");
  //   // if (currentTimeText.innerText !== `currentTime: ${animation.currentTime.toFixed(2)}`) {
  //   //   currentTimeText.innerText = `currentTime: ${animation.currentTime.toFixed(2)}`;
  //   // };
  //   // if (playStateText.innerText !== `playState: ${animation.playState}`) {
  //   //   playStateText.innerText = `playState: ${animation.playState}`;
  //   // }
  //   // // if (progressText.innerText !== `overallProgress: ${animation.overallProgress.toFixed(2)}`) {
  //   // //   progressText.innerText = `overallProgress: ${animation.overallProgress.toFixed(2)}`;
  //   // // }
  //   // if (scrollTopText.innerText !== `scrollTop: ${scroller.scrollTop}`) {
  //   //   scrollTopText.innerText = `scrollTop: ${scroller.scrollTop}`;
  //   // }
  //   // const new_getAnimations_length = `getAnimations().length: ${
  //   //   demo.querySelector("#target").getAnimations().length
  //   // }`;
  //   // if (counter.innerText !== new_getAnimations_length) {
  //   //   counter.innerText = new_getAnimations_length;
  //   // }
  //   // requestAnimationFrame(() => {
  //   //   updateInfo(demo, animation);
  //   // });
  // }
  
  // function setupControls(demo, animation) {
  //   const ctrl = demo.querySelector("#ctrl");

  //   // WAAPI Controls (Buttons)
  //   for (let control of ctrls) {
  //     const ctrl_el = document.createElement("button");
  //     ctrl_el.innerText = `${control.name}`;
  //     ctrl_el.onclick = () => {
  //       control.click(animation);
  //     };
  //     ctrl.append(ctrl_el);
  //   }
  //   const target = demo.querySelector("#target");

  //   // animation-play-state Controls (Radio buttons)
  //   const playstate_paused = demo.querySelector("#playstate_paused");
  //   const playstate_running = demo.querySelector("#playstate_running");
  //   playstate_running.addEventListener("change", () => {
  //     playstate_change(target, playstate_paused);
  //   });
  //   playstate_paused.addEventListener("change", () => {
  //     playstate_change(target, playstate_paused);
  //   });
  //   console.log("target");
  //   if (getComputedStyle(target).animationPlayState === "paused") {
  //     playstate_paused.checked = true;
  //   } else {
  //     playstate_running.checked = true;
  //   }

  //   // animation-fill-mode Controls (Radio buttons)
  //   const fillmode_none = demo.querySelector("#fillmode_none");
  //   const fillmode_backwards = demo.querySelector("#fillmode_backwards");
  //   const fillmode_forwards = demo.querySelector("#fillmode_forwards");
  //   const fillmode_both = demo.querySelector("#fillmode_both");
  //   fillmode_none.addEventListener("change", () => {
  //     fillmode_change(target, fillmode_none);
  //   });
  //   fillmode_backwards.addEventListener("change", () => {
  //     fillmode_change(target, fillmode_none);
  //   });
  //   fillmode_forwards.addEventListener("change", () => {
  //     fillmode_change(target, fillmode_none);
  //   });
  //   fillmode_both.addEventListener("change", () => {
  //     fillmode_change(target, fillmode_none);
  //   });
  //   console.log("target");
  //   const cs_fillMode = getComputedStyle(target).animationFillMode;
  //   if (cs_fillMode === "none") {
  //     fillmode_none.checked = true;
  //   } else if (cs_fillMode === "backwards") {
  //     fillmode_backwards.checked = true;
  //   } else if (cs_fillMode === "forwards") {
  //     fillmode_forwards.checked = true;
  //   } else if (cs_fillMode === "both") {
  //     fillmode_both.checked = true;
  //   }

    // Trigger type Controls (Radio Buttons)
    // ["alternate", "repeat", "once", "state"].forEach((type) => {
    //   const radio = demo.querySelector(`#radio_${type}`);

    //   radio.addEventListener("change", () => {
    //     console.log(`changing type to ${type}`);
    //     trigger_type_change(target, type, demo);
    //   });

      
    //   if (target.classList.contains(type)) {
    //     radio.checked = true;
    //     console.log(type);
    //     trigger_type_change(target, type, demo, true);
    //   }
    // });
  // }
  
  // function setUpDemo(demo) {
  //   const demo_animations = demo.querySelector("#target").getAnimations();
  //   if (demo_animations.length > 0) {
  //     const demo_target = demo.querySelector("#target");
  //     const demo_animation = demo_animations[0];
  
  //     setupControls(demo, demo_animation);
  //     updateInfo(demo, demo_animation);
  
  //     demo_target.addEventListener("animationstart", () => {
  //       console.log(`animationstart on ${demo.id}`);
  //     });
  
  //     demo_target.addEventListener("animationend", () => {
  //       console.log(`animationend on ${demo.id}`);
  //     });
  //   } else {
  //     requestAnimationFrame(() => {
  //       setUpDemo(demo);
  //     });
  //   }
  // }
  
  // document.querySelectorAll(".demo").forEach((d) => setUpDemo(d));
  