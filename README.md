# ARTIn Foundation Website

Oficjalna strona internetowa Fundacji ARTIn - organizacji wspierającej polską kulturę i sztukę.

## 🌐 Live Website

Visit: [https://agamaciag.github.io](https://agamaciag.github.io)

## 📁 Repository Structure

```
agamaciag.github.io/
├── index.html              # Main website file
├── images/                 # Image directory
│   ├── piano-hands.jpg
│   ├── concert-hall.jpg
│   ├── musicians-group.jpg
│   └── music-education.jpg
└── README.md              # This file
```

## 🎨 Design Features

- Modern, minimalist brutalist design
- Fully responsive (mobile, tablet, desktop)
- Custom cursor interaction
- Smooth animations and transitions
- Three main sections: O nas, Wydarzenia, Wspieraj nas
- Professional photography integration

## 🖼️ Adding Images

Replace the placeholder image paths in `index.html` with your actual images:

1. Upload images to the `images/` folder
2. Name them as specified:
   - `piano-hands.jpg` - Close-up of hands on piano
   - `concert-hall.jpg` - Concert hall performance
   - `musicians-group.jpg` - Group of musicians
   - `music-education.jpg` - Music education session

**Image Requirements:**
- Format: JPG or PNG
- Recommended width: 1920px minimum
- File size: Under 500KB (optimized for web)

## 🚀 Deployment

This site is automatically deployed via GitHub Pages. Any push to the `main` branch will update the live website.

## 🛠️ Local Development

To view the site locally:

1. Clone this repository
2. Open `index.html` in your web browser
3. No build process required!

## 📝 Content Updates

### Updating Events

Edit the events section in `index.html` around line 250-300. Each event follows this structure:

```html
<div class="border-t border-black py-8...">
    <h3>Event Title</h3>
    <p>Location</p>
    <div id="event-X">
        <p>Description</p>
    </div>
</div>
```

### Updating Contact Email

Change the email in the footer (around line 450):

```html
<a href="mailto:marzena@mikosz.net">marzena@mikosz.net</a>
```

## 📧 Contact

For questions about this website, contact:
- Email: marzena@mikosz.net
- Developer: Aga Maciag

## 📄 License

© 2025 Fundacja ARTIn. All rights reserved.

---

**Technical Stack:**
- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript
- Google Fonts (Inter)

**Browser Support:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers