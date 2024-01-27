const container = document.querySelector('.container');
// 아래의 배열이 이제 DB에서 꺼내져와야 함, mock data 임.
const coffees = [
    {
        name: '스마클 임베디드 개발자',
        image: 'images/coffee1.jpg',
    },
    {
        name: '스마클 인공지능 연구원',
        image: 'images/coffee2.jpg',
    },
    {
        name: '방구석 백수',
        image: 'images/coffee3.jpg',
    },
    {
        name: '홈키퍼 전문가',
        image: 'images/coffee4.jpg',
    },
    {
        name: '구글 프론트엔드 엔지니어',
        image: 'images/coffee5.jpg',
    },
    {
        name: '메타 백엔드 엔지니어',
        image: 'images/coffee6.jpg',
    },
    {
        name: '스마클 CEO',
        image: 'images/coffee7.jpg',
    },
    {
        name: '삼송 CTO',
        image: 'images/coffee8.jpg',
    },
    {
        name: '아마존 생존 전문가',
        image: 'images/coffee9.jpg',
    },
];
/******   API    **** */
const API_URL = 'http://localhost:8080'; // 또는 IP 주소, 배포된 엔드포인트 주소

const getMentors = (filter) => {
    const response = fetch(`${API_URL}/mentors?filter=${filter}`, {
        method: 'GET',
    });
    if (response.ok) return response;
    else alert('멘토 목록을 불러오는 중 오류가 발생했어요.\n잠시 후 다시 시도해주세요...');
};

const getMentorDetail = (id) => {
    const response = fetch(`${API_URL}/mentors/${id}`, {
        method: 'GET',
    });
    if (response.ok) return response;
    else alert('멘토 상세 정보를 불러오는 중 오류가 발생했어요.\n잠시 후 다시 시도해주세요...');
};

const signIn = (id, password) => {
    const response = fetch(`${API_URL}/mentors/${id}`, {
        method: 'POST',
        body: JSON.stringify({ id, password }),
    });
    if (response.ok) return response;
    else alert('로그인 중  오류가 발생했어요.\n잠시 후 다시 시도해주세요...');
};

const signUp = (id, password, passwordCheck) => {
    if (password !== passwordCheck) {
        alert('비밀번호가 같지 않습니다.');
        return;
    }

    const response = fetch(`${API_URL}/mentors/${id}`, {
        method: 'POST',
        body: JSON.stringify({ id, password }),
    });
    if (response.ok) return response;
    else alert('회원가입 중 오류가 발생했어요.\n잠시 후 다시 시도해주세요...');
};

/******   API    **** */
// src -> https://source.unsplash.com/random/?programming/300x300
const showCoffees = () => {
    let output = '';
    coffees.forEach(
        ({ name, image }) =>
            (output += `
              <div class="card">
                <img class="card--avatar" src="https://source.unsplash.com/random/?programming/300x300""/>
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">멘토 신청하기</a>
              </div>
              `)
    );
    container.innerHTML = output;
};

document.addEventListener('DOMContentLoaded', showCoffees);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/serviceWorker.js')
            .then((res) => console.log('service worker registered'))
            .catch((err) => console.log('service worker not registered', err));
    });
}
