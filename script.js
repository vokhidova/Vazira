<script>
    var btn = document.querySelector('#btn')
    var s = document.querySelector('#input').value
    var div = document.querySelector('#div')
    btn.addEventListener('click',function(){
        
    if(input.value.charCodeAt(0)>=65 && input.value.slice(0,1) === 'J'){
        console.log('Hello '+input.value);
        div.textContent = 'Hello '+input.value
    }
    else {
        console.log('Bye '+input.value);
        div.textContent = 'Bye '+input.value
    }
    })
</script>\