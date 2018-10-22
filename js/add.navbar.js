'use strict';

//Fonte: https://stackoverflow.com/a/7091965/1044856
function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

(() => {
    const headerEL = document.querySelector('header');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.tpl.html');
    xhr.responseType = 'text';
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                headerEL.innerHTML = xhr.responseText;
                let url = window.location.pathname;
                let filename = url.substring(url.lastIndexOf('/') + 1);
                filename = filename === '' ? 'index.html' : filename;
                let link = document.querySelector(`.nav-item a[href="${filename}"`);
                link.parentElement.classList.add('active');
            }
        }
    };
    xhr.send();

    const idade = document.querySelector('#idade');
    if (idade) {
        idade.innerHTML = getAge('1995-12-17');
    }
})();