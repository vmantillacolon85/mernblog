const router = require("express").Router();
const Post = require("../models/postModel");

// router.get("/test", (req, res) => {
//     res.send("It's working");
// });

router.post("/", async (req, res) => {

    //retrieve the data from the request
    const {title, createdAt, tags, html} = req.body;
    // console.log(title, createdAt, tags, html);

    //construct the post model/schema

    const newPost = new Post({
        title,
        createdAt,
        tags,
        html
    });

    //save post model

    try{
        const savedPost = await newPost.save();
        // console.log(savedPost);
        res.json(savedPost);
    } catch(err) {
        console.error(err);
    }
});


router.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
});

router.get("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);
});
module.exports = router;




//Questions for Matt & // CO.

//1 .what is async?///
