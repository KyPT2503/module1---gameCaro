let boxList=[];
let status='X';
/*let perBox='<div class="box"></div>'*/
function newGame()
{
    let content='';
    for(let i=0;i<20;i++)
    {
        let boxRow=[];
        for(let j=0;j<20;j++)
        {
            let newBox= new Box(30*j,30*i);
            boxRow.push(newBox);
            content+='<div class="box" style="position:absolute;top:'+newBox.y+'px;left:'+newBox.x+'px;"></div>';
        }
        boxList.push(boxRow);
    }
    document.getElementById('for-box').innerHTML=content;
    console.log('Restarted !');
}

function boxClick()
{
    console.log('clicked !');
    let xMouse,yMouse,i,j;
    document.onmousedown=function(event)
    {
        xMouse=event.pageX-8;
        yMouse=event.pageY-50;
        i=Math.floor(yMouse/30);
        j=Math.floor(xMouse/30);
        console.log('('+xMouse+';'+yMouse+')');
        console.log('('+i+';'+j+')');
        if(boxList[i][j].getStatus()=='')
        {
            boxList[i][j].setStatus(status);
            document.getElementById('for-box').innerHTML+='<div class="box" style="position:absolute;left:'+(j*30)+'px;top:'+(i*30)+'px;">'+status+'</div>';
            checkEnd();
            if(status=='X') status='O';
            else status='X';
        }
    }
}

function checkEnd()
{
    for(let i=0;i<boxList.length;i++)
    {
        let arr='',arr_='',arr_45_fromLeft='',arr_45_fromTop='';
        for(let j=0;j<boxList[i].length;j++)
        {
            arr+=boxList[i][j].getStatus();
            arr_+=boxList[j][i].getStatus();
            if(i+j<20)
            {
                arr_45_fromLeft+=boxList[i+j][j].getStatus();
                arr_45_fromTop+=boxList[j][i+j].getStatus();
            }
        }
        if(arr.indexOf('XXXXX') != -1 || arr_.indexOf('XXXXX') != -1 ||arr_45_fromTop.indexOf('XXXXX') != -1 ||arr_45_fromLeft.indexOf('XXXXX') != -1) document.getElementById('end-game').innerText=' X Win !';
        if(arr.indexOf('OOOOO') != -1 || arr_.indexOf('OOOOO') != -1 ||arr_45_fromTop.indexOf('OOOOO') != -1 ||arr_45_fromLeft.indexOf('OOOOO') != -1) document.getElementById('end-game').innerText=' O Win !';
    }
    for(let i=0;i<20;i++)
    {
        let arr_45_toTop='';
        for(let j=0;j<=i;j++)
        {
            arr_45_toTop+=boxList[i-j][j].getStatus();
        }
        if(arr_45_toTop.indexOf('XXXXX') != -1) document.getElementById('end-game').innerText=' X Win !';
        if(arr_45_toTop.indexOf('OOOOO') != -1) document.getElementById('end-game').innerText=' O Win !';
    }
    for(let j=0;j<20;j++)
    {
        let arr_45_toRight='';
        for(let i=19;i>=j;i--)
        {
            arr_45_toRight+=boxList[i][j+19-i].getStatus();
        }
        if(arr_45_toRight.indexOf('XXXXX') != -1) document.getElementById('end-game').innerText=' X Win !';
        if(arr_45_toRight.indexOf('OOOOO') != -1) document.getElementById('end-game').innerText=' O Win !';
    }
}





