const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to Hacker News newest page
    await page.goto('https://news.ycombinator.com/newest');

    // Wait for the articles to load
    await page.waitForSelector('.athing');

    // Grab the first 100 articles and their post time
    const articles = await page.$$eval('.athing', (rows) => {
        return rows.slice(0, 100).map((row) => {
            // Hacker News uses '.title > a' for article links
            const titleElement = row.querySelector('.titleline > a');
            const title = titleElement ? titleElement.innerText : 'No Title';

            // Get the time from the next row using the 'age' class
            const ageElement = row.nextElementSibling?.querySelector('.age a');
            const age = ageElement ? ageElement.innerText : 'No Time';

            return { title, age };
        });
    });

    // Log the extracted articles for debugging
    console.log(articles);

    // Check if the articles are sorted from newest to oldest
    let sorted = true;
    for (let i = 1; i < articles.length; i++) {
        if (new Date(articles[i - 1].age) < new Date(articles[i].age)) {
            sorted = false;
            break;
        }
    }

    if (sorted) {
        console.log('The first 100 articles are sorted from newest to oldest.');
    } else {
        console.log('The articles are NOT sorted correctly.');
    }

    await browser.close();
})();
