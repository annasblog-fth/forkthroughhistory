[Uploading README.md…]()
# Fork Through History

A food blog exploring the cultural, historical, and ingredient origins of dishes from around the world — celebrating present holidays and the people behind them.

> *"Scooping up festive recipes from around the world."*

🌐 **Live site:** https://annasblog-fth.github.io/forkthroughhistory/

## About# Fork Through History

A food blog exploring the cultural, historical, and ingredient origins of dishes from around the world — celebrating present holidays and the people behind them.

> *"Scooping up festive recipes from around the world."*

🌐 **Live site:** https://annasblog-fth.github.io/forkthroughhistory/

## About

Fork Through History is a flavor dictionary — a food blog where every recipe focuses on the origin of the dish: culturally, historically, and through its ingredients. Published every major holiday, each entry explores a different country, a different era, and a different tradition.

## GitHub Pages Setup

### Quick Setup

1. Create a new GitHub repository named `forkthroughhistory` under the `annasblog-fth` account
2. Upload all files from this folder, preserving the folder structure:
   ```
   index.html
   css/style.css
   js/main.js
   js/components.js
   images/logo.jpg
   pages/archive.html
   pages/recipe-zongzi.html
   ```
3. Go to your repository → **Settings** → **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose branch: `main`, folder: `/ (root)`
6. Click **Save** — your site will be live at `https://annasblog-fth.github.io/forkthroughhistory/`

### Adding Real Recipe Photos

Replace the placeholder `<div class="img-placeholder">` blocks with actual `<img>` tags:

```html
<!-- Replace this: -->
<div class="img-placeholder">
  <span class="ph-icon">🍲</span>
  <span class="ph-label">Mole Negro</span>
</div>

<!-- With this: -->
<img src="../images/your-photo.jpg" alt="Mole Negro dish" class="parallax-img">
```

Upload your photos to the `images/` folder and reference them by filename.

### Adding New Recipes

1. Copy `pages/recipe-mole.html` → rename to `pages/recipe-yourname.html`
2. Update all content: title, origin tags, history text, ingredients, steps, storage
3. Add a card in `pages/archive.html` pointing to the new page
4. Update `index.html` featured recipe section if it's the latest

### Structure

```
forkthroughhistory/
├── index.html          ← Landing page
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── main.js         ← Parallax, transitions, stamp borders, checkboxes
│   └── components.js   ← Shared header/footer helpers
├── images/
│   └── logo.jpg        ← Your logo
└── pages/
    ├── archive.html    ← Recipe grid archive
    └── recipe-zongzi.html ← Full recipe template
```

## Design System

- **Background:** Tyrian Purple `#4E0535`
- **Dark accent:** `#3B032F`
- **Text:** Off-white `#FCFAE8`
- **Links/Buttons:** Sage green `#CBD189`
- **Title font:** Faculty Glyphic
- **Body font:** Crimson Pro

## Contact

annasblogfth@gmail.com


Fork Through History is a flavor dictionary — a food blog where every recipe focuses on the origin of the dish: culturally, historically, and through its ingredients. Published every major holiday, each entry explores a different country, a different era, and a different tradition.

## GitHub Pages Setup

### Quick Setup

1. Create a new GitHub repository named `forkthroughhistory` under the `annasblog-fth` account
2. Upload all files from this folder, preserving the folder structure:
   ```
   index.html
   css/style.css
   js/main.js
   js/components.js
   images/logo.jpg
   pages/archive.html
   pages/recipe-mole.html
   ```
3. Go to your repository → **Settings** → **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose branch: `main`, folder: `/ (root)`
6. Click **Save** — your site will be live at `https://annasblog-fth.github.io/forkthroughhistory/`

### Adding Real Recipe Photos

Replace the placeholder `<div class="img-placeholder">` blocks with actual `<img>` tags:

```html
<!-- Replace this: -->
<div class="img-placeholder">
  <span class="ph-icon">🍲</span>
  <span class="ph-label">Mole Negro</span>
</div>

<!-- With this: -->
<img src="../images/your-photo.jpg" alt="Mole Negro dish" class="parallax-img">
```

Upload your photos to the `images/` folder and reference them by filename.

### Adding New Recipes

1. Copy `pages/recipe-mole.html` → rename to `pages/recipe-yourname.html`
2. Update all content: title, origin tags, history text, ingredients, steps, storage
3. Add a card in `pages/archive.html` pointing to the new page
4. Update `index.html` featured recipe section if it's the latest

### Structure

```
forkthroughhistory/
├── index.html          ← Landing page
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── main.js         ← Parallax, transitions, stamp borders, checkboxes
│   └── components.js   ← Shared header/footer helpers
├── images/
│   └── logo.jpg        ← Your logo
└── pages/
    ├── archive.html    ← Recipe grid archive
    └── recipe-mole.html ← Full recipe template
```

## Design System

- **Background:** Tyrian Purple `#4E0535`
- **Dark accent:** `#3B032F`
- **Text:** Off-white `#FCFAE8`
- **Links/Buttons:** Sage green `#CBD189`
- **Title font:** Faculty Glyphic
- **Body font:** Crimson Pro

## Contact

annasblogfth@gmail.com
