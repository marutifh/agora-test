import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import AgoraRTM from 'agora-rtm-sdk'; // Uncomment if node package installed.

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {

	@ViewChild('video') video;

	public appId: any;
	public channel: any;
	public uid: any;
	public token: any;

	public isUserJoined: boolean = false;

	constructor(
		private zone: NgZone,
		public navCtrl: NavController,
		public navParams: NavParams) {
			this.appId = "YOUR_APP_ID";
			this.token = null;
			this.channel = "TEST";
			this.uid = 555;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');

		// Uncomment if node package installed.
		// const appID = "2c9cfd93d2df4f90a2dbf4647953e221";
		// const client = AgoraRTM.createInstance(appID);
	}

	loadAgoraUIKit() {
		if (this.video) {
			this.video.nativeElement.addEventListener('agoraUIKitEndcall', (e) => {
				console.log("Call end from el event listener!");
				this.appId = null;
				this.token = null;
				this.channel = null;
				this.uid = 555;
			});

			this.video.nativeElement.addEventListener('agoraUserJoinedCall', (e) => {
				console.log("agoraUserJoinedCall from el event listener!");
				this.zone.run(() => {
					this.isUserJoined = true;
				});
			});

			this.video.nativeElement.addEventListener('agoraUserPublishedCall', (e) => {
				console.log("agoraUserPublishedCall from el event listener!");
				this.zone.run(() => {
					this.isUserJoined = true;
				});
			});
		}
	}
}
