let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    data = null;

canvas.setAttribute('id','1dCanvas');
$('body')[0].append(canvas);
$('body p')[$('body p').length-1].remove();
$.get('./assets/images/tags.csv').done(function(e){
    data = Papa.parse(e,{
        delimiter: "",	// auto-detect
        newline: "",	// auto-detect
        quoteChar: '"',
        header: true,
        dynamicTyping: false,
        preview: 0,
        encoding: "",
        worker: false,
        comments: false,
        step: undefined,
        complete: undefined,
        error: undefined,
        download: false,
        skipEmptyLines: false,
        chunk: undefined,
        fastMode: undefined,
        beforeFirstChunk: undefined,
        withCredentials: undefined
    }).data;
    showImages();
})

function showImages(){
    let maxH = window.innerHeight, 
        maxW = window.innerWidth,
        locationOfImages = {};
    data.forEach(e => {
        e.height = Number(e.height);
        e.width = Number(e.width);
    });
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let x = 0,
        y = 0,
        current = { top:0,
                    left:0
                };
    data.forEach((e,i) => {
        let image = new Image(e.width, e.height);
        image.src = './assets/images/DSC_' + e.name + '.jpg';
        if((current.left + (e.width/30)) > maxW){
            current.left = 0;
            current.top += e.height/30;
        }
        image.onload = function(){
            ctx.drawImage(this, 0,0,e.width,e.height,
                current.left + 20,  //x location
                current.top  + 20,  //y location
                e.width/30, e.height/30);
        };
        current.left += e.width / 30;
    }); 
}