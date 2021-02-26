window.addEventListener('load',
()=>{
    document.querySelector("input[type='submit']").addEventListener('load',
    (e)=>{
        e.preventDefault();
        alert('hola');
    });
});
