// ----- Year -----
document.getElementById('year').textContent = new Date().getFullYear();

// ----- Mobile nav -----
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

// ----- Uptime ticker -----
// const start = Date.now();
// setInterval(() => {
//   const s = Math.floor((Date.now() - start) / 1000);
//   const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
//   const txt = h ? `${h}h ${m}m` : m ? `${m}m ${sec}s` : `${sec}s`;
//   document.querySelectorAll('#uptime, .ticker em').forEach(el => el.textContent = txt);
// }, 1000);

// ----- Animated ASCII art (replaces terminal) -----
// Steam frames rise above a coffee mug + laptop scene. Subtle, looping.
const asciiFrames = [
  String.raw`           (   )
            )  (
           (    )
        _________
       [_________]   ___________________
        \_______/   |  > H_             |
         |     |    |                   |
         |_____|    |___________________|
                          |____________|`,
  String.raw`             )  (
            (    )
           )  (  )
        _________
       [_________]   ___________________
        \_______/   |  > He_            |
         |     |    |                   |
         |_____|    |___________________|
                          |____________|`,
  String.raw`            (    )
           )  (  )
            (  )
        _________
       [_________]   ___________________
        \_______/   |  > Hey_           |
         |     |    |                   |
         |_____|    |___________________|
                          |____________|`,
  String.raw`           )  (  )
            (    )
             )  (
        _________
       [_________]   ___________________
        \_______/   |  > Hey!           |
         |     |    |                   |
         |_____|    |___________________|
                          |____________|`
];
const captions = [
  '// brewing ideas since 2018',
  '// $ sudo make coffee',
  '// 99 little bugs in the code...',
  '// compiling... please wait',
  '// it works on my machine ¯\\_(ツ)_/¯',
  '// caffeine.level == MAX'
];
const artEl = document.getElementById('asciiArt');
const capEl = document.getElementById('asciiCaption');
if (artEl) {
  let f = 0, c = 0;
  artEl.textContent = asciiFrames[0];
  setInterval(() => {
    f = (f + 1) % asciiFrames.length;
    artEl.textContent = asciiFrames[f];
  }, 450);
  setInterval(() => {
    capEl.style.opacity = '0';
    setTimeout(() => {
      c = (c + 1) % captions.length;
      capEl.textContent = captions[c];
      capEl.style.opacity = '1';
    }, 300);
  }, 3500);
}

// ----- Konami code easter egg -----
// const konami = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
// let buf = [];
// window.addEventListener('keydown', (e) => {
//   buf.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
//   if (buf.length > konami.length) buf.shift();
//   if (konami.every((k, i) => buf[i] === k)) {
//     const overlay = document.querySelector('.konami');
//     overlay.classList.add('show');
//     setTimeout(() => overlay.classList.remove('show'), 2500);
//     buf = [];
//   }
// });

// ----- Console greeting -----
// const banner = `
//    _                     ____
//   | | __ _ _ __   ___   |  _ \\  ___   ___
//   | |/ _\` | '_ \\ / _ \\  | | | |/ _ \\ / _ \\
//   | | (_| | | | |  __/  | |_| | (_) |  __/
//  _/ |\\__,_|_| |_|\\___|  |____/ \\___/ \\___|
// |__/
// `;
// console.log('%c' + banner, 'font-family: monospace; color: #0a0a0a;');
// console.log('%cwell hello there, curious dev 👋', 'font-family: monospace; font-size: 13px;');
// console.log('%cping → hello@janedoe.dev', 'font-family: monospace; color: #6b6b6b;');
