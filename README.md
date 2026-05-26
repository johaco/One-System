# One System — Landing Page

> React 18 · Vite · Principios SOLID · Fondo Hero animado con Canvas

---

## Estructura del proyecto

```
one-system/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                          ← Punto de entrada React
    ├── App.jsx                           ← Composición de secciones (OCP)
    ├── index.css                         ← Variables CSS + utilitarios
    ├── constants/
    │   └── index.js                      ← Datos centralizados (SRP)
    ├── hooks/
    │   └── useWaveAnimation.js           ← Lógica del canvas (SRP + DIP)
    └── components/
        ├── canvas/
        │   └── AnimatedWaveBackground.jsx ← Fondo animado canvas (SRP)
        ├── layout/
        │   ├── Navbar.jsx                ← Barra de navegación (SRP)
        │   └── Footer.jsx                ← Pie de página (SRP)
        ├── ui/
        │   ├── Button.jsx                ← Botón reutilizable (SRP + ISP)
        │   ├── ServiceCard.jsx           ← Tarjeta de servicio (SRP + ISP)
        │   ├── PricingCard.jsx           ← Tarjeta de precio (SRP)
        │   └── ContactForm.jsx           ← Formulario de contacto (SRP)
        └── sections/
            ├── HeroSection.jsx           ← Sección hero (SRP)
            ├── AboutSection.jsx          ← Sección nosotros (SRP)
            ├── ServicesSection.jsx       ← Sección servicios (SRP + OCP)
            ├── PricingSection.jsx        ← Sección precios (SRP + OCP)
            └── ContactSection.jsx        ← Sección contacto (SRP)
```

---

## Principios SOLID aplicados

| Principio | Cómo se aplica |
|-----------|---------------|
| **S** — Single Responsibility | Cada componente tiene **una sola razón para cambiar** (layout, UI, sección, datos) |
| **O** — Open/Closed | Agregar servicios o planes de precio sólo requiere editar `constants/index.js`, sin tocar los componentes |
| **L** — Liskov Substitution | `Button` funciona como `<a>` o `<button>` sin romper la interfaz |
| **I** — Interface Segregation | Cada componente recibe **solo** las props que necesita |
| **D** — Dependency Inversion | `AnimatedWaveBackground` depende del hook abstracto `useWaveAnimation`, no del canvas imperativo |

---

## Cómo levantar el proyecto

### Prerrequisitos

- **Node.js** ≥ 18 — [descargar](https://nodejs.org/)
- **npm** (incluido con Node.js)
- **Visual Studio Code** — [descargar](https://code.visualstudio.com/)

---

### 🪟 Windows (PowerShell o CMD)

```powershell
# 1. Descomprimí el archivo ZIP donde quieras, por ejemplo:
#    C:\proyectos\one-system

# 2. Abrí la carpeta en VS Code
#    Abrí VS Code → File → Open Folder → seleccioná "one-system"

# 3. Abrí la terminal integrada de VS Code
#    Menú: Terminal → New Terminal  (o  Ctrl + ` )

# 4. Instalá las dependencias
npm install

# 5. Iniciá el servidor de desarrollo
npm run dev

# 6. Abrí el navegador en:
#    http://localhost:5173
```

> **Tip Windows:** Si `npm` no se reconoce, asegurate de que Node.js esté en el PATH.  
> Instalador oficial de Node.js lo hace automáticamente.

---

### 🐧 Linux (Ubuntu / Debian / Arch)

```bash
# 1. Descomprimí el ZIP
unzip one-system.zip -d ~/proyectos/
cd ~/proyectos/one-system

# 2. Abrí VS Code desde la terminal
code .

# 3. En la terminal integrada de VS Code (Ctrl + `)
# Instalá las dependencias
npm install

# 4. Iniciá el servidor de desarrollo
npm run dev

# 5. Abrí el navegador en:
#    http://localhost:5173
```

> **Ubuntu/Debian:** Si no tenés Node.js instalado:
> ```bash
> curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
> sudo apt-get install -y nodejs
> ```

> **Arch Linux:**
> ```bash
> sudo pacman -S nodejs npm
> ```

---

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor local con hot-reload en `http://localhost:5173` |
| `npm run build` | Genera build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |

---

## Personalización rápida

| Qué cambiar | Dónde |
|-------------|-------|
| Servicios (agregar / editar) | `src/constants/index.js` → `SERVICES` |
| Planes de precio | `src/constants/index.js` → `PRICING_PLANS` |
| Links de navegación | `src/constants/index.js` → `NAV_LINKS` |
| Velocidad de la animación | `src/hooks/useWaveAnimation.js` → `time += 0.008` |
| Cantidad de hilos del ribbon | `src/hooks/useWaveAnimation.js` → `const STRANDS = 80` |
| Colores globales | `src/index.css` → variables `:root` |
| Link de WhatsApp | Buscar `https://wa.me/` y reemplazar con tu número |

---

## Extensiones recomendadas para VS Code

- **ES7+ React/Redux/React-Native snippets** — snippets de React
- **Prettier - Code formatter** — formateo automático
- **ESLint** — detección de errores
- **GitLens** — control de versiones visual
