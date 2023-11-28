export default function BgEffect(props:any) {

  return (
    <div className="absolute overflow-hidden flex justify-center items-center w-screen h-screen z-[-5]">
      <div className="w-screen h-screen flex opacity-50 bg-spin">
        <img className="w-full" src={props.flag}/>
      </div>
    </div>
  );
}
