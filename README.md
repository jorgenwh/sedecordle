# SEDECORDLE

A word-guessing game where players solve 16 independent 5-letter word puzzles simultaneously using only 21 total guesses. Each guess applies to all 16 boards at once, with independent color-coded feedback per board.

Play at **[superwordle.com](https://superwordle.com)**

## Google Search setup

The page title, description, canonical URL, sharing metadata, and site-name
structured data are in `index.html`. Vite copies `public/robots.txt` and
`public/sitemap.xml` into the Firebase Hosting build automatically.

After deploying:

1. Open [Google Search Console](https://search.google.com/search-console) and add
   `superwordle.com` as a **Domain** property, unless it is already verified.
2. Verify ownership using the DNS TXT record Google provides. Add it at your DNS
   provider, keeping the existing records used by Firebase Hosting.
3. In **Sitemaps**, submit `https://superwordle.com/sitemap.xml`.
4. In **URL inspection**, inspect `https://superwordle.com/`, run **Test live URL**,
   and check that the rendered page contains the game introduction. Then choose
   **Request indexing**.
5. Use the **Page indexing** and **Performance** reports to monitor indexing and
   search traffic. Indexing takes time and is not guaranteed by submission.

Only the homepage belongs in the sitemap: Daily and Free play use the same URL.
