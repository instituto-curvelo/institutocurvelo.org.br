# Instituto Curvelo - Content Inventory

Single source of truth for rebuilding the site (currently React + Vite + Lovable) in Next.js.
Extracted read-only from `src/pages/`, `src/App.tsx`, `src/contexts/LanguageContext.tsx`, `index.html`, and the asset folders.

The site is bilingual. Language is held in a React context (`LanguageContext`), default `pt`, persisted to `localStorage` under key `institute-language`. There is no per-language URL: the PT and EN routes render the same component, and copy switches purely from the in-memory `language` value (`'pt' | 'en'`). Every user-facing string below is given as a **PT | EN** pair, reproduced verbatim from the source.

---

## Table of Contents

1. [Global / Site-wide](#1-global--site-wide)
   - [1.1 Routing table](#11-routing-table)
   - [1.2 Global meta (index.html)](#12-global-meta-indexhtml)
   - [1.3 Global navigation](#13-global-navigation)
   - [1.4 Contact details](#14-contact-details)
   - [1.5 Footer (shared)](#15-footer-shared)
   - [1.6 Assets inventory](#16-assets-inventory)
2. [Page: Home / Index](#2-page-home--index)
3. [Page: The Institute](#3-page-the-institute)
4. [Page: Solutions](#4-page-solutions)
5. [Page: Resolutions](#5-page-resolutions)
6. [Page: Courses (listing)](#6-page-courses-listing)
7. [Page: Data Science course](#7-page-data-science-course)
8. [Page: Corporate LLMs course](#8-page-corporate-llms-course)
9. [Page: 404 / NotFound](#9-page-404--notfound)
10. [Structured data tables](#10-structured-data-tables)

---

## 1. Global / Site-wide

### 1.1 Routing table

From `src/App.tsx`. Each component is reachable from both an English and a Portuguese path; both render the identical component (language comes from context, not the URL).

| Component | English path | Portuguese path |
|---|---|---|
| `Index` | `/` | `/` (single root route) |
| `Solutions` | `/solutions` | `/solucoes` |
| `Resolutions` | `/resolutions` | `/resolucoes` |
| `Institute` | `/institute` | `/instituto` |
| `Courses` | `/course` | `/curso` |
| `DataScience` | `/course/data-science` | `/curso/ciencia-de-dados` |
| `LLMCourse` | `/course/llms-corporate` | `/curso/llms-corporativos` |
| `NotFound` | `*` (catch-all) | `*` (catch-all) |

Notes for the rebuild:
- Routes are lazy-loaded (`React.lazy`) with a spinner fallback.
- In Next.js these should likely become localized routes (e.g. `/en/...` and `/pt/...` or locale-prefixed), since the current app has no distinct URL per language.

### 1.2 Global meta (index.html)

| Field | Value |
|---|---|
| `<html lang>` | `en` |
| `<title>` (static) | `Instituto Curvelo` |
| `meta description` | `O Instituto Curvelo é uma associação sem fins lucrativos que tem como objetivo a pesquisa básica e aplicada de caráter científico ou tecnológico, além do desenvolvimento de novos produtos, serviços ou processos inovadores.` |
| `meta author` | `Lovable` |
| favicon | `/lovable-uploads/429c66b0-71c6-486b-b1ac-331da8c1627c.png` |
| `og:title` | `Instituto Curvelo` |
| `og:description` | (same as meta description above) |
| `og:type` | `website` |
| `og:image` | `https://lovable.dev/opengraph-image-p98pqg.png` (Lovable placeholder, should be replaced) |
| `twitter:card` | `summary_large_image` |
| `twitter:site` | `@lovable_dev` (Lovable placeholder, should be replaced) |
| `twitter:image` | `https://lovable.dev/opengraph-image-p98pqg.png` (placeholder) |

Per-page `document.title` (set via `useEffect`):

| Page | PT title | EN title |
|---|---|---|
| Index | `Instituto Curvelo` | `Instituto Curvelo` (no language switch) |
| Institute | `Instituto Curvelo - Institucional` | same (no language switch) |
| Solutions | `Soluções \| Instituto Curvelo` | `Solutions \| Instituto Curvelo` |
| Resolutions | `Resoluções \| Instituto Curvelo` | `Resolutions \| Instituto Curvelo` |
| Courses | `Cursos \| Instituto Curvelo` | `Courses \| Instituto Curvelo` |
| DataScience | `Ciência de Dados \| Instituto Curvelo` | `Data Science \| Instituto Curvelo` |
| LLMCourse | `LLMs Corporativos \| Instituto Curvelo` | `Corporate LLMs \| Instituto Curvelo` |
| NotFound | `Página não encontrada \| Instituto Curvelo` | same (no language switch) |

No meta description is set per-page in the React components (only the static one in `index.html`).

### 1.3 Global navigation

There is no shared Navbar component; each page declares its own `<nav>`. The full multi-item menu only exists on the **Home page**. Inner pages have a simplified "Back to home" nav plus a PT/EN switcher. The Data Science and LLM course pages add in-page anchor links.

**Home page nav (full menu).** Mix of anchor links (same page) and route `Link`s.

| Item | PT label | EN label | Destination |
|---|---|---|---|
| About | `Sobre` | `About` | `#about` (anchor) |
| Expertise | `Expertise` | `Expertise` | `#expertise` (anchor) |
| The Institute | `O Instituto` | `The Institute` | `/instituto` (pt) / `/institute` (en) |
| Resolutions | `Resoluções` | `Resolutions` | `/resolucoes` (pt) / `/resolutions` (en) |
| Courses | `Cursos` | `Courses` | `/curso` (pt) / `/course` (en) |
| Our Solutions | `Nossas Soluções` | `Our Solutions` | `/solucoes` (pt) / `/solutions` (en) |
| Contact | `Contato` | `Contact` | `#contact` (anchor) |

Language switcher buttons (all pages): `PT` and `EN`. On mobile dropdown the labels are `Português` and `English`.

Note: the Home page also defines extra nav labels in the content object that are **not rendered** in the current menu: `expertise.rdc` = `CPDI` / `R&D Center`, `nav.innovation` = `NIT` / `Innovation`. They are leftover/unused but documented here for completeness.

**Inner pages nav (Institute, Solutions, Resolutions, Courses, DataScience, LLMCourse).**

| Item | PT label | EN label | Destination |
|---|---|---|---|
| Back link | `Voltar ao Início` (Resolutions/Courses/DataScience/LLMCourse/Solutions) or `Voltar ao início` (Institute) | `Back to Home` / `Back to home` | `/` |

**Data Science page extra in-page nav anchors:**

| PT label | EN label | Destination |
|---|---|---|
| `Sobre o Curso` | `About Course` | `#about` |
| `Instrutor` | `Instructor` | `#instructor` |
| `Certificação` | `Certification` | `#certification` |
| `Contato` | `Contact` | `#contact` |

**LLM course page extra in-page nav anchors:**

| PT label | EN label | Destination |
|---|---|---|
| `Sobre o Curso` | `About Course` | `#about` |
| `Programa` | `Curriculum` | `#curriculum` |
| `Metodologia` | `Methodology` | `#methodology` |
| `Certificação` | `Certification` | `#certification` |
| `Contato` | `Contact` | `#contact` |

### 1.4 Contact details

Two distinct contact identities appear in the source.

**Institutional contact (Home page Contact section + all shared footers):**

| Field | Value |
|---|---|
| Email | `contato@institutocurvelo.org.br` (mailto link) |
| Phone | `+55 11 3835-3050` (tel link) |
| Address | `Av. Marília, 1000, Galpão 27, Arujá, SP 07429-825` |
| CNPJ | `CNPJ 60.911.337/0001-82` |

**Course contact (Data Science + LLM course pages):**

| Field | Value |
|---|---|
| Email | `contato@institutocurvelo.org.br` |
| Phone | `+55 12 99723-9684` |
| Address (Data Science footer) | PT: `São José dos Campos, SP - Brasil` / EN: `São José dos Campos, SP - Brazil` |
| WhatsApp number (CTA buttons) | `5512997239684` (used in `https://wa.me/...` links) |

Social links: **none present** in the source. No social media icons or links anywhere. No embedded map (address is plain text).

WhatsApp CTA prefilled messages:
- Courses listing (per course): PT `Olá! Gostaria de solicitar uma proposta para o curso "{course title}".` | EN `Hello! I would like to request a proposal for the "{course title}" course.`
- Data Science page: PT `Olá! Gostaria de solicitar uma proposta para o curso de Introdução à Ciência de Dados.` | EN `Hello! I would like to request a proposal for the Introduction to Data Science course.`
- LLM course page: PT `Olá! Gostaria de solicitar uma proposta para o curso de LLMs Corporativos.` | EN `Hello! I would like to request a proposal for the Corporate LLMs course.`

Home page contact form submits via Supabase edge function `send-contact-email` (see Section 2 form details). Note: `src/integrations/supabase/client` is imported but the `integrations` folder was not found in the repo at extraction time (the import may be missing/unresolved).

### 1.5 Footer (shared)

Most pages share the same footer (Index, Institute, Solutions, Resolutions, Courses). Content:

- Logo image `/lovable-uploads/4fad8fed-201d-4f1e-bb27-c27be38495dd.png` (alt `Instituto Curvelo Logo`)
- Tagline: PT `Instituto Curvelo - Instituição de Ciência, Tecnologia e Inovação` | EN `Instituto Curvelo - Science, Technology, and Innovation Institution`
- `CNPJ 60.911.337/0001-82`

The **Data Science** page has an expanded footer (see Section 7) with a Contact column and a "Lei do Bem" column. The **LLM course** page footer is the simple logo + tagline + CNPJ variant.

### 1.6 Assets inventory

**`src/assets/` (imported JPGs):**

| File | Used in | Depicts / role |
|---|---|---|
| `circuit-board.jpg` | Index expertise card (IoT), Solutions IoT section | IoT / circuit board imagery |
| `robotics.jpg` | Index expertise card (Automation), Solutions Automation section | Industrial robotics |
| `data-analysis.jpg` | Index expertise card (Data Intelligence), Solutions Data Intelligence section | Data analysis / dashboards |
| `programming.jpg` | imported in Index but **not rendered** | programming imagery (unused) |
| `innovation.jpg` | imported in Index but **not rendered** | innovation imagery (unused) |
| `consulting.jpg` | imported in Index but **not rendered** | consulting imagery (unused) |

**`public/lovable-uploads/` (referenced by absolute path):**

| File | Used in | Depicts / role |
|---|---|---|
| `4fad8fed-201d-4f1e-bb27-c27be38495dd.png` | Nav + footer logo on every page | Instituto Curvelo wordmark logo |
| `f2c89b1a-ecb3-4346-8faa-44be8ed1a14a.png` | Index hero | Instituto Curvelo logo mark (square, 128x128) |
| `d044a7cc-9671-4ac1-822d-f17ae2f53b05.png` | Index course section | Photo of Prof. Dr. Filipe Verri |
| `477e2606-ae44-4fc1-aee7-b3a65767585b.png` | Data Science instructor section | Photo of Prof. Dr. Filipe Alves Neto Verri |
| `352726a2-25c9-4398-bfb5-792cedab1483.png` | Index partners | iRede logo |
| `8002afb8-be5b-49be-bfe7-38b3a1c8a408.png` | Index partners | Lactec logo |
| `icmc-logo.png` | Index partners | ICMC-USP logo |
| `bd1c4e25-d263-43c9-9db8-3ec8be248f12.png` | Index partners | GA230 Grupo logo |
| `429c66b0-71c6-486b-b1ac-331da8c1627c.png` | favicon (index.html) | favicon logo |
| `61790838-98a5-4a3b-80e4-31465e757e28.png` | **not referenced** in any page | unknown (orphan) |

**Other public assets:**

| File | Used in | Role |
|---|---|---|
| `NIT_001_2025.pdf` | Resolutions page download | NIT Resolution 001/2025 - Innovation Policy PDF |
| `favicon.ico` | default browser fallback | favicon |
| `placeholder.svg` | not referenced in pages | Lovable placeholder |
| `robots.txt` | crawler config | — |

---

## 2. Page: Home / Index

Routes: `/`. Component `src/pages/Index.tsx`. Dark theme (slate-950). `document.title = "Instituto Curvelo"`.

Sections in order: Navigation, Hero, About, Expertise, Course, Partners, Contact, Footer.

### 2.1 Hero

| Element | PT | EN |
|---|---|---|
| Logo image | `/lovable-uploads/f2c89b1a-ecb3-4346-8faa-44be8ed1a14a.png` (alt "Instituto Curvelo Logo") | same |
| Heading line 1 | `Tecnologia` | `Technology` |
| Heading line 2 (accent) | `que inspira` | `that inspires` |
| Description | `Oferecemos soluções tecnológicas e científicas avançadas, com foco em pesquisa, desenvolvimento e inovação em diversos setores.` | `We offer advanced technological and scientific solutions, focusing on research, development, and innovation in various sectors.` |
| CTA button | `Explore Nossas Soluções` | `Explore Our Solutions` | → `/solucoes` (pt) / `/solutions` (en) |

(Note: `hero.title` = `Instituto Curvelo` and `hero.subtitle` = PT `Instituição de Ciência, Tecnologia e Inovação` / EN `Science, Technology, and Innovation Institution` exist in the content object but are not rendered in the hero markup; the visible heading is the "Tecnologia / que inspira" pair above.)

### 2.2 About (`#about`)

| Element | PT | EN |
|---|---|---|
| Section heading | `Sobre Nós` | `About Us` |
| Card 1 heading | `Quem Somos` | `Who We Are` |
| Card 1 body | `Somos uma Instituição de Ciência, Tecnologia e Inovação (ICT) privada e sem fins lucrativos, mantida pelo Grupo GA230, localizada em Arujá, São Paulo, Brasil.` | `We are a private, non-profit Science, Technology, and Innovation Institution (ICT), maintained by the GA230 Group, located in Arujá, São Paulo, Brazil.` |
| Card 2 heading | `Nossa Missão` | `Our Mission` |
| Card 2 body | `Nossa missão é fornecer soluções científicas e tecnológicas avançadas, agregando inovação e uso eficiente de recursos, capacitando parceiros a realizar seu potencial econômico e social, promovendo o crescimento pessoal e profissional dos colaboradores, valorizando seu potencial humano e promovendo um ambiente de desenvolvimento contínuo.` | `Our mission is to provide advanced scientific and technological solutions, adding innovation and efficient use of resources, enabling partners to realize their economic and social potential, fostering the personal and professional growth of collaborators, valuing their human potential, and promoting an environment of continuous development.` |
| Mission point 1 | `Inovação Tecnológica` | `Technological Innovation` |
| Mission point 2 | `Desenvolvimento Sustentável` | `Sustainable Development` |
| Mission point 3 | `Crescimento Colaborativo` | `Collaborative Growth` |

### 2.3 Expertise (`#expertise`)

| Element | PT | EN |
|---|---|---|
| Badge | `ÁREAS DE ESPECIALIZAÇÃO` | `AREAS OF EXPERTISE` |
| Section heading | `Tecnologia em ação` | `Technology in action` |
| Subheading | `Combinamos expertise técnica com inovação para oferecer soluções que transformam ideias em realidade.` | `We combine technical expertise with innovation to offer solutions that transform ideas into reality.` |
| Card "View more" link | `Ver mais` | `View more` |

Three expertise cards (each links to `/solutions#<key>`):

| Card | PT title | EN title | Image | Link |
|---|---|---|---|---|
| IoT | `IoT & Sensoriamento Inteligente` | `IoT & Smart Sensing` | `circuit-board.jpg` | `/solutions#iot` |
| Automation | `Automação Industrial` | `Industrial Automation` | `robotics.jpg` | `/solutions#automation` |
| Data Intelligence | `Inteligência de Dados` | `Data Intelligence` | `data-analysis.jpg` | `/solutions#dataIntelligence` |

(The expertise content object also contains `items` arrays per card, but these are not rendered on the Home page — they only appear in titles here. The detailed feature lists live on the Solutions page, Section 4.)

### 2.4 Course

| Element | PT | EN |
|---|---|---|
| Badge | `CURSO` | `COURSE` |
| Heading | `Introdução à Ciência de Dados` | `Introduction to Data Science` |
| Subtitle | `Capacitação técnica especializada com especialista do ITA` | `Specialized technical training with ITA specialist` |
| Description | `Aprenda os fundamentos da ciência de dados em 12 semanas de capacitação intensiva com Prof. Dr. Filipe Verri.` | `Learn data science fundamentals in 12 weeks of intensive training with Prof. Dr. Filipe Verri.` |
| Highlight 1 | `36 horas` | `36 hours` |
| Highlight 2 | `Virtual` | `Virtual` |
| Highlight 3 | `Até 30 vagas` | `Up to 30 spots` |
| Highlight 4 | `Certificado incluso` | `Certificate included` |
| CTA button | `Saiba Mais` | `Learn More` | → `/course` (scrolls to top) |
| Instructor name | `Prof. Dr. Filipe Verri` | same |
| Instructor role | `Professor do ITA e Unifesp` | `Professor at ITA and Unifesp` |
| Credential 1 | `Doutor em Ciências de Computação (USP)` | `PhD in Computer Science (USP)` |
| Credential 2 | `Autor do Livro "Data Science Project"` | `Author of the book "Data Science Project"` |
| Instructor photo | `/lovable-uploads/d044a7cc-9671-4ac1-822d-f17ae2f53b05.png` | same |

### 2.5 Partners

| Element | PT | EN |
|---|---|---|
| Badge | `PARCEIROS` | `PARTNERS` |
| Heading | `Nossos Parceiros` | `Our Partners` |
| Description | `Trabalhamos em colaboração com organizações de referência para ampliar nosso impacto e oferecer soluções ainda mais robustas.` | `We work in collaboration with leading organizations to expand our impact and offer even more robust solutions.` |

Partner logos (in order), see [Structured data tables](#10-structured-data-tables):

| Partner | Image | alt |
|---|---|---|
| iRede | `/lovable-uploads/352726a2-25c9-4398-bfb5-792cedab1483.png` | `iRede Logo` |
| Lactec | `/lovable-uploads/8002afb8-be5b-49be-bfe7-38b3a1c8a408.png` | `Lactec Logo` |
| ICMC-USP | `/lovable-uploads/icmc-logo.png` | `ICMC-USP Logo` |
| GA230 Grupo | `/lovable-uploads/bd1c4e25-d263-43c9-9db8-3ec8be248f12.png` | `GA230 Grupo Logo` |

### 2.6 Contact (`#contact`)

| Element | PT | EN |
|---|---|---|
| Badge | `CONTATO` | `CONTACT US` |
| Heading | `Vamos Falar Sobre Tecnologia` | `Let's Talk Technology` |
| Description | `Pronto para transformar seu negócio com tecnologia avançada? Entre em contato com nossa equipe para discutir como o Instituto Curvelo pode ajudá-lo a otimizar operações e impulsionar a inovação.` | `Ready to transform your business with advanced technology? Get in touch with our team to discuss how Instituto Curvelo can help you optimize operations and drive innovation.` |
| Email label | `Email` | `Email` |
| Email value | `contato@institutocurvelo.org.br` | same (mailto) |
| Phone label | `Telefone` | `Phone` |
| Phone value | `+55 11 3835-3050` | same (tel) |
| Location label | `Localização` | `Location` |
| Location value | `Av. Marília, 1000, Galpão 27, Arujá, SP 07429-825` | same |

**Contact form** (submits to Supabase function `send-contact-email`):

| Field | PT label | EN label | PT placeholder | EN placeholder | Required |
|---|---|---|---|---|---|
| Form heading | `Envie uma mensagem` | `Send a message` | — | — | — |
| Name | `Nome *` | `Name *` | `Seu nome` | `Your name` | yes |
| Email | `Email *` | `Email *` | `your.email@example.com` | same | yes |
| Subject | `Assunto` | `Subject` | `Assunto da mensagem` | `Message subject` | no |
| Message | `Mensagem *` | `Message *` | `Conte-nos sobre seu projeto ou consulta` | `Tell us about your project or inquiry` | yes |
| Submit button | `Enviar Mensagem` / while sending `Enviando...` | `Send Message` / `Sending...` | — | — | — |

Form toast messages:
- Validation error: title PT `Erro` / EN `Error`; body PT `Por favor, preencha todos os campos obrigatórios.` / EN `Please fill in all required fields.`
- Success: title PT `Mensagem enviada!` / EN `Message sent!`; body PT `Recebemos sua mensagem e entraremos em contato em breve.` / EN `We received your message and will get in touch soon.`
- Send error: title PT `Erro` / EN `Error`; body PT `Houve um erro ao enviar sua mensagem. Tente novamente.` / EN `There was an error sending your message. Please try again.`
- Default subject when blank: PT `Contato pelo site` / EN `Website contact`.

### 2.7 Footer

See [1.5 Footer (shared)](#15-footer-shared).

---

## 3. Page: The Institute

Routes: `/institute` (en) / `/instituto` (pt). Component `src/pages/Institute.tsx`. `document.title = "Instituto Curvelo - Institucional"` (not language-switched).

Sections in order: Navigation, Hero, R&D Center, Innovation Office, Footer.

### 3.1 Hero

| Element | PT | EN |
|---|---|---|
| Heading | `O Instituto` | `The Institute` |
| Description | `Conheça nossa estrutura organizacional, centros de pesquisa e núcleo de inovação tecnológica.` | `Learn about our organizational structure, research centers and technological innovation office.` |

(`hero.subtitle` = PT `Estrutura organizacional e centro de inovação` / EN `Organizational structure and innovation center` exists in content but is not rendered.)

### 3.2 R&D Center (CPDI)

| Element | PT | EN |
|---|---|---|
| Heading | `Centro de Pesquisa, Desenvolvimento e Inovação` | `Research and Development Center` |
| Intro | `O Centro de Pesquisa e Desenvolvimento (CPDI) é nossa unidade para conduzir atividades de Pesquisa e Desenvolvimento (P&D), que incluem:` | `The Research and Development Center (R&DC) is our unit for conducting Research and Development (R&D) activities, which include:` |
| Activity 1 | `Prospecção e execução de projetos` | `Prospecting and executing projects` |
| Activity 2 | `Gestão da equipe de colaboradores` | `Managing the team of collaborators` |
| Activity 3 | `Estabelecimento do Conselho Técnico-Científico` | `Establishing the Technical-Scientific Council` |
| Activity 4 | `Estabelecimento, supervisão e gestão de laboratórios` | `Establishing, overseeing, and managing laboratories` |
| Activity 5 | `Responsabilidade direta por processos associados ao modelo de gestão` | `Being directly responsible for processes associated with the management model` |
| Council heading | `Conselho Técnico-Científico` | `Technical-Scientific Council` |
| Council body | `O Conselho Técnico-Científico é composto por representantes do setor educacional ou outros institutos de pesquisa com fortes conexões com vários membros da cadeia de valor de produção de conhecimento tecnológico. Garante nossa relação com a academia e mantém altos padrões de gestão através do modelo de gestão.` | `The Technical-Scientific Council is composed of representatives from the education sector or other research institutes with strong connections to various members of the technological knowledge production value chain. It ensures our relationship with academia and maintains high management standards through the management model.` |
| Labs heading | `Laboratórios` | `Laboratories` |
| Lab 1 | `Laboratório de Eletrônica e Dispositivos` | `Electronics and Devices Laboratory` |
| Lab 2 | `Laboratório de Sistemas de Manufatura e Automação` | `Manufacturing Systems and Automation Laboratory` |
| Lab 3 | `Laboratório de Sistemas de Informação` | `Information Systems Laboratory` |

### 3.3 Innovation Office (NIT)

| Element | PT | EN |
|---|---|---|
| Heading | `Núcleo de Inovação Tecnológica` | `Innovation Office` |
| Intro | `O Núcleo de Inovação Tecnológico (NIT) do Instituto Curvelo é responsável por coordenar atividades de inovação tecnológica e transferência de tecnologia. Suas principais atividades incluem:` | `The Innovation Office (IO) of Instituto Curvelo is responsible for coordinating technological innovation and technology transfer activities. Its main activities include:` |
| Activity 1 | `Manter e publicar a Política de Inovação do Instituto Curvelo` | `Safeguarding the Innovation Policy of Instituto Curvelo` |
| Activity 2 | `Gestão de ativos de propriedade intelectual` | `Managing intellectual property assets` |
| Activity 3 | `Identificação e criação de oportunidades` | `Identifying and creating opportunities` |
| Activity 4 | `Aproveitamento de recursos de políticas públicas nacionais` | `Leveraging resources from national public policies` |
| Activity 5 | `Gestão e promoção de parcerias` | `Managing and promoting partnerships` |

(This R&D Center + Innovation Office content is duplicated in the Home page content object under `rdc` / `innovation`, but is only rendered on this Institute page.)

### 3.4 Footer

See [1.5 Footer (shared)](#15-footer-shared).

---

## 4. Page: Solutions

Routes: `/solutions` (en) / `/solucoes` (pt). Component `src/pages/Solutions.tsx`. Title PT `Soluções | Instituto Curvelo` / EN `Solutions | Instituto Curvelo`.

Sections in order: Navigation, Hero, three Solution sections (IoT, Automation, Data Intelligence), CTA, Tax Benefits, Footer. The three solution sections have anchor ids `#iot`, `#automation`, `#dataIntelligence` (targets of the Home page expertise cards).

### 4.1 Hero

| Element | PT | EN |
|---|---|---|
| Heading | `Automação e IoT` | `Automation & IoT` |
| Subtitle | `Soluções inteligentes para indústria do futuro` | `Smart solutions for the industry of the future` |
| Description | `Conectamos dispositivos, automatizamos processos e transformamos dados em insights estratégicos.` | `We connect devices, automate processes, and transform data into strategic insights.` |

### 4.2 Section labels (repeated per solution)

| Label | PT | EN |
|---|---|---|
| Features | `Recursos` | `Features` |
| Applications | `Aplicações` | `Applications` |
| Benefits | `Benefícios` | `Benefits` |

### 4.3 Solution 1 - IoT (`#iot`)

| Element | PT | EN |
|---|---|---|
| Title | `IoT & Sensoriamento Inteligente` | `IoT & Smart Sensing` |
| Description | `Desenvolvemos sistemas IoT completos que conectam seus equipamentos e operações. Monitoramento em tempo real para indústria, campo e fazenda.` | `We develop complete IoT systems for real-time monitoring and control of industrial, agricultural, and livestock environments.` |
| Image | `circuit-board.jpg` | same |

Features:
| PT | EN |
|---|---|
| `Sensores sem fio para monitoramento industrial e rural` | `Wireless Sensor Networks for industrial and rural environments` |
| `Dispositivos de baixo consumo com autonomia estendida` | `Low-power IoT Devices` |
| `Monitoramento ambiental 24/7` | `Real-time Environmental Monitoring` |
| `Supervisão remota de operações críticas` | `Remote Telemetry and Supervision Systems` |
| `Processamento local de dados com Edge Computing` | `Edge Computing for local data processing` |

Applications:
| PT | EN |
|---|---|
| `Monitoramento de máquinas e linha de produção` | `Industrial machine and equipment monitoring` |
| `Controle de qualidade ambiental` | `Air and water quality control` |
| `Gestão eficiente de energia` | `Smart energy management` |
| `Agricultura de precisão` | `Precision agriculture and livestock` |
| `Manejo inteligente de rebanhos` | `Herd monitoring and animal welfare` |
| `Rastreamento e localização de ativos` | `Asset and vehicle tracking` |

Benefits:
| PT | EN |
|---|---|
| `Visibilidade total das operações` | `Complete operational visibility` |
| `Menos paradas não programadas` | `Predictive maintenance and reduced downtime` |
| `Economia de energia` | `Energy savings` |
| `Decisões baseadas em dados reais` | `Real data-driven decisions` |

### 4.4 Solution 2 - Industrial Automation (`#automation`)

| Element | PT | EN |
|---|---|---|
| Title | `Automação Industrial` | `Industrial Automation` |
| Description | `Soluções completas de Indústria 4.0 que modernizam sua produção. Mais eficiência, menos desperdício, resultados comprovados.` | `We implement complete Industry 4.0 solutions to optimize production processes and increase operational efficiency through intelligent automation.` |
| Image | `robotics.jpg` | same |

Features:
| PT | EN |
|---|---|
| `Sistemas de supervisão sob medida para sua operação` | `Custom supervision and control systems` |
| `Robótica industrial e colaborativa` | `Industrial and Collaborative Robotics` |
| `Controle preciso de processos produtivos` | `Advanced industrial process control` |
| `Integração com ERP e sistemas corporativos` | `System Integration (ERP and corporate systems)` |
| `Manutenção preditiva com Machine Learning` | `Predictive Maintenance using machine learning` |

Applications:
| PT | EN |
|---|---|
| `Automação completa de linhas de produção` | `Automated production lines` |
| `Controle de qualidade automatizado` | `Automated quality control systems` |
| `Logística e armazenagem inteligente` | `Smart logistics and warehousing` |
| `Processos químicos e industriais` | `Chemical and industrial process control` |
| `Embalagem e distribuição` | `Packaging and distribution automation` |
| `Inspeção visual automatizada` | `Computer vision systems for inspection` |

Benefits:
| PT | EN |
|---|---|
| `Mais produtividade` | `Increased productivity` |
| `Menos defeitos e desperdício` | `Reduced defects and waste` |
| `Operação mais segura` | `Enhanced operational safety` |
| `Rastreabilidade total da produção` | `Complete production traceability` |

### 4.5 Solution 3 - Data Intelligence (`#dataIntelligence`)

| Element | PT | EN |
|---|---|---|
| Title | `Inteligência de Dados` | `Data Intelligence` |
| Description | `Transformamos dados em decisões que impulsionam resultados. Usamos análise avançada e Machine Learning para você tomar as melhores decisões, mais rápido.` | `We transform data into strategic decisions using advanced analytics and Machine Learning to optimize your operations.` |
| Image | `data-analysis.jpg` | same |

Features:
| PT | EN |
|---|---|
| `Painéis de controle personalizados para suas operações` | `Custom control panels for your operations` |
| `Modelos preditivos que antecipam problemas e oportunidades` | `Predictive models to anticipate failures and opportunities` |
| `Análise de Grafos para resolver desafios complexos de logística` | `Graph Analysis for complex process optimization` |
| `Processamento eficiente de grandes volumes de dados` | `Intelligent processing of large data volumes` |
| `Assistentes inteligentes personalizados usando LLMs e RAG` | `Specialized virtual assistants using LLMs and RAG` |

Applications:
| PT | EN |
|---|---|
| `Previsão de demanda e planejamento estratégico` | `Demand forecasting and production planning` |
| `Otimização de operações agropecuárias` | `Agricultural and livestock operations optimization` |
| `Detecção precoce de falhas e anomalias` | `Early detection of equipment and herd issues` |
| `Monitoramento de qualidade e performance` | `Quality and performance analysis` |
| `Otimização de rotas e cadeia logística` | `Route and logistics optimization using graphs` |
| `Assistentes inteligentes personalizados para seu negócio` | `Intelligent assistants customized for your business` |

Benefits:
| PT | EN |
|---|---|
| `Resultados mensuráveis e ROI comprovado` | `Measurable results and proven ROI` |
| `Redução significativa de custos` | `Significant cost reduction` |
| `Antecipação de problemas antes que aconteçam` | `Anticipate problems before they happen` |
| `Decisões mais rápidas e assertivas` | `Faster and more accurate decisions` |

### 4.6 CTA

| Element | PT | EN |
|---|---|---|
| Heading | `Pronto para Começar?` | `Ready to Get Started?` |
| Description | `Entre em contato conosco para discutir como podemos ajudar seu negócio a crescer com tecnologia.` | `Contact us to discuss how we can help your business grow with technology.` |
| Button | `Fale Conosco` | `Contact Us` | → `/#contact` |

### 4.7 Tax Benefits (Lei do Bem)

| Element | PT | EN |
|---|---|---|
| Heading | `Benefícios Fiscais` | `Tax Benefits` |
| Subtitle | `Lei do Bem (Lei 11.196/2005)` | `Brazilian Innovation Law (Lei do Bem)` |
| Description | `Nossas projetos são elegíveis para benefícios fiscais da Lei do Bem para empresas do regime de lucro real.` | `Our projects are eligible for tax benefits under the Innovation Law for companies under the real profit tax regime.` |
| Detail 1 | `Recuperação de até 20% dos gastos com inovação tecnológica` | `Return of up to 20% of technological innovation expenses` |
| Detail 2 | `Redução do IR e CSLL sobre investimentos em treinamento` | `Reduction of IR and CSLL on training investments` |
| Detail 3 | `Fortalecimento da inovação tecnológica da empresa` | `Strengthening of company's technological innovation` |
| Detail 4 | `Compliance com requisitos de Pesquisa, Desenvolvimento e Inovação` | `Compliance with R&D requirements` |
| Footnote | `Entre em contato para saber mais sobre como aproveitar esses benefícios fiscais em sua empresa.` | `Contact us to learn more about how to take advantage of these tax benefits for your company.` |

(Note PT typo preserved verbatim: "Nossas projetos".)

### 4.8 Footer

See [1.5 Footer (shared)](#15-footer-shared).

---

## 5. Page: Resolutions

Routes: `/resolutions` (en) / `/resolucoes` (pt). Component `src/pages/Resolutions.tsx`. Title PT `Resoluções | Instituto Curvelo` / EN `Resolutions | Instituto Curvelo`.

Sections in order: Navigation, Hero, Documents accordion, footnote, Footer.

### 5.1 Hero

| Element | PT | EN |
|---|---|---|
| Heading | `Resoluções e Documentos` | `Resolutions and Documents` |
| Subtitle | `Transparência e conformidade: acesse todas as resoluções e documentos oficiais das unidades do Instituto de Ciência e Tecnologia.` | `Transparency and compliance: access all official resolutions and documents from the Institute of Science and Technology units.` |

### 5.2 Documents accordion

One accordion unit. Unit name (not language-switched): `NIT - Núcleo de Inovação Tecnológica`.

| Document | Date | Type | File |
|---|---|---|---|
| `Resolução NIT nº 001/2025 - Política de Inovação` | `2025-09-10` (displayed as `Data: 10/09/2025`, formatted pt-BR) | `Resolução` (badge) | `/NIT_001_2025.pdf` (opens in new tab) |

Static labels: `Data:` prefix (not switched), `Download` button label (not switched).

### 5.3 Footnote

| PT | EN |
|---|---|
| `Para solicitar documentos adicionais ou esclarecimentos, entre em contato através do nosso formulário de contato.` | `To request additional documents or clarifications, please contact us through our contact form.` |

### 5.4 Footer

See [1.5 Footer (shared)](#15-footer-shared).

---

## 6. Page: Courses (listing)

Routes: `/course` (en) / `/curso` (pt). Component `src/pages/Courses.tsx`. Title PT `Cursos | Instituto Curvelo` / EN `Courses | Instituto Curvelo`.

Sections in order: Navigation, Hero, Available Courses cards, Tax Benefits, Footer. (A "Coming Soon" section is defined in content but the JSX render block is commented out / empty — see note below.)

### 6.1 Hero

| Element | PT | EN |
|---|---|---|
| Heading | `Nossos Cursos` | `Our Courses` |
| Subtitle | `Capacitação técnica especializada para profissionais e empresas` | `Specialized technical training for professionals and companies` |
| Description | `Descubra nossa seleção de cursos desenvolvidos para preparar você e sua equipe para os desafios do futuro tecnológico.` | `Discover our selection of courses designed to prepare you and your team for the challenges of the technological future.` |

### 6.2 Course cards

Two cards. Shared static labels: `Certificado` (badge, not switched), `Destaques:` (heading, not switched). CTA labels: View course PT `Ver Curso` / EN `View Course`; Request proposal PT `Solicitar Proposta` / EN `Request Proposal`.

**Card 1 - Data Science** (`id: data-science`):

| Field | PT | EN |
|---|---|---|
| Status badge | `Disponível` | `Available` |
| Level badge | `Iniciante` | `Beginner` |
| Title | `Introdução à Ciência de Dados` | `Introduction to Data Science` |
| Description | `Aprenda os fundamentos da ciência de dados com especialista renomado do ITA e Unifesp` | `Learn data science fundamentals with renowned ITA/Unifesp specialist` |
| Duration | `12 semanas` | `12 weeks` |
| Hours | `36 horas` | `36 hours` |
| Format | `Virtual` | `Virtual` |
| Highlight 1 | `Professor do ITA e Unifesp` | `ITA and Unifesp Professor` |
| Highlight 2 | `Metodologia prática` | `Practical methodology` |
| Highlight 3 | `Certificado incluso` | `Certificate included` |
| Highlight 4 | `R, Python ou PowerBI` | `R, Python or PowerBI` |
| Card overlay title | `Ciência de Dados` | `Data Science` |
| Card overlay subtitle | `Análise • Modelagem • Insights` | `Analysis • Modeling • Insights` |
| Link | `/curso/ciencia-de-dados` (pt) / `/course/data-science` (en) | |

**Card 2 - Corporate LLMs** (`id: llm-course`, purple theme):

| Field | PT | EN |
|---|---|---|
| Status badge | `Disponível` | `Available` |
| Level badge | `Avançado` | `Advanced` |
| Title | `LLMs Corporativos` | `Corporate LLMs` |
| Description | `Domine arquiteturas LLM, Fine-Tuning, RAG e Knowledge Graphs para aplicações corporativas` | `Master LLM architectures, Fine-Tuning, RAG and Knowledge Graphs for corporate applications` |
| Duration | `8 semanas` | `8 weeks` |
| Hours | `24 horas` | `24 hours` |
| Format | `Virtual` | `Virtual` |
| Highlight 1 | `Ollama, FAISS, LoRA/PEFT` | `Ollama, FAISS, LoRA/PEFT` |
| Highlight 2 | `Graph-RAG prático` | `Practical Graph-RAG` |
| Highlight 3 | `Certificado incluso` | `Certificate included` |
| Highlight 4 | `Projetos corporativos` | `Corporate projects` |
| Card overlay title | `LLMs Corporativos` | `Corporate LLMs` |
| Card overlay subtitle | `IA • RAG • Automação` | `AI • RAG • Automation` |
| Link | `/curso/llms-corporativos` (pt) / `/course/llms-corporate` (en) | |

"Request Proposal" button opens WhatsApp (`5512997239684`) with the per-course prefilled message (see [1.4](#14-contact-details)).

### 6.3 Coming Soon (defined but NOT rendered)

The content object defines an "Upcoming Courses" block, but the JSX render section is empty (commented placeholder `{/* Coming Soon Section */}`). Captured for completeness in case it should be restored:

| Element | PT | EN |
|---|---|---|
| Heading | `Próximos Cursos` | `Upcoming Courses` |
| Subtitle | `Novos cursos em desenvolvimento` | `New courses in development` |
| Course A title | `Machine Learning Avançado` | `Advanced Machine Learning` |
| Course A description | `Aprofunde-se em algoritmos de aprendizado de máquina` | `Deep dive into machine learning algorithms` |
| Course A launch | `2024` | `2024` |
| Course B title | `Análise de Dados com SQL` | `Data Analysis with SQL` |
| Course B description | `Domine consultas complexas e análise de banco de dados` | `Master complex queries and database analysis` |
| Course B launch | `2024` | `2024` |

### 6.4 Tax Benefits (Lei do Bem)

| Element | PT | EN |
|---|---|---|
| Heading | `Benefícios Fiscais` | `Tax Benefits` |
| Subtitle | `Lei do Bem (Lei 11.196/2005)` | `Brazilian Innovation Law (Lei do Bem)` |
| Description | `Nossas capacitações são elegíveis para benefícios fiscais da Lei do Bem para empresas do regime de lucro real.` | `Our training programs are eligible for tax benefits under the Innovation Law for companies under the real profit tax regime.` |
| Detail 1 | `Recuperação de até 20% dos gastos com capacitação tecnológica` | `Return of up to 20% of technological training expenses` |
| Detail 2 | `Redução do IR e CSLL sobre investimentos em treinamento` | `Reduction of IR and CSLL on training investments` |
| Detail 3 | `Fortalecimento da inovação tecnológica da empresa` | `Strengthening of company's technological innovation` |
| Detail 4 | `Compliance com requisitos de Pesquisa, Desenvolvimento e Inovação` | `Compliance with R&D requirements` |
| Footnote | `Entre em contato para saber mais sobre como aproveitar esses benefícios fiscais em sua empresa.` | `Contact us to learn more about how to take advantage of these tax benefits for your company.` |

### 6.5 Footer

See [1.5 Footer (shared)](#15-footer-shared).

---

## 7. Page: Data Science course

Routes: `/course/data-science` (en) / `/curso/ciencia-de-dados` (pt). Component `src/pages/DataScience.tsx`. Title PT `Ciência de Dados | Instituto Curvelo` / EN `Data Science | Instituto Curvelo`.

Sections in order: Navigation (with in-page anchors), Hero, Overview (`#about`), Curriculum, Instructor (`#instructor`), Methodology + Target Audience, Certification (`#certification`), CTA, Footer (`#contact`), floating WhatsApp button.

### 7.1 Hero

| Element | PT | EN |
|---|---|---|
| Heading | `Introdução à Ciência de Dados` | `Introduction to Data Science` |
| Subtitle | `Capacitação técnica especializada para profissionais e empresas` | `Specialized technical training for professionals and companies` |
| Benefit | `Capacite seus colaboradores com os fundamentos da ciência de dados com especialista renomado do ITA e Unifesp em apenas 12 semanas` | `Learn data science fundamentals with renowned ITA/Unifesp specialist in just 12 weeks` |
| CTA button | `SOLICITE PROPOSTA` | `REQUEST PROPOSAL` | → WhatsApp |
| Highlight - hours | `36 horas` | `36 hours` |
| Highlight - format | `Virtual` | `Virtual` |
| Highlight - spots | `Até 30 vagas` | `Up to 30 spots` |
| Highlight - certificate | `Certificado incluso` | `Certificate included` |

### 7.2 Overview (`#about`)

Section heading: PT `Sobre o Curso` / EN `About the Course`. Left card title (static, not switched): `Detalhes`. Right card title (static): `Principais Benefícios`.

Details:
| PT | EN |
|---|---|
| `12 semanas de capacitação intensiva` | `12 weeks of intensive training` |
| `Encontros virtuais com especialista` | `Virtual meetings` |
| `36 horas de conteúdo prático e teórico` | `36 hours of practical and theoretical content` |
| `Turmas limitadas a 30 participantes` | `Limited to 30 participants per class` |
| `Ministrado em R, Python ou PowerBI` | `Taught in R, Python or PowerBI` |
| `Certificado de curso livre ao final` | `Free course certificate upon completion` |

Benefits:
| PT | EN |
|---|---|
| `Aprenda com professor do ITA e Unifesp` | `Learn from ITA and Unifesp specialist` |
| `Metodologia prática com estudos de caso reais` | `Practical methodology with real case studies` |
| `Relatórios descritivos com feedback personalizado` | `Descriptive reports with personalized feedback` |
| `Material didático incluso e disponibilizado` | `Course materials included and provided` |
| `Aplicação em projetos empresariais` | `Immediate application in business projects` |

### 7.3 Curriculum

Heading: PT `Conteúdo Programático` / EN `Curriculum`. Numbered modules (1-9):

| # | PT | EN |
|---|---|---|
| 1 | `O que é Ciência de Dados e suas aplicações` | `What is Data Science and its applications` |
| 2 | `Conceitos de modelagem de problema e aprendizado` | `Problem modeling and learning concepts` |
| 3 | `Dados, informação e conhecimento` | `Data, information and knowledge` |
| 4 | `Coleta, integração e armazenamento de dados` | `Data collection, integration and storage` |
| 5 | `Análise exploratória e visualização de dados` | `Exploratory analysis and data visualization` |
| 6 | `Limpeza e preparação de dados` | `Data cleaning and preparation` |
| 7 | `Ajuste e avaliação de modelos` | `Model fitting and evaluation` |
| 8 | `Estudos de caso práticos` | `Practical case studies` |
| 9 | `Ética, privacidade e legalidade no uso de dados` | `Ethics, privacy and legality in data use` |

### 7.4 Instructor (`#instructor`)

Heading: PT `Seu Instrutor` / EN `Your Instructor`. Card subheading (static): `Credenciais e Experiência`. Photo: `/lovable-uploads/477e2606-ae44-4fc1-aee7-b3a65767585b.png`.

| Element | PT | EN |
|---|---|---|
| Name | `Prof. Dr. Filipe A. N. Verri` | `Prof. Dr. Filipe Alves Neto Verri` |
| Credential 1 | `Doutor em Ciências de Computação pela USP` | `PhD in Computer Science (USP)` |
| Credential 2 | `Desde 2020, Professor do Programa PPG-PO (ITA/Unifesp)` | `Since 2020, Professor at PPG-PO (ITA/Unifesp)` |
| Credential 3 | `Estágio de pesquisa na Arizona State University (EUA)` | `Research internship at Arizona State University (USA)` |
| Credential 4 | `Autor de mais de 30 artigos científicos` | `Author of 30+ scientific articles` |
| Credential 5 | `Autor do livro 'Data Science Project'` | `Author of 'Data Science Project' book` |
| Credential 6 | `Co-fundador do grupo de pesquisa DroneComp (ITA)` | `Co-founder of DroneComp research group` |

### 7.5 Methodology + Target Audience

Methodology heading: PT `Metodologia` / EN `Methodology`.
| PT | EN |
|---|---|
| `Encontros virtuais semanais ` (trailing space in source) | `Weekly virtual meetings with specialist` |
| `Atividades práticas com relatórios` | `Practical activities with descriptive reports` |
| `Revisão e feedback individualizado` | `Individual review and feedback` |
| `Estudos de caso aplicados` | `Applied case studies` |
| `Material de apoio bibliográfico` | `Bibliographic support material` |

Target audience heading: PT `Para Quem é Este Curso` / EN `Who This Course is For`.
| PT | EN |
|---|---|
| `Profissionais que desejam ingressar na área de dados` | `Professionals wanting to enter the data field` |
| `Equipes técnicas que precisam aprimorar processos` | `Technical teams needing to improve processes` |
| `Empresas buscando inovação tecnológica` | `Companies seeking technological innovation` |
| `Colaboradores em desenvolvimento de capacidades técnicas` | `Employees developing technical capabilities` |

### 7.6 Certification (`#certification`)

Heading: PT `Certificação` / EN `Certification`.
| PT | EN |
|---|---|
| `Certificado de curso livre emitido ao final` | `Free course certificate issued upon completion` |
| `Conforme Decreto Presidencial N° 5.154/2004` | `According to Presidential Decree No. 5.154/2004` |
| `Válido para capacitação profissional` | `Valid for professional training` |
| `Disponibilizado para todos os participantes aprovados` | `Available to all approved participants` |

### 7.7 CTA

| Element | PT | EN |
|---|---|---|
| Heading | `SOLICITE SUA PROPOSTA AGORA` | `REQUEST YOUR PROPOSAL NOW` |
| Secondary | `Turmas sob demanda - Entre em contato` | `Classes on demand - Contact us` |
| Button | `SOLICITE PROPOSTA` | `REQUEST PROPOSAL` | → WhatsApp |
| Info | `Entre em contato para valores e cronograma detalhado` | `Contact us for pricing and detailed schedule` |

### 7.8 Footer (`#contact`) - expanded

Contact column heading: PT/EN `Contato` / `Contact`. Items:
- Address: PT `São José dos Campos, SP - Brasil` / EN `São José dos Campos, SP - Brazil`
- Email: `contato@institutocurvelo.org.br`
- Phone: `+55 12 99723-9684`

Second column heading (static): `Lei do Bem`. Body (static PT, not switched): `Nossos cursos são elegíveis para benefícios fiscais da Lei do Bem (Lei 11.196/2005) para empresas do regime de lucro real.`

Bottom: shared logo + tagline (PT/EN) + `CNPJ 60.911.337/0001-82`.

Floating WhatsApp button (bottom-right, green) → WhatsApp with Data Science prefilled message.

---

## 8. Page: Corporate LLMs course

Routes: `/course/llms-corporate` (en) / `/curso/llms-corporativos` (pt). Component `src/pages/LLMCourse.tsx`. Title PT `LLMs Corporativos | Instituto Curvelo` / EN `Corporate LLMs | Instituto Curvelo`. Purple/blue theme.

Sections in order: Navigation (in-page anchors), Hero, Overview (`#about`), Curriculum (`#curriculum`, 8 weekly cards), Target Audience + Methodology (`#methodology`), Certification (`#certification`), CTA + contact (`#contact`), Footer.

### 8.1 Hero

| Element | PT | EN |
|---|---|---|
| Heading | `LLMs Corporativos` | `Corporate LLMs` |
| Subtitle | `Arquiteturas, Fine-Tuning, RAG e Knowledge Graphs` | `Architectures, Fine-Tuning, RAG and Knowledge Graphs` |
| Benefit | `Domine as tecnologias LLM mais avançadas para aplicações corporativas em 8 semanas intensivas` | `Master the most advanced LLM technologies for corporate applications in 8 intensive weeks` |
| CTA button | `SOLICITE PROPOSTA` | `REQUEST PROPOSAL` | → WhatsApp |
| Highlight - hours | `24 horas` | `24 hours` |
| Highlight - format | `Virtual` | `Virtual` |
| Highlight - weeks | `8 semanas` | `8 weeks` |
| Highlight - certificate | `Certificado incluso` | `Certificate included` |

### 8.2 Overview (`#about`)

Heading: PT `Sobre o Curso` / EN `About the Course`.
Description: PT `Curso técnico especializado em Large Language Models (LLMs) aplicados ao ambiente corporativo, cobrindo desde fundamentos até implementações avançadas com RAG, Knowledge Graphs e técnicas de fine-tuning.` / EN `Specialized technical course in Large Language Models (LLMs) applied to corporate environments, covering from fundamentals to advanced implementations with RAG, Knowledge Graphs and fine-tuning techniques.`

Left card title (static): `Detalhes do Curso`. Right card title (static): `Benefícios`.

Details:
| PT | EN |
|---|---|
| `8 semanas de capacitação intensiva` | `8 weeks of intensive training` |
| `3 horas semanais com aulas ao vivo + laboratórios práticos` | `3 hours weekly with live classes + practical labs` |
| `24 horas de conteúdo técnico especializado` | `24 hours of specialized technical content` |
| `Turmas limitadas para aprendizado personalizado` | `Limited classes for personalized learning` |
| `Ollama, FAISS, LoRA/PEFT, LightRAG` | `Ollama, FAISS, LoRA/PEFT, LightRAG` |
| `Certificado de curso livre ao final` | `Free course certificate upon completion` |

Benefits:
| PT | EN |
|---|---|
| `Competência técnica para projetar soluções LLM corporativas` | `Technical competency to design corporate LLM solutions` |
| `Experiência prática com fine-tuning e otimização de modelos` | `Practical experience with model fine-tuning and optimization` |
| `Implementação de pipelines RAG e Graph-RAG avançados` | `Implementation of advanced RAG and Graph-RAG pipelines` |
| `Metodologia hands-on com notebooks e laboratórios` | `Hands-on methodology with notebooks and laboratories` |
| `Técnicas de avaliação e controle de qualidade em produção` | `Quality control and evaluation techniques for production` |

### 8.3 Curriculum (`#curriculum`) - 8 weekly cards

Heading: PT `Programa Semanal` / EN `Weekly Program`.
Flexibility note: PT `* A grade de matérias é flexível e pode ser adequada às necessidades do cliente.` / EN `* The curriculum is flexible and can be tailored to client needs.`
Each card title format: `Semana {n} — {title}` (PT) / rendered as "Semana {n} — {title}" in both languages (the literal "Semana" prefix is hardcoded, not switched).

**Week 1** — PT `Fundamentos Técnicos dos LLMs` / EN `LLM Technical Fundamentals`
| PT | EN |
|---|---|
| `Arquitetura Transformer: atenção e encodings posicionais` | `Transformer architecture: attention and positional encodings` |
| `Tipos de modelos: causal vs encoder-decoder vs encoder` | `Model types: causal vs encoder-decoder vs encoder` |
| `Tokenização e análise de custos/latência` | `Tokenization and cost/latency analysis` |
| `Lab: Profiling com Ollama (llama2 vs mistral)` | `Lab: Profiling with Ollama (llama2 vs mistral)` |

**Week 2** — PT `Arquiteturas e Fine-Tuning` / EN `Architectures and Fine-Tuning`
| PT | EN |
|---|---|
| `Variantes GPT-style vs T5-style` | `GPT-style vs T5-style variants` |
| `Técnicas de eficiência: quantização, pruning, distillation` | `Efficiency techniques: quantization, pruning, distillation` |
| `Fine-tuning: full vs instruction vs LoRA/PEFT` | `Fine-tuning: full vs instruction vs LoRA/PEFT` |
| `Lab: Experimento LoRA/PEFT com dataset corporativo` | `Lab: LoRA/PEFT experiment with corporate dataset` |

**Week 3** — PT `Prompting Avançado e Verificação` / EN `Advanced Prompting and Verification`
| PT | EN |
|---|---|
| `Hard Prompt vs Soft Prompt e técnicas de controle` | `Hard Prompt vs Soft Prompt and control techniques` |
| `Prompt chaining e templates reutilizáveis` | `Prompt chaining and reusable templates` |
| `Verificação automática e citation forcing` | `Automatic verification and citation forcing` |
| `Lab: Chains com verificação e avaliação A/B` | `Lab: Chains with verification and A/B evaluation` |

**Week 4** — PT `Embeddings e RAG Tradicional` / EN `Embeddings and Traditional RAG`
| PT | EN |
|---|---|
| `Estratégias de chunking e escolha de modelos` | `Chunking strategies and model selection` |
| `FAISS local: indexação, sharding e updates` | `Local FAISS: indexing, sharding and updates` |
| `Pipeline RAG: retrievers e re-ranking híbrido` | `RAG pipeline: retrievers and hybrid re-ranking` |
| `Lab: Pipeline completo RAG com Ollama` | `Lab: Complete RAG pipeline with Ollama` |

**Week 5** — PT `MCP e Orquestração` / EN `MCP and Orchestration`
| PT | EN |
|---|---|
| `Model Context Protocol: schema e contratos` | `Model Context Protocol: schema and contracts` |
| `Orquestração: vector store + KG + APIs empresariais` | `Orchestration: vector store + KG + enterprise APIs` |
| `Timeout/fallback e observabilidade com tracing` | `Timeout/fallback and observability with tracing` |
| `Lab: Orquestrador multi-fonte com logs de latência` | `Lab: Multi-source orchestrator with latency logs` |

**Week 6** — PT `Knowledge Graphs Empresariais` / EN `Enterprise Knowledge Graphs`
| PT | EN |
|---|---|
| `Mapeamento ER/relacional para Knowledge Graphs` | `ER/relational mapping to Knowledge Graphs` |
| `Geração de KG via LLM e políticas de versionamento` | `KG generation via LLM and versioning policies` |
| `Provenance e governança de dados estruturados` | `Provenance and structured data governance` |
| `Lab: Mini-ontologia corporativa com consultas` | `Lab: Corporate mini-ontology with queries` |

**Week 7** — PT `Graph-RAG e LightRAG` / EN `Graph-RAG and LightRAG`
| PT | EN |
|---|---|
| `Graph-RAG: subgrafos como contexto relevante` | `Graph-RAG: subgraphs as relevant context` |
| `Templates para grounding e evidências estruturadas` | `Templates for grounding and structured evidence` |
| `LightRAG: otimizações para GraphRAG em produção` | `LightRAG: production optimizations for GraphRAG` |
| `Lab: Endpoint híbrido Graph-RAG` | `Lab: Hybrid Graph-RAG endpoint` |

**Week 8** — PT `Produção e Governança` / EN `Production and Governance`
| PT | EN |
|---|---|
| `Arquitetura de produção: microservices e SLOs` | `Production architecture: microservices and SLOs` |
| `Observability: métricas de latência e hallucination rate` | `Observability: latency and hallucination rate metrics` |
| `Segurança: PII, redaction, compliance` | `Security: PII, redaction, compliance` |
| `Projeto final: PoC com RAG + KG + MCP` | `Final project: PoC with RAG + KG + MCP` |

### 8.4 Target Audience + Methodology (`#methodology`)

Target Audience heading: PT `Público-Alvo` / EN `Target Audience`.
| PT | EN |
|---|---|
| `Gestores de TI e inovação tecnológica` | `IT and technological innovation managers` |
| `Cientistas de dados e engenheiros de ML` | `Data scientists and ML engineers` |
| `Equipes técnicas em IA e automação` | `Technical teams in AI and automation` |
| `Desenvolvedores de soluções corporativas` | `Corporate solution developers` |

Methodology heading: PT `Metodologia` / EN `Methodology`.
| PT | EN |
|---|---|
| `Aulas ao vivo com demonstrações práticas` | `Live classes with practical demonstrations` |
| `Laboratórios hands-on com notebooks interativos` | `Hands-on laboratories with interactive notebooks` |
| `Projetos semanais com datasets corporativos` | `Weekly projects with corporate datasets` |
| `Sessões de code review e melhores práticas` | `Code review sessions and best practices` |
| `Projeto final com apresentação técnica` | `Final project with technical presentation` |

### 8.5 Certification (`#certification`)

Heading: PT `Certificação` / EN `Certification`.
| PT | EN |
|---|---|
| `Certificado de curso livre emitido ao final` | `Free course certificate issued upon completion` |
| `Conforme Decreto Presidencial N° 5.154/2004` | `According to Presidential Decree No. 5.154/2004` |
| `Válido para capacitação profissional técnica` | `Valid for technical professional training` |
| `Comprovação de 24 horas de treinamento especializado` | `Proof of 24 hours of specialized training` |

### 8.6 CTA + contact (`#contact`)

| Element | PT | EN |
|---|---|---|
| Heading | `SOLICITE SUA PROPOSTA AGORA` | `REQUEST YOUR PROPOSAL NOW` |
| Secondary | `Turmas sob demanda - Entre em contato` | `Classes on demand - Contact us` |
| Button | `SOLICITE PROPOSTA` | `REQUEST PROPOSAL` | → WhatsApp |
| Info | `Entre em contato para valores e cronograma detalhado` | `Contact us for pricing and detailed schedule` |
| Contact email | `contato@institutocurvelo.org.br` | same |
| Contact phone | `+55 12 99723-9684` | same |

### 8.7 Footer

Logo + tagline (PT/EN) + `CNPJ 60.911.337/0001-82` (simple variant).

---

## 9. Page: 404 / NotFound

Route: `*` (catch-all). Component `src/pages/NotFound.tsx`. `document.title = "Página não encontrada | Instituto Curvelo"` (not language-switched). Light gray background.

| Element | Value (not language-switched) |
|---|---|
| Heading | `404` |
| Body | `Oops! Page not found` |
| Link | `Return to Home` → `/` |

Side effect: logs `404 Error: User attempted to access non-existent route: <path>` to console. This page is entirely in English / hardcoded and ignores the language context.

---

## 10. Structured data tables

### 10.1 Courses offered

| Course | id | PT title | EN title | Duration | Hours | Level (PT/EN) | Format | Detail route (pt / en) |
|---|---|---|---|---|---|---|---|---|
| Data Science | `data-science` | Introdução à Ciência de Dados | Introduction to Data Science | 12 semanas / 12 weeks | 36 | Iniciante / Beginner | Virtual | `/curso/ciencia-de-dados` / `/course/data-science` |
| Corporate LLMs | `llm-course` | LLMs Corporativos | Corporate LLMs | 8 semanas / 8 weeks | 24 | Avançado / Advanced | Virtual | `/curso/llms-corporativos` / `/course/llms-corporate` |

Upcoming (defined, not rendered): Machine Learning Avançado / Advanced Machine Learning (2024); Análise de Dados com SQL / Data Analysis with SQL (2024).

### 10.2 Solutions offered

| Solution | key / anchor | PT title | EN title | Image |
|---|---|---|---|---|
| IoT | `iot` | IoT & Sensoriamento Inteligente | IoT & Smart Sensing | circuit-board.jpg |
| Automation | `automation` | Automação Industrial | Industrial Automation | robotics.jpg |
| Data Intelligence | `dataIntelligence` | Inteligência de Dados | Data Intelligence | data-analysis.jpg |

(Full feature/application/benefit lists per solution are in Section 4.)

### 10.3 Partners / sponsors

| Partner | Logo file | alt text |
|---|---|---|
| iRede | `/lovable-uploads/352726a2-25c9-4398-bfb5-792cedab1483.png` | iRede Logo |
| Lactec | `/lovable-uploads/8002afb8-be5b-49be-bfe7-38b3a1c8a408.png` | Lactec Logo |
| ICMC-USP | `/lovable-uploads/icmc-logo.png` | ICMC-USP Logo |
| GA230 Grupo | `/lovable-uploads/bd1c4e25-d263-43c9-9db8-3ec8be248f12.png` | GA230 Grupo Logo |

Maintaining organization mentioned in About copy: **Grupo GA230 / GA230 Group**.

### 10.4 Laboratories (Institute page)

| PT | EN |
|---|---|
| Laboratório de Eletrônica e Dispositivos | Electronics and Devices Laboratory |
| Laboratório de Sistemas de Manufatura e Automação | Manufacturing Systems and Automation Laboratory |
| Laboratório de Sistemas de Informação | Information Systems Laboratory |

### 10.5 NIT / Resolution entries

| Unit | Document | Date | Type | File |
|---|---|---|---|---|
| NIT - Núcleo de Inovação Tecnológica | Resolução NIT nº 001/2025 - Política de Inovação | 2025-09-10 | Resolução | `/NIT_001_2025.pdf` |

### 10.6 Team / board members

No formal team or board roster exists. The only named individual on the site is the course instructor:

| Name (PT / EN) | Role | Credentials | Appears in |
|---|---|---|---|
| Prof. Dr. Filipe Verri / Prof. Dr. Filipe A. N. Verri / Prof. Dr. Filipe Alves Neto Verri | Professor at ITA and Unifesp; course instructor | PhD Computer Science (USP); PPG-PO professor since 2020; ASU research internship; 30+ articles; author of "Data Science Project"; co-founder DroneComp (ITA) | Home course section, Data Science course page |

The "Conselho Técnico-Científico" (Technical-Scientific Council) is described conceptually on the Institute page but lists no named members.

---

## Notes for the Next.js rebuild (source observations)

- **Language model:** no per-language URLs today; both PT and EN routes mount the same component and content toggles from React context (default `pt`, persisted in `localStorage` key `institute-language`). Consider proper i18n routing in Next.
- **Two phone numbers / addresses:** institutional (`+55 11 3835-3050`, Arujá) vs course (`+55 12 99723-9684`, São José dos Campos). Confirm which is canonical.
- **Supabase dependency:** Home contact form posts to a Supabase edge function `send-contact-email`. The `src/integrations/supabase/client` import exists but the `integrations` directory was not present at extraction; verify before relying on it.
- **Unused/orphan content:** Courses "Coming Soon" block (defined, not rendered); Home nav labels `rdc`/`innovation` (defined, not rendered); imported-but-unused images `programming.jpg`, `innovation.jpg`, `consulting.jpg`; orphan upload `61790838-98a5-4a3b-80e4-31465e757e28.png`.
- **Hardcoded strings (not language-switched):** Resolutions unit name & `Download`/`Data:` labels; DataScience card titles `Detalhes`/`Principais Benefícios`/`Credenciais e Experiência` and the footer "Lei do Bem" paragraph; LLM card titles `Detalhes do Curso`/`Benefícios` and the literal `Semana` week prefix; the entire 404 page; Institute `document.title`. These appear only in Portuguese regardless of selected language.
- **Preserved typo:** Solutions PT tax-benefits description reads "Nossas projetos" (verbatim).
