(function () {
  'use strict';
  // Versão do sistema: altere aqui.
  var SITE = { nome: 'Mulhé Studio', versao: 'V.1 · novembro de 2026' };
  var D = window.MULHE, MK = window.MK;
  var COR = [
    ['anil', '#13567F', 'Anil', 'Cor de base. Títulos, fundos escuros e texto de apoio.'],
    ['rosa', '#D6336C', 'Rosa', 'Cor de chamada. Destaques, molduras e botões.'],
    ['oliva', '#6B7A22', 'Oliva', 'A cor da cobra. Terceira voz, para equilibrar.'],
    ['flor', '#EE8FA0', 'Flor', 'Rosa claro. Pintas da cobra e linhas sobre o anil.'],
    ['capim', '#B9C552', 'Capim', 'Verde claro. Substitui a oliva em fundos escuros.'],
    ['linho', '#F5E1C0', 'Linho', 'O pano. Fundo principal das peças.'],
    ['claro', '#FBF1DF', 'Linho claro', 'Fundo de leitura: slides, site e documentos.'],
    ['creme', '#FFF8EA', 'Creme', 'Cartões e linhas claras sobre cor.'],
    ['tinta', '#0B2E45', 'Tinta', 'Texto corrido e linhas escuras sobre o rosa.']
  ];
  var HEX = {}; COR.forEach(function (c) { HEX[c[0]] = c[1]; });
  var NAV = [
    { g: null, items: [['inicio', 'Visão geral']] },
    { g: 'Comece', items: [['slides', 'Apresentação'], ['bordador', 'Bordador'], ['baixar', 'Baixar tudo']] },
    { g: 'Marca', items: [['conceito', 'Conceito e voz'], ['logo', 'Logo'], ['cores', 'Cores'], ['tipografia', 'Tipografia']] },
    { g: 'Bordado', items: [['elementos', 'Elementos'], ['padroes', 'Padrões']] },
    { g: 'Peças', items: [['adesivos', 'Adesivos'], ['posters', 'Posters'], ['redes', 'Redes sociais'], ['vinheta', 'Vinheta']] }
  ];
  var ORDER = []; NAV.forEach(function (g) { g.items.forEach(function (i) { ORDER.push(i); }); });
  var $ = function (s, el) { return (el || document).querySelector(s); };
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }
  function kb(k) { return k >= 1000 ? (k / 1024).toFixed(1).replace('.', ',') + ' MB' : k + ' kB'; }
  function by(sec) { return D.pecas.filter(function (p) { return p.sec === sec; }); }
  function dl(files) { return '<div class="dl">' + files.map(function (f) { return '<a class="btn sm" href="' + f.f + '" download>' + esc(f.t) + ' <small>' + kb(f.kb) + '</small></a>'; }).join('') + '</div>'; }
  function card(p, cls) {
    var cheia = !p.bg;
    return '<article class="peca"><div class="thumb ' + (cheia ? 'cheia' : 'bg-' + p.bg) + ' ' + (cls || '') + '"><img loading="lazy" src="' + p.th + '" alt="' + esc(p.nome) + '"></div>' +
      '<div class="info"><h3>' + esc(p.nome) + '</h3><p>' + esc(p.desc) + '</p><small class="dim">' + p.w + ' × ' + p.h + ' px</small>' + dl(p.files) + '</div></article>';
  }
  function grade(list, cls, tcls) { return '<div class="grade ' + (cls || '') + '">' + list.map(function (p) { return card(p, tcls); }).join('') + '</div>'; }
  function head(k, t, d, extra) { return '<header class="pg-head"><p class="k">' + k + '</p><h1>' + t + '</h1><p class="lead">' + d + '</p>' + (extra || '') + '</header>'; }
  function zipBtn(sec, label) { return '<button class="btn rosa" type="button" data-zip="' + sec + '">' + (label || 'Baixar tudo em .zip') + '</button>'; }
  function secHead(num, title, desc, route, label) { return '<div class="sec-head"><span class="num" aria-hidden="true">' + num + '</span><h2>' + title + '</h2><p>' + desc + '</p>' + (route ? '<a class="btn linha" href="#/' + route + '">' + (label || 'Ver tudo') + ' →</a>' : '') + '</div>'; }
  function toast(m) { var t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('on'); }, 3200); }
  function salvar(blob, nome) { var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = nome; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000); }

  /* ---------- cores ---------- */
  function lum(h) { var c = [1, 3, 5].map(function (i) { var v = parseInt(h.substr(i, 2), 16) / 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; }
  function razao(a, b) { var x = lum(HEX[a]), y = lum(HEX[b]); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); }
  function coresGrid() { return '<div class="cores">' + COR.map(function (c) { return '<button class="cor" type="button" data-copiar="' + c[1] + '" aria-label="Copiar ' + c[2] + ', ' + c[1] + '"><i style="background-color:' + c[1] + '"></i><div><b>' + c[2] + '</b><code>' + c[1] + '</code><span>' + c[3] + '</span></div></button>'; }).join('') + '</div>'; }
  function coresTabela() {
    var pares = [['tinta', 'linho'], ['anil', 'linho'], ['rosa', 'linho'], ['oliva', 'linho'], ['tinta', 'claro'], ['anil', 'creme'], ['creme', 'anil'], ['flor', 'anil'], ['capim', 'anil'], ['creme', 'rosa'], ['tinta', 'rosa'], ['creme', 'oliva']];
    var nome = {}; COR.forEach(function (c) { nome[c[0]] = c[2]; });
    return '<table><thead><tr><th>Combinação</th><th>Contraste</th><th>Serve para</th></tr></thead><tbody>' + pares.map(function (p) {
      var r = razao(p[0], p[1]);
      return '<tr><td><span class="am" style="background:' + HEX[p[1]] + ';color:' + HEX[p[0]] + '">' + nome[p[0]] + ' sobre ' + nome[p[1]].toLowerCase() + '</span></td><td>' + r.toFixed(1).replace('.', ',') + ' : 1</td><td class="' + (r >= 4.5 ? 'ok' : 'so') + '">' + (r >= 4.5 ? 'Texto e títulos' : (r >= 3 ? 'Só títulos grandes' : 'Só bordado e enfeite')) + '</td></tr>';
    }).join('') + '</tbody></table>';
  }

  /* ---------- slides e vinhetas ---------- */
  function slidesGrid(n) {
    return '<div class="slides">' + D.slides.lista.slice(0, n || 99).map(function (s) { return '<figure><img loading="lazy" src="' + s.th + '" alt="Slide ' + s.n + ': ' + esc(s.t) + '"><figcaption><span>' + s.n + '. ' + esc(s.t) + '</span><a href="' + s.f + '" download>JPG</a></figcaption></figure>'; }).join('') + '</div>';
  }
  function slidesAcoes() {
    var s = D.slides;
    return '<div class="acoes"><a class="btn rosa" href="' + s.html + '" target="_blank" rel="noopener">Abrir a apresentação</a><a class="btn" href="' + s.pdf + '" download>Baixar PDF <small>' + kb(s.kbPdf) + '</small></a><a class="btn linha" href="' + s.html + '" download>Baixar HTML <small>' + kb(s.kbHtml) + '</small></a></div>';
  }
  function videoCard(v) {
    return '<article class="peca"><div class="thumb cheia"><video controls loop muted playsinline preload="none" poster="' + v.th + '" src="' + v.mp4 + '"></video></div><div class="info"><h3>' + esc(v.nome) + '</h3><p>' + esc(v.desc) + '</p><small class="dim">' + v.w + ' × ' + v.h + ' px · 5,6 s · 30 qps</small>' + dl(v.files) + '</div></article>';
  }

  /* ---------- bordador ---------- */
  var BP = { linho: ['rosa', 'anil', 'anil'], linhoClaro: ['anil', 'rosa', 'rosa'], anil: ['creme', 'flor', 'flor'], rosa: ['creme', 'tinta', 'creme'], oliva: ['creme', 'tinta', 'creme'] };
  var BS = { l1: 'Se avexe', l2: 'não, mulhé', pano: 'linho', forma: 'etiqueta', inv: false };
  function medir(s) { var w = 0; for (var i = 0; i < s.length; i++) w += MK.G.adv[s.charAt(i)] || .6; return w; }
  function bordadoSvg(exportar) {
    var W = 900, H = 600, f = BS.forma, p = BP[BS.pano], c1 = p[BS.inv ? 1 : 0], c2 = p[BS.inv ? 0 : 1], l1 = BS.l1.trim(), l2 = BS.l2.trim(), s = '';
    var maxW = { etiqueta: 600, redondo: 350, quadro: 560, solto: 820 }[f], maxS = { etiqueta: 150, redondo: 120, quadro: 150, solto: 220 }[f];
    if (f === 'solto') { c1 = BS.inv ? 'anil' : 'rosa'; c2 = BS.inv ? 'rosa' : 'anil'; }
    var d = f === 'etiqueta' ? 'M260,110H640A190,190 0 0 1 640,490H260A190,190 0 0 1 260,110Z' : f === 'redondo' ? 'M202,300a248,248 0 1 0 496,0a248,248 0 1 0 -496,0Z' : 'M146,70H754A46,46 0 0 1 800,116V484A46,46 0 0 1 754,530H146A46,46 0 0 1 100,484V116A46,46 0 0 1 146,70Z';
    if (f !== 'solto') s += MK.patch(d, { bg: BS.pano, borda: p[2], bw: 17 });
    var s1 = l1 ? Math.min(maxS, maxW / medir(l1)) : 0, s2 = l2 ? Math.min(maxS * .82, maxW / medir(l2)) : 0;
    if (l1 && l2) { var gap = .2 * s2, tot = s1 * .74 + gap + s2 * .74, y1 = 300 - tot / 2 + s1 * .72; s += MK.texto(l1, { x: 450, y: Math.round(y1), size: Math.round(s1), cor: c1 }) + MK.texto(l2, { x: 450, y: Math.round(y1 + gap + s2 * .78), size: Math.round(s2), cor: c2, ang: 135 }); }
    else if (l1 || l2) { var t = l1 || l2, sz = l1 ? s1 : s2 / .82; s += MK.texto(t, { x: 450, y: Math.round(300 + sz * .34), size: Math.round(sz), cor: c1 }); }
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '"><defs>' + (exportar ? '<style>@font-face{font-family:Caprasimo;src:url(data:font/woff2;base64,' + window.MULHE_FONTE + ') format("woff2")}</style>' : '') + MK.defs() + '</defs>' + s + '</svg>';
  }
  function bordadorHtml() {
    function chips(k, ops) { return '<div class="chips">' + ops.map(function (o) { return '<button type="button" data-b="' + k + '" data-v="' + o[0] + '" aria-pressed="' + (BS[k] === o[0]) + '"' + (o[2] ? ' class="sw" style="background:' + o[2] + '" aria-label="' + o[1] + '" title="' + o[1] + '">' : '>' + o[1]) + '</button>'; }).join('') + '</div>'; }
    return '<div class="bordador"><div class="palco" id="b-palco"></div><div class="painel">' +
      '<div><label for="b-l1">Primeira linha</label><input type="text" id="b-l1" maxlength="18" value="' + esc(BS.l1) + '"></div>' +
      '<div><label for="b-l2">Segunda linha (opcional)</label><input type="text" id="b-l2" maxlength="20" value="' + esc(BS.l2) + '"></div>' +
      '<fieldset><legend>Formato</legend>' + chips('forma', [['etiqueta', 'Etiqueta'], ['redondo', 'Redondo'], ['quadro', 'Quadro'], ['solto', 'Só as letras']]) + '</fieldset>' +
      '<fieldset><legend>Pano</legend>' + chips('pano', [['linho', 'Linho', HEX.linho], ['linhoClaro', 'Linho claro', HEX.claro], ['anil', 'Anil', HEX.anil], ['rosa', 'Rosa', HEX.rosa], ['oliva', 'Oliva', HEX.oliva]]) + '</fieldset>' +
      '<div class="acoes" style="margin-top:0"><button class="btn rosa" type="button" id="b-png">Baixar PNG</button><button class="btn linha" type="button" id="b-inv">Trocar as cores das linhas</button></div>' +
      '<p class="apoio" style="font-size:14px">O PNG sai com fundo transparente, em 1800 × 1200 px, pronto para figurinha, post ou impressão pequena.</p></div></div>';
  }
  function bordadorMount(el) {
    var palco = $('#b-palco', el);
    function draw() { palco.innerHTML = bordadoSvg(false); }
    draw();
    el.addEventListener('input', function (e) { if (e.target.id === 'b-l1') BS.l1 = e.target.value; else if (e.target.id === 'b-l2') BS.l2 = e.target.value; else return; draw(); });
    el.addEventListener('click', function (e) {
      var b = e.target.closest('[data-b]');
      if (b) { BS[b.getAttribute('data-b')] = b.getAttribute('data-v'); [].forEach.call(el.querySelectorAll('[data-b="' + b.getAttribute('data-b') + '"]'), function (x) { x.setAttribute('aria-pressed', x === b); }); draw(); return; }
      if (e.target.id === 'b-inv') { BS.inv = !BS.inv; draw(); return; }
      if (e.target.id === 'b-png') {
        var img = new Image();
        img.onload = function () { setTimeout(function () { var c = document.createElement('canvas'); c.width = 1800; c.height = 1200; c.getContext('2d').drawImage(img, 0, 0, 1800, 1200); c.toBlob(function (bl) { salvar(bl, 'mulhe-bordado-' + ((BS.l1 + ' ' + BS.l2).trim().toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'peca') + '.png'); toast('PNG baixado.'); }, 'image/png'); }, 250); };
        img.onerror = function () { toast('Não deu para gerar o PNG neste navegador. Tente no Chrome.'); };
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(bordadoSvg(true));
      }
    });
  }

  /* ---------- zip ---------- */
  function arquivos(sec) {
    var out = [], add = function (l) { l.forEach(function (f) { out.push(f.f); }); };
    D.pecas.forEach(function (p) { if (sec === 'tudo' || p.sec === sec) add(p.files); });
    if (sec === 'tudo' || sec === 'vinheta') D.vinhetas.forEach(function (v) { add(v.files); });
    if (sec === 'tudo' || sec === 'slides') { out.push(D.slides.html, D.slides.pdf); add(D.slides.lista); }
    if (sec === 'tudo' || sec === 'fontes') add(D.fontes);
    if (sec === 'tudo' || sec === 'logo') add(D.refs);
    return out;
  }
  function peso(sec) { var t = 0, f = function (l) { l.forEach(function (x) { t += x.kb; }); }; D.pecas.forEach(function (p) { if (sec === 'tudo' || p.sec === sec) f(p.files); }); if (sec === 'tudo' || sec === 'vinheta') D.vinhetas.forEach(function (v) { f(v.files); }); if (sec === 'tudo' || sec === 'slides') { t += D.slides.kbHtml + D.slides.kbPdf; f(D.slides.lista); } if (sec === 'tudo' || sec === 'fontes') f(D.fontes); if (sec === 'tudo' || sec === 'logo') f(D.refs); return t; }
  function zipar(sec, btn) {
    if (location.protocol === 'file:') { toast('O .zip funciona no site publicado. Por aqui, baixe os arquivos um a um.'); return; }
    var txt = btn.textContent; btn.disabled = true;
    function fim(m) { btn.disabled = false; btn.textContent = txt; if (m) toast(m); }
    function run() {
      var zip = new window.JSZip(), lista = arquivos(sec), i = 0;
      (function prox() {
        if (i >= lista.length) { btn.textContent = 'Fechando o .zip…'; zip.generateAsync({ type: 'blob' }).then(function (b) { salvar(b, 'mulhe-' + sec + '.zip'); fim('Zip baixado.'); }, function () { fim('Não deu para montar o .zip.'); }); return; }
        btn.textContent = 'Juntando ' + (i + 1) + ' de ' + lista.length + '…';
        fetch(lista[i]).then(function (r) { if (!r.ok) throw 0; return r.blob(); }).then(function (b) { zip.file(lista[i].replace('assets/baixar/', ''), b); i++; prox(); }, function () { fim('Não deu para baixar ' + lista[i] + '.'); });
      })();
    }
    if (window.JSZip) run(); else { var s = document.createElement('script'); s.src = 'assets/js/vendor/jszip.min.js'; s.onload = run; s.onerror = function () { fim('Não deu para carregar o compactador.'); }; document.head.appendChild(s); }
  }

  /* ---------- páginas ---------- */
  var PG = {};
  PG.inicio = function () {
    var v = D.vinhetas[0], h = '';
    h += '<section class="hero"><div><p class="k">Mulhé · psicologia com sotaque</p><h1>Mulhé <em>Studio</em></h1><p class="lead">Tudo da marca num lugar só: logo, cores, letras, bordados, adesivos, posters, peças para as redes, vinheta e a apresentação do projeto. Veja, baixe e use.</p>' +
      '<div class="acoes"><a class="btn rosa" href="' + D.slides.html + '" target="_blank" rel="noopener">Abrir a apresentação</a><a class="btn linha" href="#/baixar">Baixar tudo</a></div></div>' +
      '<div class="quadro"><video autoplay loop muted playsinline poster="' + v.th + '" src="' + v.mp4 + '" aria-label="Vinheta: o logo Mulhé sendo bordado"></video></div></section>';
    var passos = [['slides', 'Apresentar o projeto', 'Deck em HTML e PDF'], ['logo', 'Baixar o logo', 'PNG transparente e SVG'], ['bordador', 'Bordar uma frase', 'Escreva e baixe em PNG'], ['redes', 'Postar no Instagram', 'Posts, story, reels e destaques'], ['adesivos', 'Pegar os adesivos', 'Figurinhas e impressão'], ['vinheta', 'Usar a vinheta', 'MP4 em três formatos']];
    h += '<section class="sec">' + secHead('00', 'Comece por aqui', 'Os usos mais comuns, direto ao ponto.') + '<div class="comece">' + passos.map(function (p, i) { return '<a href="#/' + p[0] + '"><b>' + (i + 1) + '</b><div><strong>' + p[1] + '</strong><span>' + p[2] + '</span></div></a>'; }).join('') + '</div></section>';
    h += '<section class="sec">' + secHead('01', 'Apresentação', 'O deck do projeto, com o conteúdo de vocês.', 'slides', 'Ver os 10 slides') + slidesGrid(3) + '</section>';
    h += '<section class="sec">' + secHead('02', 'Logo', 'Bordado, chapado e em uma cor.', 'logo', 'Todas as versões') + grade(by('logo').slice(0, 3), 'larga') + '</section>';
    h += '<section class="sec">' + secHead('03', 'Cores', 'Clique numa cor para copiar o código.', 'cores', 'Cores') + coresGrid() + '</section>';
    h += '<section class="sec">' + secHead('04', 'Tipografia', 'Caprasimo nos títulos, Figtree no texto.', 'tipografia', 'Tipografia') + '<div class="espec"><div class="gr">Bora, <em>mulhé?</em></div><p class="abc">Encontros de mulheres pela cidade, com arte, conversa e rede de apoio.</p></div></section>';
    h += '<section class="sec">' + secHead('05', 'Elementos', 'A cobra, as gotas e os pontos.', 'elementos') + grade(by('elementos').slice(0, 4), 'estreita') + '</section>';
    h += '<section class="sec">' + secHead('06', 'Adesivos', 'Com sotaque e fundo transparente.', 'adesivos') + grade(by('adesivos').slice(0, 4), 'estreita') + '</section>';
    h += '<section class="sec">' + secHead('07', 'Posters e redes', 'Peças prontas e modelos para trocar a data.', 'posters', 'Posters') + grade(by('posters').concat(by('redes').slice(0, 1)), 'estreita') + '</section>';
    return { t: 'Visão geral', h: h };
  };
  PG.slides = function () {
    return { t: 'Apresentação', h: head('Comece', 'Apresentação', 'O deck do projeto, montado com as ideias de vocês. Abre em qualquer navegador, sem instalar nada, e também vem em PDF.', slidesAcoes()) +
      '<ul class="regras" style="margin-bottom:34px"><li><b>Para apresentar</b>Abra o HTML e aperte F para tela cheia. Setas ou clique passam os slides.</li><li><b>Para mandar</b>O PDF é o mesmo deck, um slide por página. Vai bem no WhatsApp e no e-mail.</li><li><b>Para postar</b>Cada slide também está em JPG, logo abaixo.</li></ul>' + slidesGrid() + '<div class="acoes">' + zipBtn('slides') + '</div>' };
  };
  PG.bordador = function () { return { t: 'Bordador', h: head('Ferramenta', 'Bordador', 'Escreva uma frase e ela sai bordada no jeito da marca. Serve para figurinha, título de post e etiqueta.') + bordadorHtml(), m: bordadorMount }; };
  PG.baixar = function () {
    var S = [['tudo', 'Kit completo', 'Tudo que está neste site, em pastas.'], ['logo', 'Logo', 'Todas as versões, o monograma, o avatar e os estudos originais.'], ['elementos', 'Elementos', 'Cobras, gotas, sol, flor, rede, caju e pontos.'], ['padroes', 'Padrões', 'Quatro estampas em 2000 px.'], ['adesivos', 'Adesivos', 'Oito adesivos com fundo transparente.'], ['posters', 'Posters', 'Três posters em JPG e PDF.'], ['redes', 'Redes sociais', 'Posts, story, capa de reels e destaques.'], ['vinheta', 'Vinheta', 'MP4 em três formatos, GIF e quadro final.'], ['slides', 'Apresentação', 'HTML, PDF e os slides em JPG.'], ['fontes', 'Fontes', 'Caprasimo e Figtree, com as licenças.']];
    return { t: 'Baixar tudo', h: head('Comece', 'Baixar tudo', 'Escolha uma pasta e baixe em .zip. Os arquivos também estão soltos em cada página, com o tamanho ao lado do botão.') +
      '<div class="grade">' + S.map(function (s) { var n = arquivos(s[0]).length; return '<article class="peca"><div class="info"><h3>' + s[1] + '</h3><p>' + s[2] + '</p><small class="dim">' + n + ' arquivos · ' + kb(peso(s[0])) + '</small><div class="dl">' + zipBtn(s[0], 'Baixar .zip') + '</div></div></article>'; }).join('') + '</div>' +
      '<p class="aviso">O .zip é montado na hora, pelo navegador. Ele funciona no site publicado (GitHub Pages, por exemplo). Com o site aberto direto da pasta do computador, baixe os arquivos um a um nas páginas.</p>' };
  };
  PG.conceito = function () {
    var voz = [['Bom humor', 'A gente ri junto, nunca de alguém.'], ['Espontaneidade', 'Fala como fala com amiga. Mulhé, bora?'], ['Acolhimento', 'Primeiro escuta, depois responde.'], ['Ética', 'Sem promessa de resultado e sem expor ninguém.'], ['Política', 'Vida digna para as mulheres é o ponto de partida.'], ['Objetividade', 'Data, hora, lugar e o que levar.'], ['Criatividade', 'Arte é o caminho, não o enfeite.']];
    return { t: 'Conceito e voz', h: head('Marca', 'Conceito e voz', 'De onde vem a marca, por que ela é bordada e como ela fala.') +
      '<div class="texto"><h2 class="sub" style="margin-top:0">A ideia</h2><p>Mulhé é como a gente chama uma amiga no Ceará. É convite, é espanto, é carinho. O nome já vem com sotaque, e a psicologia também: feita em Fortaleza, por psicólogas que são amigas, para mulheres que querem viver a cidade juntas.</p>' +
      '<h2 class="sub">Por que bordado</h2><p>Bordado se faz à mão, ponto por ponto, quase sempre em roda e entre mulheres. Rede de apoio se faz do mesmo jeito. Por isso tudo aqui parece costurado: letras de ponto cheio, molduras de ponto corrido e pano de linho ao fundo.</p>' +
      '<h2 class="sub">A cobra</h2><p>A cobra troca de pele quando cresce e é um símbolo antigo de cuidado e cura. Aqui ela também é humor: passeia por cima das letras como quem não deve nada a ninguém.</p></div>' +
      '<h2 class="sub">Como a marca fala</h2><div class="voz">' + voz.map(function (v) { return '<div><b>' + v[0] + '</b><span>' + v[1] + '</span></div>'; }).join('') + '</div>' +
      '<h2 class="sub">No que o projeto acredita</h2><ul class="regras"><li><b>Amizade é rede de apoio</b>Para crescer para além do amor romântico e se proteger das violências.</li><li><b>Ninguém faz sozinha</b>Artistas, historiadoras, geógrafas, médicas, nutricionistas e professoras entram na roda.</li><li><b>A cidade é o nosso espaço</b>Praia, praça, parque, serra e ponto histórico viram lugar de encontro.</li><li><b>Vida digna</b>Mulheres seguras e com tempo para viver, e não somente sobreviver.</li></ul>' +
      '<p class="aviso"><b>Cuidado ético.</b> O projeto mistura o social e a saúde. Antes de publicar peças que divulguem atendimento psicológico, confirmem com o CRP-11 o que precisa constar na divulgação, como nome e número de registro.</p>' };
  };
  PG.logo = function () {
    return { t: 'Logo', h: head('Marca', 'Logo', 'A palavra bordada em três linhas, com a cobra por cima e o espanto dos lados. Cada versão vem em PNG transparente e em SVG.', '<div class="acoes">' + zipBtn('logo') + '</div>') +
      grade(by('logo'), 'larga') +
      '<h2 class="sub">Como usar</h2><ul class="regras"><li><b>Respiro</b>Deixe em volta do logo um espaço livre da altura da letra u.</li><li><b>Tamanho mínimo</b>O bordado pede pelo menos 160 px de largura. Menor que isso, use o chapado ou o monograma.</li><li><b>Fundo</b>Bordado sobre linho ou cor lisa. Sobre foto, use a versão creme de uma cor.</li><li><b>Assinatura</b>Na primeira aparição, use a versão com “psicologia com sotaque”.</li></ul>' +
      '<h2 class="sub">Evite</h2><ul class="regras nao"><li><b>Esticar ou inclinar</b>O logo cresce e diminui sempre por igual.</li><li><b>Trocar as cores das letras</b>A ordem é anil, rosa, oliva, anil, rosa.</li><li><b>Tirar a cobra</b>Só o monograma e os selos mudam o desenho.</li><li><b>Sombra e contorno extras</b>O relevo do bordado já faz esse papel.</li></ul>' +
      '<h2 class="sub">De onde veio</h2><p class="lead" style="margin-bottom:18px">Os dois estudos que deram origem à marca. O bordado foi o caminho escolhido, e o logo acima é o redesenho dele em vetor.</p><div class="grade larga">' + D.refs.map(function (r) { return '<article class="peca"><div class="thumb cheia"><img loading="lazy" src="' + r.th + '" alt="' + esc(r.t) + '"></div><div class="info"><h3>' + esc(r.t) + '</h3>' + dl([{ t: 'JPG', f: r.f, kb: r.kb }]) + '</div></article>'; }).join('') + '</div>' };
  };
  PG.cores = function () {
    return { t: 'Cores', h: head('Marca', 'Cores', 'Três linhas e um pano. Clique numa cor para copiar o código.') + coresGrid() +
      '<h2 class="sub">Combinações que funcionam</h2><p class="lead" style="margin-bottom:18px">O contraste diz onde cada dupla pode ser usada. Texto pequeno pede 4,5 ou mais.</p>' + coresTabela() +
      '<h2 class="sub">Proporção</h2><ul class="regras"><li><b>Pano primeiro</b>Linho ou linho claro ocupam a maior parte da peça.</li><li><b>Uma cor manda</b>Em cada peça, escolha anil, rosa ou oliva para liderar. As outras duas só pontuam.</li><li><b>Sobre o anil</b>Troque rosa por flor e oliva por capim, que aparecem melhor.</li></ul>' };
  };
  PG.tipografia = function () {
    return { t: 'Tipografia', h: head('Marca', 'Tipografia', 'Duas famílias, as duas gratuitas e disponíveis no Google Fonts, no Canva e no Google Slides.') +
      '<div class="espec"><p class="k">Caprasimo · títulos</p><div class="gr">Mulhé, <em>bora?</em></div><p class="abc" style="font-family:Caprasimo,serif">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz áàâãéêíóôõúç 0123456789 ?!,.</p></div>' +
      '<div class="espec"><p class="k">Figtree · texto</p><div class="pesos"><div style="font-weight:400"><small>Regular 400</small>Rede de apoio</div><div style="font-weight:500"><small>Medium 500</small>Rede de apoio</div><div style="font-weight:600"><small>Semibold 600</small>Rede de apoio</div><div style="font-weight:700"><small>Bold 700</small>Rede de apoio</div><div style="font-weight:800"><small>Extrabold 800</small>Rede de apoio</div></div><p class="abc">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz áàâãéêíóôõúç 0123456789 ?!,.</p></div>' +
      '<h2 class="sub">Como usar</h2><ul class="regras"><li><b>Título</b>Caprasimo, poucas palavras, sempre em caixa baixa com inicial maiúscula.</li><li><b>Texto</b>Figtree 500 para ler, 700 ou 800 para destacar.</li><li><b>Etiqueta</b>Figtree 800 em caixa alta, com as letras bem espaçadas, como em “PSICOLOGIA COM SOTAQUE”.</li><li><b>Bordado</b>Só os títulos são bordados. Texto corrido fica liso, para ler fácil.</li></ul>' +
      '<h2 class="sub">Baixar as fontes</h2><div class="acoes" style="margin-top:0">' + D.fontes.map(function (f) { return '<a class="btn sm" href="' + f.f + '" download>' + esc(f.t) + ' <small>' + kb(f.kb) + '</small></a>'; }).join('') + '</div>' };
  };
  function galeria(sec, k, t, d, cls, tcls, extra) { return function () { return { t: t, h: head(k, t, d, '<div class="acoes">' + zipBtn(sec) + '</div>') + grade(by(sec), cls, tcls) + (extra || '') }; }; }
  PG.elementos = galeria('elementos', 'Bordado', 'Elementos', 'Os desenhos que acompanham o logo. Cada um vem em PNG transparente e em SVG, para usar no Canva, no Figma ou onde for.', 'estreita');
  PG.padroes = galeria('padroes', 'Bordado', 'Padrões', 'Quatro estampas em 2000 × 2000 px para fundo de post, papel de embrulho, ecobag e capa de caderno.', '', '');
  PG.adesivos = galeria('adesivos', 'Peças', 'Adesivos', 'Oito adesivos com fundo transparente. Servem de figurinha no WhatsApp e de arte para imprimir em vinil.', 'estreita', '', '<p class="aviso">Quer outra frase? O <a href="#/bordador">Bordador</a> faz adesivo com o texto que você escrever.</p>');
  PG.posters = galeria('posters', 'Peças', 'Posters', 'Três posters na proporção A3 e A4, em JPG e em PDF para a gráfica. O convite é um modelo: troque data, hora e lugar.', '', '');
  PG.redes = galeria('redes', 'Peças', 'Redes sociais', 'Posts, story, capa de reels e capas de destaque para o Instagram. Os modelos têm campos para trocar no Canva ou no editor que preferir.', 'estreita', '');
  PG.vinheta = function () {
    return { t: 'Vinheta', h: head('Peças', 'Vinheta', 'O logo sendo bordado, em 5,6 segundos. Abre e fecha reels, vídeos e apresentações.', '<div class="acoes">' + zipBtn('vinheta') + '</div>') +
      '<div class="videos">' + D.vinhetas.map(videoCard).join('') + '</div>' +
      '<h2 class="sub">Como usar</h2><ul class="regras"><li><b>No começo</b>Use inteira antes do vídeo, sem cortar a entrada da assinatura.</li><li><b>No fim</b>Use a versão em pano anil para fechar, ou o quadro final como tela de encerramento.</li><li><b>Som</b>A vinheta é muda. Uma agulhada, um chocalho ou uma risada combinam.</li></ul>' };
  };

  /* ---------- menu e rotas ---------- */
  var menu = $('#menu'), lista = $('#menu-lista'), main = $('#conteudo'), burger = $('#burger'), overlay = $('#overlay');
  lista.innerHTML = NAV.map(function (g) { return (g.g ? '<h2>' + g.g + '</h2>' : '') + g.items.map(function (i) { return '<a class="it" href="#/' + i[0] + '" data-r="' + i[0] + '">' + i[1] + '</a>'; }).join(''); }).join('');
  $('#menu-versao').textContent = SITE.versao;
  function fechar() { menu.classList.remove('aberto'); overlay.hidden = true; burger.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () { var a = menu.classList.toggle('aberto'); overlay.hidden = !a; burger.setAttribute('aria-expanded', a); });
  overlay.addEventListener('click', fechar);
  function pager(r) { var i = -1; ORDER.forEach(function (o, k) { if (o[0] === r) i = k; }); var a = ORDER[i - 1], b = ORDER[i + 1]; return '<nav class="pager" aria-label="Páginas vizinhas">' + (a ? '<a href="#/' + a[0] + '">← ' + a[1] + '</a>' : '<span></span>') + (b ? '<a href="#/' + b[0] + '">' + b[1] + ' →</a>' : '<span></span>') + '</nav>'; }
  function route() {
    var r = (location.hash.replace(/^#\/?/, '') || 'inicio').split('/')[0]; if (!PG[r]) r = 'inicio';
    var pg = PG[r](); main.innerHTML = pg.h + pager(r); document.title = pg.t + ' | ' + SITE.nome;
    [].forEach.call(lista.querySelectorAll('a'), function (a) { if (a.getAttribute('data-r') === r) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (pg.m) pg.m(main); fechar(); window.scrollTo(0, 0);
  }
  main.addEventListener('click', function (e) {
    var c = e.target.closest('[data-copiar]'); if (c) { var v = c.getAttribute('data-copiar'); if (navigator.clipboard) navigator.clipboard.writeText(v).then(function () { toast(v + ' copiado.'); }, function () { toast(v); }); else toast(v); return; }
    var z = e.target.closest('[data-zip]'); if (z) zipar(z.getAttribute('data-zip'), z);
  });
  window.addEventListener('hashchange', route);
  route();
})();
