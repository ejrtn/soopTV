const NodeMediaServer = require('node-media-server');

/**
 * 코드 설명
 */

// RTMP 서버 설정
const config = {
    logType: 0,                    // 1: info, 2: warn, 3: error
    rtmp: {
        port: 1935,                // RTMP 포트 (기본 1935 포트 사용)
        chunk_size: 60000,         // 데이터 청크 크기 (60KB)
        live: true,                // Enable live streaming
        gop_cache: true,           // GOP 캐시 사용 여부
        ping: 1,                  // RTMP 핑 주기 (초 단위)
        ping_interval: 1          // 핑 간격 (초 단위)
    },
    http: {
        port: 8000, // HTTP 포트
        allow_origin: '*', // CORS 허용
        mediaroot: './media',
    },
    // HLS 설정 (RTMP를 HTTP Live Streaming으로 변환)
    trans: {
        ffmpeg: 'D:\\ffmpeg-2024-11-03-git-df00705e00-full_build\\bin\\ffmpeg.exe',  // FFmpeg 경로 (운영 체제에 맞게 설정)
        tasks: [
        {
            app: "live",
            hls: true,
            hlsFlags: "[hls_time=10:hls_list_size=1:hls_flags=delete_segments:hls_allow_cache=1]",
        }
        ],
        MediaRoot: "./media",
    }
};


// RTMP 서버 실행
const nms = new NodeMediaServer(config);
nms.run();