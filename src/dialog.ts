import { Dialog } from  'dcl-npc-toolkit'

export  let demoDialog: Dialog[] = [
	{
        text: 'Hi there! Welcome to the pick n mix demo :3'
    },
    {
        text: 'Would you like to play a game together?',
        isQuestion: true,
        buttons: [
            {
                label: `Yes!`,
                goToDialog: 2,
                triggeredActions: () => {
                   
                },
            },
            {
                label: `Um no..`,
                goToDialog: 3,
                triggeredActions: () => {
                }
            }
        ]
    },
	{
        text: "Lets chop off some hands! Ready?",
        isEndOfDialog: true
    },

    {
        text: 'Ok fine!',
        isEndOfDialog: true
    }
]