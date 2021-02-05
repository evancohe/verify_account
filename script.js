const codes = document.querySelectorAll('.code')
const btn = document.querySelector('.submitBtn')

codes[0].focus()

codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[index].value = ''
            setTimeout(() => codes[index + 1].focus(), 10)
            if (index == 5) {
                console.log("reached the end")
                btn.style.backgroundColor = '#000000';
                btn.style.color = '#ffffff';
            }
        } else if (e.key === 'Backspace') {
            if (index < 6) {
                btn.style.backgroundColor = '#ffffff';
                btn.style.color = '#000000';
            }
            setTimeout(() => codes[index - 1].focus(), 10)
        }
    })
})