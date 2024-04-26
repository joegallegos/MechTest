import Flashcard from './components/Flashcard';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>This is the start of my mechanics testing helper page thingy</h1>
        <Flashcard />
      </div>
    </main>
  );
}
