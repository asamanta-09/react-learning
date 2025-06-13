import { useState ,useCallback,useEffect,useRef} from "react"


function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [characterAllowed,setCharacterAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str+="!@#$%^&*_+~";

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  const copyPasswordToClipboard=useCallback(()=>{ 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <div className="text-white text-center my-6">Password Generator</div>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 mb-6 bg-white rounded-lg text-black" placeholder="password" ref={passwordRef} readOnly />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 mb-6 shrink-0" onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mb-3 ">
            <input type="range" min={6} max={100} value={length} className="cursor-pointer mb-3 bg-blue text-orange-500" onChange={(e)=>{setLength(e.target.value)}} />
            <label className="mb-3">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-3">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" className="cursor-pointer mb-3" onChange={(e)=>{setNumberAllowed((prev)=>!prev)}} />
            <label className="mb-3">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 mb-3">
            <input type="checkbox" defaultChecked={characterAllowed} id="numberInput" className="cursor-pointer mb-3" onChange={(e)=>{setCharacterAllowed((prev)=>!prev)}} />
            <label className="mb-3">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
