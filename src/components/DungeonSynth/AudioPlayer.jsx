import { useEffect, useRef, useState } from 'react';
import { audioFiles } from '../../utils/audioFiles';
import Pause from '../../svgs/Pause';
import Play from '../../svgs/Play';
import Volume from '../../svgs/Volume';

export default function AudioPlayer() {
  const audioRef = useRef();
  const canvasRef = useRef();
  const progressSliderRef = useRef();
  const volumeSliderRef = useRef();

  const [currentFile, setCurrentFile] = useState(audioFiles[0]);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('-:--');
  const [isEnded, setIsEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressSliderMax, setProgressSliderMax] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(0.5);

  const audioContext = new AudioContext();
  let analyzer, audioSource, bufferLength, canvasContext, dataArray;
  let isProgressSliderClicked = false;

  useEffect(() => {
    if (audioRef.current && !audioSource) {
      updateCurrentFile();
      canvasContext = canvasRef.current?.getContext('2d');
      audioSource = audioContext.createMediaElementSource(audioRef.current);

      audioSource.connect(audioContext.destination);

      analyzer = audioContext.createAnalyser();

      audioSource.connect(analyzer);
      analyzer.fftSize = 2048; // Fast Fourier Transform size

      bufferLength = analyzer.frequencyBinCount;
      dataArray = new Uint8Array(bufferLength);

      drawVisualizer();

      audioRef.current.volume = 0.5;
      setVolumeLevel(0.5);

      audioRef.current.addEventListener('timeupdate', updateCurrentTime);
      audioRef.current.addEventListener('ended', updateCurrentFile);
      progressSliderRef.current?.addEventListener(
        'mousedown',
        progressSliderIsBeingUsed
      );
      progressSliderRef.current?.addEventListener(
        'mouseup',
        progressSliderIsNotBeingUsed
      );

      return () => {
        audioRef.current?.removeEventListener('timeupdate', updateCurrentTime);
        audioRef.current?.removeEventListener('ended', updateCurrentFile);
        progressSliderRef.current?.addEventListener(
          'mousedown',
          progressSliderIsBeingUsed
        );
        progressSliderRef.current?.addEventListener(
          'mouseup',
          progressSliderIsNotBeingUsed
        );
      };
    }
  }, [audioRef]);

  useEffect(() => {
    if (isEnded) {
      setTimeout(() => {
        audioRef.current?.play();
        setIsEnded(false);
      }, 100);
    }
  }, [isEnded]);

  useEffect(() => {
    setCurrentTime('0:00');

    setTimeout(() => {
      if (duration !== audioRef.current?.duration) {
        formatTime(audioRef.current.duration, setDuration);
        setProgressSliderMax(Math.floor(audioRef.current.duration));
        progressSliderRef.current.value = 0;
      }
    }, 100);
  }, [currentFile]);

  const constructFile = () => {
    const fileSrc = audioRef.current?.attributes?.src?.value;
    const matchedFile = audioFiles.filter((f) => f.src === fileSrc);

    return matchedFile[0];
  };

  const drawVisualizer = () => {
    const pastelPurple = '#B19CD9';
    const coral = '#FF7F50';
    const electricBlue = '#00FFFF';

    // Schedule the next frame
    requestAnimationFrame(drawVisualizer);

    // Clear the canvas
    canvasContext.clearRect(
      0,
      0,
      canvasRef.current?.width,
      canvasRef.current?.height
    );

    // Get the current frequency data
    analyzer.getByteFrequencyData(dataArray);

    // Draw the visualizer bars
    const barWidth = canvasRef.current?.width / bufferLength;
    let x = 0;

    if (canvasContext && barWidth) {
      // Create a gradient for the bars
      const gradient = canvasContext.createLinearGradient(
        0,
        0,
        0,
        canvasRef.current?.height
      );
      gradient.addColorStop(0, electricBlue); // Start color
      gradient.addColorStop(0.5, coral); // Middle color
      gradient.addColorStop(1, pastelPurple); // End color

      // Draw bars
      for (let i = 0; i < bufferLength; i++) {
        const barHeight = (dataArray[i] / 255) * canvasRef.current?.height;

        // Set the fill style to the gradient
        canvasContext.fillStyle = gradient;

        // Draw the bar using the gradient fill style
        canvasContext.fillRect(
          x,
          canvasRef.current?.height - barHeight,
          barWidth,
          barHeight
        );
        x += barWidth + 1;
      }
    }
  };

  const formatTime = (timeToFormat, setter) => {
    if (timeToFormat) {
      const minutes = Math.trunc(timeToFormat / 60);
      let seconds = Math.trunc(timeToFormat - minutes * 60);

      if (seconds < 10) seconds = `0${seconds}`;

      setter(`${minutes}:${seconds}`);
    }
  };

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleProgressSliderChange = (e) => {
    const isLeft = 37;
    const isRight = 39;
    const isUp = 38;
    const isDown = 40;
    const isHome = 36;
    const isEnd = 35;

    switch (e.keyCode) {
      case isLeft:
        audioRef.current.currentTime -= 5;
        break;
      case isRight:
        audioRef.current.currentTime += 5;
        break;
      case isUp:
        audioRef.current.currentTime += 30;
        break;
      case isDown:
        audioRef.current.currentTime -= 30;
        break;
      case isHome:
        audioRef.current.currentTime = 0;
        break;
      case isEnd:
        audioRef.current.currentTime =
          Math.floor(audioRef.current?.duration) - 1;
        break;
      default:
        audioRef.current.currentTime = e.target.value;
        break;
    }
  };

  const handleVolumeSliderChange = (e) => {
    audioRef.current.volume = e.target.value;
    setVolumeLevel(e.target.value);
  };

  const progressSliderIsBeingUsed = () => (isProgressSliderClicked = true);
  const progressSliderIsNotBeingUsed = () => (isProgressSliderClicked = false);

  const updateCurrentFile = () => {
    if (audioRef.current?.ended) {
      const adjustedLength = audioFiles.length - 1;
      const curFile = constructFile();
      const curIndex = audioFiles.indexOf(curFile);
      let newFile;

      if (curIndex === adjustedLength) newFile = audioFiles[0];
      else newFile = audioFiles[curIndex + 1];

      setCurrentFile(newFile);
      setIsEnded(true);
    }
  };

  const updateCurrentTime = () => {
    formatTime(audioRef.current?.currentTime, setCurrentTime);

    if (!isProgressSliderClicked) {
      progressSliderRef.current.value = audioRef.current?.currentTime;
    }
  };

  return (
    <div className="audio-player">
      <canvas ref={canvasRef}></canvas>
      <audio ref={audioRef} id="audio" src={currentFile.src}>
        <p>
          Your browser does not support audio. You can listen{' '}
          <a
            href="https://cavebirdrecords.bandcamp.com/album/the-softest-feeling-the-quietest-touch"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </audio>
      <div className="audio-player__controls" aria-label="Audio player">
        <button
          className="audio-player__play-btn"
          aria-controls="audio"
          title={isPlaying ? 'Pause' : 'Play'}
          onClick={handlePlayPauseClick}
        >
          {isPlaying ? (
            <>
              <Pause />
              <span className="a11y">Pause</span>
            </>
          ) : (
            <>
              <Play className="audio-player__play-icon" />
              <span className="a11y">Play</span>
            </>
          )}
        </button>
        <div className="audio-player__info">
          <p>{currentFile.title}</p>
          <div className="audio-player__progress">
            <span className="audio-player__time">{currentTime}</span>
            <label className="a11y" htmlFor="song-progress">
              Song progress
            </label>
            <input
              ref={progressSliderRef}
              id="song-progress"
              className="audio-player__progress-slider"
              type="range"
              min="0"
              max={progressSliderMax}
              onClick={handleProgressSliderChange}
              onKeyDown={handleProgressSliderChange}
            />
            <span className="audio-player__time">{duration}</span>
          </div>
        </div>
        <div className="audio-player__volume">
          <Volume />
          <label className="a11y" htmlFor="volume">
            Volume
          </label>
          <input
            ref={volumeSliderRef}
            id="volume"
            className="audio-player__volume-slider"
            type="range"
            min="0"
            max="1"
            step={0.1}
            value={volumeLevel}
            onChange={handleVolumeSliderChange}
            onKeyDown={handleVolumeSliderChange}
          />
        </div>
      </div>
    </div>
  );
}
