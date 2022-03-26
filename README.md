# ONG Somos Nosotros

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Testing
___

### · Component: Header component.

### · Author: Gonzalo Moreno

Cases:
- If user is not authenticated, it should show public links, login and register. Restrict access to Newsletter (rows: 1, 2, 3).
- If user is authenticated and is not admin, it should hide login and register links, show navigation items (rows: 4, 5).
- If user is authenticated and is admin, it should hide Register, Contact and Donation links. It should show Dashboard link. (rows: 6, 7).


| Test case type | Description                                                                              | Test Step                                                                                                                                                                                                              | Expected Result                                           | Status |
|----------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|--------|
| Functionality  | If user is not authenticated, Should show public links, when not logged in               | Mocked AuthState as : {          auth: false,          isAdmin: false,          user: null,          googleUser: null,          token!: null,          isGoogleAuth: false        } | Should show public links, when not logged in              | Pass   |
|                | If user is not authenticated, Should show login and register button, when not logged in  | Mocked AuthState as : {          auth: false,          isAdmin: false,          user: null,          googleUser: null,          token!: null,          isGoogleAuth: false        } | Should show login and register button, when not logged in | Pass   |
|                | If user is not authenticated,  Should restrict access to Newsletter., when not logged in | Mocked AuthState as : {          auth: false,          isAdmin: false,          user: null,          googleUser: null,          token!: null,          isGoogleAuth: false        } | Should restrict access to Newsletter., when not logged in | pass   |
| Functionality  | If user is authenticated and is not admin, Should hide login and register links          | Mocked AuthState as :{          auth: true,          isAdmin: false,          user: null,          googleUser: null,          token!: null,          isGoogleAuth: false        }   | Should hide login and register links                      | Pass   |
|                | If user is authenticated and is not admin, Should show navigation links                  | Mocked AuthState as :{          auth: true,          isAdmin: false,          user: null,          googleUser: null,          token!: null,          isGoogleAuth: false        }   | Should show navigation links                              | Pass   |
| Functionality  | If user is authenticated and is admin, Should hide Register, Contact and Donation links  | Mocked AuthState as :{          auth: true,          isAdmin: true,          user: null,          googleUser: null,          token!: null,          isGoogleAuth: false        }    | Should hide Register, Contact and Donation links          | Pass   |
|                | If user is not authenticated, Should show dashboard link                                 | Mocked AuthState as :{          auth: true,          isAdmin: true,          user: null,          googleUser: null,          token!: null,          isGoogleAuth: false        }    | Should show dashboard link                                | Pass   |

<p>
· Component: Contact component.</p>
<p>
· Author: Federico Rojas
</p>

<p>
Cases:
</p>

<p>
- Contact layout rendering (rows: 1, 2, 3, 4).
</p>

<p>
- Display error messages when needed (rows: 5).
</p>

<table>
    <tr>
        <th colspan=5> Testing for contact component rendering </th>
    </tr>
    <tr>
        <th>Test Case Type</th><th>Description</th><th>Test Step</th><th>Expected Result</th><th> Status </th>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should create </td>
        <td> Create component </td>
        <td> The contact component exists </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should be using leafleet map </td>
        <td> Check if leafleet map component exists on contact component </td>
        <td> The leafleet component must exist </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should call public API service when component is created </td>
        <td> Check if the function that make the get API method has been called </td>
        <td> The method should have been called </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should render contact info </td>
        <td> Check if contact info component exists on contact component </td>
        <td> The contact info component must exist </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should show a message when public API response is 404 </td>
        <td> Make a API call that returns an 404 error response, and check if it displays a message </td>
        <td> Display an error message when 404 response is received </td>
        <td> Pass </td>
    </tr>
</table>

<p>
· Component: Contact component.
</p>
<p>
· Author: Federico Rojas
</p>

<p>
Cases:
</p>

<p>
- Contact layout rendering (rows: 1).</p>
<p>
- Check the contact form functionality (rows: 2-11).
</p>

<table>
    <tr>
        <th colspan=5> Testing the contact form component functionality </th>
    </tr>
    <tr>
        <th> Test Case Type </th>
        <th> Description </th>
        <th> Test Step </th>
        <th> Expected Result </th>
        <th> Status </th>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should create </td>
        <td> Create component </td>
        <td> The contact form component exists </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should not send the contact form if it’s invalid </td>
        <td> Make the form invalid and try to send it </td>
        <td> The form should not have been sent </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should call submit method when click 'submit' button </td>
        <td> Press the submit button and check if the submit method is called  </td>
        <td> The method should have been called </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Form should be invalid when all the fields are missing </td>
        <td> Fill all form fields as blank, and check if the form is valid </td>
        <td> Form should be invalid </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should display error message when 'email' field is incorrect or empty </td>
        <td> Fill the email input with an invalid and blank values,  and check if it displays a helper message </td>
        <td> Display a helper error message for email </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should display error message when 'phone' field is incorrect or empty </td>
        <td> Fill the phone input with an invalid and blank values,  and check if it displays a helper message </td>
        <td> Display a helper error message for phone</td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should display error message when 'name' field is empty </td>
        <td> Make the phone input an empty value,  and check if it displays a helper message </td>
        <td> Display a helper error message for name </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Functionality </td>
        <td> Should display error message when 'message' field is empty </td>
        <td> Make the message input an empty value,  and check if it displays a helper message </td>
        <td> Display a helper error message for message </td>
        <td> Pass </td>
    </tr>
       <tr>
        <td> Functionality </td>
        <td> Form should be valid when ALL required fields are filled </td>
        <td> Fill all the form correctly, and check if it returns valid </td>
        <td> Form should be valid </td>
        <td> Pass </td>
    </tr>
        </tr>
       <tr>
        <td> Functionality </td>
        <td> Should submit if all fields are correct and display a success message </td>
        <td> Fill all the form correctly, and submit. Check if it displays a success message. </td>
        <td> Send the form and display a successfully sent message </td>
        <td> Pass </td>
    </tr>
        </tr>
       <tr>
        <td> Functionality </td>
        <td> Should display an error dialog if there is an error from the server response </td>
        <td> Receive an error response from the server, and check if it displays an error dialog message </td>
        <td> Display an error dialog message </td>
        <td> Pass </td>
    </tr>
</table>

___
### · Component: Login component.

### · Author: Nicolas Luna

<style>
    table th, table td {
        border: 1px solid 
    }
</style>

<table>
    <tr>
        <th colspan=5> Verification of login form fields</th>
    </tr>
    <tr>
        <th>Test Case Type</th><th>Description</th><th>Test Step</th><th>Expected Result</th><th> Status </th>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> There should be a form to log in. </td>
        <td> Check if there are two different fields with name email and password </td>
        <td> There have a form with fields email and password </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Email field should be required </td>
        <td> Email field with empty input </td>
        <td> Email field is invalid </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Password field should be required </td>
        <td> Password field with empty input </td>
        <td> Password field is invalid </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Email field should check the email format </td>
        <td> 'ngUnit@test.com' is entered in the email field </td>
        <td> Email field is valid </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Email field should verify that the format is not an email </td>
        <td> 'NO@Email.' is entered in the email field </td>
        <td> Email field is invalid </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Form should verify that it has been valid </td>
        <td> Email and Password field with valid input </td>
        <td> Form valid </td>
        <td> Pass </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan=5> Verification of store </th>
    </tr>
    <tr>
        <th> Test Case Type </th>
        <th> Description </th>
        <th> Test Step </th>
        <th> Expected Result </th>
        <th> Status </th>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Should make a call to the store </td>
        <td> A valid form is sent and interaction with the store is expected </td>
        <td> Dispatch been called </td>
        <td> Pass </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan=5> Verification of error message </th>
    </tr>
    <tr>
        <th> Test Case Type </th>
        <th> Description </th>
        <th> Test Step </th>
        <th> Expected Result </th>
        <th> Status </th>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Should have email error message </td>
        <td> Interacts with the input leaving invalid values </td>
        <td> A error message debuged </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> NOT should have email error message </td>
        <td> No interaction </td>
        <td> Without error message </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Should have password error message </td>
        <td> Interacts with the input leaving invalid values </td>
        <td> A error message debuged </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> NOT should have password error message </td>
        <td> No interaction </td>
        <td> Without error message </td>
        <td> Pass </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan=5> Verification of buttons </th>
    </tr>
    <tr>
        <th> Test Case Type </th>
        <th> Description </th>
        <th> Test Step </th>
        <th> Expected Result </th>
        <th> Status </th>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Should call onLogin when the form is valid </td>
        <td> Submit a valid form </td>
        <td> The onLogin function must be called </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Should not call onLogin when the form is valid </td>
        <td> Try submit a invalid form </td>
        <td> The onLogin function must not be called </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Should call loginGoogle when the form is valid </td>
        <td> Choose start with google </td>
        <td> The loginGoogle function must be called </td>
        <td> Pass </td>
    </tr>
</table>


___
### · Component: Activity Form component.

### · Author: Francisco Javier González del Solar

<style>
    table th, table td {
        border: 1px solid 
    }
</style>

<table>
    <tr>
        <th colspan=5> Verification of login form fields</th>
    </tr>
    <tr>
        <th>Test Case Type</th><th>Description</th><th>Test Step</th><th>Expected Result</th><th> Status </th>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> There should be an activity form created </td>
        <td> Create a form </td>
        <td> There is a form to create an activity </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> There should be three fields in the form </td>
        <td> Create a form</td>
        <td> Fields image, description and name are there </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Image field should be required </td>
        <td> Image field with empty input </td>
        <td> Image field is invalid </td>
        <td> Pass </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Name field should be required </td>
        <td> Name field with empty input </td>
        <td> Name field is invalid </td>
        <td> Pass </td>
    </tr>
</table>