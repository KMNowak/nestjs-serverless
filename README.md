# nestjs-serverless

## Quick start
### Available endpoints
As in `src/app/app.controller`
- `/:id GET`
- `/ POST`
Both returns plain texts
### Local debugging
Simply run 
```bash
yarn start
```
### Deploy to AWS
1. Install `serverless`
```bash
npm install -g serverless
```
2. Deploy
```bash
yarn deploy
```
Follow the console output and hit provided endpoints

