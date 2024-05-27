// src/types/react-audio-visualize.d.ts
declare module 'react-audio-visualize' {
    const AudioVisualizer: React.ComponentType<{
        blob: Blob;
        width: number;
        height: number;
        barWidth?: number;
        gap?: number;
        barColor?: string;
    }>;

    export default AudioVisualizer;
}
