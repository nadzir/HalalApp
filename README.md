# HalalApp

# Common Issues

### Signing fails or resource fork, Finder information, or similar detritus not allowed
Code signing no longer allows any file in an app bundle to have an extended attribute containing a resource fork or Finder info.
Run the command below to rectify
```
xattr -cr .
```

### Cant log in error
Run the command below 
```
defaults write com.apple.dt.Xcode DVTDeveloperAccountUseKeychainService -bool NO
```

### App crashed when open react native camera
Add a permission to ios
Remember to rerun react-native run-ios
```
	<key>NSCameraUsageDescription</key>
	<string>$(PRODUCT_NAME) needs to access camera</string>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string></string>
	<key>NSMicrophoneUsageDescription</key>
	<string>$(PRODUCT_NAME) needs to access microphone</string>
	<key>NSPhotoLibraryAddUsageDescription</key>
	<string>$(PRODUCT_NAME) needs to save photos</string>
	<key>NSPhotoLibraryUsageDescription</key>
	<string>$(PRODUCT_NAME) needs to access photo library</string>
```


### Need to link and test in android

-  https://github.com/idehub/react-native-google-analytics-bridge/wiki/Manual-installation