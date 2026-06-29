const STORAGE_KEY = "repertone-state-v1";

const icons = {
  "layout-dashboard": '<rect x="3" y="3" width="7" height="8"></rect><rect x="14" y="3" width="7" height="5"></rect><rect x="14" y="12" width="7" height="9"></rect><rect x="3" y="15" width="7" height="6"></rect>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  calendar: '<path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path>',
  music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
  smartphone: '<rect x="7" y="2" width="10" height="20" rx="2"></rect><path d="M11 18h2"></path>',
  monitor: '<rect x="3" y="4" width="18" height="12" rx="2"></rect><path d="M8 20h8"></path><path d="M12 16v4"></path>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle>',
  share: '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="m8.59 13.51 6.83 3.98"></path><path d="m15.41 6.51-6.82 3.98"></path>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path>',
  "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><path d="M10 17l5-5-5-5"></path><path d="M15 12H3"></path>',
  plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
  search: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path>',
  link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
  trash: '<path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"></rect><rect x="2" y="2" width="13" height="13" rx="2"></rect>',
  arrowup: '<path d="m18 15-6-6-6 6"></path>',
  arrowdown: '<path d="m6 9 6 6 6-6"></path>',
  previous: '<path d="m15 18-6-6 6-6"></path><path d="M20 18V6"></path>',
  next: '<path d="m9 18 6-6-6-6"></path><path d="M4 6v12"></path>',
  minus: '<path d="M5 12h14"></path>',
  check: '<path d="M20 6 9 17l-5-5"></path>',
  edit: '<path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>',
  qrcode: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><path d="M14 14h2v2h-2z"></path><path d="M19 14h2v2h-2z"></path><path d="M14 19h2v2h-2z"></path><path d="M19 19h2v2h-2z"></path>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M17 8l-5-5-5 5"></path><path d="M12 3v12"></path>',
};

const icon = (name) =>
  `<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24">${icons[name] || ""}</svg></span>`;

const keyOptions = [
  "C",
  "C#",
  "Db",
  "D",
  "D#",
  "Eb",
  "E",
  "F",
  "F#",
  "Gb",
  "G",
  "G#",
  "Ab",
  "A",
  "A#",
  "Bb",
  "B",
  "Am",
  "Bm",
  "Cm",
  "Dm",
  "Em",
  "Fm",
  "Gm",
];

const sampleState = {
  activeView: "dashboard",
  currentSongIndex: 0,
  stageFontSize: 22,
  autoScroll: false,
  offlineReady: false,
  shareToken: "rep-ensaio-2026",
  user: {
    name: "Éder Miranda",
    role: "Coordenador",
    email: "coordenador@repertone.app",
  },
  team: {
    name: "Equipe ReperTone",
    type: "Ministério de música",
    owner: "Éder Miranda",
    members: [
      { name: "Marina Alves", role: "Cantora", instrument: "Vocal", status: "Ativo" },
      { name: "Rafael Costa", role: "Músico", instrument: "Teclado", status: "Ativo" },
      { name: "Lucas Prado", role: "Músico", instrument: "Violão", status: "Ativo" },
      { name: "Ana Ribeiro", role: "Técnica", instrument: "Som", status: "Ativo" },
    ],
  },
  event: {
    name: "Ensaio geral",
    type: "Ensaio",
    date: "2026-07-04",
    time: "19:30",
    location: "Sala principal",
    status: "Confirmado",
    description: "Repertório preparado para ensaio com equipe completa.",
  },
  songs: [
    {
      id: "song-1",
      title: "Canção da Jornada",
      artist: "Autoral da equipe",
      type: "Autoral",
      singer: "Marina Alves",
      originalKey: "G",
      selectedKey: "A",
      status: "Ensaiada",
      externalUrl: "https://www.cifraclub.com.br/",
      fileName: "cancao-da-jornada.pdf",
      audioUrl: "",
      videoUrl: "",
      notes: "Começar somente voz e teclado. Repetir o refrão final duas vezes.",
      instrumentNotes: {
        Vocal: "Entrada suave na primeira estrofe.",
        Teclado: "Pad aberto no refrão.",
        Violão: "Batida leve até a ponte.",
      },
      chart:
        "Intro: A  E  F#m  D\n\n[A] Caminho firme, voz em oração\n[E] Cada passo encontra direção\n[F#m] No compasso da equipe reunida\n[D] A canção prepara a partida\n\nRefrão: A  E  F#m  D\nTom escolhido: A",
    },
    {
      id: "song-2",
      title: "Luz do Caminho",
      artist: "Domínio próprio",
      type: "Conhecida",
      singer: "Rafael Costa",
      originalKey: "D",
      selectedKey: "E",
      status: "Em ensaio",
      externalUrl: "https://www.cifraclub.com.br/",
      fileName: "",
      audioUrl: "",
      videoUrl: "https://www.youtube.com/",
      notes: "Baixo entra na segunda parte. Final segurando em E.",
      instrumentNotes: {
        Baixo: "Entrada marcada no segundo verso.",
        Bateria: "Virada simples antes do último refrão.",
      },
      chart:
        "Intro: E  B  C#m  A\n\n[E] Luz que guia cada acorde\n[B] Voz que chama para frente\n[C#m] No tom certo a equipe responde\n[A] Tudo claro, tudo presente\n\nPonte: C#m  B  A\nFinal: E",
    },
    {
      id: "song-3",
      title: "Novo Amanhecer",
      artist: "Projeto pessoal",
      type: "Adaptação",
      singer: "Marina Alves",
      originalKey: "C",
      selectedKey: "C",
      status: "Aprovada",
      externalUrl: "",
      fileName: "novo-amanhecer.docx",
      audioUrl: "",
      videoUrl: "",
      notes: "Subir meio tom no último refrão se a equipe confirmar.",
      instrumentNotes: {
        Guitarra: "Usar delay curto na introdução.",
        Vocal: "Dividir vozes no refrão final.",
      },
      chart:
        "Intro: C  G  Am  F\n\n[C] O dia abre outra vez\n[G] A sala inteira respira\n[Am] Cada nota encontra seu lugar\n[F] Cada voz aprende a se escutar\n\nRefrão: C  G  Am  F",
    },
  ],
  changeLogs: [
    "Tom de Canção da Jornada alterado de G para A.",
    "Novo Amanhecer recebeu arquivo próprio.",
    "Ordem do repertório confirmada para o evento.",
  ],
};

let state = loadState();
let draggedId = null;
let toastTimer = null;

const loginScreen = document.querySelector("#loginScreen");
const appShell = document.querySelector("#appShell");
const viewRoot = document.querySelector("#viewRoot");
const pageTitle = document.querySelector("#pageTitle");

document.addEventListener("DOMContentLoaded", () => {
  replaceIconPlaceholders();
  bindGlobalEvents();
  registerServiceWorker();
});

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...sampleState, ...JSON.parse(stored) } : structuredClone(sampleState);
  } catch {
    return structuredClone(sampleState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function replaceIconPlaceholders(root = document) {
  root.querySelectorAll("[data-icon]").forEach((slot) => {
    slot.outerHTML = icon(slot.dataset.icon);
  });
}

function bindGlobalEvents() {
  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    loginScreen.classList.add("is-hidden");
    appShell.classList.remove("is-hidden");
    render();
  });

  document.querySelectorAll("[data-view], [data-view-target]").forEach((button) => {
    button.addEventListener("click", () => {
      setView(button.dataset.view || button.dataset.viewTarget);
    });
  });

  document.querySelector("#shareTopBtn").addEventListener("click", shareRepertoire);
  document.querySelector("#offlineTopBtn").addEventListener("click", prepareOffline);

  viewRoot.addEventListener("click", handleViewClick);
  viewRoot.addEventListener("submit", handleSubmit);
  viewRoot.addEventListener("change", handleChange);
  viewRoot.addEventListener("dragstart", handleDragStart);
  viewRoot.addEventListener("dragover", handleDragOver);
  viewRoot.addEventListener("drop", handleDrop);
}

function setView(view) {
  state.activeView = view;
  saveState();
  render();
}

function render() {
  document.querySelectorAll(".nav-btn, .mobile-nav-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.activeView);
  });

  const titles = {
    dashboard: "Dashboard",
    teams: "Equipes",
    events: "Eventos",
    repertoire: "Repertório",
    musician: "Tela do músico",
    stage: "Modo Palco",
    settings: "Ajustes",
  };
  pageTitle.textContent = titles[state.activeView] || "Dashboard";

  const renderers = {
    dashboard: renderDashboard,
    teams: renderTeams,
    events: renderEvents,
    repertoire: renderRepertoire,
    musician: renderMusician,
    stage: renderStage,
    settings: renderSettings,
  };

  viewRoot.innerHTML = (renderers[state.activeView] || renderDashboard)();
  replaceIconPlaceholders(viewRoot);
}

function renderDashboard() {
  const approved = state.songs.filter((song) => song.status === "Aprovada" || song.status === "Ensaiada").length;
  const files = state.songs.filter((song) => song.fileName).length;
  return `
    <div class="section-stack">
      <div class="event-hero">
        <span class="eyebrow">Próximo evento</span>
        <h2>${state.event.name}</h2>
        <div class="meta">
          <span>${formatDate(state.event.date)} às ${state.event.time}</span>
          <span>${state.event.location}</span>
          <span>${state.event.status}</span>
        </div>
      </div>

      <div class="stats-grid">
        ${statCard("Músicas", state.songs.length)}
        ${statCard("Aprovadas", approved)}
        ${statCard("Arquivos", files)}
        ${statCard("Integrantes", state.team.members.length)}
      </div>

      <div class="dashboard-grid">
        <section class="section-stack">
          <div class="section-head">
            <div>
              <h2>Repertório recente</h2>
              <p>${state.team.name}</p>
            </div>
            <button class="btn primary" type="button" data-action="new-song">
              <span data-icon="plus"></span>
              Música
            </button>
          </div>
          <div class="song-list">
            ${state.songs.map((song, index) => songCard(song, index, { compact: true })).join("")}
          </div>
        </section>

        <aside class="section-stack">
          <section class="share-panel">
            <h2>Atalhos</h2>
            <button class="btn secondary" type="button" data-action="go-repertoire">
              <span data-icon="music"></span>
              Montar repertório
            </button>
            <button class="btn neutral" type="button" data-action="share">
              <span data-icon="share"></span>
              Compartilhar
            </button>
            <button class="btn neutral" type="button" data-action="offline">
              <span data-icon="download"></span>
              Baixar offline
            </button>
          </section>

          <section class="share-panel">
            <h2>Alterações</h2>
            <div class="item-list">
              ${state.changeLogs.map((log) => `<div class="item-card"><span>${escapeHtml(log)}</span></div>`).join("")}
            </div>
          </section>
        </aside>
      </div>
    </div>
  `;
}

function renderTeams() {
  return `
    <div class="section-stack">
      <div class="section-head">
        <div>
          <h2>${state.team.name}</h2>
          <p>${state.team.type} - responsável: ${state.team.owner}</p>
        </div>
        <button class="btn primary" type="button" data-action="add-member">
          <span data-icon="plus"></span>
          Integrante
        </button>
      </div>

      <div class="team-grid">
        ${state.team.members
          .map(
            (member) => `
            <article class="team-card">
              <div class="card-row">
                <h3>${escapeHtml(member.name)}</h3>
                <span class="pill green">${member.status}</span>
              </div>
              <div class="meta">
                <span>${member.role}</span>
                <span>${member.instrument}</span>
              </div>
            </article>
          `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderEvents() {
  const eventTypes = ["Ensaio", "Missa", "Culto", "Show", "Apresentação", "Reunião musical"];
  return `
    <div class="section-stack">
      <div class="section-head">
        <div>
          <h2>Eventos</h2>
          <p>Filtros rápidos por tipo e status</p>
        </div>
        <button class="btn primary" type="button" data-action="duplicate-event">
          <span data-icon="copy"></span>
          Duplicar evento
        </button>
      </div>

      <div class="event-grid">
        <article class="event-card">
          <div class="card-row">
            <h3>${state.event.name}</h3>
            <span class="pill green">${state.event.status}</span>
          </div>
          <div class="meta">
            <span>${state.event.type}</span>
            <span>${formatDate(state.event.date)}</span>
            <span>${state.event.time}</span>
          </div>
          <p class="muted">${state.event.description}</p>
          <button class="btn secondary" type="button" data-action="go-repertoire">
            <span data-icon="music"></span>
            Abrir repertório
          </button>
        </article>
        ${eventTypes
          .filter((type) => type !== state.event.type)
          .slice(0, 5)
          .map(
            (type, index) => `
          <article class="event-card">
            <div class="card-row">
              <h3>${type} ${index + 2}</h3>
              <span class="pill blue">Rascunho</span>
            </div>
            <div class="meta">
              <span>${type}</span>
              <span>A definir</span>
            </div>
            <p class="muted">Modelo preparado para reaproveitar repertórios anteriores.</p>
          </article>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderRepertoire() {
  return `
    <div class="section-stack">
      <div class="event-hero">
        <span class="eyebrow">Montagem do repertório</span>
        <h2>${state.event.name}</h2>
        <div class="meta">
          <span>${formatDate(state.event.date)} às ${state.event.time}</span>
          <span>${state.event.location}</span>
          <span>${state.songs.length} músicas</span>
        </div>
      </div>

      <div class="repertoire-layout">
        <section class="section-stack">
          <div class="section-head">
            <div>
              <h2>Ordem de execução</h2>
              <p>Arraste músicas ou use os controles de ordem.</p>
            </div>
            <button class="btn secondary" type="button" data-action="open-stage-current">
              <span data-icon="monitor"></span>
              Palco
            </button>
          </div>
          <div class="song-list">
            ${state.songs.map((song, index) => songCard(song, index)).join("")}
          </div>
        </section>

        <aside class="section-stack">
          <form class="form-panel" id="songForm">
            <h2>Adicionar música</h2>
            <div class="form-grid two">
              ${field("Título", "title", "text", "wide", true)}
              ${field("Artista ou autor", "artist", "text", "", false)}
              ${field("Cantor", "singer", "text", "", true)}
              ${selectField("Tom original", "originalKey", keyOptions, "G")}
              ${selectField("Tom escolhido", "selectedKey", keyOptions, "A")}
              ${field("Link externo da cifra", "externalUrl", "url", "wide", false)}
              <label class="wide">
                <span>Arquivo próprio</span>
                <input type="file" name="file" accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.txt" />
              </label>
              <label class="wide">
                <span>Letra ou cifra digitada</span>
                <textarea name="chart" placeholder="Digite cifra, letra própria ou observações musicais"></textarea>
              </label>
              <label class="wide">
                <span>Observações gerais</span>
                <textarea name="notes" placeholder="Ex.: baixo entra na segunda parte"></textarea>
              </label>
            </div>
            <button class="btn primary" type="submit">
              <span data-icon="plus"></span>
              Adicionar ao repertório
            </button>
          </form>

          ${sharePanel()}
        </aside>
      </div>
    </div>
  `;
}

function renderMusician() {
  return `
    <div class="section-stack">
      <div class="musician-header">
        <span class="eyebrow">Acesso da equipe</span>
        <h2>${state.event.name}</h2>
        <div class="meta">
          <span>${formatDate(state.event.date)} às ${state.event.time}</span>
          <span>${state.event.location}</span>
          <span>${state.offlineReady ? "Offline pronto" : "Online"}</span>
        </div>
      </div>

      <div class="musician-list">
        ${state.songs
          .map(
            (song, index) => `
          <article class="musician-item">
            <span class="song-order">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>${escapeHtml(song.title)}</h3>
              <div class="meta">
                <span>${escapeHtml(song.singer)}</span>
                <span>${escapeHtml(song.status)}</span>
                ${song.fileName ? `<span>${escapeHtml(song.fileName)}</span>` : ""}
              </div>
            </div>
            <button class="key-badge" type="button" data-action="stage-song" data-id="${song.id}" title="Abrir no palco" aria-label="Abrir ${escapeHtml(song.title)} no palco">${escapeHtml(song.selectedKey)}</button>
          </article>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderStage() {
  const song = state.songs[state.currentSongIndex] || state.songs[0];
  const nextSong = state.songs[(state.currentSongIndex + 1) % state.songs.length];
  if (!song) {
    return `<div class="empty-state"><h2>Sem músicas</h2><button class="btn primary" type="button" data-action="go-repertoire">${icon("plus")}Adicionar música</button></div>`;
  }

  return `
    <div class="stage-view">
      <div class="stage-top">
        <div class="stage-song">
          <div class="meta">
            <span>${escapeHtml(song.singer)}</span>
            <span>${escapeHtml(song.status)}</span>
            <span>${state.offlineReady ? "Offline pronto" : "Online"}</span>
          </div>
          <h2>${escapeHtml(song.title)}</h2>
        </div>
        <div class="stage-key">${escapeHtml(song.selectedKey)}</div>
      </div>

      <div class="stage-content" style="font-size:${state.stageFontSize}px">
${formatStageContent(song)}
      </div>

      <div class="stage-bottom">
        <div class="stage-controls">
          <button class="btn neutral" type="button" data-action="previous-song">
            <span data-icon="previous"></span>
            Anterior
          </button>
          <button class="btn primary" type="button" data-action="next-song">
            Próxima
            <span data-icon="next"></span>
          </button>
        </div>
        <div class="stage-next">
          <span>Próxima música</span>
          <strong>${escapeHtml(nextSong?.title || "Fim do repertório")}</strong>
        </div>
        <div class="stage-tools">
          <button class="icon-btn" type="button" data-action="font-down" title="Diminuir fonte" aria-label="Diminuir fonte">
            <span data-icon="minus"></span>
          </button>
          <button class="icon-btn" type="button" data-action="font-up" title="Aumentar fonte" aria-label="Aumentar fonte">
            <span data-icon="plus"></span>
          </button>
          <button class="icon-btn" type="button" data-action="toggle-scroll" title="Rolagem automática" aria-label="Rolagem automática">
            <span data-icon="arrowdown"></span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderSettings() {
  return `
    <div class="settings-grid">
      <section class="settings-panel">
        <h2>Perfil</h2>
        <label>
          <span>Nome</span>
          <input type="text" name="userName" value="${escapeHtml(state.user.name)}" data-setting="user.name" />
        </label>
        <label>
          <span>E-mail</span>
          <input type="email" name="userEmail" value="${escapeHtml(state.user.email)}" data-setting="user.email" />
        </label>
        <label>
          <span>Função</span>
          <input type="text" name="userRole" value="${escapeHtml(state.user.role)}" data-setting="user.role" />
        </label>
      </section>

      <section class="settings-panel">
        <h2>Preferências</h2>
        <div class="settings-list">
          <label class="switch-row">
            <span>Modo escuro no palco</span>
            <input type="checkbox" checked disabled />
          </label>
          <label>
            <span>Tamanho padrão da fonte</span>
            <input type="range" min="18" max="34" value="${state.stageFontSize}" data-setting="stageFontSize" />
          </label>
          <button class="btn neutral" type="button" data-action="reset-demo">
            <span data-icon="settings"></span>
            Restaurar dados de demonstração
          </button>
        </div>
      </section>
    </div>
  `;
}

function statCard(label, value) {
  return `
    <article class="stat-card">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function songCard(song, index, options = {}) {
  const current = state.currentSongIndex === index ? " is-current" : "";
  return `
    <article class="song-card${current}" draggable="true" data-id="${song.id}">
      <div class="song-row">
        <span class="song-order">${String(index + 1).padStart(2, "0")}</span>
        <div class="song-main">
          <h3>${escapeHtml(song.title)}</h3>
          <div class="meta">
            <span>${escapeHtml(song.artist)}</span>
            <span>${escapeHtml(song.singer)}</span>
            <span>Original ${escapeHtml(song.originalKey)}</span>
            <span>${escapeHtml(song.status)}</span>
          </div>
        </div>
        <button class="key-badge" type="button" data-action="stage-song" data-id="${song.id}" title="Abrir no palco" aria-label="Abrir ${escapeHtml(song.title)} no palco">
          ${escapeHtml(song.selectedKey)}
        </button>
      </div>
      ${
        options.compact
          ? ""
          : `<div class="song-actions">
              <button class="icon-btn" type="button" data-action="move-up" data-id="${song.id}" title="Mover para cima" aria-label="Mover ${escapeHtml(song.title)} para cima">${icon("arrowup")}</button>
              <button class="icon-btn" type="button" data-action="move-down" data-id="${song.id}" title="Mover para baixo" aria-label="Mover ${escapeHtml(song.title)} para baixo">${icon("arrowdown")}</button>
              <button class="btn neutral" type="button" data-action="search-chart" data-id="${song.id}">${icon("search")}Buscar cifra</button>
              ${song.externalUrl ? `<a class="btn neutral" href="${escapeAttr(song.externalUrl)}" target="_blank" rel="noreferrer">${icon("link")}Cifra</a>` : ""}
              ${song.fileName ? `<span class="chip">${icon("file")}${escapeHtml(song.fileName)}</span>` : ""}
              <button class="icon-btn" type="button" data-action="remove-song" data-id="${song.id}" title="Remover música" aria-label="Remover ${escapeHtml(song.title)}">${icon("trash")}</button>
            </div>`
      }
    </article>
  `;
}

function sharePanel() {
  return `
    <section class="share-panel">
      <div class="section-head">
        <div>
          <h2>Compartilhamento</h2>
          <p>Link somente leitura por token.</p>
        </div>
        <span class="pill blue">${state.shareToken}</span>
      </div>
      <div class="share-link" id="shareLink">${getShareUrl()}</div>
      <div class="split-row">
        <button class="btn neutral" type="button" data-action="copy-share">
          <span data-icon="copy"></span>
          Copiar link
        </button>
        <button class="btn neutral" type="button" data-action="show-qr">
          <span data-icon="qrcode"></span>
          QR
        </button>
      </div>
    </section>
  `;
}

function field(labelText, name, type, extraClass = "", required = false) {
  return `
    <label class="${extraClass}">
      <span>${labelText}</span>
      <input type="${type}" name="${name}" ${required ? "required" : ""} />
    </label>
  `;
}

function selectField(labelText, name, options, selected) {
  return `
    <label>
      <span>${labelText}</span>
      <select name="${name}">
        ${options.map((option) => `<option value="${escapeAttr(option)}" ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      </select>
    </label>
  `;
}

function handleViewClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const action = button.dataset.action;
  const id = button.dataset.id;

  const actions = {
    "new-song": () => setView("repertoire"),
    "go-repertoire": () => setView("repertoire"),
    "open-stage-current": () => setView("stage"),
    share: shareRepertoire,
    offline: prepareOffline,
    "copy-share": copyShareLink,
    "show-qr": showQrMock,
    "add-member": addMember,
    "duplicate-event": duplicateEvent,
    "move-up": () => moveSong(id, -1),
    "move-down": () => moveSong(id, 1),
    "remove-song": () => removeSong(id),
    "stage-song": () => openSongOnStage(id),
    "search-chart": () => searchChart(id),
    "previous-song": () => changeStageSong(-1),
    "next-song": () => changeStageSong(1),
    "font-down": () => changeFont(-2),
    "font-up": () => changeFont(2),
    "toggle-scroll": toggleAutoScroll,
    "reset-demo": resetDemo,
  };

  actions[action]?.();
}

function handleSubmit(event) {
  if (event.target.id !== "songForm") return;
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const file = formData.get("file");
  const title = String(formData.get("title") || "").trim();
  const chart = String(formData.get("chart") || "").trim();

  const song = {
    id: crypto.randomUUID ? crypto.randomUUID() : `song-${Date.now()}`,
    title,
    artist: String(formData.get("artist") || "Sem artista").trim(),
    type: "Conhecida",
    singer: String(formData.get("singer") || "").trim(),
    originalKey: String(formData.get("originalKey") || "C"),
    selectedKey: String(formData.get("selectedKey") || "C"),
    status: "Pendente",
    externalUrl: String(formData.get("externalUrl") || "").trim(),
    fileName: file && file.name ? file.name : "",
    audioUrl: "",
    videoUrl: "",
    notes: String(formData.get("notes") || "").trim(),
    instrumentNotes: {},
    chart: chart || "Cifra própria ainda não digitada.",
  };

  state.songs.push(song);
  state.changeLogs.unshift(`Música adicionada: ${song.title}.`);
  saveState();
  form.reset();
  toast("Música adicionada ao repertório.");
  render();
}

function handleChange(event) {
  const target = event.target;
  const setting = target.dataset.setting;
  if (!setting) return;

  if (setting === "stageFontSize") {
    state.stageFontSize = Number(target.value);
  } else if (setting.startsWith("user.")) {
    const key = setting.split(".")[1];
    state.user[key] = target.value;
  }
  saveState();
  if (setting === "stageFontSize") render();
}

function handleDragStart(event) {
  const card = event.target.closest(".song-card");
  if (!card) return;
  draggedId = card.dataset.id;
  event.dataTransfer.effectAllowed = "move";
}

function handleDragOver(event) {
  if (event.target.closest(".song-card")) {
    event.preventDefault();
  }
}

function handleDrop(event) {
  const card = event.target.closest(".song-card");
  if (!card || !draggedId || draggedId === card.dataset.id) return;
  event.preventDefault();

  const from = state.songs.findIndex((song) => song.id === draggedId);
  const to = state.songs.findIndex((song) => song.id === card.dataset.id);
  if (from < 0 || to < 0) return;
  const [song] = state.songs.splice(from, 1);
  state.songs.splice(to, 0, song);
  state.changeLogs.unshift(`Ordem alterada: ${song.title}.`);
  saveState();
  render();
}

function moveSong(id, direction) {
  const index = state.songs.findIndex((song) => song.id === id);
  const next = index + direction;
  if (index < 0 || next < 0 || next >= state.songs.length) return;
  const [song] = state.songs.splice(index, 1);
  state.songs.splice(next, 0, song);
  state.currentSongIndex = Math.max(0, Math.min(state.currentSongIndex, state.songs.length - 1));
  state.changeLogs.unshift(`Ordem alterada: ${song.title}.`);
  saveState();
  render();
}

function removeSong(id) {
  const song = state.songs.find((item) => item.id === id);
  state.songs = state.songs.filter((item) => item.id !== id);
  state.currentSongIndex = Math.min(state.currentSongIndex, state.songs.length - 1);
  if (song) state.changeLogs.unshift(`Música removida: ${song.title}.`);
  saveState();
  toast("Música removida.");
  render();
}

function openSongOnStage(id) {
  const index = state.songs.findIndex((song) => song.id === id);
  if (index >= 0) {
    state.currentSongIndex = index;
    saveState();
  }
  setView("stage");
}

function changeStageSong(direction) {
  if (!state.songs.length) return;
  state.currentSongIndex = (state.currentSongIndex + direction + state.songs.length) % state.songs.length;
  saveState();
  render();
}

function changeFont(delta) {
  state.stageFontSize = Math.max(18, Math.min(34, state.stageFontSize + delta));
  saveState();
  render();
}

function toggleAutoScroll() {
  state.autoScroll = !state.autoScroll;
  saveState();
  toast(state.autoScroll ? "Rolagem automática ativada." : "Rolagem automática pausada.");
  if (state.autoScroll) {
    const content = document.querySelector(".stage-content");
    content?.scrollBy({ top: 160, behavior: "smooth" });
  }
}

function shareRepertoire() {
  copyShareLink();
}

function copyShareLink() {
  const url = getShareUrl();
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(url).then(
      () => toast("Link copiado."),
      () => toast(url),
    );
  } else {
    toast(url);
  }
}

function showQrMock() {
  toast("QR Code previsto para a próxima fase.");
}

function prepareOffline() {
  state.offlineReady = true;
  state.changeLogs.unshift("Repertório marcado para acesso offline.");
  saveState();
  toast("Repertório preparado para offline.");
  render();
}

function addMember() {
  const next = state.team.members.length + 1;
  state.team.members.push({
    name: `Integrante ${next}`,
    role: "Convidado",
    instrument: "Outro",
    status: "Ativo",
  });
  state.changeLogs.unshift(`Integrante ${next} adicionado à equipe.`);
  saveState();
  render();
}

function duplicateEvent() {
  state.event = {
    ...state.event,
    name: `${state.event.name} - cópia`,
    status: "Rascunho",
  };
  state.changeLogs.unshift("Evento duplicado como rascunho.");
  saveState();
  toast("Evento duplicado.");
  render();
}

function searchChart(id) {
  const song = state.songs.find((item) => item.id === id);
  if (!song) return;
  const query = encodeURIComponent(`${song.title} ${song.artist} cifra`);
  window.open(`https://www.google.com/search?q=${query}`, "_blank", "noreferrer");
}

function resetDemo() {
  state = structuredClone(sampleState);
  saveState();
  toast("Dados restaurados.");
  render();
}

function formatStageContent(song) {
  const notes = song.notes ? `\n\nObservações:\n${song.notes}` : "";
  const instruments = Object.entries(song.instrumentNotes || {})
    .map(([instrument, note]) => `${instrument}: ${note}`)
    .join("\n");
  const instrumentBlock = instruments ? `\n\nInstrumentos:\n${instruments}` : "";
  return `${escapeHtml(song.chart)}${escapeHtml(notes)}${escapeHtml(instrumentBlock)}`;
}

function getShareUrl() {
  const base = location.protocol.startsWith("http")
    ? `${location.origin}${location.pathname}`
    : "https://ederbhz.github.io/repertone/";
  return `${base}#share=${encodeURIComponent(state.shareToken)}`;
}

function formatDate(value) {
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function toast(message) {
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("is-visible"), 2800);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}
