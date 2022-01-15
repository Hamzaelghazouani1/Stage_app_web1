function display() {
    document.getElementById("container").style.display = "none";
    document.getElementById("menu-bar").style.height = "auto";
    document.getElementById("step-pro").style.display = "none";
    document.getElementById("body").style.height = "100vh";
}

function display1() {
    document.getElementById("container").style.display = "flex";
    document.getElementById("step-pro").style.display = "flex";
    document.getElementById("body").style.height = "auto";
}

function next1() {
    document.getElementById("container-1").style.left = "70px";
    document.getElementById("container").style.left = "-2000px";
    document.getElementById("progress").style.width = "240px";
    document.getElementById("container-1").style.display = "flex";
    document.getElementById("label").style.display = "block";









}

function next2() {
    document.getElementById("container-1").style.left = "-2000px";
    document.getElementById("container-2").style.left = "70px";
    document.getElementById("progress").style.width = "390px";
    document.getElementById("container-1").style.display = "none";
    document.getElementById("container-2").style.display = "flex";
    document.getElementById("label").style.display = "none";





}

function back1() {
    document.getElementById("container-1").style.left = "2000px";
    document.getElementById("container").style.left = "0px";
    document.getElementById("progress").style.width = "120px";
    document.getElementById("container-1").style.display = "none";
    document.getElementById("label").style.display = "none";





}

function back2() {
    document.getElementById("container-1").style.left = "70px";
    document.getElementById("container-2").style.left = "2000px";
    document.getElementById("progress").style.width = "240px";
    document.getElementById("container-2").style.display = "none";
    document.getElementById("container-1").style.display = "flex";
    document.getElementById("container").style.display = "flex";
    document.getElementById("label").style.display = "block";




}

if (screen.width < 780) {
    function next1() {
        document.getElementById("container-1").style.left = "40px";
        document.getElementById("container").style.left = "-2000px";
        document.getElementById("progress").style.width = "240px";
        document.getElementById("container-1").style.display = "flex";
        document.getElementById("container").style.display = "none";
        document.getElementById("container-1").style.marginTop = "120px";






    }

    function next2() {
        document.getElementById("container-1").style.left = "-2000px";
        document.getElementById("container-2").style.left = "18px";
        document.getElementById("progress").style.width = "390px";
        document.getElementById("container-1").style.display = "none";
        document.getElementById("container-2").style.display = "flex";
        document.getElementById("container-2").style.marginTop = "120px";





    }

    function back1() {
        document.getElementById("container-1").style.left = "2000px";
        document.getElementById("container").style.left = "0px";
        document.getElementById("progress").style.width = "120px";
        document.getElementById("container").style.display = "flex";
        document.getElementById("container-1").style.display = "none";






    }

    function back2() {
        document.getElementById("container-1").style.left = "18px";
        document.getElementById("container-2").style.left = "2000px";
        document.getElementById("progress").style.width = "240px";
        document.getElementById("container-2").style.display = "none";
        document.getElementById("container-1").style.display = "flex";
        document.getElementById("container").style.display = "flex";



    }
}


if (screen.width < 500) {
    function next1() {
        document.getElementById("container-1").style.left = "18px";
        document.getElementById("container").style.left = "-2000px";
        document.getElementById("progress").style.width = "200px";
        document.getElementById("container-1").style.display = "flex";
        document.getElementById("container").style.display = "none";
        document.getElementById("container-1").style.marginTop = "28px";






    }

    function shopaf() {
        document.getElementById("shop").style.right = "24px";
        document.getElementById("shop").style.width = "300px";
        document.getElementById("shop-title").style.margin = "0px 90px";


    }



    function next2() {
        document.getElementById("container-1").style.left = "-2000px";
        document.getElementById("container-2").style.left = "18px";
        document.getElementById("progress").style.width = "320px";
        document.getElementById("container-1").style.display = "none";
        document.getElementById("container-2").style.display = "flex";
        document.getElementById("container-2").style.marginTop = "28px";




    }

    function back1() {
        document.getElementById("container-1").style.left = "2000px";
        document.getElementById("container").style.left = "0px";
        document.getElementById("progress").style.width = "100px";
        document.getElementById("container-1").style.display = "none";
        document.getElementById("container").style.display = "flex";






    }

    function back2() {
        document.getElementById("container-1").style.left = "18px";
        document.getElementById("container-2").style.left = "2000px";
        document.getElementById("progress").style.width = "200px";
        document.getElementById("container-2").style.display = "none";
        document.getElementById("container-1").style.display = "flex";



    }
}

function search() {
    document.getElementById("surface").style.width = "200px";
    document.getElementById("surface").style.padding = " 8px 36px";
    document.getElementById("surface").style.background = "#ffffff";
    document.getElementById("delete").style.display = "block";
    document.getElementById("search").style.display = "none";
    document.getElementById("hidding").style.display = "block";

}

function delet() {
    document.getElementById("surface").value = "";

}


function hidding() {
    document.getElementById("surface").style.width = "0px";
    document.getElementById("surface").style.padding = "8px 16px";
    document.getElementById("surface").style.background = " #dbdbdb";
    document.getElementById("delete").style.display = "none";
    document.getElementById("hidding").style.display = "none";
    document.getElementById("search").style.display = "block";



}

if (screen.width < 643) {


    function search() {
        document.getElementById("product-title").style.top = "135px";
        document.getElementById("surface").style.width = "200px";
        document.getElementById("surface").style.padding = " 8px 36px";
        document.getElementById("surface").style.background = "#ffffff";
        document.getElementById("delete").style.display = "block";
        document.getElementById("search").style.display = "none";
        document.getElementById("hidding").style.display = "block";

    }

    function delet() {
        document.getElementById("surface").value = "";

    }


    function hidding() {
        document.getElementById("surface").style.width = "0px";
        document.getElementById("product-title").style.top = "68px";
        document.getElementById("surface").style.padding = "8px 16px";
        document.getElementById("surface").style.background = " #dbdbdb";
        document.getElementById("delete").style.display = "none";
        document.getElementById("hidding").style.display = "none";
        document.getElementById("search").style.display = "block";



    }

}



if (screen.width < 407) {
    document.getElementById("product-title").style.top = "98px";



    function hidding() {
        document.getElementById("surface").style.width = "0px";
        document.getElementById("surface").style.padding = "8px 16px";
        document.getElementById("surface").style.background = " #dbdbdb";
        document.getElementById("delete").style.display = "none";
        document.getElementById("hidding").style.display = "none";
        document.getElementById("search").style.display = "block";
        document.getElementById("product-title").style.top = "98px";




    }

}


function appearance() {

    if (document.getElementById("checke").checked == true) {
        document.getElementById("label").innerHTML = "essaie";
        document.getElementById("label").style.left = "110px";
    } else {
        document.getElementById("label").innerHTML = "acheter";

    }
    if (document.getElementById("checke1").checked == true) {
        document.getElementById("label1").innerHTML = "essaie";
        document.getElementById("label1").style.left = "110px";
    } else {
        document.getElementById("label1").innerHTML = "acheter";

    }
    if (document.getElementById("checke2").checked == true) {
        document.getElementById("label2").innerHTML = "essaie";
        document.getElementById("label2").style.left = "110px";
    } else {
        document.getElementById("label2").innerHTML = "acheter";

    }
    if (document.getElementById("checke3").checked == true) {
        document.getElementById("label3").innerHTML = "essaie";
        document.getElementById("label3").style.left = "110px";
    } else {
        document.getElementById("label3").innerHTML = "acheter";

    }
}

function shophd() {
    document.getElementById("shop").style.right = "-500px";
}

function shopaf() {
    document.getElementById("shop").style.right = "67px";
}
