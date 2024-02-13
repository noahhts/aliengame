import { defineStore } from 'pinia'

export const useStore = defineStore('game', {
  state: () => {
    return {
      uiState: 'start',
      characterChoices: ['baker', 'mechanic', 'artist'],
      character: '',
      questionIndex: 0,
      score: 0,
      questions: [
        {
          question: `What's your dog's name?`,
          baker: 'Woofgang Puck',
          mechanic: 'Alf',
          artist: 'Salvador Dogi'
        },
        {
          question: `What's your favorite hobby?`,
          baker: 'Extreme ironing',
          mechanic: 'Bacon santa cosplay',
          artist: 'Mimosas'
        },
        {
          question: `What's your favorite color?`,
          baker: 'turquoise',
          mechanic: 'yellow',
          artist: 'transparent'
        },
        {
          question: `Is cereal soup?`,
          baker: "You can't be serieal",
          mechanic: 'Yes, I am Jason Lengstorf',
          artist: 'wut'
        },
        {
          question: `What’s the most imaginative insult you can come up with?`,
          baker: "You're a substitute teacher with no lesson plan",
          mechanic: 'Yer face is a melted welly',
          artist: 'You eat buttons off the remote'
        },
        {
          question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
          baker: 'legoome',
          mechanic: 'brown paste',
          artist: 'groundnut smoosh'
        }
      ]
    }
  },
  actions: {
    pickCharacter(character) {
      this.character = character
    },
    updateUIState(uistate) {
      this.uiState = uistate
    },
    pickQuestion(character) {
      character === this.character ? (this.score += 13) : (this.score -= 13)
      if (this.questionIndex < this.questions.length - 1) {
        this.questionIndex++
      } else {
        Math.sign(this.score) > 0 ? (this.uiState = 'won') : (this.uiState = 'lost')
      }
    },
    restartGame() {
      this.uiState = 'start'
      this.questionIndex = 0
      this.score = 0
    }
  }
})
