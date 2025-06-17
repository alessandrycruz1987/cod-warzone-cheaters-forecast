import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { CodWarzoneCheatersForecastJsonService } from '../services/get/cod-warzone-cheaters-forecast-json.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  public game_title: string | undefined;
  public forecast_title: string | undefined;
  public forecast_message: string | undefined;
  public playability_title: string | undefined;
  public playability_value: string | undefined;
  public cheaters_index_title: string | undefined;
  public cheaters_index_value: string | undefined;

  constructor(
    private codWarzoneCheatersForecastJsonService: CodWarzoneCheatersForecastJsonService
  ) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.getCodWarzoneCheatersForecast(undefined);
  }

  onRefresh(event: any) {
    console.info('HOME PAGE - REFRESHING...');

    this.getCodWarzoneCheatersForecast(event?.target);
  }

  async getCodWarzoneCheatersForecast(target: any | undefined) {
    console.info('HOME PAGE - GETTING FORECAST...');

    const data: any = await firstValueFrom(this.codWarzoneCheatersForecastJsonService.getCodWarzoneCheatersForecast());

    console.info('HOME PAGE - FORECAST RESULT:', data);

    this.game_title = data.game_title;
    this.forecast_title = data.forecast_title;
    this.forecast_message = data.forecast_message;
    this.playability_title = data.playability_title;
    this.playability_value = data.playability_value;
    this.cheaters_index_title = data.cheaters_index_title;
    this.cheaters_index_value = data.cheaters_index_value;

    if (target != null) target.complete();
  }
}
