const express = require('express');
const app = express();
const port = 3000;

// Savollar bazasi (aralash mavzular)
const questions = [
  {
    "id": 1,
    "question": "JavaScript qanday dasturlash tili?",
    "category": "Dasturlash",
    "options": [
      "A) Statik",
      "B) Dinamik",
      "C) Funksional",
      "D) Obyektga yo'naltirilgan"
    ],
    "correct_answer": "B"
  },
  {
    "id": 2,
    "question": "Toshkent Qaysi mamlakatda joylashgan?",
    "category": "Geografiya",
    "options": [
      "A) Rossiya",
      "B) O'zbekiston",
      "C) Qozog'iston",
      "D) Tojikiston"
    ],
    "correct_answer": "B"
  },
  {
    "id": 3,
    "question": "Kino, 'Titanik' filmi kim tomonidan suratga olingan?",
    "category": "Kino",
    "options": [
      "A) Martin Scorsese",
      "B) Steven Spielberg",
      "C) James Cameron",
      "D) Christopher Nolan"
    ],
    "correct_answer": "C"
  }
];

// Savollarni olish API
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server ${port}-portda ishlamoqda`);
});
