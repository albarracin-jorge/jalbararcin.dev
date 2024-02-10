# My personal website

Made with Astro + TailwindCSS 🚀👨🏻‍🚀

## Steps to deploy this website:

Install dependencies and generate astro build
```
npm i && npm run build
```

Build local image of the Dockerfile
```
docker build -t nginx-server .
```

Create a container of the image previously create .You can change port ``8080:80`` or add a specific name whit ``--name some_nice_name_container``
```
docker run -d -p 80:80 nginx-server
```

