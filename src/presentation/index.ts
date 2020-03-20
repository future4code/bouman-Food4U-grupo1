import express from "express";
import getProfileEndpoint from "./endpoints/users/getProfileEndpoint";
import loginEndpoint from './endpoints/users/loginEndpoint'
import signupEndpoint from './endpoints/users/signupEndpoint'
import followEndpoint from './endpoints/users/followEndpoint'
import createRecipeEndpoint from './endpoints/recipes/createRecipeEndpoint'
import getFeedEndpoint from './endpoints/recipes/getFeedEndpoint'
import changePasswordEndpoint from "./endpoints/users/changePasswordEndpoint";

const app = express();
app.use(express.json());

app.post('/signup', signupEndpoint)
app.post('/login', loginEndpoint)
app.get('/profile', getProfileEndpoint)
app.put('/follow/:userToFollowId', followEndpoint)
app.post('/users/password', changePasswordEndpoint)

app.get('/feed', getFeedEndpoint)
app.post('/recipe/new', createRecipeEndpoint)

export default app;
