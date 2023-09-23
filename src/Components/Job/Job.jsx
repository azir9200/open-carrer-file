import { MdLocationOn } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, location, salary, remote_or_onsite, } = job;
  // console.log(job?.logo);
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure><img src={logo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{job_title} </h2>
        <p> {company_name} </p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7e90ef]" >{remote_or_onsite} </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7e90ef]" >{remote_or_onsite} </button>
        </div>
        <div className="flex gap-2" >
          <h2 className="flex" >  <MdLocationOn className="text-2xl" ></MdLocationOn> {location} </h2>
          <h2 className="flex" > <HiCurrencyDollar className="text-2xl" ></HiCurrencyDollar> Salary: {salary} </h2>
        </div>
        <div>
          <Link to={`/job/${id}`} >
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  px-6 py-2 rounded-md  text-center">View Details</button>
          </Link>


        </div>
      </div>
    </div>
  );
};

export default Job;