# Troubleshooting

### "Canvas is blank"
- Ensure hardware acceleration is enabled in your browser.
- Check if `canSee3d` is set to `true` in the store.
- Verify that the `background.png` path is correct.

### "3D model not loading"
- Check the network tab for 404 errors on `.glb` or texture files.
- Ensure the path in `useGLTF('/models/Eart/earth.glb')` matches the public directory structure.
