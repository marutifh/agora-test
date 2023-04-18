import { Component, ViewChild, OnInit, NgZone } from '@angular/core';
import { Platform, AlertController, Config, Nav, NavController, App, Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  template: '<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>'
})
export class MyApp {
  public rootPage: any = 'HomePage';
  firebasePlugin;
  constructor(
    private platform: Platform,
    public splashScreen: SplashScreen,
  ) {
    platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }
}
