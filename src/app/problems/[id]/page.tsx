'use client'
import SettingsPanel from '@/app/components/SettingsPanel/SettingsPanel'
import Split from 'react-split'
import CodeMirror from '@uiw/react-codemirror';
import { basicLight, basicDark } from '@uiw/codemirror-theme-basic';
import { javascript } from '@codemirror/lang-javascript';

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
      <div className='overflow-auto'>
        <SettingsPanel />
        <CodeMirror
          value="// code here"
          theme={basicLight}
          extensions={[javascript()]}
          style={{fontSize: 16}}
        />
      </div>
      <div>bottom pane</div>
    </Split>


</Split>
}