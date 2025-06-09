import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  imports: [MatSelectModule , MatInputModule , MatFormFieldModule ,
            ReactiveFormsModule , MatButtonModule , MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{

  private fb = inject(FormBuilder)

  contactForm!: FormGroup;
  

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }


  onSubmit(e : Event): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);

      const form = {
        name : this.contactForm.get('name')?.value,
        email : this.contactForm.get('email')?.value,
        message : this.contactForm.get('message')?.value
      }
      
      e.preventDefault();

    emailjs.send(
        'service_zulvktn', // Replace with your EmailJS service ID
        'template_ok5aqcf', // Replace with your EmailJS template ID
        form,
        'vcj2DRc_AJMiruYv4' // Replace with your EmailJS public key
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert('Message sent successfully!');
        },
        (error: Error) => {
          alert('Failed to send message.');
        }
      );
      this.contactForm.reset();
    }
  }
}
