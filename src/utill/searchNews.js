const axios = require('axios');

const clientId = 'YOUR_CLIENT_ID'; // 자신의 Client ID로 대체해주세요
const clientSecret = 'YOUR_CLIENT_SECRET'; // 자신의 Client Secret로 대체해주세요

async function searchNews(query) {
    try {
        const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
            params: {
                query: query,
                display: 10 // 가져올 뉴스 개수
            },
            headers: {
                'X-Naver-Client-Id': clientId,
                'X-Naver-Client-Secret': clientSecret
            }
        });

        // API 요청 결과 처리
        console.log(response.data.items);
    } catch (error) {
        // API 요청 중 에러 처리
        console.error(error);
    }
}

// 사용 예시
searchNews('기사 검색어');
