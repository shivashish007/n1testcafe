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
	await t.expect(LoginPage.forgotPassword.exists).ok({ timeout: Times.SHORT });
}).skip;

test
('Submit valid credentials and accounts', async t => {
	//TODO - Login with the created account and assert a correct login.
	await t.navigateTo(getRootBasedUrl('/https://app-demo.novemberfirst.com/#/public/'));
	await t.typeText(await Selector('input[name="email"]'), 'email');
	await t.typeText(await Selector('input[name="password"]'), 'password');
}).skip;

test
('Submit invalid credentials and show an error message', async t => {
	// TODO - Type a wrong password and assert that an error message appear.
	// NOTE: if the password is type 5 times wrong in a row the account is blocked. Might be good idea to use the same account
	// as the login to prevent the account lock.
	login(){
		if (this.failedAttempts < 4){
			this.router.navigateByUrl('https://app-demo.novemberfirst.com/#/public');
			this.alert.success('Login Successful');
		}
		(err)=> {
			this.failedAttempts++;
			console.error(err);
			this.alert.error('Login Failed. Invalid email or Password. Account will be Blocked');
			this.btnDisable=true;
		});
		
}).skip;
