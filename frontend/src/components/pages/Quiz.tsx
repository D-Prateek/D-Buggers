import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trophy, Star, CheckCircle, XCircle, RotateCcw, Award } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface QuizProps {
  onPageChange: (page: string) => void;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number;
  reward: string;
}

export default function Quiz({ onPageChange }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "How much folic acid should pregnant women take daily to prevent neural tube defects?",
      options: ["200 mcg", "400-800 mcg", "1000 mcg", "100 mcg"],
      correctAnswer: 1,
      explanation: "Pregnant women should take 400-800 mcg of folic acid daily to prevent neural tube defects like spina bifida.",
      category: "Nutrition"
    },
    {
      id: 2,
      question: "During which trimester is it safest to travel by air?",
      options: ["First trimester", "Second trimester", "Third trimester", "Any trimester"],
      correctAnswer: 1,
      explanation: "The second trimester (14-28 weeks) is generally considered the safest time to travel as morning sickness has usually subsided and the risk of preterm labor is lower.",
      category: "Safety"
    },
    {
      id: 3,
      question: "What is the recommended weight gain during pregnancy for women with normal BMI?",
      options: ["10-15 lbs", "25-35 lbs", "40-50 lbs", "15-25 lbs"],
      correctAnswer: 1,
      explanation: "Women with normal BMI (18.5-24.9) should gain 25-35 pounds during pregnancy for optimal health of mother and baby.",
      category: "Health"
    },
    {
      id: 4,
      question: "Which sleeping position is recommended during the third trimester?",
      options: ["On your back", "On your stomach", "On your left side", "Any position is fine"],
      correctAnswer: 2,
      explanation: "Sleeping on your left side improves blood flow to the placenta and helps prevent the uterus from pressing on major blood vessels.",
      category: "Health"
    },
    {
      id: 5,
      question: "How much additional calories does a pregnant woman need in the second trimester?",
      options: ["100 calories", "340 calories", "500 calories", "200 calories"],
      correctAnswer: 1,
      explanation: "During the second trimester, pregnant women need about 340 additional calories per day to support the growing baby.",
      category: "Nutrition"
    },
    {
      id: 6,
      question: "What is the normal range for fetal heart rate?",
      options: ["100-140 bpm", "120-160 bpm", "160-180 bpm", "80-120 bpm"],
      correctAnswer: 1,
      explanation: "A normal fetal heart rate ranges from 120-160 beats per minute, indicating a healthy baby.",
      category: "Health"
    },
    {
      id: 7,
      question: "Which fish should be completely avoided during pregnancy due to high mercury content?",
      options: ["Salmon", "Tuna", "Shark", "Sardines"],
      correctAnswer: 2,
      explanation: "Shark, along with swordfish, king mackerel, and tilefish, should be avoided due to high mercury levels that can harm the baby's developing nervous system.",
      category: "Nutrition"
    },
    {
      id: 8,
      question: "When should you call your healthcare provider about contractions?",
      options: ["Any contractions", "Contractions every 10 minutes", "Contractions every 5 minutes for 1 hour", "Only if water breaks"],
      correctAnswer: 2,
      explanation: "Call your healthcare provider when contractions are 5 minutes apart, lasting 1 minute each, for at least 1 hour (5-1-1 rule).",
      category: "Labor"
    },
    {
      id: 9,
      question: "What is the recommended amount of exercise for pregnant women per week?",
      options: ["30 minutes", "150 minutes", "300 minutes", "60 minutes"],
      correctAnswer: 1,
      explanation: "Pregnant women should aim for at least 150 minutes of moderate-intensity exercise per week, as recommended by health organizations.",
      category: "Exercise"
    },
    {
      id: 10,
      question: "Which prenatal test is typically done between 15-20 weeks to check for genetic disorders?",
      options: ["Ultrasound", "Blood test", "Amniocentesis", "Glucose test"],
      correctAnswer: 2,
      explanation: "Amniocentesis is performed between 15-20 weeks to detect genetic disorders and neural tube defects by testing amniotic fluid.",
      category: "Medical Tests"
    }
  ];

  useEffect(() => {
    if (quizStarted) {
      setUserAnswers(new Array(questions.length).fill(null));
      setStartTime(Date.now());
    }
  }, [quizStarted, questions.length]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = selectedAnswer;
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getReward = (score: number, total: number): string => {
    const percentage = (score / total) * 100;
    if (percentage >= 90) return "🏆 Pregnancy Expert - 50 Health Points!";
    if (percentage >= 80) return "🥇 Maternal Health Champion - 40 Health Points!";
    if (percentage >= 70) return "🥈 Health Enthusiast - 30 Health Points!";
    if (percentage >= 60) return "🥉 Learning Progress - 20 Health Points!";
    return "📚 Keep Learning - 10 Health Points!";
  };

  const getScoreColor = (score: number, total: number): string => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const renderWelcomeScreen = () => (
    <div className="text-center space-y-6">
      <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto flex items-center justify-center">
        <Trophy className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900">Pregnancy Knowledge Quiz</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Test your knowledge about pregnancy, nutrition, and maternal health. 
        Learn important facts while earning health points and rewards!
      </p>
      
      <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">10</div>
          <div className="text-sm text-gray-600">Questions</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">~5</div>
          <div className="text-sm text-gray-600">Minutes</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">50</div>
          <div className="text-sm text-gray-600">Max Points</div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
        <h3 className="font-semibold text-yellow-800 mb-2">🎯 How it works:</h3>
        <ul className="text-sm text-yellow-700 space-y-1 text-left">
          <li>• Answer 10 multiple-choice questions about pregnancy</li>
          <li>• Get instant explanations for each answer</li>
          <li>• Earn health points based on your performance</li>
          <li>• Learn important maternal health information</li>
        </ul>
      </div>

      <Button onClick={handleStartQuiz} size="lg" className="px-8 py-3">
        Start Quiz
      </Button>
    </div>
  );

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    
    return (
      <div className="space-y-6">

        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <div className="text-sm text-gray-600">
            Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="flex justify-center">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            {question.category}
          </span>
        </div>

        <Card className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {question.question}
          </h3>

          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? showExplanation
                      ? index === question.correctAnswer
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-red-500 bg-red-50 text-red-800'
                      : 'border-purple-500 bg-purple-50 text-purple-800'
                    : showExplanation && index === question.correctAnswer
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-300 hover:border-purple-300 hover:bg-purple-50'
                } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showExplanation && (
                    <div>
                      {index === question.correctAnswer ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : selectedAnswer === index ? (
                        <XCircle className="w-5 h-5 text-red-600" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
              <p className="text-blue-800 text-sm">{question.explanation}</p>
            </div>
          )}

          <div className="flex justify-center space-x-4">
            {!showExplanation ? (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="px-6 py-2"
              >
                Submit Answer
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="px-6 py-2">
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
              </Button>
            )}
          </div>
        </Card>
      </div>
    );
  };

  const renderResults = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
    const percentage = Math.round((score / questions.length) * 100);
    const reward = getReward(score, questions.length);

    return (
      <div className="text-center space-y-6">
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center">
          <Award className="w-12 h-12 text-white" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900">Quiz Completed!</h2>
        
        <Card className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor(score, questions.length)} mb-2`}>
                {score}/{questions.length}
              </div>
              <div className="text-gray-600">Correct Answers</div>
            </div>
            <div className="text-center">
              <div className={`text-4xl font-bold ${getScoreColor(score, questions.length)} mb-2`}>
                {percentage}%
              </div>
              <div className="text-gray-600">Score</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <h3 className="font-semibold text-gray-900">Reward Earned</h3>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <p className="text-lg font-medium text-purple-800">{reward}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
            <div>
              <span className="font-medium">Time Spent:</span> {timeSpent} minutes
            </div>
            <div>
              <span className="font-medium">Questions:</span> {questions.length}
            </div>
          </div>

          <div className="mb-6">
            {percentage >= 80 ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800">
                  🎉 Excellent work! You have a strong understanding of pregnancy health. 
                  Keep up the great knowledge!
                </p>
              </div>
            ) : percentage >= 60 ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  👍 Good job! You're on the right track. Review the explanations to strengthen your knowledge.
                </p>
              </div>
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">
                  📚 Keep learning! Every question helps you become more informed about pregnancy health. 
                  Try again to improve your score!
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleRestartQuiz} variant="outline" className="flex items-center space-x-2">
              <RotateCcw className="w-4 h-4" />
              <span>Take Quiz Again</span>
            </Button>
            <Button onClick={() => onPageChange('services')} className="flex items-center space-x-2">
              <span>Explore Services</span>
            </Button>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onPageChange('home')}
              className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Pregnancy Quiz</h1>
            <div className="w-20"></div> 
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!quizStarted ? (
          renderWelcomeScreen()
        ) : quizCompleted ? (
          renderResults()
        ) : (
          renderQuestion()
        )}
      </div>
    </div>
  );
}