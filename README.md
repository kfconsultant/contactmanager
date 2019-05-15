# contactmanager
Contact Manager using React &amp; http://jsonplaceholder.typicode.com/users

# git cmd
git init
//changes something
git add .
git commit -m "first commit"
git remote add origin https://github.com/kfconsultant/contactmanager.git
git push -u origin master

# Deploy in https://kfconsultant.github.io/contactmanager/
1) add the following in your package.json
"homepage": "https://kfconsultant.github.io/contactmanager",
2) add the following in your package.json > "scripts" block
"deploy": "npm run build&&gh-pages -d build",
3) login to https://github.com, YOUR_PROJECT > Settings > GitHub Pages > Source > "ph-pages branch"
4) from your local PC, run the following cmd to deploy from local to https://kfconsultant.github.io/contactmanager/
>> npm run deploy
