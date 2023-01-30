let myName = 'El pepe';

console.log(myName);



               self._square(x_1 + 40, y_1 + 40, length)
                self._square(x_2 + 40, y_2 + 40, length)
                self.oled.line(x_2 + 40, y_2 + 40, x_2 + 40, y_2 + 40, 1)
                self.oled.line(x_1+length + 40, y_1 + 40, x_2+length + 40, y_2 + 40, 1)
                self.oled.line(x_1 + 40, y_1+length + 40, x_2 + 40, y_2+length + 40, 1)
                self.oled.line(x_1+length + 40, y_1+length + 40, x_2+length + 40, y_2+length + 40, 1)
                self.oled.show()