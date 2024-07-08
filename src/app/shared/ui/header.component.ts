import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  // host: {
  //   class: 'block h-16'
  // },
  template: `
    <div class="h-16">
      <header class="h-16 shadow fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/65">
        <div class="container mx-auto flex justify-between items-center h-full px-6">
            <a href="#" class="font-bold text-xl text-gray-800">Federico Ghedini</a>
            <nav class="space-x-4">
                <a href="#about" class="text-gray-600 hover:text-blue-500">About</a>
                <a href="#projects" class="text-gray-600 hover:text-blue-500">Projects</a>
                <a href="#contact" class="text-gray-600 hover:text-blue-500">Contact</a>
            </nav>
        </div>
      </header>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {

}
