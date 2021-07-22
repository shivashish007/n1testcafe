import {t} from 'testcafe';
import Routing from '../model/routing';
import Times from '../model/waiting-times';
import LoginPage from '../model/page-models/login.model';


fixture('Login')
	.page(`https://app-demo.novemberfirst.com/${Routing.PUBLIC}`)
	.meta('section', 'public');

test
('Signup link exists', async t => {
	await t.expect(LoginPage.signupLink.exists).ok({ timeout: Times.SHORT });
});

test
('Forgot password link exists', async t => {
	// TODO - assert that the forgot password link exists.
}).skip;

test
('Submit valid credentials and accounts', async t => {
	//TODO - Login with the created account and assert a correct login.
}).skip;

test
('Submit invalid credentials and show an error message', async t => {
	// TODO - Type a wrong password and assert that an error message appear.
	// NOTE: if the password is type 5 times wrong in a row the account is blocked. Might be good idea to use the same account
	// as the login to prevent the account lock.
}).skip;
