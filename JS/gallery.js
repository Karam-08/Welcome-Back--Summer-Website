$(document).ready(function(){
    var currentImage = 1
    // console.log(currentImage)

    $(".image1").click(function(){
        // The new image is shown instantly so the display has to dissapear instantly as well to give the illusion that it changes to the new image
        // It dissapears, waits for two seconds, then the new Image appears
        $("#display").slideUp(0).delay(2000).attr('src', 'Images/image1.jpg').attr('width', '500').slideDown(1000)
        currentImage = 0 // ID for image used in the arrow key function
    })
    // Repeat for every image
    $(".image2").click(function(){
        $("#display").slideUp(0).delay(2000).attr('src', 'Images/image2.jpg').attr('width', '500').slideDown(1000)
        currentImage = 1
    })

    $(".image3").click(function(){
        $("#display").slideUp(0).delay(2000).attr('src', 'Images/image3.jpg').attr('width', '500').slideDown(1000)
        currentImage = 2
    })

    $(".image4").click(function(){
        $("#display").slideUp(0).delay(2000).attr('src', 'Images/image4.webp').attr('width', '500').slideDown(1000)
        currentImage = 3
    })

    $(".image5").click(function(){
        $("#display").slideUp(0).delay(2000).attr('src', 'Images/image5.jpg').attr('width', '500').slideDown(1000)
        currentImage = 4
    })

    $(".image6").click(function(){
        $("#display").slideUp(0).delay(2000).attr('src', 'Images/image6.webp').attr('width', '500').slideDown(1000)
        currentImage = 5
    })
    $imgSrc = ''
    $("body").on("keydown", function(event){ // When the key is pressed down
        if(event.key === "ArrowRight"){ // If the right arrow is clicked
           
            if(currentImage > 5){ // If you are on the last slide
                currentImage = 0 // Current image = first slide
            }

            currentImage++ // Increments by 1 for next image
            $imgSrc = $(".image" + currentImage).attr("src") // Code shortener
            $("#display").slideUp(0).delay(2000).attr("src", $imgSrc).attr('width', '500').slideDown(1000) // Does the animation while switching to the new image source
        }else if(event.key === "ArrowLeft"){ // Same thing but goes to the previous image instead
            
            if(currentImage < 2){ // Decrement requires it to be less than 2 instead of 1 for some reason
                currentImage = 7
            }
            
            currentImage-- // Decrements by 1 for previous
            $imgSrc = $(".image" + currentImage).attr("src") // Code shortener
            $("#display").slideUp(0).delay(2000).attr("src", $imgSrc).attr('width', '500').slideDown(1000)
        }
    })
})