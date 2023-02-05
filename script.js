const img1=document.querySelector('img');
const imgarr = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png','images/8.png','images/9.png','images/10.png','images/11.png','images/12.png','images/13.png','images/14.png','images/15.png'];
const codearr = ['Tenz','Aimbot 1.0','Blackcross','Perfecto','Nerd Glasses','TheBig','Flappy','AI','DOT','Among Us','Reyn','Aimbot 2.0','Black dot','Shirorz','CR'];
const codes = [
    '0;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0',
    '0;P;o;0.8;0t;5;0l;1;0o;1;0a;0.4;0f;0;1t;1;1l;1;1o;2;1a;1;1m;0;1f;0',
    '0;P;o;1;0t;1;0l;1;0o;2;0a;0;0f;0;1t;1;1l;1;1o;3;1a;0;1m;0;1f;0',
    '0;P;c;1;o;1;0t;1;0l;5;0o;2;0a;1;0f;0;1t;3;1l;3;1o;3;1a;0;1m;0;1f;0',
    '0;s;1;P;c;8;t;2;o;1;d;1;b;1;a;0.462;f;0;0t;10;0l;14;0v;0;0g;1;0o;5;0a;0.308;0f;0;1t;1;1l;6;1v;0;1g;1;1o;18;1a;0;1m;0;1f;0;S;d;0',
    '0;P;c;5;t;6;o;0.97;d;1;z;1;a;0.581;0t;6;0l;19;0o;10;0a;0.251;0e;2.685;1t;10;1o;23;1a;0.053;1m;0;1e;2.152',
    '0;P;c;8;u;008000FF;t;3;o;1;b;1;0t;4;0l;0;0v;18;0g;1;0o;10;0a;1;0f;0;1t;10;1l;0;1v;4;1g;1;1o;7;1a;1;1m;0;1f;0',
    '0;P;h;0;0t;4;0l;1;0o;1;0a;1;0m;1;0s;0.04;0e;0.08;1o;2;1a;1;1m;0;1f;0',
    '0;P;o;0.654;d;1;0t;4;0l;1;0o;0;0a;1;0f;0;1b;0',
    '0;c;1;P;c;5;t;3;o;1;f;0;0t;10;0l;0;0v;0;0g;1;0o;4;0a;0.288;0f;0;1t;9;1o;0;1a;1;1m;0;1f;0',
    '0;P;c;5;o;1;m;1;0t;8;0l;2;0o;4;0a;1;0f;0;1o;5;1a;1;1m;0;1f;0',
    '0;P;c;8;u;FF5F0FFF;o;1;b;1;f;0;0v;4;0g;1;0o;4;0a;1;0f;0;1b;0',
    '0;P;o;1;d;1;z;1;a;0;f;0;s;0;0b;0;1t;1;1l;1;1o;0;1a;0;1m;0;1f;0',
    '0;p;0;s;1;P;c;8;u;000000FF;h;0;b;1;f;0;m;1;0l;5;0v;3;0g;1;0o;1;0a;1;0e;0.13;1b;0;A;h;0;0t;1;0l;3;0o;1;0a;1;0f;0;1b;0;S;c;0;s;0.628;o;1',
    '0;P;o;0.987;0t;1;0l;1;0o;2;0a;0;0f;0;1t;1;1l;1;1o;3;1a;0;1m;0;1f;0'
]
let indx =1;
const inp = document.getElementById('inp');
const btncopy = document.getElementById('copy');
document.getElementById("inp").disabled = true;
document.getElementById("copy").disabled=true;
function getcrosshair()
{
    document.getElementById("copy").disabled=false;
    document.getElementById("inp").disabled = false;
    const imgt = document.getElementById('logo');
    const codec = document.getElementById('code');
    if(indx >= imgarr.length){
        indx = 0;
    }
    imgt.src = imgarr[indx];
    codec.innerHTML=codearr[indx];
    document.getElementById("inp").value = codes[indx];
    indx++;
    document.getElementById("inp").disabled = false;
}
btncopy.onclick = function()
{
    document.getElementById("snackbar").disabled=false;
    const snackbar = document.querySelector('#snackbar');
    snackbar.classList.add("show");
    setTimeout(()=>{
        snackbar.classList.remove("show");
    },2000);
    inp.select();
    document.execCommand("Copy");
};