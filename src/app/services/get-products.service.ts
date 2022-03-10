import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  private movie = new Subject<IProduct[]>();
  public movies$: Observable<IProduct[]> = this.movie.asObservable()
  AddToCartService: any;

  constructor(private http: HttpClient) { }

  getMovies(): void {
    this.http.get<IProduct[]>(environment.getFromApiURL).subscribe((movie) => {
      this.movie.next(movie)
    })
  }
}
