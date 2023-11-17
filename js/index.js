const questionCard = document.querySelector('[data-js="question-card"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const questionInput = document.querySelector('[data-js="questionInput"]');
const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card"]');
const tagInput = document.querySelector('[data-js="tagInput"]')
const quizData = [];

function addBookmarkClickHandler(bookmark) {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('toggleBackground');
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const questionValue = questionInput.value;
  const answerValue = answerInput.value;
  const tagValue = tagInput.value
  const formattedTagValue = `#${tagValue}`;

  quizData.push({ question: questionValue, answer: answerValue, tags: formattedTagValue });

  const card = document.createElement('div');
  const bookmarkImage = document.createElement('img');
  const questionElem = document.createElement('h2');
  const answerElem = document.createElement('p');
  const tagElem = document.createElement('p');
  const showAnswerButton = document.createElement('button');

  bookmarkImage.src = '/assets/bookmark-regular.svg';
  bookmarkImage.alt = 'bookmark';
  bookmarkImage.classList.add('bookmark');
  addBookmarkClickHandler(bookmarkImage);
  tagElem.classList.add('tag')

  questionElem.textContent = questionValue;
  answerElem.textContent = answerValue;
  tagElem.textContent = formattedTagValue;
  answerElem.style.display = 'none';

  showAnswerButton.textContent = 'Show Answer';

  card.appendChild(bookmarkImage);
  card.appendChild(questionElem);
  card.appendChild(answerElem);
  card.appendChild(showAnswerButton);
  card.appendChild(tagElem);

  card.classList.add('question-card');

  showAnswerButton.addEventListener('click', () => {
    answerElem.style.display = answerElem.style.display === 'none' ? 'block' : 'none';
  });

  cardContainer.appendChild(card);

  e.target.reset();
  console.log(quizData)
});

