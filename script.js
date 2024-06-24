document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'clear') {
                display.value = '';
            } else if (button.id === 'equal') {
                try {
                    display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += button.dataset.value;
            }
        });
    });
});
