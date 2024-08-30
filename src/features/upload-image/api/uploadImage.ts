export const uploadImage = async (image: File) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/upload`, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
  