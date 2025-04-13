# Currency Converter

A simple, web-based currency converter that allows you to quickly convert amounts between different currencies. This project uses [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) for real-time exchange rates and [Flags API](https://flagsapi.com/) for country flags.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Credits](#credits)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## Demo

You can see it live by simply opening `index.html` in any modern web browser.

---

## Features

- Real-time currency conversion using the latest exchange rates  
- Select from multiple currencies  
- Automatically displays relevant country flags based on selected currency  
- Clean and intuitive user interface  

---

## Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/RojinxChhetri/currency-converter.git
   ```
2. **Open the project folder**  
   ```bash
   cd currency-converter
   ```
3. **Open `index.html`**  
   Double-click on `index.html` (or open it in your preferred browser). The app will run immediately in your browser.

There is no separate build step or server requirement. Everything is client-side.

---

## Usage

1. Enter the amount you want to convert in the *Enter amount* field (defaults to `1`).  
2. Select the currency you are converting *From* (e.g., `AUD`).  
3. Select the currency you are converting *To* (e.g., `NPR`).  
4. Click **Get Exchange Rate**.  
5. The conversion result and the actual exchange rate are displayed below.

---

## Project Structure

```
currency-converter/
│
├── index.html       // Main HTML file
├── style.css        // Custom CSS styles
├── app.js           // Main logic for currency conversion
├── codes.js         // Country list and related data for referencing flags
└── README.md        // Project documentation (this file)
```

- **`index.html`**  
  - Contains the structure and layout of the webpage.
  - Links to `style.css`, `app.js`, and `codes.js`.
- **`style.css`**  
  - Handles all the styling for the page (responsive layout, color, etc.).
- **`app.js`**  
  - Core functionality to fetch exchange rates and convert amounts.
  - Event listener for the “Get Exchange Rate” button.
- **`codes.js`**  
  - Contains a dictionary of currency codes mapped to two-letter country codes.

---

## Credits

- [@fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) – for real-time currency exchange rates  
- [Flags API](https://flagsapi.com/) – for country flags displayed next to each currency  

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any bugs, suggestions, or feature requests.

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the project.
2. Create a new branch: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.

---

## Contact

**Author:** [Rojin Chhetri](https://github.com/RojinxChhetri)  
**Email:** [info@rojinchhetri.com](mailto:info@rojinchhetri.com)

---

## License

This project is open source and available under the [MIT License](LICENSE). Feel free to use it for your own projects!

---
