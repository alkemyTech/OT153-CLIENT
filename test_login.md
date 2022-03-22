<style>
    table th, table td{
        border: 1px solid 
    }
</style>
# EXAMPLE

<table>
    <tr>
        <th> Test Case Type </th>
        <th> Description </th>
        <th> Test Step </th>
        <th> Expected Result </th>
        <th> Status </th>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Area should acomodate  up to 20 caracters </td>
        <td> Input up to 20 caracters </td>
        <td> All 20 caracters in the request should be appropriate </td>
        <td> Pass or Fail </td>
    </tr>
</table>

# DOC TEST

<table>
    <tr>
        <th colspan=5> Verification of login form fields</th>
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
        <td> Password field should be required </td>
        <td> Password field with empty input </td>
        <td> Password field is invalid </td>
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
        <th colspan=5> Auth Store </th>
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
        <td> Deberias almacenar los datos del usuario tras un logueo con credenciales validas </td>
        <td> autenticarse como un usuario valido - admin / standar / googleuser  </td>
        <td> Tener almacenados en el store los datos del usuario logueado </td>
        <td> - </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> No Deberias almacenar los datos del usuario tras un logueo con credenciales invalidas </td>
        <td> Intentar autenticarse con credenciales invalidas </td>
        <td> Error de autenticacion </td>
        <td> - </td>
    </tr>
</table>