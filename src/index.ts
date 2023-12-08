
import { addNPCs } from './npcs';
import { setupUi } from './ui';

// Change the dialog in dialog.ts
// Change the NPC model by replacing NPC.glb (in NPC folder) 
// - or change the NPC model path in npc.ts



export function main() {
  setupUi();
  addNPCs();

}
