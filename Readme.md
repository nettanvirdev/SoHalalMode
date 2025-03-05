# Web Content Modifier Extension

A browser extension that replaces images with Will Smith pictures and filters out inappropriate language on web pages.

## Features

- Replaces all images on web pages with random Will Smith pictures
- Filters out inappropriate language and slang terms
- Works automatically as you browse the web
- Lightweight and low resource usage

## Installation

### Google Chrome

1. Download or clone this repository to your computer
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" button
5. Select the folder containing the extension files
6. The extension should now be installed and active

### Mozilla Firefox

1. Download or clone this repository to your computer
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on..."
4. Navigate to the extension folder and select the manifest.json file
5. The extension should now be installed and active (note: this is a temporary installation that will be removed when Firefox is closed)

For permanent installation in Firefox:

1. Package your extension as a .xpi file
2. Submit it to [Firefox Add-ons](https://addons.mozilla.org/developers/)

## How It Works

The extension works by:

- Replacing image sources with Will Smith pictures every half second
- Scanning text content for inappropriate words and replacing them with "[slang]"
- Automatically running in the background as you browse

## Configuration

Currently, the extension uses a predefined set of Will Smith images and slang words. To modify these:

- Edit the `willSmithPictures` array in `Content.js` to add or change images
- Modify the `slangs` array in the same file to customize filtered words

## Author

[Your Name] - [Your contact information or links]

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2023 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Note

This extension is for educational purposes. Please be responsible when using image replacement and language filtering features.
