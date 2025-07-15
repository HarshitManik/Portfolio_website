# Images Directory

Place your portfolio images in this directory and reference them in your components.

## Folder Structure:
- `/profile/` - Profile pictures and personal photos
- `/projects/` - Project screenshots and demos
- `/tech/` - Technology logos and icons
- `/experience/` - Company logos and workplace images

## Usage Examples:
```jsx
// Reference images from the public directory
<img src="/images/profile/harshit-profile.jpg" alt="Harshit Manik" />

// Or import them as assets
import profileImage from "@assets/profile-image.jpg";
<img src={profileImage} alt="Harshit Manik" />
```

## Supported Formats:
- JPG/JPEG
- PNG
- WebP (recommended for web)
- SVG (for icons and logos)

## Recommended Sizes:
- Profile photo: 400x400px
- Project thumbnails: 800x600px
- Company logos: 200x100px