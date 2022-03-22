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
        <td colspan=5> Redireccionamiento </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Deberias redireccionar a backoffice luego de loguearse como un usuario Administrador </td>
        <td> Loguearse como un usuario de rol administrador </td>
        <td> Redireccionarse a backoffice </td>
        <td>  </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Deberias redireccionar a home tras loguearse como un usuario estandar </td>
        <td> Loguearse como un usuario de rol estandar </td>
        <td> Redireccionarse a home </td>
        <td> - </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Deberias redireccionar a home tras autenticarse con cuenta de google </td>
        <td> Usar la autenticacion de google  </td>
        <td> Redireccionarse a home </td>
        <td> - </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Deberias redireccionar a home tras autenticarse con cuenta de google </td>
        <td> Usar la autenticacion de google  </td>
        <td> Redireccionarse a home </td>
        <td> - </td>
    </tr>
</table>

<table>
    <tr>
        <td colspan=5> Auth Store </td>
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

<table>
    <tr>
        <td colspan=5> Fields </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Deberia ser un formulario invalido </td>
        <td> Enviar el formulario con todos los campos vacios </td>
        <td> Mostrar que los campos son requeridos </td>
        <td> - </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Deberia ser un formulario invalido </td>
        <td> Enviar el formulario con el campo mail vacio </td>
        <td> Mostrar error, el campo mail es requerido </td>
        <td> - </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> Deberia ser un formulario invalido </td>
        <td> Enviar el formulario con el campo password vacio </td>
        <td> Mostrar error, el campo password es requerido </td>
        <td> - </td>
    </tr>
    <tr>
        <td> Funtionality </td>
        <td> No deberia ocurrir nada </td>
        <td> Iniciar la validacion con google pero no elegir ningun usuario, salir de la autenticacion </td>
        <td> Nada </td>
        <td> - </td>
    </tr>
</table>
