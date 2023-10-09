'use client'

import { useEffect, useRef } from 'react'

interface VideoProps {
    video: string
    videoWidth: number
    videoHeight: number
    alt: string
}

export default function Video({ video, videoWidth, videoHeight, alt }: VideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        // Ensure the video plays on load
        videoRef.current?.play()
    }, [])

    return (
        <div className="video-container">
            <video
                ref={videoRef}
                width={videoWidth}
                height={videoHeight}
                loop
                controls
                autoPlay // Autoplay attribute
                muted // Muted attribute to comply with browser autoplay policies
            >
                <source src={video} type="video/mp4" />
                {alt} // Your browser does not support the video tag.
            </video>
        </div>
    )
}
