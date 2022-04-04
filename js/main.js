var canvas,ctx;
var mouseX,mouseY,isMouseDown= false;
var touchX,touchY;

/* fucnction for interacting with canvas */

function init(){
    canvas = document.getElementById('sketchpad');

    
    ctx = canvas.getContext('2d'); // '2d' means two dimensional rendering context on canvas
    ctx.fillStyle = "white"; // now we will fill ctx background with black
    ctx.fillRect(0,0,canvas.width,canvas.height); // fill the rect
    if(ctx){
        //if mousedown than call function sketchPad_mouseDown.false means bubble phase
        canvas.addEventListener('mousedown', sketchpad_mouseDown, false);          
        canvas.addEventListener('mousemove', sketchpad_mouseMove, false);          
        window.addEventListener('mouseup', sketchpad_mouseUp, false);           
        canvas.addEventListener('touchstart', sketchpad_touchStart,false);
        canvas.addEventListener('touchmove', sketchpad_touchMove, false); 
    }
}

/* now to enable drawing on canvas we define draw function */

function drawWithMouse(ctx,x,y,isDown){
    if(isDown){   
        ctx.beginPath(); //to inform canvas, user is about to draw
        ctx.strokeStyle = "red"; //to set background color of canvas
        ctx.lineWidth = '20'; //set width of line      
        
        // .linejoin() : set connection between two line, 
        // .lineCap() : to set end of line         
        ctx.lineJoin = ctx.lineCap = 'round'; 
        ctx.moveTo(lastX, lastY); //it tells where to start drawing line       
        ctx.lineTo(x,y); //draw line from start to current position of pointer
        ctx.closePath(); //drawing is complete   
        ctx.stroke(); //to paint the line drawn with some pixel   
    }   
   // else mousedown than start posi is curr position  
  lastX = x; 
  lastY = y; 
}


/*Event handlers*/

/* when mouse is down it will call draw function */
function sketchpad_mouseDown() {
    isMouseDown = true;    
    drawWithMouse(ctx,mouseX,mouseY,false);
}

/* when mouse is released it set's mousedown back to false and start prediction */
function sketchpad_mouseUp() {    
    isMouseDown = false;
    console.log("Released")
}

/* when mouse is moved in either direction it gets current position of mouse from getMousePos(e)
if mouseDown than call draw */

function sketchpad_mouseMove(e) {
    getMousePos(e);
    if (isMouseDown) {
        drawWithMouse(ctx,mouseX,mouseY,true);
    }
}

/* finds current position of pointer
when mouse event is triggered, offset x,offset y -> return x,y cordinate of mouse
and layer x,layer y -> return horizantak and vertical cordinates relative to current layer */

function getMousePos(e) {    
    if (!e)        
      var e = event;     
    if (e.offsetX) {        
      mouseX = e.offsetX;        
      mouseY = e.offsetY;    
    }    
    else if (e.layerX) {        
      mouseX = e.layerX;        
      mouseY = e.layerY;    
    } 
}


/* touch event handler */

/* when user touches the touchpad it calls draw func with false to note position not to draw */
function sketchpad_touchStart() {     
    getTouchPos();    
    drawWithMouse(ctx,touchX,touchY,false);    
    event.preventDefault(); //this prevents scrolling of screen when user draws
}

/* when user drags in sketchpad it calls draw with true flag to enable drawing */

function sketchpad_touchMove(e) {     
    getTouchPos(e);    
    drawWithMouse(ctx,touchX,touchY,true);    
    event.preventDefault();
}

/* it is used to find point in the sketchpad where user has touched */

function getTouchPos(e) {    
    if (!e)        
    var e = event;     
    if(e.touches) {   
      if (e.touches.length == 1) {  //its length is used to find  how many fingers has touched               
        var touch = e.touches[0];            
        touchX=touch.pageX-touch.target.offsetLeft;               
        touchY=touch.pageY-touch.target.offsetTop;        
      }
    }
}

/* clearing the sketchpad */
function clear(){  
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
    ctx.fillStyle = "white"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('clear_button').addEventListener("click", clear);


//integrating  CANVAS  with CNN MODEL


//loading the model

//the base url of website in which our 
//web app is deployed is obtained from window.location.origin
//the json file is loaded using async function

var base_url = window.location.origin;
let model;
async function loadModel(){  
    console.log("model loading...");  
    model = await tf.loadLayersModel("https://maneprajakta.github.io/Digit_Recognition_Web_App/models/model.json")
    console.log("model loaded..");
};

//preprocessing model

/*
the digit sketched is passed as image to model
so as to predict the value of it

*/

function preprocessCanvas(image) { 
   
    //resizing the input image to target size of (1, 28, 28) 
    //tf.browser.fromPixels() method, to create a tensor that will flow into the first layer of the model
    //tf.image.resizeNearestNeighbor() function resizes a batch of 3D images to a new shape
    //tf.mean() function is used to compute the mean of elements across the dimensions of the tensor
    //tf.toFloat() function casts the array to type float
    //The tensor.div() function is used to divide the array or tensor by the maximum RGB value(255)
    let tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([28, 28]).mean(2).expandDims(2).expandDims().toFloat(); 
    console.log(tensor.shape); 
    return tensor.div(255.0);
}

//Prediction
//canvas.toDataURL() : returns 
//image in format specified default png
//than send to preprocess function
//await makes program wait until mmodel prediction
//displayLabel to display result
document.getElementById('predict_button').addEventListener("click",async function(){     
    var imageData = canvas.toDataURL();    
    let tensor = preprocessCanvas(canvas); 
    console.log(tensor)   
    let predictions = await model.predict(tensor).data();  
    console.log(predictions)  
    let results = Array.from(predictions);    
    displayLabel(results);    
    console.log(results);
});


//output
function displayLabel(data) { 
    var max = data[0];    
    console.log(Math.max(...data));
    var maxIndex = 0;     
    for (var i = 1; i < data.length; i++) {        
      if (data[i] > max) {            
        maxIndex = i;            
        max = data[i];        
      }
    }
document.getElementById('result').innerHTML = maxIndex;  
document.getElementById('confidence').innerHTML = "Confidence: "+(max*100).toFixed(2) + "%";
}
