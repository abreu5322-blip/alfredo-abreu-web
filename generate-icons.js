const sharp = require('sharp');

(async () => {
  try {
    // Main icon — 512×512 (used by browsers at high DPI)
    await sharp('public/images/Icon.png')
      .resize(512, 512)
      .png()
      .toFile('app/icon.png');

    // Apple touch icon — 180×180
    await sharp('public/images/Icon.png')
      .resize(180, 180)
      .png()
      .toFile('app/apple-icon.png');

    // favicon.ico — generate as 64×64 PNG renamed to .ico
    await sharp('public/images/Icon.png')
      .resize(64, 64)
      .png()
      .toFile('app/favicon.ico');
      
    console.log('Icons generated successfully.');
  } catch (err) {
    console.error('Error generating icons:', err);
  }
})();
