import TeamThreeScene from '../components/team-3/TeamThreeScene';

export default function TeamThree() {
  return (
    <>
      <div className="absolute w-full flex justify-center top-1/4">
        <h1 className="font-serif filter blur-sm italic text-9xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
          Team Three
        </h1>
      </div>
      <TeamThreeScene />
    </>
  );
}
