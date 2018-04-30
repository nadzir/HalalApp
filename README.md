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