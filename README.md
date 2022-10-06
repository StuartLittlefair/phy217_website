# PHY217 Web Notes

This repository holds the course notes for the PHY217 Observational Astronomy Course. The website is created using the static site generator [Eleventy](https://www.11ty.dev), and uses the [Foundation](https://get.foundation/index.html) webframework for accessible and responsive layout. 

## Contributing
These notes are made available under a creative commons license. Feel free to use the notes as you wish, provided you credit me for the original creation.

I welcome suggestions for improvements or additions. Please raise an issue here, or - even better - submit a pull request!

### Setup
First, install a local version of Eleventy into your project, by making sure you are in the root directory and typing

```
npm install @11ty/eleventy
```

You should then be able view a locally served version of the site by running

```
npm start
```

which will fire up the site at [http://localhost:8080](http://localhost:8080).

#### Upgrading Foundation

Eventually, I'll work out how to include foundation using `npm`. For the moment however, I have included the Foundation javascript and css as static files. If you want to upgrade to the latest versions of Foundation/jquery etc, simply replace the relevant files in `src/css` and `src/js`.

