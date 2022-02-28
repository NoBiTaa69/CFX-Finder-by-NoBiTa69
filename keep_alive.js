//--------------------- keep_alive.js file START -----------------------------------|


const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));


//--------------------- keep_alive.js file END -------------------------------------|





//Add this code to the main file of your bot.


//------------------------------- CODE START ---------------------------------------|


const { keep_alive } = require("./keep_alive");


//-------------------------------- CODE END ----------------------------------------|