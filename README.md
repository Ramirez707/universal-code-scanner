Universal Code Scanner

Universal Code Scanner is a React Native application built with Expo that demonstrates a versatile, easy-to-use tool for scanning both QR codes and a wide range of barcode formats. Featuring a simple home screen, detailed about page, and dedicated scanning pages for QR and barcodes, this project showcases modern mobile development practices, clean UI design, and Expo Router integration.

-------

Features

| Feature                     | Description                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------- |
| QR Code Scanning            | Capture and process QR codes, opening URLs or displaying raw data when scanning non-URL content      |
| Barcode Scanning            | Support for over a dozen barcode types including UPC, EAN, Code128, Data Matrix, Aztec, PDF417, etc. |
| Permission Handling         | Declarative camera permission requests using `expo-camera`                                           |
| Scan Cooldown Lock          | Prevents duplicate scans with a configurable timeout                                                 |
| Easy Navigation             | Seamless routing with `expo-router`                                                                  |
| Responsive UI               | Styled with consistent layouts, modal fallbacks for permissions, and intuitive overlays              |

-------

Tech Stack

* Language: TypeScript, JavaScript
* Framework: React Native
* Platform: Expo
* Navigation: Expo Router
* Camera & Scanning: expo-camera, CameraView API
* UI Components: React Native core, @expo/vector-icons, ThemedText/View, ParallaxScrollView

-------

Setup Instructions

1. Prerequisites

* Node.js
* npm (or Yarn)
* Git CLI

2. Clone the Repository

   ```bash
   git clone https://github.com/Ramirez707/universal-code-scanner.git
   ```

3. Navigate to the Project Directory

   ```bash
   cd universal-code-scanner
   ```

4. Install Dependencies

   ```bash
   npm install
   ```

5. Start the App

   ```bash
   npx expo start
   ```

* Press `a` to open on Android emulator/device
* Press `i` to open on iOS simulator/device
* Press `w` to open in browser (web)

-------

Key Modules

| Module            | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| `index.tsx`       | Home screen with navigation to QR and Barcode scanner pages                            |
| `about.tsx`       | About page with app purpose, supported code types, and developer profile               |
| `qr-scanner.tsx`  | Dedicated QR code scanner with permission handling, scan lock, and overlay UI          |
| `bar-scanner.tsx` | Barcode scanner supporting Aztec, EAN, UPC, Code128, Data Matrix, PDF417, and more     |

-------

Author

Alex Ramirez
* https://www.linkedin.com/in/alex-ramirez-dev

-------