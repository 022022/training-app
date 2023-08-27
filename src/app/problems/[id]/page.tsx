'use client'
import SettingsPanel from '@/app/components/SettingsPanel/SettingsPanel'
import Split from 'react-split'

export default function SingleProblem(){
  return <Split
    sizes={[25, 75]}
    minSize={0}
    expandToMin={false}

    snapOffset={30}
    dragInterval={1}
    direction="horizontal"
    cursor="col-resize"

    className='flex min-h-screen'
  >
    <div>left pane</div>


      <Split
        sizes={[60, 40]}
        minSize={10}
        expandToMin={false}
        snapOffset={30}
        dragInterval={1}
        direction="vertical"
        cursor="col-resize"

        className='flex flex-col'
      >
      <div>
        <SettingsPanel />

        top pane
      </div>
      <div>bottom pane</div>
    </Split>


</Split>
}