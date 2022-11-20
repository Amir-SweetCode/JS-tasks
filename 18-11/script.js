const btn = document.querySelector('#ok-btn');
const btn1 = document.querySelector('#ok-btn1');
const btn2 = document.querySelector('#ok-btn2');
const modal = document.querySelector('#modal');
const data = btn.getAttribute('data-class');
const data1 = btn1.getAttribute('data-class');
const data2 = btn2.getAttribute('data-class');
const data3 = btn.getAttribute('data-text');
const data4 = btn1.getAttribute('data-text');
const data5 = btn2.getAttribute('data-text');

const showNotification = (options) => {
    modal.innerHTML = `<div class="notification notification-${options.className}">${options.text}<button id="close-btn">x</button></div>`;
    document.querySelector('#close-btn').addEventListener('click', () => {
        modal.innerHTML = '';
    });
    setTimeout(() => {
        modal.innerHTML = ''
    }, 5000);
}

btn.addEventListener('click', () => {
    showNotification({className: data, text: data3});
})

btn1.addEventListener('click', () => {
    showNotification({className: data1, text: data4});
})

btn2.addEventListener('click', () => {
    showNotification({className: data2, text: data5});
})
