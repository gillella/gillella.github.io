# 🚀 Deployment Instructions

Your portfolio site has been successfully built and pushed to GitHub! Now follow these steps to enable GitHub Pages deployment.

## Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/gillella/gillella.github.io
2. Click on **Settings** (top right)
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions" (not "Deploy from a branch")
5. Save the changes

## Step 2: Trigger the Deployment

The GitHub Actions workflow will automatically run when:
- You push to the `main` branch
- Or you can manually trigger it:
  1. Go to **Actions** tab
  2. Click on "Deploy to GitHub Pages"
  3. Click "Run workflow" > "Run workflow"

## Step 3: Wait for Deployment

- The deployment takes ~2-3 minutes
- Watch the progress in the **Actions** tab
- You'll see a green checkmark when complete

## Step 4: View Your Site

Once deployed, your portfolio will be live at:
**https://gillella.github.io**

## 🎨 Customization

To update your portfolio:

1. **Personal Info**: Edit `src/data/profile.ts`
2. **Colors**: Modify `tailwind.config.js`
3. **Components**: Update files in `src/components/`
4. **Push Changes**: 
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

## 🔧 Troubleshooting

### If deployment fails:
1. Check the Actions tab for error messages
2. Ensure GitHub Pages is set to "GitHub Actions"
3. Verify the workflow file exists at `.github/workflows/deploy.yml`

### If site doesn't load:
1. Wait 5 minutes (DNS propagation)
2. Clear browser cache (Cmd+Shift+R on Mac)
3. Check if `.nojekyll` file exists in root

### Build errors:
```bash
cd /tmp/gillella.github.io
npm install
npm run build
```

## 📦 What's Included

- ✅ Modern Next.js 15 site
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- ✅ Framer Motion animations
- ✅ GitHub Actions CI/CD
- ✅ Professional sections
- ✅ Dark theme with Anguliyam branding

## 🎯 Next Steps

1. Enable GitHub Pages (above)
2. Add custom domain (optional):
   - Settings > Pages > Custom domain
   - Add CNAME record in your DNS
3. Update profile photo
4. Add more projects
5. Write blog posts

---

Need help? Check the main [README.md](README.md) or open an issue!

