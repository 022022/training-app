'use client'
import assert from "assert";
import SettingsPanel from '@/app/components/SettingsPanel/SettingsPanel'
import Split from 'react-split'
import CodeMirror from '@uiw/react-codemirror';
import { basicLight, basicDark } from '@uiw/codemirror-theme-basic';
import { javascript } from '@codemirror/lang-javascript';
import ActionsBar from '@/app/components/ActionsBar/ActionsBar';
import { Problem } from '@/app/types';
import { useState } from 'react';
import { auth } from '@/firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export function Splits({problem}: {problem: Problem}){
  const [userLogged] = useAuthState(auth);
  const [userCode, setUserCode] = useState(problem.starter);

  const [testResult, setTestResult] = useState<true | false | 'notDone'>('notDone');
  const [testError, setTestError] = useState('');

  function handleChange(value: string){
    setUserCode(value);
  }

  function handleSubmit(){

    const tester = (codeToTest: any, args: any[], answers: any[]) => {
      try {
        for (let i = 0; i < args.length; i++) {
          const result = codeToTest(...args[i]);
          assert.deepStrictEqual(result, answers[i]);
        }
        return true;
      } catch(err: any) {
        throw new Error(err);
      }

    }

    const codeToTest = new Function(`return ${userCode}`)();


    if(userLogged) {
      const {args, answers} = JSON.parse(problem.handler); // {args: [[1,2], [3,5]], answers: [3, 8]}
      try {
        const success = tester(codeToTest, args, answers);
        if(success){
          console.log('success!');
          setTestError('');
          setTestResult(true);
        }
      } catch(error: any) {
        console.log(error.message);
        setTestError(error.message);
        setTestResult(false);
      }
    }
  }

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
        value={problem.starter}
        theme={basicLight}
        onChange={handleChange}
        extensions={[javascript()]}
        style={{fontSize: 16}}
      />

    </div>
    <div className='relative'>
      <div className='overflow-auto'>
        {testResult !== 'notDone' && testResult && 'All tests passed'}
        {testResult !== 'notDone' && !testResult && testError}
      </div>

      <ActionsBar submitSolution={handleSubmit}/>
    </div>
  </Split>


</Split>
}