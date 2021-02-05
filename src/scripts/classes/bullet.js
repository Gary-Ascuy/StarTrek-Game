class Bullet {
  constructor(el, x = 0, y = 0, angle = 0) {
    this.el = el;

    this.setState();
    this.setAngle(angle);
    this.setPosition(x, y);
    this.setVisibility(true);
  }

  setState(go = 0, direction = 0) {
    this.state = { go, direction };
  }

  setAngle(angle) {
    this.angle = angle;
    this.el.style.transform = `rotate(${angle}deg)`;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;

    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
  }

  setVisibility(visible) {
    this.el.style.visibility = visible ? "visible" : "hidden";
  }

  play() {
    this.timer = setInterval(() => {
      const { go, direction } = this.state;
      if (go === 0 && direction === 0) return;

      const angle = (this.angle + direction) % 360;
      const x = this.x + Math.sin((this.angle / 360.0) * 2 * Math.PI) * go;
      const y = this.y - Math.cos((this.angle / 360.0) * 2 * Math.PI) * go;

      this.setPosition(x, y);
      this.setAngle(angle);
    }, 0.3);
  }

  stop() {
    clearInterval(this.timer);
  }

  static create(parent, imagePath, extraClass, x = 0, y = 0, angle = 0) {
    const img = document.createElement("img");
    // img.className = `starship ${extraClass}`
    img.className = `bullet`;
    img.src = imagePath;
    parent.appendChild(img);

    return new StarShip(img, x, y, angle);
  }
}
