import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



const ReedMore = () => {
    const read = useLoaderData();
    const { name, photo, author, description } = read;
    const [loader, setLoader] = useState(false);

    const downloadPDF = () =>{
        const capture = document.querySelector('.hero');
        setLoader(true);
        html2canvas(capture).then((canvas)=>{
          const imgData = canvas.toDataURL("img");
          const doc = new jsPDF('p', 'mm', 'a4');
          const componentWidth = doc.internal.pageSize.getWidth();
          const componentHeight = doc.internal.pageSize.getHeight();
          doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
          setLoader(false);
          doc.save(`${name}.pdf`);
        })
      }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <h1 className="text-5xl font-bold">{author}</h1>
                    <p className="py-6">{description}</p>

                    <div className="btn btn-primary">
                        <button className="receipt-modal-download-button"
                            onClick={downloadPDF}
                            disabled={!(loader === false)}
                        >
                            {loader ? (
                                <span>Downloading</span>
                            ) : (
                                <span>Download</span>
                            )}</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ReedMore;
