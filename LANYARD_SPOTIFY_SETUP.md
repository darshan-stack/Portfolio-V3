# Live Spotify via Discord (Lanyard) - Setup Guide

## ✅ What You Get

**Real-time Spotify tracking** using Discord + Lanyard:
- Shows what you're currently playing on Spotify
- Updates every 10 seconds
- No Spotify API credentials needed
- No app approval required
- Works immediately!

## 🎯 How It Works

1. **You connect Spotify to Discord**
2. **Lanyard tracks your Discord presence**
3. **Your portfolio shows your live Spotify activity**
4. **Updates automatically in real-time**

## 📋 Setup Steps (2 Minutes)

### Step 1: Connect Spotify to Discord

1. **Open Discord** (desktop or mobile)
2. **Go to User Settings** (⚙️ gear icon)
3. **Click "Connections"**
4. **Click "Add" or the Spotify icon**
5. **Login to Spotify** and authorize
6. **Enable "Display on profile"** toggle
7. **Done!** ✅

### Step 2: Join Lanyard Discord Server

1. **Join this server**: https://discord.gg/lanyard
2. **That's it!** Lanyard will start tracking you

### Step 3: Test It

1. **Play a song on Spotify**
2. **Check your Discord profile** - Should show "Listening to Spotify"
3. **Visit your portfolio** - Should show the song!

## 🎵 What Shows on Your Portfolio

**When Playing Music:**
- ✅ Song title
- ✅ Artist name
- ✅ Album name
- ✅ Album artwork
- ✅ Animated visualizer
- ✅ "Now Playing (Live)" badge
- ✅ Link to song on Spotify

**When Not Playing:**
- Shows "Not Playing" message
- Instructions to connect Spotify

## ⚙️ Configuration

Your Discord ID is already configured:
```
1288864021025525840
```

Located in: `/src/hooks/use-spotify.ts`

## 🔄 Update Frequency

- **Polls every 10 seconds** for new data
- **Instant updates** when you change songs
- **No rate limits** (Lanyard is free)

## 🎯 Advantages Over Spotify API

| Feature | Lanyard | Spotify API |
|---------|---------|-------------|
| Setup Time | 2 min | 15+ min |
| Credentials | None | Client ID, Secret, Token |
| App Approval | Not needed | Can be blocked |
| Real-time | ✅ Yes | ✅ Yes |
| Free | ✅ Yes | ✅ Yes |
| Works Now | ✅ Yes | ❌ Blocked |

## 🐛 Troubleshooting

### Widget shows "Not Playing"

**Check:**
1. Is Spotify connected to Discord?
2. Is "Display on profile" enabled?
3. Are you in the Lanyard Discord server?
4. Are you playing music on Spotify?

**Fix:**
- Reconnect Spotify to Discord
- Enable profile display
- Join Lanyard server
- Play a song

### No album art showing

**Cause:** Some songs don't have album art
**Fix:** Try a different song

### Updates are slow

**Normal:** Updates every 10 seconds
**If slower:** Check your internet connection

## 🔒 Privacy

**What Lanyard Sees:**
- Your Discord presence
- Your Spotify activity (if connected)
- Your Discord ID

**What Lanyard Doesn't See:**
- Your messages
- Your servers
- Your friends
- Personal data

**Control:**
- Disconnect Spotify anytime in Discord settings
- Leave Lanyard server to stop tracking
- Toggle "Display on profile" on/off

## 📝 Components Created

1. **`/src/hooks/use-spotify.ts`** - Fetches Lanyard data
2. **`/src/components/landing/LiveSpotifyWidget.tsx`** - Displays live music
3. **`/src/components/landing/DiscordWidget.tsx`** - Discord presence (optional)

## 🎨 To Use Live Widget

Replace your current SpotifyWidget with LiveSpotifyWidget:

```tsx
// In src/app/page.tsx
import LiveSpotifyWidget from '@/components/landing/LiveSpotifyWidget';

// Replace:
<SpotifyWidget />

// With:
<LiveSpotifyWidget />
```

## ✨ Benefits

- ✅ **No Spotify API setup**
- ✅ **Works immediately**
- ✅ **Real-time updates**
- ✅ **No credentials needed**
- ✅ **Free forever**
- ✅ **Easy to maintain**

## 🔗 Resources

- [Lanyard Website](https://github.com/Phineas/lanyard)
- [Lanyard Discord](https://discord.gg/lanyard)
- [Discord Connections](https://discord.com/settings/connections)

## 🎯 Next Steps

1. Connect Spotify to Discord
2. Join Lanyard server
3. Play music
4. See it live on your portfolio!
