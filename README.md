# Portal de Viagens Next.js

Aplicação em Next.js com TypeScript que simula um pequeno portal de viagens. O projeto lista destinos turísticos e permite visualizar detalhes de cada destino em páginas individuais.

## Tecnologias utilizadas

- Next.js
- React
- TypeScript
- CSS Modules
- Rotas baseadas em arquivos
- Rotas dinâmicas

## Funcionalidades

- Página inicial com apresentação do portal
- Página de listagem de destinos
- Cards reutilizáveis para destinos
- Página dinâmica de detalhes de cada destino
- Menu de navegação com `next/link`
- Layout reutilizável com header e footer
- Estilização com CSS Modules

## Como rodar o projeto localmente

1. Instale as dependências:

```bash
npm install
```

2. Rode o projeto:

```bash
npm run dev
```

3. Abra no navegador:

```text
http://localhost:3000
```

## Estrutura principal

```text
src
├── app
│   ├── destinos
│   │   ├── [id]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── CardDestino.tsx
│   ├── CardDestino.module.css
│   ├── Layout.tsx
│   └── Layout.module.css
└── data
    └── destinos.ts
```
