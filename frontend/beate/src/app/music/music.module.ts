import { NgModule } from '@angular/core';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [AlbumComponent, TrackComponent],
  imports: [],
  exports: [AlbumComponent, TrackComponent],
})
export class MusicModule {}
