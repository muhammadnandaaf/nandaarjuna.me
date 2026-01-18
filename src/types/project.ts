export interface Project {
  id: number;
  category: 'web' | 'data';
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  detailImage: string; 
  features: string[];
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    category: 'web',
    title: "Overtime Management System (SPL)",
    subtitle: "Enterprise HR Solution",
    description: "A professional corporate tool designed to streamline overtime requests with automated hour calculation.",
    techStack: ["Laravel", "React.js", "MySQL", "Tailwind CSS"],
    imageUrl: "/nandaarjuna.me/spl-preview.png", 
    detailImage : "/nandaarjuna.me/hr-verif.png",
    features: ["Hierarchical Approval", "Auto-Calculation", "PDF Generation"],
    githubUrl: "https://github.com/muhammadnandaaf/OvertimeSystem"
  },
  {
    id: 2,
    category: 'web',
    title: "Agrolens",
    subtitle: "AI for Smarter Farming",
    description: "AgroLens-LaskarAI is an AI agriculture platform that diagnoses rice leaf diseases through image classification and provides local-language explanations and treatments using a fine-tuned IndoGPT model.",
    techStack: ["Tensorflow", "Hugging Face", "Open CV", "FastAPI", "React + Vite", "Tailwind CSS"],
    imageUrl: "/nandaarjuna.me/agrolens.png", 
    detailImage : "/nandaarjuna.me/agrolens2.png",
    features: ["Intelligent Disease Detection", "Fine-tuned IndoGPT LLM Chatbot", "Interactive Web Platform"],
    githubUrl: "https://github.com/ARusDian/AgroLens-LaskarAI"
  },
  {
    id: 3,
    category: 'web',
    title: "SOON",
    subtitle: "-",
    description: "-",
    techStack: ["-"],
    imageUrl: "/nandaarjuna.me/soon.png", 
    detailImage : "/nandaarjuna.me/soon.png",
    features: ["-"],
    githubUrl: "-"
  },
  {
    id: 4,
    category: 'web',
    title: "SOON",
    subtitle: "-",
    description: "-",
    techStack: ["-"],
    imageUrl: "/nandaarjuna.me/soon.png", 
    detailImage : "/nandaarjuna.me/soon.png",
    features: ["-"],
    githubUrl: "-"
  },
  {
    id: 5,
    category: 'web',
    title: "SOON",
    subtitle: "-",
    description: "-",
    techStack: ["-"],
    imageUrl: "/nandaarjuna.me/soon.png", 
    detailImage : "/nandaarjuna.me/soon.png",
    features: ["-"],
    githubUrl: "-"
  },
  {
    id: 6,
    category: 'data',
    title: "Agrolens",
    subtitle: "AI for Smarter Farming",
    description: "AgroLens-LaskarAI is an AI agriculture platform that diagnoses rice leaf diseases through image classification and provides local-language explanations and treatments using a fine-tuned IndoGPT model.",
    techStack: ["Tensorflow", "Hugging Face", "Open CV", "FastAPI", "React + Vite", "Tailwind CSS"],
    imageUrl: "/nandaarjuna.me/agrolens.png", 
    detailImage : "/nandaarjuna.me/agrolens2.png",
    features: ["Intelligent Disease Detection", "Fine-tuned IndoGPT LLM Chatbot", "Interactive Web Platform"],
    githubUrl: "https://github.com/ARusDian/AgroLens-LaskarAI"
  },
  {
    id: 7,
    category: 'data',
    title: "HR Analytics Project",
    subtitle: "Employee Attrition Prediction",
    description: "Developed a Random Forest model to predict employee turnover and identify key attrition drivers. Insights were delivered through an interactive dashboard to support HR retention strategies.",
    techStack: ["Python", "Numpy", "Pandas", "Tensorflow", "Metabase"],
    imageUrl: "/nandaarjuna.me/attrition-cover.png",
    detailImage : "/nandaarjuna.me/attrition-detail.png",
    features: ["Data Cleaning", "Model Training", "Visualization"],
    githubUrl: "https://github.com/muhammadnandaaf/Attrition-Analysis"
  },
  {
    id: 8,
    category: 'data',
    title: "Academic Analytics",
    subtitle: "Student Dropout Prediction",
    description: "Developed a machine learning system to predict student dropout risk using a Random Forest model, analyzing academic, demographic, and socioeconomic factors. Delivered insights through an interactive dashboard to support early intervention and improve student retention.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Numpy", "Docker", "Metabase", "Streamlit"],
    imageUrl: "/nandaarjuna.me/student-cover.png",
    detailImage : "/nandaarjuna.me/student-detail.png",
    features: [" Data Pipeline", "Dimensionality Reduction", "Multi-Model Comparison", "Predictive Dashboard", "Streamlit Deployment"],
    githubUrl: "https://github.com/muhammadnandaaf/StudentPerfomance_Analysis"
  },
  {
    id: 9,
    category: 'data',
    title: "Instagram Review",
    subtitle: "Sentiment Analysis",
    description: "A natural language processing project analyzing user reviews from the Google Play Store to classify sentiment into positive, negative, and neutral categories. The dataset includes review text, star ratings, timestamps, and helpfulness votes, providing insight into user satisfaction and common complaints regarding app features, bugs, and performance issues.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Numpy", "Tensorflow"],
    imageUrl: "/nandaarjuna.me/sentiment-cover.png",
    detailImage : "/nandaarjuna.me/sentiment-detail.png",
    features: ["Data Pipeline", "Exploratory Data", "Text Processing", "Machine Learning Model", "Model Evaluation", "Visualization"],
    githubUrl: "https://github.com/muhammadnandaaf/Analysis-Sentiment_InstagramReview"
  },
  {
    id: 10,
    category: 'data',
    title: "Loan Approval & Risk Assessment System",
    subtitle: "End-to-End MLOps Pipeline for Financial Analytics",
    description: "**Built an automated MLOps pipeline for credit risk assessment.** The system processes financial data, trains ensemble models for loan approval and risk scoring, and implements CI/CD for automated retraining. MLflow tracks experiments, while Prometheus and Grafana enable real-time production monitoring and alerting.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Numpy", "Prometheus", "Grafana", "Mlflow"],
    imageUrl: "/nandaarjuna.me/mlops-cover.png",
    detailImage : "/nandaarjuna.me/mlops-detail.png",
    features: ["End-to-end MLOps implementation","Automated retraining pipeline", "Production monitoring & alerting"],
    githubUrl: "https://github.com/muhammadnandaaf/MSML-FinancialRisk_LoanApproval"
  },
];