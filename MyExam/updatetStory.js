class Story {
    constructor(title, creator,content) {
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes = 0
        this._likingPeople = []
        this._id=1
        this._replyId
        this._doubles=[]
        this.content=content
    }
    get likes() {
        if (this._likes == 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes == 1) {
            return `${this._likingPeople[0]} likes this story!`
        } else {
            return `${this._likingPeople[0]} and ${this._likingPeople.slice(1).length} others like this story!`
        }
    }
    like(username) {
        if (username == this.title) {
            throw new Error(`You can't like your own story!`)
        } else if (this._likingPeople.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        }
        this._likes++;
        this._likingPeople.push(username)
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (this._likingPeople.includes(username)) {
            this._likingPeople.splice(this._likingPeople.indexOf(username),1)
            this._likes--;
            return `${username} disliked ${this.title}`
        }
        throw new Error(`You can't dislike this story!`)
    }
    comment(username,content,id){
        if(id==undefined||this._comments.find(x=>x.id==id)==undefined){
            this._comments.push({id:this._id,username,content,replies:[]})
            this._doubles.push({id:this._id,username,content,replies:[],doubleId:0.1})
            this._id++
            return `${username} commented on ${this.title}`
        }else{
            const comment=this._comments.find(x=>x.id==id)
            const commWithDouble=this._doubles.find(x=>x.id==id)
            this._replyId=comment.id+commWithDouble.doubleId
            comment.replies.push({id:this._replyId.toFixed(1),username,content})
            this._doubles.find(x=>x.id==id).doubleId+=0.1
            return `You replied successfully`
        }
    }
    toString(type){
        const result=[]
        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Content: \n${this.content}`)
        result.push(`Likes: ${this._likes}`)
        result.push(`Comments:`)
        if(type=='asc'){
            this._comments.sort((a,b)=>a.id-b.id)
        }else if(type=='desc'){
            this._comments.sort((a,b)=>b.id-a.id)
            for(let comment of this._comments){
                if(comment.replies.length>0){
                    comment.replies.sort((a,b)=>b.id-a.id)
                }
            }
        }else if(type=='username'){
            this._comments.sort((a,b)=>a.username.localeCompare(b.username))
            for(let comment of this._comments){
                if(comment.replies.length>0){
                    comment.replies.sort((a,b)=>a['username'].localeCompare(b.username))
                }
            }
        }
        for(let comment of this._comments){
            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`)
            if(comment.replies.length>0){
                for(let reply of comment.replies){
                    result.push(`--- ${reply.id}. ${reply.username}: ${reply.content}`)
                }
            }
        }
        return result.join('\n')
    }
    editContent(newContent){
        this.content=newContent
    }
}