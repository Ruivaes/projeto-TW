function extendText(pId) {
    const p = document.getElementById(pId);
    const btn_read = document.querySelector('.btn_read[data-target="' + pId + '"]');

    if (p.style.maxHeight) {
        p.style.maxHeight = null;
        btn_read.textContent = 'Ler Mais';
    } else {
        p.style.maxHeight = p.scrollHeight + 'px';
        btn_read.textContent = 'Ler Menos';
    }
}


