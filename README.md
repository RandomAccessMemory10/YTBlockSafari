# YTBlockSafari
Finally, a YouTube adblocker for Safari on Mac. Very basic.
## Installation Instructions
### 1. Build Manually

Download YTBlockSafari.zip

Extract the zip file into any desired folder.

Go to Safari Preferences (⌘,) -> Advanced, tick "Show Features for Web Developers"

Go to the newly added Developer option and tick "Allow unsigned extensions"

Click the button right below that reads "Add Temporary Extension..."

Select the extracted folder.

Go to Websites -> Extensions and find the YouTube adblocker. Set youtube.com to Allow.

Done!



### 2. Build using Terminal (Requires Xcode)

`git clone https://github.com/RandomAccessMemory10/YTBlockSafari.git --branch source YTBlockSafari-source`

`xcrun safari-web-extension-converter YTBlockSafari-source`

Xcode will then launch a project. Click run (⌘R), then go into Safari preferences and enable the extension.
