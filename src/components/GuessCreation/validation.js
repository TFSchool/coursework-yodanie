export const validateError = (questionTitle, answersData, selectedAnswer) => {
  const answers = Object.values(answersData)
  if (questionTitle.length < 5) {
    return 'Вопрос должен содержать не менее пяти символов'
  }
  if (answers.some(input => input.length === 0)) {
    return 'Пожалуйста, заполните поля'
  }
  if (selectedAnswer === null) {
    return 'Выберите правильный ответ'
  }
  if (answers.length !== [...new Set(answers)].length) {
    return 'Поменяйте одинаковые варианты'
  }

  return null
}

export default validateError
