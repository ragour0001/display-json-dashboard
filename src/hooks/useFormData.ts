import { useState, useEffect } from 'react';
import formSchema from '../../docs/static.json';

export interface FormOption {
  value: string;
  text: string;
}

export interface FormQuestion {
  id: number;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: FormOption[];
}

export interface FormSection {
  name: string;
  order: number;
  questions: FormQuestion[];
}

export const useFormData = () => {
  const [schema, setSchema] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSchema(formSchema);
    setLoading(false);
  }, []);

  const getSectionByName = (name: string) => {
    return schema?.sections?.find((section: FormSection) => section.name === name);
  };

  const getQuestionById = (sectionName: string, questionId: number) => {
    const section = getSectionByName(sectionName);
    return section?.questions?.find((q: FormQuestion) => q.id === questionId);
  };

  return {
    schema,
    loading,
    getSectionByName,
    getQuestionById
  };
}; 