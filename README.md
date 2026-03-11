# Fang Chen's Personal Homepage

A simple, elegant academic personal homepage built with pure HTML, CSS, and JavaScript.

## Features

- 📄 Clean and minimal design
- 📱 Fully responsive
- 🎓 Academic-focused layout
- 📝 Blog section
- 🚀 Easy to deploy on GitHub Pages

## Structure

```
FangChenHomepage/
├── index.html          # Main homepage
├── style.css           # Styling
├── script.js           # Interactive features
├── images/             # Images folder
│   ├── profile.jpg     # Your profile photo
│   ├── paper1.jpg      # Publication covers
│   └── project1.jpg    # Project covers
└── blog/               # Blog posts
    └── post1.html      # Individual blog posts
```

## Setup

1. Clone this repository
2. Replace placeholder content in `index.html` with your information
3. Add your images to the `images/` folder
4. Customize colors and styles in `style.css` if needed

## Deployment on GitHub Pages

1. Create a new repository named `yourusername.github.io`
2. Push this code to the repository
3. Go to repository Settings → Pages
4. Select "main" branch as source
5. Your site will be available at `https://yourusername.github.io`

## Customization

### Adding Publications

Edit the publications section in `index.html`:

```html
<div class="publication-item">
    <div class="pub-image">
        <img src="images/your-paper.jpg" alt="Paper Title">
    </div>
    <div class="pub-content">
        <h3>Your Paper Title</h3>
        <p class="authors"><strong>Your Name</strong>, Co-authors</p>
        <p class="venue">Conference/Journal, Year</p>
        <div class="pub-links">
            <a href="paper.pdf">Paper</a>
            <a href="https://github.com/...">Code</a>
        </div>
    </div>
</div>
```

### Adding Projects

Add project cards in the projects section:

```html
<div class="project-card">
    <img src="images/project.jpg" alt="Project">
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Description</p>
        <div class="project-links">
            <a href="#">GitHub</a>
            <a href="#">Demo</a>
        </div>
    </div>
</div>
```

## License

MIT License - feel free to use this template for your own homepage!
