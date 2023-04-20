function area (radius){
    return Math.PI*radius*radius

}
function diameter (radius){
    return 2*radius
}

function circle(radius, operation){
    for(let i =0; i< radius.length; i++){
       console.log(operation(radius[i]))
    }
}

circle([2,4,6], area)
circle([2,4,6], diameter)