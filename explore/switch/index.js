const TYPE_TO_DESCRIPTION = {
  "alternate":
  `The animation plays forward on each occurrence of "enter" and plays in reverse
   on each occurrence of "exit".`,
  "repeat":
  `The animation plays forward on each occurrence of "enter" and is reset to current time
   zero on each occurrence of "exit".`,
  "once":
  `The box to the right animates when the box within the scroll container comes fully into
   view. The animation runs the first "enter" occasion but does nothing on subsequent ones.`,
  "state":
  `The animation plays forward on each occurrence of "enter" and pauses
   on each occurrence of "exit". (animation-duration (10s) is extended in this demo
   to make it a bit easier to interact with)`,
}

const TYPE_TO_ANIMATION = {
  "alternate": "fade-in .5s both",
  "repeat": "fade-in .5s both",
  "once": "fade-in .5s both",
  "state": "fade-in 10s both",
};

const TYPE_TO_TRIGGER = {
  "alternate": "--viewtrigger view() contain 0% contain 100%",
  "repeat": "--viewtrigger view() contain 0% contain 100% cover 0% cover 100%",
  "once": "--viewtrigger view() contain 0% contain 100%",
  "state": "--viewtrigger view() contain 0% contain 100%",
};

function fixupCssText(text) {
  text = text.replaceAll("enter", "");
  text = text.replaceAll("exit", "");
  text = text.replaceAll(",", "");
  text = text.trim();
  return text;
}

function trigger_type_change(target, trigger_type, demo, force = false) {
  const before = getComputedStyle(target).animationTrigger;
  ["alternate", "repeat", "once", "state"].forEach((type) => {
    if (type !== trigger_type) {
      target.classList.remove(type);
    } else {
      target.classList.add(type);
    }
  });
  const after = getComputedStyle(target).animationTrigger;

  if ((before !== after) || force) {
    const cssTextElement = demo.querySelector("#cssText");

    const animation = TYPE_TO_ANIMATION[trigger_type];
    target.style.animation = animation;

    const trigger = TYPE_TO_TRIGGER[trigger_type];
    const subject = demo.querySelector("#subject");
    subject.style.timelineTrigger = trigger;

    cssTextElement.innerHTML =
`<pre>
    @keyframes fade-in {
        from {
          opacity: 0.1;
          transform: scaleX(0.1);
          background-color: black;
    
        to {
          background-color: black;
          transform: scaleX(3);
        }
    }
    .source {
      timeline-trigger: ${trigger};
    }
    .target {
      animation: ${animation};
      animation-trigger: ${fixupCssText(after)};
    }
</pre>`;

    const typeTitle = demo.querySelector("#typeTitle");
    typeTitle.innerText = trigger_type.toUpperCase();

    const typeDescription = demo.querySelector("#typeDescription");
    typeDescription.innerText = TYPE_TO_DESCRIPTION[trigger_type];
  }
}

function setupControls(demo, animation) {
  const target = demo.querySelector("#target");

  //  Trigger type Controls (Radio Buttons)
  ["alternate", "repeat", "once", "state"].forEach((type) => {
    const radio = demo.querySelector(`#behavior_${type}`);

    radio.addEventListener("change", () => {
      console.log(`changing type to ${type}`);
      trigger_type_change(target, type, demo);
    });


    if (target.classList.contains(type)) {
      radio.checked = true;
      console.log(type);
      trigger_type_change(target, type, demo, true);
    }
  });
}

function setUpDemo(demo) {
  const demo_animations = demo.querySelector("#target").getAnimations();
  if (demo_animations.length > 0) {
    const demo_target = demo.querySelector("#target");
    const demo_animation = demo_animations[0];

    setupControls(demo, demo_animation);
    updateInfo(demo, demo_animation);

    demo_target.addEventListener("animationstart", () => {
      console.log(`animationstart on ${demo.id}`);
    });

    demo_target.addEventListener("animationend", () => {
      console.log(`animationend on ${demo.id}`);
    });
  } else {
    requestAnimationFrame(() => {
      setUpDemo(demo);
    });
  }
}

document.querySelectorAll(".demo").forEach((d) => setUpDemo(d));
