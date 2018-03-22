# Building rpm on RHEL/CentOS

## Prerequisites
$ curl -sL https://rpm.nodesource.com/setup_8.x | sudo -E bash -
$ sudo yum -y install nodejs

## Create a package
$ npm install
$ sudo yum -y install rpm-build
$ npm run package:linux
$ npm run package:redhat-installer


# Building deb on Ubuntu

## Prerequisites
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs

## Create a package
$ npm install
$ npm run package:linux
$ npm run package:debian-installer
