let off=document.getElementById('off')
let on=document.getElementById('on')
let yearly=document.getElementById('yearly')
let monthly=document.getElementById('monthly')
let year=document.getElementById('year')
let month=document.getElementById('month')
let pay1=document.getElementById('pay1')
let pay2=document.getElementById('pay2')
let pay3=document.getElementById('pay3')
let pay4=document.getElementById('pay4')
let pay5=document.getElementById('pay5')
let pay6=document.getElementById('pay6')
let pay123=document.getElementById('pay1','pay2','pay3')
let step1=document.getElementById('step1')
let step2=document.getElementById('step2')
let step3=document.getElementById('step3')
let step4=document.getElementById('step4')
let stepp1=document.getElementById('stepp1')
let stepp2=document.getElementById('stepp2')
let stepp3=document.getElementById('stepp3')
let stepp4=document.getElementById('stepp4')
let stepp5=document.getElementById('step5')
let btn=document.getElementById('btn')
let goback=document.getElementById('goback')
let input3=document.getElementById('input3')
let arcade=document.getElementById('arcade')
let totaal=document.getElementById('total')


arcade.style.backgroundColor='rgb(219, 223, 238)'
arcade.style.borderColor='hsl(240, 57%, 80%)'
let toggle='off'
let step=1;
on.style.display='none'
step1.style.backgroundColor='hsl(240, 75%, 89%)'
stepp2.style.display='none'
stepp3.style.display='none'
stepp4.style.display='none'


off.onclick=function(){
    off.style.display='none'
    on.style.display='block'
    year.style.color='hsl(240, 41%, 49%)'
    month.style.color='gray'
    pay1.innerHTML='$20/yr<br><span >2 months free</span>'
    pay2.innerHTML='$28/yr<br><span >2 months free</span>'
    pay3.innerHTML='$30/yr<br><span >2 months free</span>'
    pay4.innerHTML='+$10/yr'
    pay5.innerHTML='+$15/yr'
    pay6.innerHTML='+$20/yr'
    toggle='on'
    let addMenu=''
    for (let i = 0; i < choosedAdd_Once.length; i++) {
        addMenu+=`<div>
                    <p class='menuInf' style="color: rgb(165, 165, 165);font-size: 14px;">${choosedAdd_Once[i]}</p>
                    <p class='price'>${choosePay(choosedAdd_Once[i])}</p>
                </div>`
        document.getElementById('MenuAdd_Once').innerHTML=addMenu
    }
    information.abon='Yearly'

    switch (information.Plan.toUpperCase()) {
        case 'ARCADE':
            document.getElementById('pricePlan').innerHTML=pay1.innerHTML.match(/\$\d+/ig)
            break;
        
        case 'ADVANCED':
            document.getElementById('pricePlan').innerHTML=pay2.innerHTML.match(/\$\d+/ig)
            break;
        case 'PRO':
            document.getElementById('pricePlan').innerHTML=pay3.innerHTML.match(/\$\d+/ig)
            break;
        }
        
        menuPlan.innerHTML=`${plan}(${abonnement(toggle)})`
} 

on.onclick=function(){
    on.style.display='none'
    off.style.display='block'
    month.style.color='hsl(240, 41%, 49%)'
    year.style.color='gray'
    pay1.innerHTML='$9/mo'
    pay2.innerHTML='$12/mo'
    pay3.innerHTML='$15/mo'
    pay4.innerHTML='+$1/mo'
    pay5.innerHTML='+$2/mo'
    pay6.innerHTML='+$3/mo'
    toggle='off'
    let addMenu=''
    for (let i = 0; i < choosedAdd_Once.length; i++) {
        addMenu+=`<div>
                    <p class='menuInf' style="color: rgb(165, 165, 165);font-size: 14px;">${choosedAdd_Once[i]}</p>
                    <p class='price'>${choosePay(choosedAdd_Once[i])}</p>
                </div>`
        document.getElementById('MenuAdd_Once').innerHTML=addMenu
    }

    information.abon='Monthly'
    switch (information.Plan.toUpperCase()) {

        case 'ARCADE':
            document.getElementById('pricePlan').innerHTML=pay1.innerHTML.match(/\$\d+/ig)
            break;
        
        case 'ADVANCED':
            document.getElementById('pricePlan').innerHTML=pay2.innerHTML.match(/\$\d+/ig)
            break;
        case 'PRO':
            document.getElementById('pricePlan').innerHTML=pay3.innerHTML.match(/\$\d+/ig)
            break;
        }

        menuPlan.innerHTML=`${plan}(${abonnement(toggle)})`
}

// ---------Gérer les steps---------------
function nocolor(a, b, c) {
    Array.from(arguments).forEach(function(aa) {
    aa.style.backgroundColor = 'hsl(240, 50%, 95%)';
    });
}

function noafficher(a, b, c) {
    Array.from(arguments).forEach(function(aa) {
    aa.style.display = 'none';
    });
}

function gerer(step){
    if(step==1){
        noafficher(stepp2,stepp3,stepp4)
        stepp1.style.display='block'
    }
    if(step==2){
        noafficher(stepp1,stepp3,stepp4)
        stepp2.style.display='block'
    }
    if(step==3){
        noafficher(stepp2,stepp1,stepp4)
        stepp3.style.display='block'
    }
    if(step==4){
        noafficher(stepp2,stepp1,stepp3)
        stepp4.style.display='flex'
    }
    stepp5.style.display='none'
}

function gererstep(nbr,a,b,c,d){
    step=nbr
    a.style.backgroundColor='hsl(240, 75%, 89%)'
    gerer(step);
    nocolor(b,c,d);

}
// --------------------------------------------------------------
let choosedAdd_Once=[]
function choosePay(i){
    switch (i) {
        case 'online':
            return pay4.innerHTML.match(/\$\d+/ig)
            break;
        case 'larger':
            return pay5.innerHTML.match(/\$\d+/ig)
            break;
        case 'custom':
            return pay6.innerHTML.match(/\$\d+/ig);
            break;
    }
}

let total=0
function clickinp(b,c) {
    
    if (document.getElementById(b).checked) {
        document.querySelector(`[for="${b}"]`).style.backgroundColor = 'hsl(240, 38%, 97%)';
        document.querySelector(`[for="${b}"]`).style.borderColor = 'hsl(240, 57%, 70%)';
        choosedAdd_Once.push(b)
        // total+=parseInt(c.innerHTML.match(/\d+/)[0], 10)
    }
    else{
        document.querySelector(`[for="${b}"]`).style.backgroundColor = 'white';
        document.querySelector(`[for="${b}"]`).style.borderColor = 'rgb(228, 226, 226)';
        choosedAdd_Once.splice(choosedAdd_Once.indexOf(b),1)
        // total-=parseInt(c.innerHTML.match(/\d+/)[0], 10)
    }

let addMenu=''
    for (let i = 0; i < choosedAdd_Once.length; i++) {
        addMenu+=`<div>
                    <p class='menuInf' style="color: rgb(165, 165, 165);font-size: 14px;">${choosedAdd_Once[i]}</p>
                    <p class='price'>${choosePay(choosedAdd_Once[i])}</p>
                </div>`
            }
            document.getElementById('MenuAdd_Once').innerHTML=addMenu
}

let price1;
function clickAbonne(a,b,c) {
    let d=document.getElementById(a)
    let e=document.getElementById(b)
    let f=document.getElementById(c)
    d.style.backgroundColor='rgb(219, 223, 238)'
    d.style.borderColor='hsl(240, 57%, 80%)'
    e.style.backgroundColor='rgb(243, 243, 243)'
    e.style.borderColor='rgb(218, 222, 226)'
    f.style.backgroundColor='rgb(243, 243, 243)'
    f.style.borderColor='rgb(218, 222, 226)'
    plan=a
    menuPlan.innerHTML=`${a}(${abonnement(toggle)})`
    switch (a) {
        case 'arcade':
            document.getElementById('pricePlan').innerHTML=pay1.innerHTML.match(/\$\d+/ig)
            
            break;
        
        case 'advanced':
            document.getElementById('pricePlan').innerHTML=pay2.innerHTML.match(/\$\d+/ig)
            
            break;
        case 'pro':
            document.getElementById('pricePlan').innerHTML=pay3.innerHTML.match(/\$\d+/ig)
            
            break;
        }
    information.Plan=plan
    
}


// -----------------------------------------------------------------
let nom=document.getElementById('name')
let email=document.getElementById('email')
let phone=document.getElementById('phone')
let change=document.getElementById('change')


let plan='arcade'
function abonnement(toggle){
    return toggle === 'off' ? 'Monthly' : 'Yearly'
}

let information={
    phone:phone.value,
    email:email.value,
    abon:abonnement(toggle),
    Plan:plan,
    Add_Once:choosedAdd_Once,
};


btn.addEventListener('click',function(){
    information={
        phone:phone.value,
        email:email.value,
        abon:abonnement(toggle),
        Plan:plan,
        Add_Once:choosedAdd_Once,
    };
    
    
    
})
// -----------------------------------------------------------------------
change.onclick=function(){
    gererstep(2,step2,step1,step3,step4)  
}



// --------------------------------------------------------------------------------

function totale_plan(){
    switch (information.Plan.toUpperCase()){
        case 'ARCADE':    
        return parseInt(pay1.innerHTML.match(/\d+/)[0], 10)
        break

        case 'ADVANCED': 
        return parseInt(pay2.innerHTML.match(/\d+/)[0], 10) 
        break
        
        case 'PRO':       
        return parseInt(pay3.innerHTML.match(/\d+/)[0], 10)
        break
    }
    
}

function totale_add_once(){
    let somme=0
    
    for (let i in choosedAdd_Once)
        {   
            
            switch (choosedAdd_Once[i].toUpperCase())
            {
            case 'ONLINE':    
            somme+=parseInt(pay4.innerHTML.match(/\d+/)[0], 10)
                break

                case 'LARGER': 
                somme+=parseInt(pay5.innerHTML.match(/\d+/)[0], 10) 
                break
                
                case 'CUSTOM':       
                somme+=parseInt(pay6.innerHTML.match(/\d+/)[0], 10)
                break
            }
        }
        return somme
    }
    
    
    function totale(){
        total=0
        total+=totale_plan()+totale_add_once()
        totaal.innerHTML='$'+total
    }
    // ===================================================================
    function confirmer(){
        information.phone=phone.value
        information.email=email.value
        localStorage.setItem(nom.value,JSON.stringify(information))

        stepp4.style.display='none'
        stepp5.style.display='flex'
        
    }