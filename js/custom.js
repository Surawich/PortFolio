function pageload(){

}

function Changepic(id){
    var pic = document.getElementById(id);
    if(id == "Ezanpic")
    {
        pic.src = "img/EZAMEHTpos.png"
        pic.id = "Ezanpic1";
    }else if(id == "Ezanpic1")
    {
        pic.src = "img/EzamTeaser.png"
        pic.id = "Ezanpic";
    }

    if(id == "Escapepic")
    {
        pic.src = "img/BG2.png"
        pic.id = "Escapepic1";
    }else if(id == "Escapepic1")
    {
        pic.src = "img/HOWTO.png"
        pic.id = "Escapepic";
    }

    if(id == "Escape1pic")
    {
        pic.src = "img/1stad_2.png"
        pic.id = "Escape1pic1";
    }else if(id == "Escape1pic1")
    {
        pic.src = "img/1stad.png"
        pic.id = "Escape1pic";
    }

    if(id == "Walkizpic")
    {
        pic.src = "img/AR3.png"
        pic.id = "Walkizpic1";
    }else if(id == "Walkizpic1")
    {
        pic.src = "img/AR2.png"
        pic.id = "Walkizpic";
    }

    if(id == "Rescapepic")
    {
        pic.src = "img/Rescape_2.png"
        pic.id = "Rescapepic1";
    }else if(id == "Rescapepic1")
    {
        pic.src = "img/Rescape.png"
        pic.id = "Rescapepic";
    }
}