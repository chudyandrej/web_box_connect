# Building rpm on RHEL

## Prerequisites
$ sudo yum install rpm-build


# Building deb on Ubuntu

## Prerequisites
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs

## Create a package
$ npm install
$ npm run package:linux
$ npm run package:debian-installer
