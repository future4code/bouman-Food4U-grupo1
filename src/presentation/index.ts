import express from "express";
import getProfileEndpoint from "./endpoints/users/getProfileEndpoint";
import loginEndpoint from './endpoints/users/loginEndpoint'
import signupEndpoint from './endpoints/users/signupEndpoint'

const app = express();
app.use(express.json());

app.post('/signup', signupEndpoint)
app.post('/login', loginEndpoint)
app.get('/getProfile', getProfileEndpoint)

export default app;
