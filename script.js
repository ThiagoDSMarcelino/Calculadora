display = document.querySelector('.display');
 
displayEvent = () => {
    mathElement = ['(', ')', '/', '*', '-', '+', '.'];
    document.addEventListener('click', e => {
        const element = e.target;
        if (element.classList.contains('btn-num')) add(element.innerText);
        if (element.classList.contains('btn-mathElement')) add(element.innerText);
        if (element.classList.contains('btn-clear')) clear();
        if (element.classList.contains('btn-del')) del();
        if (element.classList.contains('btn-equal')) equal();
    });

    document.addEventListener('keypress', e => {
        element = e.key;
        if (!isNaN(element)) add(element);
        if (mathElement.indexOf(element) !== -1) add(element);
        if (element == "Enter") equal();
    });
};

add = element => {
    display.value += element;
    display.focus();
};

clear = () => display.value = "";

del = () => display.value = display.value.slice(0, -1);

equal = () => {
    try {
        const conta = eval(display.value);
        display.value = conta;
    } catch(e){
        alert("Conta inválida");
        return;
    }
};

displayEvent();