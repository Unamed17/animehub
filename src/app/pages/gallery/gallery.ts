import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Footer } from '../../headfoot/footer/footer';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, Footer], 
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {

  constructor(private router: Router, private location: Location) {}

  goBack() {
  const isLoggedIn = localStorage.getItem('savedEmail');

  if (isLoggedIn) {
    this.router.navigate(['/home']);
  } else {
    this.router.navigate(['/']);
  }
}

  animeList = [
    { title: 'Attack on Titan', 
      genre: 'Drama, Action', 
      image: './images/Cover/AoT.jpg',
      pageRoute: "/aot"
    },

    { title: 'Black Clover', 
      genre: 'Action, Adventure', 
      image: './images/Cover/blackclover.jpg', 
      pageRoute: "/blackclover"
    },

    { title: 'Bleach', 
      genre: 'Supernatural', 
      image: './images/Cover/Bleach.jpg', 
      pageRoute: "/bleach"
    },

    { title: 'Death Note', 
      genre: 'Psychological', 
      image: './images/Cover/Death note.jpg', 
      pageRoute: "/death-note"
    },

    { title: 'Demon Slayer', 
      genre: 'Dark Fantasy', 
      image: './images/Cover/Demon Slayer.jpg', 
      pageRoute: "/demon-slayer" 
    },

    { title: 'Haikyuu!!', 
      genre: 'Drama, Sports', 
      image: './images/Cover/Haikyu!!.jpg', 
      pageRoute: "/haikyu"
     },

    { title: 'Hunter X Hunter', 
      genre: 'Adventure', 
      image: './images/Cover/Hunterxhunter.jpg', 
      pageRoute: "/hunter-x-hunter" 
    },

    { title: 'Jujutsu Kaisen', 
      genre: 'Action', 
      image: './images/Cover/Jjk.jpg', 
      pageRoute: "/jjk" 
    },

    { title: 'My Hero Academia', 
      genre: 'Superhero', 
      image: './images/Cover/MHA.jpg', 
      pageRoute: "/my-hero-academia" 
    },

    { title: 'Naruto Shippuden', 
      genre: 'Action', 
      image: './images/Cover/Naruto.jpg', 
      pageRoute: "/naruto" 
    },

    { title: 'One Piece', 
      genre: 'Adventure', 
      image: './images/Cover/One Piece.jpg', 
      pageRoute: "/one-piece" 
    },

    { title: 'Solo Leveling', 
      genre: 'Action,Fantasy', 
      image: './images/Cover/Solo Leveling.jpg', 
      pageRoute: "/solo-leveling" 
    }
  ];


  filteredAnimeList = [...this.animeList];

  filterAnime(searchTerm: string) {
    if (!searchTerm) {
      this.filteredAnimeList = [...this.animeList];
      return;
    }

    const lowerCaseTerm = searchTerm.toLowerCase();


    this.filteredAnimeList = this.animeList.filter(anime => 
      anime.title.toLowerCase().includes(lowerCaseTerm) || 
      anime.genre.toLowerCase().includes(lowerCaseTerm)
    );
  }

  viewPictures(animeRoute: string) {

  const isLoggedIn = localStorage.getItem('savedEmail');

  if (isLoggedIn) {
    this.router.navigate([animeRoute]); 
  } else {
    alert("You must Login or Sign up to view the full gallery pictures!");
    this.router.navigate(['/login']);
  }
}
}