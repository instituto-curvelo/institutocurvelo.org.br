# DESIGN SYSTEM WEB — Instituto Curvelo

> Guia de identidade visual para o website institucional

-----

## 1. PRINCÍPIOS

O site do Instituto Curvelo deve transmitir **autoridade científica com acessibilidade**. Não é um site de startup, nem de agência — é de uma ICT privada que conecta ciência e mercado. O design deve refletir isso: sólido, limpo, confiável, sem excessos decorativos.

**Pilares visuais:**

- **Seriedade sem frieza** — azul escuro como base, branco como respiro
- **Clareza antes de estética** — hierarquia de conteúdo sempre priorizada
- **Ciência visível** — elementos gráficos que remetem a diagramas e estruturas
- **Acessibilidade real** — contraste mínimo WCAG AA em todos os textos

-----

## 2. CORES

### Paleta principal

```css
--color-primary:       #042b45;  /* Azul Curvelo — base de tudo */
--color-white:         #ffffff;  /* Fundo principal */
--color-background:    #f4f7fa;  /* Fundo de seções alternadas */
--color-surface:       #e8eef3;  /* Cards, inputs, áreas elevadas */
```

### Variações do primário

```css
--color-primary-90:    rgba(4,43,69,0.90);
--color-primary-70:    rgba(4,43,69,0.70);
--color-primary-50:    rgba(4,43,69,0.50);
--color-primary-30:    rgba(4,43,69,0.30);
--color-primary-10:    rgba(4,43,69,0.10);
--color-primary-05:    rgba(4,43,69,0.05);
```

### Cores de estado e acento

```css
--color-accent:        #1a6fa8;  /* Azul claro — links, CTAs secundários */
--color-accent-hover:  #135a8a;  /* Hover de links */
--color-success:       #1d7a4a;  /* Confirmações, badges positivos */
--color-warning:       #b07a00;  /* Avisos */
--color-error:         #b02020;  /* Erros de formulário */
--color-border:        #dce4eb;  /* Bordas de cards e inputs */
--color-border-strong: #b0bec8;  /* Bordas com mais peso */
```

### Texto

```css
--color-text-primary:   #042b45;  /* Corpo e títulos */
--color-text-secondary: #3a5568;  /* Subtextos, descrições */
--color-text-muted:     #6b8699;  /* Metadados, timestamps */
--color-text-inverse:   #ffffff;  /* Texto sobre fundo escuro */
```

-----

## 3. TIPOGRAFIA

### Fontes

```css
/* Display — títulos grandes e de impacto */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue');
--font-display: 'Bebas Neue', sans-serif;

/* Body — leitura e interface */
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700');
--font-body: 'Barlow', sans-serif;
```

> **Nota:** Playfair Display e DM Sans são reservadas para materiais de marketing (carrosséis agro). No website, usar apenas Bebas Neue + Barlow para consistência e performance.

-----

### Escala tipográfica

```css
/* Display */
--text-display-xl:  clamp(56px, 6vw, 96px);   /* Hero principal */
--text-display-lg:  clamp(40px, 5vw, 72px);   /* Títulos de seção */
--text-display-md:  clamp(28px, 3.5vw, 48px); /* Subtítulos de seção */

/* Headings (Barlow) */
--text-h1: clamp(28px, 3vw, 40px);  /* Peso 700 */
--text-h2: clamp(22px, 2.5vw, 32px); /* Peso 700 */
--text-h3: clamp(18px, 2vw, 24px);   /* Peso 600 */
--text-h4: clamp(16px, 1.5vw, 20px); /* Peso 600 */

/* Body */
--text-body-lg:  18px;  /* Lead / intro paragraphs — Peso 400 */
--text-body-md:  16px;  /* Corpo padrão — Peso 400 */
--text-body-sm:  14px;  /* Legendas, notas — Peso 400 */

/* UI */
--text-label:    12px;  /* Tags, badges, labels — Peso 700 · letter-spacing 2px · uppercase */
--text-caption:  13px;  /* Metadados, timestamps */
--text-button:   15px;  /* Botões — Peso 600 */
```

### Line-height

```css
--leading-tight:   1.1;  /* Títulos display */
--leading-snug:    1.3;  /* Headings */
--leading-normal:  1.6;  /* Corpo */
--leading-relaxed: 1.75; /* Lead / intro */
```

### Letter-spacing

```css
--tracking-tight:  -0.02em; /* Títulos display grandes */
--tracking-normal:  0;
--tracking-wide:    0.05em; /* Labels e tags uppercase */
--tracking-wider:   0.1em;  /* Badges e eyebrows */
```

-----

## 4. ESPAÇAMENTO

Sistema em base 8px.

```css
--space-1:   4px;
--space-2:   8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  20px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Padding de seções

```css
/* Seção padrão */
padding: var(--space-24) 0;

/* Seção hero */
padding: var(--space-32) 0;

/* Seção compacta */
padding: var(--space-16) 0;
```

-----

## 5. LAYOUT E GRID

### Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6); /* 24px lateral */
}

/* Variantes */
.container-narrow { max-width: 800px; }  /* Artigos, textos longos */
.container-wide   { max-width: 1400px; } /* Seções full-width */
```

### Grid principal

```css
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-8); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); }

/* Assimétrico — conteúdo + sidebar */
.grid-content { display: grid; grid-template-columns: 2fr 1fr; gap: var(--space-12); }

/* Responsivo */
@media (max-width: 768px) {
  .grid-2, .grid-3, .grid-4, .grid-content {
    grid-template-columns: 1fr;
  }
}
```

### Breakpoints

```css
--bp-sm:  480px;
--bp-md:  768px;
--bp-lg: 1024px;
--bp-xl: 1280px;
```

-----

## 6. BORDAS E RAIOS

```css
--radius-sm:   4px;   /* Badges, tags pequenas */
--radius-md:   8px;   /* Botões, inputs */
--radius-lg:  12px;   /* Cards */
--radius-xl:  20px;   /* Cards de destaque */
--radius-full: 9999px; /* Pills, avatares */

--border-width:        1px;
--border-color:        var(--color-border);
--border-color-strong: var(--color-border-strong);
```

-----

## 7. SOMBRAS

```css
--shadow-sm:  0 1px 3px rgba(4,43,69,0.08), 0 1px 2px rgba(4,43,69,0.06);
--shadow-md:  0 4px 12px rgba(4,43,69,0.10), 0 2px 4px rgba(4,43,69,0.06);
--shadow-lg:  0 10px 30px rgba(4,43,69,0.12), 0 4px 8px rgba(4,43,69,0.08);
--shadow-xl:  0 20px 50px rgba(4,43,69,0.15), 0 8px 16px rgba(4,43,69,0.10);
```

-----

## 8. COMPONENTES

### Botões

```css
/* Primário */
.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
  padding: 14px 28px;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-button);
  font-weight: 600;
  letter-spacing: 0.02em;
  border: 2px solid transparent;
  transition: background 0.2s, transform 0.1s;
}
.btn-primary:hover { background: #063a5e; }
.btn-primary:active { transform: scale(0.98); }

/* Secundário / outline */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 14px 28px;
  border-radius: var(--radius-md);
  font-size: var(--text-button);
  font-weight: 600;
}
.btn-secondary:hover { background: var(--color-primary-05); }

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--color-accent);
  border: none;
  padding: 10px 16px;
  font-size: var(--text-button);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Tamanhos */
.btn-sm { padding: 10px 20px; font-size: 13px; }
.btn-lg { padding: 18px 36px; font-size: 17px; }
```

### Cards

```css
/* Card padrão */
.card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s, transform 0.2s;
}
.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

/* Card destacado (fundo azul) */
.card-featured {
  background: var(--color-primary);
  color: var(--color-white);
  border: none;
  border-radius: var(--radius-xl);
  padding: var(--space-10);
}

/* Card com borda de acento lateral */
.card-accent {
  border-left: 4px solid var(--color-primary);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
  padding: var(--space-6) var(--space-8);
  background: var(--color-primary-05);
}
```

### Badges e tags

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.badge-primary  { background: var(--color-primary-10); color: var(--color-primary); }
.badge-success  { background: rgba(29,122,74,0.10); color: var(--color-success); }
.badge-outline  { border: 1px solid var(--color-border-strong); color: var(--color-text-secondary); }
```

### Inputs e formulários

```css
.input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-body-md);
  color: var(--color-text-primary);
  background: var(--color-white);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(4,43,69,0.12);
  outline: none;
}
.input::placeholder { color: var(--color-text-muted); }

.label {
  display: block;
  font-size: var(--text-body-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}
```

### Eyebrow / tag de seção

```css
.eyebrow {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-3);
}
```

### Divider decorativo

```css
.divider-accent {
  width: 64px;
  height: 4px;
  background: var(--color-primary);
  border-radius: 2px;
  margin: var(--space-4) 0 var(--space-6);
}
```

-----

## 9. ELEMENTOS DECORATIVOS

### Círculos de fundo (mantidos do design social)

```css
.deco-circle {
  position: absolute;
  border-radius: 50%;
  border: 40px solid var(--color-primary-05);
  pointer-events: none;
  z-index: 0;
}
```

### Padrão de grade sutil

```css
.bg-grid {
  background-image:
    linear-gradient(var(--color-border) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.4;
}
```

### Gradiente hero

```css
.hero-gradient {
  background: linear-gradient(135deg, var(--color-primary) 0%, #063a5e 60%, #0a4a78 100%);
}
```

-----

## 10. NAVEGAÇÃO

```css
/* Navbar */
.navbar {
  height: 72px;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

/* Link de nav */
.nav-link {
  font-size: var(--text-body-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  transition: color 0.15s, background 0.15s;
}
.nav-link:hover  { color: var(--color-primary); background: var(--color-primary-05); }
.nav-link.active { color: var(--color-primary); font-weight: 700; }
```

-----

## 11. ESTRUTURA DE PÁGINA (wireframe)

```
┌─────────────────────────────────────┐
│ NAVBAR — logo · links · CTA         │  height: 72px · sticky
├─────────────────────────────────────┤
│                                     │
│           HERO                      │  fundo: #042b45
│   eyebrow · título · subtexto       │  padding: 128px 0
│   CTA primário + secundário         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         SOBRE / MISSÃO              │  fundo: #ffffff
│   texto + elemento visual           │  padding: 96px 0
│                                     │
├─────────────────────────────────────┤
│                                     │
│        SERVIÇOS / O QUE FAZEMOS     │  fundo: #f4f7fa
│   grid de 3 cards                   │  padding: 96px 0
│                                     │
├─────────────────────────────────────┤
│                                     │
│          NÚMEROS / IMPACTO          │  fundo: #042b45
│   4 stats em destaque               │  padding: 80px 0
│                                     │
├─────────────────────────────────────┤
│                                     │
│           PROJETOS                  │  fundo: #ffffff
│   grid de cards com tags            │  padding: 96px 0
│                                     │
├─────────────────────────────────────┤
│                                     │
│        PARCEIROS / SETOR            │  fundo: #f4f7fa
│   logos em linha                    │  padding: 64px 0
│                                     │
├─────────────────────────────────────┤
│                                     │
│            CONTATO / CTA            │  fundo: #042b45
│   título · formulário ou botão      │  padding: 96px 0
│                                     │
├─────────────────────────────────────┤
│ FOOTER — logo · links · copyright   │  fundo: #021d2e
└─────────────────────────────────────┘
```

-----

## 12. ALTERNÂNCIA DE SEÇÕES

Padrão de alternância de fundos para ritmo visual:

|Seção    |Fundo                       |
|---------|----------------------------|
|Hero     |`#042b45` (azul escuro)     |
|Sobre    |`#ffffff` (branco)          |
|Serviços |`#f4f7fa` (cinza claro)     |
|Números  |`#042b45` (azul escuro)     |
|Projetos |`#ffffff` (branco)          |
|Parceiros|`#f4f7fa` (cinza claro)     |
|CTA final|`#042b45` (azul escuro)     |
|Footer   |`#021d2e` (azul mais escuro)|

-----

## 13. MOTION / ANIMAÇÕES

```css
/* Transições padrão */
--transition-fast:   0.15s ease;
--transition-normal: 0.25s ease;
--transition-slow:   0.4s ease;

/* Scroll reveal — usar com IntersectionObserver */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Respeitar preferência do usuário */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

-----

## 14. ACESSIBILIDADE

```css
/* Focus visível */
:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  background: var(--color-primary);
  color: white;
  padding: 12px 20px;
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  font-weight: 700;
  z-index: 9999;
}
.skip-link:focus { top: 0; }
```

**Contraste mínimo (WCAG AA):**

- Texto normal: mínimo 4.5:1
- Texto grande (+18px): mínimo 3:1
- `#042b45` sobre `#ffffff` → **12.6:1** ✅
- `#ffffff` sobre `#042b45` → **12.6:1** ✅
- `#3a5568` sobre `#ffffff` → **7.2:1** ✅

-----

## 15. FAVICON E META

```html
<!-- Cor da barra do navegador mobile -->
<meta name="theme-color" content="#042b45">

<!-- Open Graph -->
<meta property="og:image" content="/og-image.png"> <!-- 1200×630px -->
```

**Imagem OG:** fundo `#042b45`, logo centralizado, slogan em Bebas Neue.

-----

## 16. BOAS PRÁTICAS WEB

- **Nunca usar mais de 2 fontes** por página
- **Imagens** sempre com `alt` descritivo
- **Botões** sempre com texto — nunca só ícone sem label
- **Links** devem indicar destino — evitar “clique aqui”
- **Formulários** sempre com `label` associado ao `input`
- **Seções de fundo escuro** — verificar contraste de todos os elementos
- **Logos de parceiros** em escala de cinza para uniformidade visual
- **Dados com fonte** — sempre citar abaixo do número
- **Mobile-first** — começar o CSS pelo menor breakpoint

-----

*Design System Web — Instituto Curvelo · Junho de 2026*