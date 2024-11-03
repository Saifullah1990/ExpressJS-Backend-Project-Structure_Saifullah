

exports.createBlog = (req,res)=>{
   res.status(200).send("Blog created successfully");
}

exports.readBlog = (req,res)=>{
    res.status(200).send("Blog read successfully");
}

exports.updateBlog = (req,res)=>{
    res.status(200).send("Blog update successfully");
}

exports.deleteBlog = (req,res)=>{
    res.status(200).send("Blog delete successfully");
}