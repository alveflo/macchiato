# makiato 
[![Build status](https://travis-ci.org/victorzki/makiato.svg?branch=master)](https://travis-ci.org/victorzki/makiato)

Makiato application.

### Installation
```
$ npm install
$ bower install
```

###### Notes
In order to install mongoose on linux, Kerberos Development Package needs to be installed.
```
$ sudo apt-get install libkrb5-dev
```

### Run the app
Start the express app with supervisor (to restart server on file changes)
```
$ supervisor --debug ./app/bin/www
```

Run gulp
```
$ gulp
```

### License
MIT
