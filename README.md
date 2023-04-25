# Agora Test

### Hey there!
### Make sure to install all the software mentioned below to get the environment setup ready. 


| Software      | Link/Command/version           |
| ------------- |:-------------:|
| Android studio/Android SDK      | [Android Studio](https://developer.android.com/studio?gclid=CjwKCAjwr56IBhAvEiwA1fuqGtsFGKAqttKRoMXfKzNpxb1yjTVvlvKJl1uJjwZ22lk5oepp8O8XRxoCy14QAvD_BwE&gclsrc=aw.ds#downloads) |
| Xcode 12.5+ (macOS only)     | [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)      |
| NodeJS v14.17.3 | [NodeJS](https://nodejs.org/download/release/v14.17.3/)      |
| Cordova | `npm i -g cordova@latest`      |
| ionic (v5.4.16) | `npm i -g ionic@5.4.16`      |
| native-run | `npm i -g native-run`      |
| JDK  | version 8+      |
| cocoapods (macOS only)  | latest version      |


# Commands to setup repository.

1. Install the node modules
```sh
npm i
```
2. Add the platform
```sh
cordova platform add android ios
```
3. To run and connected device, platform can be either android or ios
```sh
ionic cordova run {{platform}} 
```
4. To build the project, platform can be either android or ios
```sh
ionic cordova build {{platform}} 
```