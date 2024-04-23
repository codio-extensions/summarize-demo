window.codioIDE.coachBot.register({
  id: 'customButton',
  text: 'Can you help me summarize?',
  steps: [
    {
      type: window.codioIDE.coachBot.ACTIONS_TYPES.CALLBACK,
      callback: async function (data) {
        // do something smart!
        const context = await window.codioIDE.coachBot.getContext()
        console.log('bot context', context)

        const onDone = () => {
          console.log('bot on done callback')
        }

        window.codioIDE.coachBot.ask({
          systemPrompt: 'You are an assistant helping students understand their programming assignments. \n\
\n\nGiven a programming assignment, your job is to provide a 1-2 sentence summary of the task described in the assignment, and a short list of its requirements.\
\nNote that you will respond without xml tags and only the task summary, starting with Summary: , and the list of requirements starting with Requirements: . If no assignment given, respond with Nothing to summarize. Do not provide code or the full solution. Do not ask if there are any more questions.',
          userPrompt: '<programming_assignment>\n' + context.guidesPage + '\n</programming_assignment>',
        }, onDone)
      }
    }
  ]
})
