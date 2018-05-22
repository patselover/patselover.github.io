$('#adventures')[0].addEventListener('click',function(){
    if($('container').length>=3){
        $('container')[1].remove();
        addTarget(this.id);
    }
    else{
        $('adventures')[0].remove();
        addHTML();
    }
});

$('#about')[0].addEventListener('click',function(){
    if($('container').length<3)
        addHTML();
});

$('#projects')[0].addEventListener('click',function(){
    if($('container').length>=3){
        $('container')[1].remove();
        addTarget(this.id);
    }
    else{
        $('projects')[0].remove();
        addHTML();
    }
});

$('#gallery')[0].addEventListener('click',function(){
    if($('container').length>=3){
        $('container')[1].remove();
        addTarget(this.id);
    }
    else{
        $('gallery')[0].remove();
        addHTML();
    }
});

function addHTML(){
let html= '<container><div class="bgimg-1"></div><div id="about" style="color: #777;background-color:white;text-align:center;padding:10px 80px;text-align: justify;"><h3 style="text-align:center;">About Me</h3><p>Hello! My name is Pat and this is my website. I am a senior at Santa Clara University and this little project is somethingI made to reflect my Computer Science major. You can see my photography I do on the side, my resume and any projects I have uploaded!</p></div><div class="bgimg-2"></div></container>';
    $('#header').append(html);
};

function addTarget(element){
    if (element == 'gallery') {
        $.get('./assets/images/tags.csv').done(function(e){
            let data = Papa.parse(e,{
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
            showImages(data);
        });
    }
    if (element == 'projects') {

    }
    else{

    }
};

function showImages(data){
    let image = [],
        targetHTML = '<gallery>',
        templateHTML = '<img class="image" src="/assets/images/DSC_',
        divHTMLF = '<div class="tile" photo_id="galleryimage-',
        divHTMLB = '</div>',
        aHTMLF = '<a href="http://www.patrickselover.com/assets/images/DSC_',
        aHTMLB = '</a>';
    data.forEach((e,i) => {
        console.log('hello');
        targetHTML += divHTMLF + e.name + '">' + aHTMLF + e.name + '.jpg">' + templateHTML + e.name + '.jpg">' + aHTMLB + divHTMLB;
    });
    targetHTML += '</gallery>';
    $('#header').append(targetHTML);
    
}

function sortLandscape(data){
    let landscape = {},
        portrait = {};
    data.forEach(e => {
        if(e.width > e.height)
            landscape[e.width] = e.name;
        else
            portrait[e.width] = e.name;
    });
    placeImages(landscape,portrait,data);
}

function placeImages(landscape,portrait,data){
    let totalWidth = 10000,
        totalHeight = 10000,
        buff = 15;
    data.forEach(e=>{
        
    });
}

// let canvas = document.createElement('canvas'),
//     ctx = canvas.getContext('2d'),
//     data = null;

// canvas.setAttribute('id','1dCanvas');
// $('body')[0].append(canvas);
// $('body p')[$('body p').length-1].remove();
// $.get('./assets/images/tags.csv').done(function(e){
//     data = Papa.parse(e,{
//         delimiter: "",	// auto-detect
//         newline: "",	// auto-detect
//         quoteChar: '"',
//         header: true,
//         dynamicTyping: false,
//         preview: 0,
//         encoding: "",
//         worker: false,
//         comments: false,
//         step: undefined,
//         complete: undefined,
//         error: undefined,
//         download: false,
//         skipEmptyLines: false,
//         chunk: undefined,
//         fastMode: undefined,
//         beforeFirstChunk: undefined,
//         withCredentials: undefined
//     }).data;
//     showImages();
// })

// function showImages(){
//     let maxH = window.innerHeight, 
//         maxW = window.innerWidth,
//         locationOfImages = {};
//     data.forEach(e => {
//         e.height = Number(e.height);
//         e.width = Number(e.width);
//     });
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
//     let x = 0,
//         y = 0,
//         current = { top:0,
//                     left:0
//                 };
//     data.forEach((e,i) => {
//         let image = new Image(e.width, e.height);
//         image.src = './assets/images/DSC_' + e.name + '.jpg';
//         if((current.left + (e.width/30)) > maxW){
//             current.left = 0;
//             current.top += e.height/30;
//         }
//         image.onload = function(){
//             ctx.drawImage(this, 0,0,e.width,e.height,
//                 current.left + 20,  //x location
//                 current.top  + 20,  //y location
//                 e.width/30, e.height/30);
//         };
//         current.left += e.width / 30;
//     }); 
// }