# Deploying React to GitHub When NOT Using React Router

When deploying to React site to GitHub Pages, weird things happen with your site navigation links. This is because of how GitHub handles pathing for your site.

Here's a very small app with a fix implemented. The files that go along with this fix are not mine. I found it [here](https://github.com/rafgraph/spa-github-pages) after several tedious hours. The additional "prefix" code is mine. So if that doesn't work, see me.

Follow these steps and you should be ok. These instructions assume you are creating a project site on GitHub, not the one that is specifically tied to your username. (If it's the same as all the other homeworks you've done, it's a Project site and you're good.)

- Build your site as per usual.
- Prep the site for GitHub pages (see below if you don't know how)
- Anywhere where you will be navigating to a page on your site, you'll need add the repo name to the link. But you can only do this for the production site. Take a look at the `App.js` or the `components/Header.jsx` file to see how I handled this.

- These next instructions based off the solution I found.

<hr/>  

- Copy the `public/404.html` file as-is and put it in the public folder of your project.  
- In the `public/index.html` file of this repo you'll see some code you need to copy and paste into your `index.html` file. Make sure the code is placed BEFORE the closing `</head>` tag.
  
<hr/>  

- Commit your code as per usual.
- Once the code is committed, from your terminal, run:
  ```
  npm run deploy
  ```

<hr/>
  
## Prepping a Site for GitHub Pages

To get a React site ready for GitHub pages, do the following:

- Create a new repo for the site. We'll assume here the name is "my-react-site"
- In the Settings area for the repo, go to the Pages section, and make sure the following settings are set:  
  - Source: Deploy from a branch 
  - Branch: gh-pages (using the /root directory)  
  - (You may not be able to make these changes until after your first deploy)
- Make sure you know your GitHub username. We'll assume here its "johndoe123"
- In your package.json file, make sure you have an entry called homepage, and it points to the eventual location of your site. It should look like this:  
`"homepage": "https://johndoe123.github.io/my-react-site",`

Notice how both your Github username and the repo name are included above.

- Also in your package.json file, add the following two entries to the scripts area:
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
``` 

- Install the gh-pages node package:
```
npm i -D gh-pages
```
- Anytime you push new code to the repo, you will need to also run `npm run deploy` again. After you deploy the first time, the changes mentioned above in the Settings -> Pages will probably be made for you.
