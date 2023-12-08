//Author: Kyle Hochdoerfer
//Title: app.module.ts
//Date: 11/13/23
//Description: Typescript for app module

//Import browser module and ng module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Import routing module and all app components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistCreateComponent } from './wishlist-create/wishlist-create.component';
import { HttpClientModule } from '@angular/common/http';

//Import Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { BookDetailsDialogComponent } from './book-details-dialog/book-details-dialog.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Create and export the app module, declaring and importing all components and Material modules
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ContactComponent,
    AboutComponent,
    BookDetailsDialogComponent,
    WishlistComponent,
    WishlistCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
