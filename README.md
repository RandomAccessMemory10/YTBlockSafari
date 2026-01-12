# YTBlockSafari
Finally, a YouTube adblocker for Safari on Mac. Very basic, open source and unsigned.
## Installation Instructions
### 1. Install the prebuilt .app package

Download YTBlockSafari.zip

Extract the zip file into your Applications folder.

Since this app is unsigned, you'll need to run this command in Terminal before you're able to open it:

`xattr -d com.apple.quarantine /Applications/YTBlockSafari`

Go to Safari Preferences (⌘,) -> Advanced, tick "Show Features for Web Developers"

Go to the newly added Developer option and tick "Allow unsigned extensions"

Go to Websites -> Extensions and find the YouTube adblocker. Set youtube.com to Allow.

Done!



### 2. Build from source using Terminal (Requires Xcode)

`git clone https://github.com/RandomAccessMemory10/YTBlockSafari.git --branch source YTBlockSafari-source`

`xcrun safari-web-extension-converter YTBlockSafari-source`

Xcode will then launch a project. Click run (⌘R), then go into Safari preferences and enable the extension.
