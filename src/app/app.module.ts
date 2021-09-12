import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculaComponetComponent } from './pelicula-componet/pelicula-componet.component';
import { MatSortModule } from '@angular/material/sort';
import {MatNativeDateModule} from '@angular/material/core';
import {CdkTableModule} from '@angular/cdk/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    PeliculaComponetComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
		ReactiveFormsModule,
    MatPaginatorModule, MatTableModule,MatFormFieldModule, MatInputModule,MatCardModule,MatDividerModule,MatNativeDateModule,CdkTableModule, MatIconModule,MatButtonModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSortModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }