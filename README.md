Foodie Restaurant Website
A restaurant website for DCOMP 204 – Assignment 2 (Limkokwing University): the Assignment 1 page designs turned into a real, working, responsive website.

Prepared by: Ibrahim Koroma Student ID: (fill this in) Lecturer: (fill this in)

Quick facts
Website name	Foodie Restaurant
Purpose	Show a restaurant's menu, story and photos, and let visitors book a table
Pages	5 — Home, About, Menu, Gallery, Contact
Built with	HTML5, CSS3, vanilla JavaScript
Frameworks / build tools	None — nothing to install, nothing to compile
Responsive	Phone, tablet and desktop
Version in this folder	Plain HTML/CSS/JS (open index.html and it runs)
The pages
File	Page	What is on it
index.html	Home	Big photo banner with the headline "Good Food Brings People Together", the Our Specialties dish cards, and the Book a Table button
about.html	About	The restaurant's story with a photo, plus three feature boxes (quality ingredients, expert chefs, fresh & local)
menu.html	Menu	Six dishes with photo, description and price, plus category filter buttons: All, Starters, Main Course, Drinks, Desserts
gallery.html	Gallery	A grid of food photos — click any photo to see it full size
contact.html	Contact	Address, phone, email and opening hours, a location box, and a message form
Every page shares the same header (logo, navigation, Book a Table button) and the same footer (address, phone, email, opening hours, copyright).

Features that work
Sticky navigation — the header stays at the top while you scroll, and the link for the page you are on is highlighted in the brand colour.
Mobile menu — on a phone the links collapse behind a hamburger button; tapping it opens the menu and the icon changes to an X.
Menu filter — on the Menu page, clicking a category shows only those dishes; "All" shows everything.
Gallery pop-up (lightbox) — click a photo to see it bigger with its caption; click outside it, or press Escape, to close it.
Book a Table form — a pop-up asking for name, phone, date, time, number of guests and special requests. It checks the phone number is real, and it will not let you pick a date in the past.
Contact form — checks that name, email and message are all filled in before confirming.
Confirmation messages — a short message slides in at the top of the page after a booking or a contact message (green = success, red = problem).
Keyboard friendly — Escape closes any open pop-up, form fields have labels, and the message area is announced to screen readers.
Automatic year — the footer copyright year updates itself every January.
Responsive design
The layout is built mobile-first and changes at three widths:

Screen	Width	What changes
Phone	below 640px	Everything in one column, hamburger menu
Small tablet	640px and up	Cards go 2 across, feature boxes go 3 across
Tablet	768px and up	Full horizontal navigation appears, menu and About go 2 columns, gallery goes 4 across
Desktop	1024px and up	Home specialty cards spread to 4 across
Text sizes use clamp(), so headings grow with the screen instead of jumping.

Look and feel
Element	Value
Heading font	Playfair Display (serif)
Body font	DM Sans (sans-serif)
Fonts loaded from	Google Fonts
Brand colour	--primary: oklch(0.58 0.16 40) — warm terracotta, used for buttons, prices and links
Background	Warm cream, dark charcoal footer
Rounded corners	0.5rem base radius
All colours and spacing are set once at the top of css/styles.css under :root, so a single line change re-themes the whole site.

Folder structure
foodie-html/
  index.html        Home page
  about.html        About page
  menu.html         Menu page
  gallery.html      Gallery page
  contact.html      Contact page
  README.md         This file
  HOW-TO-RUN.md     Where to change things (dish prices, colours, photos...)
  css/
    styles.css      All styling: colours, fonts, layout, breakpoints
  js/
    main.js         The behaviour: mobile menu, filters, lightbox, forms, messages
  assets/
    hero.jpg        Home banner
    about.jpg       About page photo
    chicken.jpg, pasta.jpg, burger.jpg, salad.jpg, cake.jpg, juice.jpg
                    The six dishes (used on Home, Menu and Gallery)
  favicon.ico       Browser tab icon
css/styles.css and js/main.js are linked from all five pages, so one edit updates every page.

How to run it
Easiest: double-click index.html — it opens in your browser.

In VS Code:

Extract the zip.
File > Open Folder → choose foodie-html.
Right-click index.html → Open with Live Server (install the free "Live Server" extension by Ritwick Dey if you don't have it). It refreshes the page every time you save.
No npm install, no build step, no server needed.

Things to know before you hand it in
Bookings are not sent to anyone. They are saved in the visitor's own browser (localStorage). Nobody receives them.
The contact form does not send email. It validates the message and shows a thank-you message, but nothing is stored or emailed.
The contact details are placeholders — "123 Foodie Lane, Freetown", "+232 76 123 4567", "info@foodie.com", "Mon–Sun 10:00 AM – 10:00 PM". Swap in the real ones before submitting.
The photos are AI-generated, not photos of a real restaurant. Replace them with your own using the same file names in assets/.
The header and footer are written inside every page file, so a phone-number change means editing all five files (use Find and Replace, Ctrl+H).
The fonts come from Google Fonts, so the first page load needs internet. Everything else works offline.
Files for submission
Deliverable	File
Plain HTML version (this one)	foodie-html-website.zip
React version of the same site	foodie-website (needs npm install then npm run dev)
Screenshots, GitHub link, A3 design board	still to be added by you
﻿# DCOMP204_BIT1101_IBRAHIM_KOROMA_905005651
