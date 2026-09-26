# Deployment Guide — Shree Ambhey Motor Driving

This project is a high-performance **React 19 + TypeScript + Vite + Tailwind CSS** web application designed for **Cloudflare Workers** (with Static Assets) and **Cloudflare Pages** (Git-based or Direct Upload).

---

## 1. Why Did the Error Occur?

### Error Message:
> *"This uploader does not yet support projects that require a build process. TypeScript files were found. Please use `wrangler deploy` instead for full feature support."*

### Root Cause:
Cloudflare's web dashboard direct uploader only accepts **compiled static web assets** (HTML, CSS, bundled JS in the `dist/` folder). When the root project directory containing raw `.ts` and `.tsx` source code is uploaded directly through the browser without running the compilation build step first, Cloudflare detects TypeScript files and rejects the upload.

---

## 2. Option A: Deploy via Wrangler CLI (`wrangler deploy`)

The project is pre-configured with `wrangler.jsonc` and `wrangler.toml` for Cloudflare Workers Static Assets.

### Step-by-Step:
1. Build the production application:
   ```bash
   npm run build
   ```
2. Deploy to Cloudflare:
   ```bash
   npx wrangler deploy
   ```
   *Or simply run the shortcut script:*
   ```bash
   npm run deploy
   ```

### Configuration Details:
- **Config File:** `wrangler.jsonc` (and `wrangler.toml`)
- **Assets Directory:** `./dist`
- **Routing:** SPA mode enabled (`not_found_handling: "single-page-application"` and `html_handling: "auto-trailing-slash"`)

---

## 3. Option B: Git-Based Deployment via Cloudflare Pages (Recommended)

When connecting your Git repository (GitHub / GitLab) to Cloudflare:

1. Go to the **Cloudflare Dashboard** → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select your repository.
3. Configure the build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (default)
4. (Optional) In **Environment Variables**, set:
   - `NODE_VERSION`: `20`
5. Click **Save and Deploy**.

Cloudflare Pages will automatically run `npm run build` on every `git push` and deploy the output. SPA routing is automatically supported via `public/_redirects`.

---

## 4. Option C: Cloudflare Pages Direct Web Upload

If you prefer dragging and dropping files manually into the Cloudflare web dashboard:

1. Run the local build command:
   ```bash
   npm run build
   ```
2. Locate the newly created **`dist`** folder in your project root.
3. In Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Direct Upload**:
   - Drag & drop the **contents of the `dist/` folder** (NOT the project root or `src/`).
4. Click **Deploy Site**.

---

## 5. Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server on port 3000 |
| `npm run build` | Compiles TypeScript and builds production bundles into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs TypeScript type checking without emitting files |
| `npm run deploy` | Runs `npm run build` and deploys to Cloudflare via `wrangler deploy` |
| `npm run pages:deploy` | Runs `npm run build` and deploys to Cloudflare Pages via CLI |
