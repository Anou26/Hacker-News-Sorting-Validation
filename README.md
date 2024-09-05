# Hacker-News-Sorting-Validation

This project is a simple automation script that validates if the first 100 articles on the [Hacker News Newest Page](https://news.ycombinator.com/newest) are sorted from newest to oldest. The script is built using [Playwright](https://playwright.dev/) and is written in JavaScript.

## Features

- **Web Scraping:** Fetches the latest 100 articles from Hacker News.
- **Sorting Validation:** Checks if the articles are correctly sorted from newest to oldest based on their posting time.
- **Console Logging:** Logs the titles and timestamps of the articles to the console for debugging.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Anou26/Hacker-News-Sorting-Validation.git
    cd Hacker-News-Sorting-Validation
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Install Playwright browsers:

    ```bash
    npx playwright install
    ```

## Running the Script

To run the script, simply use the following command:

```bash
node index.js
```

This will:

- Open a Chromium browser.
- Navigate to the Hacker News "Newest" page.
- Extract the titles and timestamps of the first 100 articles.
- Validate whether the articles are sorted from newest to oldest.
- Print the result in the console.

## Code Overview

The main functionality is in `index.js`. It uses Playwright to automate the browser, navigate to Hacker News, and validate the article sorting.

- **Launch browser:** The browser is launched in non-headless mode for easier debugging.
- **Fetch data:** The script selects the first 100 articles and their post times.
- **Validation:** The script compares the post times to verify if they are sorted correctly.

## Project Structure

```plaintext
├── node_modules/      # Installed dependencies
├── .gitignore         # Git ignore file
├── index.js           # Main script
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Lockfile for dependencies
└── README.md          # This file
```

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to submit a pull request.

## Contact

For any issues or inquiries, you can reach out through [GitHub Issues](https://github.com/Anou26/Hacker-News-Sorting-Validation/issues).

