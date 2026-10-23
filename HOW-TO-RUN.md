# Foodie Restaurant Website - Plain HTML Version

This is the website as plain HTML, CSS and JavaScript files. There is nothing to install and
nothing to build: double-click `index.html` and the website opens in your browser.

## Folder contents

```
foodie-html/
  index.html      Home page
  about.html      About page
  menu.html       Menu page
  gallery.html    Gallery page
  contact.html    Contact page
  css/styles.css  All the styling (colours, fonts, spacing)
  js/main.js      The things that move (menu filters, pop-ups, forms)
  assets/         The photos
  HOW-TO-RUN.md   This file
```

## Open it in VS Code

1. Extract the zip somewhere easy to find, for example your Desktop.
2. In VS Code: **File > Open Folder** and choose the `foodie-html` folder.
3. Right-click `index.html` in the file list on the left and choose **Open with Live Server**.
   - If you do not see "Open with Live Server": click the Extensions icon on the left
     (or press Ctrl+Shift+X), search for **Live Server**, and install the one by Ritwick Dey.
   - Live Server is the easiest way because it refreshes the page every time you save a file.
4. No Live Server? Just double-click `index.html` in Windows Explorer / Finder and it opens
   in your browser. You will need to press F5 in the browser to see your changes.

## Where to change things

| I want to change... | Open this file |
| --- | --- |
| The words and pictures on the Home page | `index.html` |
| The About page story | `about.html` |
| A dish name, description or price | `menu.html` (look for the dish name) |
| Add or remove a photo in the Gallery | `gallery.html` |
| The address, phone number or email | `contact.html` **and** the footer at the bottom of every page |
| Colours, fonts and spacing | `css/styles.css` (the values at the very top under `:root`) |
| The menu filters, pop-ups or forms | `js/main.js` |
| The photos themselves | replace a file in `assets/` with your own photo of the same name |

### Changing the brand colour
Open `css/styles.css` and edit this line near the top:

```
--primary: oklch(0.58 0.16 40);
```

You can also use a normal colour code there, for example `--primary: #d1603d;`.

## Good to know
- The header and footer are written inside every page file. If you change the phone number,
  change it in all five files (or use Find and Replace: Ctrl+H).
- Bookings typed into "Book a Table" are saved in the visitor's own browser only
  (localStorage). Nobody receives them. Messages from the Contact page show a thank-you
  message but are not emailed anywhere.
- The fonts (Playfair Display and DM Sans) load from Google Fonts, so the first page open
  needs internet. The rest works offline.
