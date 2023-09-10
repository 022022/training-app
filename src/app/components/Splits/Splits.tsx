'use client'
import SettingsPanel from '@/app/components/SettingsPanel/SettingsPanel'
import Split from 'react-split'
import CodeMirror from '@uiw/react-codemirror';
import { basicLight, basicDark } from '@uiw/codemirror-theme-basic';
import { javascript } from '@codemirror/lang-javascript';
import ActionsBar from '@/app/components/ActionsBar/ActionsBar';
import { Problem } from '@/app/types';

export function Splits({problem}: {problem: Problem}){
  return <Split
  sizes={[25, 75]}
  minSize={0}
  expandToMin={false}

  snapOffset={30}
  dragInterval={1}
  direction="horizontal"
  cursor="col-resize"

  className='flex min-h-screen bg-white'
>
  <div>{problem.statement}</div>


    <Split
      sizes={[60, 40]}
      minSize={50}
      expandToMin={false}
      snapOffset={30}
      dragInterval={1}
      direction="vertical"
      cursor="col-resize"

      className='flex flex-col bg-white'
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
    <div className='relative'>
      <div className='overflow-auto'>
        <p>bottom pane</p>
        <p>bottom pane</p>
        <p>bottom pane</p>
        <p>bottom pane</p>
        <p>bottom pane</p>
      </div>

      <ActionsBar />
    </div>
  </Split>


</Split>
}