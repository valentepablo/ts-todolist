import InputField from './components/InputField';
import TaskLists from './components/TaskLists';

function App() {
  return (
    <div className='py-6 bg-slate-900 min-h-screen'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-center text-3xl text-slate-100 font-bold'>Tasks with React+TS</h1>
        <InputField />
        <TaskLists />
      </div>
    </div>
  );
}

export default App;
