export default function BgEffect() {

  return (
    <div className="fixed flex justify-center items-center w-screen h-screen z-[-5]">
      <div
        className="w-screen h-screen bg-foreground opacity-50 bg-spin"
      ></div>
    </div>
  );
}
