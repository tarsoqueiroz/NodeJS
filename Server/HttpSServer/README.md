# Digital Certificates

I use this [DevMedia example](https://www.devmedia.com.br/gerando-um-certificado-digital-proprio/31506)
for instructions.

## AC (Root) Certificate

### AC key

Generate an ```RSA``` key for the CA:
```
$ openssl genrsa -des3 -out ca.key 4096

Generating RSA private key, 4096 bit long modulus
......................................................++
......................................................................................++
e is 65537 (0x10001)
Enter pass phrase for ca.key: {caphrase}
Verifying - Enter pass phrase for ca.key: {caphrase}
```

### AC x509 certificate

```
$ openssl req -new -x509 -days 3650 -key ca.key -out ca.crt

Enter pass phrase for ca.key: {caphrase}
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]: {BR}
State or Province Name (full name) [Some-State]: {Parana}
Locality Name (eg, city) []: {Curitiba}
Organization Name (eg, company) [Internet Widgits Pty Ltd]: {Tarso Queiroz}
Organizational Unit Name (eg, section) []: {TQ Research}
Common Name (e.g. server FQDN or YOUR name) []: {Tarso Queiroz Research}
Email Address []: {tarsoqueiroz@gmail.com}
```

Now, it's time to import ```ca.crt``` on browser.

## Server Certificate

### Server RSA key

```
$ openssl genrsa -des3 -out server.key 4096

Generating RSA private key, 4096 bit long modulus
....................................++
............................++
e is 65537 (0x10001)
Enter pass phrase for server.key: {serverphrase}
Verifying - Enter pass phrase for server.key: {serverphrase}
```

### Server Certificate

```
$ openssl req -new -key server.key -out server.csr

Enter pass phrase for server.key: {serverphrase}
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]: {BR}
State or Province Name (full name) [Some-State]: {Parana}
Locality Name (eg, city) []: {Curitiba}
Organization Name (eg, company) [Internet Widgits Pty Ltd]: {TQ Research}
Organizational Unit Name (eg, section) []: {TQ devops}
Common Name (e.g. server FQDN or YOUR name) []: {tqdevops.com}
Email Address []: {tarsoqueiroz@gmail.com}

Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
```

### Signing the Server Certificate

It's time to signing the server certificate with CA (root) certificate.

```
$ openssl x509 -req -days 365 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 10102014 -out server.crt

Signature ok
subject=/C=BR/ST=Parana/L=Curitiba/O=TQ Research/OU=TQ devops/CN=tqdevops.com/emailAddress=tarsoqueiroz@gmail.com
Getting CA Private Key
Enter pass phrase for ca.key: {caphrase}

```


```

TODO

```

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
