


import axios from "axios";

const BASE_URL = "https://pg-backend-87c6.onrender.com";

const downloadFile = async (path, downloadAsName) => {
  try {
    const response = await axios.get(`${BASE_URL}${path}`, {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, //download option when we click 
      },
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", downloadAsName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Error downloading file:", error);
    alert("Download failed. Check console for details.");
  }
};

export default downloadFile;
