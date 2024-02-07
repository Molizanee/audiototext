import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <h1 className="text-center text-2xl text-slate-400">
        Made by David Molizane
      </h1>
      <form className="w-full">
        <input
          type="text"
          placeholder="Pesquisar em suas notas..."
          className="w-full bg-transparent text-3xl tracking-tight font-semibold placeholder:text-slate-500 outline-none"
        />
      </form>
      <div className="h-px bg-slate-700" />
      <div className="grid grid-cols-3  auto-rows-[250px] gap-5">
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
}
