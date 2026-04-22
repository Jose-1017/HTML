# 💼 Personal Portfolio — José Julián Arévalo C.

A responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript. It showcases professional background, projects, a contact form, and a pet gallery page.

---

## 📁 Project Structure

```
portfolio/
├── index.html        # Main page (About, Projects, Contact)
├── mascotas.html     # Pet gallery page
├── styles.css        # Global stylesheet
├── style.min.css     # Minified CSS (production copy)
└── script.js         # JavaScript for interactivity
```

---

## 🌐 Pages

### `index.html` — Main Portfolio
- **Header** with name, navigation links, and an icon
- **Welcome section** with a toggle button that shows/hides a greeting message
- **About Me** section with a "Show more / Show less" expandable block
- **Projects** section displaying 3 project cards with links to GitHub repositories
- **Contact** section with a form (name, email, and message fields)
- **Footer** with copyright info

### `mascotas.html` — Pet Gallery
- Separate page with a 3-column responsive grid of pet cards
- Each card includes a photo, name, description, and tag badges
- Hover animation on each card

---

## 🎨 Styling (`styles.css`)

### Color Palette

| Variable | Hex | Usage |
|---|---|---|
| Dark brown | `#5C2D1E` | Headings, text, borders |
| Coral | `#E07A5F` | Accents, buttons, borders |
| Light peach | `#FFE8D6` | Section backgrounds, cards |
| Cream | `#FFF5EE` | Page background |
| White | `#ffffff` | Section containers |

### Layout
- **Flexbox** for the header and form
- **CSS Grid** for project cards and pet gallery (3 columns on desktop)
- `max-width: 1100px` containers centered with `margin: auto`

### Responsive Design (Media Queries)

| Breakpoint | Layout changes |
|---|---|
| Desktop (>900px) | 3-column grids, horizontal nav |
| Tablet (601–900px) | 2-column projects, 3-column gallery |
| Mobile (≤600px) | 1-column projects, 2-column gallery, vertical nav |

### Image Handling
- All images use `max-width: 100%` and `height: auto` for full responsiveness
- Pet photos use `object-fit: cover` with `border-radius: 8px`

---

## ⚙️ JavaScript (`script.js`)

### Features

**Welcome message toggle**
- Clicking "Show message" reveals a greeting and hides the section title
- Clicking "Hide message" restores the original state
- Button text updates dynamically

**"About Me" expand/collapse**
- A "Show more" button reveals extra information about skills and tools
- Clicking "Show less" collapses the content back

**Page load alert**
- On page load, a `window.addEventListener('load', ...)` fires a welcome `alert()`

### How it works
```js
// Toggle welcome message visibility
btnBienvenida.addEventListener('click', function () {
    if (mensajeBienvenida.style.display !== 'block') {
        mensajeBienvenida.style.display = 'block';
        tituloBienvenida.style.display = 'none';
        btnBienvenida.textContent = 'Hide message';
    } else {
        mensajeBienvenida.style.display = 'none';
        tituloBienvenida.style.display = 'block';
        btnBienvenida.textContent = 'Show message';
    }
});
```

---

## 🚀 Getting Started

No build tools or dependencies required. Just open the files in a browser:

```bash
# Clone the repository
git clone https://github.com/Jose-1017/Jose-1017.git

# Open index.html in your browser
open index.html
```

Or use the **Live Server** extension in VS Code for local development with auto-reload.

---

## 🔗 Projects Featured

| Project | Description | Repo |
|---|---|---|
| My Portfolio | Personal website built with HTML & CSS | [View](https://github.com/Jose-1017/Jose-1017.git) |
| Inventory | System for managing and tracking inventory | [View](https://github.com/Jose-1017/Inventario.git) |
| MathGrade | App to calculate and track academic grades | [View](https://github.com/Jose-1017/MathGrade.git) |

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure
- **CSS3** — Flexbox, Grid, Media Queries, transitions
- **Vanilla JavaScript** — DOM manipulation, event listeners
- **Font Awesome 6** — Icons
- **Bootstrap Icons** — Additional icons

---

## 📱 Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 900px) { ... }

/* Mobile */
@media (max-width: 600px) { ... }
```

---

## ✅ Completed Learning Tasks

- [x] Semantic HTML structure across multiple pages
- [x] CSS Grid and Flexbox layouts
- [x] Responsive design with media queries (mobile, tablet, desktop)
- [x] Responsive images (`max-width: 100%`, `height: auto`)
- [x] Relative font sizes using `rem` units
- [x] CSS transitions and hover effects
- [x] Vanilla JS interactivity (toggle content, dynamic button text)
- [x] External JS file linked correctly before `</body>`
- [x] CSS custom properties (`--variables`) in `:root`
- [x] Minified CSS copy (`style.min.css`)

---

## 👤 Author

**José Julián Arévalo C.**  
Mechanical Engineer | Front-end Developer in training  
Universidad del Norte — Barranquilla, Colombia  

GitHub: [@Jose-1017](https://github.com/Jose-1017)

---

© 2026 José Julián Arévalo C.
