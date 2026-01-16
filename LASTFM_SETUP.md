# Last.fm Music Widget Setup (Easier Alternative to Spotify!)

## Why Last.fm?
✅ **No app approval needed** - Instant API access  
✅ **No OAuth complexity** - Just username + API key  
✅ **Works with any music service** - Spotify, Apple Music, YouTube Music, etc.  
✅ **Free forever** - No restrictions  

## Quick Setup (2 minutes!)

### Step 1: Create Last.fm Account
1. Go to https://www.last.fm/join
2. Sign up (or login if you have an account)

### Step 2: Connect Your Music Service
1. Go to https://www.last.fm/settings/applications
2. Connect your Spotify/Apple Music/YouTube Music account
3. This allows Last.fm to track what you're listening to

### Step 3: Get API Key
1. Go to https://www.last.fm/api/account/create
2. Fill in:
   - **Application name**: `Portfolio Music Widget`
   - **Application description**: `Shows my currently playing music`
   - **Callback URL**: Leave blank or use `http://localhost:3000`
3. Click **Submit**
4. Copy your **API Key** (you don't need the shared secret)

### Step 4: Add to .env
Add these 2 lines to your `.env` file:

```env
LASTFM_API_KEY="your-api-key-here"
LASTFM_USERNAME="your-lastfm-username"
```

### Step 5: Restart Dev Server
```bash
# Press Ctrl+C to stop
npm run dev
```

## How It Works

1. **Scrobbling**: Last.fm tracks what you play on Spotify/Apple Music/etc.
2. **API**: Your portfolio fetches your recent tracks from Last.fm
3. **Display**: Shows currently playing or last played track
4. **Updates**: Refreshes every 30 seconds

## Testing

1. Play a song on Spotify (or any connected service)
2. Wait ~30 seconds for Last.fm to scrobble it
3. Check your portfolio - it should show the track!
4. The widget updates every 30 seconds

## Advantages Over Spotify API

| Feature | Last.fm | Spotify API |
|---------|---------|-------------|
| Setup Time | 2 minutes | 15+ minutes |
| App Approval | ✅ Instant | ❌ Can be on hold |
| OAuth Flow | ✅ Not needed | ❌ Complex |
| Works With | All services | Spotify only |
| Restrictions | ✅ None | ❌ Rate limits |

## Fallback Behavior

The widget now tries:
1. **Last.fm first** (if configured)
2. **Spotify second** (if Last.fm fails)
3. **Fallback message** (if both fail)

So you can use either service, or both!

## Troubleshooting

### Widget shows "Not Playing"
- Make sure you're playing music
- Check if Last.fm is scrobbling (visit your Last.fm profile)
- Verify credentials in `.env`
- Wait 30-60 seconds after starting a song

### Last.fm not scrobbling
- Check connection at https://www.last.fm/settings/applications
- Reconnect your music service
- Make sure scrobbling is enabled in your music app

### API Key Invalid
- Double-check the API key in `.env`
- Make sure there are no extra spaces
- Restart the dev server

## Links

- [Last.fm API Documentation](https://www.last.fm/api)
- [Create API Account](https://www.last.fm/api/account/create)
- [Connected Applications](https://www.last.fm/settings/applications)
- [Your Profile](https://www.last.fm/user/YOUR_USERNAME)

## Privacy

- Last.fm only shows what you're publicly listening to
- You can make your profile private in settings
- The widget only reads your recent tracks
- No authentication tokens needed
