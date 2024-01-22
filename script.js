
let inputEl=document.querySelector('input');
let btns=document.querySelectorAll('button');

for(let btn of btns)
{
    btn.addEventListener('click',(e)=>{
        let btnText=e.target.innerText;
        if(btnText=='C')
        {
            inputEl.value="";
        }else if(btnText==='=')
        {
            try{
                inputEl.value=eval(inputEl.value);
            }catch{
                inputEl.value="Invalid";
            }
        }else{
            inputEl.value=inputEl.value+btnText;
        }
    });
}
