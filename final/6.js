

//var canvas = document.querySelector("canvas.model");
console.log("working");
var canvas = document.getElementById("model");
var context = canvas.getContext("2d");
var image = context.getImageData(0, 0, canvas.width, canvas.height);
var pixels = image.data;
var myScale = d3.scaleLinear()
  .domain([0,500])
  .range(['#87CEFF ', '#082567 '])
  .interpolate(d3.interpolateHcl)
  

function fillCanvas()
{
    for(let x = 0; x < 500; x++) {
      for(let y = 0; y < 40; y++) {
        rgbspot=  d3.rgb(myScale(x));
        pixels[4*(y*500 + x) + 0] = rgbspot.r  // use the color lookup table to map grid cells to color values
        // green
        pixels[4*(y*500 + x) + 1] = rgbspot.g   // use the color lookup table to map grid cells to color values
        // blue
        pixels[4*(y*500 + x) + 2] = rgbspot.b   // use the color lookup table to map grid cells to color values
        // aalpha
        pixels[4*(y*500 + x) + 3] = 255; // we want fully opaque cells
        
      }
    }
    context.putImageData(image, 0, 0);
}

fillCanvas();