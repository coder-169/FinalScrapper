import React, { useEffect, useState } from "react";
import { BsRobot, BsClock, BsFilePdfFill } from "react-icons/bs";
import { BsFiletypeJson, BsFiletypeCsv, BsFiletypePdf } from "react-icons/bs";
import Loader from "./Loader";
import { useRouter } from "next/navigation";

const JobCard = ({ id }) => {
  const [loading, setLoading] = useState({ loader: false, id: "" });
  const [job, setJob] = useState({});
  const convertToCSV = (data) => {
    const header = Object.keys(data[0]).join(",") + "\n";
    const rows = data.map((obj) => Object.values(obj).join(",")).join("\n");
    return header + rows;
  };
  const formatTime = () => {
    const timestamp = 1694615184 * 1000; // Convert seconds to milliseconds
    const date = new Date(timestamp);

    // Extract the date components
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // Create a formatted date and time string
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  };

  const downloadCsv = async () => {
    setLoading({ loader: true, id: id });
    // Replace this with your function that fetches the data
    let data = await getJobDetails();
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "data.csv";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    setLoading({ loader: false, id: "" });
  };

  const downloadJson = async () => {
    setLoading({ loader: true, id: id });
    let data = await getJobDetails();
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    setLoading({ loader: false, id: "" });
  };
  const router = useRouter();
  const downloadPdf = () => {
    router.push(`/resume/${id}`);
    // console.log("downloading csv");
  };
  const getJobDetails = async () => {
    // setLoading(true);
    const res = await fetch(`/api/job`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        id,
      },
    });
    const d = await res.json();
    return d.data;
  };
  const getJob = async () => {
    // setLoading(true);
    try {
      const res = await fetch(`/api/job`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
          data: true,
        },
      });
      const d = await res.json();
      if (d.success) {
        setJob(d.job);
      }
    } catch (error) {
      alert(error.message);
    }
    // return d.data;
  };
  useEffect(() => {
    getJob();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading.loader && loading.id === id ? (
    <Loader text={"downloading data wait please..."} />
  ) : (
    job && (
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="shadow-lg p-6 rounded-lg">
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
            {job?.name?.slice(0, 20)}
          </h2>
          <div className="mb-2">
            {job?.state === "completed" ? (
              <span className="text-xs bg-green-400 text-white rounded-full p-1">
                {job?.state}{" "}
              </span>
            ) : (
              <span className="text-sm bg-yellow-500">{job?.state} </span>
            )}
          </div>
          <div className="flex gap-2 items-center my-4">
            <BsRobot />
            <p className="leading-relaxed text-sm">Bot: {job?.bot?.name}</p>
          </div>
          <div className="flex gap-1 items-center my-4">
            <BsClock />
            <p className="leading-relaxed text-sm">Created: {formatTime(job?.created_at)}.</p>
          </div>
          <div className="border-t border-gray-100 items-center justify-between my-4 pt-4 flex gap-2">
            <span>Download</span>
            <div className="flex gap-2 items-center">
              <button>
                <BsFiletypeCsv
                  onClick={downloadCsv}
                  className="text-xl text-green-500"
                />
              </button>
              <button>
                <BsFiletypePdf
                  onClick={downloadPdf}
                  className="text-xl text-red-500"
                />
              </button>
              <button>
                <BsFiletypeJson
                  onClick={downloadJson}
                  className="text-xl text-yellow-500"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default JobCard;
