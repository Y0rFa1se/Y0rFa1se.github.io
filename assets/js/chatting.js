function body_load() {
    return true;
}

function send(event) {
    event.preventDefault();  // 폼 제출 기본 동작을 막습니다

    body_load();  // 필요한 로직 처리 (예: 폼 데이터 검증 등)
    
    console.log('폼 제출 시작');
    
    const form = document.querySelector('.input form');
    const formData = new FormData(form);  // 폼 데이터를 FormData 객체로 생성

    // 비동기적으로 폼 데이터 전송
    fetch('http://y0rfa1se.iptime.org/chatting/send', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // 응답이 정상인지 확인
        if (!response.ok) {
            throw new Error('서버 오류');
        }
        return response.json();  // 응답을 JSON으로 파싱
    })
    .then(data => {
        console.log(data);
        
        // 서버 응답에서 status가 success인 경우
        if (data.status === 'success') {
            console.log('폼 제출 성공');
            // 리다이렉션 (현재 페이지로 리다이렉션)
            window.location.href = window.location.href;
        } else {
            // 실패한 경우 예외 처리
            console.error('폼 제출 실패:', data);
            alert('폼 제출에 실패했습니다. 다시 시도해주세요.');
        }
    })
    .catch(error => {
        // 오류 처리
        console.error('서버 요청 실패:', error);
        alert('서버 요청 중 오류가 발생했습니다. 다시 시도해주세요.');
    });
}

// 이벤트 리스너에서 send 함수 호출
document.querySelector('.input form').addEventListener('submit', function(event) {
    send(event);
});
