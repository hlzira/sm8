document.querySelectorAll('.title').forEach((el)=>{
  el.addEventListener('click', ()=>{
    text = el.nextElementSibling;
    console.log(text);

    if(text.style.maxHeight){
      document.querySelectorAll('.text').forEach((el)=> el.style.maxHeight = null)
    }else{
      document.querySelectorAll('.text').forEach((el)=> el.style.maxHeight = null)
      text.style.maxHeight = text.scrollHeight + 'px'
    }
  })
})