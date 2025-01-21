function onMouseMove(event) {
    var path = new Path.Circle({
      center: event.middlePoint,
      radius: event.delta.length
    })
    path.fillColor = {
      hue: event.count * 3,
      saturation: 1,
      brightness: 1
    }
  }