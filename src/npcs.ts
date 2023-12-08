import { Animator, Entity } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'
import *  as  npc from 'dcl-npc-toolkit'
import { demoDialog } from './dialog'


let NPC: Entity


let portrait = {

   path: 'images/NPC-thumbnail.png'
}

export function addNPCs() {
    NPC = npc.create(
        { position: Vector3.create(8, 0, 8) },
        {
            type: npc.NPCType.CUSTOM,
            model: 'NPC/NPC.glb',
            faceUser: true,
            onActivate: () => { npc.talk(NPC, demoDialog, 0) },
            onWalkAway: ()=>{ console.log('run function on walk away')},
            hoverText: "Talk",
            idleAnim: 'Idle',
            walkingAnim: 'Armature|mixamo.com|Layer0.001'
            // You can add more animations and parameters here,
            // See https://github.com/decentraland-scenes/dcl-npc-toolkit for more info
        }
    )
}