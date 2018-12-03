const fcc = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
const gns = "https://wind-bow.glitch.me/twitch-api/streams/geekandsundry";
const rrp = "https://wind-bow.glitch.me/twitch-api/streams/rpgretroreplays";

let fccReq = new XMLHttpRequest();
let gnsReq = new XMLHttpRequest();
let rrpReq = new XMLHttpRequest();

const fccBox = document.getElementById("fccBox");
const gnsBox = document.getElementById("gnsBox");
const rrpBox = document.getElementById("rrpBox");

fccReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let fccArr = JSON.parse(this.responseText);
        if (fccArr.stream == null) {
          fccBox.innerHTML = "Free Code Camp is offline!";
        } else {
          fccBox.innerHTML = "Free Code Camp is online! \
          <br><br>\
          They are playing: " + fccArr.stream.game + 
          "<br>Stream Title: " + fccArr.stream.channel.status;
        }
      }
};

fccReq.open("GET", fcc, true);
fccReq.send();

gnsReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gnsArr = JSON.parse(this.responseText);
        if (gnsArr.stream == null) {
          gnsBox.innerHTML = "Geek and Sundry is offline!";
        } else {
          gnsBox.innerHTML = "Geek and Sundry is online!\
          <br><br>\
          They are playing: " + gnsArr.stream.game + 
          "<br>Stream Title: " + gnsArr.stream.channel.status;
        }
    }
};

gnsReq.open("GET", gns, true);
gnsReq.send();

rrpReq.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let rrpArr = JSON.parse(this.responseText);
        if (rrpArr.stream == null) {
          rrpBox.innerHTML = "Retro RPG replays is offline!";
        } else {
          rrpBox.innerHTML = "Retro RPG replays is online!\
          <br><br>\
          They are playing: " + rrpArr.stream.game + 
          "<br>Stream Title: " + rrpArr.stream.channel.status;
        }
    }
};

rrpReq.open("GET", rrp, true);
rrpReq.send();

const reload = document.getElementById('reload');
reload.onclick = function () {
  location.reload();
}

