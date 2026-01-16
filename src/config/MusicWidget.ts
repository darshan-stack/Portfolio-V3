// Music Widget Configuration
// Customize your favorite tracks here!

export interface Track {
    title: string;
    artist: string;
    album: string;
    albumArt: string;
    url: string;
}

// Your favorite tracks - these will rotate in the widget
export const FAVORITE_TRACKS: Track[] = [
    {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36',
        url: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
    },
    {
        title: 'Starboy',
        artist: 'The Weeknd ft. Daft Punk',
        album: 'Starboy',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452',
        url: 'https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB',
    },
    {
        title: 'One Dance',
        artist: 'Drake ft. Wizkid',
        album: 'Views',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de',
        url: 'https://open.spotify.com/track/12VozmbFcHHfGJN1vUYw3W',
    },
];

// Your music service profiles
export const MUSIC_PROFILES = {
    spotify: 'https://open.spotify.com/user/YOUR_SPOTIFY_ID',
    appleMusic: 'https://music.apple.com/profile/YOUR_APPLE_ID',
    youtubeMusic: 'https://music.youtube.com/channel/YOUR_YT_ID',
    lastfm: 'https://www.last.fm/user/YOUR_LASTFM_USERNAME',
};

// Widget settings
export const WIDGET_CONFIG = {
    rotationInterval: 5000, // Time between track changes (ms)
    showVisualizer: true, // Show animated bars
    showMusicLinks: true, // Show music service links
};
