s=document.getElementById('poq').value ;
 window.print(findh(s)) ;
function findh ( s)
{
    rn  = document.getElementById('vn').value ;
var h = 0 ;
    for (var i=0 ; i < rn ; i++)
  {
      h = h+ findkill(i , s[i]) ;
  }
    return h/2 ;

}
function findkill (r , c , s)
{
    var killing = 0 ;
   for (var row=0 ; row < rn ; row++)
   {
       if ( s[row] === c && row !==r) killing++ ;
   }
    for (var row=0 ; row < rn-r-c ; row++)
    {
        if ( s[row+r] === c+row  && row !==r) killing++ ;
    }
    for (var row=0 ; row < r+c+1 ; row++)
    {
        if ( s[row+r] === c-row  && row !==r) killing++ ;
    }
return killing;
}