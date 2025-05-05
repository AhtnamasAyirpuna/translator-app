const translations = {
  "english": {
    "malay": {
      "morning": "pagi",
      "afternoon": "tengahari",
      "evening": "petang",
      "night": "malam",
      "hello": "hello"
    },
    "spanish": {
      "morning": "mañana",
      "afternoon": "tarde",
      "evening": "tarde",
      "night": "noche",
      "hello": "hola"
    },
    "english": {
      "morning": "morning",
      "afternoon": "afternoon",
      "petang": "evening",
      "malam": "night",
      "hello": "hello"
    }
   
  },
  "malay": {
    "english": {
      "pagi": "morning",
      "tengahari": "afternoon",
      "petang": "evening",
      "malam": "night",
      "hello": "hello"
    },
    "spanish": {
      "pagi": "mañana",
      "tengahari": "tarde",
      "petang": "tarde",
      "malam": "noche",
      "hello": "hola"
    },
    "malay": {
      "pagi": "pagi",
      "tengahari": "tengahari",
      "petang": "petang",
      "malam": "malam",
      "hello": "hello"
    }
  },
  "spanish": {
    "english": {
      "mañana": "morning",
      "tarde": "afternoon",
      "noche": "night",
      "hola": "hello"
    },
    "malay": {
      "mañana": "pagi",
      "tarde": "tengahari",
      "noche": "malam",
      "hola": "hello"
    },
    "spanish": {
      "mañana": "mañana",
      "tarde": "tarde",
      "noche": "noche",
      "hola": "hola"
    }
  }
};

export function translate(inputLanguage, outputLanguage, inputText) {
  const lowerInput = inputText.toLowerCase();

  // First, check if the input language has the word
  if (translations[inputLanguage] && translations[inputLanguage][outputLanguage] && translations[inputLanguage][outputLanguage][lowerInput]) {
    return translations[inputLanguage][outputLanguage][lowerInput];
  }
return "Not found";
}