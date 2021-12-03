## Comandos básicos de Angular CLI
### Instalar Angular CLI
Instalar angular de manera global `-g` usando npm

    npm install -g @angular/cli

Una vez instalado angular cli podemos verificar que Angular quedo instalado

    ng --version

### Crear un proyecto
Crea un proyecto de Angular con la plantilla básica.

    ng new mi-proyecto

### Abrir un proyecto
Levanta el servidor de Angular generalmente el la ruta `http://localhost:4200`

    ng serve -o

### Crear un modulo
Un modulo es una carpeta que agrupa componentes
    
    ng generate module nombre-modulo

> o con la forma abreviada:

    ng g m nombre-modulo

### Crear un componente
Crea una carpeta con los archivo .html, .css, .ts y el .spec.ts del componente.

    ng generate component nombre-componente

> tambien puede usar forma abreviada:

    ng g c nombre-componente

>puede agregarle `--skip-tests` si no quiere generar el archivo de pruebas .spec.ts de la siguiente manera.

    ng g c nombre-componente --skip-tests

## Generadores disponibles en Angular `ng generate`
uso:

    ng generate <schematic> [options]

#### arguments:
  schematic
    The schematic or collection:schematic to generate.
        
#### Available Schematics:
  Collection "@schematics/angular" (default):
    
    app-shell
    application
    class
    component / c
    directive / d
    enum
    guard / g
    interceptor
    interface / i
    library
    module / m
    pipe / p
    resolver
    service / s
    service-worker
    web-worker

options:

`--defaults` 
        Disable interactive input prompts for options with a default.

`--dry-run (-d)`
        Run through and reports activity without writing out results.

`--force (-f)`
        Force overwriting of existing files.

`--help`
        Shows a help message for this command in the console.

`--interactive `
        Enable interactive input prompts.