# makiato
![alt tag](https://travis-ci.org/victorzki/makiato-fe.svg?branch=master "Travis status")

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
