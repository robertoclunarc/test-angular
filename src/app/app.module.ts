import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule} from '@angular/material/core';
import { CdkTableModule} from '@angular/cdk/table';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { MatChipsModule} from '@angular/material/chips';
import { MatMenuModule} from '@angular/material/menu';

import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DetallesComponent } from './components/detalles/detalles.componet';
import { ParticipacionesComponent } from './components/participaciones/participaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculaComponent,
    DetallesComponent,
    ParticipacionesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
		ReactiveFormsModule,
    MatPaginatorModule, MatTableModule,MatFormFieldModule, MatInputModule,MatCardModule,MatDividerModule,MatNativeDateModule,CdkTableModule, 
    MatIconModule,MatButtonModule,MatListModule,MatChipsModule,MatMenuModule,MatSortModule,
    BrowserAnimationsModule,
    CommonModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }