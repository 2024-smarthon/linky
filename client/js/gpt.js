async function generateText() {
    const keywordInput = document.getElementById('keywordInput');
    // input에 입력된 값을 가져오기
    const keywordValue = keywordInput.value;
    // keywordValue에는 input에 입력된 값이 들어있음;
    console.log(keywordValue);

    const prompt = `${keywordValue}로 현업 멘토에게 할 질문 알려줘!`;

    const apiKey = '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';

    const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt,
            max_tokens: 300,
        }),
    });

    const data = await response.json();
    console.log(data);
    document.getElementById('result').innerText = data.choices[0].text;
}

/*
async function startChat(keyword) {
  try {
    const response = await openai.Completion.create({
      engine: 'text-davinci-003', // 엔진을 선택하세요 (gpt-3.5-turbo도 가능)
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: '안녕하세요.' },
      ],
    });

    // 특정 키워드에 대한 예의있는 질문 생성
    const userMessage = { role: 'user', content: `${keyword}라는 키워드를 가지고 현업 멘토에게 할 수 있는 질문들을 만들어줄래?` };
    response.choices[0].message.content = userMessage.content;
    response.messages.push(userMessage);

    // 생성된 질문 출력
    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
  }
}
*/

// JavaScript를 사용하여 hover 이벤트 구현
const mentorInfo = document.querySelector('.mentor-info');
const careerDetails = mentorInfo.querySelector('.career-details');

mentorInfo.addEventListener('mouseenter', function () {
    careerDetails.style.display = 'block';
});

mentorInfo.addEventListener('mouseleave', function () {
    careerDetails.style.display = 'none';
});

/*
// ChatGPT 대화 시작
startChat();
*/

function logout() {
    if (window.confirm('정말 로그아웃 하시겠습니까?')) {
        localStorage.clear();

        window.location.href = '../index.html';
    }
}
