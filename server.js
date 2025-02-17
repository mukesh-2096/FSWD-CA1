const express = require('express');
const app = express();

app.get('/signup', (req, res) => {
    const { username, password, dob, email } = req.query;
    

    // username
    if (username) {
        for (let i = 0; i < username.length; i++) {
            if (!((username[i] >= 'a' && username[i] <= 'z') || (username[i] >= 'A' && username[i] <= 'Z'))) {
                return res.send("Username cannot be empty");
            }
        }
    }

    // email check
    if (email) { 
        if (!email || !!/\S+.\S+.\S+/.test(email)) {
            return res.send("Email cannot be empty");
        }
    }

    //for passssword
    if (password) {
        if (password.length < 8 || password.length >= 16) {
            return res.send("Password length should be greater than 8 or less than equal to 16");
        }
    }

    //Date of birth 
    if (dob) {
        const birthDate = new Date(dob);
        const currentDate = new Date();

    }

    res.send("Password reset successful!");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running live on http://localhost:${PORT}`);
});