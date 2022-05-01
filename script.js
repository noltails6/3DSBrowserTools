document.getElementById("secretscreen").value = history.length;
var ss = 1;
function action1() {
  if (
    confirm(
      "Press OK (A) for the Prompt Test, or press cancel (B) to choose another action."
    )
  ) {
    const p = prompt("Prompt test!");
    alert(p);
  } else {
  }
}

function action2() {
  if (
    confirm(
      "Press OK (A) for the Random Number Generator, or press cancel (B) to choose another action."
    )
  ) {
    const num = prompt("Choose the max number.");
    alert("Ok, here's your number.");
    alert(Math.floor(Math.random() * num) + 1);
  } else {
  }
}

function action3() {
  if (
    confirm(
      "Press OK (A) for the Sound Player (beta), or press cancel (B) to choose another action."
    )
  ) {
    var audio = new Audio(
      "https://cdn.glitch.global/ce9b985f-2850-4b63-98e0-a93f391908b2/poyo.mp3?v=1645907176493"
    );
    audio.play();
  } else {
  }
}

function action4() {
  if (
    confirm(
      "Press OK (A) to watch a sample video, or press cancel (B) to choose another action."
    )
  ) {
    window.location.replace("https://3ds-site-video.glitch.me");
  } else {
  }
}

function action5() {
  if (
    confirm(
      "Press OK (A) to search YouTube, or press cancel (B) to choose another action."
    )
  ) {
    const ytsearch = prompt("Enter YouTube search");
    if (
      confirm("You want to search " + ytsearch + ", is this right?") == true
    ) {
      window.location.replace(
        "https://www.youtube.com/results?search_query=" + ytsearch
      );
    } else {
      action5();
    }
  } else {
  }
}

function action6() {
  if (
    confirm(
      "Press OK (A) to search Google, or press cancel (B) to choose another action."
    )
  ) {
    const gsearch = prompt("Enter Google search");
    if (confirm("You want to search " + gsearch + ", is this right?") == true) {
      window.location.replace("https://www.google.com/search?q=" + gsearch);
    } else {
      action6();
    }
  } else {
  }
}

function action7() {
  if (
    confirm(
      "Press OK (A) to goto a URL, or press cancel (B) to choose another action."
    )
  ) {
    const url = prompt("Enter URL", "https://");
    if (confirm("You want to go to " + url + ", is this right?") == true) {
      window.location.replace(url);
    } else {
      action7();
    }
  } else {
  }
}

function action8() {
  if (
    confirm(
      "Press OK (A) to reload page, or press cancel (B) to choose another action."
    )
  ) {
    location.reload();
  } else {
  }
}

/*
function anotheraction6() {
  alert("There are no more actions.");
  if (
    confirm("Press OK (A) to go back around or press Cancel (B) to stop.") ==
    true
  ) {
    action();
  } else {
  }
}
*/
// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/

/*
if (confirm("Press a button!") == true) {

} else {

}
*/
