import { SOUND_CONFIG } from '../constants/config';

/**
 * Play a synthesized sound using Web Audio API
 * @param {number} frequency - Sound frequency in Hz
 * @param {number} duration - Sound duration in seconds
 * @param {boolean} enabled - Whether sound is enabled
 */
export const playSound = (frequency, duration, enabled = true) => {
  if (!enabled) return;
  
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(SOUND_CONFIG.VOLUME, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + duration
    );
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    console.warn('Audio not supported:', error);
  }
};

/**
 * Play summoning sound sequence
 * @param {boolean} enabled - Whether sound is enabled
 */
export const playSummonSound = (enabled = true) => {
  const { SUMMON_START, SUMMON_MIDDLE } = SOUND_CONFIG;
  
  playSound(SUMMON_START.frequency, SUMMON_START.duration, enabled);
  setTimeout(() => {
    playSound(SUMMON_MIDDLE.frequency, SUMMON_MIDDLE.duration, enabled);
  }, SUMMON_MIDDLE.delay);
};

/**
 * Play success sound sequence
 * @param {boolean} enabled - Whether sound is enabled
 */
export const playSuccessSound = (enabled = true) => {
  const { SUMMON_SUCCESS, SUMMON_SUCCESS_END } = SOUND_CONFIG;
  
  playSound(SUMMON_SUCCESS.frequency, SUMMON_SUCCESS.duration, enabled);
  setTimeout(() => {
    playSound(SUMMON_SUCCESS_END.frequency, SUMMON_SUCCESS_END.duration, enabled);
  }, SUMMON_SUCCESS_END.delay);
};

/**
 * Play error sound
 * @param {boolean} enabled - Whether sound is enabled
 */
export const playErrorSound = (enabled = true) => {
  const { ERROR } = SOUND_CONFIG;
  playSound(ERROR.frequency, ERROR.duration, enabled);
};

/**
 * Play pumpkin click sound with varying pitch
 * @param {number} clickCount - Number of times clicked (affects pitch)
 * @param {boolean} enabled - Whether sound is enabled
 */
export const playPumpkinSound = (clickCount = 0, enabled = true) => {
  const basePitch = 400;
  const pitchIncrement = 50;
  const frequency = basePitch + (clickCount * pitchIncrement);
  
  playSound(frequency, 0.3, enabled);
};

