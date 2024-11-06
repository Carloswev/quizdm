import React from 'react';

const Result = ({ result, questions, name }) => {
  const score = result.filter(answer => answer.isCorrect).length;

  let resultMessage;
  if (score < 4) {
    resultMessage = "Você tem um bom caminho a percorrer. Que tal revisar um pouco mais o conteúdo?";
  } else if (score >= 4 && score <= 7) {
    resultMessage = "Bom trabalho! Você tem um conhecimento equilibrado sobre o conteúdo.";
  } else {
    resultMessage = "Excelente! Você tem um conhecimento impressionante sobre o conteúdo!";
  }

  const restartQuiz = () => {
    localStorage.removeItem('quizAnswers');
    window.location.reload();
  };

  return (
    <div className="result-container">
      <h2>Resultado de {name}</h2>
      <p>{resultMessage}</p>
      <div className="result-details">
        <p>Você respondeu a {score} de {questions.length} questões corretamente!</p>
      </div>
      <button onClick={restartQuiz} className="restart-button">Reiniciar Quiz</button>
    </div>
  );
};

export default Result;
