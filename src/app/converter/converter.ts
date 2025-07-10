import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class Converter {
  // Meter/Feet
  meter: number | null = null;
  feet: number | null = null;

  // Celsius/Fahrenheit
  celsius: number | null = null;
  fahrenheit: number | null = null;

  meterToFeet() {
    this.feet = this.meter !== null ? +(this.meter * 3.28084).toFixed(2) : null;
  }

  feetToMeter() {
    this.meter = this.feet !== null ? +(this.feet / 3.28084).toFixed(2) : null;
  }

  celsiusToFahrenheit() {
    this.fahrenheit =
      this.celsius !== null ? +((this.celsius * 9) / 5 + 32).toFixed(2) : null;
  }

  fahrenheitToCelsius() {
    this.celsius =
      this.fahrenheit !== null
        ? +(((this.fahrenheit - 32) * 5) / 9).toFixed(2)
        : null;
  }
}
