const express=require('express');
const app=express();
const PORT=3000;
let books=[
    {id:1,title:'Book 1',author:'Author 1'},
    {id:2,title:'Book 2',author:'Author 2'},
    {id:3,title:'Book 3',author:'Author 3'},
];

app.get('/api/books',(_req,res)=>{
    res.json(books);
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.get('/api/books/:id',(req,res)=>{
    const bookId=parseInt(req.params.id);
    const book=books.find(b=>b.id===bookId);
    if (book){
        res.json(book)
    }else{
        res.status(404).json({message:'Book not found'})
    }
});