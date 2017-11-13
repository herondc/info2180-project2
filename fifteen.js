// note to self remember to  check over code//
// note to self ask for assistance from class mates, no need to suffer alone//
// note to self remember to add extra features - if it doesnt work leave it alone and focus on code - timer//
// I will have to to set a function that can determine when the puzzle is solved//
// note to self remember to know exactly how each line function//
window.onload = function(){
    var puzzle = document.getElementById("puzzlearea");
    var pieces = puzzle.children;
    var toppos = 0;
    var leftpos = 0;
    var leftbg = 0;
    var topbg = 0;
    var emptyTop = 300;
    var emptyLeft = 300;
    var prevtop;
    var prevleft;
    var shufflePiece;
    var shuffles = [];
    var shuffleTimes = 1000;
    // var starttime = 0;
    
    for(var i=0; i < pieces.length; i++){
        pieces[i].className = "puzzlepiece";
        pieces[i].style.top =  toppos + "px";
        pieces[i].style.left = leftpos + "px";
        pieces[i].style.backgroundPosition = leftbg + "px " + topbg + "px";
        pieces[i].onclick= move;
        pieces[i].onmouseover= movable;

        if(leftpos < 300){
            leftpos = leftpos + 100;
            leftbg = leftbg - 100;
        }
        else{
            leftpos = 0;
            leftbg = 0;
            toppos = toppos + 100;
            topbg = topbg - 100;
        }   
    }
//function responsible for moving puzzle pieces into blank spaces
    function move(){
        prevtop= parseInt(this.style.top);
        prevleft = parseInt(this.style.left);
        if (prevtop== emptyTop && prevleft == (emptyLeft-100) || prevtop== emptyTop && prevleft == (emptyLeft+100) || prevtop== (emptyTop-100) && prevleft == emptyLeft || prevtop== (emptyTop+100) && prevleft == emptyLeft){
            this.style.top = emptyTop + "px";
            this.style.left = emptyLeft + "px";
            emptyTop = prevtop;
            emptyLeft = prevleft;
        }
    }
//function responsible for identifying pieces that can be moved
    function movable(){
        prevtop= parseInt(this.style.top);
        prevleft = parseInt(this.style.left);
        if (prevtop== emptyTop && prevleft == (emptyLeft-100) || prevtop== emptyTop && prevleft == (emptyLeft+100) || prevtop== (emptyTop-100) && prevleft == emptyLeft || prevtop== (emptyTop+100) && prevleft == emptyLeft){
            $(this).addClass('movablepiece');   
        }
        else{
            $(this).removeClass("movablepiece");
        }
    }
//function responsible for shuffling the puzzle
    function Shuffle(){
        for(var c = 0; c < shuffleTimes; c++){
            var choice = Math.floor (Math.random () * 4);
            console.log(choice);
            if ( choice == 0) {
                (getStyle((emptyTop-100)+"px", emptyLeft+"px"))|| getStyle((emptyTop+100)+"px", emptyLeft+"px");
                prevtop= parseInt(shufflePiece.style.top);
                prevleft = parseInt(shufflePiece.style.left);
                shufflePiece.style.top = emptyTop + "px";
                shufflePiece.style.left = emptyLeft + "px";
                emptyTop = prevtop;
                emptyLeft = prevleft;
            }
            else if ( choice == 1) {
                (getStyle(emptyTop+"px", (emptyLeft-100)+"px")) || getStyle(emptyTop+"px", (emptyLeft + 100)+"px");
                prevtop= parseInt(shufflePiece.style.top);
                prevleft = parseInt(shufflePiece.style.left);
                shufflePiece.style.top = emptyTop + "px";
                shufflePiece.style.left = emptyLeft + "px";
                emptyTop = prevtop;
                emptyLeft = prevleft;
            }
            else if ( choice == 2) {
                getStyle((emptyTop+100)+"px", emptyLeft+"px") || (getStyle((emptyTop-100)+"px", emptyLeft+"px"));
                prevtop= parseInt(shufflePiece.style.top);
                prevleft = parseInt(shufflePiece.style.left);
                shufflePiece.style.top = emptyTop + "px";
                shufflePiece.style.left = emptyLeft + "px";
                emptyTop = prevtop;
                emptyLeft = prevleft;
            }
            else {
                getStyle(emptyTop+"px", (emptyLeft + 100)+"px") || (getStyle(emptyTop+"px", (emptyLeft-100)+"px"));
                prevtop= parseInt(shufflePiece.style.top);
                prevleft = parseInt(shufflePiece.style.left);
                shufflePiece.style.top = emptyTop + "px";
                shufflePiece.style.left = emptyLeft + "px";
                emptyTop = prevtop;
                emptyLeft = prevleft;
            }
        }   
    }
    function getStyle(top, left){
        for(var i =0; i < pieces.length; i++){
            if(pieces[i].style.top==top && pieces[i].style.left==left){
                shufflePiece = pieces[i];
                return shufflePiece;        
            }
        }
    }
    document.getElementById("controls").onclick = Shuffle; 
    //   function puzzlesolved () {


  // if 
  //   }
}