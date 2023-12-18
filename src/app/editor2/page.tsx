'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min';

const codeString = `
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
`;

export default function Page() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h1>하이</h1>
      <pre>
        <code className={`language-ts`}>{codeString.trim()}</code>
      </pre>
    </div>
  );
}
