
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'

import { NpcUtilsUi } from 'dcl-npc-toolkit'



const uiComponent = () => (

  <NpcUtilsUi />
 
 
 )
 
 export function setupUi() {
   ReactEcsRenderer.setUiRenderer(uiComponent)
 }


