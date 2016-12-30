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
  auto.setAttribute('src', 'http://www.clker.com/cliparts/v/C/D/3/g/s/car-top-view-hi.png');
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
    height: 50,
    width: 50,
    speed: 0,
    locX: 200,
    locY: 200,
  },
  {
    name: 'fountain',
    url: 'https://lh3.googleusercontent.com/GQvngfySY6C4GCodwk0omkRUu2f6WJ_2PQ041t0rkfcXgwU6uqUJ5U9989avdyFvfQm4rQvCu9AWVo4ascvtU83saEYSrdBwcg=w1440-h900-rw-no',
    height: 115,
    width: 115,
    speed: 0,
    locX: 400,
    locY: 290,
  },
  {
    name: 'treeTwo',
    url: 'https://lh3.googleusercontent.com/hHvLu9xGWogPHppaDD-IfwWZ9HOEOQaGzzgp47oDueotnciAwwTtbFNJzn1JXOGCHxjwj0w0t7gWvFQ6_xQdV5n76eQ_sCzG=w1440-h900-rw-no',
    height: 150,
    width: 150,
    speed: 0,
    locX: 550,
    locY:450
  },
  {
    name: 'carOne',
    url: 'https://lh3.googleusercontent.com/B1EyJntGVR-l50YU02TDJiLLFWWyDGOGXYQHnyVrHNeeX5PykOiRs6Nw2BsPK1BWv_3Q9dpyRGWk21j5fQ3keIwEGD_2yGpC=w1440-h900-rw-no',
    height: 30,
    width: 50,
    speed: 3,
    locX: 600,
    locY: 620,
    rotation: 0,
    lane: 'inside',
    direction: 'west'
  },
  {
    name: 'carTwo',
    url: 'https://lh3.googleusercontent.com/B1EyJntGVR-l50YU02TDJiLLFWWyDGOGXYQHnyVrHNeeX5PykOiRs6Nw2BsPK1BWv_3Q9dpyRGWk21j5fQ3keIwEGD_2yGpC=w1440-h900-rw-no',
    height: 30,
    width: 50,
    speed: 3,
    locX: 400,
    locY: 620,
    rotation: 180,
    lane: 'inside',
    direction: 'east'
  },
  {
    name: 'carThree',
    url: 'https://lh3.googleusercontent.com/B1EyJntGVR-l50YU02TDJiLLFWWyDGOGXYQHnyVrHNeeX5PykOiRs6Nw2BsPK1BWv_3Q9dpyRGWk21j5fQ3keIwEGD_2yGpC=w1440-h900-rw-no',
    height: 30,
    width: 50,
    speed: 3,
    locX: 70,
    locY: 400,
    rotation: 90,
    lane: 'inside',
    direction: 'north'
  },
  {
    name: 'carFour',
    url: 'https://lh3.googleusercontent.com/B1EyJntGVR-l50YU02TDJiLLFWWyDGOGXYQHnyVrHNeeX5PykOiRs6Nw2BsPK1BWv_3Q9dpyRGWk21j5fQ3keIwEGD_2yGpC=w1440-h900-rw-no',
    height: 30,
    width: 50,
    speed: 8,
    locX: 17,
    locY: 300,
    rotation: 90,
    lane: 'outside',
    direction: 'north'
  }
]

function renderObstacles(array) {
  for (var i = 0; i < array.length; i++) {
    var canvas = document.getElementById('canvas')
    var name = document.createElement('img')
    name.setAttribute('src', array[i].url)
    name.setAttribute('id', array[i].name);
    name.style = "position: absolute; margin: auto; top: " + array[i].locY + "px; left: " + array[i].locX + "px; height: " + array[i].height + "px;"
    canvas.appendChild(name)
    if (array[i].speed > 0) {
      obstacleTimer(array, i)
    }
  }
}

function obstacleCrasher(array, car) {
  for (var i = 0; i < array.length; i++) {
    var fordH = 30
    var fordW = 50
    if ((car.direction === 'north') || (car.direction === 'south')) {
      fordH = 50
      fordW = 30
    }
    var y = car.locY
    var x = car.locX
    var obX = array[i].locX
    var obY = array[i].locY
    var obH = array[i].height
    var obW = array[i].width
    if (!(((obY + obH - 10) < y) || ((obX + obW - 30) < x) || (obY > (y + fordH - 5)) || (obX > (x + fordW)))) {
      wrecker()
    }
  }
}

function wrecker() {
  var wrecked = document.getElementById('test')
  clearInterval(1)
  ford.speed = 0
  wrecked.setAttribute('src', 'https://media.giphy.com/media/26BRx71hqRexBe7Wo/giphy.gif');
  setTimeout((() => {
    restarter()
  }),5000)
}

function timer(car) {
  setInterval(function tester() {
    car.update(car);
  }, 20);
}

function obstacleTimer(array, index) {
  setInterval((() => {
    obstacleUpdater(array, index)
  }), 20);
}

function obstacleBouncer(car) {
  for (var i = 0; i < obstacles.length; i++) {
    if (!(obstacles[car].name === obstacles[i].name)) {
      var fordH = 30
      var fordW = 50
      if ((obstacles[car].direction === 'north') || (obstacles[car].direction === 'south')) {
        fordH = 50
        fordW = 30
      }
      var y = obstacles[car].locY
      var x = obstacles[car].locX
      var obX = obstacles[i].locX
      var obY = obstacles[i].locY
      var obH = obstacles[i].height
      var obW = obstacles[i].width
      if (!(((obY + obH) < y) || ((obX + obW) < x) || (obY > (y + fordH)) || (obX > (x + fordW)))) {
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
    obstacles[index].locX += 1
  }
  else if (obstacles[index].direction === 'north') {
    obstacles[index].direction = 'south'
    obstacles[index].locY += 1
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
    array[index].locY -= array[index].speed;
  }
  else if (array[index].direction === 'south') {
    array[index].locY += array[index].speed;
  }
  else if (array[index].direction === 'west') {
    array[index].locX -= array[index].speed;
  }
  else if (array[index].direction === 'east') {
    array[index].locX += array[index].speed;
  }
  el.style = "position: absolute; margin: auto; top: " + array[index].locY + "px; left: " + array[index].locX + "px; height: " + array[index].height + "px; transform: rotate( " + array[index].rotation + "deg); transition: transform .1s ease-in-out;"
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
    else if (((dir === 'north') && ((locY < 55) && (locX < 100))) || (dir === 'south') && ((locY > 615) && (locX < 100))) {
      (dir === 'south') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'east'
    }
    else if (((dir === 'north') && ((locY < 55)) && (locX > 500)) || ((dir === 'south') && ((locY > 615) && (locX > 500)))) {
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
    else if (((dir === 'north') && ((locY < 15) && (locX < 50))) || (dir === 'south') && ((locY > 660) && (locX < 50))) {
      (dir === 'south') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'east'
    }
    else if (((dir === 'north') && ((locY < 15)) && (locX > 550)) || ((dir === 'south') && ((locY > 660) && (locX > 550)))) {
      (dir === 'north') ? (array[index].rotation += -90) : (array[index].rotation += 90)
      array[index].direction = 'west'
    }
    else if ((((dir === 'west') && (locX < 20)) && (locY < 250) )|| (((dir === 'east') && (locX > 850)) && (locY < 250))) {
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
    this.locY -= this.speed;
  }
  else if (this.direction === 'south') {
    this.locY += this.speed;
  }
  else if (this.direction === 'west') {
    this.locX -= this.speed;
  }
  else if (this.direction === 'east') {
    this.locX += this.speed;
  }
  el.style = "position: absolute; margin: auto; top: " + car.locY + "px; left: " + car.locX + "px; transform: rotate( " + car.rotation + "deg)";
  el.setAttribute('class',car.direction);
//  console.log(this.location);
}

function crashChecker() {
  if ((ford.locX < 0)||(ford.locY < -5)||(ford.locX > 850)||(ford.locY > 660)) {
    wrecker()
  }
}

function restarter() {
  window.location.reload(true);
}

var ford = new Car(50, 100, 'east', 5, 'test', 180);

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    if (ford.direction === 'south') {
      ford.rotation += -180
    }
    else if (ford.direction === 'west') {
      ford.rotation += 90
    }
    else if (ford.direction === 'east') {
      ford.rotation += -90
    }
    ford.direction = 'north'
    ford.update(ford)
  }
  else if (event.key === 'ArrowDown') {
    if (ford.direction === 'north') {
      ford.rotation += 180
    }
    else if (ford.direction === 'east') {
      ford.rotation += 90
    }
    else if (ford.direction === 'west') {
      ford.rotation += -90
    }
    ford.direction = 'south'
    ford.update(ford)
  }
  else if (event.key === 'ArrowLeft') {
    if (ford.direction === 'east') {
      ford.rotation += -180
    }
    else if (ford.direction === 'south') {
      ford.rotation += 90
    }
    else if (ford.direction === 'north') {
      ford.rotation += -90
    }
    ford.direction = 'west'
    ford.update(ford)
  }
  else if (event.key === 'ArrowRight') {
    if (ford.direction === 'west') {
      ford.rotation += 180
    }
    else if (ford.direction === 'north') {
      ford.rotation += 90
    }
    else if (ford.direction === 'south') {
      ford.rotation += -90
    }
    ford.direction = 'east'
    ford.update(ford)
  }
  event.preventDefault()
} )
