# Dockerizing a Node.js web app
Dockerfile files, tips and tricks about Dockerizing a Node.js web app.

## Image
Dockerfile and instructions about custom image.

* Build image
```
docker build -t tarsoqueiroz/node-web-app .
```

* Export image
```
docker save tarsoqueiroz/node-web-app > node-web-app.tar
```

* Import image
```
docker load -i node-web-app.tar
```

## Node.js web app
Sample Node.js web app for this image.

## Tips & Tricks
Fast notes and links to flush my mind.

## Sources
* [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
* [Run Multiple Docker Environments (qa, stage, prod) from the Same docker-compose File](http://staxmanade.com/2016/07/run-multiple-docker-environments--qa--beta--prod--from-the-same-docker-compose-file-/)
* []()
* []()


* * *
#### Author and License

* Tarso Queiroz ([mail](mailto:tarsoqueiroz@gmail.com) | [GitHub]())
* License: [MIT License (Expat)](https://tldrlegal.com/license/mit-license)