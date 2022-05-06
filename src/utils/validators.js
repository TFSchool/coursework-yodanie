export const isTitleValid = title => title.length > 4

export const validateError = (questionTitle, answersData, selectedAnswer) => {
  const answers = Object.values(answersData)

  if (isTitleValid(questionTitle) === false) {
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
