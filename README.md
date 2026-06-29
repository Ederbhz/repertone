# ReperTone

**Seu repertório no tom certo.**

ReperTone é uma aplicação web responsiva para criação, organização, compartilhamento e acompanhamento de repertórios musicais por evento.

## MVP incluído

- Login demonstrativo.
- Dashboard com evento, estatísticas, atalhos e alterações recentes.
- Cadastro visual de equipe e integrantes.
- Lista de eventos com duplicação de repertório.
- Montagem de repertório com ordem por arrastar e soltar.
- Cadastro de música com cantor, tom original, tom escolhido, link externo, arquivo próprio e cifra digitada.
- Tela do músico otimizada para celular e tablet.
- Modo Palco com navegação anterior/próxima, tom em destaque, controle de fonte e estado offline.
- Manifesto PWA e service worker para cache do app.

## Briefing

O briefing de identidade visual e produto está em `docs/briefing-identidade-visual.md`.

## Como abrir localmente

Abra `index.html` no navegador.

Para PWA/offline completo, hospede os arquivos em HTTP/HTTPS, por exemplo via GitHub Pages.

## Publicação

Repositório: [Ederbhz/repertone](https://github.com/Ederbhz/repertone)

O workflow em `.github/workflows/pages.yml` prepara deploy pelo GitHub Pages usando GitHub Actions.

## Observação jurídica

O app foi estruturado para armazenar links externos e arquivos enviados pelo próprio usuário. Ele não copia automaticamente letras ou cifras de sites terceiros.
