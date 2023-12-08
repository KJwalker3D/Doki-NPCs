# Doki's Pick N Mix NPC Demo

Welcome to Doki's Pick N Mix NPC Demo! This project showcases a customizable NPC (non-playable character) using the DCL NPC Toolkit in Decentraland. You can easily switch out the NPC with different models and customize the dialogues to create interactive scenes.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Decentraland CLI](https://docs.decentraland.org/getting-started/installation-guide/)
- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/pick-n-mix-npc-demo.git
    ```

2. Navigate to the project folder:

    ```bash
    cd pick-n-mix-npc-demo
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Usage

1. You can leave the `index.ts` file as is, or add more components to the scene:

    ```typescript
    // index.ts

    import { addNPCs } from './npcs';
    import { setupUi } from './ui';

    export function main() {
        setupUi();
        addNPCs();
    }
    ```

2. Customize the NPC in the `npcs.ts` file, or replace `NPC.glb` with your NPC model:

    ```typescript
    // npcs.ts

    import { Animator, Entity } from '@dcl/sdk/ecs'
    import { Quaternion, Vector3 } from '@dcl/sdk/math'
    import * as npc from 'dcl-npc-toolkit'
    import { demoDialog } from './dialog'

    let NPC: Entity

    export function addNPCs() {
        NPC = npc.create(
            { position: Vector3.create(8, 0, 8) },
            {
                type: npc.NPCType.CUSTOM,
                model: 'NPC/NPC.glb', // Change the model path here
                faceUser: true,
                onActivate: () => { npc.talk(NPC, demoDialog, 0) },
                onWalkAway: () => { console.log('run function on walk away') },
                hoverText: "Talk",
                idleAnim: 'Idle',
                walkingAnim: 'Armature|mixamo.com|Layer0.001'
            }
        )
    }
    ```

3. Customize the dialogues in the `dialog.ts` file:

    ```typescript
    // dialog.ts

    import { Dialog } from 'dcl-npc-toolkit'

    export let demoDialog: Dialog[] = [
        {
            text: 'Hi there! Welcome to the pick n mix demo :3'
        },
        // Customize other dialogues as needed
    ]
    ```

4. Run the project:

    ```bash
    dcl start
    ```

5. Visit the scene in your Decentraland client and interact with the NPC.

## Additional Notes

- Change the dialogues in `dialog.ts` to create interactive conversations.
- Replace the NPC model in the `npcs.ts` file with other models from the Pick N Mix set or any other GLB model.

Feel free to explore more features and options in the [DCL NPC Toolkit documentation](https://github.com/decentraland-scenes/dcl-npc-toolkit) for advanced customization.

Have fun creating interactive scenes with your customized NPCs!
