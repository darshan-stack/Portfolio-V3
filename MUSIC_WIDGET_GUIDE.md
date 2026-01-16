# Music Widget - Static Version (No API Required!)

## Overview
This is a beautiful, working music widget that displays your favorite tracks **without needing any API configuration**. It rotates through your favorite songs and links to your music profiles.

## ✨ Features

- ✅ **No API needed** - Works immediately
- ✅ **Rotating tracks** - Shows your favorite songs
- ✅ **Animated visualizer** - Cool music bars animation
- ✅ **Album artwork** - Displays cover images
- ✅ **Music service links** - Links to Spotify, Apple Music, YouTube Music
- ✅ **Auto-rotation** - Changes track every 5 seconds
- ✅ **Clickable** - Opens song on Spotify
- ✅ **Hover effects** - Interactive and beautiful

## 🎵 How to Customize

### Option 1: Edit the Config File (Recommended)

Edit `/src/config/MusicWidget.ts`:

```typescript
export const FAVORITE_TRACKS: Track[] = [
  {
    title: 'Your Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    albumArt: 'https://url-to-album-art.jpg',
    url: 'https://open.spotify.com/track/YOUR_TRACK_ID',
  },
  // Add more tracks...
];
```

### Option 2: Find Your Favorite Tracks

#### Get Spotify Track Info:
1. Open Spotify
2. Find a song you like
3. Right-click → Share → Copy Song Link
4. The URL looks like: `https://open.spotify.com/track/TRACK_ID`

#### Get Album Art:
1. Go to the Spotify song page
2. Right-click on the album art
3. Copy image address
4. Or use: `https://i.scdn.co/image/ALBUM_ID`

### Option 3: Use This Template

```typescript
{
  title: 'Song Name',
  artist: 'Artist Name',
  album: 'Album Name',
  albumArt: 'https://i.scdn.co/image/ab67616d0000b273XXXXX',
  url: 'https://open.spotify.com/track/XXXXX',
}
```

## 🔗 Update Your Music Profile Links

Edit `/src/config/MusicWidget.ts`:

```typescript
export const MUSIC_PROFILES = {
  spotify: 'https://open.spotify.com/user/YOUR_USERNAME',
  appleMusic: 'https://music.apple.com/profile/YOUR_ID',
  youtubeMusic: 'https://music.youtube.com/channel/YOUR_ID',
  lastfm: 'https://www.last.fm/user/YOUR_USERNAME',
};
```

### How to Find Your Profile URLs:

**Spotify:**
1. Open Spotify
2. Click your profile
3. Click "..." → Share → Copy profile link

**Apple Music:**
1. Open Apple Music
2. Go to your profile
3. Copy the URL

**YouTube Music:**
1. Open YouTube Music
2. Click your profile
3. Copy channel URL

## ⚙️ Widget Settings

Customize behavior in `/src/config/MusicWidget.ts`:

```typescript
export const WIDGET_CONFIG = {
  rotationInterval: 5000,    // Time between tracks (ms)
  showVisualizer: true,      // Show animated bars
  showMusicLinks: true,      // Show service links
};
```

## 🎨 Styling

The widget uses:
- Green accent color (Spotify theme)
- Animated music visualizer bars
- Hover effects
- Smooth transitions
- Album art with rounded corners

## 📝 Example Tracks

Here are some popular tracks you can add:

```typescript
// The Weeknd - Blinding Lights
{
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  album: 'After Hours',
  albumArt: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
  url: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
}

// Drake - One Dance
{
  title: 'One Dance',
  artist: 'Drake ft. Wizkid',
  album: 'Views',
  albumArt: 'https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de',
  url: 'https://open.spotify.com/track/12VozmbFcHHfGJN1vUYw3W',
}

// Daft Punk - Get Lucky
{
  title: 'Get Lucky',
  artist: 'Daft Punk ft. Pharrell Williams',
  album: 'Random Access Memories',
  albumArt: 'https://i.scdn.co/image/ab67616d0000b273d4c6b5935e5e5f1f1e6e5b4c',
  url: 'https://open.spotify.com/track/2Foc5Q5nqNiosCNqttzHof',
}
```

## 🚀 Quick Start

1. **Edit your favorite tracks** in `/src/config/MusicWidget.ts`
2. **Update your profile links** in the same file
3. **Save the file**
4. **Refresh your portfolio** - Widget updates automatically!

## 💡 Tips

- Add 3-5 tracks for best rotation
- Use high-quality album art (640x640 or larger)
- Make sure Spotify links are public
- Test links before adding them
- Keep artist names concise for better display

## 🎯 Future Upgrade

When you're ready, you can upgrade to:
- **Last.fm integration** - Shows real-time listening
- **Spotify API** - Live currently playing track

But this static version works perfectly and looks great! 🎵

## 🐛 Troubleshooting

**Album art not showing:**
- Check if the image URL is accessible
- Try a different image URL
- Use Spotify's CDN URLs

**Links not working:**
- Make sure URLs are complete
- Check if tracks/profiles are public
- Test links in a browser first

**Widget not rotating:**
- Check `rotationInterval` in config
- Make sure you have multiple tracks
- Restart dev server

## 📚 Resources

- [Spotify for Developers](https://developer.spotify.com/)
- [Find Album Art](https://www.spotify.com/)
- [Spotify Track IDs](https://open.spotify.com/)
