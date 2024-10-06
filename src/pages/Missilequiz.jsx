import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, ChevronLeft, ChevronRight, Send, Home, Maximize } from 'lucide-react';
import './MissileDashboard.css';

const Missilequiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:3020/missilesAndStrategical');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched questions:', data);

        const questionArray = [
          data.question1.answer,
          data.question2,
          data.question3,
          data.question4,
          data.question5
        ];

        setQuestions(questionArray);
        setAnswers(new Array(questionArray.length).fill(''));
      } catch (error) {
        console.error("Error fetching questions:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const enterFullscreen = () => {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
      setIsFullscreen(true);
    };

    if (!isFullscreen) {
      enterFullscreen();
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert("Please don't switch tabs during the quiz!");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isFullscreen]);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const formattedAnswers = questions.map((question, index) => ({
        question,
        answer: answers[index] || ''
      }));

      console.log('Submitting answers:', formattedAnswers);

      const response = await fetch('http://localhost:3010/evaluate-answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'exampleUser',
          answers: formattedAnswers
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Backend response:', result);
      alert('Answers submitted successfully!');
      navigate('/MissileDash');
    } catch (error) {
      console.error("Error submitting answers:", error);
      alert('Failed to submit answers. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center p-6">
            <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
            <p className="text-lg font-semibold text-gray-800">Error: {error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-log p-8">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Missile Quiz</h1>

          {questions.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-xl font-semibold mb-4 text-gray-700">
                  {questions[currentQuestionIndex]}
                </p>
                <Textarea
                  value={answers[currentQuestionIndex] || ''}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                  placeholder="Enter your answer"
                />
              </div>

              <div className="flex justify-between items-center">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>

                <span className="text-lg font-semibold text-gray-600">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>

                <Button
                  onClick={handleNext}
                  disabled={currentQuestionIndex === questions.length - 1}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {currentQuestionIndex === questions.length - 1 && (
                <div className="mt-6 flex justify-center space-x-4">
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-600">No questions available.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Missilequiz;
