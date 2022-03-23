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

· Component: Header component.
· Author: Gonzalo Moreno

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