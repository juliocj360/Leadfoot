var fordInterval = 30
var intervalId = 5
var obstacleInterval = 30
var easy = document.getElementById('easy')
var medium = document.getElementById('medium')
var hard = document.getElementById('hard')
var speedInput = 2
var obstacleSpeedInput = 0

function Car(locY, locX, direction, speed, name, rotation) {
  this.locY = locY;
  this.locX = locX;
  this.direction = direction;
  this.speed = speed;
  this.name = name;
  this.rotation = rotation;
  timer(this);
  renderCar(this);
}

function renderCar(car) {
  var canvas = document.getElementById('canvas')
  var auto = document.createElement('img');
  auto.setAttribute('src', 'https://lh3.googleusercontent.com/INWVs0i2o7mPRFlqHV_IPlvk_iSsO_mCiEjBk6FtLPWEyfRYFxF6-MFjihe8GwrLBM-TJ_K55HXCrg=w1440-h900-rw-no');
  auto.style = "position: absolute; margin: auto; top: " + car.locY + "px; left: " + car.locX + "px;";
  auto.setAttribute('id',car.name);
  auto.setAttribute('class',car.direction);
  canvas.appendChild(auto);

  renderObstacles(obstacles)
}

var obstacles = [
  {
    name: 'treeOne',
    url: 'https://lh3.googleusercontent.com/hHvLu9xGWogPHppaDD-IfwWZ9HOEOQaGzzgp47oDueotnciAwwTtbFNJzn1JXOGCHxjwj0w0t7gWvFQ6_xQdV5n76eQ_sCzG=w1440-h900-rw-no',
    height: 80,
    width: 80,
    speed: 0,
    locX: 200,
    locY: 200,
    tree: true
  },
  {
    name: 'fountain',
    url: 'https://lh3.googleusercontent.com/GQvngfySY6C4GCodwk0omkRUu2f6WJ_2PQ041t0rkfcXgwU6uqUJ5U9989avdyFvfQm4rQvCu9AWVo4ascvtU83saEYSrdBwcg=w1440-h900-rw-no',
    height: 115,
    width: 115,
    speed: 0,
    locX: 400,
    locY: 287,
    tree: false
  },
  {
    name: 'treeTwo',
    url: 'https://lh3.googleusercontent.com/hHvLu9xGWogPHppaDD-IfwWZ9HOEOQaGzzgp47oDueotnciAwwTtbFNJzn1JXOGCHxjwj0w0t7gWvFQ6_xQdV5n76eQ_sCzG=w1440-h900-rw-no',
    height: 150,
    width: 150,
    speed: 0,
    locX: 570,
    locY: 350,
    tree: true
  },
  {
    name: 'treeThree',
    url: 'https://lh3.googleusercontent.com/hHvLu9xGWogPHppaDD-IfwWZ9HOEOQaGzzgp47oDueotnciAwwTtbFNJzn1JXOGCHxjwj0w0t7gWvFQ6_xQdV5n76eQ_sCzG=w1440-h900-rw-no',
    height: 80,
    width: 80,
    speed: 0,
    locX: 280,
    locY: 130,
    tree: true
  },
  {
    name: 'treeFour',
    url: 'https://lh3.googleusercontent.com/hHvLu9xGWogPHppaDD-IfwWZ9HOEOQaGzzgp47oDueotnciAwwTtbFNJzn1JXOGCHxjwj0w0t7gWvFQ6_xQdV5n76eQ_sCzG=w1440-h900-rw-no',
    height: 190,
    width: 190,
    speed: 0,
    locX: 180,
    locY: 350,
    tree: true
  },
  {
    name: 'treeSix',
    url: 'https://lh3.googleusercontent.com/hHvLu9xGWogPHppaDD-IfwWZ9HOEOQaGzzgp47oDueotnciAwwTtbFNJzn1JXOGCHxjwj0w0t7gWvFQ6_xQdV5n76eQ_sCzG=w1440-h900-rw-no',
    height: 130,
    width: 130,
    speed: 0,
    locX: 630,
    locY: 150,
    tree: true
  },
  {
    name: 'benchOne',
    url: 'https://lh3.googleusercontent.com/TggiLLThpnepIByRwEbl0aWyahd2XOaVdBSpCyXXknv0unc2kW4maIgCd0_AlieKclwI7kfxOfFCQfU4HShWGoh41nGZTKna=w1440-h900-rw-no',
    height: 90,
    width: 20,
    speed: 0,
    locX: 510,
    locY: 130,
    tree: false
  },
  {
    name: 'benchTwo',
    url: 'https://lh3.googleusercontent.com/TggiLLThpnepIByRwEbl0aWyahd2XOaVdBSpCyXXknv0unc2kW4maIgCd0_AlieKclwI7kfxOfFCQfU4HShWGoh41nGZTKna=w1440-h900-rw-no',
    height: 90,
    width: 20,
    speed: 0,
    locX: 380,
    locY: 460,
    tree: false
  },
  {
    name: 'topLeftWall',
    url: 'https://lh3.googleusercontent.com/e7yxpgp40N3qbuuxhZK46kY1_d5WB7-dGUhI2Z2LGcPtLvzdtipFPS4XMmnyLC0t-ew74P9whkKXJoGStn-IC_k6BbxC05yfWg=w1440-h900-rw-no',
    height: 10,
    width: 270,
    speed: 0,
    locX: 130,
    locY: 100,
    tree: false
  },
  {
    name: 'topRightWall',
    url: 'https://lh3.googleusercontent.com/e7yxpgp40N3qbuuxhZK46kY1_d5WB7-dGUhI2Z2LGcPtLvzdtipFPS4XMmnyLC0t-ew74P9whkKXJoGStn-IC_k6BbxC05yfWg=w1440-h900-rw-no',
    height: 10,
    width: 250,
    speed: 0,
    locX: 518,
    locY: 100,
    tree: false
  },
  {
    name: 'bottomLeftWall',
    url: 'https://lh3.googleusercontent.com/e7yxpgp40N3qbuuxhZK46kY1_d5WB7-dGUhI2Z2LGcPtLvzdtipFPS4XMmnyLC0t-ew74P9whkKXJoGStn-IC_k6BbxC05yfWg=w1440-h900-rw-no',
    height: 10,
    width: 270,
    speed: 0,
    locX: 130,
    locY: 573,
    tree: false
  },
  {
    name: 'topRightWall',
    url: 'https://lh3.googleusercontent.com/e7yxpgp40N3qbuuxhZK46kY1_d5WB7-dGUhI2Z2LGcPtLvzdtipFPS4XMmnyLC0t-ew74P9whkKXJoGStn-IC_k6BbxC05yfWg=w1440-h900-rw-no',
    height: 10,
    width: 250,
    speed: 0,
    locX: 518,
    locY: 573,
    tree: false
  },
  {
    name: 'leftTopWall',
    url: 'https://lh3.googleusercontent.com/i13ChLLJg2Pw2TIUoyX-GmoAWFv358CNuT5w8CJtxOqDRF7cRyeAG6XEJ7Y-vXmjMZsZdCZ9eipN0cLywenpshU8ngbvAIF3=w1440-h900-rw-no',
    height: 170,
    width: 10,
    speed: 0,
    locX: 130,
    locY: 110,
    tree: false
  },
  {
    name: 'rightTopWall',
    url: 'https://lh3.googleusercontent.com/i13ChLLJg2Pw2TIUoyX-GmoAWFv358CNuT5w8CJtxOqDRF7cRyeAG6XEJ7Y-vXmjMZsZdCZ9eipN0cLywenpshU8ngbvAIF3=w1440-h900-rw-no',
    height: 170,
    width: 10,
    speed: 0,
    locX: 758,
    locY: 110,
    tree: false
  },
  {
    name: 'leftBottomWall',
    url: 'https://lh3.googleusercontent.com/i13ChLLJg2Pw2TIUoyX-GmoAWFv358CNuT5w8CJtxOqDRF7cRyeAG6XEJ7Y-vXmjMZsZdCZ9eipN0cLywenpshU8ngbvAIF3=w1440-h900-rw-no',
    height: 170,
    width: 10,
    speed: 0,
    locX: 130,
    locY: 403,
    tree: false
  },
  {
    name: 'rightTopWall',
    url: 'https://lh3.googleusercontent.com/i13ChLLJg2Pw2TIUoyX-GmoAWFv358CNuT5w8CJtxOqDRF7cRyeAG6XEJ7Y-vXmjMZsZdCZ9eipN0cLywenpshU8ngbvAIF3=w1440-h900-rw-no',
    height: 170,
    width: 10,
    speed: 0,
    locX: 758,
    locY: 403,
    tree: false
  },
  {
    name: 'treeFive',
    url: 'https://lh3.googleusercontent.com/hHvLu9xGWogPHppaDD-IfwWZ9HOEOQaGzzgp47oDueotnciAwwTtbFNJzn1JXOGCHxjwj0w0t7gWvFQ6_xQdV5n76eQ_sCzG=w1440-h900-rw-no',
    height: 100,
    width: 100,
    speed: 0,
    locX: 550,
    locY: 100,
    tree: true
  },
  {
    name: 'carOne',
    url: 'https://lh3.googleusercontent.com/B1EyJntGVR-l50YU02TDJiLLFWWyDGOGXYQHnyVrHNeeX5PykOiRs6Nw2BsPK1BWv_3Q9dpyRGWk21j5fQ3keIwEGD_2yGpC=w1440-h900-rw-no',
    height: 30,
    width: 50,
    speed: 1,
    locX: 600,
    locY: 600,
    rotation: 180,
    lane: 'inside',
    direction: 'east',
    tree: false
  },
  {
    name: 'carTwo',
    url: 'https://lh3.googleusercontent.com/B1EyJntGVR-l50YU02TDJiLLFWWyDGOGXYQHnyVrHNeeX5PykOiRs6Nw2BsPK1BWv_3Q9dpyRGWk21j5fQ3keIwEGD_2yGpC=w1440-h900-rw-no',
    height: 30,
    width: 50,
    speed: 1,
    locX: 400,
    locY: 600,
    rotation: 0,
    lane: 'inside',
    direction: 'west',
    tree: false
  },
  {
    name: 'carThree',
    url: 'https://lh3.googleusercontent.com/B1EyJntGVR-l50YU02TDJiLLFWWyDGOGXYQHnyVrHNeeX5PykOiRs6Nw2BsPK1BWv_3Q9dpyRGWk21j5fQ3keIwEGD_2yGpC=w1440-h900-rw-no',
    height: 30,
    width: 50,
    speed: 1,
    locX: 70,
    locY: 400,
    rotation: 90,
    lane: 'inside',
    direction: 'north',
    tree: false
  },
  {
    name: 'carFour',
    url: 'https://lh3.googleusercontent.com/B1EyJntGVR-l50YU02TDJiLLFWWyDGOGXYQHnyVrHNeeX5PykOiRs6Nw2BsPK1BWv_3Q9dpyRGWk21j5fQ3keIwEGD_2yGpC=w1440-h900-rw-no',
    height: 30,
    width: 50,
    speed: 1,
    locX: 7,
    locY: 300,
    rotation: -90,
    lane: 'outside',
    direction: 'south',
    tree: false
  }
]

function renderObstacles(array) {
  for (var i = 0; i < array.length; i++) {
    var canvas = document.getElementById('canvas')
    var name = document.createElement('img')
    name.setAttribute('src', array[i].url)
    name.setAttribute('id', array[i].name);
    name.style = "position: absolute; margin: auto; top: " + array[i].locY + "px; left: " + array[i].locX + "px; height: " + array[i].height + "px; width: " + array[i].width + "px;"
    canvas.appendChild(name)
    if (array[i].speed > 0) {
      obstacleTimer(array, i)
    }
  }
}

function obstacleCrasher(array, car) {
  for (var i = 0; i < array.length; i++) {
    var fordH = 40
    var fordW = 40
    var y = car.locY
    var x = car.locX
    var obX = array[i].locX
    var obY = array[i].locY
    var obH = array[i].height
    var obW = array[i].width
    if (array[i].direction === 'north') {
      obH = array[i].width
      obW = array[i].height
      obX += 10
      obY -= 10
    }
    else if (array[i].direction === 'south') {
      obH = array[i].width
      obW = array[i].height
      obX += 10
      obY -= 10
    }
    if (array[i].tree === true) {
      obY += (array[i].height * .4)
      obH -= (array[i].height * .4)
      obW -= (array[i].height * .4)
      obX += (array[i].height * .2)
    }
    if (!(((obY + obH) < y) || ((obX + obW) < x) || (obY > (y + fordH)) || (obX > (x + fordW)))) {
      window.clearInterval(1)
      if (intervalId > 5) {
        window.clearInterval(intervalId)
      }
      wrecker()
    }
  }
}

function wrecker() {
  ford.speed = 0
  var wrecked = document.getElementById('test')
  intervalId += 1
  window.clearInterval(intervalId)
  wrecked.setAttribute('src', 'https://media.giphy.com/media/26BRx71hqRexBe7Wo/giphy.gif');
  setTimeout((() => {
    restarter()
  }),5000)
}

function timer(car) {
  setInterval(function tester() {
    car.update(car);
  }, fordInterval);
}

function obstacleTimer(array, index) {
  setInterval((() => {
    obstacleUpdater(array, index)
  }), obstacleInterval);
}

function obstacleBouncer(car) {
  for (var i = 0; i < obstacles.length; i++) {
    if (!(obstacles[car].name === obstacles[i].name)) {
      var movingObstacleH = 30
      var movingObstacleW = 50
      if ((obstacles[car].direction === 'north') || (obstacles[car].direction === 'south')) {
        movingObstacleH = 50
        movingObstacleW = 30
      }
      var y = obstacles[car].locY
      var x = obstacles[car].locX
      var obX = obstacles[i].locX
      var obY = obstacles[i].locY
      var obH = obstacles[i].height
      var obW = obstacles[i].width
      if (!(((obY + obH) < y) || ((obX + obW) < x) || (obY > (y + movingObstacleH)) || (obX > (x + movingObstacleW)))) {
        bounce(car)
        bounce(i)
      }
    }
  }
}

function bounce(index) {
  if (obstacles[index].direction === 'east') {
    obstacles[index].direction = 'west'
    obstacles[index].locX += -2
  }
  else if (obstacles[index].direction === 'west') {
    obstacles[index].direction = 'east'
    obstacles[index].locX += 2
  }
  else if (obstacles[index].direction === 'north') {
    obstacles[index].direction = 'south'
    obstacles[index].locY += 2
  }
  else if (obstacles[index].direction === 'south') {
    obstacles[index].direction = 'north'
    obstacles[index].locY += -2

  }
  obstacles[index].rotation += 180
}

function obstacleUpdater(array, index) {
  obstacleBouncer(index)
  carTurner(array, index)
  var el = document.getElementById(array[index].name);
  if (array[index].direction === 'north') {
    array[index].locY -= (array[index].speed + obstacleSpeedInput);
  }
  else if (array[index].direction === 'south') {
    array[index].locY += (array[index].speed + obstacleSpeedInput);
  }
  else if (array[index].direction === 'west') {
    array[index].locX -= (array[index].speed + obstacleSpeedInput);
  }
  else if (array[index].direction === 'east') {
    array[index].locX += (array[index].speed + obstacleSpeedInput);
  }
  el.style = "position: absolute; top: " + array[index].locY + "px; left: " + array[index].locX + "px; height: " + array[index].height + "px; transform: rotate( " + array[index].rotation + "deg); transition: transform .1s ease-in-out; width: " + array[index].width + "px;"
}

function carTurner(array, index) {
  var lane = array[index].lane
  var dir = array[index].direction
  var locX = array[index].locX
  var locY = array[index].locY
  if (lane === 'inside') {
    if ((((dir === 'west') && (locX < 70)) && (locY > 500) )|| (((dir === 'east') && (locX > 790)) && (locY > 500))) {
      (dir === 'east') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'north'
    }
    else if (((dir === 'north') && ((locY < 55) && (locX < 100))) || (dir === 'south') && ((locY > 600) && (locX < 100))) {
      (dir === 'south') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'east'
    }
    else if (((dir === 'north') && ((locY < 55)) && (locX > 500)) || ((dir === 'south') && ((locY > 600) && (locX > 500)))) {
      (dir === 'north') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'west'
    }
    else if ((((dir === 'west') && (locX < 70)) && (locY < 200) )|| (((dir === 'east') && (locX > 790)) && (locY < 200))) {
      (dir === 'west') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'south'
    }
  }
  else if (array[index].lane === 'outside') {
    if ((((dir === 'west') && (locX < 15)) && (locY > 550) )|| (((dir === 'east') && (locX > 850)) && (locY > 550))) {
      (dir === 'east') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'north'
    }
    else if (((dir === 'north') && ((locY < 15) && (locX < 50))) || (dir === 'south') && ((locY > 643) && (locX < 50))) {
      (dir === 'south') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'east'
    }
    else if (((dir === 'north') && ((locY < 13)) && (locX > 550)) || ((dir === 'south') && ((locY > 643) && (locX > 550)))) {
      (dir === 'north') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'west'
    }
    else if ((((dir === 'west') && (locX < 13)) && (locY < 250) )|| (((dir === 'east') && (locX > 850)) && (locY < 250))) {
      (dir === 'west') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'south'
    }
  }
}

Car.prototype.update = function (car) {
  obstacleCrasher(obstacles, this)
  crashChecker()
  var el = document.getElementById(car.name);
  if (this.direction === 'north') {
    this.locY -= speedInput;
  }
  else if (this.direction === 'south') {
    this.locY += speedInput;
  }
  else if (this.direction === 'west') {
    this.locX -= speedInput;
  }
  else if (this.direction === 'east') {
    this.locX += speedInput;
  }
  el.style = "position: absolute; margin: auto; top: " + car.locY + "px; left: " + car.locX + "px; transform: rotate( " + car.rotation + "deg)";
  el.setAttribute('class',car.direction);
}

function crashChecker() {
  if ((ford.locX < 0)||(ford.locY < -5)||(ford.locX > 850)||(ford.locY > 647)) {
    window.clearInterval(1)
    if (intervalId > 5) {
      window.clearInterval(intervalId)
    }
    wrecker()
  }
}

function restarter() {
  ford.locX = 600
  ford.locY = 5
  ford.direction = 'west'
  ford.speed = speedInput
  ford.rotation = 0
  intervalId += 1
  var car = document.getElementById(ford.name)
  car.setAttribute('src', 'https://lh3.googleusercontent.com/INWVs0i2o7mPRFlqHV_IPlvk_iSsO_mCiEjBk6FtLPWEyfRYFxF6-MFjihe8GwrLBM-TJ_K55HXCrg=w1440-h900-rw-no');
  timer(ford);
}

var ford = new Car(5, 600, 'west', 2, 'test', 0);

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    if (ford.direction === 'south') {
      ford.rotation += -180
      ford.direction = 'north'
      ford.update(ford)
    }
    if (ford.direction === 'west') {
      ford.rotation += 90
      ford.direction = 'north'
      ford.update(ford)
    }
    else if (ford.direction === 'east') {
      ford.rotation += -90
      ford.direction = 'north'
      ford.update(ford)
    }
  }
  else if (event.key === 'ArrowDown') {
    if (ford.direction === 'north') {
      ford.rotation += 180
      ford.direction = 'south'
      ford.update(ford)
    }
    if (ford.direction === 'east') {
      ford.rotation += 90
      ford.direction = 'south'
      ford.update(ford)
    }
    else if (ford.direction === 'west') {
      ford.rotation += -90
      ford.direction = 'south'
      ford.update(ford)
    }
  }
  else if (event.key === 'ArrowLeft') {
    if (ford.direction === 'east') {
      ford.rotation += -180
      ford.direction = 'west'
      ford.update(ford)
    }
    if (ford.direction === 'south') {
      ford.rotation += 90
      ford.direction = 'west'
      ford.update(ford)
    }
    else if (ford.direction === 'north') {
      ford.rotation += -90
      ford.direction = 'west'
      ford.update(ford)
    }
  }
  else if (event.key === 'ArrowRight') {
    if (ford.direction === 'west') {
      ford.rotation += 180
      ford.direction = 'east'
      ford.update(ford)
    }
    if (ford.direction === 'north') {
      ford.rotation += 90
      ford.direction = 'east'
      ford.update(ford)
    }
    else if (ford.direction === 'south') {
      ford.rotation += -90
      ford.direction = 'east'
      ford.update(ford)
    }
  }
  event.preventDefault()
})

easy.addEventListener('click', () => {
  speedInput = 2
  ford.speed = speedInput
  obstacleSpeedInput = 0
  easy.style.color = '#4def1c'
  medium.style.color = 'white'
  hard.style.color = 'white'
  window.clearInterval(1)
  if (intervalId > 5) {
    window.clearInterval(intervalId)
  }
  restarter()
})

medium.addEventListener('click', () => {
  speedInput = 4
  ford.speed = speedInput
  obstacleSpeedInput = 1
  easy.style.color = 'white'
  medium.style.color = '#4def1c'
  hard.style.color = 'white'
  window.clearInterval(1)
  if (intervalId > 5) {
    window.clearInterval(intervalId)
  }
  restarter()
})

hard.addEventListener('click', () => {
  speedInput = 6
  ford.speed = speedInput
  obstacleSpeedInput = 3
  easy.style.color = 'white'
  medium.style.color = 'white'
  hard.style.color = '#4def1c'
  window.clearInterval(1)
  if (intervalId > 5) {
    window.clearInterval(intervalId)
  }
  restarter()
})
