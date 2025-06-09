import { Component, EventEmitter, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule , MatTooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Output() scrollTo = new EventEmitter<string>()
  
  scrollToSection(sectionId: string) {
    this.scrollTo.emit(sectionId);
  }
}
