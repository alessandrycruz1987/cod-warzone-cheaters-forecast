import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodWarzoneCheatersForecastJsonService {

  constructor(
    private http: HttpClient
  ) { }

  public getCodWarzoneCheatersForecast(): Observable<any> {
    return this.http.get<any>(
      'https://raw.githubusercontent.com/alessadrycruz1987/cod-warzone-cheaters-forecast-json/main/cod-warzone-cheaters-forecast.json'
    ).pipe(
      catchError(error => {
        // Handle error here, for example, return a default value or rethrow
        console.error('Failed to fetch forecast:', error);

        return of(null);
      })
    );
  }
}
