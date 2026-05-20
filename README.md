# CoinData — Setup Guide

## Project structure

```
coindata/
├── index.html          ← main website (single page)
├── css/
│   └── style.css       ← all styles
├── js/
│   └── main.js         ← tab switching only
├── samples/
│   ├── oswal_sample.csv
│   ├── pcgs_sample.csv
│   └── numista_sample.csv
└── README.md
```

## Steps to go live

### 1. Set up the contact form (5 minutes)
- Go to https://formspree.io and sign up free
- Create a new form → it gives you an ID like `xpwzabcd`
- Open `index.html` and replace `YOUR_FORMSPREE_ID` with your actual ID
- All contact form submissions will land in your email inbox

### 2. Add your remaining sample files
- Add sample CSVs for Zeno, Sedwick, Vauctions, Indian Coins & Stamps into the `samples/` folder
- In `index.html`, replace the placeholder tab content for each with a real table (copy the Oswal table structure)

### 3. Deploy to GitHub Pages (free)
1. Create a GitHub account at https://github.com if you don't have one
2. Create a new repository called `coindata`
3. Upload all files maintaining the folder structure
4. Go to repository Settings → Pages → Source: main branch → Save
5. Your site will be live at: `https://yourusername.github.io/coindata`

### 4. Optional — custom domain
- Buy `coindata.in` or `numismaticdata.com` on Namecheap (~₹800/year)
- In GitHub Pages settings, add it as a custom domain
- Follow GitHub's DNS instructions (takes ~1 hour to go live)

## Updating data
- Replace or add CSV files in `samples/` folder
- Update record counts in `index.html` when you scrape more data
- Push changes to GitHub — site updates automatically

## No frameworks, no build tools
This is plain HTML + CSS + JS. Open `index.html` in any browser to preview locally.
No npm install, no terminal commands needed.
