Template.Home.helpers({
    homePost : function(){
        return LyBlog.coll.post.find();
    }
})
