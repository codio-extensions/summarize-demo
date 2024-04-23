window.codioIDE.coachBot.register({
  id: 'customButton',
  text: 'Can you help me summarize?',
  steps: [{
    type: window.codioIDE.coachBot.ACTIONS_TYPES.INPUT,
    key: 'userPrompt',
    text: 'Please type below'
  },
    {
      type: window.codioIDE.coachBot.ACTIONS_TYPES.CALLBACK,
      callback: async function (data) {
        // do something smart!
        const context = await window.codioIDE.coachBot.getContext()
        console.log('bot context', context)

        window.codioIDE.coachBot.write('Please wait. I will provide info shortly...')

        const onDone = () => {
          console.log('userPrompt', data.userPrompt)
          console.log('bot on done callback')
        }

        window.codioIDE.coachBot.ask({
          systemPrompt: 'Show react documentation about user provided hook',
          userPrompt: data.userPrompt,
        }, onDone)
      }
    }
  ]
})
