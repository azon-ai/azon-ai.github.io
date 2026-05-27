import React, { useRef, useState } from 'react';
import { ArrowRight, Mail, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function HeroSection({ isDark, azonVideo }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {azonVideo ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={azonVideo} type="video/mp4" />
          </video>
        ) : (
          <div
            className={`absolute inset-0 ${
              isDark
                ? 'bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900'
                : 'bg-gradient-to-br from-blue-400 via-cyan-300 to-blue-200'
            }`}
          >
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#af7ed4]/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          </div>
        )}

        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950'
              : 'bg-gradient-to-b from-white/40 via-white/30 to-white'
          }`}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`inline-block px-4 py-1 mb-6 rounded-full backdrop-blur-sm ${
            isDark
              ? 'bg-[#af7ed4]/20 border border-blue-400/40'
              : 'bg-[#af7ed4]/10 border border-[#af7ed4]/30'
          }`}
        >
          <span className={`text-sm ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>
            Safe & Risk-aware AI
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          We Certify
          <span className="block bg-gradient-to-r from-[#af7ed4] to-[#c79ce7] bg-clip-text text-transparent">
            Safe & Risk-aware AI
          </span>
        </h1>

        <p className={`text-lg sm:text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
          Powering fast and safe AI adoption for Engineering Applications. The trusted toolchain for development, training and validation of safe autonomous systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demo"
            className="bg-gradient-to-r from-[#7f4aa8] via-[#af7ed4] to-[#dfc0f3] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#af7ed4]/50 transition flex items-center justify-center gap-2"
          >
            See Live Demo <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className={`backdrop-blur-md border px-8 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
              isDark
                ? 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                : 'bg-slate-900/10 border-slate-900/30 text-slate-900 hover:bg-slate-900/20'
            }`}
          >
            <Mail className="w-4 h-4" /> Get in Touch
          </a>
        </div>
      </div>

      {azonVideo && (
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          <button
            onClick={togglePlay}
            className={`w-10 h-10 backdrop-blur-md border rounded-full flex items-center justify-center transition ${
              isDark
                ? 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                : 'bg-slate-900/10 border-slate-900/30 text-slate-900 hover:bg-slate-900/20'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={toggleMute}
            className={`w-10 h-10 backdrop-blur-md border rounded-full flex items-center justify-center transition ${
              isDark
                ? 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                : 'bg-slate-900/10 border-slate-900/30 text-slate-900 hover:bg-slate-900/20'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}
    </section>
  );
}
