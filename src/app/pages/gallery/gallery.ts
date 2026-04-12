import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; // Required for *ngFor loops!
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {

  // Inject Location into your constructor
  constructor(private router: Router, private location: Location) {}

  // Add the goBack function
  // Updated goBack function with "Smart Logic"
  goBack() {
    const isLoggedIn = localStorage.getItem('savedEmail');

    if (isLoggedIn) {
      // If logged in, always go to the Home Dashboard
      this.router.navigate(['/home']);
    } else {
      // If guest, go back to the main Landing Page
      this.router.navigate(['/']);
    }
  }

  // Temporary mock data to test our grid layout
  animeList = [
    { title: 'Attack on Titan', 
      genre: 'Drama, Action', 
      image: './images/AoT.jpg',
      pageRoute: "/aot"
    },

    { title: 'Black Clover', 
      genre: 'Action, Adventure', 
      image: './images/blackclover.jpg', 
      pageRoute: "/blackclover"
    },

    { title: 'Bleach', 
      genre: 'Supernatural', 
      image: './images/Bleach.jpg', 
      pageRoute: "/bleach"
    },

    { title: 'Death Note', 
      genre: 'Psychological', 
      image: './images/Death note.jpg', 
      pageRoute: "/death-note"
    },

    { title: 'Demon Slayer', 
      genre: 'Dark Fantasy', 
      image: './images/Demon Slayer.jpg', 
      pageRoute: "/demon-slayer" 
    },

    { title: 'Haikyuu!!', 
      genre: 'Drama, Sports', 
      image: './images/Haikyu!!.jpg', 
      pageRoute: "/haikyu"
     },

    { title: 'Hunter X Hunter', 
      genre: 'Adventure', 
      image: './images/Hunterxhunter.jpg', 
      pageRoute: "/hunter-x-hunter" 
    },

    { title: 'Jujutsu Kaisen', 
      genre: 'Action', 
      image: './images/Jjk.jpg', 
      pageRoute: "/jjk" 
    },

    { title: 'My Hero Academia', 
      genre: 'Superhero', 
      image: './images/MHA.jpg', 
      pageRoute: "/my-hero-academia" 
    },

    { title: 'Naruto Shippuden', 
      genre: 'Action', 
      image: './images/Naruto.jpg', 
      pageRoute: "/naruto-shippuden" 
    },

    { title: 'One Piece', 
      genre: 'Adventure', 
      image: './images/One Piece.jpg', 
      pageRoute: "/one-piece" 
    },

    { title: 'Solo Leveling', 
      genre: 'Action,Fantasy', 
      image: './images/Solo Leveling.jpg', 
      pageRoute: "/solo-leveling" 
    }
  ];

  // NEW: The list that will actually be displayed on the screen. 
  // It starts with everything from the master list.
  filteredAnimeList = [...this.animeList];

  // NEW: The function that runs every time you type a letter
  filterAnime(searchTerm: string) {
    if (!searchTerm) {
      // If the search bar is empty, show everything again
      this.filteredAnimeList = [...this.animeList];
      return;
    }

    // Convert everything to lowercase so "DEMON" and "demon" both work
    const lowerCaseTerm = searchTerm.toLowerCase();

    // Filter the list based on title OR genre
    this.filteredAnimeList = this.animeList.filter(anime => 
      anime.title.toLowerCase().includes(lowerCaseTerm) || 
      anime.genre.toLowerCase().includes(lowerCaseTerm)
    );
  }

  viewPictures(animeRoute: string) {
  // Check the "notebook" to see if a user is logged in
  const isLoggedIn = localStorage.getItem('savedEmail');

  if (isLoggedIn) {
    // Navigate directly to the route provided in your animeList (e.g., "/aot")
    this.router.navigate([animeRoute]); 
  } else {
    // If GUEST, block access and send them to Login
    alert("You must Login or Sign up to view the full gallery pictures!");
    this.router.navigate(['/login']);
  }
}

}