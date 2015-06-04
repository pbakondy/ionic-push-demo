# Ionic Push Demo App


GCM is [Google Cloud Messaging for Android](https://developers.google.com/cloud-messaging/).

APNS is [Apple Push Notification Service](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/RemoteNotificationsPG/Chapters/ApplePushService.html).

This demo application is made with [Ionic Push Alpha](http://blog.ionic.io/announcing-ionic-push-alpha/).

## Preparation

You need node.js and git preinstalled.

Install [Ionic](http://ionicframework.com/) and [Cordova](https://cordova.apache.org/):

```
npm install -g ionic cordova
```

Install Android environment (JDK, SDK) by following [these instructions](http://cordova.apache.org/docs/en/edge/guide_platforms_android_index.md.html) on Cordova docs.


Install iOS environment (SDK, Xcode) by following [these instructions](http://cordova.apache.org/docs/en/edge/guide_platforms_ios_index.md.html) on Cordova docs.

For iOS development you need to join to [iOS Developer Program](https://developer.apple.com/programs/ios/) ($99/year).

## Register at Ionic.io

Go to [apps.ionic.io](https://apps.ionic.io/) and register yourself.

Create a new application in the admin interface.

Copy the following data:
- APP_ID (the 'ID' on the listing page)
- PUBLIC_API_KEY (aka Public Key)
- PRIVATE_API_KEY (aka Secret Key)

## Register for GCM

Follow [this guide](http://docs.ionic.io/v1.0/docs/push-android-setup) at Ionic Docs site.

Copy the following data:
- Google API Key
- Google Private API_KEY

Register your key at Ionic with this command (after replacing placeholder):

```
ionic push --google-api-key YOUR_GOOGLE_API_KEY
```

## Register for APNS

Follow [this guide](http://docs.ionic.io/v1.0/docs/push-ios-setup) at Ionic Docs site.



## Create Ionic project

Replace APPNAME and APPID (reverse DNS format) and run the following command:

```
ionic start --appname APPNAME --id APPID pushdemo blank

cd pushdemo
```

Add Cordova plugins

```
ionic plugin add https://github.com/phonegap-build/PushPlugin.git
ionic add ngCordova
ionic add ionic-service-core
ionic add ionic-service-push
```

Replace html and js files in www directory with files of this repository.

Replace values of YOUR_APP_ID, YOUR_PUBLIC_API_KEY and YOUR_GCM_ID in <code>www/js/app.js</code>.

Upload app to Ionic server:

```
ionic upload
```

## Testing Android

Attach your phone by wire and run these commands:

```
ionic platform add android
ionic run android
```

After a successful start press the first button then the second button.

Now your devie is registered in Ionic server. You should see the device token below the second button, for example:

```
Device token: DEV-d9d25a4b-ea9c-498b-abc9-4735c8d19e16
```

You can grab this token value from Android logs by running this command:

```
adb logcat | grep SystemWebChromeClient
```

To [test sending push message](http://docs.ionic.io/v1.0/docs/push-testing) to your phone run this command after replacing Ionic Private Key and the previously displayed Device token:

```
curl -u PRIVATE_API_KEY: -H "Content-Type: application/json" -H "X-Ionic-Application-Id: APP_ID" https://push.ionic.io/api/v1/push -d '{"tokens":["DEVICE_TOKEN"],"notification":{"alert":"I come from planet Ion."}}'
```

This command should display a popup window with the "alert" message.

Currently broadcast messaging is not supported by Ionic in Alpha stage.


## License

ionic-push-demo is licensed under the MIT Open Source license. For more information, see the LICENSE file in this repository.
