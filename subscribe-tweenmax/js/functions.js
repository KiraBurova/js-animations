const button = document.querySelector('#cta');

animate = () => {
    TweenMax.to('.panel', 1.5, { scaleY: 1, height: '100vh', ease: Circ.easeOut });
    TweenMax.to('.input', 1, { opacity: 1, y: 0, delay: 1, ease: Elastic.easeOut.config(1.7) });
    TweenMax.to('.text', 1, { opacity: 1, y: 20, delay: 1.4 });
    TweenMax.to('.box', 3, { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3) });
}

button.addEventListener('click', animate);