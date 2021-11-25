let container=document.createElement('div');
container.className='container';
document.body.appendChild(container);

let million=document.createElement('header');
million.className='million';
container.appendChild(million);

let million_pic=document.createElement('img');
million_pic.src='Pictures/download.png';
million_pic.style.height='150px';
million.appendChild(million_pic);

let main=document.createElement('div');
main.className='main';
container.appendChild(main);

let pay_mobile=document.createElement('div');
pay_mobile.className='pay_mobile';
main.appendChild(pay_mobile);

let pay_another=document.createElement('div');
pay_another.className='pay_another';
main.appendChild(pay_another);

let footer=document.createElement('div');
footer.className='footer';
container.appendChild(footer);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let obj={
    config1: [{
        element1:'div',
        className:'mobile',
        element2:'a',
        href:'https://www.azercell.com/az/',
        element3:'img',
        src:'Pictures/azercell.jpg',
        cursor:'pointer',
    },
    {
        element1:'div',
        className:'mobile',
        element2:'a',
        href:'https://www.bakcell.com/az',
        element3:'img',
        src:'Pictures/bakcell.png',
        cursor:'pointer',
    },
    {
        element1:'div',
        className:'mobile',
        element2:'a',
        href:'https://www.nar.az/',
        element3:'img',
        src:'Pictures/nar.png',
        cursor:'pointer',
    },
    {
        element1:'div',
        className:'mobile',
        element2:'a',
        href:'https://www.million.az/',
        element3:'img',
        src:'Pictures/kommunal.jpg',
        cursor:'pointer',
    }],

    ////////////////////////////////////////////////////////////////

    config2: [{
        element1:'a',
        href:'#',
        element2:'button',
        className:'btn',
        paragraf_en: 'Utilities',
        paragraf_ru: 'коммунальные услуги',
        paragraf_az: 'Kommunal xidmətlər'
    },
    {
        element1:'a',
        href:'#',
        element2:'button',
        className:'btn',
        paragraf_en: 'Bank services',
        paragraf_ru: 'Банковские услуги',
        paragraf_az: 'Bank xidmətləri'
    },
    {
        element1:'a',
        href:'#',
        element2:'button',
        className:'btn',
        paragraf_en: 'Tax',
        paragraf_ru: 'налог',
        paragraf_az: 'Vergi'
    },
    {
        element1:'a',
        href:'#',
        element2:'button',
        className:'btn',
        paragraf_en: 'The Internet',
        paragraf_ru: 'интернет',
        paragraf_az: 'İnternet'
    }],


    ////////////////////////////////////////////////////////////////

    config3: [
        {
            element1:'button',
            className:'en',
            element2:'img',
            src:'Pictures/england.png',
            width:'40px',
            height:'20px'
        },
        {
            element1:'button',
            className:'ru',
            element2:'img',
            src:'Pictures/russian.jpg',
            width:'40px',
            height:'20px'
        },
        {
            element1:'button',
            className:'az',
            element2:'img',
            src:'Pictures/azerbaijan.png',
            width:'40px',
            height:'20px'
        }
    ],
}


for (const f in obj.config1) {
    let element1=document.createElement(obj.config1[f].element1);
    element1.className=obj.config1[f].className;
    pay_mobile.appendChild(element1);

    let element2=document.createElement(obj.config1[f].element2);
    element2.href=obj.config1[f].href;
    element1.appendChild(element2);

    let element3=document.createElement(obj.config1[f].element3);
    element3.src=obj.config1[f].src;
    element3.style.cursor=obj.config1[f].cursor;
    element2.appendChild(element3);
}

for (const f in obj.config2) {
    let element1=document.createElement(obj.config2[f].element1);
    element1.href=obj.config2[f].href;
    pay_another.appendChild(element1);

    let element2=document.createElement(obj.config2[f].element2);
    element2.className=obj.config2[f].className;
    element2.innerText=obj.config2[f].paragraf_az;
    element1.appendChild(element2);
}

for (const f in obj.config3) {
    let element1=document.createElement(obj.config3[f].element1);
    element1.className=obj.config3[f].className;
    footer.appendChild(element1);

    let element2=document.createElement(obj.config3[f].element2);
    element2.src=obj.config3[f].src;
    element2.src=obj.config3[f].src;
    element2.style.width=obj.config3[f].width;
    element2.style.height=obj.config3[f].height;
    element1.appendChild(element2);
    element1.appendChild(element2);
}


for (const f in obj.config3) {
    
    for (const f in obj.config2) {

        element1.addEventListener('click',function () {
            obj.config1[f].paragraf_az=obj.config1[f].paragraf_az;
        });
    }
    
}