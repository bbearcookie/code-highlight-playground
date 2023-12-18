import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
  return (
    <div>
      <h1>하이</h1>
      <SyntaxHighlighter language="typescript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
