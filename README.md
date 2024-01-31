# canvas-api

## Installation

1. Go to GitHub and generate a new access token
   - Click your profile in the top right and go to Settings
   - At the bottom of the left hand menu, click Developer Settings
   - Click Personal access tokens > Tokens (classic)
   - Generate a new classic token with the `read:packages` permission
   - Copy the token
   - On the token you created, click Configure SSO and give it access to uts-itd
2. Create a new environment variable called GH_TOKEN using the copied token
3. Create a new Node project.
4. Create a `.npmrc` file with the following contents:
    
    ```
    @uts-itd:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=${GH_TOKEN}
    ```
    
5. Install the canvas-api package using `npm install @uts-itd/canvas-api`

## Usage

```ts
import { Canvas } from '@uts-itd/canvas-api';

const canvas = Canvas("https://uts-dev.instructure.com", CANVAS_TOKEN);

const courses = await canvas_api.accounts.listActiveCoursesInAccount(1);
```
