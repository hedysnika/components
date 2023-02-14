import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen h-full">
        <div className="flex justify-center items-center w-full h-full">
            <div>
                <Link className="" to="/FormControl"></Link>
                
            </div>
        </div>
    </div>
  );
  <Link to="/">მთავარი</Link>;
}
