*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#090b16;
    color:#ffffff;
    font-family:'Inter',sans-serif;
    overflow:hidden;
}

main{
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    padding:30px;
}

.page{
    width:100%;
    max-width:700px;
    text-align:center;
    display:none;
    animation:fade .8s ease;
}

.page.active{
    display:block;
}

.chapter{
    font-size:12px;
    letter-spacing:4px;
    text-transform:uppercase;
    color:#9fb4ff;
    margin-bottom:25px;
}

h1{
    font-family:'Cormorant Garamond',serif;
    font-size:50px;
    line-height:1.2;
    margin-bottom:20px;
    white-space:pre-line;
}

h2{
    font-family:'Cormorant Garamond',serif;
    font-size:40px;
    margin-bottom:20px;
}

p{
    font-size:18px;
    line-height:1.9;
    color:#d9d9d9;
}

.hint{
    margin-top:60px;
    opacity:.5;
    font-size:14px;
    letter-spacing:1px;
}

@keyframes fade{
    from{
        opacity:0;
        transform:translateY(20px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }
}

#stars{
    position:fixed;
    inset:0;
    z-index:-1;
    overflow:hidden;
}

.star{
    position:absolute;
    width:2px;
    height:2px;
    background:white;
    border-radius:50%;
    animation:twinkle 3s infinite ease-in-out;
}

@keyframes twinkle{

    0%,100%{
        opacity:.2;
        transform:scale(1);
    }

    50%{
        opacity:1;
        transform:scale(2);
    }

}

@media(max-width:600px){

    h1{
        font-size:38px;
    }

    h2{
        font-size:30px;
    }

    p{
        font-size:16px;
        line-height:1.8;
    }

    .chapter{
        font-size:11px;
    }

    .hint{
        font-size:13px;
    }

}
