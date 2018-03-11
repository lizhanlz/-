var log = console.log.bind(console)
//载入图片
var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}






//判断矩形相交
var Collide = function(a, b) {
    if (a.y > b.y && a.y < b.y + b.image.height) {
        if (a.x > b.x && a.x < b.x + b.image.width) {
            return true
        }else if (a.x + a.image.width > b.x && a.x + a.image.width < b.x + b.image.width) {
            return true
        }

    } else if (a.y + a.image.height > b.y && a.y + a.image.height < b.y + b.image.height) {
        if (a.x > b.x && a.x < b.x + b.image.width) {
            return true
        }else if (a.x + a.image.width > b.x && a.x + a.image.width < b.x + b.image.width) {
            return true
        }

    }
    return false
}
//另外两种判断方法
// var Collide = function(a, b) {
//     if (b.y > a.y && b.y < a.y + a.image.height) {
//         if (b.x > a.x && b.x < a.x + a.image.width) {
//             return true
//         }
//     }
//     if (b.y + b.image.height > a.y && b.y + b.image.height < a.y + a.image.height) {
//         if (b.x + b.image.width > a.x && b.x + b.image.width < a.x + a.image.width) {
//             return true
//         }
//     }
//     return false
// }
// var Collide = function(rect1,rect2) {
//     var maxX,maxY,minX,minY
//
//     maxX = rect1.x+rect1.image.width >= rect2.x+rect2.image.width ? rect1.x+rect1.image.width : rect2.x+rect2.image.width
//     maxY = rect1.y+rect1.image.height >= rect2.y+rect2.image.height ? rect1.y+rect1.image.height : rect2.y+rect2.image.height
//     minX = rect1.x <= rect2.x ? rect1.x : rect2.x
//     minY = rect1.y <= rect2.y ? rect1.y : rect2.y
//
//     if(maxX - minX <= rect1.image.width+rect2.image.width && maxY - minY <= rect1.image.height+rect2.image.height){
//       return true
//     }else{
//       return false
//     }
//   }
