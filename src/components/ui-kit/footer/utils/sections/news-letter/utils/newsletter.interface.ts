export interface NewsLetterConfig {
  title: string;
  form: {
    placeholder: string;
    submit: string;
  };
}

export interface NewsLetterDataProps {
  newsletter: NewsLetterConfig;
}
