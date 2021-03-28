// set initial count
let count = 0;

// select value and btns
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;

        // change the count value
        if(styles.contains('decrease')){
            count--;
        }
        else if (styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        };

        // change the style color
        if(count > 0){
            value.style.color = 'seagreen';
        }
        else if (count < 0) {
            value.style.color = 'crimson';
        }
        else {
            value.style.color = '#222';
        }

        // set the value to count
        value.textContent = count;
    })
});