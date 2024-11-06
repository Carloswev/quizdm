import React, { useState, useEffect } from 'react';

const Quiz = ({ questions, setResult, name }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]); // Armazenar respostas do usuário
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [timer, setTimer] = useState(30); // Timer de 30 segundos por pergunta

  useEffect(() => {
    if (timer > 0 && !isAnswered) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Limpar o intervalo quando o componente for desmontado ou o timer mudar
    } else if (timer === 0 && !isAnswered) {
      handleAnswer('Tempo esgotado'); // Se o tempo acabar, a pessoa perde automaticamente
    }
  }, [timer, isAnswered]);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    // Verificar se a resposta selecionada está correta
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const answer = {
      answer: selectedAnswer,
      isCorrect: isCorrect
    };

    // Adicionar a resposta ao array de respostas
    setAnswers([...answers, answer]);
    setIsAnswered(true);
    setFeedback(isCorrect ? "Resposta correta!" : "Resposta errada!");
    setTimer(30); // Resetar o timer após a resposta

    // Simular um delay antes de ir para a próxima questão
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsAnswered(false);
        setFeedback('');
        setTimer(30); // Reiniciar o timer para 30 segundos quando mudar para a próxima pergunta
      } else {
        // Salvar as respostas no localStorage
        localStorage.setItem('quizAnswers', JSON.stringify([...answers, answer]));
        setResult([...answers, answer]); // Passar as respostas para a página de resultados
      }
    }, 1000); // Delay de 1 segundo antes de mostrar a próxima pergunta
  };

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (timer / 30) * 100; // Barra de progresso com base no tempo restante

  return (
    <div className="quiz-container">
      <h2>Questão {currentQuestionIndex + 1}: {currentQuestion.question}</h2>
      <div className="options">
        {[currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers]
          .sort(() => Math.random() - 0.5) // Embaralha as alternativas
          .map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered} // Desabilitar os botões após a resposta
            >
              {option}
            </button>
          ))}
      </div>
      <div className="feedback">
        {isAnswered && <p>{feedback}</p>}
      </div>
      <div className="timer">
        <p>Tempo restante: {timer}s</p>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Quiz;
