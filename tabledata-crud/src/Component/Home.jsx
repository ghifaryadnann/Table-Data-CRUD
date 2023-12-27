import { Link } from "react-router-dom"
import Swal from "sweetalert2";


const Home = () => {
    
    const handleButton = () => {
        let timerInterval;
        Swal.fire({
          title: "Tunggu Ya..",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      } 
  

  return (
    <div className="overflow-hidden" >
        <div className="w-full flex items-center overflow-hidden mt-5 container m-auto">
            <div className="flex  flex-col text-center p-2 sm:rounded-2xl  bg-slate-400 w-full h-[80vh]">
                 <h1 className="text-[50px] font-black">Hallo, Selamat Datang!</h1>
                 <h2 >Saya Ghifary, sudah membuat website <span className="font-black text-amber-700">TABLE DATA</span> dengan React js dan mengimplentasikan CRUD, Router-DOM dan juga Tailwind Css</h2>
                 <Link to="/about">
                    <button onClick={handleButton} className="p-2 bg-cyan-700 rounded-2xl w-2/5 mt-2 hover:text-white hover:bg-amber-200 duration-300">Ayo Mulai </button>
                </Link>
                 
            </div>
           
        </div>
    </div>
  )
}

export default Home