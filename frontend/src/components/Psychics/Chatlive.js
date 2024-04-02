import PsyMessageContainer from "./Psychicschat/PsyMessageContainer";
import PsySidebar from "./Psychicschat/PsySidebar";

const PsyHome = () => {
	return (
		<div>
					<div className="col-12 col-md-6 col-xl-12 ">

		<main className="content">
   <div className="container p-auto">
	
	 <div className="card">
	   <div className="row g-0">
 
   <PsySidebar/>
   <PsyMessageContainer/>
 
 
 
		 </div>
		 </div>
		 </div>
		 </main>
	   </div>
	   
	   </div>
	);
};
export default PsyHome;
