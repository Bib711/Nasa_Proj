import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import './MissileDashboard.css';

const Navalquiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:3030/navalSystem');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched questions:', data);

        const questionArray = [
          data.question1,
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
      // Format the data to include question text
      const formattedAnswers = questions.map((question, index) => ({
        question,
        answer: answers[index] || ''
      }));

      // Log the data to be sent
      console.log('Submitting answers:', formattedAnswers);

      const response = await fetch('http://localhost:3010/evaluate-answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'exampleUser', // Replace with actual username if needed
          answers: formattedAnswers
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Backend response:', result);
      alert('Answers submitted successfully!');
      navigate('/NavalSystem'); // Navigate to home page on successful submission
    } catch (error) {
      console.error("Error submitting answers:", error);
      alert('Failed to submit answers. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-login p-8">
      <h1 className="text-2xl font-bold mb-6">Naval Quiz</h1>

      {questions.length > 0 ? (
        <>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <p className="mb-4 text-lg">{questions[currentQuestionIndex]}</p>
            <Input
              type="text"
              value={answers[currentQuestionIndex] || ''}
              onChange={handleInputChange}
              className="mb-4 p-2 border rounded"
              placeholder="Enter your answer"
            />
          </div>

          <div className="mt-6 flex justify-between w-full md:w-1/2">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-lg text-white ${currentQuestionIndex === 0 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
              className={`px-4 py-2 rounded-lg text-white ${currentQuestionIndex === questions.length - 1 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
              Next
            </Button>
          </div>

          {currentQuestionIndex === questions.length - 1 && (
            <div className="mt-6 flex flex-col items-center">
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-4 py-2 rounded-lg text-white ${isSubmitting ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
              <Button
                onClick={() => navigate('/MissileDash')}
                className="mt-4 bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
              >
                Go to Home
              </Button>
            </div>
          )}
        </>
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default Navalquiz;
