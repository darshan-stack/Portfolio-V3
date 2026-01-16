'use client';

import React from 'react';

export default function DiscordWidget() {
    const discordId = '1288864021025525840';

    return (
        <section className="py-8 relative">
            <div className="flex justify-center">
                <iframe
                    src={`https://lanyard.cnrad.dev/${discordId}`}
                    width="400"
                    height="200"
                    frameBorder="0"
                    className="rounded-2xl border border-white/15 bg-gradient-to-br from-purple-500/5 to-transparent"
                ></iframe>
            </div>
        </section>
    );
}
