import React, { useState } from 'react';
import styled from 'styled-components';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  isExpanded: boolean;
}

const FaqContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const FaqTitle = styled.h2`
  text-align: center;
  color: #333;
  font-size: 32px;
  margin-bottom: 32px;
  font-weight: 600;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.5px;
`;

const SearchContainer = styled.div`
  margin-bottom: 32px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  font-size: 16px;
  background-color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #6c5ce7;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.1);
  }
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FaqItemContainer = styled.div<{ isExpanded: boolean }>`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const FaqQuestion = styled.div`
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #f8f6ff;
  }
`;

const ArrowIcon = styled.span`
  color: #6c5ce7;
  font-size: 12px;
  transition: transform 0.3s ease;
`;

const FaqAnswer = styled.div<{ isExpanded: boolean }>`
  max-height: ${props => props.isExpanded ? '500px' : '0'};
  overflow: hidden;
  padding: ${props => props.isExpanded ? '0 20px 20px' : '0 20px'};
  color: #666;
  line-height: 1.6;
  transition: all 0.3s ease;
`;

const initialFaqs: FaqItem[] = [
  {
    id: 1,
    question: 'What is Refill Health?',
    answer: 'Refill Health is a comprehensive mental health and wellness platform that provides organizations and individuals with tools, resources, and professional support for mental well-being.',
    isExpanded: false
  },
  {
    id: 2,
    question: 'Who can use Refill Health services?',
    answer: 'Our services are available to organizations, employees, individuals, care providers, and insurers. We offer tailored solutions for each groups specific needs.',
    isExpanded: false
  },
  {
    id: 3,
    question: 'How does Refill Health ensure confidentiality?',
    answer: 'We adhere to strict privacy and data protection standards. All therapy sessions, assessments, and user interactions are confidential and compliant with industry regulations and ethical best practices.',
    isExpanded: false
  },
  {
    id: 4,
    question: 'What makes Refill Health different from traditional EAPs or wellness apps?',
    answer: 'Refill Health combines advanced organizational diagnostics, personalized wellness solutions, and comprehensive support services in one integrated platform, offering a more holistic approach to mental health and workplace wellness.',
    isExpanded: false
  },
  {
    id: 5,
    question: 'How can organizations get started with Refill Health?',
    answer: 'Organizations can contact our team for a consultation to discuss their specific needs and receive a customized solution proposal. We offer flexible implementation options and comprehensive onboarding support.',
    isExpanded: false
  },
  {
    id: 6,
    question: 'What is "Feel Better in Under 90 Seconds"?',
    answer: 'This is our quick-relief toolkit that provides immediate stress management and emotional regulation techniques that can be applied in just 90 seconds, perfect for busy professionals.',
    isExpanded: false
  },
  {
    id: 7,
    question: 'Can I access services if I\'m not part of an organization?',
    answer: 'Yes, we offer individual plans and services for people seeking personal mental health support, including therapy, self-help tools, and wellness programs.',
    isExpanded: false
  }
];

const FAQSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs);

  const filterQuestions = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFaqs(initialFaqs);
      return;
    }

    const filteredFaqs = initialFaqs.filter(faq =>
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase())
    );
    setFaqs(filteredFaqs);
  };

  const toggleQuestion = (id: number) => {
    setFaqs(faqs.map(faq =>
      faq.id === id ? { ...faq, isExpanded: !faq.isExpanded } : faq
    ));
  };

  return (
    <FaqContainer>
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={(e) => filterQuestions(e.target.value)}
          placeholder="Search here"
        />
      </SearchContainer>

      <FaqList>
        {faqs.map((item) => (
          <FaqItemContainer key={item.id} isExpanded={item.isExpanded}>
            <FaqQuestion onClick={() => toggleQuestion(item.id)}>
              <span>{item.id}. {item.question}</span>
              <ArrowIcon>
                {item.isExpanded ? '▼' : '▶'}
              </ArrowIcon>
            </FaqQuestion>
            <FaqAnswer isExpanded={item.isExpanded}>
              {item.answer}
            </FaqAnswer>
          </FaqItemContainer>
        ))}
      </FaqList>
    </FaqContainer>
  );
};

export default FAQSection; 