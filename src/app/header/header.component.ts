import { Component, EventEmitter, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';



@Component({
  selector: 'app-header',
  imports: [MatIconModule , MatRippleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() scrollTo = new EventEmitter<string>()

  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  scrollToSection(sectionId: string) {
    this.scrollTo.emit(sectionId);
  }
}
