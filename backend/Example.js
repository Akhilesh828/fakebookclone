/* -------------------------------- Mongoose -------------------------------- */
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONG_DB,{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log('connection successful');
}).catch((e)=>{
    console.log('unsuccessful');
})


/* ---------------------------------- PORT ---------------------------------- */
const PORT = process.env.PORT;

app.listen(PORT, (req,res)=>{
    console.log(`listening http://localhost:${PORT}`);
})
