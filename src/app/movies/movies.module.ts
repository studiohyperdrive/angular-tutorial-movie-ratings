import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesOverviewComponent } from './pages/movies-overview/movies-overview.component';
import { MoviesAddComponent } from './pages/movies-add/movies-add.component';
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';



@NgModule({
  declarations: [MoviesOverviewComponent, MoviesAddComponent, MovieTileComponent],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
