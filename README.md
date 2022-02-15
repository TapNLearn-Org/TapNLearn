# README #

This is a project created for first step learning of kids.
Always remember this project is in React Native. So look for solutions only with react native libraries.

## Following package is to be installed.
* expo init FirstStepLearning
* git init
* git remote add origin https://amankachhal99@bitbucket.org/amankachhal99/tapnlearn.git
* git add -A
* git commit -m "Initial commit"
* git merge origin/master --allow-unrelated-histories
* git push -u origin master
* npm install @react-navigation/native
* expo install react-native-screens react-native-safe-area-context

## deploy to android play store
* Update the version of the app in app.json -> version & app.json -> android -> versionCode.
* Build the application using command expo build:android -t app-bundle
* download the latest build from https://expo.dev/accounts/aman.kachhal99/projects/TapNLearn/builds
* Go to https://play.google.com/console/u/0/developers/6668536516142373952/app/4972841234965412753/tracks/production to create a new release to android play store.
* Upload the information and build and Review Release and Start Rollout.

## Package to android abb
* expo build:android -t apk
* expo login

## Task Done
* Move the images to S3 Bucket

## Task TODO
* Improve the images of app.
* Back Button
* app to be orientation of the screen
* AdMob Integration
* Make home screen button from picture.
* Offline mode for the App
* Add Music and voice
* back button on the right side of the screen
* 