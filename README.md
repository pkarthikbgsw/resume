# Resume
Learn Vue hosted in GitHub

Do the following,
1. Use npm create vue@latest to create a vue project
2. Compile using npm run build
3. Run using npm run dev
4. To host as GitHub Pages:

Push your repo to GitHub
Install the deploy tool: npm install -D gh-pages
Add to package.json scripts: "deploy": "gh-pages -d dist"
Add base to vite.config.ts if hosting in a subdirectory (e.g. base: '/repo-name/')
Run npm run build && npm run deploy

Weblink @ https://pkarthikbgsw.github.io/resume/

5. 
App.vue               → <router-view />  (root mount)
  └── Layout.vue      → banner + nav + <router-view />  (path: "/")
        ├── Home.vue       → resume content  (path: "")         → /
        └── Playground.vue → playground      (path: "playground") → /playground
