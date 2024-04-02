class ColorGenerator {
  // Método para generar un número aleatorio entre un rango dado
  static getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Método para generar un color aleatorio en formato RGB
  static getRandomColor() {
    let red = ColorGenerator.getRandomNumber(0, 255);
    let green = ColorGenerator.getRandomNumber(0, 255);
    let blue = ColorGenerator.getRandomNumber(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  // Método para generar un color aleatorio y mostrarlo por consola
  static displayRandomColor() {
    const randomColor = ColorGenerator.getRandomColor();
    console.log("Color aleatorio:", randomColor);
  }
}

// Llamar al método para mostrar un color aleatorio por consola
ColorGenerator.displayRandomColor();