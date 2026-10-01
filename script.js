// ==========================================
// ANIMAÇÕES AO ROLAR A PÁGINA
// ==========================================

const elementos = document.querySelectorAll(
    '.secao .conteudo, .foto-placeholder'
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    elemento.classList.add('revelar');
    observer.observe(elemento);
});


// ==========================================
// BOTÃO "QUERO CONHECER JESUS"
// ==========================================

const botaoJesus = document.getElementById('botao-jesus');
const primeirosPassos = document.getElementById('primeiros-passos');

if (botaoJesus && primeirosPassos) {
    botaoJesus.addEventListener('click', () => {
        const abrir = botaoJesus.getAttribute('aria-expanded') !== 'true';
        botaoJesus.setAttribute('aria-expanded', String(abrir));
        primeirosPassos.hidden = !abrir;
    });
}

