# Bombeiro Oliveira — Site Eleitoral

Site de campanha para **Felipe Oliveira dos Santos (Bombeiro Oliveira)**, pré-candidato a **Deputado Federal pelo Espírito Santo** — Partido Missão.

## Stack

- **React 19** + TypeScript
- **Vite 7**
- **Tailwind CSS 4**
- **Framer Motion** — animações e scroll
- **Lucide React** — ícones

## Fontes

- **Barlow Condensed** — títulos e display (900, 700, 600, 400)
- **Barlow** — corpo de texto (300, 400, 500, 600)

## Como rodar

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── assets/
│   └── candidate.jpg       ← Foto do candidato
├── components/
│   ├── Cursor.tsx          ← Cursor customizado
│   ├── Navbar.tsx          ← Navbar fixa
│   ├── Hero.tsx            ← Seção hero (preta)
│   ├── About.tsx           ← Sobre + Trajetória horizontal (branca)
│   ├── Proposals.tsx       ← Propostas grid 3×2 (preta)
│   ├── PartyMission.tsx    ← Partido Missão (branca)
│   ├── Contact.tsx         ← Contato + redes sociais (preta)
│   └── Footer.tsx
├── lib/
│   ├── content.ts          ← Todos os textos e dados
│   └── cn.ts               ← Utilitário clsx + tw-merge
├── App.tsx
├── main.tsx
└── styles.css              ← Design system + Tailwind
```

## Personalização

Edite `src/lib/content.ts` para atualizar textos, propostas, redes sociais e dados do candidato.
