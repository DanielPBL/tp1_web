(() => {
    const modalBody = document.querySelector('#modal .modal-body');
    const modalDialog = document.querySelector('#modal .modal-dialog');

    document.querySelectorAll('.media img').forEach((img) => {
        img.addEventListener('click', (event) => {
            let img = new Image();
            
            img.onload = () => {
                let width = img.width > 900 ? 900 : img.width;
                modalDialog.style.maxWidth = String(width + 32) + 'px';
                img.style.width = '100%';
                modalBody.append(img);
            };

            modalBody.innerHTML = '';
            img.src = event.target.dataset.img;
            img.alt = event.target.alt;
        });
    });
})();