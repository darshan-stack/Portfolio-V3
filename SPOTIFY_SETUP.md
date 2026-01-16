# Spotify Widget Setup Guide

## Overview
The Spotify widget displays your currently playing track on your portfolio. It uses the Spotify Web API to fetch real-time data.

## Current Status
⚠️ **Not Configured** - The Spotify widget is currently showing a fallback message because the API credentials are not set up.

## Setup Instructions

### Step 1: Create a Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click **"Create App"**
4. Fill in the details:
   - **App Name**: `Portfolio Spotify Widget` (or any name)
   - **App Description**: `Displays currently playing track on my portfolio`
   - **Redirect URI**: `http://localhost:3000/api/spotify/callback`
   - **Website**: Your portfolio URL
   - Check the box for **Web API**
5. Click **"Save"**

### Step 2: Get Your Credentials

1. In your app dashboard, click **"Settings"**
2. Copy your **Client ID**
3. Click **"View client secret"** and copy your **Client Secret**
4. Save these for later

### Step 3: Get Refresh Token

You need to authorize your app to access your Spotify data:

1. Create this authorization URL (replace `YOUR_CLIENT_ID`):
   ```
   https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/api/spotify/callback&scope=user-read-currently-playing%20user-read-playback-state
   ```

2. Open this URL in your browser
3. Click **"Agree"** to authorize
4. You'll be redirected to a URL like:
   ```
   http://localhost:3000/api/spotify/callback?code=AUTHORIZATION_CODE
   ```
5. Copy the `code` parameter value

6. Get your refresh token using this curl command (replace values):
   ```bash
   curl -X POST https://accounts.spotify.com/api/token \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=authorization_code" \
     -d "code=YOUR_AUTHORIZATION_CODE" \
     -d "redirect_uri=http://localhost:3000/api/spotify/callback" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET"
   ```

7. The response will include a `refresh_token` - save this!

### Step 4: Add to .env File

Add these lines to your `.env` file:

```env
SPOTIFY_CLIENT_ID="your-client-id-here"
SPOTIFY_CLIENT_SECRET="your-client-secret-here"
SPOTIFY_REFRESH_TOKEN="your-refresh-token-here"
```

### Step 5: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## How It Works

1. **API Route** (`/api/spotify/now-playing`):
   - Uses refresh token to get access token
   - Fetches currently playing track from Spotify API
   - Returns track data or 204 if nothing is playing

2. **useSpotify Hook**:
   - Fetches data from the API route
   - Polls every 30 seconds for updates
   - Handles loading and error states

3. **SpotifyWidget Component**:
   - Displays track information
   - Shows animated visualizer when playing
   - Falls back to "Not Playing" message when idle

## Fallback Behavior

When Spotify is not configured or nothing is playing:
- Shows "Not Playing" message
- Displays "Connect your Spotify account" as artist
- Shows Spotify logo instead of album art
- No animated visualizer

## Troubleshooting

### Widget shows "Not Playing"
- Check if Spotify credentials are in `.env`
- Verify you're playing music on Spotify
- Check browser console for errors
- Restart the dev server after adding credentials

### API returns 401 Unauthorized
- Refresh token might be expired
- Re-authorize the app (Step 3)
- Get a new refresh token

### API returns 204 No Content
- This is normal when nothing is playing
- Start playing music on Spotify

## Testing

1. Add credentials to `.env`
2. Restart dev server
3. Play a song on Spotify
4. Check your portfolio - widget should update within 30 seconds
5. Pause music - widget should show "Last played"

## Security Notes

- Never commit `.env` file to Git (it's in `.gitignore`)
- Keep your Client Secret private
- Refresh tokens don't expire unless revoked
- The widget only reads what you're currently playing

## Links

- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api)
- [Authorization Guide](https://developer.spotify.com/documentation/web-api/tutorials/code-flow)
- [Dashboard](https://developer.spotify.com/dashboard)
