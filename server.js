const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

let users = require('./db.json').users;

app.post('/register', (req, res) => {
  const { username, password, name, email } = req.body;
  console.log(req.body);
  // Check if the user already exists
  const existingUser = users.find(user => user.username === username);
  if (typeof existingUser !== 'undefined') {
    return res.status(400).json({ error: true, message: "El usuario ya existe." });
  }

  // Create the new user
  const newUser = {
    username: username,
    password: password,
    name: name,
    email: email
  };
  
  // Add the new user to the users array and save it to the db.json file
  users.push(newUser);
  fs.writeFileSync('./db.json', JSON.stringify({ users: users }));

  // Return the registered user
  res.status(200).json({ message: 'Usuario registrado exitosamente.', usuario: newUser });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Check if the user exists
  const existingUser = users.find(user => user.username === username && user.password === password);
  if (typeof existingUser === 'undefined') {
    return res.status(401).json({ error: true, message: "Usuario o contraseña incorrectos." });
  }
  // Return the authenticated user
  res.status(200).json({ message: 'Inicio de sesión exitoso.', usuario: existingUser });
});


app.get('/users', (req, res) => {
  res.status(200).json({ users: users });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
}); 