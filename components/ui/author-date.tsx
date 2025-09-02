import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import NoelImage from '@/lib/images/Showcase-CEO.png'

export default function AuthorDate({ dateTime, dateText }: { dateTime: string; dateText: string }) {
    return (
        <div className="mx-auto flex items-center gap-4 text-gray-400 mt-10">
            {/* Author's Avatar or Initials */}
            <Avatar className="w-10 h-10">
                <AvatarImage src={NoelImage.src} alt="Abu Sharqi Ramadan" />
                <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            {/* Author Name and Date */}
            <div>
                <p className="font-semibold text-slate-700">
                    Published by: <span className="text-teal-400">Abu Sharqi Ramadan</span>
                </p>
                <p className="text-sm">
                    <time dateTime={dateTime}>{dateText}</time>
                </p>
            </div>
        </div>
    );
};