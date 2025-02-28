const video = {
    title: 'lotr', 
    showTitle() {
        this.title
        console.log(this)
    }
}   
console.log(video)
video.showTitle()

function VideoConstructor(title) {
    this.title = title
    console.log(this)    
}
const v = new VideoConstructor('b')

// ________________________________
const videos = {
    title: 'lotr', 
    tags:[1,2,3],
    showTags() {
        this.tags.forEach((tag)=>console.log(tag,title))
        this.title
        console.log(title)
                console.log(   this.title)
    }
}  
videos.showTags()

// o segundo parametro do forEach eh o thisArgs
const videos = {
    title: 'lotr', 
    tags:[1,2,3],
    showTags() {
        this.tags.forEach((tag)=>console.log(tag,this.title),this)

        
    }
}  
videos.showTags()

// e se o  segundo parametro do forEach eh o thisArgs nao existir? como acontece em outros metodos?
const videos = {
    title: 'lotr', 
    tags: [ 1, 2, 3 ],

    showTags() {
        //not a good aproach but you can see it and need to understand
            const that = this;
        that.tags.forEach((tag)=>console.log(tag,that.title))

        
    }
}  
videos.showTags()



