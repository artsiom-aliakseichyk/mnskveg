# mnskveg

## dev process
- branch name feature/%feature-descr%
- make pull request after any development - add as much as possible description to pull request's comments
- any requests should be reviewed
- heroku build will start automaticly after succesfull merge with master

## dev build

npm install
uncomment proper lines in public/index.html
npm run develop

## prod build

npm install
npm run bundle
npm run develop