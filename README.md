# Webcomponent-intro

## Prerequisites
* [git](https://git-scm.com/downloads)
* [npm and node](https://nodejs.org/en/download/)
* optional: [visual studio code](https://code.visualstudio.com/download)

## Install
    # install the polymer cli: (in some environments this requires `--unsafe-perm` to be added)
    npm install -g polymer-cli

    # get this repository from git:
    git clone https://github.com/Geodan/webcomponent-intro
    cd webcomponents-intro

    # install dependencies (lit-element, lit-html):
    npm install

    #start Visual Studio Code (mind the dot behind 'code'!):
    code .

    # inside Visual Studio Code, select menu "Terminal"=>"New Terminal"
    # in the new terminal, type:
    npm start

## Usage
Point your browser to localhost:8081 (or any other port if so specified by the output of 'npm start').

The home page (Plain HTML) and shell (App HTML) pages show two components:
1. simple-element
    * simple-element is a very basic component derived from [LitElement](https://lit-element.polymer-project.org)
2. full-element
    * basic element that implements most LitElement methods. Every method logs to the web-console.

The native component example shows component:

3. medium-element
    * basic native component, no framework code used


## build polymer components for production 

To use the LitElement components with a standard static webserver, you have to build them:

```
$ npm run-script build
# the component build output is in directory /build/es5-bundled
```

you can now import these components into standard webserver html:

```
<script type="module">
    import './build/es5-bundled/simple-element.js';
 </script>
 <simple-element></simple-element>
```

## Some very basic webcomponents
* simple-element (lit-element)
* medium-element (native element)
* full-element (lit-element)


