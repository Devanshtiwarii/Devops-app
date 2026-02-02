const express=require('express');
const app = express();
app.get('/',(req,res)=>{
	console.log("someone hit your home");
	res.send('Devops pipeline running')
const express = require('express');
const app = express();

// 1. Define the 'add' function with Type Conversion
const add = (a, b) => {
    return Number(a) + Number(b); 
    // ^ This fixes the "string" test case ( "1" + "2" = 3 )
};

// 2. Your standard API route
app.get('/', (req, res) => {
    res.send('DevOps pipeline running');
});

// 3. Optional: Allow users to use the math via URL (e.g., /add?a=1&b=2)
app.get('/add', (req, res) => {
    const result = add(req.query.a, req.query.b);
    res.send(`Result is ${result}`);
});

// 4. IMPORTANT: Prevent the server from starting twice
// This block ensures the server only starts if you run 'node server.js'
// It will NOT start if Jest imports the file for testing.
if (require.main === module) {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
}

// 5. Export the function so your Test file can see it
module.exports = { add, app };});
app.listen(3000,()=>{console.log("listening to 3000")});
