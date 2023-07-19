let cont = 0;
let cont2 = 0;
let time = 1;
let t = 0 ;
let s=[];
let ss1=[];
let s1=[];
let array2=[];
let array22=[];
let evenv= "#fff";
let oddv= "#808080CC";
let qunv="#998200";
let queend="fa-sharp fa-solid fa-chess-queen fa-bounce fa-xs";


function hill(){

    let f = 1;
    while (f) {
        s1[t]=s.toString();
        t=t+1;

        var pv = findh(s);
        // document.getElementById('poq').innerText = document.getElementById('poq').innerText + pv;
        var childrenvalue = [];


        for (var i = 0; i < parseInt(rn, 10); i++) {
            for (var ii = 0; ii < parseInt(rn, 10); ii++) {
                let v = s[i];
                ss = s;
                ss[i] = ii;
                var chv = findh(ss);
                s[i] = v;
                ss[i] = v;
                childrenvalue.push(chv);

            }
        }
        vv = Math.min(...childrenvalue);
        let flage =0;
        if (vv < pv) {

            for (let i1 = 0; i1 < parseInt(rn, 10); i1++) {
                for (let ii2 = 0; ii2 < parseInt(rn, 10); ii2++) {
                    if (childrenvalue[ii2 + parseInt(rn, 10) * i1] === vv && flage===0) {
                        s[i1] = ii2;
                        flage=1;

                    }
                }
                //       document.getElementById('poq').innerText = document.getElementById('poq').innerText + "______";
            }
        } else {
            f = 0;
        }
        array22[t-1]=childrenvalue.toString();
    }
}

function simulatedAnnealing(T , itermax)
{
    let currst ;
    s1[t]=s.toString();
    currst =s ;
    let bestst =[];
    let f = 1;
    // document.getElementById('poq1').innerText = document.getElementById('poq1').innerText +s ;
   for( let it= 0 ; it <itermax ; it++)
   {
       var pv = findh(currst);

          T=T/(Math.log(it)/Math.log(10)) ;
       let vl= document.getElementById('gg').value;

       if (vl === 1)
       {
           T =.5*.5*T ;
       }
       if (vl===2)
       {
           T =.5*T;

       }
       if (vl===3)
       {
         T= t/(1+it)*T ;
       }




        var childrenvalue = [];
        for (var i = 0; i < parseInt(rn, 10); i++) {
            for (var ii = 0; ii < parseInt(rn, 10); ii++) {
                let v = s[i];
                ss = s;
                ss[i] = ii;
                var chv = findh(ss);
                s[i] = v;
                ss[i] = v;
                childrenvalue.push(chv);
            }
        }
        let r =Math.trunc(Math.random() * (parseInt(rn)*parseInt(rn))) ;
        let nextst = childrenvalue[r] ;
       // document.getElementById('poq1').innerText =;
        let flage =0;
        let de =pv- nextst;
        if (nextst < pv) {

            for (let i1 = 0; i1 < parseInt(rn, 10); i1++)
            {
                for (let ii2 = 0; ii2 < parseInt(rn, 10); ii2++) {
                    if (childrenvalue[ii2 + parseInt(rn, 10) * i1] === nextst && flage===0) {
                        currst[i1] = ii2;
                        flage=1;

                    }
                }
                //       document.getElementById('poq').innerText = document.getElementById('poq').innerText + "______";
            }
            if (findh(bestst) > nextst)
            {
                t=t+1;

                bestst = currst;
                s1[t]=currst.toString();
                    }
        } else {

let vli=Math.exp(-1 * de / T) > Math.random() * (1);

            if (vli) {
                for (let i1 = 0; i1 < parseInt(rn, 10); i1++)
                {
                for (let ii2 = 0; ii2 < parseInt(rn, 10); ii2++) {
                    if (childrenvalue[ii2 + parseInt(rn, 10) * i1] === nextst && flage === 0) {
                        currst[i1] = ii2;
                        flage = 1;

                    }
                }

            }
         }
        }
        array22[t-1]=childrenvalue.toString();
    }

s= bestst;
    document.getElementById('poq1').innerText = document.getElementById('poq1').innerText +s1.length ;
}

function DESIGN() {
    let color1= document.getElementById('color1').checked;
    let color2=document.getElementById('color2').checked;
    let queen2= document.getElementById('queen1').checked;
    let queen1=document.getElementById('queen2').checked;
    let queen3= document.getElementById('queen3').checked;
    if (queen1)
    {
        queend="fa-solid fa-crown";
    }
    if (queen2)
    {
        queend="fa-solid fa-star";
    }

    if (queen3)
    {
        queend="fa-solid fa-ghost";
    }
    if (color1)
    {
        evenv= "#2d969b";
        oddv ="#ffb946"  ;
        qunv="#c9ff37";
    }

    if (color2)
    { evenv="#A5236EFF";
        oddv="#f8f533";
        qunv="#89A3FFB5";

    }
    time = (document.getElementById('time').value/100);
    let rn = document.getElementById('vn').value;
    for (var rr = 0; rr < parseInt(rn, 10); rr++) {
        newpalce = Math.trunc(Math.random() * (parseInt(rn)));
        s.push(newpalce);

    }
    // s1[t]=s;

    start1("game" , 0 );
    start1("game2" , 64 );
}

function start() {
    let hill1= document.getElementById('hill').checked;
    let sim=document.getElementById('sm-an').checked;
   // addqune(s) ;
   //  addva(array2);
    if (hill1)
    {

        hill() ;
    }
    if (sim)
    {let hill1= document.getElementById('timp').value;
        let sim=document.getElementById('timpmin').value;
        simulatedAnnealing(hill1 , sim);
    }

   printqun();

    // setTimeout(removequne, 4000);
    // setTimeout(setarray , 6000);
    // setTimeout(addqune , 8000);
    // setTimeout(removevale, 10000);
    // setTimeout(setarray2, 12000);
    // setTimeout(addva , 14000);


}
function printqun()
{let cont = 1 ;
    let rn = document.getElementById('vn').value;
    for (let r=0; r< s1.length ; r++) {

        setTimeout(removequne, (cont) * 1000*time);  //1  5.5
        // 0    rem -1000  set 1000         add - 4000
       // cont = cont + 0;
        setTimeout(() => {
            ss1 = s1[r].split(",");
            array2=array22[r].split(",");
            document.getElementById('poq').innerText = s1.length ;
        }, cont * 1000*time); //1.5  6
        //1000
        cont =cont+1;
        setTimeout(   random1, cont * 1000*time); //2.5  6.5
        cont =cont+parseInt(rn)+1;
        setTimeout(addqune, cont * 1000*time); //2.5  6.5
        cont = cont + 5;

    }


    setTimeout(() => {

        document.getElementById('poq1').innerText = "the best" ;
    } , cont *2000);


}
function  removevale()
{
    let c = 0 ;
    for (let i= parseInt(rn, 10); i < parseInt(rn, 10)*2; i++){

        for (let v=0 ; v < parseInt(rn, 10); v++){

            document.getElementById(i+""+v+"d2").innerText = "" ;
            c=c+1 ;

        }

    }

}

function addqune() {

  //  document.getElementById('poq').innerText = ss1[0]+"xx"+ss1[1]+ "rr"+ss1[2]+"tt"+ss1[3];
    let rn = document.getElementById('vn').value;
    for (let i = 0; i < parseInt(rn, 10); i++) {
        let ii = document.getElementById(i + "" + ss1[i] + "i3");
        ii.className = queend;
        ii.style.color = qunv;

        addva();
    }
}
let cc ;
function playAgain(){
    location.reload();
}
    function removequne() {
        let rn = document.getElementById('vn').value;
        for (let i=0 ; i < parseInt(rn, 10); i++){
            let ii = document.getElementById(i+""+ss1[i]+"i3");
            ii.className = " ";
            ii.style.color = qunv;

            removevale();
        }
        document.getElementById(cc).style.color = "#000000";

}


function random1() {
    let count = 1 ;
    let count1= 0 ;
    let rn = document.getElementById('vn').value;
    for (let ii1=0 ; ii1 < parseInt(rn, 10)*3; ii1++){
        let newpalce1 = Math.trunc(Math.random() * (parseInt(rn)));
        let newpalce2 = Math.trunc(Math.random() * (parseInt(rn)));

        setTimeout(() => {
            let ii = document.getElementById(newpalce1+""+newpalce2+"i3");
        ii.className = queend;
        ii.style.color = qunv;
        },  300*count); //1.5  6

        setTimeout(() => {
            let ii = document.getElementById(newpalce1+""+newpalce2+"i3");
            ii.className = "";
            ii.style.color = qunv;
        },  700*count); //1.5  6
        count=count+.25;

        count1++;
    }



}
function addva() {
let c = 0 ;
    let rn = document.getElementById('vn').value;
    let min =10000;

    for (let i= parseInt(rn, 10); i < parseInt(rn, 10)*2; i++){
        for (let v=0 ; v < parseInt(rn); v++){

            if ( min > array2[c])
            {

                min = array2[c];
                cc= i+""+v+"d2";
            }
            document.getElementById(i+""+v+"d2").innerText = array2[c] ;
            c=c+1 ;
        }
}

    document.getElementById(cc).style.color = "#990000FF";


}
let index =0;
function start1(n ,v ) {

    rn = document.getElementById('vn').value;

    placeofQueens = '';

    var numberArray = [];

    c = 10;

    for (var rr = 0; rr < parseInt(rn, 10); rr++) {
        // document.getElementById('poq') .innerText =placeofQueens;
        var di = document.createElement("div");
        di.className = "cellprefix";
        di.innerText = index+1;
        di.id = index+1; // 1
        di.style.width = "100px";
        di.style.height = "100px";
        document.getElementById(n).appendChild(di);

        for (var r = 0; r < parseInt(rn, 10); r++) {

            var div = document.createElement("div");

            if ((r + rr+v) % 2) {
                div.className = "gamecell";
                div.style.background = oddv;
            } else {
                div.className = "gamecell ";
                div.style.background = evenv;
            }
            div.style.width = "50px";
            div.style.height = "50px";
            div.id = index+""+r+"d2";
            document.getElementById(index+1).appendChild(div);

            if (v===0) {
                        var i = document.createElement("i");
                        i.id = index+""+r+"i3";
                        document.getElementById(index+""+r+"d2").appendChild(i);

                    }


            c = c + 1;
        }
        index=index+1;
    }

    // document.getElementById('poq').innerText = document.getElementById('poq').innerText+s ;
}


function findh(s)
{

    var rn  = document.getElementById('vn').value ;
    var h = 0 ;

    for(var i=0;i<parseInt(rn,10);i++)
    {


        xl=findkill(i , s[i] , s) ;


        h = h+ xl;

        console.log(h);
    }
    return h ;

}
function findkill (r , c , s)
{
    rn  = document.getElementById('vn').value ;
    var killing = 0 ;
    for(var row=r;row<parseInt(rn,10);row++)
    {
        if ( s[row] === c && row !==r) killing=killing+1 ;
    }

    for (var row2=r;row2<(parseInt(rn,10));row2++)
    {

        if ( s[row2] === c+(row2-r) && row2 !==r)
        {     killing=killing+1;
        }
    }
    for (var row3=r;row3<(parseInt(rn,10));row3++ )
    {
        if ( s[row3] === r+c-row3  && row3 !==r) killing=killing+1 ;
    }
    return killing;
}




let main = {

    variables: {
        turn: 'w',
        selectedpiece: '',
        highlighted: [],
        pieces: {
            w_king: {
                position: '5_1',
                img: '&#9812;',
                captured: false,
                moved: false,
                type: 'w_king'

            },
            w_queen: {
                position: '4_1',
                img: '&#9813;',
                captured: false,
                moved: false,
                type: 'w_queen'
            },
            w_bishop1: {
                position: '3_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_bishop2: {
                position: '6_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'w_bishop'
            },
            w_knight1: {
                position: '2_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_knight2: {
                position: '7_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'w_knight'
            },
            w_rook1: {
                position: '1_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_rook2: {
                position: '8_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'w_rook'
            },
            w_pawn1: {
                position: '1_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn2: {
                position: '2_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn3: {
                position: '3_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn4: {
                position: '4_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn5: {
                position: '5_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn6: {
                position: '6_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn7: {
                position: '7_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },
            w_pawn8: {
                position: '8_2',
                img: '&#9817;',
                captured: false,
                type: 'w_pawn',
                moved: false
            },

            b_king: {
                position: '5_8',
                img: '&#9818;',
                captured: false,
                moved: false,
                type: 'b_king'
            },
            b_queen: {
                position: '4_8',
                img: '&#9819;',
                captured: false,
                moved: false,
                type: 'b_queen'
            },
            b_bishop1: {
                position: '3_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_bishop2: {
                position: '6_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 'b_bishop'
            },
            b_knight1: {
                position: '2_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_knight2: {
                position: '7_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 'b_knight'
            },
            b_rook1: {
                position: '1_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_rook2: {
                position: '8_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 'b_rook'
            },
            b_pawn1: {
                position: '1_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn2: {
                position: '2_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn3: {
                position: '3_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn4: {
                position: '4_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn5: {
                position: '5_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn6: {
                position: '6_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn7: {
                position: '7_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            },
            b_pawn8: {
                position: '8_7',
                img: '&#9823;',
                captured: false,
                type: 'b_pawn',
                moved: false
            }

        }
    },

    methods: {
        gamesetup: function() {
            $('.gamecell').attr('chess', 'null');
            for (let gamepiece in main.variables.pieces) {
                $('#' + main.variables.pieces[gamepiece].position).html(main.variables.pieces[gamepiece].img);
                $('#' + main.variables.pieces[gamepiece].position).attr('chess', gamepiece);
            }
        },

        moveoptions: function(selectedpiece) {

            let position = { x: '', y: '' };
            position.x = main.variables.pieces[selectedpiece].position.split('_')[0];
            position.y = main.variables.pieces[selectedpiece].position.split('_')[1];

            // these options need to be var instead of let
            var options = [];
            var coordinates = [];
            var startpoint = main.variables.pieces[selectedpiece].position;
            var c1,c2,c3,c4,c5,c6,c7,c8;

            if (main.variables.highlighted.length != 0) {
                main.methods.togglehighlight(main.variables.highlighted);
            }

            switch (main.variables.pieces[selectedpiece].type) {
                case 'w_king':

                    if ($('#6_1').attr('chess') == 'null' && $('#7_1').attr('chess') == 'null' && main.variables.pieces['w_king'].moved == false && main.variables.pieces['w_rook2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 },{x: 2, y: 0}].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_king':

                    if ($('#6_8').attr('chess') == 'null' && $('#7_8').attr('chess') == 'null' && main.variables.pieces['b_king'].moved == false && main.variables.pieces['b_rook2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 },{x: 2, y: 0}].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }
                    /*
                      coordinates = [{ x: 1, y: 1 },{ x: 1, y: 0 },{ x: 1, y: -1 },{ x: 0, y: -1 },{ x: -1, y: -1 },{ x: -1, y: 0 },{ x: -1, y: 1 },{ x: 0, y: 1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                      });
                    */
                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'w_queen':

                    c1 = main.methods.w_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.w_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.w_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.w_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
                    c5 = main.methods.w_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c6 = main.methods.w_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c7 = main.methods.w_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c8 = main.methods.w_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_queen':

                    c1 = main.methods.b_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.b_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.b_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.b_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);
                    c5 = main.methods.b_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c6 = main.methods.b_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c7 = main.methods.b_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c8 = main.methods.b_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case 'w_bishop':

                    c1 = main.methods.w_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.w_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.w_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.w_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case 'b_bishop':

                    c1 = main.methods.b_options(position,[{x: 1, y: 1},{x: 2, y: 2},{x: 3, y: 3},{x: 4, y: 4},{x: 5, y: 5},{x: 6, y: 6},{x: 7, y: 7}]);
                    c2 = main.methods.b_options(position,[{x: 1, y: -1},{x: 2, y: -2},{x: 3, y: -3},{x: 4, y: -4},{x: 5, y: -5},{x: 6, y: -6},{x: 7, y: -7}]);
                    c3 = main.methods.b_options(position,[{x: -1, y: 1},{x: -2, y: 2},{x: -3, y: 3},{x: -4, y: 4},{x: -5, y: 5},{x: -6, y: 6},{x: -7, y: 7}]);
                    c4 = main.methods.b_options(position,[{x: -1, y: -1},{x: -2, y: -2},{x: -3, y: -3},{x: -4, y: -4},{x: -5, y: -5},{x: -6, y: -6},{x: -7, y: -7}]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
                    break;
                case 'w_knight':

                    coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_knight':

                    coordinates = [{ x: -1, y: 2 },{ x: 1, y: 2 },{ x: 1, y: -2 },{ x: -1, y: -2 },{ x: 2, y: 1 },{ x: 2, y: -1 },{ x: -2, y: -1 },{ x: -2, y: 1 }].map(function(val){
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'w_rook':

                    c1 = main.methods.w_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c2 = main.methods.w_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c3 = main.methods.w_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c4 = main.methods.w_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_rook':

                    c1 = main.methods.b_options(position,[{x: 1, y: 0},{x: 2, y: 0},{x: 3, y: 0},{x: 4, y: 0},{x: 5, y: 0},{x: 6, y: 0},{x: 7, y: 0}]);
                    c2 = main.methods.b_options(position,[{x: 0, y: 1},{x: 0, y: 2},{x: 0, y: 3},{x: 0, y: 4},{x: 0, y: 5},{x: 0, y: 6},{x: 0, y: 7}]);
                    c3 = main.methods.b_options(position,[{x: -1, y: 0},{x: -2, y: 0},{x: -3, y: 0},{x: -4, y: 0},{x: -5, y: 0},{x: -6, y: 0},{x: -7, y: 0}]);
                    c4 = main.methods.b_options(position,[{x: 0, y: -1},{x: 0, y: -2},{x: 0, y: -3},{x: 0, y: -4},{x: 0, y: -5},{x: 0, y: -6},{x: 0, y: -7}]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'w_pawn':

                    if (main.variables.pieces[selectedpiece].moved == false) {

                        coordinates = [{ x: 0, y: 1 },{ x: 0, y: 2 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }
                    else if (main.variables.pieces[selectedpiece].moved == true) {

                        coordinates = [{ x: 0, y: 1 },{ x: 1, y: 1 },{ x: -1, y: 1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case 'b_pawn':

                    // calculate pawn options
                    if (main.variables.pieces[selectedpiece].moved == false) {

                        coordinates = [{ x: 0, y: -1 },{ x: 0, y: -2 },{ x: 1, y: -1 },{ x: -1, y: -1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }
                    else if (main.variables.pieces[selectedpiece].moved == true) {

                        coordinates = [{ x: 0, y: -1 },{ x: 1, y: -1 },{ x: -1, y: -1 }].map(function(val){
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.pieces[selectedpiece].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

            }
        },

        options: function(startpoint, coordinates, piecetype) { // first check if any of the possible coordinates is out of bounds;

            coordinates = coordinates.filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
                    return val;
                }
            });

            switch (piecetype) {

                case 'w_king':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
                    });

                    break;
                case 'b_king':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'w');
                    });

                    break;
                case 'w_knight':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'b');
                    });

                    break;

                case 'b_knight':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('chess') == 'null' || ($('#' + val).attr('chess')).slice(0,1) == 'w');
                    });

                    break;

                case 'w_pawn':

                    coordinates = coordinates.filter(val => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split('_');

                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // if the coordinate is on either side of the center, check if it has an opponent piece on it;
                            return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'b'); // return coordinates with opponent pieces on them
                        } else { // else if the coordinate is in the center;
                            if (coordinate[1] == (parseInt(sp.y) + 2) && $('#' + sp.x + '_' + (parseInt(sp.y) + 1)).attr('chess') != 'null'){
                                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
                            } else {
                                return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
                            }
                        }

                    });

                    break;

                case 'b_pawn':

                    coordinates = coordinates.filter(val => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split('_');

                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x){ // if the coordinate is on either side of the center, check if it has an opponent piece on it;
                            return ($('#' + val).attr('chess') != 'null' && ($('#' + val).attr('chess')).slice(0,1) == 'w'); // return coordinates with opponent pieces on them
                        } else { // else if the coordinate is in the center;
                            if (coordinate[1] == (parseInt(sp.y) - 2) && $('#' + sp.x + '_' + (parseInt(sp.y) - 1)).attr('chess') != 'null'){
                                // do nothing if this is the pawns first move, and there is a piece in front of the 2nd coordinate;
                            } else {
                                return ($('#' + val).attr('chess') == 'null'); // otherwise return the coordinate if there is no chess piece on it;
                            }
                        }
                    });

                    break;
            }

            return coordinates;
        },

        w_options: function (position,coordinates) {

            let flag = false;

            coordinates = coordinates.map(function(val){ // convert the x,y into actual grid id coordinates;
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
                    return val;
                }
            }).filter(val => { // algorithm to determine line-of-sight movement options for bishop/rook/queen;
                if (flag == false){
                    if ($('#' + val).attr('chess') == 'null'){
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0,1) == 'b') {
                        flag = true;
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0,1) == 'w') {
                        console.log(val+'-3')
                        flag = true;
                    }
                }
            });

            return coordinates;

        },

        b_options: function (position,coordinates) {

            let flag = false;

            coordinates = coordinates.map(function(val){ // convert the x,y into actual grid id coordinates;
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) { // if it is not out of bounds, return the coordinate;
                    return val;
                }
            }).filter(val => { // algorithm to determine line-of-sight movement options for bishop/rook/queen;
                if (flag == false){
                    if ($('#' + val).attr('chess') == 'null'){
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0,1) == 'w') {
                        flag = true;
                        return val;
                    } else if (($('#' + val).attr('chess')).slice(0,1) == 'b') {
                        flag = true;
                    }
                }
            });

            return coordinates;

        },

        capture: function (target) {
            let selectedpiece = {
                name: $('#' + main.variables.selectedpiece).attr('chess'),
                id: main.variables.selectedpiece
            };


            //new cell
            $('#' + target.id).html(main.variables.pieces[selectedpiece.name].img);
            $('#' + target.id).attr('chess',selectedpiece.name);
            //old cell
            $('#' + selectedpiece.id).html('');
            $('#' + selectedpiece.id).attr('chess','null');
            //moved piece
            main.variables.pieces[selectedpiece.name].position = target.id;
            main.variables.pieces[selectedpiece.name].moved = true;
            // captured piece
            main.variables.pieces[target.name].captured = true;
            /*
            // toggle highlighted coordinates
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;
            // set the selected piece to '' again
            main.variables.selectedpiece = '';
            */

        },

        move: function (target) {

            let selectedpiece = $('#' + main.variables.selectedpiece).attr('chess');

            // new cell
            $('#' + target.id).html(main.variables.pieces[selectedpiece].img);
            $('#' + target.id).attr('chess',selectedpiece);
            // old cell
            $('#' + main.variables.selectedpiece).html('');
            $('#' + main.variables.selectedpiece).attr('chess','null');
            main.variables.pieces[selectedpiece].position = target.id;
            main.variables.pieces[selectedpiece].moved = true;

            /*
            // toggle highlighted coordinates
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;
            // set the selected piece to '' again
            main.variables.selectedpiece = '';
            */
        },

        endturn: function(){

            if (main.variables.turn == 'w') {
                main.variables.turn = 'b';

                // toggle highlighted coordinates
                main.methods.togglehighlight(main.variables.highlighted);
                main.variables.highlighted.length = 0;
                // set the selected piece to '' again
                main.variables.selectedpiece = '';

                $('#turn').html("It's Blacks Turn");

                $('#turn').addClass('turnhighlight');
                window.setTimeout(function(){
                    $('#turn').removeClass('turnhighlight');
                }, 1500);

            } else if (main.variables.turn = 'b'){
                main.variables.turn = 'w';

                // toggle highlighted coordinates
                main.methods.togglehighlight(main.variables.highlighted);
                main.variables.highlighted.length = 0;
                // set the selected piece to '' again
                main.variables.selectedpiece = '';

                $('#turn').html("It's Whites Turn");

                $('#turn').addClass('turnhighlight');
                window.setTimeout(function(){
                    $('#turn').removeClass('turnhighlight');
                }, 1500);

            }

        },

        togglehighlight: function(options) {
            options.forEach(function(element, index, array) {
                $('#' + element).toggleClass("green shake-little neongreen_txt");
            });
        },

    }
};

$(document).ready(function() {
    main.methods.gamesetup();

    $('.gamecell').click(function(e) {

        var selectedpiece = {
            name: '',
            id: main.variables.selectedpiece
        };

        if (main.variables.selectedpiece == ''){
            selectedpiece.name = $('#' + e.target.id).attr('chess');
        } else {
            selectedpiece.name = $('#' + main.variables.selectedpiece).attr('chess');
        }

        var target = {
            name: $(this).attr('chess'),
            id: e.target.id
        };

        if (main.variables.selectedpiece == '' && target.name.slice(0,1) == main.variables.turn) { // show options

            // moveoptions
            main.variables.selectedpiece = e.target.id;
            main.methods.moveoptions($(this).attr('chess'));

        } else if (main.variables.selectedpiece !='' && target.name == 'null') { // move selected piece piece

            if (selectedpiece.name == 'w_king' || selectedpiece.name == 'b_king'){

                let t0 = (selectedpiece.name = 'w_king');
                let t1 = (selectedpiece.name = 'b_king');
                let t2 = (main.variables.pieces[selectedpiece.name].moved == false);
                let t3 = (main.variables.pieces['b_rook2'].moved == false);
                let t4 = (main.variables.pieces['w_rook2'].moved == false);
                let t5 = (target.id == '7_8');
                let t6 = (target.id == '7_1');

                if (t0 && t2 && t4 &&t6){ // castle w_king

                    let k_position = '5_1';
                    let k_target = '7_1';
                    let r_position = '8_1';
                    let r_target = '6_1';

                    main.variables.pieces['w_king'].position = '7_1';
                    main.variables.pieces['w_king'].moved = true;
                    $('#'+k_position).html('');
                    $('#'+k_position).attr('chess','null');
                    $('#'+k_target).html(main.variables.pieces['w_king'].img);
                    $('#'+k_target).attr('chess','w_king');

                    main.variables.pieces['w_rook2'].position = '6_1';
                    main.variables.pieces['w_rook2'].moved = true;
                    $('#'+r_position).html('');
                    $('#'+r_position).attr('chess','null');
                    $('#'+r_target).html(main.variables.pieces['w_rook2'].img);
                    $('#'+r_target).attr('chess','w_rook2');

                    main.methods.endturn();

                } else if (t1 && t2 && t3 && t5){ // castle b_king

                    let k_position = '5_8';
                    let k_target = '7_8';
                    let r_position = '8_8';
                    let r_target = '6_8';

                    // w_king
                    main.variables.pieces['b_king'].position = '7_8';
                    main.variables.pieces['b_king'].moved = true;
                    $('#'+k_position).html('');
                    $('#'+k_position).attr('chess','null');
                    $('#'+k_target).html(main.variables.pieces['b_king'].img);
                    $('#'+k_target).attr('chess','b_king');

                    main.variables.pieces['b_rook2'].position = '6_8';
                    main.variables.pieces['b_rook2'].moved = true;
                    $('#'+r_position).html('');
                    $('#'+r_position).attr('chess','null');
                    $('#'+r_target).html(main.variables.pieces['b_rook2'].img);
                    $('#'+r_target).attr('chess','b_rook2');

                    main.methods.endturn();

                } else { // move selectedpiece
                    main.methods.move(target);
                    main.methods.endturn();
                }

            } else { // else if selecedpiece.name is not white/black king than move

                main.methods.move(target);
                main.methods.endturn();

            }

        } else if (main.variables.selectedpiece !='' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0,1) != target.name.slice(0,1)){ // capture a piece

            if (selectedpiece.id != target.id && main.variables.highlighted.indexOf(target.id) != (-1)) { // if it's not trying to capture pieces not in its movement range

                // capture
                main.methods.capture(target)
                main.methods.endturn();

            }

        } else if (main.variables.selectedpiece !='' && target.name != 'null' && target.id != selectedpiece.id && selectedpiece.name.slice(0,1) == target.name.slice(0,1)){ // toggle move options

            // toggle
            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;

            main.variables.selectedpiece = target.id;
            main.methods.moveoptions(target.name);

        }

    });

    $('body').contextmenu(function(e) {
        e.preventDefault();
    });

});