/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import {Blob} from '@google/genai';

function encode(bytes) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

function createBlob(data: Float32Array): Blob {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    // convert float32 -1 to 1 to int16 -32768 to 32767
    int16[i] = data[i] * 32768;
  }

  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const bufferLength = data.length / 2 / numChannels;
  const buffer = ctx.createBuffer(numChannels, bufferLength, sampleRate);

  const dataInt16 = new Int16Array(data.buffer);
  const dataFloat32 = new Float32Array(dataInt16.length);
  for (let i = 0; i < dataInt16.length; i++) {
    dataFloat32[i] = dataInt16[i] / 32768.0;
  }

  // De-interleave audio channels efficiently
  if (numChannels === 1) {
    buffer.copyToChannel(dataFloat32, 0);
  } else {
    for (let channelIndex = 0; channelIndex < numChannels; channelIndex++) {
      const channelData = buffer.getChannelData(channelIndex);
      for (
        let i = 0, j = channelIndex;
        j < dataFloat32.length;
        i++, j += numChannels
      ) {
        channelData[i] = dataFloat32[j];
      }
    }
  }

  return buffer;
}

export {createBlob, decode, decodeAudioData, encode};
