import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface Config {
  title: string;
  keywords: string;
  description: string;
  image: string;
  slug: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);

  private baseUrl = `https://ghedo.me/`;

  generateTags(inputConfig: Partial<Config>) {

    const config: Config = {
      title: inputConfig.title || 'Federico Ghedini - Portfolio',
      keywords: inputConfig.keywords || 'Federico Ghedini, Portfolio, Engineer, Angular',
      description: inputConfig.description || 'Hi, I am Federico Ghedini, an aerospace engineer with a passion for development.',
      image: inputConfig.image || 'assets/about4.png',
      slug: inputConfig.slug || '',
    };

    this.title.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ name: 'keywords', content: config.keywords });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.baseUrl + config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Federico Ghedini - Portfolio' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: this.baseUrl + config.image });
    this.meta.updateTag({ property: 'og:url', content: this.baseUrl + `${config.slug}` });
  
  }

}
