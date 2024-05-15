var large_image = document.getElementById("large_img")
var default_img = document.getElementById("large_img")
        let small_images = document.getElementsByClassName("sm_img")
        for(let i = 0 ; i < small_images.length ; i++){

            small_images[i].addEventListener("mouseover",function(){
                large_image.src = this.src
                large_image.style.border = "3px solid blue"
                this.style.border = "3px solid blue"
            })
            small_images[i].addEventListener("mouseout",function(){
                large_image.src = "./img5.avif"
                large_image.style.border = "3px solid transparent"
                this.style.border = "3px solid purple"
            })
            
            small_images[i].addEventListener("click",function(){
                large_image.src = this.src
                small_images[i].addEventListener("mouseout",function(){
                    large_image.src = this.src
                    large_image.style.border = "3px solid blue"
                    this.style.border = "3px solid blue"
                })
                    })
            

        }