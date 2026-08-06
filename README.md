[README.md](https://github.com/user-attachments/files/30804702/README.md)

# Fork Through History

A food blog exploring the cultural, historical, and ingredient origins of dishes from around the world — celebrating present holidays and the people behind them.

> *"Scooping up festive recipes from around the world."*

🌐 **Live site:** https://annasblog-fth.github.io/forkthroughhistory/

---

## About

Fork Through History is a flavor dictionary — a food blog where every recipe focuses on the origin of the dish: culturally, historically, and through its ingredients. Published every major holiday, each entry explores a different country, a different era, and a different tradition.

---

## File Structure

```
forkthroughhistory/
├── index.html               ← Landing page (update for each new post)
├── README.md
├── css/
│   └── style.css            ← All styles — do not edit per recipe
├── js/
│   ├── main.js              ← Parallax, transitions, stamp borders, checkboxes
│   └── components.js        ← Shared header/footer helpers
├── images/
│   ├── logo.jpg
│   ├── [recipe-slug]-hero.jpg        ← Main hero image
│   ├── [recipe-slug]-process1.jpg    ← In-article process/step image
│   ├── [recipe-slug]-process2.jpg    ← Second in-article image (if needed)
│   └── [recipe-slug]-served.jpg      ← Final plated/served image
└── pages/
    ├── archive.html                  ← Recipe grid — update for each new post
    └── recipe-[recipe-slug].html     ← One file per recipe
```

### Naming convention

Every recipe has a **slug** — a short, lowercase, hyphenated identifier derived from the dish name. All files for a recipe use that slug consistently:

| What | Format | Example |
|---|---|---|
| Recipe page | `pages/recipe-[slug].html` | `pages/recipe-arroz-con-pato.html` |
| Hero image | `images/[slug]-hero.jpg` | `images/arroz-con-pato-hero.jpg` |
| Process images | `images/[slug]-process1.jpg` | `images/arroz-con-pato-process1.jpg` |
| Served image | `images/[slug]-served.jpg` | `images/arroz-con-pato-served.jpg` |

---

## Publishing a New Recipe — Step by Step

### Step 1 — Prepare your photos

All photos must be **JPG format** (HEIC from iPhone does not display in browsers).

- On **Mac**: open in Photos → File → Export → Export as JPG
- On **Windows**: open in Photos app → Save a copy → JPEG
- Online converter: [heic.online](https://heic.online)

Name your photos using the recipe slug before uploading:

```
[slug]-hero.jpg        ← the main beauty shot, used in the hero and on the homepage card
[slug]-process1.jpg    ← a step or ingredient in progress
[slug]-process2.jpg    ← second process shot (optional)
[slug]-served.jpg      ← the finished plated dish
```

**Example** for Arroz con Pato (`slug = arroz-con-pato`):
```
arroz-con-pato-hero.jpg
arroz-con-pato-process1.jpg
arroz-con-pato-process2.jpg
arroz-con-pato-served.jpg
```

---

### Step 2 — Upload photos to GitHub

1. Go to your repository on GitHub
2. Click the **`images/`** folder
3. Click **Add file → Upload files**
4. Drag in your renamed JPG files
5. Write a commit message: `Add [Recipe Name] photos`
6. Click **Commit changes**

---

### Step 3 — Create the recipe page

1. In GitHub, go to the **`pages/`** folder
2. Click **Add file → Create new file**
3. Name the file: `recipe-[slug].html` — e.g. `recipe-arroz-con-pato.html`
4. Copy the full contents of the most recent recipe page (e.g. `recipe-arroz-con-pato.html`) and paste it as your starting point
5. Replace all content — title, origin tags, history, flavor profile, ingredients, steps, notes, storage, closing note, and all image paths
6. Update all image `src` attributes to use your new slug:
   ```html
   src="../images/[slug]-hero.jpg"
   src="../images/[slug]-process1.jpg"
   src="../images/[slug]-served.jpg"
   ```
7. Update the `<title>` and `<meta name="description">` in the `<head>`
8. Commit with message: `Add [Recipe Name] recipe page`

#### Meta strip tags (just below the hero image)
These three tags appear on every recipe page under the hero:
```html
<div class="recipe-meta-strip">
  <span class="tag">[Holiday Name + Year]</span>    <!-- e.g. Las Fiestas Patrias 2025 -->
  <span class="tag">[Country]</span>                 <!-- e.g. Peru -->
  <span class="tag">[Region / Era]</span>            <!-- e.g. Northern Peru — Chiclayo -->
</div>
```

---

### Step 4 — Update the homepage (`index.html`)

The homepage always features the **most recent** recipe. The previous featured recipe moves to the "More Recipes" row.

1. In GitHub, click `index.html` at the root of the repo
2. Click the **pencil icon** (Edit file)
3. In the `<!-- ── Latest Recipe ── -->` section, update:
   - The image `src` to `images/[slug]-hero.jpg`
   - The image `alt` text
   - The tag line (holiday + year)
   - The `<h2>` title
   - The origin line
   - The description paragraphs
   - The link `href` to `pages/recipe-[slug].html`
4. In the "More Recipes" card row, add a new card for what was previously featured (shifting older cards along), using this structure:
   ```html
   <a class="recipe-card" href="pages/recipe-[slug].html">
     <div class="recipe-card-img-wrap">
       <img src="images/[slug]-hero.jpg" alt="[Description]" />
     </div>
     <div class="recipe-card-body">
       <span class="recipe-card-occasion">[Holiday · Year]</span>
       <span class="recipe-card-name">[Dish Name]</span>
       <span class="recipe-card-origin">[Country — Region]</span>
     </div>
   </a>
   ```
5. Commit with message: `Update homepage — feature [Recipe Name]`

---

### Step 5 — Update the archive (`pages/archive.html`)

The archive lists every recipe ever published, newest first.

1. In GitHub, click `pages/archive.html`
2. Click the **pencil icon** (Edit file)
3. Add a new `archive-card` block **at the top** of the archive grid (inside `<!-- ── Archive grid ── -->`), before all existing cards:
   ```html
   <a class="archive-card" href="recipe-[slug].html">
     <div class="archive-card-img-wrap">
       <img src="../images/[slug]-hero.jpg" alt="[Description]" />
     </div>
     <div class="archive-card-body">
       <span class="archive-card-occasion">[Holiday · Month Year]</span>
       <span class="archive-card-name">[Dish Name]</span>
       <span class="archive-card-origin">[Country — Region]</span>
     </div>
   </a>
   ```
4. Commit with message: `Add [Recipe Name] to archive`

---

### Step 6 — Check the live site

GitHub Pages updates within 1–2 minutes of each commit.

Visit: **https://annasblog-fth.github.io/forkthroughhistory/**

Check:
- [ ] Homepage shows the new recipe as featured
- [ ] Recipe page loads and all images appear
- [ ] Archive shows the new card at the top
- [ ] All links (nav, back to main, archive) work correctly

---

## Recipe Page Structure Reference

Each recipe page follows this section order:

| Section | Notes |
|---|---|
| Ticker + Nav | Shared across all pages — copy as-is |
| Hero image | `[slug]-hero.jpg`, full width |
| Meta strip | Holiday tag · Country tag · Region/Era tag |
| Title + subtitle + serves line | H1, italic subtitle, one-line meta |
| Flavor profile box | Short paragraph on taste |
| `<hr>` rule | |
| Origin & History | H2, 3–5 paragraphs, 1–2 inline images |
| Full-width process image | `[slug]-process2.jpg` with caption |
| Pairings note | Short paragraph |
| `<hr>` rule | |
| Ingredients | Grid of ingredient groups with checkboxes |
| `<hr>` rule | |
| Method | Named blocks of numbered steps |
| Final served image | `[slug]-served.jpg` with caption |
| `<hr>` rule | |
| Notes & Tips | Bullet list |
| `<hr>` rule | |
| Storage | How long it keeps |
| `<hr>` rule | |
| Closing note | 1–2 personal paragraphs in italics |
| Bottom nav | ← Back to Main · Archive → |
| Footer | Shared — copy as-is |

---

## Design Tokens

| Token | Value |
|---|---|
| Background | Tyrian Purple `#4E0535` |
| Dark accent | `#3B032F` |
| Text | Off-white `#FCFAE8` |
| Links / buttons | Sage green `#CBD189` |
| Title font | Faculty Glyphic |
| Body font | Crimson Pro |

---

## Contact

annasblogfth@gmail.com
