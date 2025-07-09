import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSubmitting = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isSubmitting = true;

      // Simulera anrop till API
      setTimeout(() => {
        console.log('Formulär skickat:', this.formData);
        alert('Tack för ditt meddelande! Jag återkommer så snart som möjligt.');

        // Återställ formuläret
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };

        this.isSubmitting = false;
      }, 1000);
    }
  }
}
