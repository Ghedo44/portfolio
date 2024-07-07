import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="shadow sticky top-0 z-50 backdrop-blur-md bg-white/65">
      <div class="container mx-auto flex justify-between items-center p-6">
          <a href="#" class="font-bold text-xl text-gray-800">Federico Ghedini</a>
          <nav class="space-x-4">
              <a href="#about" class="text-gray-600 hover:text-blue-500">About</a>
              <a href="#projects" class="text-gray-600 hover:text-blue-500">Projects</a>
              <a href="#contact" class="text-gray-600 hover:text-blue-500">Contact</a>
          </nav>
      </div>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {

}
