## Angular Train - Doc

- [Repository URL](https://github.com/JannickLeismann/angular-course-appointment-app)

## Commands
- Check the angular version
```
ng v
```
- Creates a new Angular project with the specified project name.
```
# ng new <app-name>-app
ng new appointment-app
```
- Builds the application and starts a web server to serve your application during development.
```
ng serve -o
-o / --open: open the browser
```

- Generates a new Module with the specified name.
```
ng g module appointment-module
```

- Generates a new component with the specified name.
```
ng g component appointment-list

ng g c appointment-list
```

- Generates a component and bind (connect) to module
```
ng g c home --module=home 
```

- Generates a serviceng
```
ng g service home/home  
```


- Generate interface
```
ng g interface models/appointment
```

- Builds your application for production, creating a dist/ folder with the output.
```
ng build
```

- Checks your application for outdated dependencies, and can also update them.
```
ng update
```


## TypeScript basic
```ts
export class AppComponent {

    items = ['item1', 'item2', 'item3'];

    private log(text: string) {
        var message = 'Message' + text;
        console.log(text);
    }

    sum(a: number, b: number) {
        return a + b;
    }

    // with return type declaration
    sum(a: number, b: number) : number {
        return a + b;
    }

    f () {
        this.log('test');
        this.items.push('item4');
    }
}
```
- primitive types: `boolean`, `number`, `string`
- define variable of class: `var app = new AppComponent()`
    - with type declaration: `var app : AppCompoent = new AppComponent()`
- define arrays: `var a = number[]`

## Install and using bootstrap
1. install on local project: `npm install bootstrap@5.3`
2. import in the project in root/styles.css file: `@import "~bootstrap/dist/css/bootstrap.min.css"`

## Component
- each component only can bind to one module

## Extera Code
```html

// null checking before checking value, (?) mark before ".invalid"
<div *ngIf="reservationForm.get('checkInDate')?.invalid">check date</div>

```