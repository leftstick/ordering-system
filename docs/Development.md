## Development Guide ##

### Prerequisites ###

- [nodejs][nodejs-url]
- [angularjs][angularjs-url]
- [requirejs][requirejs-url]
- [Mobile Angular UI][mobileangular-url]


### Environment Setup ###

- Install [nodejs][nodejs-url]. Ignore if you have it installed
- Execute `npm install` at root folder of `ordering-system` to install `develop-tool`'s dependencies


### Usage ###

#### Install bower dependencies for specified app ####

```powershell
toolset -install
```

Choose the app that you'd like to play with, and press `Enter`. The bower dependencies will be installed for you.


#### Start static webserver for specified app ####

```powershell
toolset -start
```

Choose the app that you'd like to play with, and press `Enter`. A webserver launched for that app.




[nodejs-url]: http://nodejs.org/
[angularjs-url]: https://angularjs.org/
[requirejs-url]: http://www.requirejs.org/
[mobileangular-url]: http://mobileangularui.com/